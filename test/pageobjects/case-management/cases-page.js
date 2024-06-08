import Page from "../page";
import utilities from "../../../utilities/common-utilities";
import data from "../../../resources/case-management/cases-test-data.json";

class CasesPage extends Page{

    get caseHeader(){
        return $("//div[@class='header-txt']");
    }
    get hideSearchButton(){
        return $("//button[contains(text(),'Hide Search')]");
    }
    get searchInputBox(){
        return $("//div[@class='form-group']//input[@placeholder='Search']");
    }
    get dataSetDropdown(){
        return $("//ng-select[@id='dataset']");
    }
    get dataSetValue(){
        return $("//ng-select[@id='dataset']//div[@class='ng-dropdown-panel-items scroll-host']//div//div[1]");
    }
    get investigator(){
        return $("//app-code-list-dropdown[@placeholder='Select an Investigator']//div//ng-select");
    }
    get investigatorValues(){
        return $("//span[@class='ng-option-label']");
    }
    get allegationCategoryLabel(){
        return $("//label[contains(text(),'Allegation Category')]");
    }
    get allegationCategorydropdown(){
        return $("//ng-select[@id='app-code-list-dropdown-Allegation-Category']");
    }
    get allegationCategoryValue(){
        return $("(//div[@role='option'])[1]");
    }
    get caseStatus(){
        return $("//ng-select[@id='app-code-list-dropdown-Case-Status']");
    }
    get caseStatusValue(){
        return $("//div[@class='ng-dropdown-panel-items scroll-host']//div//div[@class='ng-option']//span[contains(text(),'Open')]");
    }
    get editedCaseStatusValue(){
        return $("//span[contains(text(),'Closed')]");
    }
    get tableCaseStatusValue(){
        return $("//tbody/tr[1]/td[3]/span[1]");
    }
    get claimType(){
        return $("//div[contains(text(),'Select a claim Type')]//following::div[1]//child::input");
    }
    get casesSIUAction(){
        return $("//div[contains(text(),'Select a SIU Action')]//following::div[1]//child::input");
    }
    get specialityType(){
        return $("//*[@id='app-code-list-dropdown-Specialty-Type']");
    }
    get dateRange(){
        return $("//input[@id='app-date-range-input-Date-Range']");
    }
    get searchButton(){
        return $("//body/app-root[1]/div[1]/app-housing[1]/div[1]/div[2]/div[1]/app-case-list[1]/div[1]/div[1]/div[2]/form[1]/app-search-bottom-panel[1]/div[1]/app-common-button[1]/button[1]");
    }
    get columnSelection(){
        return $("(//app-search-bottom-panel//div[@class='filter-btn']//app-common-button[2])[1]");
    }
    get clearButton(){
        return $("//span[contains(text(),'Clear')]");
    }
    get noDataText(){
        return $("//div[contains(text(),'No Data')]");
    }
    get filterAndSearchButton(){
        return $("//button[contains(text(),'Filter & Search')]");
    }
    get filterPanelText(){
        return $("//b[contains(text(),'Allegation Category')]");
    }
    get editLink(){
        return $("//span[contains(text(),'Edit')]");
    }
    get viewEditButton(){
        return $("//tbody/tr[1]/td[11]/span[1]");
    }
    get proceedButton(){
        return $("//button[contains(text(),'Proceed')]");
    }
    get saveFilterButton(){
        return $("//button[@id='app-save-filter-button-save-filter']");
    }
    get filterName(){
        return $("//div[@class='modal-content']//div//div[2]//div//input");
    }
    get saveFilterNameButton(){
        return $("//div[@class='modal-footer']//button[text()='Save']");
    }
    get savedFiltersButton(){
        return $("//button[@id='app-filters-dropdown-saved-filters']");
    }
    get editFilterIcon(){
        return $("//li//div[contains(text(),'KT filter')]//following::div[@class='edit icon']");
    }
    get savedFilterName(){
        return $("//div[@class='filter-name']//div[contains(text(),'KT filter')]");
    }
    get editFilterSaveButton(){
        return $("//span[contains(text(),'Save')]");
    }
    get deleteFilterIcon(){
        return $("//li//div[contains(text(),'KT filter')]//following::div[@class='delete icon']");
    }
    get deleteFilterModalText(){
        return $("//div[contains(text(),'Are you sure you want to delete this search filter')]");
    }
    get yesButtonForDeleteFilter(){
        return $("//span[contains(text(),'Yes')]");
    }
    get crossIconSavedFilterModal(){
        return $("//div[@id='app-filters-dropdown-close-btn']");
    }
    get columnSelectionModalHeaderText(){
        return $("//span[contains(text(),'COLUMN SELECTION')]");
    }
    get availableColumnSearch(){
        return $("//div[@class='row m-t-xsm']//div[1]//input[@placeholder='Search']");
    }
    get plusButton(){
        return $("//button[@id='app-search-column-selection-green-plus-btn-0']");
    }
    get applyButton(){
        return $("//button[contains(text(),'Apply')]");
    }
    get addedColumnOnMainScreen(){
        return $("//div[contains(text(),'"+data.columnName+"')]");
    }
    get addedToProjectSearch(){
        return $("//div[@class='row m-t-xsm']//div[2]//input[@placeholder='Search']");
    }
    get deleteColumnIcon(){
        return $("//button[@id='app-search-column-selection-red-delete-btn-0']");
    }
    get columnSelectionCancelButton(){
        return $("//button[@id='app-search-column-selection-cancel']");
    }

    // xpaths for new case page

    get createNewCaseButton(){
        return $("//span[contains(text(),'Create New Case')]");
    }
    get newCaseHeader(){
        return $("//div[contains(text(),'Case')]");
    }
    get summaryTab(){
        return $("//a[@role='tab']//span[contains(text(),'Summary')]");
    }
    get providerRadioButton(){
        return $("//app-radio-button[@name='provider']");
    }
    get memberRadioButton(){
        return $("//app-radio-button[@name='member']");
    }
    get newCaseId(){
        return $("//input[@id='caseId']");
    }
    get newCaseName(){
        return $("//input[@id='caseName']");
    }
    get dataSetField(){
        return $("//ng-select[@id='dataset']//div[1]//div[1]//div[2]");
    }
    get dropDrownOption(){
        return $("//div[@role='option']");
    }
    get lineOfBusiness(){
        return $("//ng-select[@id='lob']//div[1]//div[1]//div[2]");
    }
    get allegationCategory(){
        return $("//app-code-list-dropdown[@placeholder='Select an Allegation Category']//div//ng-select");
    }
    get payerState(){
        return $("(//ng-select[@id='states'])[1]");
    }
    get providerFirstName(){
        return $("//input[@id='providerFirstName']");
    }
    get providerLastName(){
        return $("//input[@id='providerLastName']");
    }
    get providerNPI(){
        return $("//input[@id='npi']");
    }
    get newSpecialityType(){
        return $("//ng-select[@id='app-code-list-dropdown-Specialty-Type']");
    }
    get newCaseSaveButton(){
        return $("//button[@id='submitButton']");
    }
    get newCaseCancelButton(){
        return $("//button[@id='cancelButton']");
    }
    get caseOpenedDateInputField(){
        return $("//label[contains(text(),'Case Opened Date')]//parent::div/following-sibling::app-date-input");
    }
    get caseOpenedDateCalender(){
        return $("//button[starts-with(@id,'0.7005')]");
    }
    get newCaseDeleteButton(){
        return $("//button[@id='deleteButton']");
    }
    get newCaseDeleteModalHeaderText(){
        return $("//div[contains(text(),'This record will be deleted. Would you like to continue?')]");
    }
    get newCaseDeleteModalYesButton(){
        return $("//button[contains(text(),'Yes')]");
    }
    get duplicateMatchContinueButton(){
        return $("//button[@id='app-duplicate-case-lead-modal-continue']");
    }

    // xpaths for case notes tab

    get caseNotesTab(){
        return $("//span[contains(text(),'Case Notes')]");
    }
    get copyAllNotesButton(){
        return $("//button[contains(text(),'Copy All Notes')]");
    }
    get addNotesTextArea(){
        return $("//form[@class='notes-entry flex-start-column ng-untouched ng-pristine ng-invalid ng-star-inserted']//textarea");
    }
    get addNoteButton(){
        return $("//span[contains(text(),'Add Note')]");
    }
    get editNoteIcon(){
        return $("//div[@class='icon-edit']");
    }
    get editModalTextArea(){
        return $("//body/ngb-modal-window[1]/div[1]/div[1]/app-case-detail-edit-note[1]/div[2]/div[1]/textarea[1]");
    }
    get editModalSaveButton(){
        return $("//button[contains(text(),'Save')]");
    }
    get deleteNoteIcon(){
        return $("//tbody/tr[1]/td[4]/div[1]/div[1]/div[3]");
    }
    get backButton(){
        return $("//span[contains(text(),'Back')]");
    }

    // xpaths for Images Tab

    get imagesTab() {
        return $("(//span[normalize-space()='Images'])[3]");
    }
    get noImageAttachedLabel() {
        return $("//div[normalize-space()='No Images Attached']");
    }



    //Functions

    async enterSearchCriteria(){
       try {
            await utilities.clickOnElement(this.dataSetDropdown);
            await utilities.clickOnElement(this.dataSetValue);
            await utilities.clickOnElement(this.caseStatus);
            await utilities.clickOnElement(this.caseStatusValue);
        } catch (error) {
            fail("Failed due to exception " + error); 
        }
    }
    async elementNotDisplayed(element) {
        try {
          return await element.waitForDisplayed({
            reverse: true
          });
        } catch (error) {
          fail("Failed due to exception " + error);
        }
    }

}
module.exports = new CasesPage();