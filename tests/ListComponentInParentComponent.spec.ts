import test from "@playwright/test";
import HomePage from "../models/page/HomePage";
import ProductItemComponent from "../models/components/ProductItemComponent";
import PageBodyComponent from "../models/components/PageBodyComponent";
import ProductGridComponent from "../models/components/ProductGridComponent";

test('Test List Component In Parent Component - productItemComponent() in PageBodyComponent', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');

    const homePage: HomePage = new HomePage(page);
    const pageBodyComponent: PageBodyComponent = homePage.pageBodyComponent();

    // Handle exception
    // AFTER REFACTORING: productItemComponentList() MOVED to ProductGridComponent.ts
    const productGridComponent: ProductGridComponent = pageBodyComponent.productGridComponent();
    const productGridTitle = await productGridComponent.productGridTitle().textContent();
    console.log(productGridTitle?.trim());

    const productItemComponentList: ProductItemComponent[] = await productGridComponent.productItemComponentList();
    for (const productItemComponent of productItemComponentList) {
        const productTitle = await productItemComponent.productTitle().textContent();
        const productPrice = await productItemComponent.productPrice().textContent();
        console.log(`${productTitle?.trim()} - ${productPrice}`);
    }
})