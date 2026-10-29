import { catalog } from "./data.js";
import { groups, all, byId, matches, relatedItems, entryFromHash } from "./model.js";
import { loadProgress, saveProgress, decodeProgress, encodeProgress } from "./storage.js";
import { tarstoneArtwork } from "./tarstone-art.js";

let active = "tarstones";
const urlFilterIds = { region: "region", content: "scope", progress: "status", type: "kind-filter", order: "sort" };
const urlDefaults = { page: "tarstones", search: "", region: "all", content: "all", progress: "all", type: "all", order: "catalog" };
const categoryArtwork = {
  shells: "assets/shells/tiel.webp",
  weapons: "assets/weapons/iconoclast.webp",
  sidearms: "assets/weapons/naylshotte.webp",
  tarstones: "assets/categories/tarstones.png",
  beacons: "assets/categories/beacons.png",
  bosses: "assets/categories/bosses-red-eyes.png",
  dungeons: "assets/categories/dungeons.png"
};
const storage = {
  getItem: key => window.localStorage.getItem(key),
  setItem: (key, value) => window.localStorage.setItem(key, value)
};
const loaded = loadProgress(storage);
let completed = loaded.completed;
let skillRanks = loaded.skillRanks;
let saveBlocked = loaded.blocked;
const completionExclusions = new Set(["tar-ra-wellspring-stone", "tar-ra-forsaken-vow"]);
const currentlyFindable = all.filter(item => !completionExclusions.has(item.id));
let wasKnownComplete = currentlyFindable.every(item => !!completed[item.id]);
let wasAllComplete = all.every(item => !!completed[item.id]);
let noticeTimer;
const disclosureState = new Map();

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
const tarstoneKeywords = [
  ["faithful-doubles", "Faithful Doubles"], ["stray-doubles", "Stray Doubles"],
  ["critical-damage", "Critical Damage"], ["critical-chance", "Critical Chance"],
  ["break-damage", "Break Damage"], ["stagger-damage", "Stagger Damage"],
  ["bloodcurse", "Bloodcurse"], ["perforation", "Perforation"], ["lightning", "Lightning"],
  ["phantom", "Phantom"], ["fragile", "Fragile"], ["health", "Health"], ["resolve", "Resolve"],
  ["weak", "Weak"], ["burn", "Burn"], ["warp", "Warp"], ["leech", "Leech"],
  ["frost", "Frost"], ["stasis", "Stasis"], ["poison", "Poison"], ["curse", "Curse"], ["trauma", "Trauma"]
];
const tarstoneKeywordPattern = new RegExp(`\\b(${tarstoneKeywords.map(([, word]) => word.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")).join("|")})\\b`, "gi");
const tarstoneKeywordClasses = new Map(tarstoneKeywords.map(([className, word]) => [word.toLowerCase(), className]));
const highlightedNumberPattern = /(?<![\w.])[-+]?\d+(?:\.\d+)?(?:%|s\b)?/gi;
function appendTarstoneText(target, text) {
  let lastIndex = 0;
  let match;
  highlightedNumberPattern.lastIndex = 0;
  while ((match = highlightedNumberPattern.exec(text))) {
    target.append(document.createTextNode(text.slice(lastIndex, match.index)));
    target.append(element("span", "tarstone-number", match[0]));
    lastIndex = match.index + match[0].length;
  }
  target.append(document.createTextNode(text.slice(lastIndex)));
}
function appendTarstoneKeywords(target, text) {
  let lastIndex = 0;
  tarstoneKeywordPattern.lastIndex = 0;
  let match;
  while ((match = tarstoneKeywordPattern.exec(text))) {
    const preceding = text.slice(lastIndex, match.index);
    const value = preceding.match(/([-+]?\d+(?:\.\d+)?(?:%|×|x)?)(\s+)$/i);
    const sharesKeywordColor = value && !value[1].endsWith("%");
    const start = sharesKeywordColor ? match.index - value[0].length : match.index;
    if (sharesKeywordColor) {
      appendTarstoneText(target, text.slice(lastIndex, start));
      target.append(element("span", `tarstone-keyword tarstone-keyword-${tarstoneKeywordClasses.get(match[0].toLowerCase())}`, text.slice(start, match.index + match[0].length)));
    } else {
      appendTarstoneText(target, text.slice(lastIndex, match.index));
      target.append(element("span", `tarstone-keyword tarstone-keyword-${tarstoneKeywordClasses.get(match[0].toLowerCase())}`, match[0]));
    }
    lastIndex = match.index + match[0].length;
  }
  appendTarstoneText(target, text.slice(lastIndex));
}
function tarstoneKeywordClassIn(text) {
  tarstoneKeywordPattern.lastIndex = 0;
  const match = tarstoneKeywordPattern.exec(text);
  tarstoneKeywordPattern.lastIndex = 0;
  return match ? tarstoneKeywordClasses.get(match[0].toLowerCase()) : "";
}
function appendTarstoneEffect(target, effect) {
  const numberPattern = /\d+(?:\.\d+)?(?:%|×|x)?(?:s(?![A-Za-z]))?/gi;
  const phraseStops = new Set(["a", "an", "and", "as", "at", "before", "but", "by", "each", "every", "for", "from", "if", "in", "into", "on", "or", "per", "that", "then", "to", "when", "while"]);
  let lastIndex = 0;
  let match;
  while ((match = numberPattern.exec(effect))) {
    let end = match.index + match[0].length;
    let words = 0;
    const phrasePattern = /\s+([A-Za-z][A-Za-z’'-]*)/g;
    phrasePattern.lastIndex = end;
    while (words < 5) {
      const phrase = phrasePattern.exec(effect);
      if (!phrase || /[.,;:!?]/.test(effect.slice(end, phrase.index))) break;
      if (phraseStops.has(phrase[1].toLowerCase())) break;
      end = phrasePattern.lastIndex;
      words++;
    }
    appendTarstoneKeywords(target, effect.slice(lastIndex, match.index));
    const statText = effect.slice(match.index, end);
    const keywordClass = tarstoneKeywordClassIn(statText);
    const stat = element("span", `tarstone-stat-value${keywordClass ? ` tarstone-keyword tarstone-keyword-${keywordClass}` : ""}`);
    appendTarstoneKeywords(stat, statText);
    target.append(stat);
    lastIndex = end;
    numberPattern.lastIndex = end;
  }
  appendTarstoneKeywords(target, effect.slice(lastIndex));
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
  if (!saveBlocked) showStorageWarning(saveProgress(storage, completed, skillRanks));
}
function shellPointsSpent(shellId) {
  return Object.values(skillRanks[shellId] || {}).reduce((total, rank) => total + rank * (rank + 1) / 2, 0);
}
function numberDone(items) { return items.filter(item => completed[item.id]).length; }
function renderProgress() {
  const scope = document.getElementById("scope").value;
  const scoped = items => items.filter(item => scope === "all" || item.scope === scope);
  const items = scoped(all);
  const count = numberDone(items);
  const totalDone = numberDone(all);
  const allComplete = totalDone === all.length;
  const knownDone = numberDone(currentlyFindable);
  const knownComplete = knownDone === currentlyFindable.length;
  document.getElementById("overall-count").textContent = count + " / " + items.length;
  document.getElementById("progress-scope").textContent = scope === "rotten-autumn" ? "Rotten Autumn DLC entries in this guide" : scope === "base" ? "Base-game entries in this guide" : "All entries in this guide";
  const progress = document.getElementById("overall-progress");
  progress.max = items.length || 1;
  progress.value = count;
  const completionBanner = document.getElementById("completion-banner");
  completionBanner.hidden = !knownComplete;
  completionBanner.classList.toggle("provisional", knownComplete && !allComplete);
  completionBanner.classList.toggle("perfect", allComplete);
  document.getElementById("completion-title").textContent = allComplete
    ? `Perfect completion — ${totalDone} / ${all.length}`
    : `Everything currently found is complete — ${totalDone} / ${all.length}`;
  document.getElementById("completion-message").textContent = allComplete
    ? "Every Shell, Weapon, Sidearm, Tarstone, Beacon, Boss, and Dungeon is checked. Take a victory lap, Shellbearer."
    : `Wellspring Stone and Forsaken Vow are ignored for completion for now, but remain in the ${all.length} total until they are found.`;
  if ((knownComplete && !wasKnownComplete) || (allComplete && !wasAllComplete)) {
    completionBanner.classList.remove("celebrate");
    void completionBanner.offsetWidth;
    completionBanner.classList.add("celebrate");
  } else if (!knownComplete) completionBanner.classList.remove("celebrate");
  wasKnownComplete = knownComplete;
  wasAllComplete = allComplete;
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
    const icon = element("img", "tab-icon");
    icon.src = new URL(categoryArtwork[group.key], import.meta.url).href;
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    button.prepend(icon, document.createTextNode(" "));
    button.type = "button";
    button.dataset.category = group.key;
    button.setAttribute("aria-current", active === group.key ? "page" : "false");
    button.onclick = () => {
      if (active === group.key) return;
      active = group.key;
      document.getElementById("search").value = "";
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
  const regions = [...new Set(all.map(item => item.region))].sort((a, b) => a.localeCompare(b));
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
    label.textContent = active === "dungeons" ? "Dungeon" : "Type";
    setOptions(extra, [["all", active === "dungeons" ? "All dungeons" : "All types"]], "all");
  }
  extra.disabled = !["tarstones", "beacons", "bosses"].includes(active);
}
function readFilters() {
  const filters = Object.fromEntries(["search", "region", "scope", "status"].map(id => [id, document.getElementById(id).value]));
  filters.kind = document.getElementById("kind-filter").value;
  return filters;
}
function syncUrl(method = "replace") {
  const url = new URL(location.href);
  url.search = "";
  const values = {
    page: active,
    search: document.getElementById("search").value.trim(),
    region: document.getElementById("region").value,
    content: document.getElementById("scope").value,
    progress: document.getElementById("status").value,
    type: document.getElementById("kind-filter").value,
    order: document.getElementById("sort").value
  };
  for (const [param, value] of Object.entries(values)) {
    if (value !== urlDefaults[param]) url.searchParams.set(param, value);
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
  for (const id of ["region", "scope", "status", "kind-filter"]) document.getElementById(id).value = "all";
  document.getElementById("sort").value = "catalog";
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
  const clearRankSelections = [];
  let pointsRow;
  let pointCounter;
  let resetButton;
  const updatePointCounter = () => {
    if (!pointCounter) return;
    const spent = shellPointsSpent(item.id);
    pointCounter.textContent = `Shell Points: ${spent} / ${item.maxShellPoints}`;
    pointCounter.classList.toggle("over-limit", spent > item.maxShellPoints);
    resetButton.disabled = spent === 0;
  };
  if (item.kind === "shell" && item.maxShellPoints) {
    pointsRow = element("div", "shell-points-row");
    pointCounter = element("div", "shell-points");
    pointCounter.setAttribute("aria-live", "polite");
    resetButton = element("button", "shell-reset", "Reset");
    resetButton.type = "button";
    resetButton.setAttribute("aria-label", `Reset ${item.shellName} skill ranks`);
    resetButton.onclick = () => {
      delete skillRanks[item.id];
      clearRankSelections.forEach(clear => clear());
      updatePointCounter();
      save();
    };
    updatePointCounter();
    pointsRow.append(pointCounter, resetButton);
  }
  let portrait;
  if (item.kind === "tarstone") {
    portrait = element("img", "tarstone-portrait");
    const hasArtwork = !!tarstoneArtwork[item.id];
    portrait.src = `./${tarstoneArtwork[item.id] || "assets/tarstones/unknown-placeholder.webp"}`;
    portrait.alt = hasArtwork ? `${item.name} icon` : `${item.name} placeholder icon`;
    portrait.loading = "lazy";
    portrait.decoding = "async";
  }
  if (item.kind === "beacon") {
    portrait = element("img", "beacon-portrait");
    const ghostBeacon = item.subtype === "ghost";
    portrait.src = new URL(ghostBeacon ? "assets/categories/ghost-beacon.png" : "assets/categories/beacons.png", import.meta.url).href;
    portrait.alt = ghostBeacon ? `${item.name} icon` : `${item.name} beacon icon`;
    portrait.loading = "lazy";
    portrait.decoding = "async";
  }
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
  if (item.kind === "shell") {
    portrait = element("img", "shell-portrait");
    portrait.src = `./${item.image}`;
    portrait.alt = `${item.shellName} portrait`;
    portrait.loading = "lazy";
    portrait.decoding = "async";
  }
  if (item.kind === "weapon" || item.kind === "sidearm") {
    portrait = element("img", item.kind === "sidearm" ? "equipment-portrait sidearm-portrait" : "equipment-portrait");
    portrait.src = new URL(item.image, import.meta.url).href;
    portrait.alt = `${item.name} in Mortal Shell II`;
    portrait.loading = "lazy";
    portrait.decoding = "async";
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
  const summary = element("summary", "", item.kind === "shell" ? "Abilities & details" : "Route & details");
  const body = element("div", "route-body");
  if (item.kind === "tarstone") {
    if (item.description) {
      const description = element("p", "tarstone-description");
      appendTarstoneKeywords(description, item.description);
      body.append(description);
    }
    else body.append(element("p", "note", "Fextralife does not have a description for this Tarstone yet."));
    if (item.levelEffects?.length === 3) {
      body.append(element("h3", "", "Upgrade effects"));
      const levels = element("ol", "tarstone-levels");
      item.levelEffects.forEach((effect, index) => {
        const level = element("li");
        level.append(element("strong", "", `Level ${index + 1}: `));
        appendTarstoneEffect(level, effect);
        levels.append(level);
      });
      body.append(levels);
    } else if (item.fixedEffect) {
      const extra = element("p");
      extra.append(document.createTextNode("Additional effect details: "));
      appendTarstoneKeywords(extra, item.fixedEffect);
      body.append(extra);
    }
  }
  if ((item.kind === "weapon" || item.kind === "sidearm") && item.description) {
    body.append(element("p", "equipment-description", item.description));
  }
  if (item.kind === "shell") {
    for (const ability of item.signature) {
      const signature = element("p", "shell-signature");
      appendTarstoneKeywords(signature, ability);
      body.append(signature);
    }
    if (item.skills.length) {
      const skillsHeader = element("div", "shell-skills-header");
      skillsHeader.append(element("h3", "", "Shell Point skills"), pointsRow);
      body.append(skillsHeader);
      body.append(element("p", "shell-skill-note", "Skills are grouped by Bond Tier. Each rank costs its rank number in Shell Points; selecting a rank includes every lower rank."));
      const tiers = element("div", "shell-tiers");
      for (let tier = 1; tier <= 4; tier++) {
        const tierSkills = (item.skillDetails || []).filter(skill => skill.tier === tier);
        if (!tierSkills.length) continue;
        const tierCard = element("section", "shell-tier");
        tierCard.append(element("h4", "shell-tier-title", `Tier ${tier}`));
        const skills = element("ul", "shell-skills");
        for (const skill of tierSkills) {
          const itemNode = element("li", "shell-skill");
          itemNode.append(element("h5", "shell-skill-title", skill.name));
          if (skill.description) {
            const description = element("p", "shell-skill-description");
            appendTarstoneKeywords(description, skill.description);
            itemNode.append(description);
          }
          if (skill.levels?.length) {
            const ranks = element("ol", "shell-skill-ranks");
            const rankButtons = [];
            let selectedRank = skillRanks[item.id]?.[skill.name] || 0;
            const updateRankButtons = () => {
              rankButtons.forEach((button, index) => {
                const selected = index < selectedRank;
                button.setAttribute("aria-pressed", String(selected));
                button.parentElement.classList.toggle("selected", selected);
              });
            };
            clearRankSelections.push(() => {
              selectedRank = 0;
              updateRankButtons();
            });
            skill.levels.forEach((effect, index) => {
              const rankNumber = index + 1;
              const rank = element("li", index < selectedRank ? "selected" : "");
              const button = element("button", "shell-rank-button", String(rankNumber));
              button.type = "button";
              button.setAttribute("aria-label", `${item.shellName} ${skill.name} rank ${rankNumber}`);
              button.setAttribute("aria-pressed", String(index < selectedRank));
              button.title = `Rank ${rankNumber} costs ${rankNumber} Shell ${rankNumber === 1 ? "Point" : "Points"}`;
              button.onclick = () => {
                selectedRank = selectedRank === rankNumber ? 0 : rankNumber;
                if (selectedRank) (skillRanks[item.id] ||= {})[skill.name] = selectedRank;
                else {
                  delete skillRanks[item.id]?.[skill.name];
                  if (skillRanks[item.id] && !Object.keys(skillRanks[item.id]).length) delete skillRanks[item.id];
                }
                updateRankButtons();
                updatePointCounter();
                save();
              };
              rankButtons.push(button);
              const effectText = element("span", "shell-rank-effect");
              appendTarstoneKeywords(effectText, effect);
              rank.append(button, effectText);
              ranks.append(rank);
            });
            itemNode.append(ranks);
          }
          skills.append(itemNode);
        }
        tierCard.append(skills);
        tiers.append(tierCard);
      }
      body.append(tiers);
    } else {
      body.append(element("p", "note", "Harros is playable only during the opening prologue and has no Shell Point skill tree."));
    }
  }
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
  if (item.descriptionSource) {
    const a = element("a", "", "Fextralife");
    a.href = item.descriptionSource;
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
  "boss-01": "assets/bosses/boss-01.jpg",
  "boss-02": "assets/bosses/boss-02.jpg",
  "boss-03": "assets/bosses/boss-03.jpg",
  "boss-04": "assets/bosses/boss-04.jpg",
  "boss-05": "assets/bosses/boss-05.jpg",
  "boss-06": "assets/bosses/boss-06.jpg",
  "boss-07": "assets/bosses/boss-07.jpg",
  "boss-08": "assets/bosses/boss-08.jpg",
  "boss-09": "assets/bosses/boss-09.jpg",
  "boss-10": "assets/bosses/boss-10.jpg",
  "boss-11": "assets/bosses/hexapod.jpg",
  "boss-12": "assets/bosses/boss-12.jpg",
  "boss-13": "assets/bosses/boss-13.jpg",
  "boss-14": "assets/bosses/boss-14.jpg",
  "boss-15": "assets/bosses/boss-15.jpg",
  "boss-16": "assets/bosses/malborn-offspring.jpg",
  "boss-17": "assets/bosses/boss-17.jpg",
  "boss-18": "assets/bosses/orrem-the-reclaimed.jpg",
  "boss-19": "assets/bosses/boss-19.jpg",
  "boss-20": "assets/bosses/boss-20.jpg",
  "boss-21": "assets/bosses/boss-21.jpg",
  "boss-22": "assets/bosses/boss-22.jpg",
  "boss-23": "assets/bosses/boss-23.jpg",
  "boss-24": "assets/bosses/boss-24.jpg",
  "boss-25": "assets/bosses/boss-25.jpg",
  "boss-26": "assets/bosses/boss-26.jpg",
  "boss-27": "assets/bosses/boss-27.jpg",
  "boss-28": "assets/bosses/boss-28.jpg",
  "boss-29": "assets/bosses/boss-29.jpg",
  "boss-30": "assets/bosses/boss-30.jpg",
  "boss-31": "assets/bosses/boss-31.jpg",
  "boss-32": "assets/bosses/boss-32.jpg",
  "boss-33": "assets/bosses/foul-passenger.jpg",
  "boss-34": "assets/bosses/boss-34.jpg",
  "boss-35": "assets/bosses/the-monolith.jpg",
  "boss-36": "assets/bosses/boss-36.jpg",
  "boss-37": "assets/bosses/boss-37.jpg",
  "boss-38": "assets/bosses/boss-38.jpg",
  "boss-39": "assets/bosses/boss-39.jpg",
  "boss-40": "assets/bosses/boss-40.jpg",
  "boss-41": "assets/bosses/boss-41.jpg",
  "boss-42": "assets/bosses/boss-42.jpg",
  "boss-43": "assets/bosses/boss-43.jpg",
  "boss-44": "assets/bosses/boss-44.jpg",
  "boss-45": "assets/bosses/boss-45.jpg",
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
  document.getElementById("category-eyebrow").textContent = "TRACKING GUIDE";
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
  const filters = readFilters();
  const scope = document.getElementById("scope");
  if (filters.scope !== "all" && filters.scope !== target.scope) scope.value = "all";
  if (filters.region !== "all" && filters.region !== target.region) document.getElementById("region").value = "all";
  if (filters.status !== "all" && (filters.status === "done") !== !!completed[target.id]) document.getElementById("status").value = "all";
  const targetKind = target.category || target.subtype || target.bossType;
  if (filters.kind !== "all" && filters.kind !== targetKind) document.getElementById("kind-filter").value = "all";
  updateFilters();
  if (!matches(target, readFilters(), completed)) document.getElementById("search").value = "";
  render();
  const card = document.getElementById(id);
  if (!card) return;
  card.querySelector(".route").open = true;
  card.tabIndex = -1;
  card.focus({ preventScroll: true });
  requestAnimationFrame(() => card.scrollIntoView({ block: "start" }));
}
for (const id of ["search", "region", "scope", "status", "kind-filter", "sort"]) {
  document.getElementById(id).addEventListener(id === "search" ? "input" : "change", () => render());
}
document.getElementById("export").onclick = () => {
  const data = encodeProgress(completed, skillRanks);
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
    skillRanks = decoded.skillRanks;
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
