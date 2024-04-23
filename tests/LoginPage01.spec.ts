import test from "@playwright/test";
import LoginPageMethod01 from "../models/page/LoginPageMethod01"

test('Test POM Method 01 - Introducing main interaction method', async ({page}) => {
    const loginPage: LoginPageMethod01 = new LoginPageMethod01(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginPage.inputUsername('tomsmith');
    await loginPage.inputPassword('SuperSecretPassword!');
    await loginPage.clickOnLoginBtn();

    await page.waitForURL('**/secure');
})