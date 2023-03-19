from django.contrib import admin

from users.models import User, Team

admin.site.register(User)
admin.site.register(Team)
