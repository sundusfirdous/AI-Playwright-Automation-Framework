import { spawnSync } from "child_process";

export class AIFailureAnalyzer {

    static analyze(error: string) {

        const result = spawnSync(
            "python",
            [
                "../AI/FailureAnalyzer/analyze_failure.py",
                error
            ],
            {
                encoding: "utf8"
            }
        );

        console.log(
            "\n===== AI FAILURE ANALYSIS =====\n"
        );

        console.log(
            result.stdout
        );

        console.log(
            "\n===============================\n"
        );
    }
}