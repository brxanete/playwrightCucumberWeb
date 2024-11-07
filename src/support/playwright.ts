import { Before, After } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async () => {
  await page.close();
  await browser.close();
});

export { page };