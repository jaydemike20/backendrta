# Generated by Django 4.1.7 on 2023-05-21 16:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0003_alter_driver_license_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='driver',
            name='birthday',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
