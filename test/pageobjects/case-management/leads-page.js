import leadsTestData from "../../../resources/case-management/leads-test-data.json";
import commonUtilities from "../../../utilities/common-utilities";
class Leads {
  get headerText() {
    return $("//*[@id='content']//div[@class='header-txt']");
  }
  get hideSearchButton() {
    return $("#app-search-top-panel-hide-show-search");
  }
  get searchField() {
    return $("#app-lead-list-search");
  }
  get searchFieldLabel() {
    return $("//label[normalize-space()='Search']");
  }
  get searchFieldPlaceholder() {
    return $("(//input[@placeholder='Search'])[1]");
  }
  get datasetField() {
    return $("//ng-select[@id='dataset']");
  }
  get datasetFieldLabel() {
    return $("label[for='dataset']");
  }
  get datasetFieldPlaceholder() {
    return $("//div[contains(text(),'Select a Dataset')]");
  }
  get investigatorField() {
    return $("#app-code-list-dropdown-Investigators");
  }
  get investigatorFieldLabel() {
    return $("//label[normalize-space()='Investigator']");
  }
  get investigatorFieldPlaceholder() {
    return $("//div[contains(text(),'Select an Investigator')]");
  }
  get allegationCategoryField() {
    return $("//ng-select[@id='app-code-list-dropdown-Allegation-Category']");
  }
  get allegationCategoryLabel() {
    return $("//label[normalize-space()='Allegation Category']");
  }
  get allegationCategoryPlaceholder() {
    return $("//div[contains(text(),'Select an Allegation Category')]");
  }
  get leadStatusField() {
    return $("//ng-select[@id='app-code-list-dropdown-Lead-Status']");
  }
  get leadStatusLabel() {
    return $("//label[normalize-space()='Lead Status']");
  }
  get leadStatusPlaceholder() {
    return $("//div[contains(text(),'Select a Status')]");
  }
  get specialtyTypeField() {
    return $("//ng-select[@id='app-code-list-dropdown-Specialty-Type']");
  }
  get specialtyTypeLabel() {
    return $("//label[normalize-space()='Specialty Type']");
  }
  get specialtyTypePlaceholder() {
    return $("//div[contains(text(),'Specialty Type')]");
  }
  get leadSourceField() {
    return $("//ng-select[@id='app-code-list-dropdown-Lead-Source']//div[@class='ng-select-container']");
  }
  get leadSourceLabel() {
    return $("//label[normalize-space()='Lead Source']");
  }
  get leadSourcePlaceholder() {
    return $("//div[contains(text(),'Select a Lead Source')]");
  }
  get dateRangeField() {
    return $("//input[@id='app-date-range-input-Date-Range']");
  }
  get dateRangeLabel() {
    return $("//label[normalize-space()='Date Range']");
  }
  get dateRangePlaceholder() {
    return $("//input[@placeholder='mm/dd/yyyy - mm/dd/yyyy']");
  }
  get searchButton() {
    return $("//span[@class='text'][normalize-space()='Search']");
  }
  get columnSelectionButton() {
    return $("//div[@class='top-panel']//div[1]//app-common-button[2]//button[1]");
  }
  get clearButton() {
   return $("#app-search-bottom-panel-search-clear");
  }
  get saveFilterButton() {
    return $("//button[@id='app-save-filter-button-save-filter']");
  }
  get dateRangeCalendar() {
    return $("//button[@id='calendarToggle']");
  }
  get getCurrentdateFromCalendar() {
    return $("//span[@class='custom-day current-day']");
  }
  get monthToDate() {
    return $("//button[normalize-space()='Month to Date']");
  }
  get previousMonth() {
    return $("//button[normalize-space()='Previous Month']");
  }
  get quarterToDate() {
    return $("//button[normalize-space()='Quarter to Date']");
  }
  get yearToDate() {
    return $("//button[normalize-space()='Year to Date']");
  }
  get previousYear() {
    return $("//button[normalize-space()='Previous Year']");
  }
  get noDataFound() {
    return $("//div[contains(text(),'No Data')]");
  }
  get enterTextInSearchBox() {
    return $("//div[@class='form-group']//input[@placeholder='Search']");
  }
  get columnSelectionModalHeader() {
    return $("(//span[@class='default-color h6 title'])[1]");
  }
  get searchColumn() {
    return $("//input[@id='app-column-selection-infinite-list-Available-Columns']");
  }
  get plusIcon() {
    return $("//*[@id='app-search-column-selection-green-plus-btn-0']");
  }
  get applyButton() {
    return $("//button[contains(text(),'Apply')]");
  }
  get searchAddedProject() {
    return $("//input[@id='app-column-selection-infinite-list-Added-to-Project']");
  }
  get validateAddedProject() {
    return $("//*[@id=contains(text(),'cdk-drop-list')]//strong[contains(text(),'CPT')]");
  }
  get columnSelectionDeleteIcon() {
    return $("//*[@id='app-search-column-selection-red-delete-btn-0']");
  }
  get pagination() {
    return $("//ul[@class='pagination pagination-sm']");
  }
  get leadRowCount() {
    return $$("(//*[@id=contains(text(),'pr_id_')]//tbody)[1]");
  }
  get pageSizeDropdown() {
    return $("//div[@class='page-size']//span[@class='ng-arrow-wrapper']");
  }
  get pageSizeDropdownValue() {
    return $("(//div[@class='ng-option'])[1]");
  }
  get enterFilterName() {
    return $("//input[@id='app-save-filter-button-add-name']");
  }
  get saveFilterName() {
    return $("//*[@id='app-save-filter-button-save']");
  }
  get saveFilterDropdown() {
    return $("//*[@id='app-filters-dropdown-saved-filters']");
  }
  get filterSaveSuccessMessage() {
    return $("#toast-container");
  }
  get selectFilter() {
    return $("(//*[@id='app-filters-dropdown-filter-name-0']//div)[3]");
  }
  get editFilterIcon() {
    return $("//*[@id='app-filters-dropdown-edit-icon-0']");
  }
  get updateFilterName() {
    return $("//*[@id='app-lead-list-filter-name']");
  }
  get saveButton() {
    return $("//*[@id='notSubmitButton']//span[contains(text(),'Save')]");
  }
  get deleteIcon() {
    return $("//*[@id='app-filters-dropdown-delete-icon-0']");
  }
  get yesButton() {
    return $("//*[@id='app-filters-dropdown-yes-0']//span[contains(text(),'Yes')]");
  }
  get deletedFilter() {
    return $("//div[contains(text(),'Test101')]");
  }
  get deletedselectedFilter() {
    return $("//div[@class='filter-name']");
  }
  get spinnerXpath() {
    return $("//*[@id='pareo-spinner']");
  }
  get createNewLeadButton() {
    return $("//span[normalize-space()='Create New Lead']");
  }
  get newLeadTab() {
    return $("//span[normalize-space()='New Lead']");
  }
  get newLeadId() {
    return $("//input[@id='app-lead-details-leadId']");
  }
  get newLeadAllegationCategoryDropdown() {
    return $( "//ng-select[@id='app-code-list-dropdown-Allegation-Category']//span[@class='ng-arrow-wrapper']");
  }
  get newLeadDatasetDropdown() {
    return $("//*[@id='dataset']//div[2][@class='ng-input']");
  }
  get newLeadDatasetDropdownValue() {
    return $("//span[@class='ng-option-label'][contains(text(),'Credit Balance')]");
  }
  get newLeadLOBDropdown() {
    return $("//*[@id='lob']//input");
  }
  get newLeadSourceDropdown() {
    return $("//ng-select[@id='app-code-list-dropdown-Lead-Source']//span[@class='ng-arrow-wrapper']");
  }
  get newLeadStatusDropdown() {
    return $("//ng-select[@id='app-code-list-dropdown-Lead-Status']//span[@class='ng-arrow-wrapper']");
  }
  get newLeadPayerStateDropdown() {
    return $("//*[@id='states']//div[2][@class='ng-input']");
  }
  get newLeadProviderLastName() {
    return $("//*[@id='app-lead-details-providerLastName']");
  }
  get newLeadProviderNPI() {
    return $("//*[@id='app-lead-details-npi']");
  }
  get newLeadSpecialityTypeDropdown() {
    return $("//*[@id='app-code-list-dropdown-Specialty-Type']//div[2][@class='ng-input']");
  }
  get newLeadIdSubmitButton() {
    return $("//span[normalize-space()='Submit']");
  }
  get newLeadIdCancelButton() {
    return $("//span[normalize-space()='Cancel']");
  }
  get newLeadSuccessMessage() {
    return $("//div[@class='snotifyToast__inner']");
  }
  get convertToCaseButton() {
    return $("//span[normalize-space()='Convert To Case']");
  }
  get caseHeader() {
    return $("//span[normalize-space()='Convert To Case']");
  }
  get deleteButton() {
    return $("//button[@id='deleteButton']");
  }
  get deletePopUpYesButton() {
    return $("//button[normalize-space()='Yes']");
  }
  get iconView() {
    return $("//div[@class='icon-view']");
  }
  get searchLead() {
    return $("//span[@class='text ng-star-inserted'][normalize-space()='Search']" );
  }
  get deleteLead() {
    return $("//span[normalize-space()='Delete']");
  }
  get deleteSuccessMessage() {
    return $("#toast-container");
  }
  get memberRadioButton() {
    return $("//input[@id='app-radio-button-member']");
  }
  get memberLeadDatasetDropdown() {
    return $("//ng-select[@id='dataset']//span[@class='ng-arrow-wrapper']");
  }
  get memberLeadDatasetDropdownValue() {
    return $("//span[normalize-space()='Demo Data']");
  }
  get memberName() {
    return $("//input[@id='app-lead-details-memberLastName']");
  }
  get memberNumber() {
    return $("//input[@id='app-lead-details-leadNumber']");
  }
  get toasterMessage() {
    return $("#toast-container");
  }
  get imagesTab() {
    return $("(//span[normalize-space()='Images'])[3]");
  }
  get imagesTabHeader() {
    return $("//div[@class='header-txt'][normalize-space()='Images']");
  }
  get noImageAttachedLabel() {
    return $("//div[normalize-space()='No Images Attached']");
  }
  get chooseFileButton() {
    return $("//div[@id='file-select']");
  }
  get downloadButton() {
    return $("//app-download-button[@class='button-spacer']//button[@class='btn btn-sm btn-primary']");
  }
  get fileSelection() {
    return $("//input[@name='file']");
  }
  get uploadButton() {
    return $("//button[normalize-space()='Upload']");
  }
  get tagDropdown() {
    return $("//div[@class='ng-select-container']//span[@class='ng-arrow-wrapper']");
  }
  get viewIcon() {
    return $("#app-image-list-OpenImageViewer0");
  }
  get viewIconTooltip() {
    return $("//div[@class='ui-tooltip-text ui-shadow ui-corner-all']");
  }
  get downloadSpinner() {
    return $("//div[@class='spinner']//span//*[name()='svg']");
  }
  get imagePreviewPanel() {
    return $("//div[@class='image-viewer-panel ng-star-inserted']");
  }
  get fileNameInPreviePanel() {
    return $("(//span[@class='default-color h2 title ng-star-inserted'])[1]");
  }
  get closePreviePanel() {
    return $("//a[@id='app-image-viewer-closeOverlay']");
  }
  get historyTabInImage() {
    return $("//span[normalize-space()='History']");
  }
  get eventValue() {
    return $("//tbody/tr[1]/td[2]");
  }
  get userValue() {
    return $("//tbody/tr[1]/td[4]");
  }
  get imageViewTab() {
    return $("//span[normalize-space()='Image View']");
  }
  get backButtonInImageTab() {
    return $("#app-lead-images-back-btn");
  }
  get deleteIconOnImageTab() {
    return $("#app-image-list-DeleteImage0");
  }
  get summaryTab() {
    return $("(//span[contains(text(),'Summary')])[5]");
  }
  get clearButtonOnImageTab() {
    return $("#app-image-uploader-clear");
  }
  
  leadIdGenerated = "";

  //Functions

  async isVisibleHeader() {
    try {
      await this.headerText.waitForDisplayed();
      return await this.headerText.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getTextHideSearchButton() {
    try {
      await this.hideSearchButton.waitForDisplayed();
      return await this.hideSearchButton.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickHideSearchButton() {
    try {
      await this.hideSearchButton.waitForDisplayed();
      await this.hideSearchButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyHiddenSearchPanel() {
    try {
      await this.hideSearchButton.waitForDisplayed();
      return await this.hideSearchButton.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleElementsInSearchCriteria(element) {
    try {
      await element.waitForDisplayed();
      return await element.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyTextForElementInSearchCriteria(element) {
    try {
      await element.waitForDisplayed();
      return await element.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnCalendar() {
    try {
      await this.dateRangeCalendar.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateDateRangeField() {
    try {
      return this.getCurrentdateFromCalendar.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterNoDataSearchCriteria() {
    await this.enterTextInSearchBox.waitForClickable();
    await this.enterTextInSearchBox.setValue(leadsTestData.randomText);
  }
  async enterDataSearchCriteria() {
    await this.enterTextInSearchBox.waitForClickable();
    await this.enterTextInSearchBox.setValue(leadsTestData.searchText);
  }
  async clickSearchButton() {
    try {
      await this.searchButton.waitForDisplayed();
      await this.searchButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickClearButton() {
    try {
      await this.clearButton.waitForDisplayed();
      await this.clearButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateNoDataResult() {
    try {
      await this.noDataFound.waitForDisplayed();
      return await this.noDataFound.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateTheVisibilityOfClearButton() {
    try {
      await this.clearButton.waitForDisplayed();
      return await this.clearButton.isClickable();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickColumnSelectionButton() {
    try {
      await this.columnSelectionButton.waitForClickable();
      await this.columnSelectionButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyHeaderText() {
    try {
      await this.columnSelectionModalHeader.waitForDisplayed();
      return await this.columnSelectionModalHeader.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async searchColumnToBeAdded() {
    try {
      await this.searchColumn.waitForDisplayed();
      await this.searchColumn.setValue(leadsTestData.columnAdded);
      await this.plusIcon.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickApplyButton() {
    try {
      await this.applyButton.waitForClickable();
      await this.applyButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);list
    }
  }
  async validateAddedColumn() {
    try {
      await this.searchAddedProject.waitForDisplayed();
      await this.searchAddedProject.setValue(leadsTestData.columnAdded);
      return await this.validateAddedProject.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickDeleteButton() {
    try {
      await this.columnSelectionDeleteIcon.waitForDisplayed();
      await this.columnSelectionDeleteIcon.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validatePaginationOnPage() {
    try {
      await this.pagination.waitForDisplayed();
      return await this.pagination.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateLeadRowCount() {
    try {
      let actualRowCount = await this.leadRowCount.length;
      return actualRowCount;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateChangingPageSize() {
    try {
      await this.pageSizeDropdown.waitForClickable();
      await this.pageSizeDropdown.click();
      await this.pageSizeDropdownValue.click();
      await this.spinnerXpath.waitForDisplayed({ reverse: true });
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateLeadRowCountAfterPageSizeChange() {
    try {
      let actualRowCount = await this.leadRowCount.length;
      return actualRowCount;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickSaveFilterButton() {
    try {
      await this.saveFilterButton.waitForClickable();
      await this.saveFilterButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterFilterNameInModal() {
    try {
      await this.enterFilterName.waitForClickable();
      await this.enterFilterName.setValue(leadsTestData.filterName);
      await this.saveFilterName.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateSaveFilterSuccessMessage() {
    try {
      await this.filterSaveSuccessMessage.waitForDisplayed();
      return await this.filterSaveSuccessMessage.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async waitForToasterMessageToDisappear(element) {
    try {
      await element.waitForDisplayed({ reverse: true });
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateEditingFilter() {
    try {
      await this.saveFilterDropdown.waitForClickable();
      await this.saveFilterDropdown.click();
      await this.selectFilter.moveTo();
      await this.editFilterIcon.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateUpdatingFilterMessage() {
    try {
      await this.updateFilterName.waitForClickable();
      await this.updateFilterName.setValue(leadsTestData.updatedFilterName);
      await this.saveButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateDeletingFilter() {
    try {
      await this.saveFilterDropdown.waitForClickable();
      await this.saveFilterDropdown.click();
      await this.deletedselectedFilter.moveTo();
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
  async validateNewLeadTab() {
    try {
      await this.createNewLeadButton.waitForClickable();
      await this.createNewLeadButton.click();
      return await this.newLeadTab.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleFieldsONewLeadTab(element) {
    try {
      await element.waitForDisplayed();
      return await element.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickDropdownOnNewLeadTab(element) {
    try {
      await element.waitForClickable();
      await element.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectDatasetDropdownValue() {
    try {
      await this.newLeadDatasetDropdownValue.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectDropdownValue(value) {
    try {
      const xpathForDropdownValue = "(//div[@role='option'])[" + value + "]";
      await $(xpathForDropdownValue).click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickSubmitButtonOnNewLeadTab() {
    try {
      await this.newLeadIdSubmitButton.waitForClickable();
      await this.newLeadIdSubmitButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getLeadId() {
    try {
      await this.newLeadId.moveTo();
      this.leadIdGenerated = await this.newLeadId.getValue();
      return this.leadIdGenerated;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterLastNameDetail() {
    try {
      const randomNumber = (
      await commonUtilities.randomNumberGenerator(98, 10000)).toString();
      await this.newLeadProviderLastName.setValue(randomNumber);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterNPIDetail() {
    try {
      const randomNumber = (
      await commonUtilities.randomNumberGenerator(98, 10000)).toString();
      await this.newLeadProviderNPI.setValue(randomNumber);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickConvertToCaseButtonButton() {
    try {
      await this.convertToCaseButton.waitForClickable();
      await this.convertToCaseButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateCaseTab() {
    try {
      await this.caseHeader.waitForDisplayed();
      return await this.caseHeader.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async deleteCase() {
    try {
      await this.deleteButton.scrollIntoView();
      await this.deleteButton.waitForClickable();
      await this.deleteButton.click();
      await this.deletePopUpYesButton.waitForClickable();
      await this.deletePopUpYesButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async deleteLeadCreated() {
    try {
      await this.deleteLead.scrollIntoView();
      await this.deleteLead.click();
      await this.deletePopUpYesButton.waitForClickable();
      await this.deletePopUpYesButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async openLead() {
    try {
      await this.searchFieldPlaceholder.waitForClickable();
      await this.searchFieldPlaceholder.setValue(this.leadIdGenerated);
      await this.searchLead.waitForClickable();
      await this.searchLead.click();
      await this.iconView.waitForDisplayed();
      await this.iconView.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateDeleteSuccessMessage() {
    try {
      await this.deleteSuccessMessage.waitForDisplayed();
      return await this.deleteSuccessMessage.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectMemberTypeOnLeadsPage() {
    try {
      await this.memberRadioButton.waitForClickable();
      await this.memberRadioButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterMemberLastNameDetail() {
    try {
      const randomNumber = (
        await commonUtilities.randomNumberGenerator(98, 10000)).toString();
      await this.memberName.setValue(randomNumber);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterMemberNumber() {
    try {
      const randomNumber = await commonUtilities.randomNumberGenerator(98,10000);
      await this.memberNumber.setValue(randomNumber);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async validateDeleteSuccessMessageForMemberTypeLead() {
    try {
      await this.toasterMessage.waitForDisplayed();
      return await this.toasterMessage.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectDatasetDropdownValueForMemberType() {
    try {
      await this.memberLeadDatasetDropdownValue.waitForDisplayed();
      return await this.memberLeadDatasetDropdownValue.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickCancelButton() {
    try {
      await this.newLeadIdCancelButton.waitForClickable();
      await this.newLeadIdCancelButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickImageTab() {
    try {
      await this.imagesTab.waitForClickable();
      await this.imagesTab.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleImageTabHeader() {
    try {
      await this.imagesTabHeader.waitForDisplayed();
      return await this.imagesTabHeader.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleNoImageText() {
    try {
      await this.noImageAttachedLabel.waitForDisplayed();
      return await this.noImageAttachedLabel.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleChooseFileButton() {
    try {
      await this.chooseFileButton.waitForDisplayed();
      return await this.chooseFileButton.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyMessageOnWrongFileUpload() {
    try {
      await commonUtilities.uploadFile(leadsTestData.wrongFilePath,this.fileSelection);
      await this.tagDropdown.click();
      await commonUtilities.selectDropDownOptions(leadsTestData.tagName);
      await this.uploadButton.click();
      await this.toasterMessage.waitForDisplayed();
      return await this.toasterMessage.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickClearButtonInImageTab() {
    try {
      await this.toasterMessage.click();
      await this.clearButtonOnImageTab.waitForClickable();
      await this.clearButtonOnImageTab.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyFileUpload() {
    try {
      await commonUtilities.uploadFile(leadsTestData.filePath,this.fileSelection);
      await this.tagDropdown.click();
      await commonUtilities.selectDropDownOptions(leadsTestData.tagName);
      await this.uploadButton.click();
      await this.viewIcon.waitForClickable();
      await this.viewIcon.moveTo();
      return await this.viewIconTooltip.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyFileDownload() {
    try {
      await this.downloadButton.waitForClickable();
      await this.downloadButton.click();
      await this.downloadSpinner.waitForDisplayed({ reverse: true });

      const myFile = leadsTestData.downloadFile;

      // See if the file exists
      if (commonUtilities.checkIfFileExists(myFile)) {
        return true;
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isVisibleImagePreviewPanel() {
    try {
      await this.viewIcon.click();
      await this.imagePreviewPanel.waitForDisplayed();
      return await this.imagePreviewPanel.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getFileNameInPreviewPanel() {
    try {
      await this.fileNameInPreviePanel.waitForDisplayed();
      return await this.fileNameInPreviePanel.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickCloseIconInPreviewPanel() {
    try {
      await this.closePreviePanel.waitForClickable();
      await this.closePreviePanel.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickHistoryTab() {
    try {
      await this.historyTabInImage.waitForClickable();
      await this.historyTabInImage.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyFieldsInHistory(field, text) {
    try {
      await field.waitForDisplayed();
      const fieldValue = await field.getText();
      if (fieldValue == text) {
        return true;
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickImageViewTab() {
    try {
      await this.imageViewTab.waitForClickable();
      await this.imageViewTab.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyBackButton() {
    try {
      await this.backButtonInImageTab.waitForDisplayed();
      return await this.backButtonInImageTab.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async verifyDeleteMessage() {
    try {
      await this.deleteIconOnImageTab.click();
      await this.toasterMessage.waitForDisplayed();
      return await this.toasterMessage.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickSummaryTab() {
    try {
      await this.summaryTab.waitForClickable();
      await this.summaryTab.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}
module.exports = new Leads();
