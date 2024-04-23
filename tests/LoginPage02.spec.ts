import test from "@playwright/test";
import LoginPageMethod01 from "../models/page/LoginPageMethod01"
import LoginPageMethod02 from "../models/page/LoginPageMethod02";

test('Test POM Method 01 - introducing methods', async ({page}) => {
    const loginPage: LoginPageMethod01 = new LoginPageMethod01(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginPage.inputUsername('tomsmith');
    await loginPage.inputPassword('SuperSecretPassword!');
    await loginPage.clickOnLoginBtn();

    await page.waitForURL('**/secure');
})

test.only('Test POM Method 02 - introducing elements', async ({page}) => {
    const loginPage: LoginPageMethod02 = new LoginPageMethod02(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginPage.username().fill('tomsmith');
    await loginPage.password().fill('SuperSecretPassword!');
    await loginPage.loginBtn().click();

    await page.waitForURL('**/secure');
})
