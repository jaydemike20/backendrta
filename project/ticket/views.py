from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from ticket.serializers import TrafficTicketSerializers, DriverSerializer
from ticket.models import TrafficTicket, Driver
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

# Create your views here.

class TrafficTicketListCreateAPIView(ListCreateAPIView):
    serializer_class = TrafficTicketSerializers
    # queryset = TrafficTicket.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Return only the tickets issued by the current user
        return TrafficTicket.objects.filter(officer=self.request.user)

    def perform_create(self, serializer):
        serializer.save(officer=self.request.user)


class TrafficTicketRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = TrafficTicketSerializers
    # queryset = TrafficTicket.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Return only the ticket if it was issued by the current user
        return TrafficTicket.objects.filter(id=self.kwargs['pk'], officer=self.request.user)



class DriverListCreateAPIView(ListCreateAPIView):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all()
    permission_classes = [IsAuthenticated]

class DriverRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    serializer_class = DriverSerializer
    queryset = Driver.objects.all()   
    permission_classes = [IsAuthenticatedOrReadOnly]
