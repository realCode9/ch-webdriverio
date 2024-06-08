import commonUtility from "../../../utilities/common-utilities";
import loginTestData from "../../../resources/login/login-test-data.json";
import fileUploadTestData from "../../../resources/file-upload/file-upload-test-data.json";

class FileDownloadHistory {
  get downloadHistoryHeader() {
    return $("//span[@class='default-color h6 title']");
  }
  get fileTypeLabel() {
    return $("//label[normalize-space()='File Type']");
  }
  get usernameLabel() {
    return $("//label[normalize-space()='Username']");
  }
  get organizationLabel() {
    return $("//label[normalize-space()='Organization']");
  }
  get statusLabel() {
    return $("//label[normalize-space()='Status']");
  }
  get fileNameLabel() {
    return $("//label[normalize-space()='File Name']");
  }
  get downloadDateLabel() {
    return $("//label[normalize-space()='Download Date']");
  }
  get searchButton() {
    return $("//button[@class='btn btn-sm btn-primary btn-sm']");
  }
  get clearButton() {
    return $("//button[@class='btn btn-outline-secondary btn-sm m-l-sm']");
  }
  get fileTypeDropdown() {
    return $("(//div[@class='ng-select-container'])[1]");
  }
  get organizationDropdown() {
    return $("(//div[@class='ng-select-container'])[2]");
  }
  get statusDropdown() {
    return $("(//div[@class='ng-select-container'])[3]");
  }
  get tableHeaders() {
    return $$("//table//thead//tr//th//div[@class = 'table-header']");
  }
  get spinner() {
    return $("(//img[@alt='Spinner'])[1]");
  }
  get fileTypeDropdownValues() {
    return $$("//ng-dropdown-panel//div[@role = 'option']");
  }
  get statusDropdownValues() {
    return $$("//ng-dropdown-panel//div[@role = 'option']//span");
  }
  get recordCountLabel() {
    return $("//span[@class='m-t-sm']");
  }
  get pageNavigation() {
    return $("//ngb-pagination[@role='navigation']");
  }
  get downloadDateColumnData() {
    return $$("//table//tbody//tr//td[6]");
  }
  get fileNameColumnHeader() {
    return $("//div[contains(text(),'File Name')]");
  }
  get noDataTitleMessage() {
    return $("//div[@class='title']");
  }
  get noDataSubTitleMessage() {
    return $("//div[@class='sub-title']");
  }
  get userInputField() {
    return $("//input[@placeholder='Search User']");
  }
  get firstRowFileType() {
    return $("//div//p-table[@datakey='fileDownloads']//table//tr[1]//td[2]");
  }
  get firstRowUserName() {
    return $("//div//tr[1]//td[4]");
  }
  get firstRowOrganization() {
    return $("//div//p-table[@datakey='fileDownloads']//table//tr[1]//td[3]");
  }
  get firstRowUploadStatus() {
    return $("//tr[1]//td[5]");
  }
  get firstRowFileName() {
    return $("//div//p-table[@class='p-element horizontal-scroll']//table//tr[1]//td[1]");
  }
  get fileNameField() {
    return $("//input[@placeholder='Search by File Type or File Name']");
  }
  get historyTable() {
    return $("(//div[@class='bottom-section'])[1]");
  }
  get downloadButtonOnUploadHistory() {
    return $("//tbody/tr[1]/td[9]/app-download-button[1]/div[1]/button[1]");
  }
  get downloadFileButtonSpinner() {
    return $("(//*[name()='svg'][@class='svg-inline--fa fa-spinner-third fa-w-16 fa-spin fa-2x'])[1]");
  }
  get firstRowFileNameOnUploadHistory() {
    return $("(//div[@class = 'p-datatable-wrapper']//tr[1]/td[1])[1]");
  }
  get firstRowDownloadDate() {
    return $("//div[@class = 'p-datatable-wrapper']//table//tbody//tr[1]//td[6]");
  }
  get downloadDateOnUploadHistoryTab() {
    return $("//div//table//tr[1]//td[7]");
  }
  //Functions
  async setValueToUser(user) {
    try {
      await this.clearButton.click();
      await this.userInputField.waitForDisplayed();
      await this.userInputField.setValue(user);
      await this.searchButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectFileType() {
    try {
      var urlValue = browser.config.baseUrl;
      await this.fileTypeDropdown.click();
      if (urlValue.includes(loginTestData.keyword)) {
        await commonUtility.selectDropDownOptions(fileUploadTestData.fileTypeOfRegression);
      } else {
        await commonUtility.selectDropDownOptions(fileUploadTestData.fileTypeOfTest);
      }
      await commonUtility.clickOnElement(this.searchButton);
      await commonUtility.waitUntilLoaderFinishedLoading(this.spinner);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectedFileType() {
    try {
      var urlValue = browser.config.baseUrl;
      if (urlValue.includes(loginTestData.keyword)) {
        return fileUploadTestData.fileTypeOfRegression;
      } else {
        return fileUploadTestData.fileTypeOfTest;
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectOrganization() {
    try {
      await this.clearButton.click();
      await commonUtility.waitUntilLoaderFinishedLoading(this.spinner);
      await this.organizationDropdown.click();
      await commonUtility.selectDropDownOptions(fileUploadTestData.OrganizationAmenity);
      await commonUtility.clickOnElement(this.searchButton);
      await commonUtility.waitUntilLoaderFinishedLoading(this.spinner);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectStatus() {
    try {
      await this.clearButton.click();
      await commonUtility.waitUntilLoaderFinishedLoading(this.spinner);
      await this.statusDropdown.click();
      await commonUtility.selectDropDownOptions(fileUploadTestData.firstStatusInDropdown);
      await browser.keys("\ue004")
      await commonUtility.clickOnElement(this.searchButton);
      await commonUtility.waitUntilLoaderFinishedLoading(this.spinner);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async setValueToFileName(fileName) {
    try {
      await this.clearButton.click();
      await commonUtility.waitUntilLoaderFinishedLoading(this.spinner);
      await this.fileNameField.waitForDisplayed();
      await this.fileNameField.setValue(fileName);
      await this.searchButton.click();
      await commonUtility.waitUntilLoaderFinishedLoading(this.spinner);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async downloadFileFromUploadHistoryTab() {
    try {
      await this.downloadButtonOnUploadHistory.waitForClickable();
      await this.downloadButtonOnUploadHistory.click();
      await this.downloadFileButtonSpinner.waitForDisplayed({ reverse: true });
      const file = "../claris-qa-automation/tempDownloads/" + await this.firstRowFileNameOnUploadHistory.getText();
      if (commonUtility.checkIfFileExists(file)) {
        return true;
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async genericFunctionToSortColumns(indexOfColumn) {
    try {
      var dataSortedByUser = await commonUtility.getMultiElementDataAndSort($$("//div[@class = 'ui-table-scrollable-body']//table//tbody//tr//td[" + indexOfColumn + "]"));
      return dataSortedByUser;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getMultiElementDataOfIndex(index) {
    try {
      return await commonUtility.getMultiElementTextOneByOne($$("//div[@class = 'ui-table-scrollable-body']//table//tbody//tr//td[" + index + "]"));
    } catch (error) {
      fail("Failed due to expection " + error);
    }
  }
  async columnCount() {
    try {
      return this.tableHeaders.length;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}
module.exports = new FileDownloadHistory();