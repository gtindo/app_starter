from celery import shared_task

@shared_task
def add(x, y):
  print("Get the job")
  print(x + y)
  return x + y