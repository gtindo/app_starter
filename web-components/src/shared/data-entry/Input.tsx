import { h } from "preact";
import { define } from "preactement";

/**
 * What are component params:
 *  - style: text, colors, dark mode
 *  - state: active/inactive
 *  - validation: Error state
 *  - icons:
 *  - text helpers: (a message below text)
 */

export function Input() {
  return (
    <div>My Input component</div>
  )
}

define('app-input', () => Input);