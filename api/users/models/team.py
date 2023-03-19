import uuid
from django.db import models


class Team(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=255)
    owner = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        related_name='owned_teams'
    )
