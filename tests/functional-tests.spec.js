import { test, expect } from '@playwright/test';

test('Functional - valid user search shows profile', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');

  await page.fill('input', 'octocat');
  await page.click('button');

  await expect(page.getByText('octocat')).toBeVisible();
});

test('Functional - Search invalid username shows not found message', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');
  
  await page.fill('input', 'thisUserDoesNotExist123456');
  await page.click('button');

  await expect(page.getByText(/User not found/i)).toBeVisible();
});

test('Functional - Search disabled with empty input', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');
  
  await expect(page.locator('button')).toBeDisabled();
});

test('Functional - Enter key triggers search', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');

  await page.fill('input', 'octocat');
  await page.keyboard.press('Enter');

  await expect(page.getByText('octocat')).toBeVisible();
});



