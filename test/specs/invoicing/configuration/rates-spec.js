import loginPage from "../../../pageobjects/login/login-page";
import menuoptionsPage from "../../../pageobjects/menuoptions-page";
import ratesTestData from "../../../../resources/invoicing/configuration/rates-test-data.json";
import ratesPage from "../../../pageobjects/invoicing/configuration/rates-page";
import commonUtilities from "../../../../utilities/common-utilities";

describe("Test Cases for Rates Configurations", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });

  it('Validate navigation to Rates', async function () {
    try {
      await commonUtilities.clickOnElement(menuoptionsPage.invoicing);
      await commonUtilities.clickOnElement(menuoptionsPage.invoicingConfiguration);
      await commonUtilities.clickOnElement(menuoptionsPage.rates);
      expect(await commonUtilities.getElementText(ratesPage.ratesHeaderText)).toEqual(ratesTestData.ratesConfigurationHeaderText);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it('Validate the tabs present on Rates Configuration screen', async function () {
    try {
      expect(await commonUtilities.isElementDisplayed(ratesPage.configurationTab)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.historyTab)).toBeTrue;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it('Validate the fields and buttons present on Configuration Tab', async function () {
    try {
      expect(await commonUtilities.isElementDisplayed(ratesPage.homePlansField)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.organizationField)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.auditTypeField)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.projectCodeField)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.feeRateField)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.effectiveDateField)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.terminationDateField)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.prepayRadioButton)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.postpayRadioButton)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.addButton)).toBeTrue;
      expect(await commonUtilities.isElementDisplayed(ratesPage.clearButton)).toBeTrue;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it("Validating error message when Add button is clicked without adding data in any mandatory field", async () => {
    try {
      await commonUtilities.clickOnElement(ratesPage.addButton);
      expect(await commonUtilities.getElementText(ratesPage.homePlansFieldInlineError)).toEqual(ratesTestData.errorMessageHomePlansField);
      expect(await commonUtilities.getElementText(ratesPage.organizationFieldInlineError)).toEqual(ratesTestData.errorMessageOrganizationField);
      expect(await commonUtilities.getElementText(ratesPage.auditTypeFieldInlineError)).toEqual(ratesTestData.errorMessageAuditTypeField);
      expect(await commonUtilities.getElementText(ratesPage.feeRateFieldInlineError)).toEqual(ratesTestData.errorMessageFeeRateField);
      expect(await commonUtilities.getElementText(ratesPage.paymentTimingFieldInlineError)).toEqual(ratesTestData.errorMessagePaymentTimingField);
      expect(await commonUtilities.getElementText(ratesPage.effectiveDateFieldInlineError)).toEqual(ratesTestData.errorMessageEffectiveDateField);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it("Validating Clear button is disabled by default", async () => {
    try {
      expect(await commonUtilities.isElementEnabled(ratesPage.clearButton)).toBeFalse;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it("Validating Clear button is enabled after entering data in any of the field", async () => {
    try {
      await commonUtilities.clickOnElement(ratesPage.prepayRadioButton);
      expect(await commonUtilities.isElementEnabled(ratesPage.clearButton)).toBeTrue;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it('Validating adding new Rate', async () => {
    try {
      await commonUtilities.enterValueInElement(ratesPage.feeRateField, ratesTestData.feeRateFieldValue);
      await commonUtilities.enterValueInElement(ratesPage.effectiveDateField, ratesTestData.effectiveDateFieldValue);
      await commonUtilities.clickOnElement(ratesPage.auditTypeField);
      await commonUtilities.selectDropDownOptions(ratesTestData.auditTypeFieldValue);
      await commonUtilities.clickOnElement(ratesPage.homePlansField);
      await commonUtilities.selectDropDownOptions(ratesTestData.homePlansFieldValue);
      await commonUtilities.clickOnElement(ratesPage.organizationField);
      await commonUtilities.selectDropDownOptions(ratesTestData.organizationFieldValue);
      await commonUtilities.clickOnElement(ratesPage.addButton);
      expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(ratesTestData.addSuccessToaster);
      await commonUtilities.waitForToasterMessageToDisappear();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it('Validating duplicate Rate error', async () => {
    try {
      await commonUtilities.clickOnElement(ratesPage.prepayRadioButton);
      await commonUtilities.enterValueInElement(ratesPage.feeRateField, ratesTestData.feeRateFieldValue);
      await commonUtilities.enterValueInElement(ratesPage.effectiveDateField, ratesTestData.effectiveDateFieldValue);
      await commonUtilities.clickOnElement(ratesPage.auditTypeField);
      await commonUtilities.selectDropDownOptions(ratesTestData.auditTypeFieldValue);
      await commonUtilities.clickOnElement(ratesPage.homePlansField);
      await commonUtilities.selectDropDownOptions(ratesTestData.homePlansFieldValue);
      await commonUtilities.clickOnElement(ratesPage.organizationField);
      await commonUtilities.selectDropDownOptions(ratesTestData.organizationFieldValue);
      await commonUtilities.clickOnElement(ratesPage.addButton);
      let toaster = await commonUtilities.visibilityOfSuccessToaster();
      let duplicateToasterText = toaster.substring(0, 57);
      expect(duplicateToasterText).toContain(ratesTestData.duplicateErrorToaster);
      await commonUtilities.clickOnElement(ratesPage.errorToaster);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it('Validating Clear button functionality', async () => {
    try {
      await commonUtilities.clickOnElement(ratesPage.clearButton);
      expect(await commonUtilities.getElementText(ratesPage.homePlansField)).toEqual(ratesTestData.homePlansPlaceholderText);
      expect(await commonUtilities.getElementText(ratesPage.organizationField)).toEqual(ratesTestData.organizationPlaceholderText);
      expect(await commonUtilities.getElementText(ratesPage.auditTypeField)).toEqual(ratesTestData.auditTypePlaceholderText);
      expect(await commonUtilities.getElementText(ratesPage.feeRateField)).toEqual(ratesTestData.feeRatePlaceholderText);
      expect(await commonUtilities.getElementText(ratesPage.effectiveDateField)).toEqual(ratesTestData.effectiveDatePlaceholderText);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  it('Verify columns on Configuration Tab', async () => {
    try {
      expect(await commonUtilities.getMultiElementTextOneByOne(ratesPage.configurationTabColumnHeaders)).toEqual(ratesTestData.configurationTabColumnHeaders);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  });
  describe("Testing Column Filter functionality on Rate Configuration screen", () => {
    it("Verify Column Filter section along with the fields and buttons present on it after clicking on Column Filter Icon", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.idColumnFilter);
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSection)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSearchBox)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterCancelButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.idColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSection)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSearchBox)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterCancelButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.orgColumnFilter);
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSection)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSearchBox)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterCancelButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.orgColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.auditTypeColumnFilter);
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSection)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSearchBox)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterCancelButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.auditTypeColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.projectCodeColumnFilter);
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSection)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSearchBox)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterCancelButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterClearButton)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Apply and Clear buttons are disabled before selecting value in Column Filter", async () => {
      try {
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterApplyButton)).toBeFalse;
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterClearButton)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.projectCodeColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.auditTypeColumnFilter);
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterApplyButton)).toBeFalse;
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterClearButton)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.auditTypeColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.orgColumnFilter);
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterApplyButton)).toBeFalse;
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterClearButton)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.orgColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterApplyButton)).toBeFalse;
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterClearButton)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.idColumnFilter);
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterApplyButton)).toBeFalse;
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterClearButton)).toBeFalse;

      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Apply and Clear buttons are enabled after selecting a value in Column Filter", async () => {
      try {
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.idColumnFilterValue);
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.idColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.homePlansFieldValue);
        await commonUtilities.selectValueInColumnFilter(ratesPage.columnFilterOptions, ratesPage.columnFilterCheckBox, ratesTestData.homePlansFieldValue);
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.orgColumnFilter);
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.orgColumnFilterValue);
        await commonUtilities.selectValueInColumnFilter(ratesPage.columnFilterOptions, ratesPage.columnFilterCheckBox, ratesTestData.orgColumnFilterValue);
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.orgColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.auditTypeColumnFilter);
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.auditTypeFieldValue);
        await commonUtilities.selectValueInColumnFilter(ratesPage.columnFilterOptions, ratesPage.columnFilterCheckBox, ratesTestData.auditTypeFieldValue);
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterClearButton)).toBeTrue;
        await commonUtilities.clickOnElement(ratesPage.auditTypeColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.projectCodeColumnFilter);
        await commonUtilities.selectValueInColumnFilter(ratesPage.columnFilterOptions, ratesPage.columnFilterCheckBox, ratesTestData.projectColumnFilterValue);
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.projectCodeColumnFilterValue);
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterClearButton)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Cancel button functionality on Column Filter", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.columnFilterCancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.columnFilterSection)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.auditTypeColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.columnFilterCancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.columnFilterSection)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.orgColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.columnFilterCancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.columnFilterSection)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.columnFilterCancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.columnFilterSection)).toBeFalse;
        await commonUtilities.clickOnElement(ratesPage.idColumnFilter);
        await commonUtilities.clickOnElement(ratesPage.columnFilterCancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.columnFilterSection)).toBeFalse;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Apply button functionality on Column Filter", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.homePlansFieldValue);
        await commonUtilities.selectValueInColumnFilter(ratesPage.columnFilterOptions, ratesPage.columnFilterCheckBox, ratesTestData.homePlansFieldValue);
        await commonUtilities.clickOnElement(ratesPage.columnFilterApplyButton);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        expect(await commonUtilities.isElementDisplayed(ratesPage.appliedColumnFilterIcon)).toBeTrue;
        expect(await commonUtilities.getElementText(ratesPage.homePlan)).toContain(ratesTestData.homePlansFieldValue);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Clear button functionality on Column Filter", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.appliedColumnFilterIcon);
        await commonUtilities.clickOnElement(ratesPage.columnFilterClearButton);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        expect(await commonUtilities.isElementExisting(ratesPage.appliedColumnFilterIcon)).toBeFalse;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
  });
  describe("Testing Page Size and Pagination functionality on Rates Configuration screen", function () {
    it('Verify page size is displayed on Rates Configuration screen', async () => {
      try {
        expect(await commonUtilities.isElementDisplayed(ratesPage.pageSizeInput)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating default value in Page Size", async () => {
      try {
        expect(await commonUtilities.getElementText(ratesPage.pageSizeInput)).toBeLessThanOrEqual(ratesTestData.defaultPageSize);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating Page Size functionality", async () => {
      try {
        await commonUtilities.enterValueInPageSize(ratesPage.pageSizeInput, ratesTestData.pageSize);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        expect(await commonUtilities.getElementsCount(ratesPage.totalSearchResultRows)).toBeLessThanOrEqual(ratesTestData.pageSize);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating Pagination is displayed on Rates Configuration", async () => {
      try {
        expect(await commonUtilities.isElementDisplayed(ratesPage.pagination)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating Pagination functionality", async () => {
      try {
        expect(await commonUtilities.verifyPagination(ratesPage.totalSearchResultRows)).toBeLessThanOrEqual(ratesTestData.pageSize);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
  });
  describe("Testing Edit functionality on Rates Configuration screen", function () {
    it('Verify Edit panel on Rates Configuration screen', async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.homePlanColumnFilter);
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.homePlansFieldValue);
        await commonUtilities.selectValueInColumnFilter(ratesPage.columnFilterOptions, ratesPage.columnFilterCheckBox, ratesTestData.homePlansFieldValue);
        await commonUtilities.clickOnElement(ratesPage.columnFilterApplyButton);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        await commonUtilities.clickOnElement(ratesPage.actionIcon);
        await commonUtilities.clickOnElement(ratesPage.edit);
        let editText = await commonUtilities.getElementText(ratesPage.editHeaderText);
        let editPanelText = editText.substring(0, 6);
        expect(editPanelText).toContain(ratesTestData.editHeaderText);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it('Verify the fields and buttons on edit panel', async () => {
      try {
        expect(await commonUtilities.isElementDisplayed(ratesPage.homePlansField)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.organizationField)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.auditTypeField)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.projectCodeField)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.feeRateField)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.effectiveDateField)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.terminationDateField)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.prepayRadioButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.postpayRadioButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.updateButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.cancelButton)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it('Verify cancel button functionality on edit panel', async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.cancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.editHeaderText)).toBeFalse;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it('Verify update button functionality on edit panel', async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.actionIcon);
        await commonUtilities.clickOnElement(ratesPage.edit);
        await commonUtilities.enterValueInElement(ratesPage.feeRateField, ratesTestData.updatedFeeRateFieldValue);
        await commonUtilities.clickOnElement(ratesPage.updateButton);
        expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(ratesTestData.editSuccessToaster);
        await commonUtilities.waitForToasterMessageToDisappear();
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
  });
  describe("Testing Delete functionality on Rates Configuration screen", function () {
    it('Verify clicking on delete action, confirmation modal is displayed', async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.actionIcon);
        await commonUtilities.clickOnElement(ratesPage.delete);
        expect(await commonUtilities.isElementDisplayed(ratesPage.confirmationModal)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify delete confirmation modal", async () => {
      try {
        expect(await commonUtilities.getElementText(ratesPage.confirmationModalHeaderText)).toContain(ratesTestData.confirmationModalHeaderText);
        expect(await commonUtilities.isElementDisplayed(ratesPage.confirmationModalYesButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.confirmationModalCancelButton)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify clicking on Cancel button will close the confirmation modal", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.confirmationModalCancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.confirmationModal)).toBeFalse;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Yes button will close the confirmation modal and Rate is deleted", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.actionIcon);
        await commonUtilities.clickOnElement(ratesPage.delete);
        await commonUtilities.clickOnElement(ratesPage.confirmationModalYesButton);
        expect(await commonUtilities.isElementExisting(ratesPage.confirmationModal)).toBeFalse;
        expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(ratesTestData.deleteSuccessToaster);
        await commonUtilities.waitForToasterMessageToDisappear();
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
  });
  describe("Testing History functionality on Rate Configuration screen", function () {
    it('Verify navigate to History Tab', async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.historyTab);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        expect(await commonUtilities.isElementDisplayed(ratesPage.historyTable)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it('Verify columns on History Tab', async () => {
      try {
        expect(await commonUtilities.getMultiElementTextOneByOne(ratesPage.historyColumnHeaders)).toEqual(ratesTestData.historyTabColumnHeaders);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it('Verify History functionality', async () => {
      try {
        let dateText = await commonUtilities.getElementText(ratesPage.historyDate);
        let historyDate = dateText.substring(0, 8);
        let currentDate = await ratesPage.getTodayDate();
        expect(historyDate).toEqual(currentDate);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
  });
  describe("Testing Page Size and Pagination functionality on History Tab", function () {
    it('Verify page size is displayed on History Tab', async () => {
      try {
        expect(await commonUtilities.isElementDisplayed(ratesPage.pageSizeInput)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating default value in Page Size", async () => {
      try {
        expect(await commonUtilities.getElementText(ratesPage.pageSizeInput)).toBeLessThanOrEqual(ratesTestData.defaultPageSize);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating Page Size functionality", async () => {
      try {
        await commonUtilities.enterValueInPageSize(ratesPage.pageSizeInput, ratesTestData.pageSize);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        expect(await commonUtilities.getElementsCount(ratesPage.totalSearchResultRows)).toBeLessThanOrEqual(ratesTestData.pageSize);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating Pagination is displayed on History Tab", async () => {
      try {
        expect(await commonUtilities.isElementDisplayed(ratesPage.pagination)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Validating Pagination functionality", async () => {
      try {
        expect(await commonUtilities.verifyPagination(ratesPage.totalSearchResultRows)).toBeLessThanOrEqual(ratesTestData.pageSize);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
  });
  describe("Testing Column Filter functionality on History Tab List screen", () => {
    it("Verify Column Filter section along with the fields and buttons present on it after clicking on Column Filter Icon", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.rateIDColumnFilter);
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSection)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterSearchBox)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterCancelButton)).toBeTrue;
        expect(await commonUtilities.isElementDisplayed(ratesPage.columnFilterClearButton)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Apply and Clear buttons are disabled before selecting value in Column Filter", async () => {
      try {
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterApplyButton)).toBeFalse;
        expect(await commonUtilities.checkElementIsClickable(ratesPage.columnFilterClearButton)).toBeFalse;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Apply and Clear buttons are enabled after selecting a value in Column Filter", async () => {
      try {
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.rateIDColumnFilterValue);
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterApplyButton)).toBeTrue;
        expect(await commonUtilities.isElementEnabled(ratesPage.columnFilterClearButton)).toBeTrue;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Cancel button functionality on Column Filter", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.columnFilterCancelButton);
        expect(await commonUtilities.isElementExisting(ratesPage.columnFilterSection)).toBeFalse;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Apply button functionality on Column Filter", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.rateIDColumnFilter);
        await commonUtilities.enterValueInElement(ratesPage.columnFilterSearchBox, ratesTestData.rateIDColumnFilterValue);
        await commonUtilities.clickOnElement(ratesPage.columnFilterApplyButton);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        expect(await commonUtilities.isElementDisplayed(ratesPage.appliedColumnFilterIcon)).toBeTrue;
        expect(await commonUtilities.getElementText(ratesPage.rateID)).toContain(ratesTestData.rateIDColumnFilterValue);
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
    it("Verify Clear button functionality on Column Filter", async () => {
      try {
        await commonUtilities.clickOnElement(ratesPage.appliedColumnFilterIcon);
        await commonUtilities.clickOnElement(ratesPage.columnFilterClearButton);
        await commonUtilities.waitUntilLoaderFinishedLoading(ratesPage.loader);
        expect(await commonUtilities.isElementExisting(ratesPage.appliedColumnFilterIcon)).toBeFalse;
      } catch (error) {
        fail("Failed due to exception " + error);
      }
    });
  });
 });