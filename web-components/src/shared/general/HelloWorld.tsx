import { h } from "preact";
import { define } from "preactement";


export type HelloWorldProps = {
    name: string;
    title: string;
}

const HelloWorld = ({name, title}: HelloWorldProps) => {
    return <div>Name: {name}, Title: {title}</div>;
}

define("app-hello", () => HelloWorld, { attributes: ['name', 'title'] });