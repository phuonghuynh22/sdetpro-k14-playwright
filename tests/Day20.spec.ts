import { test } from '@playwright/test';

test('Handle Dropdown option', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdownEle = await page.locator('#dropdown');

    // select option 1 - by index
    await dropdownEle.selectOption({ index: 1 });

    // DEBUG
    await page.waitForTimeout(1000);

    // select option 2 - by value
    await dropdownEle.selectOption({ value: '2' });
    // DEBUG
    await page.waitForTimeout(1000);
})

test('Handle iframe', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    // target the iframe using frameLocator
    const iframeEle = await page.frameLocator('iframe[id^="mce"]');

    // find the text area in the iframe
    const editTextAreaEle = await iframeEle.locator('body p');

    // clear placeholder
    await editTextAreaEle.click();
    await editTextAreaEle.clear();
    await editTextAreaEle.fill('input into iframe..');

    // Interact with the main frame's elements
    const footerPowerByLinkEle = await page.locator('a:has-text("Elemental")');
    await footerPowerByLinkEle.click();

    // DEBUG
    await page.waitForTimeout(1000);
})

test('Mouse hover and narrowdown searching scope', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    // find all figures
    const allFigureEles = await page.locator('.figure').all();

    // loop all and narrowdown searching scope
    for(const figureEle of allFigureEles){
        const imgEle = await figureEle.locator('img');

        await imgEle.hover();

        await page.waitForTimeout(1000);
    }
})

test.only('Mouse hover and narrow down searching scope - isVisible', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    // find all figures
    const allFigureEles = await page.locator('.figure').all();

    // loop all and narrowdown searching scope
    for (const figureEle of allFigureEles) {
        const imgEle = await figureEle.locator('img');

        const usernameEle = await figureEle.locator('h5');
        const viewProfileHyperlinkEle = await figureEle.locator('a');
        const isUsernameVisible = await usernameEle.isVisible();
        const isViewProfileHyperlinkVisible = await viewProfileHyperlinkEle.isVisible();
        console.log(`isUsernameVisibleBefore: ${isUsernameVisible}`);
        console.log(`isViewProfileHyperlinkVisibleBefore: ${isViewProfileHyperlinkVisible}`);

        // Mouse hover
        await imgEle.hover();
        
        const isUsernameVisibleAfter = await usernameEle.isVisible();
        const isViewProfileHyperlinkVisibleAfter = await viewProfileHyperlinkEle.isVisible();
        console.log(`isUsernameVisibleAfter: ${isUsernameVisibleAfter}`);
        console.log(`isViewProfileHyperlinkVisible: ${isViewProfileHyperlinkVisibleAfter}`);

        console.log(`\n *****\n`);

        await page.waitForTimeout(1000);
    }
})

test('Handle Dynamic Controls - Checkbox - remove Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    // locate parent components
    const checkboxComp = await page.locator('#checkbox-example');

    const checkboxEle = await checkboxComp.locator('#checkbox input');
    const isEnabled = await checkboxEle.isEnabled();
    const isChecked = await checkboxEle.isChecked();

    console.log(`Is checkbox enabled? -> ${isEnabled}`);
    console.log(`1st time - Is checkbox checked? -> ${isChecked}`);

    console.log(`About to check on the checkbox....`);
    if (!isChecked) {
        await checkboxEle.click();
        console.log(`checked!`);
    }

    const isChecked2 = await checkboxEle.isChecked();
    console.log(`After checked in the 1st time. Is checkbox checked? -> ${isChecked2}`);

    if (!isChecked2) {
        await checkboxEle.click();
        console.log(`Oops! Not sure why it was not checked in the 1st time hence checked again!`);

    }
    console.log(`Final checking. Is checkbox checked? -> still ${isChecked2}`);

    if (isEnabled) {
        console.log('Removing this checkbox....');

        const removeBtnEle = await checkboxComp.locator('button');
        await removeBtnEle.click();
        await page.waitForSelector('#checkbox-example #checkbox input', { state: 'hidden', timeout: 5 * 1000 }); // ~ implicit wait

        const messageEle = await page.locator('#message').textContent();
        console.log(`Is this checkbox enabled? -> ${messageEle}`);
    }

    //debug
    await page.waitForTimeout(1000);

})

test('Handle Dynamic Controls - Text box - disable Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    const inputComp = await page.locator('#input-example');
    const textboxEle = await inputComp.locator('input');
    const enableBtnEle = await inputComp.locator('button');
    const isEditable = await textboxEle.isEditable();

    console.log(`Is text box editable? -> ${isEditable}`);

    console.log(`Enabling the text box....`);
    if (!isEditable) {
        await enableBtnEle.click();
        await page.waitForSelector('#input-example #message', { state: 'visible', timeout: 5 * 1000 });
        const messageEle = await inputComp.locator('#message').textContent();
        console.log(`${messageEle}`);
    }

    const isEditable2 = await textboxEle.isEditable();
    console.log(`Is text box editable? -> ${isEditable2}`);

    if (isEditable2) {
        await textboxEle.fill('Inputting something in the text box...');
        const textboxContent = await textboxEle.inputValue();
        console.log(`${textboxContent}`);
    }

    //debug
    await page.waitForTimeout(1000);
})