import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import "../generic/Button";

const meta = {
  title: 'Components/generic/Button',
  render: (args) => html`<app-button>Default</app-button>`,
  argTypes: {},
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>;


export const Default: Story = {
  args: {},
};
