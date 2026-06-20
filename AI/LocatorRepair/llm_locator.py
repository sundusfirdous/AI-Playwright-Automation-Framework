import requests

def ask_llm(
        html,
        failed_locator
):

    prompt = f"""
Locator failed:

{failed_locator}

HTML:

{html[:10000]}

Suggest best CSS locator.
Only locator.
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
             "model": "gemma2:2b",
            "prompt":prompt,
            "stream":False
        }
    )

    return response.json()["response"]