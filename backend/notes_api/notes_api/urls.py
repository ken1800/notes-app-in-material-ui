from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/notes/', include('notes.urls')),
    path('api-auth/', include('rest_auth.urls')),
    path('api-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
]
 
# path('api/users/', include('users.urls')),