import { test, expect } from "@playwright/test";
import { catalog } from "../../data.js";

const backup = completed => ({ version: 2, completed });
const upload = async (page, data) => page.locator("#import-file").setInputFiles({ name: "progress.json", mimeType: "application/json", buffer: Buffer.from(typeof data === "string" ? data : JSON.stringify(data)) });

test("existing Tarstone checks survive expansion and missing stones can be tracked", async ({ page }) => {
  const originalStones = catalog.tarstones.filter(item => item.order <= 85);
  expect(originalStones).toHaveLength(85);
  const completed = Object.fromEntries(originalStones.map(item => [item.id, true]));
  await page.addInitScript(data => {
    if (!localStorage.getItem("shell-mate-progress-v2")) localStorage.setItem("shell-mate-progress-v2", JSON.stringify(data));
  }, backup(completed));
  await page.goto("./");
  await expect(page.locator(".entry")).toHaveCount(89);
  await expect(page.locator("#category-progress .progress-stat").filter({ hasText: "Tarstones" })).toContainText("85 / 89");
  await page.getByRole("combobox", { name: "Progress", exact: true }).selectOption("open");
  await expect(page.locator(".entry")).toHaveCount(4);
  await page.getByRole("combobox", { name: "Stone type", exact: true }).selectOption("Fragile");
  await expect(page.locator(".entry")).toHaveCount(2);
  await page.locator("#tar-egons-stone > .route > summary").click();
  await expect(page.locator("#tar-egons-stone .route-body")).toContainText("Merrick");
  await expect(page.locator('#tar-egons-stone a[href="#beacon-01"]').first()).toBeVisible();
  await page.getByRole("combobox", { name: "Stone type", exact: true }).selectOption("all");
  await page.getByLabel("Search guide").fill("Forsaken Vow Stone");
  await expect(page.locator(".entry")).toHaveCount(1);
  await page.locator("#tar-ra-forsaken-vow > .route > summary").click();
  await expect(page.locator("#tar-ra-forsaken-vow .route-body")).toContainText("No acquisition route is documented yet");
  await expect(page.locator("#tar-ra-forsaken-vow .sources a")).toHaveCount(2);
  await page.locator("#check-tar-ra-forsaken-vow").focus();
  await page.keyboard.press("Space");
  await expect(page.locator(".entry")).toHaveCount(0);
  await page.goto("./?page=tarstones");
  await expect(page.locator("#check-tar-01")).toBeChecked();
  await expect(page.locator("#check-tar-ra-forsaken-vow")).toBeChecked();
  await expect(page.locator("#check-tar-glimpse-stone")).not.toBeChecked();
  await expect(page.locator("#category-progress .progress-stat").filter({ hasText: "Tarstones" })).toContainText("86 / 89");
});

test("DLC selection follows categories and updates guide totals", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("combobox", { name: "Content", exact: true }).selectOption("rotten-autumn");
  await page.getByRole("combobox", { name: "Progress", exact: true }).selectOption("open");
  await expect(page.locator(".entry")).toHaveCount(12);
  await expect(page.locator("#overall-count")).toHaveText("0 / 31");
  await page.getByRole("button", { name: "Beacons", exact: true }).click();
  await expect(page.locator(".entry")).toHaveCount(4);
  await expect(page.locator("#scope")).toHaveValue("rotten-autumn");
  await expect(page.locator(".entry-scope").first()).toHaveText("Rotten Autumn DLC");
  await page.getByRole("button", { name: "Dungeons", exact: true }).click();
  await expect(page.locator(".entry")).toHaveCount(15);
  await page.getByRole("combobox", { name: "Region", exact: true }).selectOption("Fainweald");
  await page.getByLabel("Search guide").fill("Primeval");
  await expect(page.locator(".entry")).toHaveCount(1);
  await page.getByRole("button", { name: "Bosses", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "Region", exact: true })).toHaveValue("Fainweald");
  await expect(page.getByRole("combobox", { name: "Progress", exact: true })).toHaveValue("open");
  await expect(page.locator(".entry")).toHaveCount(0);
  await expect(page.locator(".empty")).toContainText("No Rotten Autumn bosses");
  await page.getByRole("combobox", { name: "Content", exact: true }).selectOption("base");
  await expect(page.locator(".entry")).toHaveCount(9);
});

test("every boss card has an identifying image and encounter description", async ({ page }) => {
  await page.goto("./?page=bosses");
  await expect(page.locator(".entry")).toHaveCount(46);
  await expect(page.locator(".boss-portrait")).toHaveCount(46);
  await expect(page.locator(".boss-description")).toHaveCount(46);
  await expect(page.locator(".boss-portrait").first()).toHaveAttribute("alt", /boss$/);
  expect(await page.locator(".boss-portrait").evaluateAll(images => images.every(image => /^\.\/assets\/bosses\/.+\.jpg$/.test(image.getAttribute("src"))))).toBe(true);
  for (const [id, image] of [["boss-11", "hexapod"], ["boss-16", "malborn-offspring"], ["boss-18", "orrem-the-reclaimed"], ["boss-33", "foul-passenger"], ["boss-35", "the-monolith"], ["boss-46", "zmey-the-unbidden"]]) {
    await expect(page.locator(`#${id} .boss-portrait`)).toHaveAttribute("src", `./assets/bosses/${image}.jpg`);
  }
});

test("checking keeps focus, route and spoiler state, and survives reload", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("button", { name: "Bosses", exact: true }).click();
  const card = page.locator(".entry").filter({ has: page.locator(".tips") }).first();
  const checkbox = card.getByRole("checkbox");
  await card.locator(".route > summary").click();
  await expect(card.locator(".tips")).not.toHaveAttribute("open", "");
  await card.locator(".tips > summary").click();
  const checkboxId = await checkbox.getAttribute("id");
  await checkbox.focus();
  await page.keyboard.press("Space");
  await expect(checkbox).toBeFocused();
  await expect(checkbox).toBeChecked();
  await expect(card.locator(".route")).toHaveAttribute("open", "");
  await expect(card.locator(".tips")).toHaveAttribute("open", "");
  await page.getByRole("combobox", { name: "Order", exact: true }).selectOption("name");
  await expect(page.locator("#" + checkboxId).locator("xpath=ancestor::article").locator(".tips")).toHaveAttribute("open", "");
  await page.reload();
  await page.getByRole("button", { name: "Bosses", exact: true }).click();
  await expect(page.locator("#" + checkboxId)).toBeChecked();
  await expect(page.locator("#" + checkboxId).locator("xpath=ancestor::article").locator(".tips")).not.toHaveAttribute("open", "");
});

test("checking the last filtered entry gives focus to the results message", async ({ page }) => {
  await page.goto("./");
  await page.getByLabel("Search guide").fill("Auspicious");
  await page.getByRole("combobox", { name: "Progress", exact: true }).selectOption("open");
  await page.getByRole("checkbox").focus();
  await page.keyboard.press("Space");
  await expect(page.locator(".entry")).toHaveCount(0);
  await expect(page.locator("#results")).toBeFocused();
});

test("filtered removal focuses the next entry and category buttons keep keyboard focus", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("combobox", { name: "Progress", exact: true }).selectOption("open");
  await page.locator("#check-tar-01").focus();
  await page.keyboard.press("Space");
  await expect(page.locator("#check-tar-02")).toBeFocused();
  const tab = page.getByRole("button", { name: "Beacons", exact: true });
  await tab.focus();
  await page.keyboard.press("Enter");
  await expect(tab).toBeFocused();
});

test("current backups export and import; invalid imports leave progress alone", async ({ page }) => {
  await page.goto("./");
  await page.locator("#check-tar-01").check();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Export", exact: true }).click();
  const download = await downloadPromise;
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  const exported = JSON.parse(Buffer.concat(chunks).toString());
  expect(exported).toEqual(backup({ "tar-01": true }));
  await page.locator("#check-tar-01").uncheck();
  await upload(page, exported);
  await expect(page.locator("#check-tar-01")).toBeChecked();
  await upload(page, '{"broken"');
  await expect(page.locator("#check-tar-01")).toBeChecked();
  await upload(page, backup({ "tar-02": true, unknown: true }));
  await expect(page.locator("#notice")).toContainText("ignored 1 unknown");
  await expect(page.locator("#check-tar-01")).not.toBeChecked();
  await expect(page.locator("#check-tar-02")).toBeChecked();
  await page.reload();
  await expect(page.locator("#check-tar-02")).toBeChecked();
});

test("old backups restore independent dungeon and Ghost Beacon checks", async ({ page }) => {
  await page.goto("./");
  await upload(page, { dungeons: { "Obscured Market": true }, ghosts: { "Obscured Market": true } });
  await page.getByRole("button", { name: "Dungeons", exact: true }).click();
  await expect(page.locator("#check-dungeon-03")).toBeChecked();
  await page.getByRole("button", { name: "Beacons", exact: true }).click();
  await expect(page.locator("#check-ghost-01")).toBeChecked();
});

test("Shell skill ranks count their lower ranks, show the cap, and survive refresh", async ({ page }) => {
  await page.goto("./?page=shells");
  const tiel = page.locator("#shell-tiel");
  await tiel.locator(".route > summary").click();
  const lastingLegacy = tiel.locator(".shell-skill").filter({ hasText: "Lasting Legacy" });
  await lastingLegacy.getByRole("button", { name: "Tiel Lasting Legacy rank 3" }).click();
  await expect(lastingLegacy.locator(".shell-skill-ranks li.selected")).toHaveCount(3);
  await expect(lastingLegacy.getByRole("button", { name: "Tiel Lasting Legacy rank 4" })).toHaveAttribute("aria-pressed", "false");
  await expect(tiel.locator(".shell-points")).toHaveText("Shell Points: 6 / 40");
  await lastingLegacy.getByRole("button", { name: "Tiel Lasting Legacy rank 3" }).click();
  await expect(tiel.locator(".shell-points")).toHaveText("Shell Points: 0 / 40");
  await lastingLegacy.getByRole("button", { name: "Tiel Lasting Legacy rank 2" }).click();
  await expect(tiel.locator(".shell-points")).toHaveText("Shell Points: 3 / 40");
  const genessa = page.locator("#shell-genessa");
  await expect(genessa.locator(".shell-points")).toHaveText("Shell Points: 0 / 44");
  await genessa.locator(".route > summary").click();
  await expect(genessa.locator(".shell-skills-header .shell-points")).toHaveCount(1);
  await expect(genessa.locator(".shell-skills-header .shell-reset")).toHaveCount(1);
  await expect(genessa.locator(".entry-heading .shell-points")).toHaveCount(0);
  await genessa.getByRole("button", { name: "Genessa Augmentation rank 3" }).click();
  await expect(genessa.locator(".shell-points")).toHaveText("Shell Points: 6 / 44");
  await expect(genessa.locator(".shell-skill").first().locator(".selected")).toHaveCount(3);
  const skills = genessa.locator(".shell-skill");
  for (let index = 1; index < 8; index++) {
    await skills.nth(index).locator(".shell-rank-button").last().click();
  }
  await expect(genessa.locator(".shell-points")).toHaveClass(/over-limit/);
  await page.reload();
  await expect(genessa.locator(".shell-points")).toHaveClass(/over-limit/);
  await genessa.locator(".route > summary").click();
  await expect(genessa.getByRole("button", { name: "Genessa Augmentation rank 3" })).toHaveAttribute("aria-pressed", "true");
  await genessa.getByRole("button", { name: "Reset Genessa skill ranks" }).click();
  await expect(genessa.locator(".shell-points")).toHaveText("Shell Points: 0 / 44");
  await expect(genessa.locator(".shell-points")).not.toHaveClass(/over-limit/);
  await expect(genessa.locator('.shell-rank-button[aria-pressed="true"]')).toHaveCount(0);
  await expect(genessa.getByRole("button", { name: "Reset Genessa skill ranks" })).toBeDisabled();
  await expect(tiel.locator(".shell-points")).toHaveText("Shell Points: 3 / 40");
  await page.reload();
  await expect(genessa.locator(".shell-points")).toHaveText("Shell Points: 0 / 44");
  await expect(tiel.locator(".shell-points")).toHaveText("Shell Points: 3 / 40");
});

test("Shell tiers align three skills across wide screens and stack them on narrow screens", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("./?page=shells");
  const proxima = page.locator("#shell-proxima");
  await proxima.locator(".route > summary").click();
  const tiers = proxima.locator(".shell-tier");
  await expect(tiers).toHaveCount(4);
  for (let index = 0; index < 4; index++) await expect(tiers.nth(index).locator(".shell-skills > .shell-skill")).toHaveCount(3);
  const firstTier = tiers.first().locator(".shell-skills > .shell-skill");
  const wide = await Promise.all([0, 1, 2].map(index => firstTier.nth(index).boundingBox()));
  expect(wide[0].x).toBeLessThan(wide[1].x);
  expect(wide[1].x).toBeLessThan(wide[2].x);
  expect(Math.abs(wide[0].y - wide[1].y)).toBeLessThan(1);
  expect(Math.abs(wide[1].y - wide[2].y)).toBeLessThan(1);
  const secondTierFirst = await tiers.nth(1).locator(".shell-skills > .shell-skill").first().boundingBox();
  expect(secondTierFirst.y).toBeGreaterThan(wide[0].y);
  expect(Math.abs(secondTierFirst.x - wide[0].x)).toBeLessThan(1);
  await page.setViewportSize({ width: 390, height: 844 });
  const narrow = await Promise.all([0, 1, 2].map(index => firstTier.nth(index).boundingBox()));
  expect(Math.abs(narrow[0].x - narrow[1].x)).toBeLessThan(1);
  expect(Math.abs(narrow[1].x - narrow[2].x)).toBeLessThan(1);
  expect(narrow[0].y).toBeLessThan(narrow[1].y);
  expect(narrow[1].y).toBeLessThan(narrow[2].y);
});

test("direct and repeated links work under the repository path", async ({ page }) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("./#ghost-01");
  await expect(page.locator("#ghost-01 > .route")).toHaveAttribute("open", "");
  await page.locator('#ghost-01 a[href="#dungeon-03"]').click();
  await expect(page.locator("#category-title")).toHaveText("Dungeons");
  await page.getByRole("button", { name: "Beacons", exact: true }).click();
  await expect(page.locator("#ghost-01 > .route")).toHaveAttribute("open", "");
  await page.locator('#ghost-01 a[href="#dungeon-03"]').click();
  await expect(page.locator("#category-title")).toHaveText("Dungeons");
  await expect(page.locator("#dungeon-03 > .route")).toHaveAttribute("open", "");
  await page.goto("./#%E0%A4%A");
  await expect(page.locator(".entry").first()).toBeVisible();
  expect(errors).toEqual([]);
});

test("unreadable saves survive new checks and can be replaced by a valid import", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("shell-mate-progress-v2", "broken-save"));
  await page.goto("./");
  await expect(page.locator("#storage-warning")).toBeVisible();
  await page.locator("#check-tar-01").check();
  expect(await page.evaluate(() => localStorage.getItem("shell-mate-progress-v2"))).toBe("broken-save");
  await upload(page, backup({ "tar-02": true }));
  await expect(page.locator("#storage-warning")).toBeHidden();
  expect(JSON.parse(await page.evaluate(() => localStorage.getItem("shell-mate-progress-v2"))).completed).toEqual({ "tar-02": true });
});

test("storage failures keep a visible warning and allow checks and export", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error("Saving disabled"); };
    Storage.prototype.setItem = () => { throw new Error("Saving disabled"); };
  });
  await page.goto("./");
  await page.locator("#check-tar-01").check();
  await expect(page.locator("#check-tar-01")).toBeChecked();
  await expect(page.locator("#storage-warning")).toContainText("Export");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Export", exact: true }).click();
  await download;
});

for (const width of [320, 390, 1280]) {
  test("layout fits a " + width + "px screen", async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("./");
    await page.getByRole("combobox", { name: "Content", exact: true }).selectOption("rotten-autumn");
    await page.locator(".route > summary").first().click();
    await expect(page.getByRole("button", { name: "Export", exact: true })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: "test-results/layout-" + width + ".png", fullPage: true });
  });
}
