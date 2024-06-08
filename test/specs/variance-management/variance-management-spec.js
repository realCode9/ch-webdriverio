import loginPage from "../../pageobjects/login/login-page";
import varianceManagementPage from "../../pageobjects/variance-management/variance-management-page";
import menuoptions from "../../pageobjects/menuoptions-page";
import utilities from "../../../utilities/common-utilities";
import varianceTestData from "../../../resources/variance-management/variance-management-test-data.json";

describe("Verify Variance Management Module Functionality", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
    await menuoptions.clickOnVarianceManagement();
  });

  it("Validate Fields and Buttons Present on Variance Management", async () => {
    expect(await varianceManagementPage.visibilityOfDataSetDropdown()).toBe(
      true
    );
    expect(
      await varianceManagementPage.visibilityOfLineOfBusinessDropdown()
    ).toBe(true);
    expect(
      await varianceManagementPage.visibilityOfOrganizationDropdown()
    ).toBe(true);
    expect(await varianceManagementPage.visibilityOfAuditTypeDropdown()).toBe(
      true
    );
    expect(await varianceManagementPage.visibilityOfAuditIdBox()).toBe(true);
    expect(await varianceManagementPage.visibilityOfAuditStatusDropdown()).toBe(
      true
    );
    expect(
      await varianceManagementPage.visibilityOfVarianceTypeDropdown()
    ).toBe(true);
    expect(await varianceManagementPage.visibilityOfMaximumVariance()).toBe(
      true
    );
    expect(await varianceManagementPage.visibilityOfDateOfAuditStatus()).toBe(
      true
    );
    expect(await varianceManagementPage.visibilityOfClaimNumber()).toBe(true);
  });
  it("Validate Tooltip present on Variance Management Page", async () => {
    expect(
      await varianceManagementPage.visibilityOfTooltipOnLineOfBusiness()
    ).toBe(varianceTestData.toolTipOnLineOfBusiness);
    expect(
      await varianceManagementPage.visibilityOfTooltipOnDateOfAuditStatus()
    ).toBe(varianceTestData.toolTipOnDateOfAuditStatusRequired);
  });
  it("Validate the disabled buttons present on Variance Management", async () => {
    expect(await varianceManagementPage.visibilityOfSearchButton()).toBe(true);
    expect(await varianceManagementPage.visibilityOfClearButton()).toBe(true);
    expect(await varianceManagementPage.visibilityOfSaveFilterButton()).toBe(
      true
    );
  });

  it("Validate search By Positive Variance", async () => {
    await varianceManagementPage.clickOnVarianceTypeDropdown();
    await utilities.selectDropDownOptions(varianceTestData.positiveVariance);
    await varianceManagementPage.clickOnSearchButton();
    await varianceManagementPage.scrollIntoSearchResultView();
    expect(
      await varianceManagementPage.checkPositiveVarianceSearchResult()
    ).toBe(true);
  });
  it("Validate search result with Multi Search Parameters", async () => {
    await varianceManagementPage.clickOnDataSet();
    await utilities.selectDropDownOptions(varianceTestData.dataSet);
    await varianceManagementPage.clickOnLineOfBusiness();
    await utilities.selectDropDownOptions(varianceTestData.lineOfBusiness);
    await varianceManagementPage.clickOnVarianceTypeDropdown();
    await utilities.selectDropDownOptions(varianceTestData.positiveVariance);
    await varianceManagementPage.clickOnSearchButton();
    await varianceManagementPage.scrollIntoSearchResultView();
    expect(
      await varianceManagementPage.checkPositiveVarianceSearchResult()
    ).toBe(true);
  });

  it("Validate Line Of Business is dependent On Dataset", async () => {
    await varianceManagementPage.clickOnClearButton();
    expect(await varianceManagementPage.visibilityOfNoSearchDataScreen()).toBe(
      true
    );

    await varianceManagementPage.clickOnDataSet();
    await utilities.selectDropDownOptions(varianceTestData.dataSet);
    expect(await varianceManagementPage.checkLineOfBusinessIsEnabled()).toBe(
      true
    );
  });
  it("Validate Date Of Audit Status is dependent On Audit Status", async () => {
    await varianceManagementPage.getValueFromAuditStatus();
    await utilities.selectDropDownOptions(varianceTestData.auditStatus);
    expect(await varianceManagementPage.checkDateOfAuditStatusIsEnabled()).toBe(
      true
    );
  });

  it("Validate Save Filter Button Functionality", async () => {
    await varianceManagementPage.clickOnVarianceTypeDropdown();
    await utilities.selectDropDownOptions(varianceTestData.negativeVariance);
    await varianceManagementPage.clickOnSearchButton();
    await varianceManagementPage.clickOnSaveFilterButton();
    await varianceManagementPage.enterFilterName(
      varianceTestData.addNameOnSaveFilter
    );
    await varianceManagementPage.clickOnSaveButton();
    expect(await utilities.visibilityOfSuccessToaster()).toBe(
      varianceTestData.saveFilterSuccessToaster
    );
  });

  it("Validate Editing a Saved Filter", async () => {
    await varianceManagementPage.clickOnSaveFilterDropdown();
    await varianceManagementPage.validateEditingFilter(
      varianceTestData.addNameOnSaveFilter
    );
    await varianceManagementPage.validateUpdatingFilterName(
      varianceTestData.updatedFilterName
    );

    expect(await utilities.visibilityOfSuccessToaster()).toBe(
      varianceTestData.saveFilterSuccessToaster
    );
    await utilities.waitForToasterMessageToDisappear();
  });

  it("Validate Deleting a Saved Filter", async () => {
    await varianceManagementPage.clickOnSaveFilterDropdown();
    await varianceManagementPage.validateDeletingFilter(
      varianceTestData.updatedFilterName
    );
    expect(
      await varianceManagementPage.validateDeletedFilterNotToBeVisible()
    ).toBe(false);
  });

  it("Validate Search By Negative Variance", async () => {
    await varianceManagementPage.clickOnVarianceTypeDropdown();
    await utilities.selectDropDownOptions(varianceTestData.negativeVariance);
    await varianceManagementPage.clickOnSearchButton();
    expect(
      await varianceManagementPage.checkNegativeVarianceSearchResult()
    ).toBe(true);
    await varianceManagementPage.scrollIntoSearchResultView();
  });

  it("Validate the Balance Out Button Functionality when No Audits Selected", async () => {
    await varianceManagementPage.clickOnBalanceOutButton();
    expect(await varianceManagementPage.getErrorToastMessage()).toBe(
      varianceTestData.balanceOutErrorMessage
    );
    await varianceManagementPage.waitForToasterMessageToDisappear();
  });

  it("Validate the Balance Out Button Modal After Audit Selection", async () => {
    await varianceManagementPage.clickOnAuditType();
    await utilities.selectDropDownOptions(varianceTestData.auditType);
    await varianceManagementPage.clickOnVarianceTypeDropdown();
    await utilities.selectDropDownOptions(varianceTestData.positiveVariance);
    await varianceManagementPage.clickOnSearchButton();
    await varianceManagementPage.selectAllAudits();
    await varianceManagementPage.clickOnBalanceOutButton();
    expect(await varianceManagementPage.checkBalanceOutModal()).toBe(true);
  });

  it("Validate the Fields Present In the Balance Out Button Modal", async () => {
    expect(await varianceManagementPage.visibilityOfHeader()).toBe(true);
    expect(
      await varianceManagementPage.visibilityOfAdjustmentTypeDropdown()
    ).toBe(true);
    expect(
      await varianceManagementPage.visibilityOfTransactionTypeDropdown()
    ).toBe(true);
    expect(
      await varianceManagementPage.visibilityOftransitionToAuditStatus()
    ).toBe(true);
    expect(await varianceManagementPage.visibilityOfAuditTypeTable()).toBe(
      true
    );
    expect(
      await varianceManagementPage.visibilityOfAuditStatusDropdownTable()
    ).toBe(true);
    expect(await varianceManagementPage.visibilityOfInternalCommentBox()).toBe(
      true
    );
    expect(await varianceManagementPage.visibilityOfUpdateButton()).toBe(true);
    expect(await varianceManagementPage.visibilityOfCancelButton()).toBe(true);
    await varianceManagementPage.clickOnCancelButton();
  });

  it("Validate the Inline Error Message When User Click On Update Button Without Adding The Mandatory Fields", async () => {
    await varianceManagementPage.clickOnBalanceOutButton();
    await varianceManagementPage.clickOnUpdateButton();
    expect(await varianceManagementPage.getAdjustmentTypeInlineError()).toBe(
      varianceTestData.inlineErrorOfAdjustmentType
    );
    expect(await varianceManagementPage.getTransitionToAuditStatus()).toBe(
      varianceTestData.inlineErrorOfAuditStatus
    );
    expect(await varianceManagementPage.getInternalCommentInlineError()).toBe(
      varianceTestData.inlineErrorOfInternalComments
    );
  });
});
