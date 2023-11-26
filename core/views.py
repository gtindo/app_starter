from asgiref.sync import sync_to_async

from django.shortcuts import render
from django.http import HttpResponse

from .tasks import add


async def test_page(request):
  return render(request=request, template_name="core/test.html")


async def test_celery_task(request):
  res = add.delay(4, 4)
  
  return HttpResponse("ok")