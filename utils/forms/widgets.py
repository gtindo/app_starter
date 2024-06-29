from django import forms


class Input(forms.Widget):
    input_type = None
    template_name = "utils/forms/widgets/input.html"

    def __init__(self, attrs=None, variant=None):
        super().__init__(attrs)
        self.variant = variant

    def render(self, name, value, attrs=None, renderer=None):
        """Render the widget as an HTML string."""
        context = self.get_context(name, value, attrs)
        context["variant"] = self.variant
        context["widget"]["type"] = self.input_type
        return self._render(self.template_name, context, renderer)


class NumberInput(Input):
    input_type = "number"


class TextInput(Input):
    input_type = "text"


class EmailInput(Input):
    input_type = "email"


class PasswordInput(Input):
    input_type = "password"
