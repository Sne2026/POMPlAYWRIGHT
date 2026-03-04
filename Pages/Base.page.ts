import {expect, type Locator, type Page} from '@playwright/test';

export class BasePage{
    protected readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async goto(path:string){
        await this.page.goto(path);
    }

    async expectUrl(regex :RegExp){
        await expect(this.page).toHaveURL(regex);
    }

    protected async expectVisible(locator:Locator){
        await expect(locator).toBeVisible();
    }

    async fill (locator : Locator, value : string){
        await this.expectVisible(locator);
        await locator.fill(value);
    }

    async click(locator :Locator){
        await this.expectVisible(locator);
        await locator.click();
    }

}