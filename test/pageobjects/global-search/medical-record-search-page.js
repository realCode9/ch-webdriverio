import Page from "../page";
import commonUtilities from "../../../utilities/common-utilities";

class MedicalRecordSearchPage extends Page {
    get medicalRecordSearchTab() {
        return $("//li[@role='presentation']//button[contains(text(),'Medical Record Search')]");
    }
    get defaultMessage() {
        return $("//*[@id='medical-record-search-main']/div/div[1]/div[1]/div");
    }
    get medicalRecordIDField() {
        return $("#Medical-Record-ID");
    }
    get claimNumberField() {
        return $("#Claim-Number");
    }
    get datasetField() {
        return $("#dataset");
    }
    get datasetInfoIcon() {
        return $("//*[@id='medical-record-search-main']/div/div/div[2]/div[3]/div/label/app-info-tooltip");
    }
    get medicalRecordStatusField() {
        return $("#status");
    }
    get lineOfBusinessField() {
        return $("#lob");
    }
    get memberNumberField() {
        return $("#Member-Number");
    }
    get reviewTypeField() {
        return $("#app-code-list-dropdown-Query-Types");
    }
    get subscriberIDField() {
        return $("//*[@name='searchParamEnum.subscriberId']");
    }
    get providerNameField() {
        return $("//*[@name='searchParamEnum.providerName']");
    }
    get providerNumberField() {
        return $("//*[@name='searchParamEnum.providerNumber']");
    }
    get providerTinField() {
        return $("//*[@name='searchParamEnum.providerTin']");
    }
    get patientFirstNameField() {
        return $("//*[@name='searchParamEnum.patientFirstName']");
    }
    get patientLastNameField() {
        return $("//*[@name='searchParamEnum.patientLastName']");
    }
    get generateLettersButton() {
        return $("#letter-generation-button");
    }
    get generateExtractButton() {
        return $("#app-csv-extract-csv-extract");
    }
    get searchButton() {
        return $("//*[@id='medical-record-search-main']//button[@class='btn btn-sm btn-primary']");
    }
    get searchButtonTooltipText() {
        return $("//*[@class='tooltip-inner']");
    }
    get clearButton() {
        return $("//button[contains(text(),'Clear')]");
    }
    get editButton() {
        return $("#edit-btn");
    }
    get filterLabel() {
        return $("//*[@class='filterLabelText']");
    }
    get resultTable() {
        return $("//div[@class='app-audit-search-results-table']");
    }
    get claimNumber() {
        return $("(//tbody//tr//td)[1]");
    }
    get mrRequestID() {
        return $("(//tbody//tr//td)[2]");
    }
    get columnSelectionButton() {
        return $("//*[@class='btn btn-sm btn-primary column-selection']");
    }
    get noData() {
        return $("//div[contains(text(),'No Data')]");
    }
    get pageSize() {
        return $("//*[@class='pageSizeOptions']/div/ng-select");
    }
    get totalSearchResultRows() {
        return $$("//tr[@data-cy='audit-list']");
    }
    get pagination() {
        return $("//*[@class='pagination pagination-sm']");
    }
    get loader() {
        return $("//*[@id='pareo-spinner']/div/div");
    }

    // Column Selection Modal Elements
    get columnSelectionModal() {
        return $("//div[@class='modal-content']");
    }
    get columnSelectionText() {
        return $("//*[contains(text(),'COLUMN SELECTION')]");
    }
    get availableColumnSearchField() {
        return $("#app-column-selection-infinite-list-Available-Columns");
    }
    get addedToProjectSearchField() {
        return $("#app-column-selection-infinite-list-Added-to-Project");
    }
    get columnHeaders() {
        return $$("//thead[@class='p-datatable-thead']/tr/th");
    }
    get addButton() {
        return $("//*[@class='btn btn-sm btn-success btn-align-right ng-star-inserted']");
    }
    get deleteButton() {
        return $("//button[@class='btn btn-sm btn-danger btn-align-right ng-star-inserted']");
    }
    get applyButton() {
        return $("#app-search-column-selection-apply");
    }
    get cancelButton() {
        return $("#app-search-column-selection-cancel");
    }

    //Generate Letters Modal Elements
    get generateLettersModal() {
        return $("//div[@class='modal-dialog modal-dialog-centered']/div");
    }
    get generateLettersText() {
        return $("//div[@class='modal-content']//div[@class='default-border header']");
    }
    get letterCategoryField() {
        return $("//ng-select[@placeholder='Select Letter Category']");
    }
    get templateNameField() {
        return $("#app-custom-dropdown-Select-Template-Name");
    }
    get checkBulkUpdateText() {
        return $("//*[@class='m-r-sm m-t-3']");
    }
    get checkBox() {
        return $("//*[@name='cb']");
    }
    get generateLettersButtonOnModal() {
        return $("//button[contains(text(),'Generate Letters')]");
    }
    get inlineErrorMessage() {
        return $("//*[@class='m-l-sm align-text']");
    }
    get generateLetterCancelButton() {
        return $("//button[contains(text(),'Cancel')]");
    }
    async verifyExtractDownload() {
        try {
            const presentDate = await commonUtilities.getCurrentDate();
            const fileName = 'Medical Request' + ' - ' + presentDate + '.csv';
            if (commonUtilities.checkIfFileExists(fileName)) {
                return true;
            }
            return fileName;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new MedicalRecordSearchPage();