import Page from "../../page";

class WorkQueueConfigurationsPage extends Page {
  get workQueues() {
    return $("//div[@id='Work-Queues-expandable-subElement']");
  }
  get configuration() {
    return $("//div[@id='Configuration-app-work-queue-configuration-list']");
  }
  get configurationHeader() {
    return $("//span[text() = ' Work Queue Configuration ']");
  }
  get viewWorkqueueHeaderXpath() {
    return $("//p//strong");
  }
  get newButton() {
    return $("//button[text()='New']");
  }
  get name() {
    return $("//input[@id='name']");
  }
  get workQueueView() {
    return $("//ng-select[@id='wqView']");
  }
  get dropDownList() {
    return $$("//div[@role='option']");
  }
  get groupByFields() {
    return $("(//input[@role='combobox'])[2]");
  }
  get limit() {
    return $("//input[@id='limit']");
  }
  get auditType() {
    return $("//*[@id='app-code-list-dropdown-Service-Lines']//input");
  }
  get auditStatus() {
    return $("//*[@id='status']//input");
  }
  get projects() {
    return $("//*[@id='projects']//input");
  }
  get projectType() {
    return $("//*[@id='app-code-list-dropdown-Query-Types']//input");
  }
  get errorCodes() {
    return $("//*[@id='error-code-id']//input");
  }
  get errorCodesDetail() {
    return $("//*[@id='error-code-detail']//input");
  }
  get organization() {
    return $("//*[@id='organization']//input");
  }
  get description() {
    return $("//*[@id='description']");
  }
  get saveButton() {
    return $("//*[@id='saveModal']");
  }
  get searchField() {
    return $("//input[@id='search-field']");
  }
  get viewWorkqueueHeader() {
    return $("//p//strong");
  }
  get bulkButton() {
    return $("//button[text()='Bulk']");
  }
  get addWorkqueueInBulkHeader() {
    return $("//span[@class= 'default-color h6 title']");
  }
  get auditRadioButton() {
    return $("//app-radio-button[@defaultvalue='audit']/input");
  }
  get medicalRecordRequestRadioButton() {
    return $("//app-radio-button[@defaultvalue='medicalrecordrequest']/input");
  }
  get globalWorkQueueSettingButton() {
    return $("//button[@id= 'global-wq-settings-btn']");
  }
  get globalWorkQueueSettingModalHeader() {
    return $("//*[@id='content']//div[2]/app-page-header//span");
  }
  get globalWorkQueueSettingModal() {
    return $("//app-work-queue-global-settings-modal");
  }
  get ascDescToggleButton() {
    return $("//button[@id='single-button']");
  }
  get dropdownOnGlobalWorkQueueSettingModal() {
    return $("//ng-select[@id='sort-field']");
  }
  get saveButtonOnGlobalWorkQueueSettingModal() {
    return $("//button[@id='saveModal']");
  }
  get cancelButtonOnGlobalWorkQueueSettingModal() {
    return $("//button[@id='cancelModal']");
  }
  get viewWorkQueueButton() {
    return $("(//button[@id='view-detail-btn-0'])[1]");
  }
  get deleteWorkQueueButton() {
    return $("(//button[@class='btn btn-danger btn-sm'])[1]");
  }
  get totalRowsInWorkQueueList() {
    return $("//div[@class='container-height']//tbody[@class='ui-table-tbody']/tr");
  }
  get nameColumnNameInWorkqueueList() {
    return $("(//th[1])[1]");
  }
  get typeColumnNameInWorkqueueList() {
    return $("(//th[2])[1]");
  }
  get viewColumnNameInWorkqueueList() {
    return $("(//th[3])[1]");
  }
  get statusColumnNameInWorkqueueList() {
    return $("(//th[4])[1]");
  }
  get nameColumnInConfigurationList() {
    return $("(//tr[1]/td[1])[1]");
  }
  get typeColumnInConfigurationList() {
    return $("(//tr[1]/td[2])[1]");
  }
  get viewColumnInConfigurationList() {
    return $("(//tr[1]/td[3])[1]");
  }
  get statusColumnInConfigurationList() {
    return $("(//tr[1]/td[4])[1]");
  }
  get deleteModal() {
    return $("//div[@class= 'modal-content']");
  }
  get yesButtonOnDeleteModal() {
    return $("//button[@id= 'deleteConfirmButton']");
  }
  get noButtonOnDeleteModal() {
    return $("//button[@id= 'deleteCancelButton']");
  }
  get paginationOnWorkQueueConfiguration() {
    return $("//li[@class='page-item']");
  }
  get auditTypeDropDownOnBulkWorkQueueCreation() {
    return $("(//input[@role= 'combobox'])[1]");
  }
  get dropdownElementsOnAuditTypeDropDownOnBulkWorkQueueCreation() {
    return $("//span[@class='ng-option-label']");
  }
  get workQueueViewDropDownOnBulkWorkQueueCreation() {
    return $("(//input[@role= 'combobox'])[2]");
  }
  get dropdownElementsOnWorkqueueViewDropDownOnBulkWorkQueueCreation() {
    return $("//span[@class='ng-option-label']");
  }
  get searchButtonOnBulkWorkqueueCreation() {
    return $("//button[@id='search-btn']");
  }
  get cancelButtonOnBulkWorkqueueCreation() {
    return $("//button[text()= 'Cancel']");
  }
  get searchResultsHeaderOnBulkCreation() {
    return $("//div[@class= 'ibox-content m-t-sm']//span[@class= 'h6 default-color title']");
  }
  get searchResultsColoumsNameRowIsDisplayedOnBulkCreation() {
    return $("//tr[@class ='sticky-header']");
  }
  get dropDownValue() {
    return $$("//div[@role='option']");
  }
  get totalRowsOnConfigurationListing() {
    return $$("//*[@id='row-24']");
  }
  get bulkWorkQueueHeader() {
    return $("//*[@id='content']//div[1]/app-page-header//span");
  }
  get bulkAuditType() {
    return $("//ng-select[@id='app-code-list-dropdown-Service-Lines']");
  }
  get workQueueView() {
    return $("//ng-select[@id='wqView']");
  }
  get groupedByField() {
    return $("//ng-select[@id='app-custom-dropdown-Select-Fields-to-Group-By']");
  }
  get bulkCancelButton() {
    return $("//button[@id='cancel-btn']");
  }
  get paginationBar() {
    return $("//a[@class='page-link']");
  }

  // Functions of all actions on Configurations page

  async clickOnDeleteModelYesButton() {
    try {
      await this.yesButtonOnDeleteModal.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnDeleteModelNoButton() {
    try {
      await this.noButtonOnDeleteModal.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfDeleteWorkQueueModel() {
    try {
      return await this.deleteModal.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnConfigurationsDeleteButton() {
    try {
      await this.deleteWorkQueueButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkConfigurationsDeleteButton() {
    try {
      return await this.deleteWorkQueueButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnGroupedByField() {
    try {
      await this.groupedByField.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnBulkCancelButton() {
    try {
      await this.bulkCancelButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkGroupedByField() {
    try {
      return await this.groupedByField.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getBulkSearchResultColumnHeader(header) {
    try {
      await $("(//th[" + header + "])[1]").waitForDisplayed();
      let value = await $("(//th[" + header + "])[1]").getText();
      return value;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getBulkSearchResultHeader() {
    try {
      await this.globalWorkQueueSettingModalHeader.waitForDisplayed();
      const b = await this.globalWorkQueueSettingModalHeader.getText();
      return b;
      //return await this.globalWorkQueueSettingModalHeader.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnBulkViewSearchButton() {
    try {
      await this.searchButtonOnBulkWorkqueueCreation.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkSearchButtonisEnabled() {
    try {
      return await this.searchButtonOnBulkWorkqueueCreation.isEnabled()
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnBulkWorkQueueView() {
    try {
      await this.workQueueView.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnBulkAuditType() {
    try {
      await this.bulkAuditType.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getBulkWorkQueueHeader() {
    try {
      const a = await this.bulkWorkQueueHeader.getText();
      return a;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnBulkButton() {
    try {
      await this.bulkButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnViewWorkQueueButton(workQueueName) {
    try {
      await $("//td[text()='" + workQueueName + "']//..//td[5]").click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkViewButton() {
    try {
      return await this.viewWorkQueueButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getConfigurationsStatus() {
    try {
      return await this.statusColumnInConfigurationList.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getConfigurationsView() {
    try {
      return await this.viewColumnInConfigurationList.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getConfigurationsType() {
    try {
      return await this.typeColumnInConfigurationList.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getConfigurationsColumns(workQueueName, Column) {
    try {
      await $("//td[text()='" + workQueueName + "']//..//td[" + Column + "]").waitForDisplayed();
      return await $("//td[text()='" + workQueueName + "']//..//td[" + Column + "]").getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterDataInSearchField(searchData) {
    try {
      await this.searchField.clearValue();
      await this.searchField.setValue(searchData);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getTextofStatusColumn() {
    try {
      return await this.statusColumnNameInWorkqueueList.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getTextofViewColumn() {
    try {
      return await this.viewColumnNameInWorkqueueList.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getTextofTypeColumn() {
    try {
      return await this.typeColumnNameInWorkqueueList.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getTextofNameColumn() {
    try {
      return await this.nameColumnNameInWorkqueueList.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getCountofRecordsOnConfigurationList() {
    try {
      let countOfRecords = await this.totalRowsOnConfigurationListing.length;
      if (countOfRecords >= 25) {
        return true;
      }
      else
        return false;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnErrorCodesDetail() {
    try {
      await this.errorCodesDetail.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnErrorCodes() {
    try {
      await this.errorCodes.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnProjectType() {
    try {
      await this.projectType.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnProjects() {
    try {
      await this.projects.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkSaveButtonDisabled() {
    try {
      return await this.saveButton.isEnabled();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getCurrentURL() {
    try {
      return await browser.getUrl();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnModelSaveButton() {
    try {
      return await this.saveButtonOnGlobalWorkQueueSettingModal.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAscDescToggleButton() {
    try {
      return await this.ascDescToggleButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnCancelButton() {
    try {
      await this.cancelButtonOnGlobalWorkQueueSettingModal.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkAscDescToggleButton() {
    try {
      return await this.ascDescToggleButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getDropDownOptions(value) {
    try {
      return await this.dropDownValue[value].getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnGlobalWorkQueueSortingButton() {
    try {
      await this.dropdownOnGlobalWorkQueueSettingModal.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnGlobalWorkQueueButton() {
    try {
      await this.globalWorkQueueSettingButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkGlobalWorkQueueSettingModelNotDisplayed() {
    try {
      return await this.globalWorkQueueSettingModal.waitForDisplayed({ reverse: true });

    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkGlobalWorkQueueSettingModel() {
    try {
      return await this.globalWorkQueueSettingModal.waitForDisplayed();

    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkGlobalWorkQueueButton() {
    try {
      return await this.globalWorkQueueSettingButton.waitForDisplayed();

    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkWorkQueueConfigurationHeader() {
    try {
      return await this.configurationHeader.getText();

    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnNewButton() {
    try {
      await this.newButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async enterWorkQueueName(workQueueName) {
    try {
      await this.name.waitForClickable();
      await this.name.setValue(workQueueName);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnWorkQueueView() {
    try {
      await this.workQueueView.waitForClickable();
      await this.workQueueView.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectDropDownOptions(dropDownValue) {
    try {
      await this.dropDownList.forEach(async (element) => {
        if ((await element.getText()) == dropDownValue) {
          await browser.pause(2000);
          await element.click();
        }
      });
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAuditType() {
    try {
      await this.auditType.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAuditStatus() {
    try {
      await this.auditStatus.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterLimit(workQueuelimit) {
    try {
      await this.limit.setValue(workQueuelimit);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterDescription(workQueueDescription) {
    try {
      await this.description.setValue(workQueueDescription);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSaveButton() {
    try {
      await this.saveButton.waitForClickable();
      await this.saveButton.click();
      await this.searchField.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnLimit() {
    try {
      await this.limit.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async scrollIntoConfigurationsView() {
    try {
      await this.configuration.scrollIntoView();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}
module.exports = new WorkQueueConfigurationsPage();
