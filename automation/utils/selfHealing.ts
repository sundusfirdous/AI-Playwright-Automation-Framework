import { Page, Locator } from "@playwright/test";
import { spawnSync } from "child_process";
import { AILocator } from "./aiLocator";

export class SelfHealing {

    static async findElement(
        page: Page,
        locators: string[]
    ): Promise<Locator> {

        // Step 1 - Check learned locators

        const learned =
            AILocator.get(
                locators[0]
            );

        if (learned) {

            console.log(`
Using learned locator:
${learned.healedLocator}

Confidence:
${learned.confidence}%
`);

            return page.locator(
                learned.healedLocator
            );
        }

        // Step 2 - Try original locators

        for (const locator of locators) {

            try {

                const element =
                    locator.startsWith("//")
                        ? page.locator(
                              `xpath=${locator}`
                          )
                        : page.locator(
                              locator
                          );

                await element
                    .first()
                    .waitFor({
                        timeout: 1000
                    });

                console.log(
                    `Found using: ${locator}`
                );

                return element;

            } catch {
                continue;
            }
        }

        // Step 3 - Self Healing

        console.log(
            "All locators failed. Starting self-healing..."
        );

        const html =
            await page.content();

        const result =
            spawnSync(
                "python",
                [
                    "../AI/LocatorRepair/repair_locator.py",
                    locators[0]
                ],
                {
                    input: html,
                    encoding: "utf8"
                }
            );

        if (!result.stdout) {

            throw new Error(
                "repair_locator.py returned empty output"
            );
        }

        const output =
            JSON.parse(
                result.stdout
            );

        const best =
            output.best_match;

        if (!best) {

            throw new Error(
                "No locator suggestions found"
            );
        }

        const candidate =
            best.locator;

        const confidence =
            best.confidence;

        const reason =
            best.reason;

        try {

            const healed =
                candidate.startsWith("//")
                    ? page.locator(
                          `xpath=${candidate}`
                      )
                    : page.locator(
                          candidate
                      );

            await healed
                .first()
                .waitFor({
                    timeout: 3000
                });

            console.log(`
===== AI HEALING =====

Failed Locator:
${locators[0]}

Healed Locator:
${candidate}

Confidence:
${confidence}%

Reason:
${reason}

======================
`);

            AILocator.save(
                locators[0],
                candidate,
                confidence,
                reason
            );

            return healed;

        } catch {

            throw new Error(
                `Unable to heal locator: ${locators[0]}`
            );
        }
    }
}