import Page from "../../../page";
import data from "../../../../../resources/invoicing/blues-plans/outgoing-test-data.json"

class OutgoingPage extends Page {
    
    get headerText(){
        return $("//div[contains(text(),'Outgoing Invoices')]");
    }
    get createInvoiceButton(){
        return $("//app-default-page-header/div[1]/div[2]");
    }
    get createInvoiceHeader(){
        return $("//div[contains(text(),'Create Invoice')]");
    }
    get manualTab(){
        return $("(//li[@role='presentation'])[2]");
    }
    get defaultMessageOnManualTab(){
        return $("//div[contains(text(),'Enter the above details to fetch data.')]");
    }
    get homePlanLabel(){
        return $("//label[contains(text(),'Home Plan')]");
    }
    get hostPlanLabel(){
        return $("//label[contains(text(),'Host Plan')]");
    }
    get paymentTimingLabel(){
        return $("//label[contains(text(),'Payment Timing*')]");
    }
    get singlePlanRadioButton(){
        return $("//label[contains(text(),'Payment Timing*')]");
    }
    get multiplePlansRadioButton(){
        return $("//div[@class='radio-buttons']//p-radiobutton[@value='Multiple Plans']");
    }
    get recoveryDateRangeLabel(){
        return $("//div[@class='date-rannge-input-wrapper']//label[contains(text(),'Recovery Date Range')]");
    }
    get backButton(){
        return $("//span[contains(text(),'Back')]");
    }
    get searchTransactionButton(){
        return $("//span[contains(text(),'Search Transactions')]");
    }
    get hostPlanErrorText(){
        return $("//div[contains(text(),'Please select Host Plan')]");
    }
    get homePlanErrorText(){
        return $("//div[contains(text(),'Please select a Home Plan')]");
    }
    get recoveryDateRangeErrorText(){
        return $("//div[contains(text(),'Please select Recovery Date Range')]");
    }
    get hostPlanInputField(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Host-Plan']//input");
    }
    get dropDownOption(){
        return $("//div[@role='option']");
    }
    get homePlanInputField(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Home-Plan']//input");
    }
    get calendarToggleButton(){
        return $("//button[@id='calendarToggle']");
    }
    get recoveryDateRangeInputField(){
        return $("//input[@id='app-date-range-input-Recovery-Date-Range']");
    }
    get auditTransactionHeader(){
        return $("//div[contains(text(),'Audit Transactions')]");
    }
    get includeExcludeAllTransactionsErrorNotification(){
        return $("//div[contains(text(),'Please include/exclude all transactions')]");
    }
    get generateButton(){
        return $("//app-common-button[@label='Generate']");
    }
    get includeTabCount(){
        return $("(//span[@class='badge'])[2]");
    }
    get excludeTabCount(){
        return $("(//span[@class='badge'])[3]");
    }
    get pendingTabCount(){
        return $("(//span[@class='badge'])[1]");
    }
    get sccfid(){
        return $("((//div[@class='data-wrapper'])[1]//div[@class='row-title'])[1]//following::div[1]");
    }
    get includeButton(){
        return $("//app-common-button[@label='Include']");
    }
    get excludeButton(){
        return $("(//app-common-button[@label='Exclude'])[2]");
    }
    get includeTab(){
        return $("((//ul[@role='tablist'])[2]//li)[2]");
    }
    get excludeTab(){
        return $("((//ul[@role='tablist'])[2]//li)[3]");
    }
    get pendingTab(){
        return $("((//ul[@role='tablist'])[2]//li)[1]");
    }
    get pageSizeInput(){
        return $("//div[@class='page-size']//app-input-box//input");
    }
    get bulkCheckBox(){
        return $("(//div[@role='checkbox'])[3]");
    }

    // Functions for outgoing actions

    async getHeaderText(){
        try{
           return await this.headerText.getText();
        }catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async clickCreateInvoiceButton(){
        try{
           await this.createInvoiceButton.click();
        }catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async getCreateInvoiceHeaderText(){
        try {
            return await this.createInvoiceHeader.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }

    async clickManualTab(){
        try {
            await this.manualTab.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }

    async defaultMessageOnManualTabDisplayed(){
        try {
            return await this.defaultMessageOnManualTab.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }

    async getHostPlanLabelText(){
        try {
            return await this.hostPlanLabel.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getHomePlanLabelText(){
        try {
            return await this.homePlanLabel.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getPaymentTimingLabelText(){
        try {
            return await this.paymentTimingLabel.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }

    async singlePlanRadioButtonDisplayed(){
        try {
            return await this.singlePlanRadioButton.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async multiplePlansRadioButtonDisplayed(){
        try {
            return await this.multiplePlansRadioButton.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async recoveryDateRangeLabelDisplayed(){
        try {
            return await this.recoveryDateRangeLabel.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async backButtonDisplayed(){
        try {
            return await this.backButton.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async searchTransactionButtonDisplayed(){
        try {
            return await this.searchTransactionButton.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async clickSearchTransactionButton(){
        try {
            await this.searchTransactionButton.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getHostPlanErrorText(){
        try {
            await this.hostPlanErrorText.waitForDisplayed();
            return this.hostPlanErrorText.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getHomePlanErrorText(){
        try {
            await this.homePlanErrorText.waitForDisplayed();
            return this.homePlanErrorText.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getRecoveryDateRangeErrorText(){
        try {
            await this.recoveryDateRangeErrorText.waitForDisplayed();
            return this.recoveryDateRangeErrorText.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterHostPlan(){
        try {
            await this.hostPlanInputField.setValue(data.newHostPlan);
            await this.dropDownOption.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterHomePlan(){
        try {
            await this.homePlanInputField.setValue(data.newHomePlan);
            await this.dropDownOption.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterRecoveryDateRange(){
        try {
            await this.calendarToggleButton.click();
            await this.recoveryDateRangeInputField.setValue(data.newRecoveryDateRange)
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getAuditTransactionHeader(){
        try {
            return await this.auditTransactionHeader.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getIncludeExcludeAllTransactionsErrorNotificationText(){
        try {
            await this.includeExcludeAllTransactionsErrorNotification.waitForDisplayed();
            return await this.includeExcludeAllTransactionsErrorNotification.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async clickGenerateButton(){
        try {
            await this.generateButton.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async clickIncludeButton(){
        try {
            await this.includeButton.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async clickExcludeButton(){
        try {
            await this.excludeButton.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getIncludeTabCount(){
        try {
            var count = parseInt((await (this.includeTabCount.getText())).trim());
            return count;
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getExcludeTabCount(){
        try {
            var count = parseInt((await (this.excludeTabCount.getText())).trim());
            return count;
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getPendingTabCount(){
        try {
            var count = parseInt((await (this.pendingTabCount.getText())).trim());
            return count;
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getSccfId(){
        try {
            return await this.sccfid.getText();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async navigateToIncludeTab(){
        try {
            await this.includeTab.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async navigateToPendingTab(){
        try {
            await this.pendingTab.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async navigateToExcludeTab(){
        try {
            await this.excludeTab.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async clickBulkCheckbox(){
        try {
            await this.bulkCheckBox.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    
}
module.exports = new OutgoingPage();