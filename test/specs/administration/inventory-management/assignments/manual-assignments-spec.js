import manualAssignmentsPage from "../../../../pageobjects/administration/inventory-management/manual-assignments-page";
import manualAssignmentsData from "../../../../../resources/administration/inventory-management/manual-assignments-test-data.json";
import commonUtility from "../../../../../utilities/common-utilities";
import menuOptionsPage from "../../../../pageobjects/menuoptions-page";
import loginPage from "../../../../pageobjects/login/login-page";

describe("Validate test cases for the manual assignments > inventory type : Query Results", function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        await commonUtility.clickOnElement(menuOptionsPage.administration);
        await commonUtility.clickOnElement(menuOptionsPage.inventoryManagement);
        await commonUtility.clickOnElement(menuOptionsPage.assignments);
    })
    it("Validate navigate to manual assignments tab", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.manualAssignmentsTab);
        expect(await commonUtility.getElementText(manualAssignmentsPage.inventoryTypeLabel)).toEqual(manualAssignmentsData.inventoryTypeLabelText);
        expect(await commonUtility.getElementText(manualAssignmentsPage.noSearchResultsMessage)).toEqual(manualAssignmentsData.noSearchDataMessage);
    })
    it("Validate default landing UI of manual assignments", async () => {
        expect(await commonUtility.getElementText(manualAssignmentsPage.noSearchResultsMessage)).toEqual(manualAssignmentsData.noSearchDataMessage);
        expect(await commonUtility.getElementText(manualAssignmentsPage.queryCategoryLabel)).toEqual(manualAssignmentsData.queryCategoryLabelText);
        expect(await commonUtility.getElementText(manualAssignmentsPage.datasetLabel)).toEqual(manualAssignmentsData.datasetLabelText);
        expect(await commonUtility.getElementText(manualAssignmentsPage.sortByLabel)).toEqual(manualAssignmentsData.sortByLabelText);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.inventoryTypeDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.datasetDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.sortByDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.globalClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.queryClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.andButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.addFilterIcon)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectFieldDropdown)).toBeTrue();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.globalClearButton)).toBeTrue();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.queryClearButton)).toBeTrue();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.searchButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.andButton)).toBeFalse();
    })
    it("Verify default inventory type selected in the dropdown", async () => {
        expect(await commonUtility.getElementText(manualAssignmentsPage.defaultSelectedInventoryType)).toEqual(manualAssignmentsData.defaultInventoryTypeSelected);
    })
    it("Validate query category field state and default value selected", async () => {
        expect(await manualAssignmentsPage.queryCategoryDropdown).toHaveAttributeContaining('class', 'disabled');
        expect(await commonUtility.getElementText(manualAssignmentsPage.queryCategoryValue)).toEqual(manualAssignmentsData.defaultQueryCategoryValue);
    })
    it("Validate dropdown values for Dataset, Inventory Type and sort by", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.inventoryTypeDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.dropdownOptions)).toEqual(manualAssignmentsData.inventoryTypes);
        await commonUtility.clickOnElement(manualAssignmentsPage.datasetDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.dropdownOptions)).toEqual(manualAssignmentsData.datasets);
        await commonUtility.clickOnElement(manualAssignmentsPage.sortByDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.dropdownOptions)).toEqual(manualAssignmentsData.sortByOptions);
    })
    it("Validate global clear and query clear button and functionality", async () => {
        await commonUtility.selectDropDownOptions(manualAssignmentsData.sortByValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.datasetDropdown);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.datasetValue);
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.queryStatusField, manualAssignmentsPage.statusOperandField, manualAssignmentsData.queryStatusValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.queryClearButton);
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.valueSelectedInSelectField)).toBeFalse();
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.selectedStatusValue)).toBeFalse();
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.queryStatusField, manualAssignmentsPage.statusOperandField, manualAssignmentsData.queryStatusValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.globalClearButton);
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.valueSelectedInSelectField)).toBeFalse();
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.selectedStatusValue)).toBeFalse();
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.datasetSelectedValue)).toBeFalse();
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.sortBySelectedValue)).toBeFalse();
    })
    it("Validate search results count for one field filter", async () => {
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.queryStatusField, manualAssignmentsPage.statusOperandField, manualAssignmentsData.queryStatusValue);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.searchButton)).toBeTrue();
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
        if (await commonUtility.isElementExisting(manualAssignmentsPage.noSearchResultsMessage) == true) {
            expect(await commonUtility.getElementText(manualAssignmentsPage.noSearchResultsMessage)).toEqual(manualAssignmentsData.noSearchDataMessage);
        } else {
            expect(await manualAssignmentsPage.getCountFromTheDisplayedCount()).toEqual(await commonUtility.getElementsCount(manualAssignmentsPage.totalSearchResults));
        }
    })
    it("Validate search results satisfying the rules applied", async () => {
        expect(await commonUtility.getElementText(manualAssignmentsPage.firstRowQueryStatus)).toEqual(manualAssignmentsData.queryStatusValue);
    })
    it("Validate query statuses of search results is of type Ready by default", async () => {
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.paymentTimingField, manualAssignmentsPage.selectPaymentTimingField, manualAssignmentsData.paymentTimingValue);
        expect(await commonUtility.getElementText(manualAssignmentsPage.firstRowQueryStatus)).toEqual(manualAssignmentsData.queryStatusValue);
    })
    it("Validate search result table and search result area", async () => {
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.searchResultTableHeaders);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.assignToReviewerDropdown)).toBeTrue();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.assignButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.unassignButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.markUrgentButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.markNonUrgentButton)).toBeFalse();
    })
    it("Validate select columns popup and functionality", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsApplyButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsCancelButton)).toBeTrue();
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.columnLabelsOnSelectColumns)).toEqual(manualAssignmentsData.columnLabelsOnSelectColumnsPopup);
    })
    it("Validate clear button function on the select popup", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsClearButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle))
            .toEqual(manualAssignmentsData.fixedTableHeaders);
    })
    it("Validate apply and Cancel function on the select columns popup", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsCancelButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle))
            .toEqual(manualAssignmentsData.fixedTableHeaders);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsApplyButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle))
            .toEqual(manualAssignmentsData.searchResultTableHeaders);
    })
    it("Validate assignment of an query results which is not assigned to any other team member", async () => {
        await manualAssignmentsPage.assignQueryResult();
        var claimNumberAssigned = await $("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[2])[" + await manualAssignmentsPage.getCellToAssign() + "]");
        var claimNumber = await claimNumberAssigned.getText();
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.assignedSuccessToaster);
        await commonUtility.waitForToasterMessageToDisappear();
        await manualAssignmentsPage.navigateToAssignmentMyInventory();
        expect(await commonUtility.getElementText(manualAssignmentsPage.claimOnMyInventory)).toEqual(claimNumber);
    })
    it("Validate changing priority of the assignment to Urgent", async () => {
        await manualAssignmentsPage.navigateToManualAssignmentsAndSearchForQueryStatus();
        var claimNumberAssigned = $("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[2])[" + await manualAssignmentsPage.getCellToAssign() + "]");
        var claimNumber = await claimNumberAssigned.getText();
        await manualAssignmentsPage.markUrgentQueryResult();
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.priorityUpdateSuccessText);
        await commonUtility.waitForToasterMessageToDisappear();
        await manualAssignmentsPage.navigateToAssignmentMyInventory();
        expect(await commonUtility.getElementText(manualAssignmentsPage.claimOnMyInventory)).toEqual(claimNumber);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.urgentIconInMyInventory)).toBeTrue;
    })
    it("Validate changing priority of the assignment to Non Urgent", async () => {
        await manualAssignmentsPage.navigateToManualAssignmentsAndSearchForQueryStatus();
        await manualAssignmentsPage.markNonUrgentQueryResult();
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.priorityUpdateSuccessText);
        await commonUtility.waitForToasterMessageToDisappear();
        await manualAssignmentsPage.navigateToAssignmentMyInventory();
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.urgentIconInMyInventory)).toBeFalse();
    })
    it("Validate scenario of assigning query result which is assigned to any other user", async () => {
        await manualAssignmentsPage.navigateToManualAssignmentsAndSearchForQueryStatus();
        await manualAssignmentsPage.assignAlreadyAssignedResult(await manualAssignmentsPage.getRowOfAssignedUserPareo());
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.assignmentErrorForAlreadyAssignedQueryResult);
        await commonUtility.clickOnElement(manualAssignmentsPage.toaster);
    })
    it("Validate un-assigning query result which is assigned to the current user", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await manualAssignmentsPage.unassignQueryResultFromCurrentUser();
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.unassignedSuccessToaster);
    })
    it("Validate select all functionality on search results", async () => {
        let resultsCount = await manualAssignmentsPage.getCountFromTheDisplayedCount();
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        expect(await commonUtility.getElementText(manualAssignmentsPage.recordCountDisplayed)).toEqual(resultsCount + " of " + resultsCount + " Inventory Selected");
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        expect(await commonUtility.getElementText(manualAssignmentsPage.recordCountDisplayed)).toEqual(resultsCount + " Inventory");
    })
    it("Validate sorting on Query ID and Query Name columns", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.queryIdSortIcon);
        expect((await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.queryIdColumnData)) ==
            (await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.queryIdColumnData))).toBeTrue();
        await commonUtility.clickOnElement(manualAssignmentsPage.queryIdSortIconToDescending);
        expect((await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.queryIdColumnData)) ==
            (await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.queryIdColumnData))).toBeTrue();

        await commonUtility.clickOnElement(manualAssignmentsPage.queryNameSortIcon);
        expect((await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.queryNameColumnData)) ==
            (await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.queryNameColumnData))).toBeTrue();
        await commonUtility.clickOnElement(manualAssignmentsPage.queryNameSortIconToDescending);
        expect((await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.queryNameColumnData)) ==
            (await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.queryNameColumnData))).toBeTrue();
    })
    it("Validate search results for multiple rule combination", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.addFilterIcon);
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.secondSelectField, manualAssignmentsData.conceptField, manualAssignmentsPage.conceptField, manualAssignmentsData.conceptFieldValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
        if (await commonUtility.isElementExisting(manualAssignmentsPage.noSearchResultsMessage) == true) {
            expect(await commonUtility.getElementText(manualAssignmentsPage.noSearchResultsMessage)).toEqual(manualAssignmentsData.noSearchDataMessage);
        } else {
            expect(await manualAssignmentsPage.getCountFromTheDisplayedCount()).toEqual(await commonUtility.getElementsCount(manualAssignmentsPage.totalSearchResults));
        }
    })
})
describe("Validate test cases for the manual assignments > inventory type : Audits", function () {
    it("Validate selection of Audits inventory type and navigation to audits assignments", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.globalClearButton);
        await commonUtility.clickOnElement(manualAssignmentsPage.inventoryTypeDropdown);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.auditsInventoryType);
        expect(await commonUtility.getElementText(manualAssignmentsPage.inventoryTypeAuditsSelected)).toEqual(manualAssignmentsData.auditsInventoryType);
    })
    it("Validate UI of manual assignment for inventory type audits", async () => {
        expect(await commonUtility.getElementText(manualAssignmentsPage.inventoryTypeLabel)).toEqual(manualAssignmentsData.inventoryTypeLabelText);
        expect(await commonUtility.getElementText(manualAssignmentsPage.datasetLabel)).toEqual(manualAssignmentsData.datasetLabelText);
        expect(await commonUtility.getElementText(manualAssignmentsPage.sortByLabel)).toEqual(manualAssignmentsData.sortByLabelText);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.datasetDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.sortByDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.globalClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.queryClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.addFilterIcon)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectFieldDropdown)).toBeTrue();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.andButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.searchButton)).toBeFalse();
    })
    it("Validate result count for one field filter", async () => {
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.overpaymentStatusFieldValue, manualAssignmentsPage.statusOperandField, manualAssignmentsData.overpaymentStatusValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
        expect(await manualAssignmentsPage.getCountFromTheDisplayedCount()).toEqual(await commonUtility.getElementsCount(manualAssignmentsPage.totalSearchResults));
    })
    it("Validate add and delete extra filter to the rule", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.addFilterIcon);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.deleteFilterIcon)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.secondSelectField)).toBeTrue();
        await commonUtility.clickOnElement(manualAssignmentsPage.deleteFilterIcon);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.deleteFilterIcon);
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.deleteFilterIcon)).toBeFalse();
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.secondSelectField)).toBeFalse();
    })
    it("Validate search results area of audits", async () => {
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.manuallyAssignToAuditorDropdown)).toBeTrue();
        expect(await commonUtility.getElementText(manualAssignmentsPage.manuallyAssignAuditorPlaceholderText)).toEqual(manualAssignmentsData.assignToDropdownPlaceholder);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.assignButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.unassignButton)).toBeFalse();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsButton)).toBeTrue();
    })
    it("Validate search results table headers", async () => {
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.tableHeadersForAuditsSearchResults);
    })
    it("Validate select all function on the search results of audits inventory type", async () => {
        let resultsCount = await manualAssignmentsPage.getCountFromTheDisplayedCount();
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        expect(await commonUtility.getElementText(manualAssignmentsPage.recordCountDisplayed)).toEqual(resultsCount + " of " + resultsCount + " Inventory Selected");
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        expect(await commonUtility.getElementText(manualAssignmentsPage.recordCountDisplayed)).toEqual(resultsCount + " Inventory");
    })
    it("Validate sorting on the Audit Id column", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.sortOnAuditId);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.auditIdColumnData)).toEqual(await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.auditIdColumnData));
        await commonUtility.clickOnElement(manualAssignmentsPage.auditIdUpSortIcon);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.auditIdColumnData)).toEqual(await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.auditIdColumnData));
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
    })
    it("Validate clicking on Select columns popup and its content", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsClearButton));
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsApplyButton));
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsCancelButton));
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.columnLabelsOnSelectColumns)).toEqual(manualAssignmentsData.columnHeadersInSelectColumnPopup);
    })
    it("Validate disabled column header labels on select columns popup", async () => {
        expect(manualAssignmentsPage.disabledClaimNumberLabel).toHaveAttributeContaining('class', 'disabled');
        expect(manualAssignmentsPage.disabledAuditIdLabel).toHaveAttributeContaining('class', 'disabled');
        expect(manualAssignmentsPage.disabledStatusLabel).toHaveAttributeContaining('class', 'disabled');
    })
    it("Validate clear on the select column popup", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsClearButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.fixedTableHeadersForAudits);
    })
    it("Validate cancel and select all functionality on the select column popup", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsCancelButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.fixedTableHeadersForAudits);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsApplyButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.tableHeadersForAuditsSearchResults);
    })
    it("Validate assigning audit assignments to the user", async () => {
        var assignedAuditId = await commonUtility.getElementText($("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[3])[" + await manualAssignmentsPage.getCellToAssignForAuditsOrMRR() + "]"));
        await manualAssignmentsPage.assignInventory($("(//tbody//div[@role='checkbox'])[" + await manualAssignmentsPage.getCellToAssignForAuditsOrMRR() + "]"), manualAssignmentsPage.manuallyAssignToAuditorDropdown, manualAssignmentsPage.auditorField);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.auditAssignedSuccessToaster);
        await manualAssignmentsPage.navigateToAssignmentMyInventory();
        await commonUtility.clickOnElement(manualAssignmentsPage.auditReviewAssignments);
        expect(await commonUtility.getElementText(manualAssignmentsPage.auditIdFromMyInventory)).toEqual(assignedAuditId);
    })
    it("Validate un-assigning audit assignment previously assigned to the user", async () => {
        await manualAssignmentsPage.navigateToManualAssignmentsTab();
        await commonUtility.clickOnElement(manualAssignmentsPage.inventoryTypeDropdown);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.auditsInventoryType);
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.overpaymentStatusFieldValue, manualAssignmentsPage.statusOperandField, manualAssignmentsData.overpaymentStatusValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await manualAssignmentsPage.unassignAuditOrMRRAssignment(await manualAssignmentsPage.getAuditOrMRRAssignedToCurrentUser());
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.successUnassigningAlreadyUnassignedAudit);
        await commonUtility.clickOnElement(manualAssignmentsPage.toaster);
    })
    it("Validate un-assigning audit assignment which is not assigned to any user", async () => {
        await manualAssignmentsPage.unassignAuditOrMRRAssignment(await manualAssignmentsPage.getCellToAssignForAuditsOrMRR());
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.errorUnassigningAlreadyUnassignedAudit);
        await commonUtility.clickOnElement(manualAssignmentsPage.toaster);
    })
    it("Validate result count for multiple field filter in Audits inventory", async () => {
        await manualAssignmentsPage.secondFilterSelections(manualAssignmentsData.auditTypeOption);
        await commonUtility.clickOnElement(manualAssignmentsPage.auditTypesDropdownField);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.auditTypeOptionValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
        expect(await manualAssignmentsPage.getCountFromTheDisplayedCount()).toEqual(await commonUtility.getElementsCount(manualAssignmentsPage.totalSearchResults));
    })
})
describe("Validate test cases for the manual assignments > inventory type : MR Request", function () {
    it("Validate navigate to MR Request Inventory type", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.teamAssignmentsTab);
        await commonUtility.clickOnElement(manualAssignmentsPage.manualAssignmentsTab);
        await commonUtility.clickOnElement(manualAssignmentsPage.inventoryTypeDropdown);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.mrRequestOption);
        expect(await commonUtility.getElementText(manualAssignmentsPage.mrRequestSelected)).toEqual(manualAssignmentsData.mrRequestOption);
    })
    it("Validate Sort by dropdown values", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.sortByDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.dropdownOptions)).toEqual(manualAssignmentsData.mrRequestSortByOptions);
    })
    it("Validate UI for the Inventory Type MR Request", async () => {
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.datasetDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.globalClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.addFilterIcon)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectFieldDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.queryClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.andButton)).toBeTrue();
        expect(await commonUtility.getElementText(manualAssignmentsPage.datasetLabel)).toEqual(manualAssignmentsData.datasetLabelText);
        expect(await commonUtility.getElementText(manualAssignmentsPage.sortByLabel)).toEqual(manualAssignmentsData.sortByLabelText);
        expect(await commonUtility.getElementText(manualAssignmentsPage.inventoryTypeLabel)).toEqual(manualAssignmentsData.inventoryTypeLabelText);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.andButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.searchButton)).toBeFalse();
    })
    it("Validate select field dropdown values", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectFieldDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.dropdownOptions)).toEqual(manualAssignmentsData.mrrSearchOptions)
    })
    it("Validate MRR Status values from the dropdown", async () => {
        await commonUtility.selectDropDownOptions(manualAssignmentsData.mrrStatusFieldValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.operatorField);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.equalsOperator);
        await commonUtility.clickOnElement(manualAssignmentsPage.statusOperandField);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.dropdownOptions)).toEqual(manualAssignmentsData.mrrStatusValues);
    })
    it("Validate No search results screen", async () => {
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.noDataImage)).toBeTrue();
        expect(await commonUtility.getElementText(manualAssignmentsPage.noDataText)).toEqual(manualAssignmentsData.noDataTextMsg);
    })
    it("Validate AND icon button and its state changes on add and delete filter function", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.addFilterIcon);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.andButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.secondSelectField)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.deleteFilterIcon)).toBeTrue();
        await commonUtility.clickOnElement(manualAssignmentsPage.deleteFilterIcon);
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.secondSelectField)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.andButton)).toBeFalse();
    })
    it("Validate Search button enabled on filling rule details", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.statusOperandField);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.mrrStatusOperandValue);
        await browser.pause(1000);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.searchButton)).toBeTrue();
    })
    it("Validate global and query clear button functionality", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.queryClearButton);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.searchButton)).toBeFalse();
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.mrrStatusFieldValue, manualAssignmentsPage.statusOperandField, manualAssignmentsData.mrrStatusOperandValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.operatorField);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.equalsOperator);
        await commonUtility.clickOnElement(manualAssignmentsPage.datasetDropdown);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.datasetValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.globalClearButton);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.searchButton)).toBeFalse();
        expect(await commonUtility.isElementExisting(manualAssignmentsPage.datasetSelectedValue)).toBeFalse();
    })
    it("Validate search button functionality", async () => {
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.mrrStatusFieldValue, manualAssignmentsPage.statusOperandField, manualAssignmentsData.mrrStatusOperandValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.operatorField);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.equalsOperator);
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
        expect(await manualAssignmentsPage.getCountFromTheDisplayedCount()).toEqual(await commonUtility.getElementsCount(manualAssignmentsPage.totalSearchResults));
    })
    it("Validate search results area if there are search results else validate no data screen", async () => {
        if (await commonUtility.isElementExisting(manualAssignmentsPage.noSearchResultsMessage) == true) {
            expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.noDataImage)).toBeTrue();
        } else {
            expect(await manualAssignmentsPage.getCountFromTheDisplayedCount()).toEqual(await commonUtility.getElementsCount(manualAssignmentsPage.totalSearchResults));
        }
    })
    it("Validate table headers and Manually assign to reviewer dropdown, assign and unassign button of search results", async () => {
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.tableHeaders);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.assignToReviewerDropdown)).toBeTrue();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.assignButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.unassignButton)).toBeFalse();
    })
    it("Validate select columns dropdown button and elements", async () => {
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsButton)).toBeTrue();
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.columnLabelsOnSelectColumns)).toEqual(manualAssignmentsData.columnHeadersLabelsOnSelectColumnsForMRR);
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsApplyButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsCancelButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(manualAssignmentsPage.selectColumnsClearButton)).toBeTrue();
    })
    it("Validate Clear, Cancel And Apply all functionality of select columns popup", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsCancelButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.tableHeaders);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsClearButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.fixedTableHeadersForMRR);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsButton);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        await commonUtility.clickOnElement(manualAssignmentsPage.selectColumnsApplyButton);
        expect(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.tableHeaderTitle)).toEqual(manualAssignmentsData.tableHeaders);
    })
    it("Validate Sorting on all columns of the search results table of MR Request", async () => {
        try {
            expect(await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.claimNumberColumnData)).toEqual(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.claimNumberColumnData));
            await commonUtility.clickOnElement(manualAssignmentsPage.sortIconOnAlreadySortedClaimNumberColumn);
            expect(await commonUtility.getMultiElementDataAndSort(manualAssignmentsPage.claimNumberColumnData)).toEqual(await commonUtility.getMultiElementTextOneByOne(manualAssignmentsPage.claimNumberColumnData));
            for (let i = 1; i < await commonUtility.getElementsCount(manualAssignmentsPage.tableHeaderTitle); i++) {
                await commonUtility.clickOnElement($("(//table//th//div//span[@class='sorting'])[" + i + "]"));
                expect(await manualAssignmentsPage.genericFunctionToSortColumns(i)).toEqual(await manualAssignmentsPage.getMultiElementDataOfIndex(i));
                var j = i + 1;
                await commonUtility.clickOnElement($("(//table//th//div//span[@class='pi pi-fw pi-sort-amount-up-alt'])[" + j + "]"));
                expect(await manualAssignmentsPage.genericFunctionToSortColumns(i)).toEqual(await manualAssignmentsPage.getMultiElementDataOfIndex(i));
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    })
    it("Validate select all function for MR Request search results", async () => {
        let resultsCount = await manualAssignmentsPage.getCountFromTheDisplayedCount();
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        expect(await commonUtility.getElementText(manualAssignmentsPage.recordCountDisplayed)).toEqual(resultsCount + " of " + resultsCount + " Inventory Selected");
        await commonUtility.clickOnElement(manualAssignmentsPage.selectAllCheckbox);
        expect(await commonUtility.getElementText(manualAssignmentsPage.recordCountDisplayed)).toEqual(resultsCount + " Inventory");
    })
    it("Validate default and changing state of Assign and Unassign buttons", async () => {
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.assignButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.unassignButton)).toBeFalse();
        await commonUtility.clickOnElement($("(//tbody//div[@role='checkbox'])[" + await manualAssignmentsPage.getCellToAssignForAuditsOrMRR() + "]"));
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.unassignButton)).toBeTrue();
        await commonUtility.enterValueInElement(manualAssignmentsPage.reviewerField, manualAssignmentsData.userName)
        await commonUtility.waitForElementDisplayed(manualAssignmentsPage.pareoUserName);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.userName);
        expect(await commonUtility.isElementEnabled(manualAssignmentsPage.assignButton)).toBeTrue();
    })
    it("Validate assigning already checked out assignment to the Pareo user", async () => {
        var assignedMRRID = await commonUtility.getElementText($("(//table[@aria-label='Manual Inventory Assignment List']//tr//td[3])[" + await manualAssignmentsPage.getCellToAssignForAuditsOrMRR() + "]"));
        await commonUtility.clickOnElement(manualAssignmentsPage.assignButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.successOnAssignment);
        await manualAssignmentsPage.navigateToAssignmentMyInventory();
        await commonUtility.clickOnElement(manualAssignmentsPage.mrReviewAssignmentsTab);
        expect(await commonUtility.getElementText(manualAssignmentsPage.mrrIdFromMyInventory)).toEqual(assignedMRRID);
    })
    it("Validate assigning already assigned assignment to any of the user", async () => {
        await manualAssignmentsPage.navigateToManualAssignmentsTab();
        await commonUtility.clickOnElement(manualAssignmentsPage.inventoryTypeDropdown);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.mrRequestOption);
        await manualAssignmentsPage.selectValuesForFilters(manualAssignmentsPage.selectFieldDropdown, manualAssignmentsData.mrrStatusFieldValue, manualAssignmentsPage.statusOperandField, manualAssignmentsData.mrrStatusOperandValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.operatorField);
        await commonUtility.selectDropDownOptions(manualAssignmentsData.equalsOperator);
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
        var claimNumber = await commonUtility.getElementText($("(//tr//td[2]//span)["+ await manualAssignmentsPage.getAuditOrMRRAssignedToCurrentUser() +"]"));
        await manualAssignmentsPage.assignAlreadyAssignedResult(await manualAssignmentsPage.getAuditOrMRRAssignedToCurrentUser());
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual("Info\nClaim number " + claimNumber + " is already assigned or checked out and could not be assigned. Please clear before assigning.");
        await commonUtility.waitForToasterMessageToDisappear();
    })
    it("Validate un-assigning already assigned assignment to the pareo user", async () => {
        await commonUtility.clickOnElement(manualAssignmentsPage.unassignButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.successOnUnassignmentOfMRR);
        await commonUtility.clickOnElement(manualAssignmentsPage.toaster);
    })
    it("Validate un-assigning already checked out assignment", async () => {
        await manualAssignmentsPage.unassignAuditOrMRRAssignment(await manualAssignmentsPage.getCellToAssignForAuditsOrMRR());
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(manualAssignmentsData.errorUnassigningAlreadyUnassignedMRR)
    })
    it("Validate result count for multiple field filter in MRR inventory assignments", async () => {
        await manualAssignmentsPage.secondFilterSelections(manualAssignmentsData.providerNameOption);
        await commonUtility.enterValueInElement(manualAssignmentsPage.providerNameOperandField, manualAssignmentsData.providerNameValue);
        await commonUtility.clickOnElement(manualAssignmentsPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(manualAssignmentsPage.inProgress);
        expect(await manualAssignmentsPage.getCountFromTheDisplayedCount()).toEqual(await commonUtility.getElementsCount(manualAssignmentsPage.totalSearchResults));
    })
})