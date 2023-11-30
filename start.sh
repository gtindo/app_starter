#!/bin/bash

exec \
  daphne -b 0.0.0.0 -p 8000 app.asgi:application \
  & celery -A app worker --loglevel=INFO