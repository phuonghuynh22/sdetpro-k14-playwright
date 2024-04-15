import { Page } from "@playwright/test";

export default async function getAdParams(page: Page, adSlot: string) {
    return await page.evaluate(adSlot => {
        const slot = googletag.pubads().getSlots().find(({ getSlotElementId }) => getSlotElementId() === adSlot);
        return slot.getTargetingMap();
    }, adSlot);
}