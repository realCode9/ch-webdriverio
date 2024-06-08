import Page from "../page";
import commonUtil from "../../../utilities/common-utilities";
import loginTestData from "../../../resources/login/login-test-data.json";

class LoginPage extends Page {
  get inputUsername() {
    return $("//input[@type='text']");
  }
  get inputPassword() {
    return $("//input[@type='password']");
  }
  get btnSubmit() {
    return $("//button[normalize-space()='Sign In']");
  }
  get dashboardIcon() {
    return $("//i[@class='icon icon-dashboard']");
  }
  get forgotPasswordLink() {
    return $("//span[normalize-space()='Forgot Password?']");
  }
  get termsConditionLink() {
    return $("#terms-of-use");
  }
  get btnSSOLogin() {
    return $("//button[normalize-space()='SSO Login']");
  }
  get errorMsg() {
    return $("//div[@id='message']//span");
  }
  get userName() {
    return $("//app-navigation-header//div[2]//span[1]");
  }
  get profileDropDown() {
    return $("//div[@id='profileDropdown']");
  }
  get logoutLink() {
    return $("#logout");
  }

  //=====functions=========//

  async open() {
    return super.open("login");
  }
  async login() {
    var urlValue = browser.config.baseUrl;

    if (urlValue.includes(loginTestData.keyword)) {
      commonUtil.loginFunction(
        loginTestData.email,
        loginTestData.regPassword,
        this.inputUsername,
        this.inputPassword,
        this.btnSubmit
      );
    } else {
      commonUtil.loginFunction(
        loginTestData.email,
        loginTestData.chPassword,
        this.inputUsername,
        this.inputPassword,
        this.btnSubmit
      );
    }
  }

  async isVisibleEmailField() {
    try {
      await this.inputUsername.waitForDisplayed();
      return await this.inputUsername.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisiblePasswordField() {
    try {
      return await this.inputPassword.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isDisabledSignInBtn() {
    try {
      return await this.btnSubmit.getAttribute("disabled");
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isEncryptedPassword() {
    try {
      return await this.inputPassword.getAttribute("type");
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleForgotPasswordLink() {
    try {
      return await this.forgotPasswordLink.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleTermsConditionsLink() {
    try {
      return await this.termsConditionLink.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleSSOLoginBtn() {
    try {
      return await this.btnSSOLogin.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async loginInvalidCredentials() {
    var urlValue = browser.config.baseUrl;

    if (urlValue.includes(loginTestData.keyword)) {
      commonUtil.loginFunction(
        loginTestData.email,
        loginTestData.invalidPassword,
        this.inputUsername,
        this.inputPassword,
        this.btnSubmit
      );
    } else {
      commonUtil.loginFunction(
        loginTestData.email,
        loginTestData.invalidPassword,
        this.inputUsername,
        this.inputPassword,
        this.btnSubmit
      );
    }
  }

  async validateErrorMsg() {
    try {
      await this.errorMsg.waitForDisplayed();
      return await this.errorMsg.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getUsername() {
    try {
      await this.userName.waitForDisplayed();
      return await this.userName.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateLogoutLink() {
    try {
      await this.profileDropDown.waitForDisplayed();
      await this.profileDropDown.click();
      return await this.logoutLink.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateLandingPageAfterLogout() {
    try {
      await this.logoutLink.click();
      await this.inputUsername.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}
module.exports = new LoginPage();
