from django.urls import path
from ticket.views import DriverListCreateAPIView, DriverRetrieveUpdateDestroyAPIView, TrafficTicketListCreateAPIView, TrafficTicketRetrieveUpdateDestroyAPIView, ViolationListCreateAPIView, ViolationRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('drivers/', DriverListCreateAPIView.as_view(), name='driver-list'),
    path('drivers/<int:pk>/', DriverRetrieveUpdateDestroyAPIView.as_view(), name='driver-retrieve'),
    path('traffictickets/', TrafficTicketListCreateAPIView.as_view(), name='trafficticket-list'),
    path('traffictickets/<int:pk>/', TrafficTicketRetrieveUpdateDestroyAPIView.as_view(), name='trafficticket-retrieve'),
    path('violations/', ViolationListCreateAPIView.as_view(), name='violations-list'),
    path('violations/<int:pk>/', ViolationRetrieveUpdateDestroyAPIView.as_view(), name='violations-retrieve'),             
]