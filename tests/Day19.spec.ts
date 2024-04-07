import { test } from '@playwright/test';

test('Link Text - xpath', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('//a[contains(text(),"Elemental-aa")]');
    await footerLinkEle.click();

    // DEBUG
    await page.waitForTimeout(1000);
})

// Explicit wait
test('Explicit wait - Link Text - xpatch', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.waitForSelector('//a[contains(text(),"Elemental-aa")]', { timeout: 2000 });
    await footerLinkEle.click();

    // DEBUG
    await page.waitForTimeout(1000);
})

test('Link Text - CSS', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('a:has-text("Elemental")');
    await footerLinkEle.click();

    // DEBUG
    await page.waitForTimeout(1000);
})

test('Link Text - Filtering', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('a').filter({ hasText: "Elemental" });

    await footerLinkEle.scrollIntoViewIfNeeded();

    // DEBUG
    await page.waitForTimeout(1000);
})

test('Multiple matching', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('a').elementHandles();

    await footerLinkEle[10].click();

    // DEBUG
    await page.waitForTimeout(1000);
})

test('Handle login form', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a').filter({ hasText: "Form Authentication" }).click();
    await page.waitForLoadState("domcontentloaded");

    // DEBUG
    await page.waitForTimeout(5000);
    await page.locator('#username').fill('phuong@here');
    await page.locator('#password').fill('pass');

    // DEBUG
    await page.waitForTimeout(1000);

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("domcontentloaded");


    // DEBUG
    await page.waitForTimeout(1000);
})

test.only('Element get Text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a').filter({ hasText: "Form Authentication" }).click();
    await page.waitForLoadState("domcontentloaded");

    // DEBUG
    await page.waitForTimeout(5000);
    await page.locator('#username').fill('phuong@here');
    await page.locator('#password').fill('pass');

    // DEBUG
    await page.waitForTimeout(1000);

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("domcontentloaded");
    
    const textContent = await page.locator('h4').textContent();
    const innerText = await page.locator('h4').textContent();

    console.log(textContent);
    console.log(innerText);
    


    // DEBUG
    await page.waitForTimeout(1000);
})