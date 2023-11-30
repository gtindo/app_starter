#!/bin/bash

source ./venv/bin/activate

pip install -r requirements.txt

exec \
  python manage.py runserver 0.0.0.0:8000 \
  & celery -A app worker --loglevel=INFO