from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class Notes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    body = models.TextField()
    slug = models.SlugField(unique=True, blank=True, null=True)
    public = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = self._get_unique_slug()
        super().save(*args, **kwargs)

    def _get_unique_slug(self):
        slug = slugify(self.title)
        unique_slug = slug
        num = 1
        while Notes.objects.filter(slug=unique_slug).exists():
            unique_slug = '{}-{}'.format(slug, num)
            num += 1
        slug = unique_slug
        return slug
