import { glossary } from "./glossary.js";

const container = document.getElementById("glossary-groups");
for (const group of [...new Set(glossary.map(entry => entry.group))]) {
  const section = document.createElement("section");
  section.className = "glossary-section";
  const title = document.createElement("h3");
  title.textContent = group;
  section.append(title);
  const cards = document.createElement("div");
  cards.className = "glossary-grid";
  for (const entry of glossary.filter(item => item.group === group)) {
    const card = document.createElement("article");
    card.className = "glossary-card";
    card.id = `term-${entry.id}`;
    const term = document.createElement("h4");
    term.className = `tarstone-keyword tarstone-keyword-${entry.id}`;
    term.textContent = entry.term;
    const definition = document.createElement("p");
    definition.textContent = entry.definition;
    card.append(term, definition);
    cards.append(card);
  }
  section.append(cards);
  container.append(section);
}

const search = document.getElementById("glossary-search");
const empty = document.getElementById("glossary-empty");
search.addEventListener("input", () => {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const section of container.querySelectorAll(".glossary-section")) {
    let visible = 0;
    for (const card of section.querySelectorAll(".glossary-card")) {
      const match = card.textContent.toLocaleLowerCase().includes(query);
      card.hidden = !match;
      if (match) { visible++; count++; }
    }
    section.hidden = visible === 0;
  }
  empty.hidden = count !== 0;
});
