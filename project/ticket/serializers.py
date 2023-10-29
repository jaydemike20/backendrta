from rest_framework import serializers
from ticket.models  import TrafficTicket, Driver
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from accounts.serializers import CustomUserSerializer

User = get_user_model()


class DriverSerializer(serializers.ModelSerializer):
    birthday = serializers.DateField(format='%Y-%m-%d')

    class Meta:
        model = Driver
        fields = '__all__'

class TrafficTicketSerializers(serializers.ModelSerializer):
    officer = CustomUserSerializer(read_only=True)

    class Meta:
        model = TrafficTicket
        fields = '__all__'
        read_only_fields = ('officer',)  # It should be a tuple
