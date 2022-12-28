from django.db import models

# Create your models here.


class Tutorial(models.Model):
    
    PRIORTY =(
        (1,'High'),
        (2,'Medium'),
        (3,'Low')
    )
    
    title = models.CharField(max_length=50)
    decription =models.CharField(max_length=100)
    priorty = models.SmallIntegerField(choices= PRIORTY,default=3)
    is_done =models.BooleanField(default=False)
    created_date =models.DateTimeField(auto_now_add=True)
    updated_date =models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return self.title
