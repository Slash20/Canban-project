from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from .models import *


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskModel
        fields = "__all__"


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardModel
        fields = ('id', 'title', )
