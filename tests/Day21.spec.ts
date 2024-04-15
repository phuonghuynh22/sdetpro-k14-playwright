import { Page, test } from '@playwright/test'
import scrollPageByPercentage from '../utils/PageHelper';
import getAdParams from '../utils/AdHelper';

const jsAlertUrl = 'https://the-internet.herokuapp.com/javascript_alerts';
const floatingMenuUrl = 'https://the-internet.herokuapp.com/floating_menu';


test('JS Alert', async ({ page }) => {
    page.goto(jsAlertUrl);

    const jsAlertBtnEle = page.locator('button[onclick="jsAlert()"]');

    // must define the event first
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    // trigger js alert
    await jsAlertBtnEle.click();

    await page.waitForTimeout(3000);
})

test('JS Confirm', async ({ page }) => {
    page.goto(jsAlertUrl);

    const jsConfirmBtnEle = page.locator('button[onclick="jsConfirm()"]');

    // must define the event first
    page.on('dialog', async dialog => {
        console.log(`The alert message is: ${dialog.message()}`);
        await dialog.dismiss();
    });

    // trigger js alert
    await jsConfirmBtnEle.click();

    const resultMessageEle = await page.locator('#result').innerText();
    console.log(resultMessageEle);

    await page.waitForTimeout(3000);
})

test('JS Prompt', async ({ page }) => {
    page.goto(jsAlertUrl);

    const jsPromptBtnEle = page.locator('button[onclick="jsPrompt()"]');

    // must define the event first
    page.on('dialog', async dialog => {
        console.log(`The prompt message is: ${dialog.message()}`);
        await dialog.accept('about to accept...');
    });

    // trigger js alert
    await jsPromptBtnEle.click();

    const resultMessageEle = await page.locator('#result').innerText();
    console.log(resultMessageEle);

    await page.waitForTimeout(3000);
})

test('JS Alert automatically handled by JS', async ({ page }) => {
    page.goto(jsAlertUrl);

    const jsAlertBtnEle = page.locator('button[onclick="jsAlert()"]');

    await jsAlertBtnEle.click();
})

test('Execute JS without parameters - scroll', async ({ page }) => {
    await page.goto(floatingMenuUrl);

    // highlight function
    await page.locator('h3').highlight();

    // scroll to bottom
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    // wait 2 secs
    await page.waitForTimeout(2000);

    // scroll to top
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });

    await page.waitForTimeout(2000);
})

test('Execute JS with parameters - scroll partially', async ({ page }) => {
    await page.goto(floatingMenuUrl);

    // scroll to a specific percentage
    await page.evaluate((scrollPercentage) => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    }, 0.5);

    await page.waitForTimeout(2000);
})

test('Execute JS with parameters - scroll by percentage', async ({ page }) => {
    await page.goto(floatingMenuUrl);

    // scroll to a specific percentage
    await scrollPageByPercentage(page, 0.5);

    await page.waitForTimeout(2000);
})

test('Execute JS and return value value - google Ad', async ({ page }) => {
    await page.goto('https://www.foodandwine.com/');
    await page.waitForTimeout(5000);
    const returnAdsValues = await getAdParams(page, 'leaderboard-flex-1');
    console.log(returnAdsValues);
});

test.only( 'Execute JS and return the value - google Ad - waitForSelector', async ({ page }) => {
    await page.goto('https://www.foodandwine.com/');
    await page.waitForSelector('div[id="leaderboard-flex-1"]', { timeout: 10000 });
    await scrollPageByPercentage(page, 1);
    await page.waitForTimeout (1000);
    const returnAdsValues = await getAdParams (page, 'leaderboard-flex-1');
    console.log(returnAdsValues);
});