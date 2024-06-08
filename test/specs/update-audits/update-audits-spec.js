import loginPage from "../../pageobjects/login/login-page";
import menuOptionsPage from "../../pageobjects/menuoptions-page";
import updateAuditPage, { getStep1HeaderDescription } from "../../pageobjects/update-audits/update/update-audits-step1-page";
import updateAuditsTestData from "../../../resources/update-audits/update-audits-test-data.json";
import commonUtility from "../../../utilities/common-utilities";


describe("Navigation to Update Audits", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });
  it("Verify navigation to Update Audits", async function () {
    await menuOptionsPage.clickUpdateAudits();
    await expect(browser).toHaveUrlContaining(updateAuditsTestData.UpdteAuditURL);
  });
});

describe("Validation of Update Audits Step-1 Functionality", () => {
  it("Verify Stepper Label Text in Step-1", async function () {
    expect(await commonUtility.getElementText(updateAuditPage.step1Label)).toEqual(updateAuditsTestData.step1LabelText);
    expect(await commonUtility.getElementText(updateAuditPage.step2Label)).toEqual(updateAuditsTestData.step2LabelText);
    expect(await commonUtility.getElementText(updateAuditPage.step3Label)).toEqual(updateAuditsTestData.step3LabelText);
    expect(await commonUtility.getElementText(updateAuditPage.step4Label)).toEqual(updateAuditsTestData.step4LabelText);
    expect(await commonUtility.getElementText(updateAuditPage.step5Label)).toEqual(updateAuditsTestData.step5LabelText);
  });
  it("Verify Header and Description text in Step-1", async function () {
    expect(await commonUtility.getElementText(updateAuditPage.step1Header)).toEqual(updateAuditsTestData.step1Header);
    expect(await commonUtility.getElementText(updateAuditPage.step1HeaderDescription)).toEqual(updateAuditsTestData.step1HeaderDescription);
  });
  it("Verify Dataset and Auditid fields are mandatory", async function () {
    await commonUtility.clickOnElement(updateAuditPage.searchButton);
    expect(await commonUtility.getElementText(updateAuditPage.datasetsInlineError)).toEqual(updateAuditsTestData.datasetInlineError);
    expect(await commonUtility.getElementText(updateAuditPage.auditTypeInlineError)).toEqual(updateAuditsTestData.auditTypeInlineError);
    await commonUtility.clickOnElement(updateAuditPage.clearButton);
  });
  it("Verify presence and default status of fields in Step-1", async function () {
    expect(await commonUtility.isElementDisplayed(updateAuditPage.dataSet)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.auditType)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.searchByParameterButton)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.auditStatusDropdown)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.lineOfBusiness)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.lineOfBusiness)).toBe(false);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.dateOfService)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.projectDropDown)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.patientFirstName)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.patientLastName)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.memberNumber)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.providerNameDropDown)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.providerNumber)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.providerTin)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.searchByAuditAndClaimButton)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.auditId)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.claimNumber)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.auditId)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.claimNumber)).toBe(false);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.searchButton)).toBe(true);
    expect(await commonUtility.isElementDisplayed(updateAuditPage.clearButton)).toBe(true);
  });
  it("Verify dependancy of Line of Business dropdown on Dataset dropdown", async function () {
    await commonUtility.clickOnElement(updateAuditPage.dataSet);
    await updateAuditPage.selectDropdownValue(updateAuditsTestData.dropdownValue);
    expect(await commonUtility.isElementEnabled(updateAuditPage.lineOfBusiness)).toBe(true);
  });
  it("Verify different buttons available for Audit Search ", async function () {
    expect(await commonUtility.getElementText(updateAuditPage.searchByParameterLabel)).toEqual(updateAuditsTestData.searchByParameterLabelText);
    expect(await commonUtility.getElementText(updateAuditPage.searchByAuditAndClaimLabel)).toEqual(updateAuditsTestData.searchByAuditAndClaimLabelText);
  });
  it("Verify default selection for Audit Search ", async function () {
    expect(await updateAuditPage.searchByParameterButton.isSelected()).toBe(false);
    expect(await updateAuditPage.searchByAuditAndClaimButton.isSelected()).toBe(true);
  });
  it("Verify default status of AuditID and Claim Number field ", async function () {
    expect(await commonUtility.isElementClickable(updateAuditPage.auditId)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.claimNumber)).toBe(false);
  });
  it("Verify functionality of Search by Audit ID button ", async function () {
    await commonUtility.clickOnElement(updateAuditPage.searchByAuditAndClaimButton);
    expect(await commonUtility.isElementClickable(updateAuditPage.auditId)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.claimNumber)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.auditStatusDropdown)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.lineOfBusiness)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.dateOfService)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.projectDropDown)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.patientFirstName)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.patientLastName)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.memberNumber)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.providerNameDropDown)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.providerTin)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.providerNumber)).toBe(false);
  });
  it("Verify functionality of Search for Audits using any of the parameters below button ", async function () {
    await commonUtility.clickOnElement(updateAuditPage.searchByParameterButton);
    expect(await commonUtility.isElementClickable(updateAuditPage.auditId)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.claimNumber)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.auditStatusDropdown)).toBe(false);
    expect(await commonUtility.isElementClickable(updateAuditPage.lineOfBusiness)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.dateOfService)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.projectDropDown)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.patientFirstName)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.patientLastName)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.memberNumber)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.providerNameDropDown)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.providerTin)).toBe(true);
    expect(await commonUtility.isElementClickable(updateAuditPage.providerNumber)).toBe(true);
  });
});

describe("Validation of End to End Functionality of Update Audits", () => {
  it('Verify user is redirected to Step-3 when user copy paste audit ids on Step-1 and click search', async function () {
    await commonUtility.clickOnElement(updateAuditPage.searchByAuditAndClaimButton);
    await commonUtility.clickOnElement(updateAuditPage.dataSet);
    await updateAuditPage.selectDropdownValue(1);
    await commonUtility.clickOnElement(updateAuditPage.auditType);
    await updateAuditPage.selectDropdownValue(15);
    await updateAuditPage.auditId.setValue(updateAuditsTestData.pasteAuditIds);
    await commonUtility.clickOnElement(updateAuditPage.searchButton);
    expect(await commonUtility.getElementText(updateAuditPage.step3Header)).toEqual(updateAuditsTestData.step3Header);
    expect(await commonUtility.getElementText(updateAuditPage.step3HeaderDescription)).toEqual(updateAuditsTestData.step3HeaderDescription);
  });
  it('Verify user is redirected to Step-1 on clicking back to edit button on Step-3 if user had copy pasted audit no', async function () {
    await commonUtility.clickOnElement(updateAuditPage.step3GoBackButton);
    expect(await commonUtility.getElementText(updateAuditPage.step1Header)).toEqual(updateAuditsTestData.step1Header);
    expect(await commonUtility.getElementText(updateAuditPage.step1HeaderDescription)).toEqual(updateAuditsTestData.step1HeaderDescription);
    await commonUtility.clickOnElement(updateAuditPage.clearButton);
  });
  it('Verify user is redirected to Step-2 when user selects mandatory fields with claim ids only', async function () {
    await commonUtility.clickOnElement(updateAuditPage.searchByParameterButton);
    await commonUtility.clickOnElement(updateAuditPage.dataSet);
    await updateAuditPage.selectDropdownValue(2);
    await commonUtility.clickOnElement(updateAuditPage.auditType);
    await updateAuditPage.selectDropdownValue(2);
    await updateAuditPage.claimNumber.setValue(updateAuditsTestData.copyClaims);
    await commonUtility.clickOnElement(updateAuditPage.searchButton);
    expect(await commonUtility.getElementText(updateAuditPage.step2Header)).toEqual(updateAuditsTestData.step2Header);
    expect(await commonUtility.getElementText(updateAuditPage.step2HeaderDescription)).toEqual(updateAuditsTestData.step2HeaderDescription);
    await commonUtility.clickOnElement(updateAuditPage.step2GoBackButton);
    await commonUtility.clickOnElement(updateAuditPage.clearButton);
  });
  it('Verify when user copy paste claim no. or audit ids from some where text box should only take valid values', async function () {
    await commonUtility.clickOnElement(updateAuditPage.searchByAuditAndClaimButton);
    await commonUtility.clickOnElement(updateAuditPage.dataSet);
    await updateAuditPage.selectDropdownValue(2);
    await commonUtility.clickOnElement(updateAuditPage.auditType);
    await updateAuditPage.selectDropdownValue(15);
    let data = updateAuditsTestData.copyPasteIds;
    await updateAuditPage.auditId.setValue(data);
    expect(await commonUtility.getElementText(updateAuditPage.auditId)).not.toEqual(data);
  });
  it('Verify Invalid Audit Ids on Step-5 in end to end process', async function () {
    await commonUtility.clickOnElement(updateAuditPage.searchButton);
    await commonUtility.clickOnElement(updateAuditPage.step3SelectAuditStatusDropdown);
    await updateAuditPage.selectDropdownValue(updateAuditsTestData.dropdownValue);
    await commonUtility.clickOnElement(updateAuditPage.step3SkipStep4Button)
    await updateAuditPage.waitUntilElementPreFillled();
    await commonUtility.clickOnElement(updateAuditPage.step5InternalCommentButton);
    await updateAuditPage.step5EnterNoteTextfield.setValue(updateAuditsTestData.auditComment);
    expect(await commonUtility.getElementText(updateAuditPage.step5InvalidAuditIdErrorMessage)).toEqual(updateAuditsTestData.step5InvalidauditIdInlineError);
    expect(await updateAuditPage.getStep5InvalidIds()).toEqual(updateAuditsTestData.step5InvalidauditIds);
  });
  it('Verify duplicate audit ids does not appear in valid id and invalid id section', async function () {
    let data = await commonUtility.getElementText(updateAuditPage.step5AuditIds);
    expect(await updateAuditPage.checkForDuplictes(data)).toBe(false);
  });
  it('Verify end to end process by updating the audits', async function () {
    await commonUtility.clickOnElement(updateAuditPage.step5Submit);
    expect(await commonUtility.getElementText(updateAuditPage.step5SuccessToaster)).toEqual(updateAuditsTestData.step5SuccessToaster);
  });
  it('Verify the Search button functionality', async function () {
    await menuOptionsPage.clickUpdateAudits();
    await commonUtility.clickOnElement(updateAuditPage.clearButton);
    await commonUtility.clickOnElement(updateAuditPage.dataSet);
    await updateAuditPage.selectDropdownValue(updateAuditsTestData.dropdownValue);
    await commonUtility.clickOnElement(updateAuditPage.auditType);
    await updateAuditPage.selectDropdownValue(updateAuditsTestData.dropdownValue);
    await commonUtility.clickOnElement(updateAuditPage.searchButton);
  });
});
describe("Validation of Update Audits Step-2 Functionality", () => {
  it("Verify Header and Description text in Step-2", async function () {
    expect(await commonUtility.getElementText(updateAuditPage.step2Header)).toEqual(updateAuditsTestData.step2Header);
    expect(await commonUtility.getElementText(updateAuditPage.step2HeaderDescription)).toEqual(updateAuditsTestData.step2HeaderDescription);
  });
  it("Verify the Next button functionality on Step-2 ", async function () {
    await commonUtility.clickOnElement(updateAuditPage.step2SelectAllAuditCheckBox);
    await commonUtility.clickOnElement(updateAuditPage.step2NextButton);
  });
});
describe("Validation of Update Audits Step-3 Functionality", () => {
  it("Verify Header and Description text in Step-3", async function () {
    expect(await commonUtility.getElementText(await updateAuditPage.step3Header)).toEqual(updateAuditsTestData.step3Header);
  })
  it("Verify the Next button functionality on Step-3", async function () {
    await commonUtility.clickOnElement(updateAuditPage.step3SelectAuditStatusDropdown);
    await updateAuditPage.selectDropdownValue(updateAuditsTestData.dropdownValue);
    await commonUtility.clickOnElement(updateAuditPage.step3NextButton);
  });
});
describe("Validation of Update Audits Step-4 Functionality", () => {
  it("Verify Header and Description text in Step-4", async function () {
    expect(await commonUtility.getElementText(updateAuditPage.step4Header)).toEqual(updateAuditsTestData.step4Header);
    expect(await commonUtility.getElementText(updateAuditPage.step4HeaderDescription)).toEqual(updateAuditsTestData.step4HeaderDescription);
  });
  it("Verify the Next button functionality on Step-4", async function () {
    await commonUtility.clickOnElement(updateAuditPage.step4NextButton);
  });
});

describe("Validation of Update Audits Step-5 Functionality", () => {
  it("Verify Header and Description text in Step-5", async function () {
    expect(await commonUtility.getElementText(updateAuditPage.step5Header)).toEqual(updateAuditsTestData.step5Header);
    expect(await commonUtility.getElementText(updateAuditPage.step5HeaderDescription)).toEqual(updateAuditsTestData.step5HeaderDescription);
  });
  it("Verify GoBackButton functionality on Step-2 to Step-5", async function () {
    await commonUtility.clickOnElement(updateAuditPage.step5GoBackButton);
    await commonUtility.clickOnElement(updateAuditPage.step4GoBackButton);
    await commonUtility.clickOnElement(updateAuditPage.step3GoBackButton);
    await commonUtility.clickOnElement(updateAuditPage.step2GoBackButton);
  });
});

describe("Validation of End to End Functionality of Update Audits in History Tab", () => {
  it('Verify end to end process by updating the audits and verifying in history', async function () {
    await updateAuditPage.clickUpdateAuditsHistory();
    expect(await commonUtility.getElementText(updateAuditPage.historyLatestIntenalComment)).toEqual(updateAuditsTestData.auditComment);
  });
});