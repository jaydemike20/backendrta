from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

# driver
class Driver(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    email = models.EmailField(blank=True)
    mobile_number = models.CharField(max_length=20)
    gender = models.CharField(max_length=20)
    status = models.CharField(max_length=50)
    nationality = models.CharField(max_length=100)
    license_number = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return f'{self.id}'


class Violation(models.Model):
    violation_type = models.CharField(max_length=255)
    fine_amount = models.DecimalField(max_digits=8, decimal_places=2)
    remarks = models.TextField(blank=True)
    traffic_ticket = models.ForeignKey('TrafficTicket', on_delete=models.CASCADE)


class TrafficTicket(models.Model):
    issued_date = models.DateField(auto_now_add=True, auto_now=False)
    issued_time = models.TimeField(auto_now_add=True, auto_now=False)
    location = models.CharField(max_length=255)
    officer = models.ForeignKey(User, on_delete=models.CASCADE)
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    violations = models.ManyToManyField(Violation, blank=True)
    
    def __str__(self) -> str:
        return f'{self.id}'