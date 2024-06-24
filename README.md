Django App Boilerplate
===

## Status

Work In Progress

## Purpose

The purpose of this boilerplate is to set up a fullstack django app. 
It follows the HTML over the wire approach. Html is rendered on the server. 

For forms, or complex ui, it uses web components. These components are created
with `preact` (a lightweight alternative to `react`) and `preact-custom-elements` that converts
`preact` components to `web-components`.

It enables the backend to render a small html file for these components, and the rendering is made on client side.


## Tools
Here are the list of frontend/backend tools used in the boilerplate:

### frontend:
* preact
* preact-custom-element
* Hotwired Turbo
* Tailwind CSS

### Backend Framework
* Django

### Database
* Postgresql

### Cache and pub/sub
* Redis

### Async task scheduler
* Celery

## Prerequisites

In order run the project in development mode these tools are required on the target system. 
It's recommended to run in on a Unix system or WSL 

* [Docker](https://docs.docker.com/engine/install/) 
* Python 3.10+
* Pip 
* Virtualenv (or other similar tool)
* Node.js 18

## How to install

* Build docker images
``` bash
docker compose build
```

* Run containers with compose file
```bash
docker compose up -d
```

Go to `http://localhost:8000/` to open the application in development mode (Debug = True)

Go to `http://localhost:8001/` to open in production mode (Debug = False)

## Licence
MIT