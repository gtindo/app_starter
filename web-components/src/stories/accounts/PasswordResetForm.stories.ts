import {html} from "lit";
import type {Meta, StoryObj} from "@storybook/web-components";

import "../../app/accounts/PasswordResetForm";

const meta = {
    title: "Components/Accounts/PasswordResetForm",
    render: () => html `
        <accounts-password-reset-form action="">
        </accounts-password-reset-form>`,
    argTypes: {}
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>

export const Default: Story = {
    args: {}
}