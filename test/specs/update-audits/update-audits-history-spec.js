import loginPage from "../../pageobjects/login/login-page";
import updateAuditsStep1Page from "../../pageobjects/update-audits/update/update-audits-step1-page";
import updateAuditsHistoryPage, { updateIDLink } from "../../pageobjects/update-audits/update-audits-history-page";
import menuOptionsPage from "../../pageobjects/menuoptions-page";
import historyData from "../../../resources/update-audits/update-audits-history-test-data.json";
import commonUtility from "../../../utilities/common-utilities";
import updateIdDetailsPage from "../../pageobjects/update-audits/updateID-details-page";
import updateIDDetailsPage from "../../pageobjects/update-audits/updateID-details-page";
import loginData from "../../../resources/login/login-test-data.json";

describe("Validations on Update Audits History Page", () => {
    let expectedRecordsCountBeforeChange = 10;
    let expectedRecordsCountAfterChange = 20;
    let pageSizeToEnter = 20;

    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        await menuOptionsPage.clickUpdateAudits();
        await updateAuditsStep1Page.clickUpdateAuditsHistory();
    });
    it("Validate navigation and fields on history page of update audits", async function () {
        expect(await updateAuditsHistoryPage.historyTable).toBePresent();
    })
    it("Validate pagination present on history tab", async function () {
        expect(await updateAuditsHistoryPage.paginationOnHistoryPage()).toBeTrue();
    })
    it("Validate default records count on history tab", async function () {
        expect(await updateAuditsHistoryPage.getRecordsCountOnHistory()).toEqual(expectedRecordsCountBeforeChange);
    })
    it("Validating the default sorting on the history table is on Date and Time column", async () => {
        expect(await updateAuditsHistoryPage.isElementSortedDescending(updateAuditsHistoryPage.dateAndTimeColumnSortIcon)).toEqual('descending');
    })
    it("Validate records count on history tab after changing it to some value", async function () {
        await updateAuditsHistoryPage.enterPageSizeCount(pageSizeToEnter);
        expect(await updateAuditsHistoryPage.getRecordsCountOnHistory()).toEqual(expectedRecordsCountAfterChange);
    })
    it("Validate page number options on history listing page", async () => {
        expect(await updateAuditsHistoryPage.isPageNumberOptionPresent()).toBeTrue();
        expect(await updateAuditsHistoryPage.isPageNumberOptionLeftArrowDisabled(updateAuditsHistoryPage.
            pageNumberOptionLeftArrow)).toBeTrue();
    })
    it("Validate history table column header names and sortable or not", async () => {
        expect((await commonUtility.getMultiElementTextOneByOne(updateAuditsHistoryPage.historyTableColumnHeaders)) ==
            (historyData.updateAuditHistoryTableHeaderBeforeScroll)).toBeTrue();
        await updateAuditsHistoryPage.totalColumn.scrollIntoView();
        expect(await updateAuditsHistoryPage.isColumnSortable()).toBeTrue();
    })
    it("Validate pagination text, listing of total maximum records validation and inline error message", async () => {
        await updateAuditsHistoryPage.enterPageSizeCount(await updateAuditsHistoryPage.getTotalRecordsListed(1));
        if (await updateAuditsHistoryPage.getTotalRecordsListed(1) > 100) {
            expect(await updateAuditsHistoryPage.getText(updateAuditsHistoryPage.paginationInlineError)).toEqual(historyData.paginationInlineError);
        } else {
            expect(await updateAuditsHistoryPage.getTotalRecordsListed(1)).toBeGreaterThanOrEqual(await updateAuditsHistoryPage.getRecordsCountOnHistory());
        }
    })
    it("Validate sorting on the columns on history page", async () => {
        //DEFAULT SORTING ON DATE AND TIME COLUMN
        expect((await commonUtility.getMultiElementTextOneByOne(updateAuditsHistoryPage.dateTimeColumnData)) == (await updateAuditsHistoryPage.getMultiElementDataAndSortInDescending(updateAuditsHistoryPage.dateTimeColumnData))).toBeTrue();
        await updateAuditsHistoryPage.clickElement(updateAuditsHistoryPage.dateAndTimeColumn);
        expect((await commonUtility.getMultiElementTextOneByOne(updateAuditsHistoryPage.dateTimeColumnData)) == (await updateAuditsHistoryPage.getMultiElementDataAndSortInDescending(updateAuditsHistoryPage.dateTimeColumnData))).toBeTrue();
        // SORTING ON AUDIT TYPE COLUMN
        await updateAuditsHistoryPage.clickElement(updateAuditsHistoryPage.auditTypeColumn);
        let unsortedAuditTypeArray = new Array(await commonUtility.getMultiElementTextOneByOne(updateAuditsHistoryPage.auditTypeColumnData));
        let sortedAuditTypeArrayInAscending = unsortedAuditTypeArray.sort();
        expect((await commonUtility.getMultiElementTextOneByOne(updateAuditsHistoryPage.auditTypeColumnData)) == (await updateAuditsHistoryPage.getFilteredDataFromArray(sortedAuditTypeArrayInAscending))).toBeTrue();
        await updateAuditsHistoryPage.clickElement(updateAuditsHistoryPage.auditTypeColumn);
        let unsortedAuditTypeArray1 = new Array(await commonUtility.getMultiElementTextOneByOne(updateAuditsHistoryPage.auditTypeColumnData));
        let sortedAuditTypeArrayInDescending = unsortedAuditTypeArray1.reverse();
        expect((await commonUtility.getMultiElementTextOneByOne(updateAuditsHistoryPage.auditTypeColumnData)) == (await updateAuditsHistoryPage.getFilteredDataFromArray(sortedAuditTypeArrayInDescending))).toBeTrue();
    })
    describe("Validating updated ID details page", () => {
        it("Validate user redirection and Updated ID details page", async () => {
            let updateId = await updateAuditsHistoryPage.getText(updateAuditsHistoryPage.updateIDLink);
            await updateAuditsHistoryPage.clickElement(updateAuditsHistoryPage.updateIDLink);
            expect(await updateIdDetailsPage.getUpdateIDInHeader()).toEqual(updateId);
            expect(await updateIdDetailsPage.isFieldsVisibleOnUpdateIdDetails(updateIdDetailsPage.searchAuditIdBox)).toBeTrue();
            expect(await updateIdDetailsPage.isFieldsVisibleOnUpdateIdDetails(updateIdDetailsPage.auditStatusDropdown)).toBeTrue();
            expect(await updateIdDetailsPage.isFieldsVisibleOnUpdateIdDetails(updateIdDetailsPage.copyIdsButton)).toBeTrue();
            expect(await updateIdDetailsPage.isFieldsVisibleOnUpdateIdDetails(updateIdDetailsPage.pagination)).toBeTrue();
            expect(await updateIdDetailsPage.isFieldsVisibleOnUpdateIdDetails(updateIdDetailsPage.bottomInfo)).toBeTrue();
        })
        it("Validate update Id detail table column headers sortable or not", async () => {
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.tableHeader)) == (historyData.updateIdDetailsTableHeader)).toBeTrue();
            expect(await updateIDDetailsPage.isColumnSortable()).toBeTrue();
        })
        it("Validate options of updated status dropdown", async () => {
            await updateIDDetailsPage.clickStatusDropdown();
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.statusDropdownValues)) == (historyData.statusDropdownValuesData)).toBeTrue();
        })
        it("Validating checkboxes to select audits", async () => {
            expect(await updateIDDetailsPage.isCheckBoxClickable(updateIDDetailsPage.headerCheckBox)).toBeTrue();
            expect(await updateIDDetailsPage.isRowCheckBoxClickable()).toBeTrue();
        })
        it("Validate functionality of copy IDs button", async () => {
            await updateIDDetailsPage.clickSelectAllAuditsCheckbox();
            await updateIDDetailsPage.clickCopyIDsButton();
            expect(await commonUtility.visibilityOfSuccessToaster()).toEqual("Success\n" + await updateAuditsHistoryPage.getTotalRecordsListed(1) + " " + "Audit IDs have been copied successfully.");
        })
        it("Validate page size and page navigation on update ID details page", async () => {
            expect(await updateIDDetailsPage.isPageSizeDisplayed()).toBeTrue();
            expect(await updateIDDetailsPage.ispageNavigationDisplayed()).toBeTrue();
        })
        it("Validate bottom info label and username of user", async () => {
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.bottomInfoLabels)) == (historyData.bottonInfoLabels)).toBeTrue();
            expect(await updateIDDetailsPage.getBottomInfoUsernameText()).toEqual(loginData.userName);
        })
        it("Validate sorting on the columns on update ID details page", async () => {
            // SORTING ON AUDIT ID COLUMN
            await updateIDDetailsPage.clickElementToSort(updateIDDetailsPage.auditIdColumnSort);
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.auditIdColumnData)) == (await updateAuditsHistoryPage.getMultiElementDataAndSortInDescending(updateIdDetailsPage.auditIdColumnData))).toBeTrue();
            await updateIDDetailsPage.clickElementToSort(updateIDDetailsPage.auditIdColumnAscendingSortIcon);
            let dataOfAuditIdColumnArray = new Array(await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.auditIdColumnData));
            let sortAuditIdDataInAscending = dataOfAuditIdColumnArray.sort();
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.auditIdColumnData)) == (await updateAuditsHistoryPage.getFilteredDataFromArray(sortAuditIdDataInAscending))).toBeTrue();
            // SORTING ON CLAIM NUMBER COLUMN
            await updateIDDetailsPage.clickElementToSort(updateIDDetailsPage.claimColumnSort);
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.claimColumnData)) == (await updateAuditsHistoryPage.getMultiElementDataAndSortInDescending(updateIdDetailsPage.claimColumnData))).toBeTrue();
            await updateIDDetailsPage.clickElementToSort(updateIDDetailsPage.claimColumnAscendingSortIcon);
            let dataOfClaimColumnArray = new Array(await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.claimColumnData));
            let sortClaimDataInAscending = dataOfClaimColumnArray.sort();
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.claimColumnData)) == (await updateAuditsHistoryPage.getFilteredDataFromArray(sortClaimDataInAscending))).toBeTrue();
            // SORTING ON AMOUNT COLUMN
            await updateIDDetailsPage.clickElementToSort(updateIDDetailsPage.amountColumnSort);
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.amountColumnData)) == (await updateAuditsHistoryPage.getMultiElementDataAndSortInDescending(updateIdDetailsPage.amountColumnData))).toBeTrue();
            await updateIDDetailsPage.clickElementToSort(updateIDDetailsPage.amountColumnAscendingSortIcon);
            let dataOfAmountColumnArray = new Array(await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.amountColumnData));
            let sortAmountDataInAscending = dataOfAmountColumnArray.sort();
            expect((await commonUtility.getMultiElementTextOneByOne(updateIDDetailsPage.amountColumnData)) == (await updateAuditsHistoryPage.getFilteredDataFromArray(sortAmountDataInAscending))).toBeTrue();
        })
        it("Validate page number options on update Id details page", async () => {
            expect(await updateIdDetailsPage.isFieldsVisibleOnUpdateIdDetails(updateIdDetailsPage.pageNumberOption)).toBeTrue();
            expect(await updateAuditsHistoryPage.isPageNumberOptionLeftArrowDisabled(updateIDDetailsPage.pageNumberOptionOnUpdateIdDetailsLeftArrow)).toBeTrue();
        })
        it("Validate pagination present on update Id details page", async () => {
            await updateIDDetailsPage.enterIntoPaginationBox(await updateIDDetailsPage.getTotalAuditsListed(1));
            if (await updateIDDetailsPage.getTotalAuditsListed(1) > 100) {
                expect(await updateIDDetailsPage.getPaginationErrorText()).toEqual(historyData.paginationInlineError);
            } else {
                expect(await updateIDDetailsPage.getTotalAuditsListed(1)).toBeGreaterThanOrEqual(await updateIDDetailsPage.actualAuditsCount());
            }
        })
        it("Validate functionality of search with audit ID", async () => {
            let auditIdBeforeSearch = await updateIDDetailsPage.getFirstAuditIdFromTable();
            await updateIDDetailsPage.enterAuditIdToSearch();
            expect((await updateIDDetailsPage.bodyRowCheckBoxes.length) == ('1')).toBeTrue();
            expect(await updateIDDetailsPage.getFirstAuditIdFromTable()).toEqual(auditIdBeforeSearch);
        })
    })
})