from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'app/index.html')

def servicios(request):
    return render(request, 'app/servicios.html')

def galeria(request):
    return render(request, 'app/galeria.html')

def ubicacion(request):
    return render(request, 'app/ubicacion.html')

def contacto(request):
    return render(request, 'app/contacto.html')            