import uuid
from django.db import models
from users.models import Team
from .item import Item


class Project(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=255)
    url = models.URLField(max_length=255)

    items = models.ManyToManyField(Item, through='core.ProjectItem')

    team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name="projects"
    )
