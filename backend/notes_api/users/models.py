from django.db import models
from notes.models import Notes
from django.contrib.auth.models import User
from PIL import Image


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_img = models.ImageField(
        upload_to="profile_images", null=True, blank=True)
    bookmarks = models.ManyToManyField(Notes)

    def __str__(self):
        return f"{self.user.username} profile"
