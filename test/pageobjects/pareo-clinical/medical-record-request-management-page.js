import Page from "../page";

class MedicalRecordRequestManagementPage extends Page {

    get menuOptionMedicalRecordRequestManagement() {
        return $("//*[@id='Medical-Record-Request-Management-app-pareo-clinical-mrr-selection-management']");
    } 
    get selectHeaderText() {
        return $("//div[@class='header-txt']");
    } 
    get selectStatusLanes() {
        return $("//span[@class='icon-configuration']");
    }
    get selectAll() {
        return $("//li[@class='select-all-option']");
    }
    get selectAllCheckbox(){
        return $("//span[@class='ui-chkbox-icon pi ui-clickable pi-check']");
    }
    get selectColumnsResetButton() {
        return $("(//span[contains(text(),'Reset')])[2]");
    }
    get selectAllValidationMessage(){
        return $("//li[contains(text(),'At least one status needs to be selected')]");
    }
    get getTextOfFirstStatusInStatusLane(){
        return $("//ul[2]/li[1]/label");
    }
    get getTextOfSelectedStatusInGrid(){
        return $("//th[3]//span[@class='heading-text single-line-ellipsis']");
    }
    get selectSecondStatusInStatusLane(){
        return $("//li[2]/app-prime-checkbox");
    }
    get getTextOfSecondStatusInStatusLane(){
        return $("//li[2]/label");
    }
    get showFilter(){
        return $("//div[@class='toggle-filter']");
    }
    get filterPanel(){
        return $("//div[@class='main-section']");
    }
    get firstClaimNumberInStatusGrid(){
        return $("//*[@id='1064']/div/div[1]/span");
    }
    get submitButton(){
        return $("//*[@id='notSubmitButton']");
    }
    get resetAll(){
        return $("//span[@class='reset-all']");
    }
    get claimNumberInputFilter(){
        return $("//section[1]//input");
    }
    get providerNameOption(){
        return $("//span[@class='ng-option-label']");
    }
    get datasetNameOption(){
        return $("//div[1]/span[@class='ng-option-label']");
    }
    get expandGridDetail(){
        return $("//*[@id='1064']/div/div[3]/span");
    }
    get selectFiltersButton(){
        return $("//div[@class='select-column-btn'][contains(text(),'Select Filters')]");
    }
    get reviewTypeCheckbox(){
        return $("//li[3]//span[@class='ui-chkbox-icon ui-clickable']");
    }
    get applyButtonForAdditionalFields(){
        return $("//span[@class='link-btn primary-link-button']");
    }
    get uploadDocumentsToClaimIcon(){
        return $("//div[@class='ghost-export-btn']/span[@class='icon-upload']");
    }
    get uploadDocumentsPanel(){
        return $("//div[@class='bulk-panel']");
    }
    get uploadDocumentsPanelHeaderText(){
        return $("//div[contains(text(),'Upload Documents to Claims')]");
    }
    get uploadDocumentsPanelStepOneInstructions(){
        return $("//div[@class='top-header']");
    }
    get uploadPanelClaimNumber(){
        return $("//label[contains(text(),'Claim Number')]");
    }
    get uploadPanelClaimNumberInputField(){
        return $("//input[@formcontrolname='claimNumber']");
    }
    get uploadPanelDateOfService(){
        return $("//label[contains(text(),'Date of Service')]");
    }
    get uploadPanelDateOfServiceInputField(){
        return $("//*[@id='app-date-range-input-Date-of-Service']");
    }
    get uploadPanelProviderName(){
        return $("//div[@class='form-group provider-line-drop']/label[contains(text(),'Provider Name')]");
    }
    get uploadPanelProviderNameInputField(){
        return $("//*[@id='provider']//div[@class='ng-input']");
    }
    get uploadPanelProviderNumber(){
        return $("//label[contains(text(),'Provider Number')]");
    }
    get uploadPanelProviderNumberInputField(){
        return $("//input[@formcontrolname='providerNumber']");
    }
    get uploadPanelMemberFirstName(){
        return $("//label[contains(text(),'Member First Name')]");
    }
    get uploadPanelMemberFirstNameInputField(){
        return $("//*[@id='memberFirstName']");
    }
    get uploadPanelMemberLastName(){
        return $("//label[contains(text(),'Member Last Name')]");
    }
    get uploadPanelMemberLastNameInputField(){
        return $("//*[@id='memberLastName']");
    }
    get uploadPanelMemberDateOfBirth(){
        return $("//label[contains(text(),'Member Date of Birth')]");
    }
    get uploadPanelMemberDateOfBirthInputField(){
        return $("//*[@id='app-date-input-Member-Date-of-Birth']");
    }
    get uploadPanelSearch(){
        return $("//div/app-common-button[1]//span[contains(text(),'Search')]");
    }
    get uploadPanelClear(){
        return $("//div/app-common-button[2]");
    }
    get uploadPanelCancel(){
        return $("//div/app-common-button[3]");
    }
    get claimNumberOnStepTwo(){
        return $("//td[2]//div[@class='single-line-ellipsis']");
    }

    //Functions
    async filterInputField(i){
        try{
            return await $("//section[" + i + "]//input");
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async createLocatorOfStatusGrid(element){
        try{
            return await $("//*[@id='" + element + "']");
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async dataOfRetryLetterGenerationTile(i){
        try{
            return await $("//*[@id='1064']//div[@class='data-container']/div[" + i + "]/div[2]/span");
        }  catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
module.exports = new MedicalRecordRequestManagementPage();