import requests

def generate_from_llm(prompt):

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "gemma2:2b",
            "prompt":prompt,
            "stream":False
        }
    )

    return response.json()["response"]