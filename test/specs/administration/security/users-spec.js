import loginPage from "../../../pageobjects/login/login-page";
import menuoptionsPage from "../../../pageobjects/menuoptions-page";
import usersPage from "../../../pageobjects/administration/security/users-page";
import usersTestData from "../../../../resources/administration/security/users-test-data.json";
import utilitiesPage from "../../../../utilities/common-utilities";

describe("Test Cases for Users", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });

  it("Validating navigation to users", async () => {
    await menuoptionsPage.clickOnAdmin();
    await menuoptionsPage.clickOnSecurity();
    await menuoptionsPage.clickOnUsers();
    expect(await usersPage.visibilityOfUserListText()).toBe(true);
  });

  it("Validating number of users listed on the first page", async () => {
    expect(await usersPage.visibilityOfPagination()).toBe(true);
    await usersPage.getFirstPage();
    expect(await usersPage.getFirstPageAttribute()).toEqual(
      usersTestData.userAttribute
    );
    expect(await usersPage.returnRowUserCount()).toBeLessThanOrEqual(
      usersTestData.rowUserCount
    );
  });

  it("Validating number of users listed on the last page", async () => {
    await usersPage.getLastPage();
    expect(await usersPage.returnRowUserCount()).toBeLessThanOrEqual(
      usersTestData.rowUserCount
    );
  });

  it("Validating the columns on user list table section", async () => {
    expect(await usersPage.getUserNameText()).toEqual(
      usersTestData.userNameText
    );
    expect(await usersPage.getUserTypeText()).toEqual(
      usersTestData.userTypeText
    );
    expect(await usersPage.getUserLastLoginText()).toEqual(
      usersTestData.userLastLoginText
    );
    expect(await usersPage.getUserRoleText()).toEqual(
      usersTestData.userRoleText
    );
    expect(await usersPage.getUserEmailText()).toEqual(
      usersTestData.userEmailText
    );
    expect(await usersPage.getUserStatusText()).toEqual(
      usersTestData.userStatusText
    );
  });

  it("Validating the creation of new user", async () => {
    await usersPage.clickOnNewButton();
    expect(await usersPage.visibilityOfUserDetailText()).toBe(true);
    let randomNumber = await utilitiesPage.randomNumberGenerator(1, 1000);
    await usersPage.enterEmail(usersTestData.userEmail + randomNumber);
    await usersPage.enterName(usersTestData.userName);
    await usersPage.clickOnRole();
    await utilitiesPage.selectDropDownOptions(usersTestData.userRole);
    await usersPage.clickOnOrganization();
    await utilitiesPage.selectDropDownOptions(usersTestData.userOrganization);
    await usersPage.clickOnDataRole();
    await utilitiesPage.selectDropDownOptions(usersTestData.userDataRole);
    await usersPage.clickOnFileType();
    await utilitiesPage.selectDropDownOptions(usersTestData.userFileType);
    await usersPage.clickOnUserLicensedState();
    await utilitiesPage.selectDropDownOptions(usersTestData.userLicensedState);
    await usersPage.enterPayerIdentifier(
      usersTestData.userPayerIdentifier + randomNumber
    );
    await usersPage.clickOnAuthType();
    await usersPage.clickOnMfaCheckbox();
    await usersPage.clickOnSubmitButton();
    expect(await usersPage.visibilityOfSuccessToast()).toEqual(
      usersTestData.successMessage
    );
  });

  it("Validating search for deleted active user", async () => {
    await usersPage.searchDeletedUser(usersTestData.searchDeletedData);
    await usersPage.clickOnUserType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectDeleted);
    await usersPage.clickOnAccountType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectPayer);
    await usersPage.clickOnSearchButton();
    expect(await usersPage.getDeletedUser()).toEqual(usersTestData.deletedUser);
  });

  it("Validating search for blocked user", async () => {
    await usersPage.clearSearch();
    await usersPage.searchBlockedUser(usersTestData.searchBlockedData);
    await usersPage.clickOnUserType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectBlocked);
    await usersPage.clickOnAccountType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectProvider);
    await usersPage.clickOnSearchButton();
    expect(await usersPage.getBlockedUser()).toEqual(usersTestData.blockedUser);
  });

  it("Validating search for active user", async () => {
    await usersPage.clearSearch();
    await usersPage.searchActiveUser(usersTestData.userName);
    await usersPage.clickOnUserType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectActive);
    await usersPage.clickOnAccountType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectPayer);
    await usersPage.clickOnSearchButton();
    expect(await usersPage.getActiveUser()).toEqual(usersTestData.activeUser);
  });

  it("Validating updates for a user", async () => {
    await usersPage.viewUser();
    await usersPage.clickOnRole();
    await usersPage.updateUserRole();
    await usersPage.save();
    expect(await usersPage.visibilityOfSuccessToast()).toEqual(
      usersTestData.successMessage
    );
    await usersPage.searchUser(usersTestData.userName);
    await usersPage.clickOnAccountType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectPayer);
    await usersPage.clickOnSearchButton();
    await usersPage.viewUser();
    expect(await usersPage.afterUpdateHistory()).toBeGreaterThanOrEqual(
      await usersPage.beforeUpdateHistory()
    );
    await usersPage.cancel();
  });

  it("Validating user delete functionality", async () => {
    await usersPage.searchUser(usersTestData.userName);
    await usersPage.clickOnAccountType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectPayer);
    await usersPage.clickOnSearchButton();
    await usersPage.viewUser();
    await usersPage.deleteUser();
    expect(await usersPage.visibilityOfSuccessToast()).toEqual(
      usersTestData.successMessage
    );
  });

  it("Validating search when there is no data in search result for deleted user", async () => {
    await usersPage.searchNoMatchingUser(usersTestData.userName);
    await usersPage.clickOnAccountType();
    await utilitiesPage.selectDropDownOptions(usersTestData.selectPayer);
    await usersPage.clickOnSearchButton();
    expect(await usersPage.getNoMatchingUser()).toEqual(
      usersTestData.noMatchingUser
    );
  });

  it("Validating submit button disable functionality when only non-mandatory fields are entered", async () => {
    await usersPage.clickOnNewButton();
    await usersPage.clickOnOrganization();
    await utilitiesPage.selectDropDownOptions(usersTestData.userOrganization);
    await usersPage.clickOnDataRole();
    await utilitiesPage.selectDropDownOptions(usersTestData.userDataRole);
    await usersPage.clickOnFileType();
    await utilitiesPage.selectDropDownOptions(usersTestData.userFileType);
    let randomNumber = await utilitiesPage.randomNumberGenerator(1, 100);
    await usersPage.clickOnUserLicensedState();
    await utilitiesPage.selectDropDownOptions(usersTestData.userLicensedState);
    await usersPage.clickOnAuthType();
    await usersPage.clickOnMfaCheckbox();
    expect(await usersPage.submitEnable()).toBe(false);
  });

  it("Validating submit button enable functionality when only mandatory fields are entered", async () => {
    await usersPage.cancel();
    await usersPage.clickOnNewButton();
    let randomNumber = await utilitiesPage.randomNumberGenerator(1, 100);
    await usersPage.enterEmail(usersTestData.userEmail + randomNumber);
    await usersPage.enterName(usersTestData.userName);
    await usersPage.clickOnRole();
    await utilitiesPage.selectDropDownOptions(usersTestData.userRole);
    await usersPage.enterPayerIdentifier(
      usersTestData.userPayerIdentifier + randomNumber
    );
    expect(await usersPage.submitEnable()).toBe(true);
  });
});
