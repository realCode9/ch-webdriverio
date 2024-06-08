import Page from "../page";
import commonFunctions from "../../../utilities/common-utilities";
import claimTestData from "../../../resources/pareo-clinical/claim-selection-management-test-data.json";
const mongoose = require('mongoose');

class ClaimSelectionManagementPage extends Page {
    get datasetDropdown() {
        return $("#dataset");
    }
    get queryTypeDropdown() {
        return $("#app-code-list-dropdown-Query-Types");
    }
    get configureClaimDatafields() {
        return $("#app-shared-dropdown-Select-Datafields");
    }
    get hideSearchButton() {
        return $("#app-search-top-panel-hide-show-search");
    }
    get filterAndSearchButton() {
        return $("#app-search-top-panel-hide-show-search");
    }
    get savedFiltersDropdownButton() {
        return $("#app-filters-dropdown-saved-filters");
    }
    get savedFiltersDropdown() {
        return $("//div[@class='filter-container']");
    }
    get savedFilterNameValues() {
        return $$("//div[@class='name-tag single-line-ellipsis']");
    }
    get editFilterIcon() {
        return $$("//div[@class='edit icon']");
    }
    get deleteFilterIcon() {
        return $$("//div[@class='delete icon']");
    }
    get editFilterLabel() {
        return $("//div[@class='edit-search']");
    }
    get editSaveButton() {
        return $("//span[contains(text(),'Save')]");
    }
    get editCancelButton() {
        return $("//span[contains(text(),'Cancel')]");
    }
    get deleteYesButton() {
        return $("//button[@class='red-btn']");
    }
    get deleteNoButton() {
        return $("//button[@class='white-btn']");
    }
    get crossIconSavedFiltersDropdown() {
        return $("#app-filters-dropdown-close-btn");
    }
    get searchButtonQueryListing() {
        return $("#app-search-bottom-panel-search-btn");
    }
    get clearButtonQueryListing() {
        return $("#app-search-bottom-panel-search-clear");
    }
    get saveFilterButton() {
        return $("#app-save-filter-button-save-filter");
    }
    get claimPaidDateRange() {
        return $("#app-date-range-input-Claim-Paid-Date-Range");
    }
    get filterSearchSection() {
        return $("//div[@class='search-wrapper']");
    }
    get querySearchResultTable() {
        return $("//div[@class='query-table']");
    }
    get noSearchResults() {
        return $("//div[@class='title']");
    }
    get viewClaimsButton() {
        return $("//*[@class='ui-button-raised custom-btn primary ui-button ui-widget ui-state-default ui-corner-all ui-button-text-empty']//span[contains(text(),'View Claims')]");
    }
    get requestRecordsButton() {
        return $("//span[contains(text(),'Request Records')]");
    }
    get selectAllCheckboxOfQueries() {
        return $("(//div[@role='checkbox'])[1]");
    }
    get unselectedDatasetError() {
        return $("(//div[@class='error-txt'])[1]");
    }
    get unselectedQueryTypeError() {
        return $("(//div[@class='error-txt'])[2]");
    }
    get invalidDateRangeError() {
        return $("//div[@class='error-txt']");
    }
    get incorrectDateRangeTooltip() {
        return $("//*[@class='pointer']");
    }
    get incorrectDateRangeTooltipError() {
        return $("//*[@class='show tooltip bs-tooltip-top']");
    }
    get querySaveFilterModal() {
        return $("//div[@class='save-filter-modal']");
    }
    get addName() {
        return $("#app-save-filter-button-add-name");
    }
    get saveFilterSaveButton() {
        return $("#app-save-filter-button-save");
    }
    get saveFilterCancelButton() {
        return $("#app-save-filter-button-cancel");
    }
    get expandCalendarView() {
        return $("//div[@class='expand-collapse']");
    }
    get collapseCalendarView() {
        return $("//span[@class='hover-link']");
    }
    get queryExpandedView() {
        return $("//tr[@class='expanded']");
    }
    get queryNameColumnFilter() {
        return $("//thead[@class='ui-table-thead']//th[4]//div[@class='icon-column-filter']");
    }
    get queryNumColumnFilter() {
        return $("//thead[@class='ui-table-thead']//th[2]//div[@class='icon-column-filter']");
    }
    get appliedColumnFilterIcon() {
        return $("//*[@class='icon-column-filter selected']");
    }
    get columnFilterSection() {
        return $("//div[@class='table-filter-wrapper arrow_box']");
    }
    get columnFilterSearchBox() {
        return $("(//div[@class='search-field'])/input[1]");
    }
    get columnFilterOptions() {
        return $$("//div[@class='selection-group']//*[@class='ui-chkbox-label']");
    }
    get columnFilterCheckBox() {
        return $$("//div[@class='selection-group']//*[@class='ui-chkbox ui-widget']");
    }
    get columnFilterApplyButton() {
        return $("//div[@class='bottom-section']/div/div[1]");
    }
    get columnFilterCancelButton() {
        return $("//div[@class='bottom-section']/div/div[2]");
    }
    get columnFilterClearButton() {
        return $("//div[@class='bottom-section']/div[1]");
    }
    get queryName() {
        return $("(//tbody//tr//td)[4]");
    }
    get queryNumber() {
        return $("(//tbody//tr//td)[2]");
    }
    get pageSizeInput() {
        return $("//input[@placeholder=' ']");
    }
    get pagination() {
        return $("//ul[@class='pagination pagination-sm']");
    }
    get totalSearchResultRows() {
        return $$("//*[@class='ui-table-scrollable-body']/table/tbody/tr");
    }
    get loader() {
        return $("//*[@id='pareo-spinner']/div/div");
    }
    get arrowIcon() {
        return $("//div[@class='line-txt']/span")
    }
    get inlineErrorMessage() {
        return $("//div[@class='inline-error']");
    }
    get errorToaster() {
        return $("//div[@class='snotifyToast__inner']");
    }

    //Claim Detail Screen 
    get selectClaimsText() {
        return $("//div[@class='header-txt']");
    }
    get filterSection() {
        return $("//div[@class='filter-section']");
    }
    get listSection() {
        return $("//div[@class='list-section']");
    }
    get selectClaimsTotalSearchResultRows() {
        return $$("//div[@class='wrapper']/table/tbody/tr");
    }
    get hideShowButton() {
        return $("//div[@class='toggle-filter']");
    }
    get selectFiltersButton() {
        return $("(//div[@class='main-container'])[1]");
    }
    get selectFiltersDropdown() {
        return $("//div[@class='main-container']/div[2]");
    }
    get savedFiltersLink() {
        return $("//div[@class='saved-filters-text']");
    }
    get filterDataList() {
        return $$("//div[@class='main-container']/div[2]/div/ul/li/label");
    }
    get selectFilterCheckBox() {
        return $$("//div[@class='main-container']//*[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']");
    }
    get billTypeField() {
        return $("//*[@id='scroll-left-section']/form/section/app-filter-dynamic-container/app-multi-input-filter/div/div/input");
    }
    get filterClearButton() {
        return $("//span[contains(text(),'Clear')]");
    }
    get filterApplyButton() {
        return $("//span[contains(text(),'Apply')]");
    }
    get filterCancelButton() {
        return $("//span[contains(text(),'Cancel')]");
    }
    get filterBySearchButton() {
        return $("//*[@label='Search'] ");
    }
    get filterBySaveButton() {
        return $("//span[@class='save']");
    }
    get selectClaimSaveFilterModal() {
        return $("//div[@class='save-filter-modal']");
    }
    get selectClaimSaveFilterText() {
        return $("(//div[@class='header-txt'])[2]");
    }
    get selectClaimfilterModalCancelButton() {
        return $("//button[@class='ui-button-raised custom-btn secondary app-common-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-empty']");
    }
    get selectClaimfilterModalSaveButton() {
        return $("(//button[@class='ui-button-raised custom-btn primary app-common-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-empty'])[2]");
    }
    get selectClaimfilterModalTextField() {
        return $("//input[@id='select-claim-filtersmodifiersundefined']");
    }
    get filterByResetAllButton() {
        return $("//span[@class='reset-all']");
    }
    get filterByRemoveAllButton() {
        return $("//span[@class='delete']");
    }
    get deleteButton() {
        return $("//span[@class='icon-delete']");
    }
    get selectColumnsButton() {
        return $("(//div[@class='main-container'])[2]");
    }
    get selectColumnsSection() {
        return $("//div[@class='coloumn-list-container']");
    }
    get selectColumnsApplyButton() {
        return $("//span[contains(text(),'Apply')]");
    }
    get selectColumnsCancelButton() {
        return $("//span[contains(text(),'Cancel')]");
    }
    get selectColumnsClearButton() {
        return $("//span[contains(text(),'Clear')]");
    }
    get selectColumnsSelectAllCheckBox() {
        return $("//div[@class='scroll-column']//div[@class='ui-chkbox ui-tristatechkbox ui-widget']");
    }
    get selectClaimsColumnHeaders() {
        return $$("//div[@class='wrapper']//thead/tr/th/div");
    }
    get exportClaimsButton() {
        return $("//div[@class='ghost-export-btn']");
    }
    get selectClaimsInlineErrorMessage() {
        return $("//div[@class='error-msg ng-star-inserted']");
    }
    get exportSuccessToaster() {
        return $("(//div[contains(@class, 'snotifyToast')])[1]");
    }
    get backButton() {
        return $("//span[contains(text(),'Back')]");
    }
    get filterDataListSection() {
        return $("//div[@class='coloumn-list-container']");
    }
    get filterByText() {
        return $("//div[@class='header-row']/h3");
    }
    get filterSaveInlineErrorMessage() {
        return $("//div[@class='error-message']");
    }
    get claimSelectionManagementText() {
        return $("//div[@class='header-txt']");
    }
    get confirmationModal() {
        return $("//div[@class='popup']");
    }
    get confirmationModalHeaderText() {
        return $("//div[@class='title']");
    }
    get confirmationModalText() {
        return $("//div[@class='popup-data']");
    }
    get confirmationModalYesButton() {
        return $("//div[contains(text(),'Yes')]");
    }
    get confirmationModalCancelButton() {
        return $("//div[contains(text(),'Cancel')]");
    }
    get confirmationModalNoButton() {
        return $("//div[contains(text(),'No')]");
    }
    get filterSaved() {
        return $("//div[@class='selected-filter']");
    }
    get selectClaimListCheckbox() {
        return $("(//td[@class='freeze-checkbox'])[1]");
    }
    get selectClaimsListDowmArrow() {
        return $("(//span[@class='icon-arrow-down'])[1]");
    }
    get selectClaimsListUpArrow() {
        return $("(//span[@class='icon-arrow-up'])[1]");
    }
    get headerTab() {
        return $("(//div[@class='ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-top']/ul/li)[1]");
    }
    get lineTab() {
        return $("(//div[@class='ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-top']/ul/li)[2]");
    }
    get activeTab() {
        return $("//li[@class='ui-state-default ui-corner-top ui-tabview-selected ui-state-active']");
    }
    get headerTabSections() {
        return $$("//div[@class='row claim-header-warpper']/div/div[1]");
    }
    get lineTableData() {
        return $("//*[@id='claimListing']/div[2]/div/table/tbody/tr[2]/td/div/app-claim-lines-pc");
    }
    get noLines() {
        return $("//div[@class='title']");
    }
    get lineRecord() {
        return $$("//tr[@class='table-row']");
    }
    get lineTabColumnHeaders() {
        return $$("//table[@class='ui-table-scrollable-header-table']//th");
    }
    get viewAll() {
        return $("//div[@class='view-all']");
    }
    get lineModal() {
        return $("//div[@class='view-line-wrapper']");
    }
    get lineModalHeaderText() {
        return $("//div[@class='view-line-header']");
    }
    get lineModalColumnHeaders() {
        return $$("//div[@class='ui-table-scrollable-wrapper ng-star-inserted']//thead/tr/th");
    }
    get crossIcon() {
        return $("//span[@class='icon-cross']");
    }
    get providerNumColumnFilter() {
        return $("(//div[@class='table-filter-container']/span)[2]");
    }
    get providerNumber() {
        return $("(//tbody//tr//td)[5]");
    }
    get claimNumberData() {
        return $("(//tbody//tr//td)[2]");
    }
    get selectClaimsEditFilterLabel() {
        return $("//div[@class='header-row-text']/h3");
    }

    async disappearanceOfSavedFilter(tagName) {
        try {
            return await $("//div[text()='" + tagName + "']").waitForDisplayed({
                reverse: true,
            });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async selectValueInColumnFilter(filterValue) {
        try {
            let columnFilterOptionsCount = await this.columnFilterOptions.length;
            for (let i = 0; i < columnFilterOptionsCount; i++) {
                if (await this.columnFilterOptions[i].getText() == filterValue) {
                    await this.columnFilterCheckBox[i].click();
                }
            }
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async verifyExportClaims() {
        try {
            const presentDate = commonFunctions.getPresentDate();
            const fileName = 'ClaimSelection' + ' - ' + presentDate + '.xlsx';
            if (commonFunctions.checkIfFileExists(fileName)) {
                return true;
            }
            return fileName;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async selectValueFromSelectFiltersDropdown(filterValue) {
        try {
            let filterDataListCount = await this.filterDataList.length;
            for (let i = 0; i < filterDataListCount; i++) {
                if (await this.filterDataList[i].getText() == filterValue) {
                    await this.selectFilterCheckBox[i].click();
                }
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async deletingMedicalRecordRequest(number) {
        try {
            const MyMRRModel = mongoose.model('medicalrecordrequests', new mongoose.Schema({ name: String }));
            await MyMRRModel.deleteOne({ "payerClaim.number": '' + number + '' });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async getlineDataPresence(element) {
        try {
            let html = await element.getHTML();
            return html.includes(claimTestData.noLines);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new ClaimSelectionManagementPage();