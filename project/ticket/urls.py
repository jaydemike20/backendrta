from django.urls import path
from ticket.views import TrafficTicketListCreateAPIView, TrafficTicketRetrieveUpdateDestroyAPIView, DriverListCreateAPIView, DriverRetrieveUpdateDestroyAPIView


urlpatterns = [
    path('traffictickets/', TrafficTicketListCreateAPIView.as_view(), name="Traffic-List"),
    path('traffictickets/<int:pk>/', TrafficTicketRetrieveUpdateDestroyAPIView.as_view(), name="Traffic-details"),
    path('drivers/', DriverListCreateAPIView.as_view(), name="Driver-List"),
    path('drivers/<str:pk>/', DriverRetrieveUpdateDestroyAPIView.as_view(), name="drivers-details"),

]