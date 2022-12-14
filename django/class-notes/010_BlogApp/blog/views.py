from rest_framework.viewsets import ModelViewSet

from .models import Category ,Blog
from .serializers import CategorySerializer,BlogSerializer

# Create your views here.


class CategoryView(ModelViewSet):
    queryset= Category.objects.all()
    serializer_class = CategorySerializer
    filterset_fields= ['name']
    
    
    
    
class BlogView(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    filterset_fields =['category']
    # filterset_fields =['category__name']
    search_fields = ['title','content']