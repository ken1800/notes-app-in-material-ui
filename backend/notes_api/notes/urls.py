from django.urls import path, include
from . import views

urlpatterns = [
    path('my-notes/', views.my_notes),
    path('private/', views.private_notes),
    path('bookmarks/', views.bookmarked_notes),
    path('removed/', views.removed),
    path('add/', views.add_note),
    path('search/<int:keyword>', views.search_notes),
    path('bookmarks/add/<int:slug>', views.bookmark_add),
    path('bookmarks/remove/<int:slug>', views.bookmark_remove),
    path('<int:slug>/', views.notes_description),
    path('<int:slug>/edit', views.edit_note),
    path('<int:slug>/remove/', views.remove_note),
    path('<int:slug>/remove/undo', views.undo_remove_note),
    path('', views.notes_list)
]
