from django.shortcuts import render
from .models import Tutorial
from .serializers import TutorialSerializer
from rest_framework.viewsets import ModelViewSet


# Create your views here.


class Tutorials(ModelViewSet):
    
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer