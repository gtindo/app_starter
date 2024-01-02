import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import "../../app/accounts/LoginForm";

const meta = {
    title: "Components/Accounts/LoginForm",
    render: () => html `
        <accounts-login-form forgot-password-url="http://localhost:3000">
            
        </accounts-login-form>`,
    argTypes: {}
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>

export const Default: Story = {
    args: {}
}