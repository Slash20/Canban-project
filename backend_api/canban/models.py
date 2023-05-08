from django.db import models


class TaskModel(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    board = models.ForeignKey('BoardModel', on_delete=models.CASCADE, related_name='tasks')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'tasks'

    def __str__(self):
        return self.title


class BoardModel(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # owner = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    class Meta:
        db_table = 'boards'

    def __str__(self):
        return self.title
