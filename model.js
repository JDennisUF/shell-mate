import { catalog } from "./data.js";

export const groups = [
  { key: "tarstones", title: "Tarstones", symbol: "◆", description: "Track the stones in this guide, including Rotten Autumn rewards." },
  { key: "beacons", title: "Beacons", symbol: "✦", description: "Find standard beacons and the four Rotten Autumn Ghost Beacons." },
  { key: "bosses", title: "Bosses", symbol: "⚔", description: "Track main and optional fights. Open fight tips only when you want them." },
  { key: "dungeons", title: "Dungeons", symbol: "▧", description: "Track the 15 Rotten Autumn dungeons. This does not include base-game dungeons." }
];
export const all = groups.flatMap(group => catalog[group.key]);
export const byId = new Map(all.map(item => [item.id, item]));
export const normalize = value => String(value || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9]/g, "");

export function matches(item, filters, completed) {
  const words = [item.name, ...(item.aliases || []), item.region, item.nearestBeacon, item.requirement, item.rewards, ...(item.steps || [])].join(" ");
  return (!filters.search || normalize(words).includes(normalize(filters.search)))
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
