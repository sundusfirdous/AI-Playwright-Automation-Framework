import { Page } from "@playwright/test";
import { SelfHealing } from "../utils/selfHealing";

export class LoginPage {

    constructor(private page: Page) {}

    async open() {

        await this.page.goto("/");
    }

    async loginUser(
        username: string,
        password: string
    ) {

        const usernameField =
            await SelfHealing.findElement(
                this.page,
                [
                    "#user-name-broken",
                ]
            );

        await usernameField.fill(username);

        const passwordField =
            await SelfHealing.findElement(
                this.page,
                [
                    "#password",
                    "[name='password']",
                    "//input[contains(@type,'password')]"
                ]
            );

        await passwordField.fill(password);

        const loginButton =
            await SelfHealing.findElement(
                this.page,
                [
                    "#login-button",
                    "button[type='submit']",
                    "//button[contains(.,'Login')]"
                ]
            );

        await loginButton.click();
    }
}