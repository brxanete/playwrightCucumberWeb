import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/playwright';

Given('I open the Playwright homepage', async () => {
  await page.goto('https://playwright.dev');
});

When('I click on the {string} button', async (buttonText: string) => {
  await page.click(`text=${buttonText}`);
});

Then('I should see {string} in the page title', async (titleText: string) => {
  const title = await page.title();
  expect(title).toContain(titleText);
});