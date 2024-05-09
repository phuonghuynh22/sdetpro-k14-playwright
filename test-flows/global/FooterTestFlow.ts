import { Page } from "@playwright/test";
import HomePage from "../../models/page/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../../models/components/global/footer/InformationColumnComponent";
import CustomerServiceColumnComponent from "../../models/components/global/footer/CustomerServiceColumnComponent";
import MyAccountColumnComponent from "../../models/components/global/footer/MyAccountColumnComponent";
import FollowUsColumnComponent from "../../models/components/global/footer/FollowUsColumnComponent";

export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    // Service method
    async verifyFooterComponent(): Promise<void> {
        await this.verifyInformationColumn();
        await this.verifyCustomerServiceColumn();
        await this.verifyMyAccountColumn();
        await this.verifyFollowUsColumn();
    }

    // Support methods
    private async verifyInformationColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const informationColumnComp: InformationColumnComponent = footerComponent.informationColumnComponent();
        const title = await informationColumnComp.title().textContent();
        console.log(`Title: ${title}`);
    }

    private async verifyCustomerServiceColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const customerServiceColumnComp: CustomerServiceColumnComponent = footerComponent.customerServiceColumnComponent();
        const title = await customerServiceColumnComp.title().textContent();
        console.log(`Title: ${title}`);
    }
    private async verifyMyAccountColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const myAccountColumnComp: MyAccountColumnComponent = footerComponent.myAccountColumnComponent();
        const title = await myAccountColumnComp.title().textContent();
        console.log(`Title: ${title}`);
    }
    private async verifyFollowUsColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const followUsColumnComp: FollowUsColumnComponent = footerComponent.followUsColumnComponent();
        const title = await followUsColumnComp.title().textContent();
        console.log(`Title: ${title}`);
    }
}