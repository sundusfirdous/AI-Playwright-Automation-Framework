import { Page } from "@playwright/test";

export class DashboardPage {

    constructor(private page: Page) {}

    async isDashboardVisible() {

        return await this.page
            .locator(".inventory_item")
            .first()
            .isVisible();
    }
}