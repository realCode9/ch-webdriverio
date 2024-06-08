import commonUtility from "../../../../utilities/common-utilities";
import manualAssignmentsData from "../../../../resources/administration/inventory-management/manual-assignments-test-data.json";
import menuOptionsPage from "../../../pageobjects/menuoptions-page";

class ManualAssignments {
    get manualAssignmentsTab() {
        return $("//span[normalize-space()='Manual Assignments']");
    }
    get inventoryTypeLabel() {
        return $("//label[normalize-space()='Inventory Type*']");
    }
    get defaultSelectedInventoryType() {
        return $("//span[normalize-space()='Query Results']");
    }
    get queryCategoryLabel() {
        return $("//label[normalize-space()='Query Category']");
    }
    get datasetLabel() {
        return $("//label[normalize-space()='Dataset']");
    }
    get sortByLabel() {
        return $("//label[normalize-space()='Sort By']");
    }
    get inventoryTypeDropdown() {
        return $("//ng-select[@id='app-query-builder-collection']");
    }
    get datasetDropdown() {
        return $("//ng-select[@id='dataset']");
    }
    get sortByDropdown() {
        return $("//ng-select[@id='app-query-builder-sortBy']");
    }
    get globalClearButton() {
        return $("//button[@id='app-query-builder-clearQuery']");
    }
    get queryClearButton() {
        return $("//button[@class='btn btn-xs clear-btn']");
    }
    get addFilterIcon() {
        return $("//span[@class='icon-Filter']");
    }
    get andButton() {
        return $("//button[normalize-space()='And']");
    }
    get selectFieldDropdown() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Field']");
    }
    get searchButton() {
        return $("(//app-common-button[@id='app-query-builder-executeSearch']//button[@id='notSubmitButton'])[1]");
    }
    get noSearchResultsMessage() {
        return $("//div[@class='msg']");
    }
    get queryCategoryDropdown() {
        return $("//ng-select[@id='app-code-list-dropdown-Query-Categories']");
    }
    get queryCategoryValue() {
        return $("(//div[@class= 'ng-value-container']//span)[4]");
    }
    get dropdownOptions() {
        return $$("//div[@role='option']");
    }
    get sortBySelectedValue() {
        return $("(//div[@class= 'ng-value-container']//span)[8]");
    }
    get datasetSelectedValue() {
        return $("(//app-dataset-dropdown//div[@class='ng-value']//span)[2]");
    }
    get statusOperandField() {
        return $("//ng-select[@id='status']//div[@class='ng-select-container']");
    }
    get valueSelectedInSelectField() {
        return $("(//ng-select[@id='app-custom-dropdown-Select-Field']//div[@class='ng-value']//span)[2]");
    }
    get selectedStatusValue() {
        return $("(//ng-select[@id='status']//div[@class='ng-value']//span)[2]");
    }
    get inProgress() {
        return $("//span[@class='icon-inprogress']");
    }
    get totalSearchResults() {
        return $$("//table[@aria-label='Manual Inventory Assignment List']//tbody//tr");
    }
    get recordCountDisplayed() {
        return $("//h3[@id='table-header-selected']");
    }
    get selectColumnsButton() {
        return $("//div[@class='select-column-btn']");
    }
    get tableHeaderTitle() {
        return $$("//div[@class='table-header-title']");
    }
    get assignToReviewerDropdown() {
        return $("//ng-select[@id='app-custom-dropdown-Manually-Assign-to-Reviewer']");
    }
    get assignButton() {
        return $("//app-common-button[@label='Assign']//button[@id='notSubmitButton']");
    }
    get unassignButton() {
        return $("//app-common-button[@label='Unassign']//button[@id='notSubmitButton']");
    }
    get markUrgentButton() {
        return $("//button[@ngbtooltip='Mark Urgent']");
    }
    get markNonUrgentButton() {
        return $("//button[@ngbtooltip='Mark Non-Urgent']");
    }
    get selectColumnsClearButton() {
        return $("//span[contains(text(),'Clear')]");
    }
    get selectColumnsApplyButton() {
        return $("//span[normalize-space()='Apply']");
    }
    get selectColumnsCancelButton() {
        return $("//span[normalize-space()='Cancel']");
    }
    get columnLabelsOnSelectColumns() {
        return $$("//ul[@class='column-list']//li//label");
    }
    get selectAllCheckbox() {
        return $("(//div[@class='ui-chkbox ui-tristatechkbox ui-widget'])[1]");
    }
    get assignedToData() {
        return $$("//table[@aria-label='Manual Inventory Assignment List']//tr//td[9]");
    }
    get reviewerField() {
        return $("//ng-select[@id='app-custom-dropdown-Manually-Assign-to-Reviewer']//div//div//div//input[@role='combobox']");
    }
    get auditorField() {
        return $("//ng-select[@id='app-custom-dropdown-Manually-Assign-to-Auditor']//div//div//div//input[@role='combobox']");
    }
    get claimOnMyInventory() {
        return $("(//div[@class='column box-1']//span)[2]");
    }
    get queryIdSortIcon() {
        return $("//th[3]//div[1]//span[1]//span[3]");
    }
    get queryIdSortIconToDescending() {
        return $("//th[3]//div[1]//span[1]//span[1]");
    }
    get queryIdColumnData() {
        return $$("//table[@aria-label='Manual Inventory Assignment List']//tr//td[3]");
    }
    get queryNameSortIcon() {
        return $("//th[5]//div[1]//span[1]//span[3]");
    }
    get queryNameSortIconToDescending() {
        return $("//th[5]//div[1]//span[1]//span[1]");
    }
    get queryNameColumnData() {
        return $$("//table[@aria-label='Manual Inventory Assignment List']//tr//td[5]");
    }
    get firstRowQueryStatus() {
        return $("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[4])[1]//span");
    }
    get selectPaymentTimingField() {
        return $("(//ng-select[@id='app-custom-dropdown-Select-Payment-Timing'])[1]");
    }
    get secondSelectField() {
        return $("(//ng-select[@id='app-custom-dropdown-Select-Field'])[2]");
    }
    get conceptField() {
        return $("//ng-select[@id='concept']//div[@class='ng-select-container']");
    }
    get toaster() {
        return $("(//div[contains(@class, 'snotifyToast')])[1]");
    }
    get urgentIconInMyInventory() {
        return $("//span[@ptooltip='Urgent']");
    }
    get inventoryTypeAuditsSelected() {
        return $("//span[normalize-space()='Audits']");
    }
    get secondOperatorField() {
        return $("(//input[@role='combobox'])[8]");
    }
    get auditTypesDropdownField() {
        return $("//ng-select[@id='app-code-list-dropdown-Service-Lines']//div//div//div//input[@role='combobox']");
    }
    get manuallyAssignAuditorPlaceholderText() {
        return $("(//ng-select[@id='app-custom-dropdown-Manually-Assign-to-Auditor']//div//div//div)[1]")
    }
    get manuallyAssignToAuditorDropdown() {
        return $("//ng-select[@id='app-custom-dropdown-Manually-Assign-to-Auditor']//div//div//div//input[@role='combobox']");
    }
    get disabledClaimNumberLabel() {
        return $("(//ul[@class='column-list']//li[@class])[2]");
    }
    get disabledAuditIdLabel() {
        return $("(//ul[@class='column-list']//li[@class])[3]");
    }
    get disabledStatusLabel() {
        return $("(//ul[@class='column-list']//li[@class])[4]");
    }
    get assignedToDataForAudits() {
        return $$("//table[@aria-label='Manual Inventory Assignment List']//tr//td[5]");
    }
    get pareoUserName() {
        return $("//div[@role='option']//span[text()='Pareo']");
    }
    get auditReviewAssignments() {
        return $("//span[normalize-space()='Audit Review Assignments']");
    }
    get auditIdFromMyInventory() {
        return $("//div[@class='card']//div//span[@class='bold']");
    }
    get sortOnAuditId() {
        return $("//th[3]//div[1]//span[1]//span[3]");
    }
    get auditIdUpSortIcon() {
        return $("//th[3]//div[1]//span[1]//span[@class='pi pi-fw pi-sort-amount-up-alt']");
    }
    get auditIdColumnData() {
        return $$("//table[@aria-label]//tbody//td[3]");
    }
    get deleteFilterIcon() {
        return $("//div[@role='alert']//div//div//button//span");
    }
    get teamAssignmentsTab() {
        return $("//span[text() = 'Team Assignments']");
    }
    //Elements of Inventory Type : MR Request
    get mrRequestSelected() {
        return $("//span[normalize-space()='MR Request']");
    }
    get noDataImage() {
        return $("(//div[@class='no-data-wrapper']//div)[1]");
    }
    get noDataText() {
        return $("//div[@class='no-data-wrapper']//div[@class='msg']");
    }
    get operatorField() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Operator']//div//div//div//input[@role='combobox']");
    }
    get claimNumberColumnData() {
        return $$("//table[@aria-label='Manual Inventory Assignment List']//tbody//tr//td[2]");
    }
    get sortIconOnAlreadySortedClaimNumberColumn() {
        return $("(//table//th//div//span[@class='pi pi-fw pi-sort-amount-up-alt'])[1]");
    }
    get mrReviewAssignmentsTab() {
        return $("//span[normalize-space()='MR Review Assignments']");
    }
    get mrrIdFromMyInventory() {
        return $("(//div[@class='claim-number']//span//span)[1]");
    }
    get providerNameOperandField() {
        return $("(//div[@tooltipclass='tooltip-warning'])[2]//input");
    }

    //Functions
    async selectValuesForFilters(firstField, fieldValue, operandField, operandValue) {
        try {
            await commonUtility.clickOnElement(firstField);
            await commonUtility.selectDropDownOptions(fieldValue);
            await commonUtility.clickOnElement(operandField);
            await commonUtility.selectDropDownOptions(operandValue);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async secondFilterSelections(selectFieldOption) {
        try {
            await commonUtility.clickOnElement(this.addFilterIcon);
            await commonUtility.clickOnElement(this.secondSelectField);
            await commonUtility.selectDropDownOptions(selectFieldOption);
            await commonUtility.clickOnElement(this.secondOperatorField);
            await commonUtility.selectDropDownOptions(manualAssignmentsData.equalsOperator);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getCountFromTheDisplayedCount() {
        try {
            let recordCountLabel = await this.recordCountDisplayed.getText();
            let count = await recordCountLabel.split(" ");
            return Number(count[0]);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignInventory(claimToAssign, dropdown, field) {
        try {
            await commonUtility.clickOnElement(claimToAssign);
            await commonUtility.clickOnElement(dropdown);
            await commonUtility.enterValueInElement(field, manualAssignmentsData.userName)
            await commonUtility.waitForElementDisplayed(this.pareoUserName);
            await commonUtility.selectDropDownOptions(manualAssignmentsData.userName);
            await commonUtility.clickOnElement(this.assignButton);
        } catch (error) {
            fail("Failed due to expception " + error);
        }
    }
    //This gives index or row number of the query result which is not assigned to any user
    async getCellToAssign() {
        try {
            let i;
            for (i = 1; i <= await this.assignedToData.length; i++) {
                let cellValue = await $("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[9])[" + i + "]").getText();
                if (cellValue == "N/A" || cellValue != manualAssignmentsData.userName) {
                    break;
                } else {
                    continue;
                }
            }
            return i;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //This gives index or row number of the audit assignment which is assigned to current user
    async getAuditOrMRRAssignedToCurrentUser() {
        try {
            let i;
            for (i = 1; i <= await this.assignedToDataForAudits.length; i++) {
                let cellValue = await $("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[5])[" + i + "]").getText();
                if (cellValue == manualAssignmentsData.userName && cellValue != 'N/A') {
                    break;
                } else {
                    continue;
                }
            }
            return i;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //This gives index or row number of the audit assignment which is not assigned to any user
    async getCellToAssignForAuditsOrMRR() {
        try {
            let i;
            for (i = 1; i <= await this.assignedToDataForAudits.length; i++) {
                let cellValue = await $("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[5])[" + i + "]").getText();
                if (cellValue == "N/A") {
                    break;
                } else {
                    continue;
                }
            }
            return i;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignQueryResult() {
        try {
            if ((await commonUtility.isElementExisting(this.noSearchResultsMessage) != true)) {
                await this.assignInventory($("(//tbody//div[@role='checkbox'])[" + await this.getCellToAssign() + "]"), this.assignToReviewerDropdown, this.reviewerField);
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async navigateToAssignmentMyInventory() {
        try {
            await commonUtility.clickOnElement(menuOptionsPage.assignment);
            await commonUtility.clickOnElement(menuOptionsPage.myInventory);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async navigateToManualAssignmentsTab() {
        try {
            await commonUtility.clickOnElement(menuOptionsPage.administration);
            await commonUtility.clickOnElement(menuOptionsPage.assignments);
            await commonUtility.clickOnElement(this.manualAssignmentsTab);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async navigateToManualAssignmentsAndSearchForQueryStatus() {
        try {
            await this.navigateToManualAssignmentsTab();
            await this.selectValuesForFilters(this.selectFieldDropdown, manualAssignmentsData.queryStatusField, this.statusOperandField, manualAssignmentsData.queryStatusValue);
            await commonUtility.clickOnElement(this.searchButton);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //This gives index or row number of the query result assignment which is assigned to Pareo user
    async getRowOfAssignedUserPareo() {
        try {
            let i;
            for (i = 1; i <= await this.assignedToData.length; i++) {
                let cellValue = await $("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[9])[" + i + "]").getText();
                if (cellValue == manualAssignmentsData.userName) {
                    break;
                } else {
                    continue;
                }
            }
            return i;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignAlreadyAssignedResult(resultRowNumber) {
        try {
            await this.assignInventory($("(//tbody//div[@role='checkbox'])[" + resultRowNumber + "]"), this.assignToReviewerDropdown, this.reviewerField);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async unassignQueryResultFromCurrentUser() {
        try {
            await commonUtility.clickOnElement($("(//tbody//div[@role='checkbox'])[" + await this.getRowOfAssignedUserPareo() + "]"));
            await commonUtility.clickOnElement(this.unassignButton);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async markUrgentQueryResult() {
        try {
            await commonUtility.clickOnElement($("(//tbody//div[@role='checkbox'])[" + await this.getRowOfAssignedUserPareo() + "]"));
            await commonUtility.clickOnElement(this.markUrgentButton);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async markNonUrgentQueryResult() {
        try {
            await commonUtility.clickOnElement($("(//tbody//div[@role='checkbox'])[" + await this.getRowOfAssignedUserPareo() + "]"));
            await commonUtility.clickOnElement(this.markNonUrgentButton);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async unassignAuditOrMRRAssignment(auditEntryIndex) {
        try {
            await commonUtility.clickOnElement($("(//tbody//div[@role='checkbox'])[" + auditEntryIndex + "]"));
            await commonUtility.clickOnElement(this.unassignButton);
        } catch (error) {
            fail("Failed due to expection " + error);
        }
    }
    async clickAndSortSpecificColumnsOfSearchResultsOnMRR() {
        try {
            for (let i = 2; i < this.tableHeaders.length; i++) {

            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async genericFunctionToSortColumns(indexOfColumn) {
        try {
            var dataSortedByUser = await commonUtility.getMultiElementDataAndSort($$("//table[@aria-label='Manual Inventory Assignment List']//tbody//tr//td[" + (indexOfColumn + 2) + "]"));
            return dataSortedByUser;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMultiElementDataOfIndex(index) {
        try {
            return await commonUtility.getMultiElementTextOneByOne($$("//table[@aria-label='Manual Inventory Assignment List']//tbody//tr//td[" + (index + 2) + "]"));
        } catch (error) {
            fail("Failed due to expection " + error);
        }
    }
}
export default new ManualAssignments();