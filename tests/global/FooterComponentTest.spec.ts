import test from "@playwright/test";
import FooterTestFlow from "../../test-flows/global/FooterTestFlow";

test('Test Footer component Homepage', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const footerTestFlow: FooterTestFlow = new FooterTestFlow(page);
    await footerTestFlow.verifyFooterComponent();

    // debug
    await page.waitForTimeout(2000);
})