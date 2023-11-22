import { h } from "preact";
import { define } from "preactement";


export function Page() {
  return (
    <div>My Page component</div>
  )
}

define('app-page', () => Page);