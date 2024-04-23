import test from "@playwright/test";
import HomePage from "../models/page/HomePage";
import SearchComponent from "../models/components/SearchComponent";

test('Test Component In Page', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);

    const searchComponent: SearchComponent = homePage.searchComponent();

    await searchComponent.searchBox().click();
    await searchComponent.searchBox().fill('laptop');
    await searchComponent.searchBtn().click();

    // debug
    await page.waitForTimeout(3000);
});