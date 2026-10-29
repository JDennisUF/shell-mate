import { byId } from "./model.js";
import { catalog } from "./data.js";

export const saveKey = "shell-mate-progress-v2";
export const legacyKey = "shell-mate-rotten-autumn-v1";
const validRecord = value => value && typeof value === "object" && !Array.isArray(value);

function legacyProgress(data) {
  if (!validRecord(data) || !validRecord(data.dungeons) || !validRecord(data.ghosts)) throw new Error("This is not a Shell Mate progress file.");
  const result = {};
  let ignored = 0;
  for (const [key, items] of [["dungeons", catalog.dungeons], ["ghosts", catalog.beacons.filter(item => item.subtype === "ghost")]]) {
    for (const [name, value] of Object.entries(data[key])) {
      if (typeof value !== "boolean") throw new Error("Progress values must be true or false.");
      const item = items.find(entry => [entry.name, entry.legacyName, ...(entry.aliases || [])].includes(name));
      if (!item) ignored++;
      else if (value) result[item.id] = true;
    }
  }
  return { result, ignored };
}

export function decodeProgress(data) {
  if (!validRecord(data)) throw new Error("This is not a Shell Mate progress file.");
  if (Object.hasOwn(data, "version")) {
    if (data.version !== 2 || !validRecord(data.completed)) throw new Error("This progress file uses an unsupported format.");
    const result = {};
    let ignored = 0;
    for (const [id, value] of Object.entries(data.completed)) {
      if (typeof value !== "boolean") throw new Error("Progress values must be true or false.");
      if (!byId.has(id)) ignored++;
      else if (value) result[id] = true;
    }
    const skillRanks = {};
    if (Object.hasOwn(data, "skillRanks")) {
      if (!validRecord(data.skillRanks)) throw new Error("Skill selections must be an object.");
      for (const [shellId, ranks] of Object.entries(data.skillRanks)) {
        if (!validRecord(ranks)) throw new Error("Skill selections must be an object.");
        const shell = catalog.shells.find(item => item.id === shellId && item.maxShellPoints);
        for (const [skillName, rank] of Object.entries(ranks)) {
          if (!Number.isInteger(rank) || rank < 1) throw new Error("Skill levels must be positive whole numbers.");
          const skill = shell?.skillDetails.find(item => item.name === skillName);
          if (!skill) { ignored++; continue; }
          if (rank > skill.levels.length) throw new Error("Skill level exceeds the available ranks.");
          (skillRanks[shellId] ||= {})[skillName] = rank;
        }
      }
    }
    return { result, skillRanks, ignored };
  }
  return { ...legacyProgress(data), skillRanks: {} };
}

export function encodeProgress(completed, skillRanks = {}) {
  return JSON.stringify({ version: 2, completed, ...(Object.keys(skillRanks).length ? { skillRanks } : {}) }, null, 2);
}

export function loadProgress(storage) {
  let current;
  let old;
  try {
    current = storage.getItem(saveKey);
    if (current !== null) {
      try {
        const decoded = decodeProgress(JSON.parse(current));
        return { completed: decoded.result, skillRanks: decoded.skillRanks, blocked: false, warning: "" };
      }
      catch { return { completed: {}, skillRanks: {}, blocked: true, warning: "Saved progress could not be read. It has been left untouched. Export any new checks before leaving, or import a backup to replace the unreadable save." }; }
    }
    old = storage.getItem(legacyKey);
  } catch {
    return { completed: {}, skillRanks: {}, blocked: false, warning: "Browser saving is unavailable. Export your progress before leaving this page." };
  }
  if (old !== null) {
    let migrated;
    try { migrated = legacyProgress(JSON.parse(old)).result; }
    catch { return { completed: {}, skillRanks: {}, blocked: true, warning: "Your older save could not be read and has been left untouched. Export new checks before leaving, or import a backup." }; }
    const warning = saveProgress(storage, migrated);
    return { completed: migrated, skillRanks: {}, blocked: false, warning };
  }
  return { completed: {}, skillRanks: {}, blocked: false, warning: "" };
}

export function saveProgress(storage, completed, skillRanks = {}) {
  try { storage.setItem(saveKey, encodeProgress(completed, skillRanks)); return ""; }
  catch { return "Browser saving is unavailable. Export your progress before leaving this page."; }
}
