import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { glossary } from "../glossary.js";

test("every colored combat keyword has one usable glossary definition", () => {
  const styles = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
  const coloredIds = [...new Set([...styles.matchAll(/\.tarstone-keyword-([a-z-]+)\b/g)].map(match => match[1]))].sort();
  const glossaryIds = glossary.map(entry => entry.id).sort();
  assert.deepEqual(glossaryIds, coloredIds);
  assert.equal(glossaryIds.length, new Set(glossaryIds).size);
  for (const entry of glossary) {
    assert.ok(entry.term && entry.group && entry.definition, entry.id);
    assert.ok(entry.definition.length >= 30, entry.id);
  }
});
