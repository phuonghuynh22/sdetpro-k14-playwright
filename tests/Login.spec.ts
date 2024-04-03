import { Browser, BrowserContext, Page, chromium } from "@playwright/test"
import {test} from '@playwright/test';

/*
test('Login Test', async () => {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://playwright.dev/');

    // DEBUG
    await page.waitForTimeout(3000);

    await browser.close();
})

// Another way: using the build-in Fixture "page" of playwright
test('Login Test', async ({page}) => {
    await page.goto('https://playwright.dev/');

    // DEBUG
    await page.waitForTimeout(1000);

    //await browser.close();
})
*/

test('Test retry, trace viewer', async ({page}) => {
    await page.goto('https://playwright.dev/');
    const elem = await page.locator('timgicungduoc');
    elem.click();

    // DEBUG
    await page.waitForTimeout(1000);
})
