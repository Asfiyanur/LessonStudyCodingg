# from django.db import models

# # Create your models here.

# class Student(models.Model):
#     first_name =models.CharField(max_lenght=50)
#     last_name =models.CharField(max_lenght=50)
#     number = models.IntegerField(default=13)
#     about =models.TextField(blank=True,null=True)
#     register = models.DateTimeField(auto_now_add=True)
#     last_updated_date = models.DateTimeField(auto_now=True)
#     is_active = models.BooleanField()
    
    
from django.db import models

# Create your models here.


class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField(default=1111)
    about = models.TextField(blank=True, null=True)
    # auto_now_add: take the creation date and time
    register = models.DateTimeField(auto_now_add=True)
    # auto_now: take the update date and time
    last_updated_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField()
    
    def __str__(self):
        return f'{self.number}  {self.first_name} '  
    
    class Meta :
        ordering =['number']
        verbose_name_plural = 'student_list'
    

