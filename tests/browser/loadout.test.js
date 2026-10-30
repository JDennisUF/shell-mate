import { test, expect } from '@playwright/test';

test('stone previews show compatibility for each weapon and sidearm', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Axe & Dagger', exact: true }).click();
  await page.getByRole('button', { name: 'Weapon stones Combat: empty' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Duality Stone', exact: true }).focus();
  const preview = page.getByRole('tooltip');
  await expect(preview.locator('[aria-label="Axe & Dagger: compatible"]')).toBeVisible();
  await expect(preview.locator('[aria-label="Black Needle: incompatible"]')).toHaveClass(/is-no/);
  await expect(preview.locator('.compatibility-icon')).toHaveCount(8);
  await page.getByRole('dialog').getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Sidearm: empty' }).click();
  await page.getByRole('button', { name: 'Naylshotte', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm stones Ability: empty' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Solnir Shard', exact: true }).focus();
  await expect(page.getByRole('tooltip').locator('.compatibility-icon')).toHaveCount(8);
  await expect(page.getByRole('tooltip').locator('[aria-label="Naylshotte: compatible"]')).toBeVisible();
});

test('Unwieldly Stone is compatible with all melee weapons', async ({ page }) => {
  await page.goto('loadout.html');
  for (const weapon of ['Clockwork Scythe', 'Axatana']) {
    await page.getByRole('button', { name: /^Melee weapon:/ }).click();
    await page.getByRole('button', { name: weapon, exact: true }).click();
    await page.getByRole('button', { name: 'Weapon stones Ability: empty' }).click();
    const stone = page.getByRole('dialog').getByRole('button', { name: /Unwieldly Stone/ });
    await expect(stone).toBeVisible();
    await expect(stone).not.toContainText('Compatibility unknown');
    await page.getByRole('dialog').getByRole('button', { name: 'Close' }).click();
  }
});

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
  await expect(effects.locator('.effect-divider')).toHaveText(['Weapon']);
  await expect(effects.locator('.effect-type')).toHaveCount(0);
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
  const stoneBox = await stone.boundingBox();
  const previewBox = await preview.boundingBox();
  expect(previewBox.y === 8 || Math.min(Math.abs(previewBox.y - (stoneBox.y + stoneBox.height)), Math.abs(previewBox.y + previewBox.height - stoneBox.y)) <= 9).toBeTruthy();
  await expect(preview).toContainText('Rank 1:');
  await expect(preview).toContainText('Rank 2:');
  await expect(preview).toContainText('Rank 3:');
  await expect(preview.locator('.tarstone-keyword-perforation').first()).toBeVisible();
  await expect(preview.locator('.stone-stat').filter({ hasText: '7' }).first()).toBeVisible();
  expect(await preview.locator('.stone-stat').first().evaluate(node => getComputedStyle(node).color)).toBe('rgb(255, 225, 107)');
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
  const stoneBox = await stone.boundingBox();
  const previewBox = await preview.boundingBox();
  expect(previewBox.y === 8 || Math.min(Math.abs(previewBox.y - (stoneBox.y + stoneBox.height)), Math.abs(previewBox.y + previewBox.height - stoneBox.y)) <= 9).toBeTruthy();
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


test('summary groups selected effects by weapon, sidearm and support', async ({ page }) => {
  await page.goto('loadout.html');
  await page.getByRole('button', { name: 'Melee weapon: empty' }).click();
  await page.getByRole('button', { name: 'Axatana', exact: true }).click();
  await page.getByRole('button', { name: 'Weapon stones Combat: empty' }).click();
  await page.getByRole('button', { name: 'Wounding Stone', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm: empty' }).click();
  await page.getByRole('button', { name: 'Naylshotte', exact: true }).click();
  await page.getByRole('button', { name: 'Sidearm stones Ability: empty' }).click();
  await page.getByRole('button', { name: 'Solnir Shard', exact: true }).click();
  await page.getByRole('button', { name: 'Support stones Support 1: empty' }).click();
  await page.getByRole('button', { name: 'Auspicious Stone', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Summary' }).check();
  const groups = page.locator('#effects .effect-group');
  await expect(groups.locator('.effect-divider')).toHaveText(['Weapon', 'Sidearm', 'Support']);
  await expect(groups.nth(0)).toContainText('Perforation');
  await expect(groups.nth(1)).toContainText('120 splash damage');
  await expect(groups.nth(2)).toContainText('Critical Chance');
  await page.reload();
  await expect(page.locator('#effects .effect-divider')).toHaveText(['Weapon', 'Sidearm', 'Support']);
});
