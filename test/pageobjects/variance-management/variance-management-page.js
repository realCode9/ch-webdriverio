import Page from "../page";

class VarianceManagement extends Page {
  get varianceManagement() {
    return $("//span[@class='default-color h6 title ng-star-inserted']");
  }
  get searchTab() {
    return $("//div[@class='ng-star-inserted']");
  }
  get dataSetDropdown() {
    return $("//ng-select[@id='dataset']");
  }
  get lineOfBusinessDropdown() {
    return $("//ng-select[@id='lob']");
  }
  get organizationDropdown() {
    return $("//ng-select[@id='organization']");
  }
  get auditTypeDropdown() {
    return $("//ng-select[@id='app-code-list-dropdown-Service-Lines']");
  }
  get auditIdBox() {
    return $("(//input[@data-cy='search-panel-audit-id-input-box'])[1]");
  }
  get auditStatusDropdown() {
    return $("//ng-select[@id='status']");
  }
  get varianceTypeDropdown() {
    return $("//ng-select[@id='app-custom-dropdown-Select-Variance-Type']");
  }
  get maximumVariance() {
    return $(
      "//input[@class='form-control ng-untouched ng-pristine ng-valid ui-inputtext ui-corner-all ui-state-default ui-widget']"
    );
  }
  get dateOfAuditStatus() {
    return $("//input[@id='app-date-range-input-Date-of-Audit-Status']");
  }
  get claimNumber() {
    return $("//input[@id='Enter-multiple-claim-#-separated-by-comma']");
  }
  get searchButton() {
    return $("(//span[text()='Search'])[1]");
  }
  get clearButton() {
    return $("(//button[@id='notSubmitButton'])[2]");
  }
  get saveFilterButton() {
    return $("//button[@id= 'app-save-filter-button-save-filter']");
  }
  get addNameText() {
    return $("//input[@id='app-save-filter-button-add-name']");
  }
  get saveButton() {
    return $("//button[@id='app-save-filter-button-save']");
  }
  get filterSaveSuccessMessage() {
    return $("//div[@class='snotifyToast__inner ng-star-inserted']");
  }
  get saveFilterDropdown() {
    return $("//button[@id='app-filters-dropdown-saved-filters']");
  }
  get selectFilter() {
    return $("//div[@id='app-filters-dropdown-filter-name-0']");
  }
  get editFilterIcon() {
    return $("//div[@class='edit icon']");
  }
  get updateFilterName() {
    return $("(//input[@type='text'])[1]");
  }
  get updatedFilterSaveButton() {
    return $("(//app-common-button[@id='app-search-bottom-panel-save'])[1]");
  }
  get deleteIcon() {
    return $("//div[@id='app-filters-dropdown-delete-icon-0']");
  }
  get yesButton() {
    return $("//button[@id='app-filters-dropdown-yes-0']");
  }
  get deletedFilter() {
    return $("//div[@id='app-filters-dropdown-filter-name-0']");
  }
  get deletedSelectedFilter() {
    return $$("//div[@class='filter-name']");
  }
  get cancelButton() {
    return $("//button[@id= 'app-save-filter-button-cancel']");
  }
  get deleteIconOnSavedFilters() {
    return $("//div[@id= 'app-filters-dropdown-delete-icon-0']");
  }
  get toolTipOnDataSetRequired() {
    return $("//app-info-tooltip[@tooltip='Dataset Required']");
  }
  get tooltipOnDateOfService() {
    return $("//app-info-tooltip[@tooltip='Audit Status Required']");
  }
  get auditAmountOfFirstSearchResult() {
    return $("(//td[6])[1]");
  }
  get recoveredAmountOfFirstSearch() {
    return $("(//td[7])[1]");
  }
  get balanceOutButton() {
    return $("//span[@class='text']");
  }
  get errorToasterOnBalanceOutNoAuditChecked() {
    return $("//div[@class ='snotifyToast__inner ng-star-inserted']");
  }
  get selectAllCheckBox() {
    return $("//th[@id='variance-list-header']");
  }
  get balanceOutHeader() {
    return $("//app-page-header[@text='Balance Out']");
  }
  get adjustmentTypeField() {
    return $("(//div[@class='dark-label'])[1]");
  }
  get selectAdjustmentTypeField() {
    return $("//ng-select[@id='app-custom-dropdown-Select-Adjustment-Type']");
  }
  get transactionTypeField() {
    return $("(//div[@class='dark-label'])[2]");
  }
  get selectTransactionTypeField() {
    return $("//ng-select[@id='app-code-list-dropdown-Transactions']");
  }
  get transitionToAuditStatusField() {
    return $("(//div[@class='dark-label'])[3]");
  }
  get auditTypeTableHeader() {
    return $("(//th[@id='status-header'])[1]");
  }
  get auditStatusTableHeader() {
    return $("(//th[@id='status-header'])[2]");
  }
  get internalCommentField() {
    return $("(//div[@class='dark-label'])[4]");
  }
  get updateButton() {
    return $("//span[text()='Update']");
  }
  get cancelButton() {
    return $(
      "//button[@class='secondary-default ui-button ui-widget ui-state-default ui-corner-all ui-button-text-empty']"
    );
  }
  get adjustmentTypeInlineError() {
    return $("(//div[@class='semi-label error'])[1]");
  }
  get transitionToAuditStatus() {
    return $("//div[@class='semi-label error-label']");
  }
  get internalCommentInlineError() {
    return $("(//div[@class='semi-label error'])[2]");
  }
  get createATransactionField() {
    return $("//span[contains(text(),'Create a Transaction')]");
  }
  get updateAuditAmount() {
    return $("//span[contains(text(),'Update Audit Amount')]");
  }
  get selectTransactionTypeDropdown() {
    return $("//ng-select[@id='app-code-list-dropdown-Transactions']");
  }
  get updateAuditAmountTransactionType() {
    return $(
      "//ng-select[@id='app-code-list-dropdown-Transactions']/child::div/div/div/span[2]"
    );
  }
  get auditTypeTable() {
    return $$("//td[9]");
  }
  get auditTypeOnBalanceOutModal() {
    return $("//span[@class='normal-label']");
  }
  get noSearchScreen() {
    return $("//div[@class='msg']");
  }

  // Functions of all variance management actions

  async visibilityOfNoSearchDataScreen() {
    try {
      await this.noSearchScreen.scrollIntoView();
      return await this.noSearchScreen.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async visibilityOfDataSetDropdown() {
    try {
      return await this.dataSetDropdown.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfLineOfBusinessDropdown() {
    try {
      return await this.lineOfBusinessDropdown.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfOrganizationDropdown() {
    try {
      return await this.organizationDropdown.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAuditTypeDropdown() {
    try {
      return await this.auditTypeDropdown.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAuditIdBox() {
    try {
      return await this.auditIdBox.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAuditStatusDropdown() {
    try {
      return await this.auditStatusDropdown.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfVarianceTypeDropdown() {
    try {
      return await this.varianceTypeDropdown.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfMaximumVariance() {
    try {
      return await this.maximumVariance.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfDateOfAuditStatus() {
    try {
      return await this.dateOfAuditStatus.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfClaimNumber() {
    try {
      return await this.claimNumber.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfTooltipOnLineOfBusiness() {
    try {
      await this.toolTipOnDataSetRequired.moveTo();
      let toolTipText = await this.toolTipOnDataSetRequired.getAttribute(
        "tooltip"
      );
      return toolTipText;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfTooltipOnDateOfAuditStatus() {
    try {
      await this.tooltipOnDateOfService.moveTo();
      let dosToolTipText = await this.tooltipOnDateOfService.getAttribute(
        "tooltip"
      );
      return dosToolTipText;
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }

  async visibilityOfSearchButton() {
    try {
      return await this.searchButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfClearButton() {
    try {
      return await this.clearButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfSaveFilterButton() {
    try {
      return await this.saveFilterButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnVarianceTypeDropdown() {
    try {
      await this.varianceTypeDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSearchButton() {
    try {
      await this.searchButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkPositiveVarianceSearchResult() {
    try {
      const auditAmount = await this.auditAmountOfFirstSearchResult.getText();
      const auditAmountWithoutDollar = auditAmount.split("$").pop(1);
      const numericAuditAmount = parseFloat(auditAmountWithoutDollar);
      const recoveredAmount = await this.recoveredAmountOfFirstSearch.getText();
      const recoveredAmountWithoutDollar = recoveredAmount.split("$").pop(1);
      const numericRecoveredAmount = parseFloat(recoveredAmountWithoutDollar);
      if (numericAuditAmount > numericRecoveredAmount) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async scrollIntoSearchResultView() {
    try {
      await this.auditAmountOfFirstSearchResult.scrollIntoView();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnDataSet() {
    try {
      await this.dataSetDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkLineOfBusinessIsEnabled() {
    try {
      await this.lineOfBusinessDropdown.scrollIntoView();
      return await this.lineOfBusinessDropdown.isEnabled();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnLineOfBusiness() {
    try {
      return await this.lineOfBusinessDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnVarianceTypeDropdown() {
    try {
      await this.varianceTypeDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSearchButton() {
    try {
      await this.searchButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnClearButton() {
    try {
      await this.clearButton.waitForDisplayed();
      await this.clearButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getValueFromDataSet() {
    try {
      await this.dataSetDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkDateOfAuditStatusIsEnabled() {
    try {
      return await this.dateOfAuditStatus.isEnabled();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getValueFromAuditStatus() {
    try {
      await this.auditStatusDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnSortField() {
    try {
      await this.sortField.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSaveFilterButton() {
    try {
      await this.saveFilterButton.waitForClickable();
      await this.saveFilterButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterFilterName(filterName) {
    try {
      await this.addNameText.setValue(filterName);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSaveButton() {
    try {
      await this.saveButton.waitForClickable();
      await this.saveButton.click();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }

  async clickOnSaveFilterDropdown() {
    try {
      await this.saveFilterDropdown.waitForClickable();
      await this.saveFilterDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateEditingFilter(filterName) {
    try {
      await $("//div[text()='" + filterName + "']").moveTo();
      await this.editFilterIcon.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateUpdatingFilterName(updatedFilterName) {
    try {
      await this.updateFilterName.waitForClickable();
      await this.updateFilterName.setValue(updatedFilterName);
      await this.updatedFilterSaveButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateDeletingFilter(updatedFilterName) {
    try {
      await $("//div[text()='" + updatedFilterName + "']").moveTo();
      await this.deleteIcon.click();
      await this.yesButton.waitForClickable();
      await this.yesButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateDeletedFilterNotToBeVisible() {
    try {
      await this.saveFilterDropdown.waitForClickable();
      await this.saveFilterDropdown.click();
      return await this.deletedFilter.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async checkNegativeVarianceSearchResult() {
    try {
      const auditAmount = await this.auditAmountOfFirstSearchResult.getText();
      const auditAmountWithoutDollar = auditAmount.split("$").pop(1);
      const numericAuditAmount = parseFloat(auditAmountWithoutDollar);
      const recoveredAmount = await this.recoveredAmountOfFirstSearch.getText();
      const recoveredAmountWithoutDollar = recoveredAmount.split("$").pop(1);
      const numericRecoveredAmount = parseFloat(recoveredAmountWithoutDollar);
      if (numericAuditAmount < numericRecoveredAmount) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnBalanceOutButton() {
    try {
      await this.balanceOutButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getErrorToastMessage() {
    try {
      await this.errorToasterOnBalanceOutNoAuditChecked.waitForDisplayed();
      return await this.errorToasterOnBalanceOutNoAuditChecked.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async waitForToasterMessageToDisappear() {
    try {
      await this.errorToasterOnBalanceOutNoAuditChecked.click();
      await this.errorToasterOnBalanceOutNoAuditChecked.waitForDisplayed({
        reverse: true,
      });
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectAllAudits() {
    try {
      await this.selectAllCheckBox.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfHeader() {
    try {
      return await this.balanceOutHeader.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkBalanceOutModal() {
    try {
      return await this.balanceOutHeader.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAdjustmentTypeDropdown() {
    try {
      return await this.adjustmentTypeField.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfTransactionTypeDropdown() {
    try {
      return await this.transactionTypeField.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOftransitionToAuditStatus() {
    try {
      return await this.transitionToAuditStatusField.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAuditTypeTable() {
    try {
      return await this.auditTypeTableHeader.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAuditStatusDropdownTable() {
    try {
      return await this.auditStatusTableHeader.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfInternalCommentBox() {
    try {
      return await this.internalCommentField.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfUpdateButton() {
    try {
      return await this.updateButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfCancelButton() {
    try {
      return await this.cancelButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAuditType() {
    try {
      await this.auditTypeDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnUpdateButton() {
    try {
      await this.updateButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnCancelButton() {
    try {
      await this.cancelButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getAdjustmentTypeInlineError() {
    try {
      return await this.adjustmentTypeInlineError.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getTransitionToAuditStatus() {
    try {
      return await this.transitionToAuditStatus.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getInternalCommentInlineError() {
    try {
      return await this.internalCommentInlineError.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnAdjustmentDropdown() {
    try {
      await this.selectAdjustmentTypeField.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfTransactionTypeDropdown() {
    try {
      return await this.selectTransactionTypeDropdown.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getupdateAuditAmount() {
    try {
      await this.updateAuditAmount.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getupdateAuditAmountTransactionType() {
    try {
      return await this.updateAuditAmountTransactionType.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}

module.exports = new VarianceManagement();
