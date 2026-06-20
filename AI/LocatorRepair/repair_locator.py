from bs4 import BeautifulSoup
from difflib import SequenceMatcher
import sys
import json

def similarity(a, b):

    return round(
        SequenceMatcher(
            None,
            a.lower(),
            b.lower()
        ).ratio() * 100,
        2
    )

def repair_locator(
    html,
    failed_locator
):

    soup = BeautifulSoup(
        html,
        "html.parser"
    )

    candidates = []

    for tag in soup.find_all():

        if tag.get("id"):

            locator = f"#{tag['id']}"

            score = similarity(
                failed_locator,
                locator
            )

            candidates.append({
                "locator": locator,
                "confidence": score,
                "reason":
                "ID attribute match"
            })

        if tag.get("name"):

            locator = \
            f"[name='{tag['name']}']"

            score = similarity(
                failed_locator,
                locator
            )

            candidates.append({
                "locator": locator,
                "confidence": score,
                "reason":
                "Name attribute match"
            })

        if tag.get("placeholder"):

            locator = \
            f"[placeholder='{tag['placeholder']}']"

            score = similarity(
                failed_locator,
                locator
            )

            candidates.append({
                "locator": locator,
                "confidence": score,
                "reason":
                "Placeholder match"
            })

    candidates.sort(
        key=lambda x:
        x["confidence"],
        reverse=True
    )

    best = (
        candidates[0]
        if candidates
        else None
    )

    return {
        "failed_locator":
        failed_locator,
        "best_match":
        best
    }

if __name__ == "__main__":

    failed_locator = sys.argv[1]

    html = sys.stdin.read()

    result = repair_locator(
            html,
            failed_locator
        )

    print(
        json.dumps(result)
    )