# Generated by Django 2.2.4 on 2020-01-17 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]
