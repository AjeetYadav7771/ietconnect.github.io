from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    context = {
        "variable":"created by Dev Anand."
    }
    return render(request, "index.html", context)

def about(request):
    return render(request, "about.html")

def login(request):
    return HttpResponse("This is login page.")
