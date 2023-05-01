from rest_framework import generics, viewsets, status
from django.shortcuts import render
from django.http import HttpResponse
from canban.serializers import *


class MoveTaskView(APIView):
    def patch(self, request, *args, **kwargs):
        task_id = kwargs['task_id']
        task = TaskModel.objects.get(id=task_id)
        old_board_id = task.boards_id
        new_board_id = request.data.get('new_boards_id')
        new_position = request.data.get('new_position')
        task.boards_id = new_board_id
        task.position = new_position
        task.save()

        # Обновляем позицию других задач на старой доске, если они есть
        if old_board_id != new_board_id:
            tasks_on_old_board = TaskModel.objects.filter(board_id=old_board_id, position__gte=task.position)
            for task_on_old_board in tasks_on_old_board:
                if task_on_old_board.id != task_id:
                    task_on_old_board.position += 1
                    task_on_old_board.save()

        # Обновляем позицию других задач на новой доске, если они есть
        tasks_on_new_board = TaskModel.objects.filter(board_id=new_board_id, position__gte=new_position)
        for task_on_new_board in tasks_on_new_board:
            if task_on_new_board.id != task_id:
                task_on_new_board.position += 1
                task_on_new_board.save()

        return Response(status=status.HTTP_200_OK)


class TasksAPIView(generics.ListCreateAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer


class TasksAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer


class BoardAPIView(generics.ListCreateAPIView):
    queryset = BoardModel.objects.all()
    serializer_class = BoardSerializer


class BoardAPIRemove(generics.RetrieveDestroyAPIView):
    queryset = BoardModel.objects.all()
    serializer_class = BoardSerializer
