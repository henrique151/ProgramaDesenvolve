// Hacker News Script

const titleElements = document.querySelectorAll(".titleline");

if (titleElements.length === 0) {
  console.error(
    "Nenhum elemento de título encontrado com este seletor .titleline"
  );
} else {
  const newTitles = [];
  titleElements.forEach((titleElement) =>
    newTitles.push(titleElement.textContent)
  );
  console.log("--- Títulos do Hacker News ---");
  newTitles.forEach((title, i) => console.log(`${i + 1}. ${title}`));
}
