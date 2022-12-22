from django.db import models

# Create your models here.

class Student(models.Model):
    fist_name =models.CharField(max_length=30)
    last_name =models.CharField(max_length=30)
    number = models.PositiveSmallIntegerField(blank=True)
    
    
    def __str__(self):
        return f'{self.number} - {self.first_name} {self.last_name}'
    
    class Meta:
        ordering = ('number')