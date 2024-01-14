import { h } from "preact";
import register from "preact-custom-element";
import {useState} from "preact/hooks";
import {TargetedEvent} from "preact/compat";
import {sendForm} from "../../helpers/send-form.js";

type PasswordResetFormProps = {
  action: string,
}

export function PasswordResetForm({action}: PasswordResetFormProps) {

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: TargetedEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);

  const handleFormSubmit = () => {
    const data = new FormData();
    data.append("email", email);

    sendForm({action, method: "post", data})
  }

  return (
    <div>
      <link rel="stylesheet" href="/static/css/base.css" />

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <slot name="email-label">Email</slot>
        </label>
        <input type="text" id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="john.doe@gmail.com"
          onChange={handleEmailChange}
          required
        />
      </div>

      <button type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={handleFormSubmit}
      >
        <slot name="reset-btn-label">Reset</slot>
      </button>
    </div>
  )
}

register(PasswordResetForm, "accounts-password-reset-form", ["action"], { shadow: true })