import sys

from repair_locator import repair_locator

html_file = sys.argv[1]
failed_locator = sys.argv[2]

with open(html_file, "r", encoding="utf8") as f:
    html = f.read()

new_locator = repair_locator(
    html,
    failed_locator
)

print(new_locator)