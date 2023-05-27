from django.contrib import admin
from ticket.models import Driver, TrafficTicket

# Register your models here.

admin.site.register(Driver)
admin.site.register(TrafficTicket)