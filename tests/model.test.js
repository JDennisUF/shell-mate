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
    assert.ok(item.steps?.length);
    assert.ok(item.sources?.length);
    for (const source of item.sources) {
      assert.ok(catalog.sources[source], item.id + ": " + source);
      assert.equal(new URL(catalog.sources[source].url).protocol, "https:");
    }
    if (item.nearestBeacon) assert.equal(byId.get(item.nearestBeaconId)?.kind, "beacon", item.id);
    for (const relatedId of item.relatedIds) {
      assert.ok(byId.has(relatedId), item.id + ": " + relatedId);
      assert.notEqual(relatedId, item.id);
    }
  }
});

test("original saved IDs are preserved", () => {
  for (const [prefix, count] of [["tar", 75], ["beacon", 49], ["ghost", 4], ["boss", 46], ["dungeon", 15]]) {
    for (let index = 1; index <= count; index++) assert.ok(byId.has(prefix + "-" + String(index).padStart(2, "0")));
  }
});

test("DLC filters exclude base entries and combine with search, region, type and completion", () => {
  const dlc = { ...filters, scope: "rotten-autumn" };
  assert.equal(catalog.tarstones.filter(item => matches(item, dlc, {})).length, 10);
  assert.equal(catalog.beacons.filter(item => matches(item, dlc, {})).length, 4);
  assert.equal(catalog.dungeons.filter(item => matches(item, dlc, {})).length, 15);
  assert.equal(catalog.bosses.filter(item => matches(item, dlc, {})).length, 0);
  const selected = { ...dlc, search: "Shrouded", region: "Fainweald", kind: "ghost", status: "done" };
  assert.deepEqual(all.filter(item => matches(item, selected, { "ghost-02": true })).map(item => item.id), ["ghost-02"]);
  assert.equal(all.filter(item => matches(item, { ...selected, region: "Ruins of Mammon" }, { "ghost-02": true })).length, 0);
});

test("search finds aliases and ignores apostrophes and accents", () => {
  assert.ok(matches(byId.get("tar-02"), { ...filters, search: "Headsman’s Stone" }, {}));
  assert.ok(matches(byId.get("tar-ra-channelers-stone"), { ...filters, search: "chánnelers" }, {}));
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
