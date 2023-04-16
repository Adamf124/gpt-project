import { test, expect } from '@playwright/test';

test('Toggle visibility of text', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const toggleButton = await page.$('#toggle-visibility');
  const title = await page.$('.title');

  expect(await title.isVisible()).toBe(true);

  await toggleButton.click();

  expect(await title.isVisible()).toBe(false);

  await toggleButton.click();

  expect(await title.isVisible()).toBe(true);
});
