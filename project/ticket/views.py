from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from ticket.models import Driver, Violation, TrafficTicket
from ticket.serializers import DriverSerializer, ViolationSerializer, TrafficTicketSerializer

from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

# Create your views here.
class DriverListCreateAPIView(ListCreateAPIView):


    serializer_class = DriverSerializer
    queryset = Driver.objects.all()

class DriverRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    serializer_class = DriverSerializer
    queryset = Driver.objects.all()

class ViolationListCreateAPIView(ListCreateAPIView):
    serializer_class = ViolationSerializer
    queryset = Violation.objects.all()


class ViolationRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = ViolationSerializer
    queryset = Violation.objects.all()    

class TrafficTicketListCreateAPIView(ListCreateAPIView):
    serializer_class = TrafficTicketSerializer
    queryset = TrafficTicket.objects.all()

class TrafficTicketRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    
    serializer_class = TrafficTicketSerializer
    queryset = TrafficTicket.objects.all()