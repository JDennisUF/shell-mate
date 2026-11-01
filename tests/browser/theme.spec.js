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
  const options = await picker.locator('optgroup option').allTextContents();
  expect(options).toEqual(shades);
  const backgrounds = new Set();
  for (const option of await picker.locator('optgroup option').evaluateAll(nodes => nodes.map(node => node.value))) {
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
