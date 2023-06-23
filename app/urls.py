from django.urls import path
from . views import index, servicios, galeria, ubicacion, contacto

urlpatterns = [
    path('', index, name='index'),
    path('servicios/', servicios, name='servicios'),
    path('galeria/', galeria, name='galeria'),
    path('ubicacion/', ubicacion, name='ubicacion'),
    path('contacto/', contacto, name='contacto'),
]