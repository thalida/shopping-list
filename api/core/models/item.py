import uuid
from django.db import models
from users.models import Team


class Item(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=255)
    substitutions = models.ManyToManyField(
        'self',
        symmetrical=False,
        related_name='substitutes'
    )
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                models.functions.Lower('name'),
                name='item_name_unique'
            ),
        ]
