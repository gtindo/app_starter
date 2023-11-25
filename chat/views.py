from django.shortcuts import render

# Create your views here.

async def index(request):
  return render(request, "chat/index.html")

async def room(request, room_name):
  return render(request, "chat/room.html", {"room_name": room_name})
