from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Notes

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name')

class NoteSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Notes
        fields = "__all__"