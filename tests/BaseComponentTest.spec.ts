import test from "@playwright/test"
import HomePage from "../models/page/HomePage";
import FooterComponent from "../models/components/global/footer/FooterComponent";
import FooterColumnComponent from "../models/components/global/footer/FooterColumnComponent";

test('Test Base Component - Footer', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const footerComponent: FooterComponent = homePage.footerComponent();
    const informationColumnComponent = footerComponent.informationColumnComponent();
    const customerServiceColumnComponent = footerComponent.customerServiceColumnComponent();
    const myAccountColumnComponent = footerComponent.myAccountColumnComponent();
    const followUsColumnComponent = footerComponent.followUsColumnComponent();

    await getColumnName(informationColumnComponent);
    await getLinks(informationColumnComponent);
    
    await getColumnName(customerServiceColumnComponent);
    await getLinks(customerServiceColumnComponent);

    await getColumnName(myAccountColumnComponent);
    await getLinks(myAccountColumnComponent);

    await getColumnName(followUsColumnComponent);
    await getLinks(followUsColumnComponent);
})

async function getLinks(footerColumnComponent: FooterColumnComponent) {
    const links = await footerColumnComponent.links();
    for (const link of links) {
        const item = await link.textContent();
        console.log(item);
    }
    console.log('\n*****\n');
}

async function getColumnName(footerColumnComponent: FooterColumnComponent) {
        const columnTitle = await footerColumnComponent.title().textContent();
        console.log(columnTitle?.toUpperCase());
}