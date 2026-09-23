// import { test, expect } from "@playwright/test";
// const users = require("../test-data/test-data.json");

// users.usersAU.name.forEach((email, index) => {
//     test(`test creating user ${index + 1}`, async ({ page }) => {
//         await page.goto("https://access.qa3.planhub.com/signup/create-account");
//         await page.getByRole("searchbox", { name: "Email" }).fill(email);

//         await page.getByRole("textbox", { name: "Password", exact: true }).click();
//         await page
//             .getByRole("textbox", { name: "Password", exact: true })
//             .fill("Planhub1234#");
//         await page.getByRole("textbox", { name: "Confirm Password" }).click();
//         await page
//             .getByRole("textbox", { name: "Confirm Password" })
//             .fill("Planhub1234#");
//         await page.locator(".mat-checkbox-inner-container").click();
//         await page.waitForTimeout(2000);
//         await page.locator("//button[@id='sign-up-button']").click();
//         await page.waitForURL("https://access.qa3.planhub.com/signup/company-information");
//         await page.waitForTimeout(2000);
//         await page
//             .getByRole("textbox", { name: "Phone Number" })
//             .fill("8888888888");
//         await page.locator("//input[@qa-locator='input-name']").click();
//         await page.locator("//input[@qa-locator='input-name']").fill("PHQATEST");
//         await page.locator("//mat-select[@qa-locator='select-size']").click();
//         await page.locator("//mat-select[@qa-locator='select-size']").nth(2)
//             .click();
//         await page.locator("//mat-select[@qa-locator='select-company-revenue-id']").click();
//         await page
//             .locator("//mat-select[@qa-locator='select-company-revenue-id']")
//             .nth(3)
//             .click();
//         await page.waitForTimeout(1000);
//         await page.getByRole("option", { name: "-15" }).click();
//         await page.waitForTimeout(1000);
//         await page.getByText("Company Revenue").click();
//         await page.getByRole("option", { name: "$4M - $10M" }).click();
//         await page.getByRole("combobox", { name: "Address" }).click();
//         await page
//             .getByRole("combobox", { name: "Address" })
//             .pressSequentially("test");
//         await page.waitForTimeout(1000);
//         await page.getByText("Testarossa Winery, College").click();
//         await page.getByRole("searchbox", { name: "First Name" }).fill("test");
//         await page.getByRole("searchbox", { name: "Last Name" }).fill("user");
//         await page.getByText("Role").click();
//         await page.waitForTimeout(1000);
//         await page.getByText("Estimator").click();
//         await page.waitForTimeout(2000);
//         await page.getByRole("button", { name: "Save & Continue" }).click();
//         await page.waitForLoadState("domcontentloaded");
//         // await page.getByText(" No, This is not my team ").click();
//         await page.locator("a").click();
//         await page.waitForLoadState("domcontentloaded");
//         await page
//             .locator(
//                 "//span[contains(text(), 'Preconstruction, Planning and Supervision')]",
//             ) 
//             .click();
//         await page.getByRole("option", { name: "3rd Party Plan Room" }).click();
//         await page.getByRole("option", { name: "Architect" }).click();
//         await page
//             .locator(
//                 "//button[@qa-locator='button-registration-area-focus-next-button']",
//             )
//             .click();
//         await page.waitForLoadState("domcontentloaded");
//         await page
//             .locator(
//                 "//label[@for='mat-checkbox-3-input']//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']",
//             )
//             .click({ force: true });
//         await page
//             .locator(
//                 "#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container",
//             )
//             .click({ force: true });

//         await expect(
//             page.locator("//button[@qa-locator='button-submit']"),
//         ).toBeEnabled({ timeout: 30000 }); // waits up to 30 seconds

//         await page
//             .locator("//button[@qa-locator='button-submit']")
//             .click({ force: true });
//         await page.waitForLoadState("load");
//         await expect(page).toHaveURL(
//             "https://subcontractor.qa.planhub.com/leads/list",
//             { timeout: 10000 },
//         );

//         await page.locator("//button[@id='pendo-close-guide-85a71df6']").click();
//     });
// });
 