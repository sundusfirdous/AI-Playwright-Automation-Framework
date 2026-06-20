from story_fetcher import fetch_story
from prompt_builder import build_prompt
from llm_client import generate_from_llm

url = input("Enter Story URL: ")

story = fetch_story(url)

prompt = build_prompt(story)

testcases = generate_from_llm(prompt)

# Print output
print(testcases)

# Save output to file
with open(
    "generated/testcases.md",
    "w",
    encoding="utf8"
) as f:
    f.write(testcases)

print("Test cases saved successfully!")