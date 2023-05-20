# Generated by Django 4.1.7 on 2023-05-18 14:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='profilepic',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='profile_pics'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(max_length=10),
        ),
    ]