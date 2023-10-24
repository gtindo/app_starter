import { h } from "preact";
import register from "preact-custom-element";


export type HelloWorldProps = {
    name: string;
    title: string;
}

const HelloWorld = ({name, title}: HelloWorldProps) => {
    return <div>Name: {name}, Title: {title}</div>;
}

register(HelloWorld, "app-hello", ['name', 'title'], {shadow: false});
