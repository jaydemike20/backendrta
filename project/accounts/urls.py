from django.urls import path, include
from accounts.views import ProfileListCreateAPIView, ProfileRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('profile/', ProfileListCreateAPIView.as_view(), name="profile-list" ),
    path('profile/<int:pk>/', ProfileRetrieveUpdateDestroyAPIView.as_view(), name="profile-details" )
]