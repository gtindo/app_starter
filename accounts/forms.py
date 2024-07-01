from django.contrib.auth import forms as auth_forms, password_validation
from django.utils.translation import gettext_lazy as _
from django import forms
from utils.forms import widgets


class AuthenticationForm(auth_forms.AuthenticationForm):
    username = auth_forms.UsernameField(widget=widgets.EmailInput(attrs={
        "autofocus": True,
        "required": True,
    }))
    password = forms.CharField(
        label=_("Password"),
        strip=False,
        widget=widgets.PasswordInput(attrs={"autocomplete": "current-password"}),
    )


class PasswordResetForm(auth_forms.PasswordResetForm):
    email = forms.EmailField(
        label=_("Email"),
        max_length=254,
        widget=widgets.EmailInput(attrs={"autocomplete": "email"}),
    )


class PasswordResetConfirmForm(auth_forms.SetPasswordForm):
    new_password1 = forms.CharField(
        label=_("New Password"),
        widget=widgets.PasswordInput(attrs={"autocomplete": "new-password"}),
        strip=False,
        help_text=password_validation.password_validators_help_text_html(),
    )

    new_password2 = forms.CharField(
        label=_("New password confirmation"),
        strip=False,
        widget=widgets.PasswordInput(attrs={"autocomplete": "new-password"}),
    )
