from rest_framework import serializers
from ticket.models import Driver, Violation, TrafficTicket
from django.contrib.auth import get_user_model

User = get_user_model()

class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = '__all__'

    def clean_user_data(self, validated_data):
        return {
            'first_name': validated_data.get('first_name', ''),
            'last_name': validated_data.get('last_name', ''),
            'address': validated_data.get('address', ''),
            'email': validated_data.get('email', ''),
            'mobile_number': validated_data.get('mobile_number', ''),
            'gender': validated_data.get('gender', ''),
            'status': validated_data.get('status', ''),
            'nationality': validated_data.get('nationality', ''),
            'license_number': validated_data.get('license_number', ''),
        }
    

class ViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Violation
        fields = '__all__'


class TrafficTicketSerializer(serializers.ModelSerializer):
    violations = ViolationSerializer(many=True, read_only=True)
    officer = serializers.EmailField(write_only=True)
    driver = serializers.CharField(write_only=True)

    class Meta:
        model = TrafficTicket
        fields = '__all__'

    def create(self, validated_data):
        violations_data = validated_data.pop('violations', [])
        officer_email = validated_data.pop('officer', None)
        driver_data = validated_data.pop('driver')

        officer = None
        driver = None

        if officer_email:
            try:
                officer = User.objects.get(email=officer_email)
            except User.DoesNotExist:
                raise serializers.ValidationError('Invalid officer email')
            
        if driver_data:
            try:
                driver = Driver.objects.get(license_number=driver_data)
            except User.DoesNotExist:
                raise serializers.ValidationError('Invalid driver license')        

        # if driver_data:
        #     driver_serializer = DriverSerializer(data=driver_data)
        #     driver_serializer.is_valid(raise_exception=True)
        #     driver = driver_serializer.save()

        if not driver:
            raise serializers.ValidationError('Driver not exists')

        traffic_ticket = TrafficTicket.objects.create(driver=driver, officer=officer, **validated_data)

        for violation_data in violations_data:
            violation = Violation.objects.create(traffic_ticket=traffic_ticket, **violation_data)

        return traffic_ticket
