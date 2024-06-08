import Page from "../../../page";
import commonFunctions from "../../../../../utilities/common-utilities"
import data from "../../../../../resources/invoicing/configuration/invoicing-configuration-plans-test-data.json";
const mongoose = require('mongoose');

class PlanPage extends Page {

    get headerText() {
        return $("//div[contains(text(),'Plans Configuration')]");
    }
    get planIdLabel() {
        return $("//label[contains(text(),'Plan ID')]");
    }
    get planIdInput() {
        return $("//ng-select[@id='planIds']//div[@class='ng-input']//input");
    }
    get planNameLabel() {
        return $("//label[contains(text(),'Plan Name')]");
    }
    get planNameInput() {
        return $("(//app-prime-input//input)[1]"); 
    }
    get taxIdLabel() {
        return $("//label[contains(text(),'Tax ID')]");
    }
    get taxIdInput() {
        return $("(//app-prime-input//input)[2]");
    }
    get searchButton() {
        return $("//app-common-button[@label='Search']");
    }
    get clearButton() {
        return $("//app-common-button[@label='Clear']");
    }
    get planIdTooltip() {
        return $("//div[@class='form-group col-md-4']//span[@ptooltip='Please press Enter Key after each Plan ID']");
    }
    get addPlanButton(){
        return $("//app-common-button//span[contains(text(),'Add Plan')]");
    }
    get planDetailHeader(){
        return $("//app-default-page-header");
    }
    get planDetailCheckBox(){
        return $("//app-prime-checkbox[@class='app-prime-checkbox ng-untouched ng-pristine ng-valid']");
    }
    get planDetailCheckBoxInstructionText(){
        return $("//label[contains(text(),'Set this plan as a Host Plan')]");
    }
    get planDetailCheckBoxTooltip(){
        return $("//div[@class='form-group col-md-12 extra-field ng-star-inserted']//span[@class='icon-info-fill']");
    }
    get planDetailBackButton(){
        return $("//app-common-button[@label='Back']");
    }
    get planDetailSaveButton(){
        return $("//app-common-button[@label='Save']");
    }
    get planDetailBlankErrorPlanId(){
        return $("(//div[@class='form-group col-md-4']//div[@class='error-txt ng-star-inserted'])[1]");
    }
    get planDetailBlankErrorPlanName(){
        return $("(//div[@class='form-group col-md-4']//div[@class='error-txt ng-star-inserted'])[2]");
    }
    get planDetailConfirmationPopup(){
        return $("//div[@class='popup']");
    }
    get planDetailConfirmationPopupHeader(){
        return $("//div[@class='popup']//div[@class='title']");
    }
    get planDetailConfirmationPopupContent(){
        return $("//div[@class='popup']//div[@class='popup-data']");
    }
    get planDetailConfirmationPopupProceedButton(){
        return $("//div[@class='popup']//div[@class='popup-footer']//button[1]");
    }
    get planDetailConfirmationPopupCancelButton(){
        return $("//div[@class='popup']//div[@class='popup-footer']//button[2]");
    }
    get successToaster() {
        return $("#toast-container");
    }
    get newPlanConfigurationHeader(){
        return $("(//div[@class='page-header-wrapper'])[2]");
    }
    get newPlanConfigurationInstructionText(){
        return $("//div[@class='normal-label']");
    }
    get contactTab(){
        return $("//a[@role='tab']//span[contains(text(),'Contacts')]");
    }
    get nameDepartmentLabel(){
        return $("//label[contains(text(),'Name/Department*')]");
    }
    get nameDepartmentInputField(){
        return $("((//div[@class='row'])[1]//input)[1]");
    }
    get phoneNumberLabel(){
        return $("//label[contains(text(),'Phone Number')]");
    }
    get phoneNumberInputField(){
        return $("((//div[@class='row'])[1]//input)[2]");
    }
    get emailTextFieldLabel(){
        return $("(//label[contains(text(),'Email')])[1]");
    }
    get emailInputField(){
        return $("((//div[@class='row'])[1]//input)[3]");
    }
    get addressLine1Label(){
        return $("//label[contains(text(),'Address Line 1')]");
    }
    get address1InputField(){
        return $("((//div[@class='row'])[2]//input)[1]");
    }
    get addressLine2Label(){
        return $("//label[contains(text(),'Address Line 2')]");
    }
    get address2InputField(){
        return $("((//div[@class='row'])[2]//input)[2]");
    }
    get cityLabel(){
        return $("//label[contains(text(),'City')]");
    }
    get cityInputField(){
        return $("((//div[@class='row'])[3]//input)[1]");
    }
    get zipLabel(){
        return $("//label[contains(text(),'Zip')]");
    }
    get stateLabel(){
        return $("//label[contains(text(),'State')]");
    }
    get defaultContactText(){
        return $("(//label[@class='form-label radio-label'])[1]");
    }
    get preferredDeliveryModeText(){
        return $("(//label[@class='form-label radio-label'])[2]");
    }
    get yesRadioButton(){
        return $("//p-radiobutton[@label='Yes']");
    }
    get noRadioButton(){
        return $("//p-radiobutton[@label='No']//div");
    }
    get emailRadioButton(){
        return $("//p-radiobutton[@label='Email']");
    }
    get mailRadioButton(){
        return $("//p-radiobutton[@label='Mail']");
    }
    get contactsAddButton(){
        return $("//app-common-button//span[contains(text(),'Add')]");
    }
    get contactsClearButton(){
        return $("//app-common-button//span[contains(text(),'Clear')]");
    }
    get deleteContactIcon(){
        return $("//div[@class='icon-delete icons']");
    }
    get deleteContactConfirmationPopup(){
        return $("//div[@class='popup']");
    }
    get deleteContactConfirmationPopupMessage(){
        return $("//div[@class='popup-data']");
    }
    get deleteContactConfirmationPopupHeader(){
        return $("//div[contains(text(),'Confirmation Required')]");
    }
    get deleteContactConfirmationPopupYesButton(){
        return $("//div[@class='popup-footer']//button[1]");
    }
    get deleteContactConfirmationPopupCancelButton(){
        return $("//div[@class='popup-footer']//button[2]");
    }
    get filesTab(){
        return $("//a[@role='tab']//span[contains(text(),'Files')]");
    }
    get dragAndDrop(){
        return $("//div[@class='drag-drpop-container']//input[@id='fileDropRef']");
    }
    get noFileUploadedText(){
        return $("//div[contains(text(),'No files uploaded yet')]")
    }
    get selectTagModalHeader(){
        return $("//div[contains(text(),'Select Tags and Upload Files')]")
    }
    get selectTagDropDown(){
        return $("(//ng-select[@id='image-tab']//div//div)[3]")
    }
    get selectTagUploadButton(){
        return $("(//div[@class='popup-footer']//button)[1]//span[@class='text ng-star-inserted']")
    }
    get selectTagCancelButton(){
        return $("(//div[@class='popup-footer']//button)[2]//span[@class='text ng-star-inserted']")
    }
    get selectTagDropDownOption(){
        return $("//div[@class='ng-dropdown-panel-items scroll-host']//div[@role='option']")
    }
    get fileTabSaveButton(){
        return $("(//app-common-button[@label='Save'])[2]//button")
    }
    get uploadedFiles(){
        return $("//div[contains(text(),'Uploaded Files (1)')]")
    }
    get uploadedFilesDownloadIcon(){
        return $("//app-common-button[@class='ng-star-inserted']//button[@id='notSubmitButton']")
    }
    get uploadedFilesDeleteIcon(){
        return $("//app-common-button[@class='delete app-common-button']//button[@id='notSubmitButton']")
    }
    get fileNameColumn(){
        return $("//div[contains(text(),'File Name')]")
    }
    get fileCreatedOnColumn(){
        return $("//div[contains(text(),'Created on')]")
    }
    get fileTagsColumn(){
        return $("//div[contains(text(),'Tags')]")
    }
    get uploadedFileDeleteConfirmationHeader(){
        return $("//div[contains(text(),'Confirmation Required')]")
    }
    get uploadedFileDeleteConfirmationMessage(){
        return $("//div[@class='popup-data']")
    }
    get uploadedFileDeleteConfirmationYesButton(){
        return $("//div[@class='popup-footer']//button[1]")
    }
    get uploadedFileDeleteConfirmationCancelButton(){
        return $("//div[@class='popup-footer']//button[2]")
    }
    get uploadFileTagsValue(){
        return $("//app-document-tags-edit-dropdown//div[@class='ng-value-container']//div[@class='ng-value ng-star-inserted']")
    }
    get noActivePlansFound(){
        return $("//div[contains(text(),'No active plans found')]")
    } 
    get listDropdown(){
        return $("//app-prime-dropdown[@class='app-dropdown']//p-dropdown//div")
    }
    get allActivePlansOption(){
        return $("//span[contains(text(),'All Active Plans')]")
    }
    get allArchivedPlansOption(){
        return $("//span[contains(text(),'All Archived Plans')]")
    }
    get noArchivedPlansMessage(){
        return $("//div[contains(text(),'No archived plans found')]")
    }
    get archiveIcon(){
        return $("//div[@class='actions']//div[@class='icons icon-archive']")
    }
    get editIcon(){
        return $("//tbody/tr[1]/td[5]/div[1]/div[2]")
    }
    get recordCount(){
        return $("//div[@class='listing']//div[@class='count black-label-20']")
    }
    get archiveButtonOnModal(){
        return $("//div[@class='popup-footer']//button[1]")
    }
    get unarchiveButtonOnModal(){
        return $("//div[@class='popup-footer']//button[1]")
    }
    get cancelButtonOnModal(){
        return $("//div[@class='popup-footer']//button[2]")
    }
    get archivePopup(){
        return $("//div[@class='popup']")
    }
    get archivePopUpMessage(){
        return $("//div[@class='popup-data']")
    }
    get unarchiveIcon(){
        return $("//div[@class='actions']//div[@class='icons icon-unarchive']")
    }

    // Functions for plans actions

    async getElementText(element) {
        try{
            await element.waitForDisplayed();
            return await element.getText();
         }catch (error) {
             fail("Failed due to exception " + error);
         }
    }
    async elementDisplayed(element){
        try {
            await element.waitForDisplayed();
            return await element.isDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterPlanIDForSearch(planID){
        try {
            await this.planIdInput.waitForDisplayed();
            await this.planIdInput.setValue(planID);
            await browser.keys("\uE007");
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async clickElement(element) {
        try {
          await element.waitForDisplayed();
          await element.click();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
    }
    async getSearchResult(planId){
        try {
           const searchResult = $("//td[contains(text(),'"+planId+"')]")
            return await searchResult.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterNewPlanId(planID){
        try {
            await this.planIdInput.waitForDisplayed();
            await this.planIdInput.setValue(planID);
            await browser.keys("\uE007");
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterNewPlanName(planName){
        try {
            await this.planNameInput.waitForDisplayed();
            await this.planNameInput.setValue(planName);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterNewTaxId(taxId){
        try {
            await this.taxIdInput.waitForDisplayed();
            await this.taxIdInput.setValue(taxId);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async planDetailConfirmationPopupIsDisplayed(){
        try {
            return await this.planDetailConfirmationPopup.isDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async visibilityOfSuccessToaster() {
        try {
          await this.successToaster.waitForDisplayed();
          return await this.successToaster.getText();
        } catch (error) {
          fail("Failed due to exception " + error);
        }
    }
    async enterNameDepartment(nameDepartment){
        try {
            await this.nameDepartmentInputField.waitForDisplayed();
            await this.nameDepartmentInputField.setValue(nameDepartment);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterPhoneNumber(phoneNumber){
        try {
            await this.phoneNumberInputField.waitForDisplayed();
            await this.phoneNumberInputField.setValue(phoneNumber);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterEmail(email){
        try {
            await this.emailInputField.waitForDisplayed();
            await this.emailInputField.setValue(email);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterAddress1(address1){
        try {
            await this.address1InputField.waitForDisplayed();
            await this.address1InputField.setValue(address1);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterAddress2(address2){
        try {
            await this.address2InputField.waitForDisplayed();
            await this.address2InputField.setValue(address2);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async enterCity(city){
        try {
            await this.cityInputField.waitForDisplayed();
            await this.cityInputField.setValue(city);
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async clickContactsClearButton(){
        try {
            await this.contactsClearButton.waitForDisplayed();
            await this.contactsClearButton.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async deleteContactConfirmationPopupDisplayed(){
        try {
            return await this.deleteContactConfirmationPopup.isDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async browseFile() {
        try {
          await commonFunctions.uploadFile(data.filePath,this.dragAndDrop);
        } catch (error) {
          fail("Failed due to exception " + error);
        }
    }
    async selectTagDropDownOptionClick(){
        try {
            await this.selectTagDropDown.click();
            await this.selectTagDropDownOption.waitForDisplayed();
            await this.selectTagDropDownOption.click();
            await this.selectTagModalHeader.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async filetabSaveButtonClick(){
        try {
            await this.fileTabSaveButton.waitForDisplayed();
            await this.uploadedFilesDeleteIcon.waitForDisplayed();
            await this.uploadFileTagsValue.waitForDisplayed({ timeout: 50000 });
            await this.fileTabSaveButton.waitForClickable();
            await this.fileTabSaveButton.click();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async fileTagsValueDisplayed(){
        try {
            await this.uploadFileTagsValue.waitForDisplayed();
            return await this.uploadFileTagsValue.isDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async uploadedFileDeleteConfirmationDisplayed(){
        try {
            return await this.uploadedFileDeleteConfirmationHeader.isDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async uploadedFileDeleteConfirmationYesButtonDisplayed(){
        try {
            await this.uploadedFileDeleteConfirmationYesButton.waitForDisplayed();
            return await this.uploadedFileDeleteConfirmationYesButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async uploadedFileDeleteConfirmationCancelButtonDisplayed(){
        try {
            await this.uploadedFileDeleteConfirmationCancelButton.waitForDisplayed();
            return await this.uploadedFileDeleteConfirmationCancelButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async deletePlanCreated(createdPlanName){
        try {
            const MyModel = mongoose.model('plans', new mongoose.Schema({ name: String }));
            await MyModel.deleteOne({ "name":""+createdPlanName+"" }, { w: 0, wtimeout: 1000 });
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }

}
module.exports = new PlanPage();