from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

# table for profile of rta officer

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    birthdate = models.DateField()
    gender = models.CharField(max_length=6)


