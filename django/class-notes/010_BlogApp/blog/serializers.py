from rest_framework import serializers
from .models import Category,Blog


class CategorySerializer(serializers.ModelSerializer):
    
    class Meta :
        model = Category
        fields = (
            'id',
            'name'
        )
        
        
        
class BlogSerializer(serializers.ModelSerializer):
    
    category = serializers.StringRelatedField()
    created_id = serializers.IntegerField(write_only=True)
    class Meta :
        model = Blog
        fields = (
            'id',
            'title',
            'content',
            'is_published',
            'created_date',
            'category',
            'category_id'
        )
        
        
        
        

    