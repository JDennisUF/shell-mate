import { catalog } from "./data.js";
import { groups, all, byId, matches, relatedItems, entryFromHash } from "./model.js";
import { loadProgress, saveProgress, decodeProgress, encodeProgress } from "./storage.js";

let active = "tarstones";
const urlFilterIds = { region: "region", content: "scope", progress: "status", type: "kind-filter", order: "sort" };
const storage = {
  getItem: key => window.localStorage.getItem(key),
  setItem: (key, value) => window.localStorage.setItem(key, value)
};
const loaded = loadProgress(storage);
let completed = loaded.completed;
let saveBlocked = loaded.blocked;
let noticeTimer;
const disclosureState = new Map();

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
function linkTo(item, label) {
  const a = element("a", "", label || item.name);
  a.href = "#" + item.id;
  a.onclick = event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash === a.hash) navigateToHash();
    else location.hash = a.hash;
  };
  return a;
}
function announce(message) {
  const box = document.getElementById("notice");
  box.textContent = message;
  box.classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => box.classList.remove("show"), 5500);
}
function showStorageWarning(message) {
  const warning = document.getElementById("storage-warning");
  warning.textContent = message;
  warning.hidden = !message;
}
function save() {
  if (!saveBlocked) showStorageWarning(saveProgress(storage, completed));
}
function numberDone(items) { return items.filter(item => completed[item.id]).length; }
function renderProgress() {
  const scope = document.getElementById("scope").value;
  const scoped = items => items.filter(item => scope === "all" || item.scope === scope);
  const items = scoped(all);
  const count = numberDone(items);
  document.getElementById("overall-count").textContent = count + " / " + items.length;
  document.getElementById("progress-scope").textContent = scope === "rotten-autumn" ? "Rotten Autumn DLC entries in this guide" : scope === "base" ? "Base-game entries in this guide" : "All entries in this guide";
  const progress = document.getElementById("overall-progress");
  progress.max = items.length || 1;
  progress.value = count;
  const stats = document.getElementById("category-progress");
  stats.replaceChildren();
  for (const group of groups) {
    const cell = element("div", "progress-stat");
    const groupItems = scoped(catalog[group.key]);
    const strong = element("strong", "", numberDone(groupItems) + " / " + groupItems.length);
    cell.append(strong, document.createTextNode(group.title));
    stats.append(cell);
  }
}
function renderTabs() {
  const nav = document.getElementById("tabs");
  const focusedCategory = nav.contains(document.activeElement) ? document.activeElement.dataset.category : null;
  nav.replaceChildren();
  for (const group of groups) {
    const button = element("button", "tab", group.title);
    const symbol = element("span", "", group.symbol + "  ");
    symbol.setAttribute("aria-hidden", "true");
    button.prepend(symbol);
    button.type = "button";
    button.dataset.category = group.key;
    button.setAttribute("aria-current", active === group.key ? "page" : "false");
    button.onclick = () => {
      if (active === group.key) return;
      active = group.key;
      document.getElementById("search").value = "";
      document.getElementById("region").value = "all";
      document.getElementById("status").value = "all";
      document.getElementById("kind-filter").value = "all";
      updateFilters();
      render("push");
    };
    nav.append(button);
  }
  if (focusedCategory) nav.querySelector('[data-category="' + focusedCategory + '"]')?.focus();
}
function setOptions(select, values, selected) {
  select.replaceChildren();
  for (const [value, label] of values) {
    const option = element("option", "", label);
    option.value = value;
    select.append(option);
  }
  select.value = values.some(pair => pair[0] === selected) ? selected : "all";
}
function updateFilters() {
  const items = catalog[active];
  const regions = [...new Set(items.map(item => item.region))].sort((a, b) => a.localeCompare(b));
  setOptions(document.getElementById("region"), [["all", "All regions"], ...regions.map(name => [name, name])], document.getElementById("region").value);
  const extra = document.getElementById("kind-filter");
  const label = document.getElementById("kind-label");
  if (active === "tarstones") {
    label.textContent = "Stone type";
    setOptions(extra, [["all", "All types"], ...new Set(items.map(item => item.category))].map(value => Array.isArray(value) ? value : [value, value]), extra.value);
  } else if (active === "beacons") {
    label.textContent = "Beacon type";
    setOptions(extra, [["all", "All types"], ["standard", "Standard"], ["ghost", "Ghost"]], extra.value);
  } else if (active === "bosses") {
    label.textContent = "Fight type";
    setOptions(extra, [["all", "All types"], ["main", "Main"], ["optional", "Optional"], ["endgame", "Endgame"]], extra.value);
  } else {
    label.textContent = "Dungeon";
    setOptions(extra, [["all", "All dungeons"]], "all");
  }
  extra.disabled = active === "dungeons";
}
function readFilters() {
  const filters = Object.fromEntries(["search", "region", "scope", "status"].map(id => [id, document.getElementById(id).value]));
  filters.kind = document.getElementById("kind-filter").value;
  return filters;
}
function syncUrl(method = "replace") {
  const url = new URL(location.href);
  url.search = "";
  url.searchParams.set("page", active);
  const values = { search: document.getElementById("search").value, ...Object.fromEntries(Object.entries(urlFilterIds).map(([param, id]) => [param, document.getElementById(id).value])) };
  for (const [param, value] of Object.entries(values)) {
    if (value && value !== "all" && !(param === "order" && value === "catalog")) url.searchParams.set(param, value);
  }
  history[method + "State"]({}, "", url);
}
function restoreUrlState() {
  const params = new URLSearchParams(location.search);
  const requestedPage = params.get("page");
  const hashTarget = entryFromHash(location.hash);
  active = groups.some(group => group.key === requestedPage) ? requestedPage
    : hashTarget ? groups.find(group => catalog[group.key].some(item => item.id === hashTarget.id)).key
      : "tarstones";
  document.getElementById("search").value = params.get("search") || "";
  updateFilters();
  for (const [param, id] of Object.entries(urlFilterIds)) {
    const select = document.getElementById(id);
    const value = params.get(param);
    if (value && [...select.options].some(option => option.value === value)) select.value = value;
  }
}
function renderEntry(item) {
  const card = element("article", "entry" + (completed[item.id] ? " done" : ""));
  card.id = item.id;
  const row = element("div", "entry-row");
  const check = element("input", "entry-check");
  check.type = "checkbox";
  check.id = "check-" + item.id;
  check.checked = !!completed[item.id];
  check.setAttribute("aria-label", (check.checked ? "Mark incomplete: " : "Mark complete: ") + item.name);
  check.onchange = () => {
    if (check.checked) completed[item.id] = true;
    else delete completed[item.id];
    save();
    card.classList.toggle("done", check.checked);
    check.setAttribute("aria-label", (check.checked ? "Mark incomplete: " : "Mark complete: ") + item.name);
    renderProgress();
    if (matches(item, readFilters(), completed)) updateResults();
    else {
      const cards = [...document.querySelectorAll(".entry")];
      const index = cards.indexOf(card);
      const nextId = cards[index + 1]?.id || cards[index - 1]?.id;
      render();
      const target = nextId && document.getElementById("check-" + nextId);
      (target || document.getElementById("results")).focus();
    }
  };
  const heading = element("div", "entry-heading");
  const name = element("h3", "entry-name", item.name);
  const meta = element("div", "entry-meta", item.region + (item.nearestBeacon ? " · From " + item.nearestBeacon : ""));
  heading.append(name, meta);
  let portrait;
  if (item.kind === "boss") {
    portrait = element("img", "boss-portrait");
    portrait.src = bossArtwork[item.id]?.startsWith("assets/")
      ? `./${bossArtwork[item.id]}`
      : bossArtwork[item.id]
        ? `https://probonk.com/game/mortal-shell-2/${bossArtwork[item.id]}`
        : bossPlaceholder(item.name, item.id);
    portrait.alt = `${item.name} boss`;
    portrait.loading = "lazy";
    portrait.decoding = "async";
    portrait.onerror = () => {
      portrait.onerror = null;
      portrait.src = bossPlaceholder(item.name, item.id);
    };
  }
  heading.append(element("div", "entry-scope", item.scope === "rotten-autumn" ? "Rotten Autumn DLC" : "Base game"));
  if (item.availabilityWarning) heading.append(element("span", "entry-warning", item.availabilityWarning));
  const tag = element("span", "entry-tag", item.category || (item.subtype === "ghost" ? "Ghost" : item.bossType || (item.alreadyCleansed ? "Already active" : "Beacon")));
  row.append(check, heading, tag);
  if (portrait) row.append(portrait);
  if (item.kind === "boss") {
    const description = element("p", "boss-description");
    const encounter = item.nearestBeacon ? `Encountered near ${item.nearestBeacon} in ${item.region}.` : `Encountered in ${item.region}.`;
    const reward = item.rewards ? ` Notable drop: ${item.rewards.split(",")[0]}.` : "";
    description.textContent = encounter + reward;
    card.append(description);
  }
  const details = element("details", "route");
  details.open = disclosureState.get(item.id)?.route || false;
  const summary = element("summary", "", "Route & details");
  const body = element("div", "route-body");
  if (item.requirement) {
    const req = element("p", "note");
    req.append(element("strong", "", "Requirement: "), document.createTextNode(item.requirement));
    body.append(req);
  }
  if (item.kind === "beacon") {
    const rule = item.alreadyCleansed ? "Already active when found." : item.subtype === "ghost" ? "Interact with the Ghost Beacon to enter." : "Follow this beacon’s requirements below; activation varies by location.";
    body.append(element("p", "", rule));
  }
  if (item.nearestBeacon) {
    const beacon = byId.get(item.nearestBeaconId);
    const p = element("p");
    p.append(element("strong", "", "Nearest beacon: "));
    p.append(beacon ? linkTo(beacon, beacon.name) : document.createTextNode(item.nearestBeacon));
    body.append(p);
  }
  if (item.steps?.length) {
    body.append(element("h3", "", "Path"));
    const list = element("ol");
    for (const step of item.steps) list.append(element("li", "", step));
    body.append(list);
  }
  if (item.rewards) body.append(element("p", "", "Rewards: " + item.rewards));
  const related = relatedItems(item);
  if (related.length) {
    body.append(element("h3", "", item.kind === "beacon" ? "Nearby entries" : "Related"));
    const links = element("div", "related");
    for (const entry of related) links.append(linkTo(entry));
    body.append(links);
  }
  if (item.kind === "boss" && item.tip) {
    const tips = element("details", "tips");
    tips.open = disclosureState.get(item.id)?.tips || false;
    tips.append(element("summary", "", "Fight tips (spoilers)"), element("p", "", item.tip));
    body.append(tips);
  }
  const sources = element("div", "sources");
  for (const id of item.sources || []) {
    const source = catalog.sources[id];
    if (!source) continue;
    const a = element("a", "", source.title);
    a.href = source.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    sources.append(a);
  }
  body.append(sources);
  details.append(summary, body);
  card.append(row, details);
  return card;
}

const bossArtwork = {
  "boss-01": "bloodcursed-lithopod-boss-mortal-shell-2-wiki-guide.webp",
  "boss-02": "bor-the-deluded-monarch-boss-mortal-shell-2-game8.webp",
  "boss-03": "caged-grisha-boss-mortal-shell-2-wiki-guide.webp",
  "boss-04": "circle-of-the-grasping-root-boss-mortal-shell-2-game8.webp",
  "boss-05": "infobox-droeg-the-conquerer-mortal-shell-2-wiki.webp",
  "boss-06": "gloombound-legion-boss-mortal-shell-2-game8.webp",
  "boss-07": "gloombound-ritualist-boss-beta-mortal-shell-2-wiki-guide.webp",
  "boss-08": "vestige-gate-29-walkthrough-mortal-shell-ii-wiki-guide.webp",
  "boss-09": "great-arbiter-of-flesh-boss-beta-mortal-shell-2-wiki-guide.webp",
  "boss-10": "grisha-boss-mortal-shell-2-game8.webp",
  "boss-11": "assets/bosses/hexapod.jpg",
  "boss-12": "infested-miner-walkthrough-mortal-shell-ii-wiki-guide.webp",
  "boss-13": "ashen-sanctum-25-walkthrough-mortal-shell-ii-wiki-guide.webp",
  "boss-14": "lucian-the-thirsting-knight-boss-mortal-shell-2-game8.webp",
  "boss-15": "magdalena-lady-of-the-woods-boss-beta-mortal-shell-2-wiki-guide.webp",
  "boss-16": "assets/bosses/malborn-offspring.jpg",
  "boss-17": "infobox-the-nameless-captive-mortal-shell-2-wiki.webp",
  "boss-18": "assets/bosses/orrem-the-reclaimed.jpg",
  "boss-19": "pale-grisha-boss-mortal-shell-2-game8.webp",
  "boss-20": "prophet-of-profane-infinities-boss-mortal-shell-2-wiki-guide.webp",
  "boss-21": "rabid-grisha-pack-boss-mortal-shell-2-game8.webp",
  "boss-22": "sariel-the-endless-boss-mortal-shell-2-game8.webp",
  "boss-23": "servants-of-the-scholar-prince-boss-mortal-shell-2-game8.webp",
  "boss-24": "sester-secundus-boss-mortal-shell-2-wiki-guide.webp",
  "boss-25": "solnir-the-gloom-seeker-boss-mortal-shell-2-game8.webp",
  "boss-26": "starved-harridan-boss-mortal-shell-2-game8.webp",
  "boss-27": "strange-grisha-boss-mortal-shell-2-game8.webp",
  "boss-28": "stray-sesters-boss-mortal-shell-2-game8.webp",
  "boss-29": "subjugated-guardian-boss-mortal-shell-2-wiki-guide.webp",
  "boss-30": "tainted-vestige-boss-mortal-shell-2-game8.webp",
  "boss-31": "tar-golem-boss-mortal-shell-2-wiki-guide.webp",
  "boss-32": "tarblighted-stoner-miniboss-sanguine-caverns-gate-walkthrough-mortal-shell-2-wiki.webp",
  "boss-33": "assets/bosses/foul-passenger.jpg",
  "boss-34": "the-lost-child-screengrab-sanguine-caverns-gate-walkthrough-mortal-shell-2-wiki.webp",
  "boss-35": "assets/bosses/the-monolith.jpg",
  "boss-36": "the-wandering-shepherd-boss-mortal-shell-2-game8.webp",
  "boss-37": "the-warden-boss-2-mortal-shell-2-wiki-guide.webp",
  "boss-38": "thishinas-confessor-boss-mortal-shell-2-wiki.webp",
  "boss-39": "black-sester-sesters-bastion-beacon-dungeon-walkthrough-mortal-shell-2-wiki.webp",
  "boss-40": "tyrants-sycophants-boss-mortal-shell-2-game8.webp",
  "boss-41": "urrig-the-executioner-boss-mortal-shell-2-game8.webp",
  "boss-42": "vellen-high-lord-of-mammon-mortal-shell-2-wiki-guide.webp",
  "boss-43": "viletongue-batushka-boss-mortal-shell-2-game8.webp",
  "boss-44": "vrago-solikar-champion-shield-jump-abandoned-shrine-beacon-dungeon-walkthrough-mortal-shell-2-wiki.webp",
  "boss-45": "vrannic-the-grand-illusionist-boss-mortal-shell-2-game8.webp",
  "boss-46": "assets/bosses/zmey-the-unbidden.jpg"
};
function bossPlaceholder(name, id) {
  const initials = name.split(/\s+/).slice(0, 2).map(part => part[0]).join("");
  const hue = Number(id.slice(-2)) * 29 % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="#17151b"/><circle cx="320" cy="180" r="118" fill="hsl(${hue} 38% 24%)"/><path d="M320 64 404 142 382 270H258l-22-128z" fill="#8c818a"/><text x="320" y="215" text-anchor="middle" font-family="sans-serif" font-size="86" font-weight="700" fill="#f1e9df">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
function filteredItems() {
  const filters = readFilters();
  const filtered = catalog[active].filter(item => matches(item, filters, completed));
  if (document.getElementById("sort").value === "name") filtered.sort((first, second) => first.name.localeCompare(second.name));
  else filtered.sort((first, second) => first.order - second.order);
  return filtered;
}
function updateResults() {
  const filtered = filteredItems();
  document.getElementById("results").textContent = filtered.length + " of " + catalog[active].length + " entries shown · " + numberDone(filtered) + " shown entries complete";
}
function render(urlMethod = "replace") {
  for (const card of document.querySelectorAll(".entry")) {
    disclosureState.set(card.id, { route: card.querySelector(".route").open, tips: card.querySelector(".tips")?.open || false });
  }
  renderProgress();
  renderTabs();
  const group = groups.find(entry => entry.key === active);
  document.getElementById("category-eyebrow").textContent = group.symbol + "  Guide";
  document.getElementById("category-title").textContent = group.title;
  document.getElementById("category-description").textContent = group.description;
  const filtered = filteredItems();
  updateResults();
  const container = document.getElementById("entries");
  container.replaceChildren();
  if (!filtered.length) {
    const message = document.getElementById("scope").value === "rotten-autumn" && active === "bosses"
      ? "No Rotten Autumn bosses have been added to this guide. Try Tarstones, Beacons, or Dungeons."
      : "No entries match these filters. Try another category or change your filters.";
    container.append(element("p", "empty", message));
  }
  else for (const item of filtered) container.append(renderEntry(item));
  syncUrl(urlMethod);
}
function navigateToHash() {
  const target = entryFromHash(location.hash);
  if (!target) return;
  const id = target.id;
  const group = groups.find(entry => catalog[entry.key].some(item => item.id === id));
  active = group.key;
  document.getElementById("search").value = "";
  const scope = document.getElementById("scope");
  if (scope.value !== target.scope) scope.value = "all";
  document.getElementById("status").value = "all";
  document.getElementById("region").value = "all";
  document.getElementById("kind-filter").value = "all";
  updateFilters();
  render();
  const card = document.getElementById(id);
  card.querySelector(".route").open = true;
  card.tabIndex = -1;
  card.focus({ preventScroll: true });
  requestAnimationFrame(() => card.scrollIntoView({ block: "start" }));
}
for (const id of ["search", "region", "scope", "status", "kind-filter", "sort"]) {
  document.getElementById(id).addEventListener(id === "search" ? "input" : "change", render);
}
document.getElementById("export").onclick = () => {
  const data = encodeProgress(completed);
  const url = URL.createObjectURL(new Blob([data], { type: "application/json" }));
  const a = element("a");
  a.href = url;
  a.download = "shell-mate-progress.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  announce("Progress exported.");
};
document.getElementById("import").onclick = () => document.getElementById("import-file").click();
document.getElementById("import-file").onchange = async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const decoded = decodeProgress(JSON.parse(await file.text()));
    completed = decoded.result;
    saveBlocked = false;
    save();
    render();
    announce("Imported " + Object.keys(completed).length + " completed entries" + (decoded.ignored ? "; ignored " + decoded.ignored + " unknown IDs." : "."));
  } catch (error) { announce(error.message || "Could not import this file."); }
  event.target.value = "";
};
window.addEventListener("hashchange", navigateToHash);
window.addEventListener("popstate", () => {
  restoreUrlState();
  render();
});
restoreUrlState();
render();
navigateToHash();
showStorageWarning(loaded.warning);
