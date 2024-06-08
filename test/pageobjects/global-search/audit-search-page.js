import Page from "../page";
import commonUtilities from "../../../utilities/common-utilities";
import auditSearchTestData from "../../../resources/global-search/audit-search-test-data.json";
const mongoose = require('mongoose');

class AuditSearchPage extends Page {

    get auditSearchTab() {
        return $("(//li[@role='presentation']//button[contains(text(),'Audit Search')])[1]");
    }
    get defaultMessage() {
        return $("//*[@id='audit-search-main']/div/div[1]/div[1]/div");
    }
    get claimNumberField() {
        return $("#Claim-Number");
    }
    get auditIDField() {
        return $("//*[@placeholder='Audit ID']");
    }
    get datasetField() {
        return $("#dataset");
    }
    get searchButton() {
        return $("//*[@id='audit-search-main']//button[@class='btn btn-sm btn-primary']");
    }
    get clearButton() {
        return $("//button[contains(text(),'Clear')]");
    }
    get editButton() {
        return $("#edit-btn");
    }
    get generateLettorsButton() {
        return $("#letter-generation-button");
    }
    get generateExtractButton() {
        return $("#app-csv-extract-csv-extract");
    }
    get bulkUpdateButton() {
        return $("//*[@class='btn btn-sm btn-warning m-l-sm m-r-sm']");
    }
    get createMRRButton() {
        return $("#bulk-medical-record-button");
    }
    get columnSelectionButton() {
        return $("//*[@class='btn btn-sm btn-primary column-selection']");
    }
    get lineOfBusinessField() {
        return $("#lob");
    }
    get auditTypeField() {
        return $("#app-code-list-dropdown-Service-Lines");
    }
    get auditStatusField() {
        return $("#status");
    }
    get organizationNameField() {
        return $("#organization");
    }
    get stateField() {
        return $("#states");
    }
    get projectField() {
        return $("#projects");
    }
    get conceptIDField() {
        return $("//input[@placeholder='Concept ID']");
    }
    get conceptNameField() {
        return $("#concept");
    }
    get subscriberIDField() {
        return $("//input[@placeholder='Subscriber ID']");
    }
    get dateOfServiceField() {
        return $("#app-date-input-Date-of-Service");
    }
    get memberNumberField() {
        return $("#Member-Number");
    }
    get patientFirstNameField() {
        return $("//*[@name='patientFirstName']");
    }
    get patientLastNameField() {
        return $("//*[@name='patientLastName']");
    }
    get providerNameField() {
        return $("#Provider-Name");
    }
    get providerTinField() {
        return $("//*[@name='providerTin']");
    }
    get providerNumberField() {
        return $("//*[@name='providerNumber']");
    }
    get dateEnteredField() {
        return $("#app-date-input-Date-Entered");
    }
    get filterLabel() {
        return $("//p[@class='filterLabelText']");
    }
    get resultTable() {
        return $("//div[@class='app-audit-search-results-table']");
    }
    get auditId() {
        return $("(//tbody[@class='p-element p-datatable-tbody']//tr//td)[2]");
    }
    get claimNumber() {
        return $("(//tbody//tr//td)[1]");
    }
    get noData() {
        return $("//div[contains(text(),'No Data')]");
    }
    get loader() {
        return $("//*[@id='pareo-spinner']/div/div");
    }
    get searchButtonTooltipText() {
        return $("//*[@class='tooltip-inner']");
    }
    get datasetInfoIcon() {
        return $("//*[@id='audit-search-main']/div/div/div[2]/div[3]/div/label/app-info-tooltip");
    }
    get auditStatusInfoIcon() {
        return $("//*[@id='audit-search-main']/div/div/div[3]/div[2]/div/label/app-info-tooltip");
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
    get cancelButtonLetterModal() {
        return $("//button[contains(text(),'Cancel')]");
    }
    get inlineErrorMessage() {
        return $("//*[@class='m-l-sm align-text']");
    }

    // Bulk Update Modal Elements

    get bulkUpdateModal() {
        return $("//*[@class='modal-content']");
    }
    get bulkUpdateText() {
        return $("//div[@class='header-txt']");
    }
    get auditTypeFieldBulkUpdate() {
        return $("(//ng-select[@id='app-code-list-dropdown-Service-Lines'])[2]");
    }
    get auditStatusFieldBulkUpdate() {
        return $("(//ng-select[@id='status'])[2]");
    }
    get auditIdFieldBulkUpdate() {
        return $("#ids");
    }
    get internalCommentField() {
        return $("#comment");
    }
    get notesField() {
        return $("#note");
    }
    get updateButton() {
        return $("(//div[@class='bulk-update-form-wrapper']//button)[1]");
    }
    get cancelButtonBulkUpdate() {
        return $("(//div[@class='bulk-update-form-wrapper']//button)[2]");
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
    get availableColumnList() {
        return $("//div[@class='ibox-content']/div/div[1]/app-column-selection-infinite-list/div/div[2]/div/div");
    }
    get addedToProjectSearchField() {
        return $("#app-column-selection-infinite-list-Added-to-Project");
    }
    get addedToProjectList() {
        return $("//div[@class='ibox-content']/div/div[2]/app-column-selection-infinite-list/div/div[2]/div/div");
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
    get cancelButtonColumnSelection() {
        return $("#app-search-column-selection-cancel");
    }

    //Medical Record Request

    get mrrYesButton() {
        return $("//button[text()=' Yes ']");
    }
    get mrrNoButton() {
        return $("//button[text()=' No ']");
    }
    get mrrRequestDate() {
        return $("#Request-Date-Id");
    }
    get medicalRecordTab() {
        return $("//div[@class='ibox-content']/ul/li[10]");
    }
    // Audit Detail Screen Elements

    get imagesTab() {
        return $("(//span[contains(text(),'Images')])[3]");
    }
    get cobTab() {
        return $("//span[contains(text(),'COB')]");
    }
    get otherAuditsTab() {
        return $("//span[contains(text(),'Other Audits')]");
    }
    get mainTab() {
        return $("#Main");
    }
    get transactionTab() {
        return $("//span[contains(text(),' Transactions')]");
    }
    get invoiceTab() {
        return $("//*[@text='Invoice']");
    }
    get historyTab() {
        return $("//*[@text='History']");
    }
    get notesTab() {
        return $("//*[@text='Notes']");
    }
    get internalCommentsTab() {
        return $("//*[@text='Internal Comments']");
    }
    get imagesSubTab() {
        return $("(//*[@text='Images'])[2]");
    }
    get qualityTab() {
        return $("(//*[@text='Quality'])[2]");
    }
    get eventsTab() {
        return $("//*[@text='Events']");
    }
    get ibrTab() {
        return $("//*[@text='IBR']");
    }
    get claimSummary() {
        return $("//span[contains(text(),' Claim Summary ')]");
    }
    get auditInfo() {
        return $("//span[contains(text(),' Audit Information ')]");
    }
    get claimNumberText() {
        return $("//*[@id='Claim-#-Id']");
    }

    //Functions

    async checkAuditSearchTabIsOpen() {
        try {
            return await this.auditSearchTab.getAttribute(auditSearchTestData.attribute);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async getTooltipText(element) {
        try {
            return await element.getAttribute(auditSearchTestData.attributeName);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async checkSearchTooltipIsDisplayed() {
        try {
            await this.searchButton.moveTo();
            return await this.searchButtonTooltipText.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async getSearchResultTableRowsCount() {
        try {
            let actualRowCount = await this.totalSearchResultRows.length;
            return actualRowCount;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async verifyExtractDownload() {
        try {
            const presentDate = await commonUtilities.getCurrentDate();
            const fileName = 'Audit' + ' - ' + presentDate + '.csv';
            if (commonUtilities.checkIfFileExists(fileName)) {
                return true;
            }
            return fileName;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async deletingMedicalRecordRequest(number)
    {
        try {
            const MyMRRModel = mongoose.model('medicalrecordrequests', new mongoose.Schema({ name: String }));
            await MyMRRModel.deleteOne({ "payerClaim.number": ''+number+'' });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async isTabElementDisplayed(tabName) {
        try {
            await $("//*[@role='tablist']//button[contains(text(),'"+tabName+"')]").waitForDisplayed();
           return await $("//*[@role='tablist']//button[contains(text(),'"+tabName+"')]").isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new AuditSearchPage();