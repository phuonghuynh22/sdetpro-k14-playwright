import { Locator } from "@playwright/test";

export default class SearchComponent {
    public static selector = '.search-box';

    private searchBoxLoc = 'input[id="small-searchterms"]';
    private searchBtnLoc = 'input[class*="search-box-button"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    searchBox(): Locator {
        return this.component.locator(this.searchBoxLoc);
    }

    searchBtn(): Locator {
        return this.component.locator(this.searchBtnLoc);
    }
}