import { h } from "preact";
import { define } from "preactement";


export function ResetPasswordComponent() {
  return (
    <div>Reset Password component</div>
  )
}

define('app-reset-password-form', () => ResetPasswordComponent);