import graphene
from django.db.models import Q
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from api.permissions import login_required, IsTeamMember
from .models import Item, Project, ProjectItem, ShoppingList, Store, StoreSection


class ItemNode(IsTeamMember, DjangoObjectType):
    class Meta:
        model = Item
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'uid': ['exact'],
            'name': ['exact', 'icontains', 'istartswith'],
            'team': ['exact'],
        }
        convert_choices_to_enum = False


class ProjectNode(IsTeamMember, DjangoObjectType):
    class Meta:
        model = Project
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'uid': ['exact'],
            'name': ['exact', 'icontains', 'istartswith'],
            'url': ['exact', 'icontains', 'istartswith'],
            'team': ['exact'],
        }
        convert_choices_to_enum = False


class ProjectItemNode(DjangoObjectType):
    class Meta:
        model = ProjectItem
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'uid': ['exact'],
            'project': ['exact'],
            'item': ['exact'],
            'shopping_list': ['exact'],
            'is_checked': ['exact'],
        }
        convert_choices_to_enum = False

    @classmethod
    @login_required
    def get_queryset(cls, queryset, info):
        return queryset.filter(project__team__members=info.context.user)


class ShoppingListNode(IsTeamMember, DjangoObjectType):
    class Meta:
        model = ShoppingList
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'uid': ['exact'],
            'name': ['exact', 'icontains', 'istartswith'],
            'team': ['exact'],
        }
        convert_choices_to_enum = False


class StoreNode(IsTeamMember, DjangoObjectType):
    class Meta:
        model = Store
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'uid': ['exact'],
            'name': ['exact', 'icontains', 'istartswith'],
        }
        convert_choices_to_enum = False


class StoreSectionNode(DjangoObjectType):
    class Meta:
        model = StoreSection
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'uid': ['exact'],
            'name': ['exact', 'icontains', 'istartswith'],
            'store': ['exact'],
        }
        convert_choices_to_enum = False

    @classmethod
    @login_required
    def get_queryset(cls, queryset, info):
        return queryset.filter(store__team__members=info.context.user)


class CreateItem(graphene.relay.ClientIDMutation):
    item = graphene.Field(ItemNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        item = Item.objects.create(**input)

        return CreateItem(item=item)


class UpdateItem(graphene.relay.ClientIDMutation):
    class Input:
        uid = graphene.UUID(required=True)
        name = graphene.String(required=False)
        substitutions = graphene.List(graphene.UUID, required=False)

    item = graphene.Field(ItemNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        item = Item.objects.get(uid=input.get('uid'))

        for k, v in input.items():
            if k == 'uid':
                continue

            setattr(item, k, v)

        item.save()
        return UpdateItem(item=item)


class CreateStore(graphene.relay.ClientIDMutation):
    store = graphene.Field(StoreNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        store = Store.objects.create(**input)

        return CreateStore(store=store)


class UpdateStore(graphene.relay.ClientIDMutation):
    class Input:
        uid = graphene.UUID(required=True)
        name = graphene.String(required=False)
        url = graphene.String(required=False)

    store = graphene.Field(StoreNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        store = Store.objects.get(uid=input.get('uid'))

        for k, v in input.items():
            if k == 'uid':
                continue

            setattr(store, k, v)

        store.save()
        return UpdateStore(store=store)


class CreateStoreSection(graphene.relay.ClientIDMutation):
    store_section = graphene.Field(StoreSectionNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        store_section = StoreSection.objects.create(**input)

        return CreateStoreSection(store_section=store_section)


class UpdateStoreSection(graphene.relay.ClientIDMutation):
    class Input:
        uid = graphene.UUID(required=True)
        name = graphene.String(required=False)

    store_section = graphene.Field(StoreSectionNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        store_section = StoreSection.objects.get(uid=input.get('uid'))

        for k, v in input.items():
            if k == 'uid':
                continue

            setattr(store_section, k, v)

        store_section.save()
        return UpdateStoreSection(store_section=store_section)


class CreateShoppingList(graphene.relay.ClientIDMutation):
    shopping_list = graphene.Field(ShoppingListNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        shopping_list = ShoppingList.objects.create(**input)

        return CreateShoppingList(shopping_list=shopping_list)


class UpdateShoppingList(graphene.relay.ClientIDMutation):
    class Input:
        uid = graphene.UUID(required=True)
        name = graphene.String(required=False)

    shopping_list = graphene.Field(ShoppingListNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        shopping_list = ShoppingList.objects.get(uid=input.get('uid'))

        for k, v in input.items():
            if k == 'uid':
                continue

            setattr(shopping_list, k, v)

        shopping_list.save()
        return UpdateShoppingList(shopping_list=shopping_list)


class CreateProject(graphene.relay.ClientIDMutation):
    project = graphene.Field(ProjectNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        project = Project.objects.create(**input)

        return CreateProject(project=project)


class UpdateProject(graphene.relay.ClientIDMutation):
    class Input:
        uid = graphene.UUID(required=True)
        name = graphene.String(required=False)
        url = graphene.String(required=False)

    project = graphene.Field(ProjectNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        project = Project.objects.get(uid=input.get('uid'))

        for k, v in input.items():
            if k == 'uid':
                continue

            setattr(project, k, v)

        project.save()
        return UpdateProject(project=project)


class CreateProjectItem(graphene.relay.ClientIDMutation):
    project_item = graphene.Field(ProjectItemNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        project_item = ProjectItem.objects.create(**input)

        return CreateProjectItem(project_item=project_item)


class UpdateProjectItem(graphene.relay.ClientIDMutation):
    class Input:
        uid = graphene.UUID(required=True)
        is_checked = graphene.Boolean(required=False)
        quantity = graphene.Int(required=False)

    project_item = graphene.Field(ProjectItemNode)

    @classmethod
    @login_required
    def mutate_and_get_payload(cls, root, info, **input):
        project_item = ProjectItem.objects.get(uid=input.get('uid'))

        for k, v in input.items():
            if k == 'uid':
                continue

            setattr(project_item, k, v)

        project_item.save()
        return UpdateProjectItem(project_item=project_item)


class CoreQuery(graphene.ObjectType):
    item = graphene.relay.Node.Field(ItemNode)
    items = DjangoFilterConnectionField(ItemNode)

    store = graphene.relay.Node.Field(StoreNode)
    stores = DjangoFilterConnectionField(StoreNode)

    store_section = graphene.relay.Node.Field(StoreSectionNode)
    store_sections = DjangoFilterConnectionField(StoreSectionNode)

    shopping_list = graphene.relay.Node.Field(ShoppingListNode)
    shopping_lists = DjangoFilterConnectionField(ShoppingListNode)

    project = graphene.relay.Node.Field(ProjectNode)
    projects = DjangoFilterConnectionField(ProjectNode)

    project_item = graphene.relay.Node.Field(ProjectItemNode)
    project_items = DjangoFilterConnectionField(ProjectItemNode)


class CoreMutation(graphene.ObjectType):
    create_item = CreateItem.Field()
    update_item = UpdateItem.Field()

    create_store = CreateStore.Field()
    update_store = UpdateStore.Field()

    create_store_section = CreateStoreSection.Field()
    update_store_section = UpdateStoreSection.Field()

    create_shopping_list = CreateShoppingList.Field()
    update_shopping_list = UpdateShoppingList.Field()

    create_project = CreateProject.Field()
    update_project = UpdateProject.Field()

    create_project_item = CreateProjectItem.Field()
    update_project_item = UpdateProjectItem.Field()
