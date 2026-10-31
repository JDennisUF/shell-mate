import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("Pages includes local JavaScript module dependencies", () => {
  const workflow = readFileSync(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8");
  const copy = workflow.match(/^\s*cp (.+) _site\/$/m);
  assert.ok(copy, "Pages site file copy command exists");
  const files = new Set(copy[1].split(/\s+/));
  for (const file of files) {
    if (!file.endsWith(".js")) continue;
    const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    for (const match of source.matchAll(/(?:import|export)\s+(?:[^"']*?\s+from\s+)?["']\.\/([^"']+)["']/g)) {
      assert.ok(files.has(match[1]), `${file} imports ${match[1]}, which is missing from the Pages artifact`);
    }
  }
});
