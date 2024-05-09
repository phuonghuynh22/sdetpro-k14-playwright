import { Locator } from "@playwright/test";

// this is a base component
// a base component has NO selectors
export default class FooterColumnComponent {

    private titleSel: string = 'h3';
    private linkSel: string = 'li a';

    // this one is to force concrete class's constructor to call parent constructor
    constructor(private component: Locator) {
        this.component = component;
        this.component.scrollIntoViewIfNeeded();
    }

    title(): Locator {
        return this.component.locator(this.titleSel);
    }

    async links(): Promise<Array<Locator>> {
        return this.component.locator(this.linkSel).all();
    }
}