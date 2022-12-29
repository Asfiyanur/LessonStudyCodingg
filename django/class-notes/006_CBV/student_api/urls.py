from django.urls import path
from .views import (
    home ,
    # !fbv
    # students_list,
    # student_create,
    # student_detail,
    # student_update,
    # student_delete,
    
    # student_api,
    # student_api_get_update_delete
    
    # ! cbv
    
    StudentListCreate,StudentDetail
    
)

urlpatterns = [
    path("", home),
    
    # !fbv
    # path("student-list/", students_list ,name='list'),
    # path("student-create/", student_create ,name='create'),
    # path("student-detail/<int:pk>/", student_detail,name='detail'),
    # path("student-update/<int:pk>/", student_update,name='update'),
    # path("student-delete/<int:pk>/", student_delete,name='delete'),
    
    # path("student/", student_api),
    # path("student/<int:pk>/", student_api_get_update_delete),
    
    # ! cbv
    
    path("student/", StudentListCreate.as_view()),
    path("student/<int:pk>/", StudentDetail.as_view()),
    
] 