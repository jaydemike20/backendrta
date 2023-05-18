from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from accounts.models import Profile
from accounts.serializers import UserProfileSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class ProfileListCreateAPIView(ListCreateAPIView):
    serializer_class = UserProfileSerializer
    queryset = Profile.objects.all()

    # permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    # def get_queryset(self):
    #     user = self.request.user
    #     return Profile.objects.filter(user=user)

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)    

class ProfileRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    serializer_class = UserProfileSerializer
    queryset = Profile.objects.all()   

    # serializer_class = UserProfileSerializer
    # permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    # def get_queryset(self):
    #     user = self.request.user
    #     return Profile.objects.filter(user=user)     