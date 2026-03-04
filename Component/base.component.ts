import {expect, type Locator, type Page} from '@playwright/test';

export class BaseComponent{
    protected readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    protected async expectVisible(locator:Locator){
        await expect(locator).toBeVisible();
    }

    async click(locator :Locator){
        await this.expectVisible(locator);
        await locator.click();
    }
}