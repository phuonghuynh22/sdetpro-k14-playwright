import { Page } from "@playwright/test";
import SearchComponent from "../components/global/header/SearchComponent";
import ProductItemComponent from "../components/ProductItemComponent";
import HeaderComponent from "../components/global/header/HeaderComponent";
import PageBodyComponent from "../components/PageBodyComponent";
import FooterComponent from "../components/global/footer/FooterComponent";

export default class HomePage{

    constructor(private page: Page){
        this.page = page;
    }

    // use for test: ComponentInParentComponent.spec.ts only
    headerComponent(): HeaderComponent{
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

    // use for test: ListComponentInParentComponent.spec.ts
    pageBodyComponent(): PageBodyComponent{
        return new PageBodyComponent(this.page.locator(PageBodyComponent.selector));
    }

    // use for test: BaseComponentTest.spec.ts
    footerComponent(): FooterComponent{
        return new FooterComponent(this.page.locator(FooterComponent.selector));
    }
}