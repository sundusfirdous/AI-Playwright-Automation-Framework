import { test } from "@playwright/test";
import { AIFailureAnalyzer } from "../utils/aiFailureAnalyzer";

test.afterEach(
    async ({ page }, testInfo) => {

        if (
            testInfo.status !==
            testInfo.expectedStatus
        ) {

            const screenshotPath =
                `failure-${Date.now()}.png`;

            await page.screenshot({
                path: screenshotPath
            });

            const error =
                testInfo.errors
                    .map(
                        e => e.message
                    )
                    .join("\n");

            AIFailureAnalyzer.analyze(
                error
            );
        }
    }
);