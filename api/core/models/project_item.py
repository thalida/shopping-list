import uuid
from django.db import models
from .project import Project
from .item import Item
from .shopping_list import ShoppingList


class ProjectItem(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_checked = models.BooleanField(default=False)
    quantity = models.PositiveIntegerField(default=1)

    item = models.ForeignKey(
        Item,
        on_delete=models.CASCADE,
    )
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
    )
    shopping_list = models.ForeignKey(
        ShoppingList,
        on_delete=models.CASCADE,
    )
