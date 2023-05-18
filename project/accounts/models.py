from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

# table for profile of rta officer
def profile_pic_upload_path(instance, filename):
    # Construct the upload path dynamically
    return f"profile_pics/{instance.User.id}/{filename}"    

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profilepic = models.ImageField(upload_to='profile_pics')
    birthdate = models.DateField()
    gender = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'
    

