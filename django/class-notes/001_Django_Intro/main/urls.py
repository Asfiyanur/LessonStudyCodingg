"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
# from fscohort.views import homefs
# from dscohort.views import homeds
# from study.views import home
# from study2.views import asf

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('fs/',homefs),
    # path('ds/',homeds),
    path('fs/',include('fscohort.urls')),
    path('ds/',include('dscohort.urls')),
#     path('home',home),
#     path('st',asf),
    path('home',include('study.urls')),
    path('',include('study2.urls'))
]


