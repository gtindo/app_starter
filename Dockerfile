# Install dependencies for django app

FROM python:3.10 as django_app_builder

WORKDIR /app

COPY requirements.txt .

RUN python -m venv venv && \
    . venv/bin/activate && \
    pip install --no-cache-dir -r requirements.txt 


# Copy installed dependencies and web components on final image
FROM python:3.10-slim 

WORKDIR /app

COPY --from=django_app_builder /app/venv /app/venv

# Copy django app files
COPY . .

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Activate virtual env
ENV PATH="/app/venv/bin:$PATH"

# Collect static files
RUN python manage.py collectstatic --noinput 

EXPOSE 8000

CMD ["/bin/sh", "start.sh"]