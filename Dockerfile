FROM node:18 as web_components_builder

# Workdir for frontend build
WORKDIR /web-components

# Copy package json
COPY web-components/package*.json ./

# Install dependecies
RUN npm install

# Copy components files
COPY web-components ./

# Build web components and css files
RUN npm run build


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

# Copy builded components
COPY --from=web_components_builder /web-components/dist /app/web-components/dist

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Activate virtual env
ENV PATH="/app/venv/bin:$PATH"

# Collect static files
RUN python manage.py collectstatic --noinput 

EXPOSE 8000

CMD ["daphne", "-b", "0.0.0.0", "-p", "8000", "app_starter.asgi:application"]