from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from ticket.serializers import TrafficTicketSerializers, DriverSerializer
from ticket.models import TrafficTicket, Driver
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

# Create your views here.

class TrafficTicketListCreateAPIView(ListCreateAPIView):
    serializer_class = TrafficTicketSerializers
    # permission_classes = [IsAuthenticated]
    queryset = TrafficTicket.objects.all()

    # def get_queryset(self):
    #     # Filter traffic tickets based on the logged-in officer
    #     return TrafficTicket.objects.filter(officer=self.request.user)

    def perform_create(self, serializer):
        # Set the officer as the current authenticated user
        serializer.save(officer=self.request.user)

class TrafficTicketRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = TrafficTicketSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Return all traffic tickets
        return TrafficTicket.objects.all()


class DriverListCreateAPIView(ListCreateAPIView):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all()
    permission_classes = [IsAuthenticated]

class DriverRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
