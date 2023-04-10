from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("This is homepage.")

def about(request):
    return HttpResponse("This is about page.")

def login(request):
    return HttpResponse("This is login page.")
