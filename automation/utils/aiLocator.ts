import fs from "fs";
import path from "path";

export class AILocator {

    private static file = path.join(
        __dirname,
        "locatorStore.json"
    );

    static save(
        failedLocator: string,
        healedLocator: string,
        confidence: number,
        reason: string
    ) {

        let data: any = {};

        try {

            if (fs.existsSync(this.file)) {

                const content =
                    fs.readFileSync(
                        this.file,
                        "utf8"
                    );

                if (content.trim()) {
                    data =
                        JSON.parse(content);
                }
            }

        } catch {
            data = {};
        }

        data[failedLocator] = {
            healedLocator,
            confidence,
            reason,
            learnedAt:
                new Date().toISOString()
        };

        fs.writeFileSync(
            this.file,
            JSON.stringify(
                data,
                null,
                2
            )
        );

        console.log(`
===== AI LEARNING =====

Failed Locator:
${failedLocator}

Healed Locator:
${healedLocator}

Confidence:
${confidence}%

Reason:
${reason}

=======================
`);
    }

    static get(
        locator: string
    ) {

        try {

            if (
                !fs.existsSync(
                    this.file
                )
            ) {

                fs.writeFileSync(
                    this.file,
                    "{}"
                );

                return null;
            }

            const content =
                fs.readFileSync(
                    this.file,
                    "utf8"
                );

            if (!content.trim()) {
                return null;
            }

            const data =
                JSON.parse(content);

            return data[locator] || null;

        } catch {

            console.log(
                "Invalid locatorStore.json"
            );

            return null;
        }
    }
}