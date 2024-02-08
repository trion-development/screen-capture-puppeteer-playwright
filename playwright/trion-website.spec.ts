import { test, expect } from '@playwright/test';

test('title', async ({ page }) => {
  await page.goto('https://www.trion.de/');
  await expect(page).toHaveTitle(/trion/);
});

const delay = async () => new Promise((res) => setTimeout(res, 1000));

test('visit pages', async ({ page }) => {
  await page.goto('https://www.trion.de/'); await delay();
  await page.getByRole('navigation').getByRole('link', { name: 'Entwicklung' }).click(); await delay();
  await expect(page.getByRole('banner')).toContainText('Softwareentwicklung');
  await page.getByRole('navigation').getByRole('link', { name: 'Beratung' }).click(); await delay();
  await expect(page.getByRole('banner')).toContainText('Beratung');
  await page.getByRole('navigation').getByRole('link', { name: 'Schulung' }).click(); await delay();
  await expect(page.getByRole('banner')).toContainText('Schulungen');
  await page.getByRole('link', { name: 'Angular', exact: true }).click(); await delay();
  await expect(page.locator('header')).toContainText('Angular Schulung');
  await page.getByRole('link', { name: 'Schulung buchen' }).click(); await delay();
  await page.screenshot({ path: 'screenshot.png' });
});