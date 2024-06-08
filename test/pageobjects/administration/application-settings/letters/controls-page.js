import Page from "../../../page";
import utilities from "../../../../../utilities/common-utilities";
import templatesPage from "../../../../pageobjects/administration/application-settings/letters/templates/templates-page";
import menuOptions from "../../../../pageobjects/menuoptions-page";

const list = ["","","Friendly Name", "Key", "Source Type", "Type", "Created By"]

class ControlsPage extends Page {

    get header(){
        return $("//div[contains(text(),'Letter Control')]");
    }
    get newButton(){
        return $("//button[contains(text(),'New')]");
    }
    get searchLink(){
        return $("//span[@class='no-filter-text']");
    }
    get searchSourceType(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Source-Type']//input");
    }
    get searchControlType(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Control-Type']//input");
    }
    get searchFriendlyName(){
        return $("//input[@name='friendlyName']");
    }
    get searchButton(){
        return $("//button[@class='btn btn-sm btn-primary search-btn']");
    }
    get clearButton(){
        return $("//button[@class='btn btn-sm btn-outline-secondary m-l-sm clear-btn']");
    }
    get closeSearchLink(){
        return $("//div[contains(text(),'Close Search')]");
    }
    get editSearchLink(){
        return $("//span[@id='edit-btn']");
    }
    get listSourceType(){
        return $$("//tbody/tr[1]/td[4]");
    }
    get listControlType(){
        return $$("//tbody/tr[1]/td[5]");
    }
    get controlDetailHeader(){
        return $("//span[contains(text(),'Control Detail')]");
    }
    get type(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Type']");
    }
    get friendlyName(){
        return $("//input[@id='friendlyName']");
    }
    get key(){
        return $("//input[@id='key']");
    }
    get sourceType(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Source-Type']");
    }
    get saveButton(){
        return $("//button[@class='btn btn-sm btn-primary']//span[contains(text(),'Save')]");
    }
    get cancelButton(){
        return $("//button[@class='btn btn-sm btn-outline-secondary m-l-sm']");
    }
    get addRowButton(){
        return $("//button[contains(text(),'Add Row')]");
    }
    get landscapeCheckbox(){
        return $("//input[@name='cb']");
    }
    get addTotalRowButton(){
        return $("//button[contains(text(),'Add Total Row')]");
    }
    get field(){
        return $("//input[@id='field']");
    }
    get tooltip(){
        return $("//div[@class='p-tooltip p-component p-tooltip-right']//div[@class='p-tooltip-text']");
    }
    get friendlyNameTooltip(){
        return $("//label[contains(text(),' Friendly Name* ')]//app-info-tooltip");
    }
    get keyTooltip(){
        return $("//label[contains(text(),' Key * ')]//app-info-tooltip");
    }
    get fieldTooltip(){
        return $("//label[contains(text(),' Field * ')]//app-info-tooltip");
    }
    get landscapeTooltip(){
        return $("//label[contains(text(),' Landscape ')]//app-info-tooltip");
    }
    get rowTab(){
        return $("//button[@role='tab']//div[contains(text(),'Row #1 ')]");
    }
    get addColumnButton(){
        return $("//button[contains(text(),'Add Column')]");
    }
    get togglePanel(){
        return $("//div[@id='toggle-panel-down']");
    }
    get rowTabHeadingTooltip(){
        return $("//label[contains(text(),' Heading ')]//app-info-tooltip");
    }
    get rowTabFieldTooltip(){
        return $("//label[contains(text(),' Field ')]//app-info-tooltip");
    }
    get rowTabColspanTooltip(){
        return $("//label[contains(text(),'Colspan')]//app-info-tooltip");
    }
    get rowTabRowspanTooltip(){
        return $("//label[contains(text(),'Rowspan')]//app-info-tooltip");
    }
    get rowTabStyleTooltip(){
        return $("//label[contains(text(),'Style')]//app-info-tooltip");
    }
    get rowTabFormatterTooltip(){
        return $("(//label[contains(text(),'Formatter')]//following::span//app-info-tooltip)[1]");
    }
    get anotherColumn(){
        return $("//div[contains(text(),' Column #2 ')]");
    }
    get rowTabHeading(){
        return $("//input[@name='heading']");
    }
    get rowTabField(){
        return $("//input[@name='field']");
    }
    get rowTabColspan(){
        return $("//input[@name='colspan']");
    }
    get rowTabRowspan(){
        return $("//input[@name='rowspan']");
    }
    get rowTabStyle(){
        return $("//input[@name='style']");
    }
    get rowTabFormatter(){
        return $("//ng-select[@id='app-custom-dropdown-Select-formatter']");
    }
    get rowTabOperations(){
        return $("//ng-select[@id='app-custom-dropdown-Select-operation']");
    }
    get backButton(){
        return $("//button//span[contains(text(),'Back')]");
    }
    get deleteButton(){
        return $("//button[contains(text(),'Delete')]");
    }
    get controller(){
        return $("(//input[@id='context-search'])[2]");
    }
    get controllerOption(){
        return $("(//tr[1]//td[@value='control.friendlyName'])[2]");
    }
    get templateKey(){
        return $("//p[contains(text(),'@member_Address')]");
    }
    get deleteModal(){
        return $("//div[@class='modal-content']");
    }
    get deleteModalContent(){
        return $("//h4[contains(text(),'This record will be deleted. Would you like to continue ?')]");
    }
    get deleteModalYesButton(){
        return $("//button[contains(text(),'Yes')]");
    }
    get deleteModalNoButton(){
        return $("//button[contains(text(),'No')]");
    }
    get totalRowTab(){
        return $("//button[@role='tab']//div[contains(text(),' Total Row ')]");
    }
    get viewIcon(){
        return $("//tbody/tr[1]/td[1]/button[1]");
    }

    async selectType(option){
        try {
            await utilities.clickOnElement(this.type);
            await utilities.clickOnElement($("//div[@role='option']//span[contains(text(),'"+option+"')]"))
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async selectSourceType(option){
        try {
            await utilities.clickOnElement(this.sourceType);
            await utilities.clickOnElement($("//div[@role='option']//span[contains(text(),'"+option+"')]"))
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async getTooltipText(element){
        try {
            await element.moveTo();
            return await utilities.getElementText(this.tooltip);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async enterBodyContentUsingLetterControls(controllerValue){
        try {
            await templatesPage.newBodyEditor.click();
            await browser.keys([ '\uE009', '\uE00D']);    //here we are pressing "Ctrl+space" to get controls
            await this.controller.waitForDisplayed();
            await utilities.enterValueInElement(this.controller, controllerValue);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async navigateToLetterTemplateBody(){
        try {
            await menuOptions.clickOnAdmin();
            await menuOptions.clickOnApplicationSettings();
            await utilities.clickOnElement(menuOptions.letters);
            await utilities.clickOnElement(menuOptions.templates);
            await utilities.clickOnElement(templatesPage.newButton);
            await utilities.clickOnElement(templatesPage.newSourceType);
            await utilities.clickOnElement(templatesPage.auditOption);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async searchControlAndPressDeleteButton (friendlyName){
        try {
            await utilities.enterValueInElement(this.searchFriendlyName, friendlyName);
            await utilities.clickOnElement(this.searchButton);
            await utilities.clickOnElement(this.viewIcon);
            await utilities.clickOnElement(this.deleteButton);
        } catch (error) {
            fail("Failed due to exception " + error); 
        }
    }

    async verifyListColumn(){
        try {
            let flag=true;
            for (let i=2; i<7; i++){
               let actual= await utilities.getElementText($("//th["+i+"]"));
               let expected = list[i];
                if((actual)!=(expected)){
                    flag = false;
                    break;
                }
            } return flag;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

}

module.exports = new ControlsPage();