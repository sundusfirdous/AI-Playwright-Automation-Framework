from faker import Faker
import json

fake = Faker()

users = []

for _ in range(100):

    users.append(
        {
            "name":
            fake.name(),

            "email":
            fake.email(),

            "phone":
            fake.phone_number()
        }
    )

with open(
    "users.json",
    "w"
) as f:

    json.dump(
        users,
        f,
        indent=2
    )