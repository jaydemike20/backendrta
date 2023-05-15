from rest_framework import serializers
from ticket.models import Driver, Violation, TrafficTicket

class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = '__all__'

    def clean_user_data(self, validated_data):
        return {
            'first_name' : validated_data.get('first_name', ''),
            'last_name' : validated_data.get('last_name', ''),            
            'address' : validated_data.get('address', ''),
            'email' : validated_data.get('email', ''),
            'mobile_number' : validated_data.get('mobile_number', ''),
            'gender' : validated_data.get('gender', ''),            
            'status' : validated_data.get('status', ''),
            'nationality' : validated_data.get('nationality', ''),
            'license_number' : validated_data.get('license_number', ''),            
        }

class ViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Violation
        fields = '__all__'


class TrafficTicketSerializer(serializers.ModelSerializer):
    violations = ViolationSerializer(many=True, read_only=True)

    class Meta:
        model = TrafficTicket
        fields = '__all__'

 