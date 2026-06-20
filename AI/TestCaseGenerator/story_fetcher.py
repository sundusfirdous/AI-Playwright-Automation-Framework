import requests
from bs4 import BeautifulSoup

def fetch_story(url):

    response = requests.get(url)

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    title = soup.title.text

    content = soup.get_text()

    return {
        "title": title,
        "content": content[:15000]
    }