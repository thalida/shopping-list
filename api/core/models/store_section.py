import uuid
from django.db import models
from .store import Store
from .item import Item


class StoreSection(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=255)
    store = models.ForeignKey(
        Store,
        on_delete=models.CASCADE,
        related_name='sections'
    )
    items = models.ManyToManyField(
        Item,
        related_name='store_sections'
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                models.functions.Lower('name'),
                name='store_section_name_unique'
            ),
            models.UniqueConstraint(
                fields=['name', 'store'],
                condition=models.Q(store__isnull=False),
                name='store_section_name_store_unique'
            ),
        ]
