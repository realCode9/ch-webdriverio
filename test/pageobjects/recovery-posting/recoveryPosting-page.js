
import Page from "../page";
const mongoose = require('mongoose');

class RecoveryPostingPage extends Page {

    get headerText() {
        return $("//div[contains(text(),'Recovery Posting')]");
    }
    get numberLabel(){
        return $("//label[contains(text(),'Number')]");
    }
    get numberInputBox(){
        return $("(//div[@class='col col sm-3 col-md-3 col-lg-3 form-group']//input)[1]")
    }
    get providerNameLabel(){
        return $("//label[contains(text(),'Provider Name')]");
    }
    get statusLabel(){
        return $("//label[contains(text(),'Status')]");
    }
    get amountLabel(){
        return $("//label[contains(text(),'Amount')]");
    }
    get checkDateLabel(){
        return $("//label[contains(text(),'Check Date')]");
    }
    get dateReceivedLabel(){
        return $("//label[contains(text(),'Date Received')]");
    }
    get userLabel(){
        return $("//label[contains(text(),'User')]");
    }
    get auditIdLabel(){
        return $("//label[contains(text(),'Audit Id')]");
    }
    get recoveryTypeLabel(){
        return $("//label[contains(text(),'Recovery Type')]");
    }
    get postingDateLabel(){
        return $("//label[contains(text(),'Posting Date')]");
    }
    get assigneeLabel(){
        return $("//label[contains(text(),'Assignee')]");
    }
    get tagsLabel(){
        return $("//label[contains(text(),'Tags')]");
    }
    get dateCreatedLabel(){
        return $("//label[contains(text(),'Date Created')]");
    }
    get searchButton(){
        return $("//app-common-button//button//span[contains(text(),'Search')]");
    }
    get clearButton(){
        return $("//app-common-button//button//span[contains(text(),'Clear')]");
    }
    get statusInputbox(){
        return $("(//app-code-list-dropdown[@codelistname='Check Status']//div)[1]");
    }
    get statusValue(){
        return $("//span[contains(text(),'Partially Posted')]");
    }
    get recoveryTypeInputbox(){
        return $("(//app-code-list-dropdown[@codelistname='Recovery Type']//div)[1]");
    }
    get recoveryTypeValue(){
        return $("(//app-code-list-dropdown[@codelistname='Recovery Type']//div)[1]//ng-dropdown-panel//div[@role='option'][1]");
    }
    get searchFilterText(){
        return $("//b[contains(text(),'Status')]");
    }
    get editLink(){
        return $("//span[contains(text(),'Edit')]");
    }
    get crossIconStatusValue(){
        return $("(//span[@title='Clear all'])[2]");
    }
    get enterSearchCriteriaLink(){
        return $("//span[@class='no-filter-text']");
    }
    get noSearchResultsFound(){
        return $("//div[contains(text(),'No Search Results Found')]");
    }
    get newButton(){
        return $("//span[contains(text(),'New')]");
    }
    get newPageHeader(){
        return $("//span[contains(text(),'New')]");
    }
    get checkTab(){
        return $("//span[contains(text(),'Check')]");
    }
    get netAmountLabel(){
        return $("//label[contains(text(),'Net Amount')]");
    }
    get commentLabel(){
        return $("//label[contains(text(),'Comment')]");
    }
    get bankAccountLabel(){
        return $("//label[contains(text(),'Bank Account Number')]");
    }
    get noteTypeLabel(){
        return $("//label[contains(text(),'Note Type')]");
    }
    get noteTemplateLabel(){
        return $("//label[contains(text(),'Note Template')]");
    }
    get urNumberLabel(){
        return $("//label[contains(text(),'UR Number')]");
    }
    get urDateLabel(){
        return $("//label[contains(text(),'UR Date')]");
    }
    get summarySection(){
        return $("//div[contains(text(),'Summary')]");
    }
    get newPageBackButton(){
        return $("//span[contains(text(),'Back')]");
    }
    get newPageSubmitButton(){
        return $("(//button[@id='notSubmitButton'])[1]");
    }
    get newRecoveryType(){
        return $("(//div[@class='ng-select-container'])[1]");
    }
    get newRecoveryTypeValue(){
        return $("(//div[@class='ng-dropdown-panel-items scroll-host']//div[1])[2]");
    }
    get newProviderName(){
        return $("(//div[@class='col col-sm-3 col-md-3 col-lg-3']//input)[2]");
    }
    get newNumber(){
        return $("(//div[@class='col col-sm-3 col-md-3 col-lg-3']//input)[3]");
    }
    get newDateReceived(){
        return $("(//div[@class='col col-sm-3 col-md-3 col-lg-3']//input)[4]");
    }
    get newCheckDate(){
        return $("(//div[@class='col col-sm-3 col-md-3 col-lg-3']//input)[4]");
    }
    get newAmount(){
        return $("(//div[@class='col col-sm-3 col-md-3 col-lg-3']//input)[6]");
    }
    get successNotificationMessage(){
        return $("//ng-snotify-toast[@class='ng-star-inserted']//div[2]");
    }
    get saveButton(){
        return $("//span[contains(text(),'Save')]");
    }
    get returnButton(){
        return $("//span[contains(text(),'Return')]");
    }
    get postingTab(){
        return $("(//ul[@role='tablist'])[1]//li[2]");
    }
    get imagesTab(){
        return $("(//ul[@role='tablist'])[1]//li[3]");
    }
    get providerSearchTab(){
        return $("(//ul[@role='tablist'])[2]//li[1]");
    }
    get auditSearchTab(){
        return $("(//ul[@role='tablist'])[2]//li[2]");
    }
    get transactionTab(){
        return $("(//ul[@role='tablist'])[2]//li[3]");
    }
    get rejectedTransactionsTab(){
        return $("(//ul[@role='tablist'])[2]//li[4]");
    }
    get historyTab(){
        return $("(//ul[@role='tablist'])[2]//li[5]");
    }
    get postButton(){
        return $("//div[@class='m-t-sm']//button[2]");
    }
    get backButton(){
        return $("//button[contains(text(),'Back')]");
    }
    get providerSearchInputBox(){
        return $("//div[@class='input-group']//input");
    }
    get providerSearchButton(){
        return $("//button[@class='btn btn-sm btn-primary m-t-lg m-l-sm custom-spacing']");
    }
    get auditSearchTabHeading(){
        return $("((//app-page-header)[2]//div[1]//span)[1]");
    }
    get auditSearchClaimNumber(){
        return $("//textarea[@id='claimNumber']");
    }
    get auditSearchAuditId(){
        return $("//textarea[@id='auditId']");
    }
    get auditSearchPatientAccountNumberLabel(){
        return $("//label[contains(text(),'Patient Account Number')]");
    }
    get auditSearchPatientLastName(){
        return $("//label[contains(text(),'Patient Last Name')]");
    }
    get auditSearcAauditAmount(){
        return $("//label[contains(text(),'Audit Amount')]");
    }
    get auditSearchDateofService(){
        return $("//label[contains(text(),'Date of Service')]");
    }
    get auditSearchNewButton(){
        return $("//button[contains(text(),'New')]");
    }
    get auditSearchSearchButton(){
        return $("//button[@class='btn btn-sm btn-primary']");
    }
    get auditSearchSearchOutputAuditId(){
        return $("//tbody/tr[1]/td[3]");
    }
    get auditSearchActionFullButton(){
        return $("//button[contains(text(),'Full')]");
    }
    get auditSearchActionField(){
        return $("//tbody/tr[1]/td[9]/app-recovery-posting-amount-field[1]/div[1]/input[1]");
    }
    get auditSearchOutputAuditAmount(){
        return $("//tbody/tr[1]/td[6]");
    }
    get auditSearchTransactionAmount(){
        return $("(//div[@class='col col-sm-2 col-md-2 col-lg-2'])[1]//div[@class='value ng-star-inserted']//span");
    }
    get amountApplied(){
        return $("(//div[@class='col col-sm-2 col-md-2 col-lg-2'])[2]//div[@class='value ng-star-inserted']//span");
    }
    get unappliedAmount(){
        return $("(//div[@class='col col-sm-2 col-md-2 col-lg-2'])[3]//div[@class='value ng-star-inserted']//span");
    }
    get newAuditHeading(){
        return $("//h4[@id='modal-basic-title']");
    }
    get newAuditProviderTab(){
        return $("(//ul[@class='nav-tabs nav']//button[contains(text(),'Provider')])[2]");
    }
    get newAuditDataSetLabel(){
        return $("//app-dataset-dropdown//label");
    }
    get newAuditDataSetDropdown(){
        return $("//ng-select[@id='dataset']");
    }
    get newAuditDemoDataSet(){
        return $("//div[@class='ng-dropdown-panel-items scroll-host']//div//div[2]");
    }
    get newAuditProviderNumber(){
        return $("//label[contains(text(),'Provider Number')]");
    }
    get newAuditProviderName(){
        return $("//label[contains(text(),'Provider Name')]");
    }
    get newAuditClearIcon(){
        return $("//span[@title='Clear all']");
    }
    get newAuditSearchButton(){
        return $("(//div[@class='input-group'])[3]//span//button");
    }
    get newAuditRadioButton(){
        return $("//div[@role='radio']");
    }
    get newAuditMemberTab(){
        return $("//li[@class='nav-item']//button[contains(text(),'Member')]");
    }
    get newAuditMemberNumber(){
        return $("//label[contains(text(),'Member Number')]//following::input[1]");
    }
    get newAuditMemberLastName(){
        return $("(//label[contains(text(),'Last Name')])[2]");
    }
    get newAuditMemberFirstName(){
        return $("//label[contains(text(),'First Name')]");
    }
    get newAuditMemberFirstNameInputBox(){
        return $("//label[contains(text(),'First Name')]//following::input[1]");
    }
    get newAuditMemberAddress(){
        return $("//label[contains(text(),'Address')]");
    }
    get newAuditMemberCity(){
        return $("//label[contains(text(),'City')]");
    }
    get newAuditMemberState(){
        return $("//label[contains(text(),'State')]");
    }
    get newAuditMemberSearchButton(){
        return $("(//button[@class='btn btn-sm btn-primary'])[2]");
    }
    get newAuditMemberNewButton(){
        return $("(//button[contains(text(),'New')])[2]");
    }
    get newAuditMemberBackButton(){
        return $("(//button[contains(text(),'Back')])[2]");
    }
    get newAuditMemberDob(){
        return $("//label[contains(text(),'Date Of Birth')]");
    }
    get newAuditMemberSaveButton(){
        return $("//button[contains(text(),'Save')]");
    }
    get newAuditMemberSearchList(){
        return $("(//tbody)[3]");
    }
    get newAuditMemberRadioButton(){
        return $("//div[@id='member-panel']//div[@class='row']//tbody//tr[1]//p-tableradiobutton");
    }
    get newAuditClaimHeader(){
        return $("//span[contains(text(),'Claim & Audit')]");
    }
    get newAuditClaimLOBLabel(){
        return $("//label[contains(text(),'Line Of Business')]");
    }
    get newAuditClaimNumberLabel(){
        return $("//label[contains(text(),'Claim Number*')]");
    }
    get newAuditClaimNumberInputBox(){
        return $("//label[contains(text(),'Claim Number*')]//following::input[1]");
    }
    get newAuditClaimAmountsBilled(){
        return $("//label[contains(text(),'Amounts Billed')]");
    }
    get newAuditClaimAmountPaid(){
        return $("//label[contains(text(),'Amounts Paid')]");
    }
    get newAuditClaimAdmitDate(){
        return $("//input[@id='app-date-input-Admit-Date']");
    }
    get newAuditClaimDischargeDate(){
        return $("//input[@id='app-date-input-Discharge-Date']");
    }
    get newAuditClaimPaidDate(){
        return $("//input[@id='app-date-input-Paid-Date']");
    }
    get newAuditType(){
        return $("//ng-select[@id='app-code-list-dropdown-Service-Lines']");
    }
    get newAuditTypeCOBOption(){
        return $("//div[@role='option']//span[contains(text(),'COB')]");
    }
    get newAuditErrorCode(){
        return $("//ng-select[@id='error-code-id']");
    }
    get newAuditErrorCodeOption(){
        return $("(//div[@role='option']//span[contains(text(),'COB')])[1]")
    }
    get newAuditErrorCodeDetail(){
        return $("//ng-select[@id='error-code-detail-id']");
    }
    get newAuditErrorCodeDetailOption(){
        return $("(//div[@role='option']//span[contains(text(),'test')])[1]");
    }
    get newAuditOrganization(){
        return $("//ng-select[@id='organization']");
    }
    get newAuditOrganizationOption(){
        return $("//div[@role='option']")
    }
    get newAuditAmounts(){
        return $("//label[contains(text(),'Audit Amounts')]//following::input[1]");
    }
    get newAuditTextArea(){
        return $("//textarea[@id='note']");
    }
    get newAuditBackButton(){
        return $("//div[@id='claim_and_audit-panel']//button[contains(text(),'Back')]");
    }
    get newAuditSaveButton(){
        return $("//div[@id='claim_and_audit-panel']//button[contains(text(),'Save')]");
    }
    get fullActionButton(){
        return $("//button[contains(text(),'Full')]");
    }
    get transactionHeader(){
        return $("((//app-page-header)[2]//div[1]//span)[1]");
    }
    get transactionEditButton(){
        return $("//button[@id='edit-transaction-button-check']");
    }
    get transactionDropDownArrow(){
        return $("(//span[@class='ng-arrow-wrapper'])[3]");
    }
    get transactionRowArrow(){
        return $("//tbody/tr/td[1]/span[1]/*[1]");
    }
    get transactiondeleteDropdownValue(){
        return $("(//div[@class='ng-dropdown-panel-items scroll-host']//div//div[@class='ng-option'])[2]");
    }
    get transactionDeleteButton(){
        return $("//button[contains(text(),'Delete')]");
    }
    get transactionYesButton(){
        return $("//button[contains(text(),'Yes')]");
    }
    get transactionSearch(){
        return $("(//input[@placeholder='Search'])[1]");
    }
    get transactionSelectFilterDropdown(){
        return $("//ng-select[@id='app-custom-dropdown-Select-a-Filter']");
    }
    get transactionFilterDropdownValues(){
        return $("(//div[@class='ng-dropdown-panel-items scroll-host']//div[@role='option']//span)[15]");
    }
    get transactionSearchOutputAuditId(){
        return $("//tbody/tr[1]/td[5]");
    }
    get providerNameInputBox(){
        return $("//input[@name='providerName']");
    }
    get checkDeleteIcon(){
        return $("//tbody/tr[1]/td[14]/div[1]/div[1]/div[2]/div[1]");
    }
    get checkDeleteYesButton(){
        return $("(//div[@class='ibox-content'])[2]//div[3]//div//button[1]");
    }
    get checkDeleteModalText(){
        return $("//label[contains(text(),'Are you sure you want to remove this check?')]");
    }


    // Functions for recoveryPosting actions

    async enterNonMandatoryFields(recievedDate, checkDate){
        try {
            await this.newDateReceived.setValue(recievedDate);
            await this.newCheckDate.setValue(checkDate);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterMandatoryFields(providerName, amount, number){
        try {
            await this.newRecoveryType.click();
            await this.newRecoveryTypeValue.waitForDisplayed();
            await this.newRecoveryTypeValue.click();
            await this.newProviderName.setValue(providerName);
            await this.newAmount.setValue(amount);
            await this.newNumber.setValue(number);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async elementSetValue(element, data){
        try {
            await element.waitForDisplayed();
            await element.setValue(data);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async memberDeleteFunctionality(member)//delete member
    {
        try
        {
            const MyModel = mongoose.model('members', new mongoose.Schema({ name: String }));
            const a = await MyModel.deleteOne({"number":""+member+""}, { w: 0, wtimeout: 1000 });
            console.log("Member Deleted Successfully");
        } catch (error)
        {
            fail("Failed due to exception " + error);
        }
    };

    async auditDeleteFunctionality(audit)//delete audit
    {
        try
        {
            const MyModel = mongoose.model('overpayments', new mongoose.Schema({ name: String }));
            const a = await MyModel.deleteOne({ "payerClaimNumber": ""+audit+"" }, { w: 0, wtimeout: 1000 });
            console.log("Audit Deleted Successfully");
        } catch (error)
        {
            fail("Failed due to exception " + error);
        }
    };

    async claimDeleteFunctionality(claim)//delete claim
    {
        try
        {
            const MyModel = mongoose.model('payerclaims', new mongoose.Schema({ name: String }));
            const a = await MyModel.deleteOne({ "number": ""+claim+"" }, { w: 0, wtimeout: 1000 });
            console.log("Claim Deleted Successfully");
        } catch (error)
        {
            fail("Failed due to exception " + error);
        }
    };


}
module.exports = new RecoveryPostingPage();