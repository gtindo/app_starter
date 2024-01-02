import { h } from "preact";
import { define } from "preactement";


export function Notification() {
  return (
    <div>My notification component</div>
  )
}

define('app-notification', () => Notification);