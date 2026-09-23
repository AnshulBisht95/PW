const { BasePage } = require("../pages/BasePage");
const testData = require("../test-data/test-data.json");
const environments = require("../test-data/env.json");
const { expect } = require("@playwright/test");


class SignUp extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page   //invoke all test functions
   */
  constructor(page) {
    super(page); // calls the constructor of the parent class
    this.page = page;
    this.userName = page.locator("[qa-locator='input-email']");
    this.passWord = page.locator("[qa-locator='input-password']");
    this.confirmPasword = page.locator(
      "[qa-locator='input-password-verification']"
    );  
    this.checkBoxTC = page.locator("[qa-locator='terms-check']");
    this.signUpButton = page.locator("[qa-locator='register-submit']");
    this.userGC = page.locator(
      "[qa-locator='button-toggle-company-type-id-option-general-contractor']"
    );
    this.userSC = page.locator(
      "[qa-locator='button-toggle-company-type-id-option-subcontractor']"
    );
    this.userSP = page.locator(
      "[qa-locator='button-toggle-company-type-id-option-supplier']"
    );
    this.companyName = page.locator("[qa-locator='input-name']");
    this.companySizeDropdown = page.locator("//mat-select[@qa-locator='select-size']");
    this.companySize = page.getByText("16-30");
    this.companyRevenueDropdown = page.locator("//mat-select[@qa-locator='select-company-revenue-id']");
    this.companyRevenue = page.locator("(//div[@qa-locator='select-company-revenue-id-panel']/mat-option)[6]");
    this.companyAddress = page.locator(
      "[qa-locator='address-autocomplete-full-address']"
    );
    this.addressOption = page.locator(
      "//mat-option[@qa-locator='address-autocomplete-full-address-option-testarossa-winery-college-avenue-los-gatos-ca-usa']"
    );
    this.addressError = page.locator("//mat-error[contains(text(), ' Address is required ')]");
    this.firstName = page.locator("[qa-locator='input-first-name']");
    this.lastName = page.locator("[qa-locator='input-last-name']");
    this.userRole = page.locator("[qa-locator='select-role-id']");
    this.phoneNumber = page.locator("[qa-locator='input-phoneNumber-number']");
    this.saveAndContinueBtn = page.locator("[qa-locator='button-company-information-planhub']");
    this.notMyCompany = page.locator("a[qa-locator='link']");
    this.myTrades = page.locator("//span[contains(text(), 'Preconstruction, Planning and Supervision')]");
    this.trade1 = page.locator("//span[contains(text(), '3rd Party Plan Room')]");
    this.trade2 = page.locator("(//span[contains(text(), 'Architect')])[1]");
    this.trade3 = page.locator("//span[contains(text(), 'Building Information Modeling')]");
    this.nextBtnStep4 = page.locator("button[qa-locator='button-registration-area-focus-next-button']");
    this.quickStartOption1 = page.locator("mat-checkbox[qa-locator='checkbox-company-profile-spotlight-check']");
    this.closeBanner = page.locator("//button[@aria-label='Close']");
    this.submitFinalStepButton = page.locator("//button[@qa-locator='button-submit']");
    this.viewProjectFileButton = page.locator("button[qa-locator='button-lead-quick-preview-view-project-files-sub-2-0']");
  }
 
  async signUpSC(password, addressName, email) {
    await this.page.goto(`${environments.baseUrlSignUp}`);
    // await this.userName.pressSequentially(
    //   `${testData.usersAU.email}${Math.floor(Math.random() * 100000)}${testData.usersAU.domain}`
    // );
    await this.userName.pressSequentially(email);
    await this.passWord.fill(password);
    await this.confirmPasword.fill(password);
    await this.checkBoxTC.click();
    await this.page.waitForTimeout(1000);
    await this.signUpButton.click();
    await this.page.waitForTimeout(2000);
    await this.page.waitForURL(environments.companySetupPage);
    await this.page.locator("(//span[@class='mat-checkbox-inner-container'])[1]").isVisible();
    await this.userGC.click();
    await this.userSC.click();
    await this.phoneNumber.fill(testData.usersAU.phoneNumber);
    await this.companyName.fill(this.randomCompanyName());
    await this.companySizeDropdown.click();
    await this.companySize.click();
    await this.companyRevenueDropdown.click();
    await this.companyRevenue.click();
    this.companyAddress.pressSequentially(addressName);
    await this.addressOption.click();
    await this.page.getByText('close').isVisible();  //cross icon after address is selected
    await this.addressError.waitFor({ state: 'hidden' });
    await this.firstName.fill(`${testData.usersAU.firstName}`);
    await this.lastName.fill(`${testData.usersAU.lastName}`);
    await this.userRole.click();
    await this.page.getByText('Project Manager').click();
    await this.page.locator('.mat-checkbox-inner-container').click();
    await this.page.waitForTimeout(1000);
    await this.saveAndContinueBtn.dblclick();
    await this.page.waitForURL(environments.confirmYourCompany);
    await this.page.waitForTimeout(1000);
    await this.notMyCompany.click();
    await this.page.waitForURL(environments.areaOfFocus1);
    await this.myTrades.click();
    await this.trade1.click();
    await this.trade2.click();
    await this.trade3.click();
    await this.nextBtnStep4.click();
    await this.page.waitForURL(environments.quickStart);
    await this.quickStartOption1.click();
    // await expect(this.page.locator("(//img[@alt='Quick Icon'])[6]")).toBeVisible(); //waits until locator is visible
    await expect(this.submitFinalStepButton).toBeEnabled();
    // await expect(
    //         page.locator("//button[@qa-locator='button-submit']"),
    //     ).toBeEnabled({ timeout: 30000 });\
    await this.page.waitForTimeout(2000);
    await this.closeBanner.click();
    await this.submitFinalStepButton.click();
    await this.page.waitForURL(environments.landingPage);
    await this.page.getByRole('button', { name: 'Close' }).click();
    await expect(this.viewProjectFileButton).toBeVisible()
  }
}

module.exports = { SignUp };
