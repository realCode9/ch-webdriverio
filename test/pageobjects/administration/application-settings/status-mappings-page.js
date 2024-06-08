import Page from "../../page";

class StatusMappingsPage extends Page{
    get statusMappingText(){
        return $("//span[text()=' Status Mapping ']");
      }
    get mappingsText(){
        return $("//button[text()='Mapping']");
      }
    get defaultsText(){
        return $("//button[text()='Defaults']");
    }
    get addStatusMappingText(){
        return $("//span[text()=' Add Status Mapping ']");
    }
    get serviceLineText(){
        return $("(//strong[text()='Service Line'])[2]");
    }
    get recoveryTypesText(){
        return $("(//strong[text()='Recovery Types'])[2]");
    }
    get fullRecoveryStatusText(){
        return $("(//strong[text()='Full Recovery Status'])[2]");
    }
    get partialRecoveryStatusText(){
        return $("(//strong[text()='Partial Recovery Status'])[2]");
    }
    get saveButton(){
        return $("//button[text()='Save']");
    }
    get cancelButton(){
        return $("//button[text()=' Cancel ']");
    }
    get selectServiceLine(){
      return $("(//app-code-list-dropdown[@codelistname='Service Lines'])[13]");
    }
    get serviceLineDropdownValueCount(){
      return $$("(//ng-select[@id='app-code-list-dropdown-Service-Lines'])[13]/div/div/div[@class='ng-value']");
    }
    get selectRecoveryTypes(){
      return $("(//app-code-list-dropdown[@codelistname='Recovery Type'])[13]");
    }
    get recoveryTypesDropdownValueCount(){
      return $$("(//ng-select[@id='app-code-list-dropdown-Recovery-Type'])[13]/div/div/div[@class='ng-value']");
    }
    get disabledFullRecoveryStatus() {
      return $("(//ng-select[contains(@class,'ng-select-disabled')])[1]");
    }
    get disabledPartialRecoveryStatus() {
      return $("(//ng-select[contains(@class,'ng-select-disabled')])[2]");
    }
    get fullRecoveryStatus(){
      return $("(//div[@class='row']//app-status-dropdown[@maptype='Overpayment'])[25]//ng-select");
    }
    get partialRecoveryStatus(){
      return $("(//div[@class='row']//app-status-dropdown[@maptype='Overpayment'])[26]//ng-select");
    }
    get rowCountBeforeClickingPlusButton(){
      return $$("//div[@class='m-t-sm']/form/div");
    }
    get plusButton(){
      return $("//button[@ngbtooltip='Add']");
    }
    get rowCountAfterClickingPlusButton(){
      return $$("//div[@class='m-t-sm']/form/div");
    }
    get cancelButton(){
      return $("//button[text()=' Cancel ']");
    }
    get records(){
      return $("(//button[@ngbtooltip='Delete'])[1]");
    }
    get rowCountAfterClickingCancelButton(){
      return $$("//div[@class='m-t-sm']/form/div");
    }
    get deleteARecord(){
      return $("(//button[@ngbtooltip='Delete'])[8]");
    }
    get duplicateError(){
      return $("//div[contains(@class, 'toast-message')]");
    }
    get crossIcon(){
      return $("//div[@class='snotify-icon snotify-icon--error']");
    }
     get trashButton(){
       return $("(//button[@ngbtooltip='Delete'])[8]")
     }
     get deletingRecord(){
      return $("(//button[@ngbtooltip='Delete'])[13]");
    }
    get defaultsTab(){
      return $("//button[text()='Defaults']");
    }
    get defaultsTabText(){
      return $("//div/span[text()=' Status Defaults ']");
    }
    get auditText(){
      return $("//label[text()=' Audit ']");
    }
    get queryResultsText(){
      return $("//label[text()=' Query Results ']");
    }
    get medicalRecordRequestText(){
      return $("//label[text()=' Medical Record Request ']");
    }
    get selectAudit(){
      return $("(//div[@class='ng-input']/input)[1]");
    }
    get auditDropdownValueCount(){
      return $$("(//ng-select[contains(@class,'ng-select-clearable')]//div[@class='ng-value ng-star-inserted'])[1]");
    }
    get selectQueryResults(){
      return $("(//div[@class='ng-input']/input)[2]");
    }
    get queryResultsDropdownValueCount(){
      return $$("(//ng-select[contains(@class,'ng-select-clearable')]//div[@class='ng-value ng-star-inserted'])[2]");
    }
    get selectMedicalRecord(){
      return $("(//div[@class='ng-input']/input)[3]");
    }
    get medicalRecordDropdownValueCount(){
      return $$("(//ng-select[contains(@class,'ng-select-clearable')]//div[@class='ng-value ng-star-inserted'])[3]");
    }
    get selectMedicalRecordEndStatus(){
      return $("(//div[@class='ng-input']/input)[4]");
    }
    get medicalEndStatusDropdownValueCount(){
      return $$("(//ng-select[contains(@class,'ng-select-clearable')]//div[@class='ng-value ng-star-inserted'])[4]");
    }    
    
    rowCountBefore = 0;

    //Functions of all Status Mappings section

      async getMappingsText() {
        try {
          await this.mappingsText.waitForDisplayed();
          return await this.mappingsText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getDefaultsText() {
        try {
          await this.defaultsText.waitForDisplayed();
          return await this.defaultsText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getStatusMappingText() {
        try {
          await this.statusMappingText.waitForDisplayed();
          return await this.statusMappingText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getAddStatusMappingText() {
        try {
          await this.addStatusMappingText.waitForDisplayed();
          return await this.addStatusMappingText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getServiceLineText() {
        try {
          await this.serviceLineText.waitForDisplayed();
          return await this.serviceLineText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getRecoveryTypesText() {
        try {
          await this.recoveryTypesText.waitForDisplayed();
          return await this.recoveryTypesText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getFullRecoveryStatusText() {
        try {
          await this.fullRecoveryStatusText.waitForDisplayed();
          return await this.fullRecoveryStatusText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getPartialRecoveryStatusText() {
        try {
          await this.partialRecoveryStatusText.waitForDisplayed();
          return await this.partialRecoveryStatusText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async visibilityOfSaveButton() {
        try {
          await this.saveButton.waitForDisplayed();
          return await this.saveButton.isDisplayed();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async visibilityOfCancelButton() {
        try {
          await this.cancelButton.waitForDisplayed();
          return await this.cancelButton.isDisplayed();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnServiceLineDropdown() {
        try {
          await this.selectServiceLine.waitForClickable();
          return await this.selectServiceLine.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async isSingleSelectDropdown() {
        try {
          let dropDownValueCount = await this.serviceLineDropdownValueCount.length;
          return await dropDownValueCount;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }     
      async clickOnRecoveryTypesDropdown() {
        try {
          await this.selectRecoveryTypes.waitForClickable();
          return await this.selectRecoveryTypes.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async isMultiSelectDropdown() {
        try {
          let dropDownValueCount = await this.recoveryTypesDropdownValueCount.length;
          return await dropDownValueCount;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async fullRecoveryStatusEnable() {
        try {
          return await this.fullRecoveryStatus.isEnabled();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async partialRecoveryStatusEnable() {
        try {
          return await this.partialRecoveryStatus.isEnabled();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnFullRecoveryStatus() {
        try {
          await this.fullRecoveryStatus.waitForClickable();
          await this.fullRecoveryStatus.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnPartialRecoveryStatus() {
        try {
          await this.partialRecoveryStatus.waitForClickable();
          await this.partialRecoveryStatus.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async countBeforeClickingPlusButton() {
        try {
          this.rowCountBefore = await this.rowCountBeforeClickingPlusButton.length;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnPlusButton() {
        try {
          await this.plusButton.waitForClickable();
          await this.plusButton.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async countAfterClickingPlusButtonIsGreater() {
        try {
          let rowCountAfter = await this.rowCountAfterClickingPlusButton.length;
          if(this.rowCountBefore < rowCountAfter)
            {
              return true;
            }
            return false;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnCancelButton() {
        try {
          await this.cancelButton.waitForClickable();
          await this.cancelButton.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async waitForPageReload() {
        try {
          await this.records.waitForDisplayed();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async countAfterClickingCancelButtonIsSame() {
        try {
          let rowCountAfterCancel = await this.rowCountAfterClickingCancelButton.length;
          if(this.rowCountBefore == rowCountAfterCancel)
            {
              return true;
            }
            return false;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async deletingARecord() {
        try {
          await this.deleteARecord.waitForClickable();
          await this.deleteARecord.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnSaveButton() {
        try {
          await this.saveButton.waitForClickable();
          await this.saveButton.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async duplicateEntryError() {
        try {
          await this.duplicateError.waitForDisplayed();
          let duplicateErrorText = await this.duplicateError.getText();
          await this.duplicateError.click();
          return await duplicateErrorText;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async deleteRecord() {
        try {
          await this.deletingRecord.waitForClickable();
          await this.deletingRecord.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnDefaultsTab() {
        try {
          await this.defaultsTab.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getDefaultsTabText() {
        try {
          await this.defaultsTabText.waitForDisplayed();
          return await this.defaultsTabText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getAuditText() {
        try {
          await this.auditText.waitForDisplayed();
          return await this.auditText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getQueryResultsText() {
        try {
          await this.queryResultsText.waitForDisplayed();
          return await this.queryResultsText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async getMedicalRecordRequestText() {
        try {
          await this.medicalRecordRequestText.waitForDisplayed();
          return await this.medicalRecordRequestText.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnAuditDropdown() {
        try {
          await this.selectAudit.waitForClickable();
          await this.selectAudit.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async isAuditSingleSelectDropdown() {
        try {
          let dropdownCount = await this.auditDropdownValueCount.length;
          return await dropdownCount;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnQueryResultsDropdown() {
        try {
          await this.selectQueryResults.waitForClickable();
          await this.selectQueryResults.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async isQueryResultsSingleSelectDropdown() {
        try {
          let dropDownCount = await this.queryResultsDropdownValueCount.length;
          return await dropDownCount;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnMedicalRecordRequestDropdown() {
        try {
          await this.selectMedicalRecord.waitForClickable();
          await this.selectMedicalRecord.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async isMedicalRecordSingleSelectDropdown() {
        try {
          let medicalDropDownCount = await this.medicalRecordDropdownValueCount.length;
          return await medicalDropDownCount;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async clickOnMedicalRecordEndStatusDropdown() {
        try {
          await this.selectMedicalRecordEndStatus.waitForClickable();
          await this.selectMedicalRecordEndStatus.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
      async isMedicalRecordEndStatusSingleSelectDropdown() {
        try {
          let medicalEndStatusDropDownCount = await this.medicalEndStatusDropdownValueCount.length;
          return await medicalEndStatusDropDownCount;
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }

      
      


      


      




      

      




}

module.exports = new StatusMappingsPage();