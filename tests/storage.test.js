import test from "node:test";
import assert from "node:assert/strict";
import { loadProgress, saveProgress, decodeProgress, encodeProgress, saveKey, legacyKey } from "../storage.js";

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
}

test("backups round-trip base and DLC progress and report unknown IDs", () => {
  const completed = { "tar-01": true, "tar-ra-guitarstone": true, "ghost-04": true };
  assert.deepEqual(decodeProgress(JSON.parse(encodeProgress(completed))).result, completed);
  assert.deepEqual(decodeProgress({ version: 2, completed: { ...completed, removed: true, "tar-02": false } }), { result: completed, ignored: 1 });
});

test("older saves migrate and the original stays untouched", () => {
  const old = JSON.stringify({ dungeons: { "Troubadour's Reprise": true }, ghosts: { "Obscured Market": true } });
  const storage = memoryStorage({ [legacyKey]: old });
  assert.deepEqual(loadProgress(storage).completed, { "dungeon-01": true, "ghost-01": true });
  assert.equal(storage.getItem(legacyKey), old);
  assert.deepEqual(loadProgress(storage).completed, { "dungeon-01": true, "ghost-01": true });
});

test("invalid files are rejected, including unsupported versions and non-boolean legacy checks", () => {
  for (const data of [null, [], {}, { version: 3, completed: {} }, { version: 2, completed: [] }, { version: 2, completed: { "tar-01": "true" } }, { dungeons: { unknown: 1 }, ghosts: {} }]) assert.throws(() => decodeProgress(data));
});

test("unreadable saves block automatic overwrites", () => {
  for (const value of ["{bad", "", '{"version":99,"completed":{}}']) {
    const storage = memoryStorage({ [saveKey]: value });
    const loaded = loadProgress(storage);
    assert.equal(loaded.blocked, true);
    assert.ok(loaded.warning);
    assert.equal(storage.getItem(saveKey), value);
  }
});

test("older checks survive migration when writing browser storage fails", () => {
  const old = JSON.stringify({ dungeons: { "Troubadour's Reprise": true }, ghosts: {} });
  const storage = { getItem: key => key === legacyKey ? old : null, setItem() { throw new Error("Full"); } };
  const loaded = loadProgress(storage);
  assert.deepEqual(loaded.completed, { "dungeon-01": true });
  assert.ok(loaded.warning);
});

test("unavailable storage reports a warning and normal saves persist", () => {
  const unavailable = { getItem() { throw new Error("Denied"); }, setItem() { throw new Error("Denied"); } };
  assert.ok(loadProgress(unavailable).warning);
  assert.ok(saveProgress(unavailable, { "tar-01": true }));
  const storage = memoryStorage();
  assert.equal(saveProgress(storage, { "tar-01": true }), "");
  assert.deepEqual(loadProgress(storage).completed, { "tar-01": true });
});
