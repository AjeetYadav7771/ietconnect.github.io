from django.shortcuts import render, HttpResponse
from home.models import Contact

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

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        contact = Contact(name=name, email=email, message=message)
        contact.save()
        return HttpResponse("Form submitted Successfully.")
    return render(request, "contact.html")

def pdf(request):
    return render(request, "pdf.html")

def login(request):
    return render(request, "login.html")

def download(request):
    return render(request, "download.html")
