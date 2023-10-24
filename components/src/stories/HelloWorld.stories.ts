import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import { HelloWorldProps } from '../HelloWorld';
import "../HelloWorld";

const meta = {
  title: 'Components/HelloWorld',
  tags: ['autodocs'],
  render: (args) => html`<app-hello name=${args.name} title=${args.title}></app-hello>`,
  argTypes: {
    name: {
      type: "string"
    },
    title: {
      type: "string"
    }
  },
} satisfies Meta<HelloWorldProps>;

export default meta;
type Story = StoryObj<HelloWorldProps>;


export const Default: Story = {
  args: {
    name: "Yvan Guekeng Tindo",
    title: "Software Engineer",
  },
};
