import uuid
from django.db import models
from django.dispatch import receiver
from .user import User


class Team(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=255)
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='owned_teams'
    )
    members = models.ManyToManyField(
        User,
        related_name='teams',
    )


@receiver(models.signals.post_save, sender=User)
def save_from_user(sender, instance, created, **kwargs):
    if not created:
        return

    team = Team.objects.create(
        name=f"{instance.username}'s Team",
        owner=instance
    )

    team.members.add(instance)

    team.save()
