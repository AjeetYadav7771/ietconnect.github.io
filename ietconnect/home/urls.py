from django.contrib import admin
from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.index, name="home"),
    path('about', views.about, name="about"),
    path('login', views.login, name="login"),
    path('contact', views.contact, name="contact"),
    path('pdf', views.pdf, name="pdf"),
    path('login', views.login, name="login"),
    path('download', views.download, name="downlaod")
]