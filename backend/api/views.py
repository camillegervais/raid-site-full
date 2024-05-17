from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User

# from a request directed here, we can return the data to the front end
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'My name is Camille'})

@api_view(['GET'])
def get_users(request):
    name = request.GET.get('name') #get the name param passed in the get request
    users = [{'name': user.name, 'password': user.password} for user in User.objects.order_by('name').reverse() if name.lower() in user.name.lower()]
    return Response({'users': users})

@api_view(['POST'])
def validate_users(request):
    name = request.data.get('name')
    password = request.data.get('password')
    user = User(name = name, password=password)
    user.save()
    return Response({'message': 'user added'})

@api_view(['POST'])
def delete_users(request):
    name = request.data.get('name')
    password = request.data.get('password')
    user = User.objects.filter(name=name, password=password).first()
    if user is not None:
        user.delete()
    else:
        print('No User')
        return Response({'message': 'User not found'})
    user.delete()
    print('user deleted')
    return Response({'message': 'User deleted'})
