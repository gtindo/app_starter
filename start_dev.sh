#!/bin/bash

cd ./web-components
npm run build

cd ../

python manage.py runserver 0.0.0.0:8000 \
  & celery -A app worker --loglevel=INFO \
