from django.urls import path
from . views import RoomView, CreateRoomView, GetRoomView

urlpatterns = [
    path('room/', RoomView.as_view()),
    path('create-room/', CreateRoomView.as_view()), 
    path('room/<str:roomCode>', GetRoomView.as_view()),
]