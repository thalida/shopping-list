import graphene
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

import graphql_jwt
from social_django.utils import load_strategy, load_backend

from api.permissions import IsAuthenticated, IsTeamMember, login_required
from .models import User, Team


class UserNode(IsAuthenticated, DjangoObjectType):
    class Meta():
        model = User
        interfaces = (graphene.relay.Node, )
        filter_fields = ["uid", "username"]
        exclude = ["email", "password"]


class TeamNode(IsAuthenticated, DjangoObjectType):
    class Meta():
        model = Team
        interfaces = (graphene.relay.Node, )
        filter_fields = ["uid", "name"]

    @classmethod
    @login_required
    def get_queryset(cls, queryset, info):
        return queryset.filter(members=info.context.user)


class RegisterFromSocial(graphene.relay.ClientIDMutation):
    class Input:
        access_token = graphene.String(required=True)
        social_backend = graphene.String(required=True)

    user = graphene.Field(UserNode)
    token = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        social_strategy = load_strategy()
        social_backend = load_backend(
            social_strategy,
            input['social_backend'],
            redirect_uri=None
        )
        user = social_backend.do_auth(input['access_token'])
        payload = graphql_jwt.utils.jwt_payload(user)
        token = graphql_jwt.utils.jwt_encode(payload)

        return RegisterFromSocial(user=user, token=token)


class CreateTeam(graphene.relay.ClientIDMutation):
    team = graphene.Field(TeamNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        team = Team.objects.create(
            **input,
            owner=info.context.user
        )
        team.members.add(info.context.user)

        return CreateTeam(team=team)


class UpdateTeam(graphene.relay.ClientIDMutation):
    class Input:
        uid = graphene.UUID(required=True)
        name = graphene.String(required=False)

    team = graphene.Field(TeamNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        team = Team.objects.get(uid=input['uid'])
        team.name = input['name']
        team.save()

        return UpdateTeam(team=team)


class UserQuery(graphene.ObjectType):
    user = graphene.relay.Node.Field(UserNode)
    me = graphene.Field(UserNode)

    team = graphene.relay.Node.Field(TeamNode)
    teams = DjangoFilterConnectionField(TeamNode)

    def resolve_me(self, info):
        if info.context.user.is_anonymous:
            raise Exception('403: Unauthorized')

        return info.context.user


class UserMutation(graphene.ObjectType):
    token_auth = graphql_jwt.relay.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.relay.Verify.Field()
    refresh_token = graphql_jwt.relay.Refresh.Field()
    revoke_token = graphql_jwt.relay.Revoke.Field()
    register_social = RegisterFromSocial.Field()

    create_team = CreateTeam.Field()
    update_team = UpdateTeam.Field()
