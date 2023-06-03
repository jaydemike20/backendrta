from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from accounts.models import Profile
from accounts.serializers import UserProfileSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

# Create your views here.


class ProfileListCreateAPIView(ListCreateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        user = self.request.user
        queryset = Profile.objects.filter(user=user)
        return queryset

class ProfileRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Profile.objects.filter(user=user)
        return queryset