from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello World, you're at the request page. " +
                        "You'll be able to request genomics analytics from here soon.");