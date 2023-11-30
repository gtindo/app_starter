# Routes for websockets

from channels.routing import URLRouter
from django.urls import path

from chat.routing import websocket_urlpatterns as chat_routes

websocket_urlpatterns = [
  path("ws/chat/", URLRouter(chat_routes))
]