import test from "@playwright/test";
import HomePage from "../models/page/HomePage";
import ProductItemComponent from "../models/components/ProductItemComponent";

test('Test List Component In Page', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');

    const homePage: HomePage = new HomePage(page);
    const productItemComponentList: ProductItemComponent[] = await homePage.productItemComponentList();
    //for (let productItemComponentList of 

    for (const productItemComponent of productItemComponentList) {
        const productTitle = await productItemComponent.productTitle().textContent();
        const productPrice = await productItemComponent.productPrice().textContent();
        console.log(`${productTitle?.trim()} - ${productPrice}`);
    }
})