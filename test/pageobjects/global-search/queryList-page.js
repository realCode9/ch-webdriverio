import Page from "../page";
import utilities from "../../../utilities/common-utilities";
import data from "../../../resources/global-search/query-builder-test-data.json";

class QueryList extends Page{

    get queryListTab(){
        return $("//li[@role='presentation']//button[contains(text(),'Query List')]");
    }
    get searchField(){
        return $("//input[@placeholder='Search']");
    }
    get queyName(){
        return $("//th[contains(text(),'Query Name')]");
    }
    get description(){
        return $("//th[contains(text(),'Query Name')]");
    }
    get auditIdField(){
        return $("//input[@id='app-query-list-auditID']");
    }
    get claimNumberField(){
        return $("//input[@id='Claim-Number']");
    }
    get clearButton(){
        return $("//button[text()='Clear']");
    }
    get searchButton(){
        return $("//button[@id='app-query-list-serachAudit']");
    }
    get bulkMedicalRecordButton(){
        return $("//button[@id='bulk-medical-record-button']");
    }
    get generateExtractButton(){
        return $("//button[@id='app-query-list-largeExtract']");
    }
    get searchIcon(){
        return $("//button[@id='app-query-list-searchData0']");
    }
    get editQueryIcon(){
        return $("//button[@id='app-query-list-editQuery0']");
    }
    get generateExtractIcon(){
        return $("//button[@id='app-query-list-extract0']");
    }
    get deleteIcon(){
        return $("//button[@id='app-query-list-deleteQuery0']");
    }
    get tableDataQueryName(){
        return $("//tbody//tr//td[1]");
    }
    get searchResult(){
        return $("//app-dynamic-results-table");
    }
    get tableDescription(){
        return $("(//tbody)[1]//tr//td[2]");
    }
    get deleteModal(){
        return $("//div[@class='modal-body']");
    }
    get deleteModalYesButton(){
        return $("//div[@class='modal-footer']//button[contains(text(),'Yes')]");
    }
    get deleteModalNoButton(){
        return $("//div[@class='modal-footer']//button[contains(text(),'No')]");
    }
    get tableOutputClaimNumber(){
        return $("//div[contains(text(),'"+data.claimNumber+"')]");
    }

    async verifyExtractDownload() {
        try {
            const presentDate = await utilities.getCurrentDate();
            const fileName = 'Audit' + ' - ' + presentDate + '.csv';
            if (utilities.checkIfFileExists(fileName)) {
                return true;
            }
            return fileName;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}

module.exports = new QueryList();