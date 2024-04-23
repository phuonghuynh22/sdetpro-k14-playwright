import { Locator } from "@playwright/test";

export default class ProductItemComponent {

    public static selector = '.product-item';
    private productTitleLoc = '.product-title';
    private productPriceLoc = 'span[class="price actual-price"]';

    constructor(private component: Locator){
        this.component = component;
    }

    productTitle(): Locator{
        return this.component.locator(this.productTitleLoc);
    }

    productPrice(): Locator{
        return this.component.locator(this.productPriceLoc);
    }
}