    // support/hooks.js
    import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
    import { chromium, selectors } from "@playwright/test";

    selectors.setTestIdAttribute("qa-locator"); // set directly here
    setDefaultTimeout(30000);
    Before(async function () {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    });

    After(async function () {
        await this.browser.close();
    });