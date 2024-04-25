import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";
import ProductGridComponent from "./ProductGridComponent";

export default class PageBodyComponent{

    public static selector: string = '.page-body';

    constructor(private component: Locator){
        this.component = component;
    }

    productGridComponent(): ProductGridComponent{
        return new ProductGridComponent(this.component.locator(ProductGridComponent.selector));
    }

    // refactor to handle exception: moved this to ProductGridComponent to get ProductGrid Title
    /* 
    async productItemComponentList(): Promise<ProductItemComponent[]>{
        const productItemComponents = await this.component.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }
    */
}