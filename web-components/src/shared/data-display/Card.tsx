import { h } from "preact";
import { define } from "preactement";


export function Card() {
  return (
    <div>My card component</div>
  )
}

define('app-card', () => Card);