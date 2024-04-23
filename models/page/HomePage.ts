import { Page } from "@playwright/test";
import SearchComponent from "../components/SearchComponent";
import ProductItemComponent from "../components/ProductItemComponent";

export default class HomePage{

    constructor(private page: Page){
        this.page = page;
    }

    searchComponent(): SearchComponent{
        //const locator = this.page.locator(SearchComponent.selector);
        //return new SearchComponent(locator);

        return new SearchComponent(this.page.locator(SearchComponent.selector));
    }

    async productItemComponentList(): Promise<ProductItemComponent[]>{
        const productItemComponents = await this.page.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }
}