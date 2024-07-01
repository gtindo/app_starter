from django.contrib.auth import forms as auth_forms
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
