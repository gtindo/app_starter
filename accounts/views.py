from django.shortcuts import render
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required

"""
Views for authenticating users
They extends django.contrib.auth.views

See https://docs.djangoproject.com/en/4.2/topics/auth/default/#module-django.contrib.auth.views
for documentation for each views
"""


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
    success_url = "/accounts/password_change_done"


class PasswordChangeDoneView(auth_views.PasswordChangeDoneView):
    template_name = "accounts/password_change_done.html"


class PasswordResetView(auth_views.PasswordResetView):
    # displays a form with email field, users will enter their email to reset password
    template_name = "accounts/password_reset_form.html"

    # Template of the email sent to the user
    email_template_name = "accounts/password_reset_email.html"

    # Template of email subject
    subject_template_name = "accounts/password_reset_subject.txt"

    success_url = "/accounts/password_reset/done/"


class PasswordResetDoneView(auth_views.PasswordResetDoneView):
    # Displays page that confirms email has been sent
    template_name = "accounts/password_reset_done.html"


class PasswordResetConfirmView(auth_views.PasswordResetConfirmView):
    # Displays form for user to enter new password for reset
    template_name = "accounts/password_reset_confirm.html"
    success_url = "/accounts/reset/done"


class PasswordResetCompleteView(auth_views.PasswordResetCompleteView):
    # Displays success of password reset
    template_name = "accounts/password_reset_complete.html"
