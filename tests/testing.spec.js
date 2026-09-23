import { test, expect } from "@playwright/test"

// test("testing assertions", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.getByPlaceholder("Username").fill("Admin");
//     await page.getByPlaceholder("Password").fill("admin123");
//     await page.getByRole("button", { name: " Login " }).click();
//     await page.getByText("Admin").first().click();
//     await page.locator("div.oxd-select-text.oxd-select-text--active").first().click();
//     const locators = await page.locator("div.oxd-select-option span ").all();
//     for (let locator of locators) {
//         let text = await locator.textContent();
//         console.log(text);
//         if (text.includes("ESS")) {
//             await locator.click();
//             console.log(text);
//         }
//     }
//     // const selectedOption = await page.locator("#dropdown-class-example").textContent();
//     await page.waitForTimeout(5000);
//     // console.log(selectedOption);
// })


// test("Checkbox multiple", async ({ page }) => {

//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const locators = await page.locator("div#checkbox-example label input").all();
//     console.log(locators);
//     for (let locator of locators) {
//         await locator.click();
//         console.log(await locator.textContent());
//     }
//     await page.waitForTimeout(2000);

// })

// test("Checkbox msultiple", async ({ page }) => {

//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const locators = await page.locator("div#checkbox-example label input").all();
//     console.log(locators);
//     for (let locator of locators) {
//         await locator.click();
//         console.log(await locator.textContent());
//     }
//     await page.waitForTimeout(2000);

// })


// test.only("Auto Suggest", async ({ page }) => {
//     await page.goto("https://www.redbus.in/");
//     await page.locator("#srcinput").fill("test");
//     await page.locator("div.listHeader___90a8b7").first().waitFor({state: "attached"});
//     const locators = await page.locator("div.listHeader___90a8b7").all();
//     console.log(locators);
//     for (let locator of locators) {
//         const text = await locator.textContent();
//         if(text.includes("Dadar")){
//              await page.waitForTimeout(500);
//             await locator.click();
//             console.log(text)
//         }
//     }
//     await page.waitForTimeout(4000);

// })


test("dialog handeling", async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

     page.on("dialog", async(dialog)=>{
        await dialog.accept();
    })
    await page.locator("#alertbtn").click();
    await page.waitForTimeout(2000);
})

test("Webtabl @regression", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const allRow = await page.locator("#productTable tr").all();
    for(let row of allRow){
        let text = await row.textContent();
        if(text.includes("Laptop")){
            await row.locator(" input").click();
        }
    }
      await page.waitForTimeout(2000);
})

test("file upload  @sanity", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("#multipleFilesInput").setInputFiles(["C:\\Users\\ANSHUL BISHT\\Documents\\Playwright\\PW\\test-data\\ChatGPT Image Mar 9, 2026, 01_00_18 AM.png", "C:\\Users\\ANSHUL BISHT\\Documents\\Playwright\\PW\\test-data\\furry_youtube_banner_2560x1440.png"]);
      await page.waitForTimeout(2000);
        //   await page.locator("#multipleFilesInput").setInputFiles([]);
    //   await page.waitForTimeout(2000);
      await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");  
})