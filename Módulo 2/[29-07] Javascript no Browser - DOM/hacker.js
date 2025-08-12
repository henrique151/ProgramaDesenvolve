const HACKER_NEWS_URL = "https://corsproxy.io/?https://news.ycombinator.com/";

const newsListElement = document.getElementById("news-list");
newsListElement.innerHTML = "";

async function fetchNews() {
  const response = await fetch(HACKER_NEWS_URL);
  const htmlText = await response.text();

  const parser = new DOMParser();
  const remoteDocument = parser.parseFromString(htmlText, "text/html");

  const titleElements = remoteDocument.querySelectorAll(".titleline a");

  titleElements.forEach((linkElement) => {
    const titleText = linkElement.textContent;
    const linkUrl = linkElement.href;

    const listItem = document.createElement("li");
    const anchorElement = document.createElement("a");

    anchorElement.textContent = titleText;
    anchorElement.href = linkUrl;
    anchorElement.target = "_blank";

    listItem.appendChild(anchorElement);

    newsListElement.appendChild(listItem);
  });
}

fetchNews();
