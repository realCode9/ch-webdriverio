import loginPage from "../../pageobjects/login/login-page";
import loginTestData from "../../../resources/login/login-test-data.json";

describe("Validation of Login Functionality", () => {
  beforeAll(async function () {
    await loginPage.open();
  });

  it("Validating the Email Text Field is present on the Login page", async () => {
    expect(await loginPage.isVisibleEmailField()).toBe(true);
  });

  it("Validating the Password Text Field is present on the Login page", async () => {
    expect(await loginPage.isVisiblePasswordField()).toBe(true);
  });

  it("Validating Sign-In Button is disabled if any of the Login Credential is Blank", async () => {
    expect(await loginPage.isDisabledSignInBtn()).toBe("true");
  });

  it("Validating Forgot Password Link is displayed", async () => {
    expect(await loginPage.isVisibleForgotPasswordLink()).toBe(true);
  });

  it("Validating Terms and Conditions Link is displayed", async () => {
    expect(await loginPage.isVisibleTermsConditionsLink()).toBe(true);
  });

  it("Validating SSO Login Button is displayed", async () => {
    expect(await loginPage.isVisibleSSOLoginBtn()).toBe(true);
  });

  it("Validating User Login with Invalid Credentials", async () => {
    await loginPage.loginInvalidCredentials();
    expect(await loginPage.validateErrorMsg()).toBe(true);
  });

  it("Validating Password is Encrypted when entered", async () => {
    expect(await loginPage.isEncryptedPassword()).toEqual(loginTestData.fieldType);
  });

  it("Validating User Loging using Valid Email and Password", async () => {
    await loginPage.login();
    expect(await loginPage.getUsername()).toEqual(loginTestData.userName);
  });

  it("Validate the logout link and landing page after logout", async () => {
    expect(await loginPage.validateLogoutLink()).toBe(true);
    await loginPage.validateLandingPageAfterLogout();
    expect(await browser.getUrl()).toContain(loginTestData.textInUrl);
    console.log('Test Message');
  });

});
