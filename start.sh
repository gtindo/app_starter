#!/bin/bash

exec daphne -b 0.0.0.0 -p 8000 app_starter.asgi:application & celery -A app_starter worker --loglevel=INFO