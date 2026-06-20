import "../hooks";
import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";

test(
    "Verify Login",
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const dashboard =
            new DashboardPage(page);

        await login.open();

        await login.loginUser(
            "standard_user",
            "secret_sauce"
        );

        expect(
            await dashboard.isDashboardVisible()
        ).toBeTruthy();
    }
);