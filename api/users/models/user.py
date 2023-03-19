import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver


class User(AbstractUser):
    uid = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    email = models.EmailField(
        blank=False,
        max_length=254,
        verbose_name="email address"
    )

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
