from rest_framework import serializers
from ticket.models  import TrafficTicket, Driver
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

User = get_user_model()


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = '__all__'

class TrafficTicketSerializers(serializers.ModelSerializer):
    class Meta:
        model = TrafficTicket
        exclude = ['officer',]