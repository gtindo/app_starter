import { h, JSX } from "preact";
import { define } from 'preactement';


export type ButtonProps = {
 children: JSX.Element,
 variant: "contained" | "outlined",
 color: "primary" | "secondary" | "danger" | "warning" | "success" | "gray"
}

// button with the following attributes

// variant: contained, outlined
// color: primary, secondary, danger, warning, success, gray
// Icon slot

function Button({children}: ButtonProps) {
  return (
    <button type="button" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
      {children}
    </button>
  )
}

define('app-button', () => Button);