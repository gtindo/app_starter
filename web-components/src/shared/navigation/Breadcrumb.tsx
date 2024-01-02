import { h } from "preact";
import { define } from "preactement";


export function Breadcrumb() {
  return (
    <div>My breadcrumb component</div>
  )
}

define('app-breadcrumb', () => Breadcrumb);