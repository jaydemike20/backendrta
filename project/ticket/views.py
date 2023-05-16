from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from ticket.models import Driver, Violation, TrafficTicket
from ticket.serializers import DriverSerializer, ViolationSerializer, TrafficTicketSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly, BasePermission


# Create your views here.
# Custom permission to restrict access to ticket issuer only
class IsTicketIssuer(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Allow access if the user is the ticket issuer
        return obj.officer == request.user

class DriverListCreateAPIView(ListCreateAPIView):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all()
    # permission_classes = [IsAuthenticatedOrReadOnly]

class DriverRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    serializer_class = DriverSerializer
    queryset = Driver.objects.all()
    # permission_classes = [IsAuthenticatedOrReadOnly]


class ViolationListCreateAPIView(ListCreateAPIView):
    serializer_class = ViolationSerializer
    queryset = Violation.objects.all()
    # permission_classes = [IsAuthenticatedOrReadOnly]


class ViolationRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = ViolationSerializer
    queryset = Violation.objects.all()    
    # permission_classes = [IsAuthenticatedOrReadOnly]

class TrafficTicketListCreateAPIView(ListCreateAPIView):
    serializer_class = TrafficTicketSerializer
    queryset = TrafficTicket.objects.all()
    # permission_classes = [IsAuthenticatedOrReadOnly]

    # def perform_create(self, serializer):
    #     serializer.save(officer=self.request.user)      

class TrafficTicketRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = TrafficTicketSerializer
    queryset = TrafficTicket.objects.all()
    # permission_classes = [IsAuthenticatedOrReadOnly, IsTicketIssuer]