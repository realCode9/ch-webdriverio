import Page from "../../../../page";
import data from "../../../../../../resources/administration/application-settings/letters/letters-test-data.json";
import utilities from "../../../../../../utilities/common-utilities";

class TemplatesPage extends Page {

    get header(){
        return $("//span[contains(text(),'Letter Templates')]");
    }
    get sourceTypeSearch(){
        return $("//ng-select[@id='app-letter-list-source-type']//input");
    }
    get auditOption(){
        return $("//div[@role='option']//span[contains(text(),'Audit')]");
    }
    get mrrOption(){
        return $("//div[@role='option']//span[contains(text(),'Medical Record Request')]");
    }
    get letterCategorySearch(){
        return $("//ng-select[@id='app-letter-list-letter-category']//input");
    }
    get statementOption(){
        return $("//div[@role='option']//span[contains(text(),'Statement')]");
    }
    get nameSearch(){
        return $("//input[@id='app-letter-list-name']");
    }
    get createdBySearch(){
        return $("//ng-select[@id='app-letter-list-created-by']//input");
    }
    get createdOnDateSearch(){
        return $("//input[@id='app-date-input-dateRange']");
    }
    get searchButton(){
        return $("//button[@id='app-letter-list-search']");
    }
    get clearButton(){
        return $("//button[@id='app-letter-list-clear']");
    }
    get newButton(){
        return $("//button[@id='app-letter-list-new']");
    }
    get sourceTypeColumnData(){
        return $$("//tbody//tr//td[1]");
    }
    get letterCategoryColumnData(){
        return $$("//tbody//tr//td[2]");
    }
    get createTemplateHeader(){
        return $("//span[contains(text(),'Create Letter Template')]");
    }
    get newSourceType(){
        return $("//ng-select[@id='manage-letters-source-type']//input");
    }
    get newLetterCategory(){
        return $("//ng-select[@id='manage-letters-letter-category']//input");
    }
    get newName(){
        return $("//input[@id='manage-letters-name']");
    }
    get groupByProviderType(){
        return $("//label[contains(text(),'Group by Provider Type*')]");
    }
    get newMarginTop(){
        return $("//input[@id='manage-letters-margin-top']");
    }
    get newMarginBottom(){
        return $("//input[@id='manage-letters-margin-bottom']");
    }
    get newMarginLeft(){
        return $("//input[@id='manage-letters-margin-left']");
    }
    get newMarginRight(){
        return $("//input[@id='manage-letters-margin-right']");
    }
    get newMarginUnit(){
        return $("//ng-select[@id='manage-letters-margin-unit']");
    }
    get newPDFFormat(){
        return $("//ng-select[@id='manage-letters-pdf-format-selector']");
    }
    get newTagsDropdown(){
        return $("//ng-select[@id='image-tab']");
    }
    get options(){
        return $("//div[@role='option']");
    }
    get onFirstPage(){
        return $("//div[@class='props']//span[@class='on-right']");
    }
    get onAllPages(){
        return $("//div[@class='props']//span[@class='on-right m-l-sm']");
    }
    get newHeaderEditor(){
        return $("//div[@id='header-editor-inner']");
    }
    get newBodyEditor(){
        return $("//div[@id='body-editor-inner']");
    }
    get newFooterEditor(){
        return $("//div[@id='footer-editor-inner']");
    }
    get newPublishButton(){
        return $("//button[@id='manage-letters-submit-btn']");
    }
    get newDraftButton(){
        return $("//button[@id='manage-letters-draft-btn']");
    }
    get newPreviewButton(){
        return $("//button[@id='manage-letters-preview-btn']");
    }
    get newCancelButton(){
        return $("//button[@id='manage-letters-navigate']");
    }
    get auditController(){
        return $("(//table[@class='table table-striped context-table-hover'])[2]//tr//td[contains(text(),'Audit Id')]")
    }
    get viewButton(){
        return $("//td[@class='text-center no-wrap']//button[@ngbtooltip='View']");
    }
    get deleteButton(){
        return $("//td[@class='text-center no-wrap']//button[@ngbtooltip='Delete']");
    }
    get status(){
        return $("//ng-select[@id='manage-letters-view-type']");
    }
    get previewModalHeader(){
        return $("//span[contains(text(),'Preview Letter')]");
    }
    get previewModalContent(){
        return $("//b[contains(text(),'Enter Medical Record Request ID*')]");
    }
    get previewSubmitButton(){
        return $("//button[contains(text(),'Submit')]");
    }
    get previewCancelButton(){
        return $("//button[@id='manage-letters-dismiss-btn']");
    }
    get previewModalInputField(){
        return $("//input[@id='manage-letters-paste-btn']");
    }
    get previewButtonLoader(){
        return $("//body/app-root[1]/div[1]/app-housing[1]/div[1]/div[2]/div[1]/app-manage-letters[1]/div[1]/ngb-tabset[1]/div[1]/div[1]/div[1]/form[1]/div[7]/div[1]/button[3]/span[2]/*[1]");
    }
    get modal(){
        return $("//div[@class='modal-content']");
    }
    get deleteModalContent(){
        return $("//h4[contains(text(),'Are you sure you wish to delete')]");
    }
    get deleteModalYesButton(){
        return $("//div[@class='modal-footer']//button[contains(text(),'Yes')]");
    }
    get deleteModalNoButton(){
        return $("//div[@class='modal-footer']//button[contains(text(),'No')]");
    }
    get historyTab(){
        return $("//li[@ngbnavitem='history']");
    }
    get historyTabDate(){
        return $("//th[@psortablecolumn='date']");
    }
    get historyTabField(){
        return $("//th[@psortablecolumn='field']");
    }
    get historyTabPreviousValue(){
        return $("//th[contains(text(),'Previous Value')]");
    }
    get historyTabNewValue(){
        return $("//th[contains(text(),'New Value')]");
    }
    get historyTabFieldData(){
        return $("//td[contains(text(),'Status')]");
    }
    get historyTabPreviousValueData(){
        return $("//tr/td[4]");
    }
    get historyTabNewValueData(){
        return $("//tr/td[5]");
    }
    get detailTab(){
        return $("//li[@ngbnavitem='detail']");
    }


    async selectSourceType(type){
        try {
            await this.sourceTypeSearch.click();
            await utilities.clickOnElement(type);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async verifySearchOutput(actual, expected){
        try {
            let flag=true;
            for(let i = 0; i < actual.length; i++){
                if(utilities.getElementText(actual[i])!=(expected)){
                    flag = false;
                    break;
                }
            } return flag;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async enterBodyContentUsingLetterControls(){
        try {
            await utilities.enterValueInElement(this.newBodyEditor, data.letterBody);
            await this.newBodyEditor.click();
            await browser.keys([ '\uE009', '\uE00D']);    //here we are pressing "Ctrl+space" to get controls
            await this.auditController.waitForDisplayed();
            await this.auditController.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async searchAndViewLetterTemplate(){
        try {
            await utilities.enterValueInElement(this.nameSearch, data.newTemplateName);
            await utilities.clickOnElement(this.searchButton);
            await utilities.clickOnElement(this.viewButton);
            await browser.pause(10000);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async moveToNewWindow(){
        try {
            var window = await browser.getWindowHandles();
            await browser.switchToWindow(window[1]);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async moveToParentWindow(){
        try {
            var window = await browser.getWindowHandles();
            await browser.switchToWindow(window[0]);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

}

module.exports = new TemplatesPage();