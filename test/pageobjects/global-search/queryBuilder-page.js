import Page from "../page";
import data from "../../../resources/global-search/query-builder-test-data.json";
import utilities from "../../../utilities/common-utilities";

class QueryBuilderPage extends Page {

    get queryBuilderTab(){
        return $("//li[@role='presentation']//button[contains(text(),'Query Builder')]");
    }
    get queryBuilderSearchPanel(){
        return $("//div[@id='query-builder']");
    }
    get inventoryType(){
        return $("//ng-select[@id='app-query-builder-collection']");
    }
    get dataSet(){
        return $("//ng-select[@id='dataset']");
    }
    get sortBy(){
        return $("//ng-select[@id='app-query-builder-sortBy']");
    }
    get clearButton(){
        return $("//button[@id='app-query-builder-clearQuery']");
    }
    get selectOptions(){
        return $("//div[@role='option']//span[contains(text(),'equals')]");
    }
    get saveButton(){
        return $("//button[@id='app-query-builder-saveQuery']");
    }
    get searchButton(){
        return $("//button[@id='app-query-builder-executeSearch']");
    }
    get andButton(){
        return $("//section[@class='query-builder row']//button[contains(text(),'And')]");
    }
    get orButton(){
        return $("//section[@class='query-builder row']//button[contains(text(),'Or')]");
    }
    get queryGroup(){
        return $("//section[@class='query-builder row']//button[@ngbtooltip='Add query group']");
    }
    get queryFilter(){
        return $("//section[@class='query-builder row']//button[@ngbtooltip='Add filter']");
    }
    get queryClearButton(){
        return $("//section[@class='query-builder row']//button[contains(text(),'Clear')]");
    }
    get queryDropDownField(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Field']");
    }
    get SecondQueryDropDownField(){
        return $("(//ng-select[@id='app-custom-dropdown-Select-Field'])[2]");
    }
    get queryDropDownOption(){
        return $("//div[@role='option']//span[contains(text(),'Audit Type')]");
    }
    get columnSelection(){
        return $("//button[@id='app-query-builder-selectColumn']");
    }
    get selectQuerySearchType(){
        return $("//ng-select[@id='app-code-list-dropdown-Service-Lines']");
    }
    get ruleName(){
        return $("//div[@class='modal-content']//div//input[@name='queryName']");
    }
    get ruleDescription(){
        return $("//div[@class='modal-content']//textarea[@id='comment']");
    }
    get modalSaveButton(){
        return $("//app-common-button[@id='saveQuery']//button[@id='notSubmitButton']");
    }
    get modalCancelButton(){
        return $("//app-common-button[@id='cancelQuery']//button[@id='notSubmitButton']");
    }
    get saveRuleHeader(){
        return $("//span[@class='default-color h6 title']");
    }
    get ruleNameInlineErrorMassage(){
        return $("//span[contains(text(),'Please enter rule name.')]");
    }
    get ruleDescriptionInlineErrorMassage(){
        return $("//span[contains(text(),'Please enter rule description.')]");
    }
    get loader(){
        return $("//*[@id='pareo-spinner']/div/div");
    }
    get columnSelectionButton(){
        return $("//button[@id='app-query-builder-selectColumn']");
    }
    get columnSelectionModalHeaderText(){
        return $("//span[contains(text(),'COLUMN SELECTION')]");
    }
    get availableColumnSearch(){
        return $("//div[@class='row m-t-xsm']//div[1]//input[@placeholder='Search']");
    }
    get plusButton(){
        return $("//button[@data-cy='add-column-button']");
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
        return $("//button[@class='btn btn-sm btn-danger btn-align-right']");
    }
    get columnSelectionCancelButton(){
        return $("//button[@id='cancel-btn']");
    }
    get auditTypeColumnValue(){
        return $("//tbody/tr[1]/td[9]/div[1]");
    }
    get allowedColumn(){
        return $("//th[contains(text(),' Allowed ')]");
    }
    get patientNameColumnValue(){
        return $("//tbody/tr[1]/td[4]/div[1]");
    }
    get updateButton(){
        return $("//app-common-button[@id='updateQuery']//button");
    }
    get selectOperator(){
        return $("//ng-select[@id='app-custom-dropdown-Select-Operator']");
    }
    get secondSelectOperator(){
        return $("(//ng-select[@id='app-custom-dropdown-Select-Operator'])[2]");
    }
    get secondSearchTypeInputField(){
        return $("//input[@class='form-control']");
    }
    get queryListTab(){
        return $("//li[@role='presentation']//button[contains(text(),'Query List')]");
    }
    get searchOutputTable(){
        return $("//app-dynamic-results-table");
    }
    get toaster(){
        return $("(//div[contains(@class, 'snotifyToast')])[1]")
    }

    async selectQueryData(searchType , searchTypeValue){
        try {
            await utilities.clickOnElement(this.queryDropDownField);
            await $("//div[@role='option']//span[contains(text(),'"+searchType+"')]").click();
            await utilities.clickOnElement(this.selectOperator);
            await utilities.clickOnElement(this.selectOptions);
            await utilities.clickOnElement(this.selectQuerySearchType);
            await $("//div[@role='option']//span[contains(text(),'"+searchTypeValue+"')]").click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async selectSecondQueryData(searchType , searchTypeValue){
        try {
            await utilities.clickOnElement(this.SecondQueryDropDownField);
            await $("//div[@role='option']//span[contains(text(),'"+searchType+"')]").click();
            await utilities.clickOnElement(this.secondSelectOperator);
            await utilities.clickOnElement(this.selectOptions);
            await utilities.enterValueInElement(this.secondSearchTypeInputField, searchTypeValue);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async enterRuleData(){
        try {
            await utilities.enterValueInElement(this.ruleName, data.ruleName);
            await utilities.enterValueInElement(this.ruleDescription, data.ruleDescription);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async getSearchOutputColumn(){
        try {
            for(let i=0; i<7; i++){
                await utilities.clickOnElement(this.deleteColumnIcon);
            }
                await utilities.enterValueInElement(this.availableColumnSearch, data.columnName);
                await utilities.clickOnElement(this.plusButton);
                await utilities.clickOnElement(this.applyButton);
                return await utilities.getElementText(this.auditTypeColumnValue);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async andFilterOutput(){
        try {
            let patientName = await utilities.getElementText(this.patientNameColumnValue);
            let auditType = await utilities.getElementText(this.auditTypeColumnValue);
             if((patientName==(data.searchPatientFirstNameOption))&&(auditType==(data.auditType))){
                return true;
             }
             else{
                return false;
             }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async orFilterOutput(){
        try {
             if((await utilities.getElementText(this.patientNameColumnValue)== data.searchPatientFirstNameOption)|
             (await utilities.getElementText(this.auditTypeColumnValue)==data.auditType)){
               return true;
             }
             else{
                return false;
             }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async waitIfLoaderAppears(){
        try {
            if(await utilities.isElementDisplayed(this.loader)){
                await utilities.waitUntilLoaderFinishedLoading(this.loader);
                }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

}
module.exports = new QueryBuilderPage();