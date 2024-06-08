import updateAuditsTestData from "../../../../resources/update-audits/update-audits-test-data.json";

class UpdateAuditsStep1 {
    get updateAuditsHeader() {
        return $("//div//div//div[text()= 'Update Audits']");
    }
    get step1Header() {
        return $("//div/h2");
    }
    get step1HeaderDescription() {
        return $("//div[@class = 'nblack-tag']");
    }
    get searchButton() {
        return $("(//button//span[text()='Search'])[1]")
    }
    get datasetsInlineError() {
        return $("//div[contains(text(), 'valid Dataset')]");
    }
    get auditTypeInlineError() {
        return $("//div[contains(text(), 'valid Audit')]");
    }
    get step1Label() {
        return $("//span[normalize-space()='Search Audits']");
    }
    get step2Label() {
        return $("//span[normalize-space()='Select Audits']");
    }
    get step3Label() {
        return $("//span[normalize-space()='Update Audit Status']");
    }
    get step4Label() {
        return $("//span[normalize-space()='Update Custom Fields']");
    }
    get step5Label() {
        return $("//span[normalize-space()='Review & Submit']");
    }
    get lineOfBusiness() {
        return $("//*[@id='app-shared-dropdown-Select-Line-of-Business']");
    }
    get clearButton() {
        return $("//span[normalize-space()='Clear']");
    }
    get auditStatusLabel() {
        return $("//label[normalize-space()='Audit Status']");
    }
    get dataSet() {
        return $("//ng-select[@id='dataset']");
    }
    get auditType() {
        return $("//*[@placeholder='Select Audit Type']");
    }
    get newAuditTypeDropdownValue() {
        return $("//span[@class='ng-option-label'][1]");
    }
    get newDatasetDropdownValue() {
        return $("//span[@class='ng-option-label'][1]");
    }
    get searchByParameterButton() {
        return $("//*[@id='auditStatusAndOthers']");
    }
    get searchByParameterLabel() {
        return $("//label[@for='auditStatusAndOthers']");
    }
    get searchByAuditAndClaimButton() {
        return $("//input[@id='searchByAuditId']");
    }
    get searchByAuditAndClaimLabel() {
        return $("//label[normalize-space()='Search by Audit ID']");
    }
    get auditId() {
        return $("//textarea[@id='auditId']");
    }
    get claimNumber() {
        return $("//textarea[@id='claimNumber']");
    }
    get auditStatusDropdown() {
        return $("//ng-select[@id='app-shared-dropdown-Select-Audit-Status']");
    }
    get dateOfService() {
        return $("//button[@id='calendarToggle']");
    }
    get projectDropDown() {
        return $("//ng-select[@id='projects']");
    }
    get patientFirstName() {
        return $("//input[@id='firstName']");
    }
    get patientLastName() {
        return $("//input[@id='lastName']");
    }
    get memberNumber() {
        return $("//input[@id='memberNumber']");
    }
    get providerNameDropDown() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Provider-Name']");
    }
    get providerTin() {
        return $("//input[@id='providerTin']");
    }
    get providerNumber() {
        return $("//input[@id='providerNumber']");
    }

    // Step 2
    get step2Header() {
        return $("//div/h2");
    }
    get step2HeaderDescription() {
        return $("//div[@class = 'nblack-tag']");
    }
    get step2SelectAllAuditCheckBox() {
        return $("//*[@id='auditListHeading']");
    }
    get step2GoBackButton() {
        return $("//span[normalize-space()='Go Back to Edit']");
    }
    get step2NextButton() {
        return $("//span[normalize-space()='Next']");
    }

    // Step 3
    get step3Header() {
        return $("//div/h2");
    }
    get step3HeaderDescription() {
        return $("//div[@class = 'nblack-tag']");
    }
    get step3SelectAuditStatusDropdown() {
        return $("//ng-select[@id='app-shared-dropdown-Select-Audit-Status']");
    }
    get step3SkipStep4Button() {
        return $("//span[normalize-space()='Skip Step 4']");
    }
    get step3GoBackButton() {
        return $("//span[normalize-space()='Go Back to Edit']");
    }
    get step3NextButton() {
        return $("//span[normalize-space()='Next']");
    }

    // Step 4
    get step4Header() {
        return $("//div/h2");
    }
    get step4HeaderDescription() {
        return $("//div[@class = 'nblack-tag']");
    }
    get step4NextButton() {
        return $("//span[normalize-space()='Next']");
    }
    get step4GoBackButton() {
        return $("//span[normalize-space()='Go Back to Edit']");
    }

    // Step 5
    get step5Header() {
        return $("//div/h2");
    }
    get step5HeaderDescription() {
        return $("//div[@class = 'nblack-tag']");
    }
    get step5InternalCommentButton() {
        return $("//p-radiobutton[@value='Internal Comment']");
    }
    get step5AuditIds() {
        return $("//span[@class='ng-star-inserted']");
    }
    get step5NoteButton() {
        return $("//span[@class='ui-radiobutton-icon ui-clickable pi pi-circle-on']");
    }
    get step5EnterNoteTextfield() {
        return $("//textarea['Enter']");
    }
    get step5Loader() {
        return $("//span[@class='icon-inprogress']");
    }
    get step5Submit() {
        return $("//span[@class='text ng-star-inserted']");
    }
    get step5GoBackButton() {
        return $("//span[normalize-space()='Go Back to Edit']");
    }
    get step5SuccessToaster() {
        return $("#toast-container");
    }
    get step5ErrorToaster() {
        return $("#toast-container");
    }
    get step5InvalidAuditIdErrorMessage() {
        return $("//span[@class='invalid-section-text ng-star-inserted']");
    }
    get step5CopyValidIdIcon() {
        return $("//*[@id='ui-accordiontab-0']/p-header/span");
    }
    get step5CopyInvalidIdIcon() {
        return $("//p-header[@class='ng-tns-c139-3 ng-star-inserted']//span[@class='icon-copy copy-icon']");
    }
    get step5GoBackButton() {
        return $("//span[normalize-space()='Go Back to Edit']");
    }

    //History tab
    get updateAuditHistory() {
        return $("//button[normalize-space()='History']");
    }
    get historyLatestIntenalComment() {
        return $("//tbody//td[7]");
    }

    // Functions
    
    async selectDropdownValue(value) {
        try {
            const xpathForDropdownValue = "(//div[@role='option'])[" + value + "]";
            await $(xpathForDropdownValue).click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getStep5InvalidIds() {
        try {
            const xpathForInvalidId = "(//div//span[@class ='ng-star-inserted'])[2]";
            return await $(xpathForInvalidId).getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async copyPasteIdstoUpdate() {
        try {
            var ids = await updateAuditsTestData.copyPasteIds;
            await this.auditId.setValue(ids);
            console.log(ids);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async waitUntilElementPreFillled() {
        try {
            await this.step5Loader.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickUpdateAuditsHistory() {
        try {
            await this.updateAuditHistory.waitForDisplayed();
            await this.updateAuditHistory.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async checkForDuplictes(data) {
        try {
            const arr = data.toString().split(',');
            let result = false;
            // iterate over the array
            for (let i = 0; i < arr.length; i++) {
                // compare the first and last index of an element
                if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
                    result = true;
                    // terminate the loop
                    break;
                }
            }
            if (result) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
module.exports = new UpdateAuditsStep1();