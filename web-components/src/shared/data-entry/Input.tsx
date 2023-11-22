import { h } from "preact";
import { define } from "preactement";


export function Input() {
  return (
    <div>My Input component</div>
  )
}

define('app-input', () => Input);