const mongoose = require('mongoose');
import fileUploadTestData from "../../../resources/file-upload/file-upload-test-data.json";
import commonUtility from "../../../utilities/common-utilities";
import loginTestData from "../../../resources/login/login-test-data.json";

class FileUploadPage {
  get uploadTab() {
    return $("//button[text() ='Upload']");
  }
  get uploadHistoryTab() {
    return $("//button[text() ='Upload History']");
  }
  get downloadHistoryTab() {
    return $("//button[text() ='Download History']");
  }
  get fileUploadHeader() {
    return $("//div//app-file-upload-view//span[text() = ' File Upload ']");
  }
  get fileTypeLabel() {
    return $("//div//label[@for = 'codelist']");
  }
  get chooseFilesButton() {
    return $("(//label[normalize-space()='Choose Files'])[1]");
  }
  get inputFileButton() {
    return $("//input[@id='fileInput']");
  }
  get uploadButton() {
    return $("//button[text()='Upload ']");
  }
  get clearButton() {
    return $("//button[@class='btn btn-outline-secondary btn-sm m-l-sm']");
  }
  get instruction() {
    return $("//small[contains(text(),'*To select multiple files, hold down the CTRL or S')]");
  }
  get dropdownValues() {
    return $$("//div//span[@class = 'ng-option-label']");
  }
  get fileTypeDropdown() {
    return $("//div[@class='ng-select-container']//div[@class='ng-input']");
  }
  get fileUploadSuccessTick() {
    return $("//div[@class='spinner']//span//*[name()='svg']");
  }
  get dropdownCrossButton() {
    return $("//span[@title='Clear all']");
  }
  get tableColumnHeaders() {
    return $$("//thead//tr[@class = 'sticky-header']//th");
  }

  //Functions
  async getText(element) {
    try {
      await element.waitForDisplayed();
      return await element.getText();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async isElementDisplayed(element) {
    try {
      await element.waitForDisplayed();
      return element.isDisplayed();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async isElementEnabled(element) {
    try {
      await element.waitForDisplayed();
      return await element.isEnabled();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async getFileTypesFromDB() {
    try {
      const MyModel = mongoose.model('users', new mongoose.Schema({ name: String }, { fileType: Array }));
      var fileTypeArray = await MyModel.aggregate([
        { $match: { name: "Pareo Automation" } },
        { "$unwind": "$fileType" },
        { $sort: { "fileType": 1 } },
        { "$group": { "_id": null, fileType: { $push: "$fileType" } } },
        { "$project": { fileType: true, _id: false } }
      ]);
      var memberNamesArray = [];
      for (let i = 0; i < fileTypeArray.length; i++) {
        memberNamesArray.push(fileTypeArray[i]["fileType"]);
      }
      const memberNamesArr = memberNamesArray.toString();
      return memberNamesArr;
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async isFileUploaded() {
    try {
      const remoteFilePath = await browser.uploadFile(fileUploadTestData.filePath);
      await this.inputFileButton.addValue(remoteFilePath);
      await this.uploadButton.waitForClickable();
      await this.uploadButton.click();
      return await this.fileUploadSuccessTick.isDisplayed();
    } catch (error) {
      fail("Error occurred:" + error);
    }
  }
  async verifyClearButton() {
    try {
      const remoteFilePath = await browser.uploadFile(fileUploadTestData.filePath);
      await this.inputFileButton.addValue(remoteFilePath);
      await this.clearButton.waitForClickable();
      await this.clearButton.click();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async isDropdownCrossButtonPresent() {
    try {
      return await this.dropdownCrossButton.isDisplayed();
    } catch (error) {
      fail("Failed due to expection" + error)
    }
  }
  async choseFileTypes() {
    try {
      var urlValue = browser.config.baseUrl;
      if (urlValue.includes(loginTestData.keyword)) {
        return fileUploadTestData.allFileTypesForUserOnRegression;
      } else {
        return fileUploadTestData.allFileTypesForUserOnTest;
      }
    } catch (error) {
      fail("Failed due to exception " + error)
    }
  }
  async selectFileType() {
    try {
      var urlValue = browser.config.baseUrl;
      if (urlValue.includes(loginTestData.keyword)) {
        await commonUtility.selectDropDownOptions(fileUploadTestData.fileTypeOfRegression);
      } else {
        await commonUtility.selectDropDownOptions(fileUploadTestData.fileTypeOfTest);
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}
module.exports = new FileUploadPage();