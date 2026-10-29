import test from "node:test";
import assert from "node:assert/strict";
import { catalog } from "../data.js";
import { all, byId, matches, relatedItems, entryFromHash } from "../model.js";

const filters = { search: "", region: "all", scope: "all", status: "all", kind: "all" };

test("catalog entries have unique permanent IDs, checklist information, sources, and valid links", () => {
  assert.equal(byId.size, all.length);
  for (const item of all) {
    for (const field of ["id", "name", "kind", "region", "scope"]) assert.ok(item[field], item.id + ": " + field);
    assert.ok(["base", "rotten-autumn"].includes(item.scope));
    assert.ok(Number.isFinite(item.order));
    assert.ok(Array.isArray(item.aliases));
    if (item.kind === "shell") {
      assert.ok(item.image, item.id + ": image");
      assert.ok(item.signature?.length, item.id + ": signature");
      assert.ok(Array.isArray(item.skills), item.id + ": skills");
    } else {
      assert.ok(item.steps?.length, item.id + ": steps");
      assert.ok(item.sources?.length, item.id + ": sources");
      for (const source of item.sources) {
        assert.ok(catalog.sources[source], item.id + ": " + source);
        assert.equal(new URL(catalog.sources[source].url).protocol, "https:");
      }
    }
    if (item.nearestBeacon) assert.equal(byId.get(item.nearestBeaconId)?.kind, "beacon", item.id);
    for (const relatedId of item.relatedIds || []) {
      assert.ok(byId.has(relatedId), item.id + ": " + relatedId);
      assert.notEqual(relatedId, item.id);
    }
  }
});

test("original saved IDs are preserved", () => {
  for (const [prefix, count] of [["tar", 75], ["beacon", 49], ["ghost", 4], ["boss", 46], ["dungeon", 52]]) {
    for (let index = 1; index <= count; index++) assert.ok(byId.has(prefix + "-" + String(index).padStart(2, "0")));
  }
});

test("DLC filters exclude base entries and combine with search, region, type and completion", () => {
  const dlc = { ...filters, scope: "rotten-autumn" };
  assert.equal(catalog.tarstones.filter(item => matches(item, dlc, {})).length, 12);
  assert.equal(catalog.beacons.filter(item => matches(item, dlc, {})).length, 4);
  assert.equal(catalog.dungeons.filter(item => matches(item, dlc, {})).length, 15);
  assert.equal(catalog.dungeons.filter(item => matches(item, { ...filters, scope: "base" }, {})).length, 37);
  assert.equal(catalog.bosses.filter(item => matches(item, dlc, {})).length, 0);
  const selected = { ...dlc, search: "Shrouded", region: "Fainweald", kind: "ghost", status: "done" };
  assert.deepEqual(all.filter(item => matches(item, selected, { "ghost-02": true })).map(item => item.id), ["ghost-02"]);
  assert.equal(all.filter(item => matches(item, { ...selected, region: "Ruins of Mammon" }, { "ghost-02": true })).length, 0);
});

test("search finds aliases and ignores apostrophes and accents", () => {
  assert.ok(matches(byId.get("tar-02"), { ...filters, search: "Headsman’s Stone" }, {}));
  assert.ok(matches(byId.get("tar-ra-channelers-stone"), { ...filters, search: "chánnelers" }, {}));
  assert.ok(matches(byId.get("tar-ra-forsaken-vow"), { ...filters, search: "Forsaken Vow Stone" }, {}));
});

test("expanded Tarstone catalog includes missing update stones without duplicate names", () => {
  assert.equal(catalog.tarstones.length, 89);
  assert.equal(new Set(catalog.tarstones.map(item => item.name.toLowerCase())).size, 89);
  assert.equal(new Set(catalog.tarstones.map(item => item.order)).size, 89);
  for (const id of ["tar-glimpse-stone", "tar-egons-stone"]) {
    assert.ok(matches(byId.get(id), { ...filters, scope: "base", kind: "Fragile" }, {}));
    assert.equal(byId.get(id).nearestBeaconId, "beacon-01");
  }
  for (const id of ["tar-ra-wellspring-stone", "tar-ra-forsaken-vow"]) {
    assert.ok(matches(byId.get(id), { ...filters, scope: "rotten-autumn", kind: "Support" }, {}));
    assert.equal(byId.get(id).nearestBeaconId, undefined);
    assert.match(byId.get(id).steps[0], /No acquisition route is documented/);
  }
});

test("links use IDs even when display names change", () => {
  const item = { ...byId.get("ghost-01"), name: "Changed title", nearestBeacon: "Changed beacon title" };
  assert.ok(relatedItems(item).some(entry => entry.id === "dungeon-03"));
  assert.ok(relatedItems(item).some(entry => entry.id === item.nearestBeaconId));
});

test("direct links tolerate malformed and unknown fragments", () => {
  assert.equal(entryFromHash("#%E0%A4%A"), undefined);
  assert.equal(entryFromHash("#unknown"), undefined);
  assert.equal(entryFromHash("#tar-01")?.id, "tar-01");
});
