import loginPage from "../../pageobjects/login/login-page";
import leadsTestData from "../../../resources/case-management/leads-test-data.json";
import loginTestData from "../../../resources/login/login-test-data.json";
import menuoptionsPage from "../../pageobjects/menuoptions-page";
import leadsPage from "../../pageobjects/case-management/leads-page";
describe("Test Cases for Case Management - Leads Image Tab", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
    await menuoptionsPage.clickOnFWA();
    await menuoptionsPage.clickOnLeads();
  });
  it("creating a new lead and verifying the success message", async function () {
    await leadsPage.validateNewLeadTab();
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadAllegationCategoryDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadDatasetDropdown);
    await leadsPage.selectDatasetDropdownValue();
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadLOBDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadSourceDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadStatusDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadPayerStatusDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.enterLastNameDetail();
    await leadsPage.enterNPIDetail();
    await leadsPage.clickDropdownOnNewLeadTab( leadsPage.newLeadSpecialityTypeDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickSubmitButtonOnNewLeadTab();
    expect(await leadsPage.validateSaveFilterSuccessMessage()).toBe(true);
  });
  it("Clicking on Image tab and Validate Image Tab Header", async function () {
    await leadsPage.clickImageTab();
    await leadsPage.waitForToasterMessageToDisappear(leadsPage.filterSaveSuccessMessage);
    expect(await leadsPage.isVisibleImageTabHeader()).toEqual(leadsTestData.imageHeader);
  });
  it("Validate No image found label", async function () {
    expect(await leadsPage.isVisibleNoImageText()).toBe(true);
  });
  it("Validate error message is displayed on uploading file with wrong extension", async function () {
    expect(await leadsPage.verifyMessageOnWrongFileUpload()).toBe(true);
    await leadsPage.clickClearButtonInImageTab();
  });
  it("Validate uploading an Image", async function () {
    expect(await leadsPage.verifyFileUpload()).toEqual(leadsTestData.tooltip);
  });
  it("Validate Choose a file Button", async function () {
    expect(await leadsPage.isVisibleChooseFileButton()).toBe(true);
  });
  it("Validate download functionality", async function () {
    expect(await leadsPage.verifyFileDownload()).toBe(true);
  });
  it("Validate file name in the preview panel of image", async function () {
    expect(await leadsPage.isVisibleImagePreviewPanel()).toBe(true);
    expect(await leadsPage.getFileNameInPreviewPanel()).toEqual(leadsTestData.fileName);
    await leadsPage.clickCloseIconInPreviewPanel();
  });
  it("Validate history tab and entry in History table", async function () {
    await leadsPage.clickHistoryTab();
    expect(await leadsPage.verifyFieldsInHistory(leadsPage.eventValue,leadsTestData.eventValue)).toBe(true);
    expect(await leadsPage.verifyFieldsInHistory(leadsPage.userValue,loginTestData.userName)).toBe(true);
  });
  it("Validate back button", async function () {
    await leadsPage.clickImageViewTab();
    expect(await leadsPage.verifyBackButton()).toBe(true);
  });
  it("Validate delete funcionality by deleting an image", async function () {
    expect(await leadsPage.verifyDeleteMessage()).toBe(true);
  });
  it('Validate  deleting Lead which was created', async function ()
  {
    await leadsPage.clickSummaryTab();
    await leadsPage.deleteLeadCreated();
    expect(await leadsPage.validateDeleteSuccessMessageForMemberTypeLead()).toBe(true);
  });
});
