from django.shortcuts import render

# Create your views here.

async def test_page(request):
  return render(request=request, template_name="core/test.html")