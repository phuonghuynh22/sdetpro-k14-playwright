import test from "@playwright/test";
import HomePage from "../models/page/HomePage";
import HeaderComponent from "../models/components/global/header/HeaderComponent";

test('Test Component In Parent Component - searchComponent() in HeaderComponent', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);

    const headerComponent: HeaderComponent = homePage.headerComponent();
    await headerComponent.searchComponent().searchBox().click();
    await headerComponent.searchComponent().searchBox().fill('computer');
    await headerComponent.searchComponent().searchBtn().click();

    // debug
    await page.waitForTimeout(3000);
});