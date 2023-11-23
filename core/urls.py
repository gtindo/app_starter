from django.urls import path;
from core.views import test_page;

app_name = "core"

urlpatterns = [
    path("", test_page)
]
