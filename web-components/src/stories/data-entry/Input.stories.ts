import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import "../../shared/data-entry/Input";

const meta = {
    title: "Components/Data Entry/Input",
    render: () => html `<app-input></app-input>`,
    argTypes: {}
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>

export const Default: Story = {
    args: {}
}