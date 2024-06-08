import loginPage from "../../../pageobjects/login/login-page";
import workQueueUserPage from "../../../pageobjects/administration/workqueue/users-page";
import menuoptionsPage from "../../../pageobjects/menuoptions-page";
import workQueueUserTestData from "../../../../resources/administration/work-queue/work-queue-user-test-data.json";
import commonUtilities from "../../../../utilities/common-utilities";
import loginTestData from "../../../../resources/login/login-test-data.json";

describe("Validation of work queue users module functionality", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });
  it("Validating visibility of user menuoption", async () => {
    await menuoptionsPage.clickOnAdmin();
    await menuoptionsPage.clickOnWorkQueue();
    expect(await workQueueUserPage.checkUsersMenuOptionIsVisible()).toBe(true);
  });
  it("Validating navigation to work queue users page.", async () => {
    await menuoptionsPage.clickOnAdmin();
    await menuoptionsPage.clickOnWorkQueue();
    await menuoptionsPage.clickOnWorkQueueUser();
    expect(await workQueueUserPage.checkUsersPageHeaderName()).toBe(workQueueUserTestData.pageHeader);
  });
  it("Validating the sub section headers on workqueue users Page", async () => {
    expect(await workQueueUserPage.checkUsersSubSectionFirstHeadersName()).toBe(workQueueUserTestData.firstSubSeactionHeader);
    expect(await workQueueUserPage.checkUsersSubSectionHeadersName(1)).toBe(workQueueUserTestData.secondSubSeactionHeader);
    expect(await workQueueUserPage.checkUsersSubSectionHeadersName(2)).toBe(workQueueUserTestData.thirdSubSeactionHeader);
  });
  it("Validating Save button is disabled on landing", async () => {
    expect(await workQueueUserPage.checkSaveButtonIsEnabled()).toBe(false);
  });
  it("Validating the Cancel button functionality", async () => {
    await workQueueUserPage.enterUserName(loginTestData.userName);
    await workQueueUserPage.clickOnSelectButton();
    await workQueueUserPage.enterAvailableWorkQueue(
      workQueueUserTestData.workQueueName
    );
    await workQueueUserPage.clickOnPlusIcon();
    await workQueueUserPage.enterSelectedWorkQueue(
      workQueueUserTestData.workQueueName
    );
    await workQueueUserPage.clickOnCancelButton();
    await workQueueUserPage.enterUserName(loginTestData.userName);
    await workQueueUserPage.clickOnSelectButton();
    await workQueueUserPage.enterAvailableWorkQueue(
      workQueueUserTestData.workQueueName
    );
    expect(await workQueueUserPage.checkAvailableWorkQueueIsDisplayed(workQueueUserTestData.workQueueName)).toBe(true
    );
  });
  it("Verify providing workqueue access to a user.", async () => {
    await browser.refresh();
    await workQueueUserPage.enterUserName(loginTestData.userName);
    await workQueueUserPage.clickOnSelectButton();
    await workQueueUserPage.enterAvailableWorkQueue(
      workQueueUserTestData.workQueueName
    );
    await workQueueUserPage.clickOnPlusIcon();
    await workQueueUserPage.enterSelectedWorkQueue(
      workQueueUserTestData.workQueueName
    );
    await workQueueUserPage.clickOnSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueUserTestData.successMessage
    );
  });
  it("Verify removing access from work queue user.", async () => {
    await browser.refresh();
    await workQueueUserPage.enterUserName(loginTestData.userName);
    await workQueueUserPage.clickOnSelectButton();
    await workQueueUserPage.enterSelectedWorkQueue(
      workQueueUserTestData.workQueueName
    );
    await workQueueUserPage.clickOnTrashIcon();
    await workQueueUserPage.clickOnSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueUserTestData.successMessage
    );
  });
});