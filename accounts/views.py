from django.shortcuts import render
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required


@login_required
def profile_view(request):
  return render(request, "accounts/profile.html")


class LoginView(auth_views.LoginView):
  template_name = "accounts/login.html"
  next_page = "/accounts/profile"

  
class LogoutView(auth_views.LogoutView):
  template_name = "accounts/logged_out.html"
  next_page = "/accounts/login"

class PasswordChangeView(auth_views.PasswordChangeView):
  template_name = "accounts/password_change_form.html"

class PasswordChangeDoneView(auth_views.PasswordChangeDoneView):
  template_name = "accounts/password_change_done.html"


class PasswordResetView(auth_views.PasswordResetView):
  template_name = "accounts/password_reset_form.html"
  email_template_name = "accounts/password_reset_email.html"
  success_url = "/accounts/password_reset/done/"


class PasswordResetDoneView(auth_views.PasswordResetDoneView):
  template_name = "accounts/password_reset_done.html"


class PasswordResetConfirmView(auth_views.PasswordResetConfirmView):
  template_name = "accounts/password_reset_confirm.html"


class PasswordResetCompleteView(auth_views.PasswordResetCompleteView):
  template_name = "accounts/password_reset_complete.html"
