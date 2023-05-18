from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from ticket.serializers import TrafficTicketSerializers, DriverSerializer
from ticket.models import TrafficTicket, Driver
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

# Create your views here.

class TrafficTicketListCreateAPIView(ListCreateAPIView):
    serializer_class = TrafficTicketSerializers
    queryset = TrafficTicket.objects.all()
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(officer=self.request.user)


class TrafficTicketRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = TrafficTicketSerializers
    queryset = TrafficTicket.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]


class DriverListCreateAPIView(ListCreateAPIView):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all()

    # permission_classes = [IsAuthenticated]

class DriverRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    serializer_class = DriverSerializer
    queryset = Driver.objects.all()   
    permission_classes = [IsAuthenticatedOrReadOnly]     