import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class ProductGridComponent {

    public static selector = '.product-grid';
    private productGridTitleLoc = '.title';

    constructor(private component: Locator) {
        this.component = component;
    }

    productGridTitle():Locator{
        return this.component.locator(this.productGridTitleLoc);
    }

    async productItemComponentList(): Promise<ProductItemComponent[]>{
        const productItemComponents = await this.component.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }
}