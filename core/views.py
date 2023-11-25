from asgiref.sync import sync_to_async

from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail


async def test_page(request):
  return render(request=request, template_name="core/test.html")
