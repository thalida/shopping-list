import uuid
from django.db import models
from users.models import Team


class ShoppingList(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=255)
    team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name="shopping_lists"
    )
