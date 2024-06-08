import Page from "../page";
import data from "../../../resources/extracts/extracts-test-data.json";
import utilities from "../../../utilities/common-utilities";

class ExtractsPage extends Page {

    get headerText() {
        return $("//div[contains(text(),'Extracts')]");
    }
    get extractTypeDropdownPlaceholder() {
        return $("//ng-select[@id='app-custom-dropdown-Please-select-an-Extract-Type']//input");
    }
    get organizationDropdownPlaceholder() {
        return $("//ng-select[@id='app-custom-dropdown-Please-select-an-Organization']//input");
    }
    get extractNameDropdownPlaceholder() {
        return $("//ng-select[@id='app-custom-dropdown-Please-select-an-Extract-Name']//input");
    }
    get crossIcon(){
        return $("//span[@title='Clear all']");
    }
    get checksOption() {
        return $("//span[contains(text(),'Checks')]");
    }
    get countyCare() {
        return $("//span[contains(text(),'County Care')]");
    }
    get extractNameOption() {
        return $("//span[contains(text(),'"+data.newExtractName+"')]");
    }
    get newButton() {
        return $("//button[@id='notSubmitButton']//span[contains(text(),'New')]");
    }
    get extractDetailHeader() {
        return $("//span[contains(text(),'Extract Detail')]");
    }
    get extractTypeInputField() {
        return $("//label[contains(text(),'Extract Type*')]//following::input[@name='extractType']");
    }
    get organizationInputField() {
        return $("//label[contains(text(),'Organization*')]//following::input[@name='organization']");
    }
    get extractNameInputField() {
        return $("//label[contains(text(),'Extract Name*')]//following::input[@name='extractName']");
    }
    get mongodbCollectionDropdown() {
        return $("//ng-select[@id='mongodbCollection']");
    }
    get dropdownOption() {
        return $("//div[@role='option']");
    }
    get availableRights() {
        return $("//ng-select[@id='availableRights']");
    }
    get availableRightsInputField() {
        return $("//ng-select[@id='availableRights']//input");
    }
    get updateAuditType() {
        return $("//ng-select[@id='app-code-list-dropdown-Service-Lines']");
    }
    get updateAuditTypeOption() {
        return $("//div[@role='option']//span[contains(text(),'Clinical Audit')]");
    }
    get updateAuditStatus() {
        return $("//ng-select[@id='status']");
    }
    get rightToggle(){
        return $("//button[@id='rightToggle-button']//div[@class='mdc-switch__icons']");
    }
    get activeToggle() {
        return $("//button[@id='active-button']//div[@class='mdc-switch__icons']");
    }
    get description() {
        return $("//textarea[@id='description']");
    }
    get fieldOrderTooltip() {
        return $("//app-info-tooltip[@tooltip='Drag and drop fields to order them']");
    }
    get fieldOrder() {
        return $("//div[@id='drag-drop-list']");
    }
    get saveExtract() {
        return $("//button[@id='new-extract']");
    }
    get cancelExtractButton() {
        return $("//button[@id='cancel-extract']");
    }
    get listExtractType() {
        return $("(//tbody/tr[1]/td[1])[1]");
    }
    get listOrganization() {
        return $("(//tbody/tr[1]/td[2])[1]");
    }
    get listExtractName() {
        return $("(//tbody/tr[1]/td[3])[1]");
    }
    get editIcon(){
        return $("//div[@class='p-element icon-edit ng-star-inserted']");
    }
    get deleteButton(){
        return $("//button[@class='btn btn-danger btn-sm ng-star-inserted']");
    }
    get deleteModal(){
        return $("app-modal");
    }
    get deleteModalText(){
        return $("//h4[contains(text(),'Confirmation Request')]");
    }
    get deleteYesButton(){
        return $("//button[contains(text(),'Yes')]");
    }
    get deleteNoButton(){
        return $("//button[contains(text(),'No')]");
    }
    get historyIcon(){
        return $("//div[@class='icon']//div[@ptooltip='History']");
    }
    get historyHeaderText(){
        return $("//div[contains(text(),'Extract History')]");
    }
    get userInputField(){
        return $("//ng-select[@id='app-custom-dropdown-Please-select-a-User']//input");
    }
    get statusInputField(){
        return $("//ng-select[@id='app-custom-dropdown-Please-select-a-status']//input");
    }
    get historyClearButton(){
        return $("//app-common-button[@label='Clear']");
    }
    get historySearchButton(){
        return $("//app-common-button[@label='Search']");
    }
    get historyCancelButton(){
        return $("//app-common-button[@label='Cancel']");
    }
    get historyColumn(){
        return $$("(//thead[@class='ui-table-thead'])[1]//th/div");
    }
    get runIcon(){
        return $("//div[@id='app-csv-extract-run']");
    }
    get downloadSpinner() {
        return $("//div[@class='spinner']//span//*[name()='svg']");
    }
    get userColumnOption() {
        return $("//div[@role='option']//span[contains(text(),'pareo')]");
    }
    get statusColumnCompleteOption() {
        return $("//div[@role='option']//span[contains(text(),'Complete')]");
    }
    get statusColumnFailedOption() {
        return $("//div[@role='option']//span[contains(text(),'Failed')]");
    }
    get userColumnListData() {
        return $("(//tbody[@class='ui-table-tbody'])[2]/tr[1]/td[2]");
    }
    get userStatusListData() {
        return $("(//tbody[@class='ui-table-tbody'])[2]/tr[1]/td[4]");
    }

    async verifyFileDownload() {
        try {
          await utilities.clickOnElement(this.runIcon)
          await this.downloadSpinner.waitForDisplayed({ reverse: true });
    
          const myFile = data.downloadFile;
    
          // See if the file exists
          if (utilities.checkIfFileExists(myFile)) {
            return true;
          }
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
    
}
module.exports = new ExtractsPage();