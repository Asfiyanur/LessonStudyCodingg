from django.urls import path
from .views2 import home 

urlpatterns = [
    path("", home),
] 