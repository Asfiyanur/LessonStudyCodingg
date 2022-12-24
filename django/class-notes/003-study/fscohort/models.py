from django.db import models

# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=40)
    number = models.PositiveSmallIntegerField(blank=True, null=True)
    # about = models.TextField(blank=True)
    # email = models.EmailField(blank=True)
    # is_active = models.BooleanField(default=True)
    # avatar = models.ImageField(blank=True, null=True, upload_to='student')
    # # files = models.FileField(blank=True, null=True, upload_to='student_files')
    # register_date = models.DateTimeField(auto_now_add=True)
    # update_date = models.DateTimeField(auto_now=True)
