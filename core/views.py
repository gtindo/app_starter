from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from app import settings

from .tasks import add

import logging

logger = logging.getLogger(__name__)


async def test_page(request):
    logger.info("Rendering the test page")

    return render(request=request, template_name="core/test.html")


async def test_celery_task(request):
    res = add.delay(4, 4)
  
    return HttpResponse("ok")
