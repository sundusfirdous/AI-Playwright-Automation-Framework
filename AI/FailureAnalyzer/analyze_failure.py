import requests
import sys

error = sys.argv[1]

prompt = f"""
Analyze this Playwright failure.

Error:
{error}

Provide:

1. Root Cause
2. Why it happened
3. Fix
4. Recommended locator or code change
"""

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "gemma2:2b",
        "prompt": prompt,
        "stream": False
     },
    timeout=300
)

print(response.json()["response"])