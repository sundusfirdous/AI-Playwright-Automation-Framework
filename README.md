# 🚀 GenAI Playwright Automation Framework ★★★★★

An AI-Powered Test Automation Framework built using:

* Playwright
* TypeScript
* Python
* Generative AI
* Self-Healing Locators
* AI Test Case Generation
* AI Test Data Generation
* Failure Analysis
* Docker
* GitHub Actions CI/CD

This framework demonstrates how Generative AI can be integrated into modern test automation to reduce maintenance effort, improve test stability, and accelerate quality engineering workflows.

---

# 📌 Project Overview

Traditional automation frameworks fail whenever:

* Locators change
* UI structure changes
* Requirements evolve
* Test data becomes outdated

This framework introduces AI-assisted capabilities to:

✅ Repair broken locators

✅ Learn locator changes

✅ Generate test cases from requirements

✅ Generate test data automatically

✅ Analyze failures

✅ Support CI/CD execution

---

# 🏗 Project Architecture

```text
AI-PLAYWRIGHT-AUTOMATION-FRAMEWORK
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── AI
│   │
│   ├── FailureAnalyzer
│   │   └── analyze_failure.py
│   │
│   ├── LocatorRepair
│   │   ├── llm_locator.py
│   │   ├── repair_ai.py
│   │   └── repair_locator.py
│   │
│   ├── TestCaseGenerator
│   │   ├── generated
│   │   │   └── testcases.md
│   │   │
│   │   ├── generate_testcase.py
│   │   ├── llm_client.py
│   │   ├── prompt_builder.py
│   │   └── story_fetcher.py
│   │
│   └── TestDataGenerator
│       ├── generate_data.py
│       └── users.json
│
├── automation
│   │
│   ├── pages
│   │   ├── login.ts
│   │   └── dashboard.ts
│   │
│   ├── test-data
│   │   └── users.json
│   │
│   ├── tests
│   │   ├── api
│   │   │   └── users.spec.ts
│   │   │
│   │   ├── ui
│   │   │   └── login.spec.ts
│   │   │
│   │   └── hooks.ts
│   │
│   ├── utils
│   │   ├── aiFailureAnalyzer.ts
│   │   ├── aiLocator.ts
│   │   ├── locatorStore.json
│   │   └── selfHealing.ts
│   │
│   ├── playwright.config.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── docker
│   └── Dockerfile
│
├── README.md
└── .gitignore
```

---

# ⚙ Technology Stack

| Technology     | Purpose               |
| -------------- | --------------------- |
| Playwright     | UI & API Automation   |
| TypeScript     | Framework Development |
| Python         | AI Modules            |
| BeautifulSoup  | DOM Analysis          |
| JSON           | Persistent Learning   |
| Docker         | Containerization      |
| GitHub Actions | CI/CD                 |
| Ollama         | Local LLM Support     |
| Gemma          | Generative AI         |
| OpenAI APIs    | Future Integration    |

---

# 🎯 Framework Capabilities

## 1. UI Automation

Supports:

* Chromium
* Firefox
* WebKit

Features:

* Parallel Execution
* Screenshots
* Videos
* Traces
* HTML Reports

Example:

```bash
npx playwright test
```

---

## 2. API Automation

Supports:

* GET
* POST
* PUT
* PATCH
* DELETE

Validations:

* Status Codes
* Response Body
* Schema Validation
* Business Rules

Example:

```typescript
const response =
await request.get("/users");

expect(
response.status()
).toBe(200);
```

---

# 🤖 AI Self-Healing Locator Engine

## Problem

Traditional automation:

```text
Locator Changed
↓
Test Failed
↓
Manual Fix
```

---

## Solution

AI Self-Healing

```text
Locator Changed
↓
Locator Failed
↓
Capture DOM
↓
Analyze HTML
↓
Generate Alternatives
↓
Select Best Match
↓
Execute Test
↓
Learn New Locator
```

---

## Example

Original Locator:

```text
#user-name
```

Application Changed:

```text
#username
```

Framework:

```text
Failed Locator:
#user-name

Healed Locator:
#username

Confidence:
96%

Reason:
ID Attribute Match
```

Test continues automatically.

---

# 🧠 Locator Learning Engine

Located in:

```text
automation/utils/aiLocator.ts
```

Stores successful repairs:

```json
{
  "#user-name-broken": {
    "healedLocator": "#user-name",
    "confidence": 96,
    "reason": "ID attribute match"
  }
}
```

Future executions use learned locator directly.

Benefits:

* Faster execution
* Reduced healing calls
* Framework becomes smarter over time

---

# 🔍 Locator Repair Engine

Located in:

```text
AI/LocatorRepair/repair_locator.py
```

Responsibilities:

* Parse DOM
* Identify candidate locators
* Compare similarity
* Rank alternatives
* Return best locator

Supports:

* id
* name
* placeholder
* CSS selectors
* XPath
* text locators

---

# 🧠 LLM Locator Repair

Located in:

```text
AI/LocatorRepair/llm_locator.py
```

Future capability:

```text
Failed Locator
+
DOM Snapshot
↓
Gemma / Ollama
↓
Predict Best Locator
```

This moves healing from rule-based to AI-based.

---

# 📝 AI Test Case Generator

Location:

```text
AI/TestCaseGenerator
```

Purpose:

Generate complete test scenarios from:

* Jira Stories
* Confluence Pages
* Requirement Documents
* User Stories

---

## Flow

```text
Story URL
↓
Fetch Story
↓
Build Prompt
↓
Send To LLM
↓
Generate Test Cases
↓
Save Markdown
```

---

## Output

```text
Positive Cases
Negative Cases
Boundary Cases
Edge Cases
Security Cases
Regression Cases
```

Generated File:

```text
AI/TestCaseGenerator/generated/testcases.md
```

---

# 🧪 AI Test Data Generator

Location:

```text
AI/TestDataGenerator
```

Generates:

* User Data
* Emails
* Addresses
* Phone Numbers
* Boundary Data
* Invalid Data

Example Output:

```json
{
  "username": "john123",
  "email": "john@test.com",
  "phone": "9876543210"
}
```

Generated File:

```text
users.json
```

---

# 🚨 AI Failure Analyzer

Location:

```text
AI/FailureAnalyzer
```

Purpose:

Analyze:

* Stack Trace
* Screenshot
* DOM
* Error Logs

---

## Example Output

```text
Root Cause:
Login button locator changed

Old:
#login-button

New:
#submit-login

Confidence:
92%

Suggested Fix:
Update locator
```

---

# 🔄 End-to-End Execution Flow

```text
Start Test
↓
Launch Browser
↓
Open Application
↓
Find Locator
↓
Locator Found?
│
├── Yes
│     ↓
│   Execute Action
│
└── No
      ↓
      AI Self Healing
      ↓
      Repair Locator
      ↓
      Learn Locator
      ↓
      Continue Test

↓
Validation
↓
Generate Report
↓
Publish Results
```

---

# 🐳 Docker Support

Location:

```text
docker/Dockerfile
```

Build:

```bash
docker build -f docker/Dockerfile -t ai-playwright .
```

Run:

```bash
docker run ai-playwright
```

Benefits:

* Consistent Environment
* Easy Setup
* CI/CD Ready

---

# 🚀 GitHub Actions CI/CD

Location:

```text
.github/workflows/playwright.yml
```

Pipeline:

```text
Code Push
↓
Install Dependencies
↓
Run Playwright Tests
↓
Generate Report
↓
Store Artifacts
↓
Notify Team
```

---

# 📊 Reporting

Generate Report:

```bash
npx playwright show-report
```

Features:

* Execution Summary
* Screenshots
* Videos
* Traces
* Failure Details

Report Location:

```text
automation/playwright-report
```

---

# 🔧 Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate

```bash
cd AI-PLAYWRIGHT-AUTOMATION-FRAMEWORK
```

---

## Install Node Modules

```bash
cd automation

npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

## Install Python Dependencies

```bash
pip install beautifulsoup4 requests ollama
```

---

# ▶ Running Tests

## Execute All Tests

```bash
npx playwright test
```

---

## Execute UI Tests

```bash
npx playwright test tests/ui
```

---

## Execute API Tests

```bash
npx playwright test tests/api
```

---

## Open Report

```bash
npx playwright show-report
```

---

# 📈 Future Roadmap

## Phase 1

✅ Playwright Framework

✅ API Testing

✅ Self-Healing Locators

✅ Locator Learning

---

## Phase 2

✅ AI Test Case Generation

✅ AI Test Data Generation

✅ Failure Analysis

---

## Phase 3

⬜ Ollama Integration

⬜ Gemma Integration

⬜ LLM Locator Ranking

⬜ Autonomous RCA

---

## Phase 4

⬜ Autonomous Test Generation

⬜ Autonomous Test Maintenance

⬜ Multi-Agent AI Testing

⬜ Self-Updating Framework

---

# 💼 Business Benefits

* Reduced Test Maintenance
* Faster Regression Execution
* Improved Stability
* Reduced Manual Effort
* Increased Test Coverage
* Faster Releases
* AI-Assisted Quality Engineering

---

# 👩‍💻 Author

Sundus Firdous

Automation Engineer | GenAI Automation Engineer

Skills:

* Playwright
* WebdriverIO
* Selenium
* TypeScript
* Java
* Python
* API Testing
* Docker
* AWS
* Azure
* AI Testing
* GenAI
* LLM Engineering

---

# ⭐ Vision

Build an Autonomous AI Testing Platform capable of:

* Generating Tests
* Generating Test Data
* Repairing Broken Automation
* Analyzing Failures
* Learning From Executions
* Reducing Human Maintenance
*************************************************************************************************
