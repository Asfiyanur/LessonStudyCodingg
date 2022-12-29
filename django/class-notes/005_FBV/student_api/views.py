from django.shortcuts import render, HttpResponse, get_object_or_404

from .models import Student, Path

from .serializers import StudentSerializer, PathSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


def home(request):
    return Response({'home':'This is home page..'})


@api_view(['GET'])
def students_list(request):
    students = Student.objects.all()
    # print(students)
    serializer = StudentSerializer(students, many=True)
    # print(serializer)
    # print(serializer.data)
    return Response(serializer.data)


@api_view(['POST'])
def student_create(request):
    serializer= StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        message ={
            'message':f'Student updated...'
        }
        return Response(message,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)