from django.contrib.auth.tokens import default_token_generator
from django.conf import settings as djangosettings

from templated_mail.mail import BaseEmailMessage
from djoser import utils
from djoser.conf import settings
from djoser.email import PasswordResetEmail


class CustomConfirmationEmail(BaseEmailMessage):
    template_name = "email/confirmation.html"



class CustomPasswordResetEmail(BaseEmailMessage):
    template_name = "email/password_reset.html"

    def get_context_data(self):
        # PasswordResetEmail can be deleted
        context = super().get_context_data()

        user = context.get("user")
        context['front_end_url'] = djangosettings.FRONTEND_URL
        context["uid"] = utils.encode_uid(user.pk)
        context["token"] = default_token_generator.make_token(user)
        context["url"] = settings.PASSWORD_RESET_CONFIRM_URL.format(**context)
        return context


class PasswordChangedConfirmationEmail(PasswordResetEmail):
    template_name = "email/password_changed_confirmation.html"