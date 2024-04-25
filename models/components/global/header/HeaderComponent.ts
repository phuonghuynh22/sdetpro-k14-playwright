import { Locator } from "@playwright/test";
import SearchComponent from "./SearchComponent";

export default class HeaderComponent {

    public static selector: string = '.header';
    
    constructor(private component: Locator) {
        this.component = component;
    }

    searchComponent(): SearchComponent {
        return new SearchComponent(this.component.locator(SearchComponent.selector));
    }
}