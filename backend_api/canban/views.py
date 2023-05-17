from django.db.models import F
from rest_framework import generics, viewsets, status
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from canban.serializers import *


class MoveTaskView(APIView):
    def put(self, request, pk, format=None):
        task = get_object_or_404(TaskModel, pk=pk)
        new_list_id = request.data.get('list_id', None)
        if new_list_id is None:
            return Response({'detail': 'List ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            new_list = List.objects.get(pk=new_list_id)
        except List.DoesNotExist:
            return Response({'detail': 'Invalid List ID.'}, status=status.HTTP_400_BAD_REQUEST)
        task.list = new_list
        task.save()
        serializer = TaskSerializer(task)
        return Response(serializer.data)


class TasksAPIView(generics.ListCreateAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)

    # # Создаем новую задачу с position = 0
    # task = serializer.save(position=0)
    #
    # # Обновляем position всех задач на доске, у которых position >= 0
    # tasks_on_board = TaskModel.objects.filter(board_id=task.board_id, position__gte=0).exclude(id=task.id)
    # for t in tasks_on_board:
    #     t.position += 1
    #     t.save()
    #
    # headers = self.get_success_headers(serializer.data)
    # return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class TasksAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer


class TaskAPIRemove(generics.RetrieveDestroyAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer


class BoardAPIView(generics.ListCreateAPIView):
    queryset = BoardModel.objects.all()
    serializer_class = BoardSerializer


class BoardAPIRemove(generics.RetrieveDestroyAPIView):
    queryset = BoardModel.objects.all()
    serializer_class = BoardSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance_id = instance.id
        self.perform_destroy(instance)
        queryset = self.filter_queryset(self.get_queryset())

        # Уменьшаем id у записей, чей id больше удаленного
        queryset.filter(id__gt=instance_id).update(id=F('id') - 1)
        return Response(status=status.HTTP_204_NO_CONTENT)
