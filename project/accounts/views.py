from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from accounts.models import Profile
from accounts.serializers import UserProfileSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

# Create your views here.


class ProfileListCreateAPIView(ListCreateAPIView):
    serializer_class = UserProfileSerializer
    # queryset = Profile.objects.all()

    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)

    def get_object(self):
        queryset = self.get_queryset()
        obj = generics.get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj  

class ProfileRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    # queryset = Profile.objects.all()   
    serializer_class = UserProfileSerializer
    
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user=user)     