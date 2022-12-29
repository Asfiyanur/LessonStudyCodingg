from django.http import HttpResponse

def real_home(request):
    return HttpResponse('this main page')