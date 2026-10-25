import { catalog } from "./data.js";

const groups = [
  { key: "tarstones", title: "Tarstones", symbol: "◆", description: "Find every collectible stone and the steps needed to claim it." },
  { key: "beacons", title: "Beacons", symbol: "✦", description: "Navigate to each beacon, including the existing Ghost Beacon checklist." },
  { key: "bosses", title: "Bosses", symbol: "⚔", description: "Track main and optional fights. Fight tips stay hidden until opened." },
  { key: "dungeons", title: "Dungeons", symbol: "▧", description: "Your Rotten Autumn dungeon checklist." }
];
const all = groups.flatMap(group => catalog[group.key]);
const byId = new Map(all.map(item => [item.id, item]));
const saveKey = "shell-mate-progress-v2";
const legacyKey = "shell-mate-rotten-autumn-v1";
const normalize = value => String(value || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9]/g, "");
const beaconByName = new Map(catalog.beacons.filter(item => item.subtype === "standard").map(item => [normalize(item.name), item]));
const openRoutes = new Set();
let active = "tarstones";
let completed = loadProgress();
let noticeTimer;

function findBeacon(name) { return beaconByName.get(normalize(name)); }
function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
function linkTo(item, label) {
  const a = element("a", "", label || item.name);
  a.href = "#" + item.id;
  return a;
}
function announce(message) {
  const box = document.getElementById("notice");
  box.textContent = message;
  box.classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => box.classList.remove("show"), 5500);
}
function validRecord(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}
function legacyProgress(data) {
  if (!validRecord(data) || !validRecord(data.dungeons) || !validRecord(data.ghosts)) throw new Error("This is not a Shell Mate progress file.");
  const result = {};
  for (const item of catalog.dungeons) if (data.dungeons[item.name] === true) result[item.id] = true;
  for (const item of catalog.beacons.filter(entry => entry.subtype === "ghost")) if (data.ghosts[item.legacyName] === true) result[item.id] = true;
  return result;
}
function decodeProgress(data) {
  if (validRecord(data) && data.version === 2 && validRecord(data.completed)) {
    const result = {};
    let ignored = 0;
    for (const [id, value] of Object.entries(data.completed)) {
      if (typeof value !== "boolean") throw new Error("Progress values must be true or false.");
      if (!byId.has(id)) { ignored++; continue; }
      if (value) result[id] = true;
    }
    return { result, ignored };
  }
  return { result: legacyProgress(data), ignored: 0 };
}
function loadProgress() {
  try {
    const current = localStorage.getItem(saveKey);
    if (current) return decodeProgress(JSON.parse(current)).result;
    const old = localStorage.getItem(legacyKey);
    if (old) {
      const migrated = legacyProgress(JSON.parse(old));
      localStorage.setItem(saveKey, JSON.stringify({ version: 2, completed: migrated }));
      return migrated;
    }
  } catch (error) {
    setTimeout(() => announce("Saved progress could not be read. Import a backup if you have one."), 0);
  }
  return {};
}
function save() {
  try { localStorage.setItem(saveKey, JSON.stringify({ version: 2, completed })); }
  catch { announce("Browser storage is unavailable. Export your progress to keep it."); }
}
function numberDone(items) { return items.filter(item => completed[item.id]).length; }
function renderProgress() {
  const count = numberDone(all);
  document.getElementById("overall-count").textContent = count + " / " + all.length;
  const progress = document.getElementById("overall-progress");
  progress.max = all.length;
  progress.value = count;
  const stats = document.getElementById("category-progress");
  stats.replaceChildren();
  for (const group of groups) {
    const cell = element("div", "progress-stat");
    const strong = element("strong", "", numberDone(catalog[group.key]) + " / " + catalog[group.key].length);
    cell.append(strong, document.createTextNode(group.title));
    stats.append(cell);
  }
}
function renderTabs() {
  const nav = document.getElementById("tabs");
  nav.replaceChildren();
  for (const group of groups) {
    const button = element("button", "tab", group.symbol + "  " + group.title);
    button.type = "button";
    button.setAttribute("aria-current", active === group.key ? "page" : "false");
    button.onclick = () => {
      if (active === group.key) return;
      active = group.key;
      document.getElementById("search").value = "";
      document.getElementById("region").value = "all";
      document.getElementById("scope").value = "all";
      document.getElementById("status").value = "all";
      document.getElementById("sort").value = "progression";
      updateFilters();
      render();
    };
    nav.append(button);
  }
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
function matches(item) {
  const q = normalize(document.getElementById("search").value);
  const region = document.getElementById("region").value;
  const scope = document.getElementById("scope").value;
  const status = document.getElementById("status").value;
  const kind = document.getElementById("kind-filter").value;
  const words = [item.name, item.region, item.nearestBeacon, item.requirement, item.rewards, ...(item.steps || [])].join(" ");
  if (q && !normalize(words).includes(q)) return false;
  if (region !== "all" && item.region !== region) return false;
  if (scope !== "all" && item.scope !== scope) return false;
  if (status === "done" && !completed[item.id]) return false;
  if (status === "open" && completed[item.id]) return false;
  if (kind !== "all" && (item.category || item.subtype || item.bossType) !== kind) return false;
  return true;
}
function relatedItems(item) {
  const result = [];
  if (item.nearestBeacon) {
    const beacon = findBeacon(item.nearestBeacon);
    if (beacon && beacon.id !== item.id) result.push(beacon);
  }
  if (item.kind === "beacon") {
    for (const other of [...catalog.tarstones, ...catalog.bosses]) {
      if (normalize(other.nearestBeacon) === normalize(item.name)) result.push(other);
    }
  }
  if (item.kind === "boss") {
    for (const stone of catalog.tarstones) if (item.rewards && normalize(item.rewards).includes(normalize(stone.name))) result.push(stone);
  }
  if (item.subtype === "ghost") {
    const dungeon = catalog.dungeons.find(entry => entry.name === item.legacyName);
    if (dungeon) result.push(dungeon);
  }
  return [...new Map(result.map(entry => [entry.id, entry])).values()];
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
    render();
  };
  const heading = element("div", "entry-heading");
  const name = element("div", "entry-name", item.name);
  const meta = element("div", "entry-meta", item.region + (item.nearestBeacon ? " · From " + item.nearestBeacon : ""));
  heading.append(name, meta);
  const tag = element("span", "entry-tag", item.category || (item.subtype === "ghost" ? "Ghost" : item.bossType || (item.alreadyCleansed ? "Already active" : "Beacon")));
  row.append(check, heading, tag);
  const details = element("details", "route");
  details.open = openRoutes.has(item.id);
  details.ontoggle = () => { if (details.open) openRoutes.add(item.id); else openRoutes.delete(item.id); };
  const summary = element("summary", "", "Route & details");
  const body = element("div", "route-body");
  if (item.requirement) {
    const req = element("p", "note");
    req.append(element("strong", "", "Requirement: "), document.createTextNode(item.requirement));
    body.append(req);
  }
  if (item.kind === "beacon") {
    const rule = item.alreadyCleansed ? "Already active when found." : item.subtype === "ghost" ? "Ghost Beacon discovery." : "Enter and finish its challenge to cleanse it; claim the Ova at the end.";
    body.append(element("p", "", rule));
  }
  if (item.nearestBeacon) {
    const beacon = findBeacon(item.nearestBeacon);
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
  const related = relatedItems(item).slice(0, 16);
  if (related.length) {
    body.append(element("h3", "", item.kind === "beacon" ? "Nearby entries" : "Related"));
    const links = element("div", "related");
    for (const entry of related) links.append(linkTo(entry));
    body.append(links);
  }
  if (item.kind === "boss" && item.tip) {
    const tips = element("details", "tips");
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
function render() {
  renderProgress();
  renderTabs();
  const group = groups.find(entry => entry.key === active);
  document.getElementById("category-eyebrow").textContent = group.symbol + "  Guide";
  document.getElementById("category-title").textContent = group.title;
  document.getElementById("category-description").textContent = group.description;
  const filtered = catalog[active].filter(matches);
  if (document.getElementById("sort").value === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
  else filtered.sort((a, b) => a.order - b.order);
  document.getElementById("results").textContent = filtered.length + " of " + catalog[active].length + " entries · " + numberDone(catalog[active]) + " complete";
  const container = document.getElementById("entries");
  container.replaceChildren();
  if (!filtered.length) container.append(element("p", "empty", "No entries match these filters."));
  else for (const item of filtered) container.append(renderEntry(item));
}
function navigateToHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = byId.get(id);
  if (!target) return;
  const group = groups.find(entry => catalog[entry.key].some(item => item.id === id));
  active = group.key;
  document.getElementById("search").value = "";
  document.getElementById("scope").value = "all";
  document.getElementById("status").value = "all";
  document.getElementById("region").value = "all";
  document.getElementById("kind-filter").value = "all";
  updateFilters();
  openRoutes.add(id);
  render();
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
}
for (const id of ["search", "region", "scope", "status", "kind-filter", "sort"]) {
  document.getElementById(id).addEventListener(id === "search" ? "input" : "change", render);
}
document.getElementById("export").onclick = () => {
  const data = JSON.stringify({ version: 2, completed }, null, 2);
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
    save();
    render();
    announce("Imported " + Object.keys(completed).length + " completed entries" + (decoded.ignored ? "; ignored " + decoded.ignored + " unknown IDs." : "."));
  } catch (error) { announce(error.message || "Could not import this file."); }
  event.target.value = "";
};
window.addEventListener("hashchange", navigateToHash);
updateFilters();
render();
navigateToHash();
