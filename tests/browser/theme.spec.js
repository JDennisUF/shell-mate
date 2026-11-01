import { test, expect } from '@playwright/test';

test('theme persists across pages and synchronizes between tabs', async ({ page, context }) => {
  await page.goto('./');
  const picker = page.getByLabel('Theme');
  await expect(picker).toHaveValue('default');
  await picker.selectOption('obsidian');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'obsidian');
  await page.reload();
  await expect(picker).toHaveValue('obsidian');
  const other = await context.newPage();
  await other.goto('./loadout.html');
  await expect(other.getByLabel('Theme')).toHaveValue('obsidian');
  await other.getByLabel('Theme').selectOption('default');
  await expect(picker).toHaveValue('default');
  await page.goto('./glossary.html');
  await expect(page.getByLabel('Theme')).toHaveValue('default');
});

test('unknown theme falls back to default', async ({ page }) => {
  await page.goto('./');
  await page.evaluate(() => localStorage.setItem('shell-mate-theme', 'unknown'));
  await page.reload();
  await expect(page.getByLabel('Theme')).toHaveValue('default');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'default');
});

test('every catalog Shade has a distinct selectable, persistent theme', async ({ page }) => {
  await page.goto('./');
  const shades = await page.evaluate(async () => (await import('./extras.js')).shades.map(shade => shade.name));
  const picker = page.getByLabel('Theme');
  const options = await picker.locator('option:not([value=default]):not([value=obsidian])').allTextContents();
  expect(options).toEqual(shades);
  const backgrounds = new Set();
  for (const option of await picker.locator('option:not([value=default]):not([value=obsidian])').evaluateAll(nodes => nodes.map(node => node.value))) {
    await picker.selectOption(option);
    await expect(page.locator('html')).toHaveAttribute('data-theme', option);
    backgrounds.add(await page.locator('html').evaluate(node => getComputedStyle(node).backgroundColor + getComputedStyle(node).getPropertyValue('--theme-accent')));
  }
  expect(backgrounds.size).toBe(shades.length);
  await page.reload();
  await expect(picker).toHaveValue('queen-of-hearts');
});

test('Ophidian uses light surfaces and dark text across the guide, glossary, and loadout', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel('Theme').selectOption('ophidian');
  const lightSurface = async (surface, text) => {
    const colors = await page.locator(surface).first().evaluate((node, textSelector) => {
      const rgb = value => value.match(/\d+/g).slice(0, 3).map(Number);
      const target = textSelector ? node.querySelector(textSelector) : node;
      return [rgb(getComputedStyle(node).backgroundColor), rgb(getComputedStyle(target).color)];
    }, text);
    expect(Math.min(...colors[0])).toBeGreaterThan(175);
    expect(Math.max(...colors[1])).toBeLessThan(130);
  };
  await lightSurface('.entry', '.entry-name');
  await lightSurface('.filters', 'label span');
  await page.goto('./glossary.html');
  await lightSurface('.glossary-card', 'p');
  await lightSurface('.glossary-card', 'h4');
  await page.goto('./loadout.html');
  await lightSurface('.loadout-saves', 'label');
  await lightSurface('.effects', '.concise-toggle');
  await page.locator('.picker-trigger').first().click();
  await lightSurface('.picker-dialog', 'h2');
});

test('Ophidian controls and transparent stone frames use light backgrounds', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel('Theme').selectOption('ophidian');
  await page.getByRole('button', { name: 'Tarstones', exact: true }).click();
  for (const selector of ['#search', '#region', '#export', '.tarstone-portrait']) {
    const color = await page.locator(selector).first().evaluate(el => getComputedStyle(el).backgroundColor);
    expect(Math.min(...color.match(/\d+/g).slice(0, 3).map(Number))).toBeGreaterThan(175);
  }
  await page.goto('./glossary.html');
  const search = page.locator('#glossary-search');
  await expect(search).toHaveCSS('background-color', 'rgb(248, 243, 232)');
  await page.goto('./loadout.html');
  await expect(page.locator('.stone-icon').first()).toHaveCSS('background-color', 'rgb(230, 221, 201)');
  await expect(page.locator('.picker-trigger').first()).toHaveCSS('color', 'rgb(41, 37, 30)');
});

test('Ophidian header has a light background and dark text', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel('Theme').selectOption('ophidian');
  await expect(page.locator('.site-header')).toHaveCSS('background-color', 'rgb(245, 240, 229)');
  await expect(page.locator('.site-header h1')).toHaveCSS('color', 'rgb(33, 31, 27)');
  await page.goto('./glossary.html');
  await expect(page.locator('.glossary-back')).toHaveCSS('color', 'rgb(41, 37, 30)');
});

test('Porcelain Prime applies its white and silver palette across pages', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel('Theme').selectOption('porcelain-prime');
  await expect(page.locator('html')).toHaveCSS('background-color', 'rgb(241, 242, 241)');
  await expect(page.locator('.site-header')).toHaveCSS('background-color', 'rgb(250, 250, 250)');
  await expect(page.locator('.entry-name').first()).toHaveCSS('color', 'rgb(34, 36, 38)');
  await page.goto('./glossary.html');
  await expect(page.locator('#glossary-search')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(page.locator('.glossary-card').first()).toHaveCSS('background-color', 'rgb(250, 251, 250)');
  await page.goto('./loadout.html');
  await expect(page.locator('.effects')).toHaveCSS('background-color', 'rgb(247, 248, 247)');
  await expect(page.locator('.picker-trigger').first()).toHaveCSS('color', 'rgb(34, 36, 38)');
});

test('Bonegrafted uses light bone surfaces and silver accents across pages', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel('Theme').selectOption('bonegrafted');
  await expect(page.locator('html')).toHaveCSS('background-color', 'rgb(231, 226, 215)');
  await expect(page.locator('.site-header')).toHaveCSS('background-color', 'rgb(242, 238, 230)');
  await expect(page.locator('.entry-name').first()).toHaveCSS('color', 'rgb(34, 36, 38)');
  await page.goto('./glossary.html');
  await expect(page.locator('#glossary-search')).toHaveCSS('background-color', 'rgb(250, 248, 243)');
  await expect(page.locator('.glossary-card').first()).toHaveCSS('background-color', 'rgb(245, 242, 235)');
  await page.goto('./loadout.html');
  await expect(page.locator('.effects')).toHaveCSS('background-color', 'rgb(241, 238, 231)');
  await expect(page.locator('.picker-trigger').first()).toHaveCSS('color', 'rgb(34, 36, 38)');
});

test('Queen of Hearts uses a dark blood-red palette across pages', async ({ page }) => {
  await page.goto('./');
  await page.getByLabel('Theme').selectOption('queen-of-hearts');
  await expect(page.locator('html')).toHaveCSS('background-color', 'rgb(33, 8, 11)');
  await expect(page.locator('.site-header')).toHaveCSS('background-color', 'rgb(72, 10, 16)');
  await expect(page.locator('.tab[aria-current="page"]')).toHaveCSS('border-bottom-color', 'rgb(240, 68, 79)');
  await page.goto('./glossary.html');
  await expect(page.locator('.glossary-card').first()).toHaveCSS('background-color', 'rgb(65, 14, 20)');
  await page.goto('./loadout.html');
  await expect(page.locator('.effects')).toHaveCSS('background-color', 'rgb(43, 9, 13)');
});

test('light themes use light frames for Shell, weapon, and sidearm artwork', async ({ page }) => {
  await page.goto('./');
  for (const theme of ['ophidian', 'porcelain-prime', 'bonegrafted']) {
    await page.getByLabel('Theme').selectOption(theme);
    for (const [category, image] of [['Shells', '.shell-portrait'], ['Weapons', '.equipment-portrait'], ['Sidearms', '.equipment-portrait']]) {
      await page.getByRole('button', { name: category, exact: true }).click();
      const color = await page.locator(image).first().evaluate(el => getComputedStyle(el).backgroundColor);
      expect(Math.min(...color.match(/\d+/g).slice(0, 3).map(Number))).toBeGreaterThan(175);
    }
  }
});

test('Shell Point skill panels follow dark and light theme palettes', async ({ page }) => {
  await page.goto('./?page=shells');
  await page.locator('.entry .route > summary').first().click();
  const tier = page.locator('.shell-tier').first();
  for (const [theme, color] of [['obsidian', 'rgb(23, 23, 25)'], ['queen-of-hearts', 'rgb(57, 12, 17)'], ['sanguine-prophet', 'rgb(43, 16, 19)'], ['ophidian', 'rgb(229, 220, 203)']]) {
    await page.getByLabel('Theme').selectOption(theme);
    await expect(tier).toHaveCSS('background-color', color);
  }
  await page.goto('./loadout.html');
  await page.getByLabel('Theme').selectOption('queen-of-hearts');
  await expect(page.locator('.loadout-skills')).toHaveCSS('background-color', 'rgb(43, 9, 13)');
  await expect(page.locator('.loadout-skill-tier').first()).toHaveCSS('border-top-color', 'rgb(135, 49, 58)');
});
