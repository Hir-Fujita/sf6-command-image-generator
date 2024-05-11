
from django.shortcuts import render

# Create your views here.
def index(request):
    context = {}
    return render(request, "sf6cig_app/index.html", context)