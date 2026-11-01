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
