def build_prompt(story):

    return f"""
You are a Senior QA Architect.

Analyze the following user story.

Title:
{story['title']}

Description:
{story['content']}

Generate:

1. Functional Test Cases
2. Positive Test Cases
3. Negative Test Cases
4. Boundary Test Cases
5. Edge Test Cases
6. Security Test Cases
7. API Test Cases
8. UI Test Cases
9. Playwright Automation Scenarios

For each testcase provide:

- Test Case ID
- Scenario
- Preconditions
- Steps
- Expected Result
- Priority

Ensure maximum coverage and include all edge cases.
"""