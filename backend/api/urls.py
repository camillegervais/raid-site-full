from django.urls import path
from . import views

urlpatterns = [
    #this allows us to redirect api request to the correct function that can return data
    path('hello-world/', views.hello_world, name='hello_world'),
    path('get-users/', views.get_users, name='get-users'),
    path('validate-user/', views.validate_users, name='validate-users'),
]