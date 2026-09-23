const { BasePage } = require("./BasePage");
const loginData = require("../test-data/login.data.json"); // ✅ Node requires JSON natively

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.emailInput = page.getByTestId("email-input");
    this.passwordInput = page.getByTestId("password-input");
    this.submitBtn = page.getByRole("button", { name: /sign in/i });
    this.errorMsg = page.getByTestId("login-error");
  }

  async goto() {
    await this.navigate("");
  }

  async login({ email, password }) {
    await this.fillField(this.emailInput, email);
    await this.fillField(this.passwordInput, password);
    await this.clickAndWait(this.submitBtn, "/dashboard");
  }

  async loginExpectError({ email, password }) {
    await this.fillField(this.emailInput, email);
    await this.fillField(this.passwordInput, password);
    await this.submitBtn.click();
    await this.assertVisible(this.errorMsg);
  }
}

// Export both the class AND the data so tests can use it too
module.exports = { LoginPage, loginData };
