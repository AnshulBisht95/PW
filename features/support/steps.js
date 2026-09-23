import { Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test"




Given('User is on the login page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.page.goto("https://access.qa.planhub.com/login");
});


When('User enters {string} & {string} & clicks on the signIn button', async function (email, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.getByTestId("button-sign-in-to-planhub").waitFor({state: 'visible'});
   await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.getByRole('textbox', {name: 'Password'}).fill(password);
    await this.page.getByTestId("button-sign-in-to-planhub").click();
});



Then('User should be redirected to {string}', async function (url) {
    await this.page.getByTestId("button-lead-quick-preview-view-project-files-sub-2-0").waitFor({ state: "visible" });
    await expect(this.page).toHaveURL(url);
});

Then("GC url should be {string}", async function (url) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.getByTestId("input-search").waitFor({state: "visible"});
    await expect(this.page).toHaveURL(url);
});
