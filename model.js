import { catalog } from "./data.js";

export const groups = [
  { key: "shells", title: "Shells", description: "Track all eight playable Shells and prologue-only Harros, with signature abilities and skills grouped by Bond Tier." },
  { key: "weapons", title: "Weapons", description: "Track the eight primary melee weapons and where to find them." },
  { key: "sidearms", title: "Sidearms", description: "Track all eight ranged sidearms and where to find them." },
  { key: "tarstones", title: "Tarstones", description: "Track the stones in this guide, including Rotten Autumn rewards." },
  { key: "beacons", title: "Beacons", description: "Find standard beacons and the four Rotten Autumn Ghost Beacons." },
  { key: "bosses", title: "Bosses", description: "Track main and optional fights. Open fight tips only when you want them." },
  { key: "dungeons", title: "Dungeons", description: "Track all 37 base-game dungeons and 15 Rotten Autumn dungeons." }
];
export const all = groups.flatMap(group => catalog[group.key]);
export const byId = new Map(all.map(item => [item.id, item]));
export const normalize = value => String(value || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9]/g, "");

export function matches(item, filters, completed) {
  const words = [item.name, ...(item.aliases || []), item.region, item.nearestBeacon, item.requirement, item.rewards, ...(item.steps || []), item.description, ...(item.levelEffects || []), item.fixedEffect];
  if (item.kind === "shell") words.push(...(item.skills || []), ...(item.signature || []));
  return (!filters.search || normalize(words.join(" ")).includes(normalize(filters.search)))
    && (filters.region === "all" || item.region === filters.region)
    && (filters.scope === "all" || item.scope === filters.scope)
    && (filters.status === "all" || (filters.status === "done" ? !!completed[item.id] : !completed[item.id]))
    && (filters.kind === "all" || (item.category || item.subtype || item.bossType) === filters.kind);
}

export function relatedItems(item) {
  return [...new Set([item.nearestBeaconId, ...(item.relatedIds || [])])]
    .filter(id => id && id !== item.id).map(id => byId.get(id)).filter(Boolean);
}

export function entryFromHash(hash) {
  try { return byId.get(decodeURIComponent(hash.slice(1))); }
  catch { return undefined; }
}
