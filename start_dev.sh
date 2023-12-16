#!/bin/bash

python manage.py runserver 0.0.0.0:8000 \
  & celery -A app worker --loglevel=INFO \
