import { test, expect } from '@playwright/test';

test('Clockwork Shardstone is available in the Clockwork Scythe ability slot only', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Clockwork Scythe', exact: true }).click();
  await page.getByRole('button', { name: 'Weapon stones Ability: empty' }).click();
  await page.getByRole('button', { name: 'Clockwork Shardstone', exact: true }).click();
  await expect(page.locator('#effects')).toContainText('Clockwork Shardstone');
  await page.getByRole('button', { name: 'Melee weapon: Clockwork Scythe' }).click();
  await page.getByRole('button', { name: 'Axatana', exact: true }).click();
  await expect(page.locator('#effects')).not.toContainText('Clockwork Shardstone');
  await page.getByRole('button', { name: 'Weapon stones Ability: empty' }).click();
  await expect(page.getByRole('dialog').getByRole('button', { name: 'Clockwork Shardstone', exact: true })).toHaveCount(0);
});

test('glance shows level 3 effects with colored keywords and no controls', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Axatana', exact: true }).click();
  await page.getByRole('button', { name: 'Weapon stones Combat: empty' }).click();
  await page.getByRole('button', { name: 'Wounding Stone', exact: true }).click();
  const effects = page.locator('#effects');
  await expect(effects).toContainText('Inflict 7 Perforation stacks per strike');
  await expect(effects).not.toContainText('Inflict 2 Perforation stacks per strike');
  await expect(effects).not.toContainText('Level 3:');
  await expect(effects.locator('.tarstone-keyword-perforation').first()).toBeVisible();
  await expect(effects.locator('img, select')).toHaveCount(0);
});

test('glance retains distinct upgrades and summarizes permanent infusions', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Sidearm: empty' }).click();
  await page.getByRole('button', { name: 'Naylshotte', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm stones Ability: empty' }).click();
  await page.getByRole('button', { name: 'Solnir Shard', exact: true }).click();
  const effects = page.locator('#effects');
  await expect(effects).toContainText('120 splash damage');
  await expect(effects).toContainText('wider explosion');
  await expect(effects).not.toContainText('70 splash damage');
  await page.getByRole('button', { name: 'Sidearm: Naylshotte' }).click();
  await page.getByRole('button', { name: 'Ballistazooka', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm stones Infusion: empty' }).click();
  await page.getByRole('button', { name: 'Weeping Stone', exact: true }).click();
  await expect(effects).toContainText('Sidearm is infused with Trauma.');
  await expect(effects).not.toContainText('Infusion lasts');
});

test('concise mode shows effect text without stone or type labels and persists', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Axatana', exact: true }).click();
  await page.getByRole('button', { name: 'Weapon stones Combat: empty' }).click();
  await page.getByRole('button', { name: 'Wounding Stone', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Summary' }).check();
  const effects = page.locator('#effects');
  await expect(effects).toContainText('Inflict 7 Perforation stacks per strike');
  await expect(effects).not.toContainText('Wounding Stone');
  await expect(effects.locator('.effect-divider, .effect-type')).toHaveCount(0);
  await expect(effects.locator('.tarstone-keyword-perforation').first()).toBeVisible();
  await page.reload();
  await expect(page.getByRole('checkbox', { name: 'Summary' })).toBeChecked();
  await page.getByRole('checkbox', { name: 'Summary' }).uncheck();
  await expect(effects).toContainText('Wounding Stone');
});

test('weapon and sidearm selections are remembered separately across switches and reloads', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Clockwork Scythe', exact: true }).click();
  await page.getByRole('button', { name: 'Weapon stones Ability: empty' }).click();
  await page.getByRole('button', { name: 'Clockwork Shardstone', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm: empty' }).click();
  await page.getByRole('button', { name: 'Naylshotte', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm stones Ability: empty' }).click();
  await page.getByRole('button', { name: 'Solnir Shard', exact: true }).click();
  await page.getByRole('button', { name: 'Melee weapon: Clockwork Scythe' }).click();
  await page.getByRole('button', { name: 'Axatana', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm: Naylshotte' }).click();
  await page.getByRole('button', { name: 'Ballistazooka', exact: true }).click();
  await page.reload();
  await page.getByRole('button', { name: 'Melee weapon: Axatana' }).click();
  await page.getByRole('button', { name: 'Clockwork Scythe', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Weapon stones Ability: Clockwork Shardstone' })).toBeVisible();
  await page.getByRole('button', { name: 'Sidearm: Ballistazooka' }).click();
  await page.getByRole('button', { name: 'Naylshotte', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Sidearm stones Ability: Solnir Shard' })).toBeVisible();
  await page.getByRole('button', { name: 'Clear loadout' }).click();
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Clockwork Scythe', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Weapon stones Ability: empty' })).toBeVisible();
});

test('weapon stone preview shows effects and colored rank details on hover and focus', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Axatana', exact: true }).click();
  await page.getByRole('button', { name: 'Weapon stones Combat: empty' }).click();
  const stone = page.getByRole('dialog').getByRole('button', { name: 'Wounding Stone', exact: true });
  await stone.hover();
  const preview = page.getByRole('tooltip');
  await expect(preview).toContainText('Rank 1:');
  await expect(preview).toContainText('Rank 2:');
  await expect(preview).toContainText('Rank 3:');
  await expect(preview.locator('.tarstone-keyword-perforation').first()).toBeVisible();
  await page.mouse.move(0, 0);
  await stone.focus();
  await expect(preview).toBeVisible();
});

test('sidearm stone preview shows colored effects and ranks on hover and focus', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Sidearm: empty' }).click();
  await page.getByRole('button', { name: 'Naylshotte', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm stones Ability: empty' }).click();
  const stone = page.getByRole('dialog').getByRole('button', { name: 'Solnir Shard', exact: true });
  await stone.hover();
  const preview = page.getByRole('tooltip');
  await expect(preview).toContainText('Rank 1:');
  await expect(preview).toContainText('Rank 2:');
  await expect(preview).toContainText('Rank 3:');
  await expect(preview.locator('.tarstone-keyword').first()).toBeVisible();
  await page.mouse.move(0, 0);
  await stone.focus();
  await expect(preview).toBeVisible();
});

test('loadout picker arrows render correctly', async ({ page }) => {
  await page.goto('loadout.html');
  const arrow = await page.locator('.picker-trigger').first().evaluate(button => getComputedStyle(button, '::after').content);
  expect(arrow).toBe('" ▾"');
});
