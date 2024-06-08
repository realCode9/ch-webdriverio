import Page from "../page";
import organizationSearchTestData from "../../../resources/global-search/organization-search-test-data.json";

class OrganizationSearchPage extends Page {

    get organizationSearchTab() {
        return $("//li[@role='presentation']//button[contains(text(),'Organization Search')]");
    }
    get claimNumberField() {
        return $("#Claim-Number");
    }
    get auditIDField() {
        return $("//*[@placeholder='Audit Id']");
    }
    get searchButton() {
        return $("//div[@id='vendor-search-main']//button[@class='btn btn-sm btn-primary']");
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
    get columnSelectionButton() {
        return $("//*[@class='btn btn-sm btn-primary column-selection m-l-sm']");
    }
    get auditTypeField() {
        return $("#app-code-list-dropdown-Service-Lines");
    }
    get auditStatusField() {
        return $("#status");
    }
    get auditId() {
        return $("(//tbody//tr//td)[2]");
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
    get auditStatusInfoIcon() {
        return $("//*[@class='form-group']/label/app-info-tooltip");
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
        return $("//*[@class='btn btn-sm btn-success btn-align-right']");
    }
    get deleteButton() {
        return $("//button[@class='btn btn-sm btn-danger btn-align-right']");
    }
    get applyButton() {
        return $("#app-search-column-selection-apply");
    }
    get cancelButton() {
        return $("#app-search-column-selection-cancel");
    }
    get claimNumberText() {
        return $("//*[@id='Claim-#-Id']");
    }
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
    // Functions
    
    async checkOrganizationSearchTabIsOpen() {
        try {
            return await this.organizationSearchTab.getAttribute(organizationSearchTestData.attribute);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async getTooltipText(element) {
        try {
            return await element.getAttribute(organizationSearchTestData.attributeName);
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
    async waitForLoaderToDisappear() {
        try {
            await this.loader.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async isTabElementDisplayed(tabName) {
        try {
            await $("(//*[@role='presentation']//button[contains(text(),'"+tabName+"')])[1]").waitForDisplayed();
           return await $("(//*[@role='presentation']//button[contains(text(),'"+tabName+"')])[1]").isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new OrganizationSearchPage();