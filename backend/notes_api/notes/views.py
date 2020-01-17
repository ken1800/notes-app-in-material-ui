from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import (
    api_view, authentication_classes, permission_classes)
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from rest_framework import status
from notes.models import Notes
from notes.serializers import NoteSerializer
from users.models import Profile

from django.db.models import Q


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def my_notes(request):
    notes = Notes.objects.filter(Q(user=request.user) & Q(active=True))
    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def private_notes(request):
    notes = Notes.objects.filter(
        Q(user=request.user) & Q(public=False) & Q(active=True))

    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def bookmarked_notes(request):
    notes = Profile.objects.get(user=request.user).bookmarks.objects.all()

    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def removed(request):
    notes = Notes.objects.filter(Q(user=request.user) & Q(active=False))
    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def add_note(request):
    if request.method == "POST":
        title = request.data.get('title')
        body = request.data.get('body')
        public = request.data.get('public')

        Notes.objects.create(
            user=request.user,
            title=title,
            body=body,
            public=public
        )

        return Response(status=status.HTTP_201_CREATED)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def bookmark_add(request, slug):
    note = Notes.objects.get(slug=slug)
    if note.active == False:
        return Response(status=status.HTTP_404_NOT_FOUND)
    profile = Profile.objects.get(user=request.user)
    profile.bookmarks.add(note)
    profiel.save()

    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def bookmark_remove(request, slug):
    note = Notes.objects.get(slug=slug)
    profile = Profile.objects.get(user=request.user)
    profile.bookmarks.remove(note)

    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def notes_description(request, slug):
    note = Note.objects.get(slug=slug)
    if note.active == False:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = NoteSerializer(note, many=False)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PATCH'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def edit_note(request, slug):
    note = Notes.objects.get(Q(user=request.user) & Q(slug=slug))
    if note.active == False:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = NoteSerializer(note, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def remove_note(request, slug):
    note = Notes.objects.get(Q(user=request.user) & Q(slug=slug))
    note.active = False

    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def undo_remove_note(request, slug):
    note = Notes.objects.get(Q(user=request.user) & Q(slug=slug))
    note.active = True

    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
def notes_list(request):
    notes = Notes.objects.all().order_by('-created_on')[:40]
    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def search_notes(request, keyword):
    notes = Notes.objects.filter(
        Q(title__icontains=keyword) | Q(body__icontains=keyword))

    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
