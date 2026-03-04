import {expect,type Locator, type Page} from '@playwright/test'
import {BasePage} from "./Base.page";
import {FlashComponent} from "../Component/flash.component";

export class LoginPage extends BasePage
{
    
    readonly username : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;

    readonly flash : FlashComponent;


    constructor(page:Page)
    {

     super(page);
     this.username=page.getByLabel("Username");
     this.password=page.getByLabel("Password");
     this.loginBtn=page.getByRole("button", { name: "Login" });

     this.flash = new FlashComponent(page);
    }

    async launch(){
        await this.goto("/login");
        await this.expectUrl(/login/);
    }

    async login(user : string, pass : string){
        await this.fill(this.username, user);
        await this.fill(this.password ,pass);
        await this.click(this.loginBtn);
    }
}

