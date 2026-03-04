import {test} from "@playwright/test";
import {LoginPage} from "../Pages/login.page";
import {SecurePage} from "../Pages/Secure.page";
import {users} from "../test-data/user.data";

test("valid login", async ({page})=>{
    const login = new LoginPage(page);
    const secure = new SecurePage(page);

    await login.launch();
    await login.login(users.valid.username, users.valid.password);
    await secure.verifyLoginSuccess();
});

test("invalid login", async ({page})=>{
    const login = new LoginPage(page);

    await login.launch();
    await login.login(users.invalid.username, users.invalid.password);
    await login.flash.expectContains("invalid");
});

