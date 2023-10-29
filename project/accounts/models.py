from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

# table for profile of rta officer
def profile_pic_upload_path(instance, filename):
    # Construct the upload path dynamically
    return f"profile_pics/{filename}".format(filename=filename)    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profilepic = models.ImageField(upload_to='profile_pics/', default='static/picture/user.png', null=True, blank=True)
    birthdate = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return str(self.user)
