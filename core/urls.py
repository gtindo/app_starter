from django.urls import path
from . import views

app_name = "core"

urlpatterns = [
    path("", views.test_page),
    path("test-task/", views.test_celery_task)
]
