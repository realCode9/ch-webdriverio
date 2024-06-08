import loginPage from "../../pageobjects/login/login-page";
import menuOption from "../../pageobjects/menuoptions-page";
import claimTestData from "../../../resources/pareo-clinical/claim-selection-management-test-data.json";
import claimSelectionPage from "../../pageobjects/pareo-clinical/claim-selection-management-page";
import commonUtilities from "../../../utilities/common-utilities";
import connectToDatabase from "../../../utilities/database-connection";

describe("Claim Selection Management", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Verify navigate to Claim Selection Management", async () => {
        await commonUtilities.clickOnElement(menuOption.pareoClinical);
        await commonUtilities.clickOnElement(menuOption.claimSelectionManagement);
        await expect(browser).toHaveUrl(claimTestData.claimSelectionPageUrl);
    });
    describe("Testing Search panel functionality", () => {
        it("Verify fields and buttons on search panel", async () => {
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.datasetDropdown)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.queryTypeDropdown)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.claimPaidDateRange)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.configureClaimDatafields)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.hideSearchButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.savedFiltersDropdownButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.searchButtonQueryListing)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.clearButtonQueryListing)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.saveFilterButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.claimPaidDateRange)).toBe(true);
        });
        it("Verify error message when Dataset and Query Type fields have no value selected", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.searchButtonQueryListing);
            expect(await commonUtilities.getElementText(claimSelectionPage.unselectedDatasetError)).toEqual(claimTestData.errorMessageDataset);
            expect(await commonUtilities.getElementText(claimSelectionPage.unselectedQueryTypeError)).toEqual(claimTestData.errorMessageQueryType);
            await commonUtilities.clickOnElement(claimSelectionPage.clearButtonQueryListing);
            await commonUtilities.clickOnElement(claimSelectionPage.saveFilterButton);
            expect(await commonUtilities.getElementText(claimSelectionPage.unselectedDatasetError)).toEqual(claimTestData.errorMessageDataset);
            expect(await commonUtilities.getElementText(claimSelectionPage.unselectedQueryTypeError)).toEqual(claimTestData.errorMessageQueryType);
        })
        it("Verify Claim Datafields is enabled after selecting value in Query Type", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.queryTypeDropdown);
            await commonUtilities.selectDropDownOptions(claimTestData.queryTypeValue);
            expect(await commonUtilities.isElementEnabled(claimSelectionPage.configureClaimDatafields)).toBe(true);
        })
        it("Verify Claim Paid Date Range field", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.datasetDropdown);
            await commonUtilities.selectDropDownOptions(claimTestData.datasetValue);
            await commonUtilities.enterValueInElement(claimSelectionPage.claimPaidDateRange, claimTestData.incorrectDateRangeFormat);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.incorrectDateRangeTooltip)).toBe(true);
            await claimSelectionPage.incorrectDateRangeTooltip.moveTo();
            expect(await commonUtilities.getElementText(claimSelectionPage.incorrectDateRangeTooltipError)).toContain(claimTestData.incorrectDateRangeTooltipText);
            await commonUtilities.enterValueInElement(claimSelectionPage.claimPaidDateRange, claimTestData.invalidDateRange);
            await commonUtilities.clickOnElement(claimSelectionPage.searchButtonQueryListing);
            expect(await commonUtilities.getElementText(claimSelectionPage.invalidDateRangeError)).toContain(claimTestData.invalidDateRangeErrorMessage);
        })
        it("Verify Search button functionality on Query listing screen", async () => {
            await commonUtilities.enterValueInElement(claimSelectionPage.claimPaidDateRange, claimTestData.dateRange);
            await commonUtilities.clickOnElement(claimSelectionPage.searchButtonQueryListing);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.querySearchResultTable)).toBe(true);
        })
        it("Verify Clear button functionalty on Query listing screen", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.clearButtonQueryListing);
            expect(await commonUtilities.getElementText(claimSelectionPage.datasetDropdown)).toContain(claimTestData.datasetPlaceholderText);
            expect(await commonUtilities.getElementText(claimSelectionPage.queryTypeDropdown)).toContain(claimTestData.queryTypePlaceholderText);
            expect(await commonUtilities.getElementText(claimSelectionPage.noSearchResults)).toContain(claimTestData.noSearchResultText);
        })
    });
    describe("Testing Saving Filter functionality", () => {
        it("Verify of Save Filter modal is visible", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.datasetDropdown);
            await commonUtilities.selectDropDownOptions(claimTestData.datasetValue);
            await commonUtilities.clickOnElement(claimSelectionPage.queryTypeDropdown);
            await commonUtilities.selectDropDownOptions(claimTestData.queryTypeValue);
            await commonUtilities.clickOnElement(claimSelectionPage.saveFilterButton);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.querySaveFilterModal)).toBe(true);
        });
        it("Verify Save Filter modal is closed after clicking on Cancel Button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.saveFilterCancelButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.querySaveFilterModal)).toBe(false);
        });
        it("Verify Save filter functionality after clicking on Save button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.saveFilterButton);
            await commonUtilities.enterValueInElement(claimSelectionPage.addName, claimTestData.addName);
            await commonUtilities.clickOnElement(claimSelectionPage.saveFilterSaveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(claimTestData.saveFilterSuccessToasterMessage);
            await commonUtilities.waitForToasterMessageToDisappear();
        });
        it("Verify duplicate filter error toaster message", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.saveFilterButton);
            await commonUtilities.enterValueInElement(claimSelectionPage.addName, claimTestData.addName);
            await commonUtilities.clickOnElement(claimSelectionPage.saveFilterSaveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(claimTestData.savedFilterDuplicateErrorToaster);
            await commonUtilities.clickOnElement(claimSelectionPage.errorToaster);
        });
        it("Verify the Saved Filters Dropdown is Visible after Clicking on Saved Filters Button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.savedFiltersDropdownButton);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.savedFiltersDropdown)).toBe(true);
        });
        it("Verify the Filters and Buttons are Visible after Clicking on Edit of Saved Filter", async () => {
            await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.addName, claimSelectionPage.editFilterIcon);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.editFilterLabel)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.datasetDropdown)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.queryTypeDropdown)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.claimPaidDateRange)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.configureClaimDatafields)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.editSaveButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.editCancelButton)).toBe(true);
        });
        it("Verify the Edit Filter after Clicking on Cancel button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.editCancelButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.editFilterLabel)).toBe(false);
        });
        it("Verify the Edit Filter functionality", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.savedFiltersDropdownButton);
            await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.addName, claimSelectionPage.editFilterIcon);
            await commonUtilities.enterValueInElement(claimSelectionPage.claimPaidDateRange, claimTestData.updatedDateRange);
            await commonUtilities.clickOnElement(claimSelectionPage.editSaveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(claimTestData.saveFilterSuccessToasterMessage);
            await commonUtilities.waitForToasterMessageToDisappear();
        });
        it("Verify Yes and No buttons are visible after clicking on delete button of a Saved Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.savedFiltersDropdownButton);
            await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.addName, claimSelectionPage.deleteFilterIcon);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.deleteYesButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.deleteNoButton)).toBe(true);
        });
        it("Verify No button functionality after clicking on No button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.deleteNoButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.deleteYesButton)).toBe(false);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.deleteNoButton)).toBe(false);
        });
        it("Verify the Saved Filter is deleted after clicking on Yes button", async () => {
            await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.addName, claimSelectionPage.deleteFilterIcon);
            await commonUtilities.clickOnElement(claimSelectionPage.deleteYesButton);
            await browser.pause(1000);
            let savedFiltersDropdownButtonText = await commonUtilities.getElementText(claimSelectionPage.savedFiltersDropdownButton);
            if (savedFiltersDropdownButtonText == "0 Saved Filters") {
                expect(await commonUtilities.isElementEnabled(claimSelectionPage.savedFiltersDropdownButton)).toBe(false);
            }
            else {
                expect(await claimSelectionPage.disappearanceOfSavedFilter(claimTestData.addName)).toBeFalse;
                await commonUtilities.clickOnElement(claimSelectionPage.crossIconSavedFiltersDropdown);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.savedFiltersDropdown)).toBe(false);
            }
        });
    });
    describe("Testing Page Size and Pagination functionality on Query listing screen", function () {
        it('Verify Page Size is displayed on Query listing screen', async () => {
            try {
                await commonUtilities.clickOnElement(claimSelectionPage.datasetDropdown);
                await commonUtilities.selectDropDownOptions(claimTestData.datasetValue);
                await commonUtilities.clickOnElement(claimSelectionPage.queryTypeDropdown);
                await commonUtilities.selectDropDownOptions(claimTestData.queryTypeValue);
                await commonUtilities.enterValueInElement(claimSelectionPage.claimPaidDateRange, claimTestData.updatedDateRange);
                await commonUtilities.clickOnElement(claimSelectionPage.searchButtonQueryListing);
                await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.pageSizeInput)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify default value in Page Size", async () => {
            try {
                expect(await commonUtilities.getElementText(claimSelectionPage.pageSizeInput)).toBeLessThanOrEqual(claimTestData.defaultPageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Page Size functionality", async () => {
            try {
                await commonUtilities.enterValueInPageSize(claimSelectionPage.pageSizeInput, claimTestData.pageSize);
                await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
                expect(await commonUtilities.getElementsCount(claimSelectionPage.totalSearchResultRows)).toBeLessThanOrEqual(claimTestData.pageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Pagination is displayed", async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.pagination)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Pagination functionality", async () => {
            try {
                expect(await commonUtilities.verifyPagination(claimSelectionPage.totalSearchResultRows)).toBeLessThanOrEqual(claimTestData.pageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Expand Calendar View and Collapse Calendar View link text", () => {
        it("Verify the expanded view after clicking on Expand Calendar View", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.expandCalendarView);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.queryExpandedView)).toBe(true);
        });
        it("Verify the collapse view after clicking on Calendar View link text", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.collapseCalendarView);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.queryExpandedView)).toBe(false);
        });
    });
    describe("Testing Expand and Collapse View for a query on the search results", () => {
        it("Verify the Expand View of a individual query", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.arrowIcon);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.queryExpandedView)).toBe(true);
        })
        it("Verify the Collapse View of a individual query", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.arrowIcon);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.queryExpandedView)).toBe(false);
        })
    });
    describe("Testing the Hide Search and Filter&Search button", () => {
        it("Verify the Search Filters section are visible after clicking on Filter & Search button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.filterAndSearchButton);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterSearchSection)).toBe(true);
        });
        it("Verify the Search Filters section is hidden after clicking on Hide Search button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.hideSearchButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.filterSearchSection)).toBe(false);
        });
    });
    describe("Testing Column Filter functionality on Query Name and Query Number", () => {
        it("Verify Column Filter section along with the fields and buttons present on it after clicking on Column Filter Icon", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.filterAndSearchButton);
            await commonUtilities.clickOnElement(claimSelectionPage.searchButtonQueryListing);
            await commonUtilities.clickOnElement(claimSelectionPage.queryNumColumnFilter);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterSection)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterSearchBox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterApplyButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterCancelButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterClearButton)).toBe(true);
            await commonUtilities.clickOnElement(claimSelectionPage.queryNameColumnFilter);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterSection)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterSearchBox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterApplyButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterCancelButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterClearButton)).toBe(true);
        });
        it("Verify Apply and Clear buttons are disabled before selecting value in Column Filter", async () => {
            expect(await commonUtilities.checkElementIsClickable(claimSelectionPage.columnFilterApplyButton)).toBe(false);
            expect(await commonUtilities.checkElementIsClickable(claimSelectionPage.columnFilterClearButton)).toBe(false);
            await commonUtilities.clickOnElement(claimSelectionPage.queryNumColumnFilter);
            expect(await commonUtilities.checkElementIsClickable(claimSelectionPage.columnFilterApplyButton)).toBe(false);
            expect(await commonUtilities.checkElementIsClickable(claimSelectionPage.columnFilterClearButton)).toBe(false);
        });
        it("Verify Apply and Clear buttons are enabled after selecting a value in Column Filter", async () => {
            await commonUtilities.enterValueInElement(claimSelectionPage.columnFilterSearchBox, claimTestData.queryNumberColumnFilterValue);
            await claimSelectionPage.selectValueInColumnFilter(claimTestData.queryNumberColumnFilterValue);
            expect(await commonUtilities.isElementEnabled(claimSelectionPage.columnFilterApplyButton)).toBe(true);
            expect(await commonUtilities.isElementEnabled(claimSelectionPage.columnFilterClearButton)).toBe(true);
            await commonUtilities.clickOnElement(claimSelectionPage.queryNameColumnFilter);
            await commonUtilities.enterValueInElement(claimSelectionPage.columnFilterSearchBox, claimTestData.queryNameColumnFilterValue);
            await claimSelectionPage.selectValueInColumnFilter(claimTestData.queryNameColumnFilterValue);
            expect(await commonUtilities.isElementEnabled(claimSelectionPage.columnFilterApplyButton)).toBe(true);
            expect(await commonUtilities.isElementEnabled(claimSelectionPage.columnFilterClearButton)).toBe(true);
        });
        it("Verify Cancel button functionality on Column Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterCancelButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.columnFilterSection)).toBe(false);
        });
        it("Verify Apply button functionality on Column Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.queryNameColumnFilter);
            await commonUtilities.enterValueInElement(claimSelectionPage.columnFilterSearchBox, claimTestData.queryNameColumnFilterValue);
            await claimSelectionPage.selectValueInColumnFilter(claimTestData.queryNameColumnFilterValue);
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterApplyButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.appliedColumnFilterIcon)).toBe(true);
            expect(await commonUtilities.getElementText(claimSelectionPage.queryName)).toContain(claimTestData.queryNameColumnFilterValue);
            await commonUtilities.clickOnElement(claimSelectionPage.appliedColumnFilterIcon);
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterClearButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            await commonUtilities.clickOnElement(claimSelectionPage.queryNumColumnFilter);
            await commonUtilities.enterValueInElement(claimSelectionPage.columnFilterSearchBox, claimTestData.queryNumberColumnFilterValue);
            await claimSelectionPage.selectValueInColumnFilter(claimTestData.queryNumberColumnFilterValue);
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterApplyButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.appliedColumnFilterIcon)).toBe(true);
            expect(await commonUtilities.getElementText(claimSelectionPage.queryNumber)).toContain(claimTestData.queryNumberColumnFilterValue);
        });
        it("Verify Clear button functionality on Column Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.appliedColumnFilterIcon);
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterClearButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.appliedColumnFilterIcon)).toBe(false);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
        });
    });
    it("Verify View Claims and Request Records Buttons are displayed on Query Listing screen", async () => {
        expect(await commonUtilities.isElementDisplayed(claimSelectionPage.viewClaimsButton)).toBe(true);
        expect(await commonUtilities.isElementDisplayed(claimSelectionPage.requestRecordsButton)).toBe(true);
    });
    it("Verify clicking on View Claims and Request Records buttons on Query Listing screen without selecting any query must give an inline error message", async () => {
        await commonUtilities.clickOnElement(claimSelectionPage.viewClaimsButton);
        expect(await commonUtilities.getElementText(claimSelectionPage.inlineErrorMessage)).toContain(claimTestData.inlineErrorMessage);
        await commonUtilities.clickOnElement(claimSelectionPage.selectAllCheckboxOfQueries);
        expect(await commonUtilities.isElementExisting(claimSelectionPage.inlineErrorMessage)).toBe(false);
        await commonUtilities.clickOnElement(claimSelectionPage.selectAllCheckboxOfQueries);
        await commonUtilities.clickOnElement(claimSelectionPage.requestRecordsButton);
        expect(await commonUtilities.getElementText(claimSelectionPage.inlineErrorMessage)).toContain(claimTestData.inlineErrorMessage);
    });
});
describe("Testing Select Claims Screen", () => {
    it("Verify navigating to Select Claim screen", async () => {
        await commonUtilities.clickOnElement(claimSelectionPage.selectAllCheckboxOfQueries);
        await commonUtilities.clickOnElement(claimSelectionPage.viewClaimsButton);
        expect(await commonUtilities.getElementText(claimSelectionPage.selectClaimsText)).toContain(claimTestData.selectClaims);
    });
    describe("Testing Select Columns functionality on Select Claims Screen", () => {
        it("Verify Select Columns dropdown along with the fields and buttons present on it after clicking on Select Columns button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsButton);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectColumnsSection)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectColumnsApplyButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectColumnsCancelButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectColumnsClearButton)).toBe(true);
        });
        it("Verify Cancel button functionality on Select Columns", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsCancelButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.selectColumnsSection)).toBe(false);
        });
        it("Verify Clear button functionality on Select Columns", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsButton);
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsClearButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.selectColumnsSection)).toBe(false);
            expect(await commonUtilities.getMultiElementTextOneByOne(claimSelectionPage.selectClaimsColumnHeaders)).toEqual(claimTestData.updatedColumnHeaders);
        });
        it("Verify Apply button functionality on Select Columns", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsButton);
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsSelectAllCheckBox);
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsApplyButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.selectColumnsSection)).toBe(false);
            expect(await commonUtilities.getMultiElementTextOneByOne(claimSelectionPage.selectClaimsColumnHeaders)).toEqual(claimTestData.selectClaimsColumnHeaders);
        });
    });
    describe("Testing Hide and Show functionality on Select Claims Screen", () => {
        it("Verify clicking on Hide button on Select Claim screen will hide the filter section and button label should changed to Show", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.hideShowButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.filterSection)).toBe(false);
            expect(await commonUtilities.getElementText(claimSelectionPage.hideShowButton)).toContain(claimTestData.show);
        });
        it("Verify clicking on Show button on Select Claim screen will show the filter section and button label should changed to Hide", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.hideShowButton);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterSection)).toBe(true);
            expect(await commonUtilities.getElementText(claimSelectionPage.hideShowButton)).toContain(claimTestData.hide);
        });
    });
    describe("Testing Column Filter functionality on Select Claims screen", () => {
        it("Verify Column Filter section along with the fields and buttons present on it after clicking on Column Filter Icon", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.providerNumColumnFilter);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterSection)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterSearchBox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterApplyButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterCancelButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.columnFilterClearButton)).toBe(true);
        });
        it("Verify Apply and Clear buttons are disabled before selecting value in Column Filter", async () => {
            expect(await commonUtilities.checkElementIsClickable(claimSelectionPage.columnFilterApplyButton)).toBe(false);
            expect(await commonUtilities.checkElementIsClickable(claimSelectionPage.columnFilterClearButton)).toBe(false);
        });
        it("Verify Apply and Clear buttons are enabled after selecting a value in Column Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.providerNumColumnFilter);
            await commonUtilities.enterValueInElement(claimSelectionPage.columnFilterSearchBox, claimTestData.providerNumColumnFilterValue);
            await claimSelectionPage.selectValueInColumnFilter(claimTestData.providerNumColumnFilterValue);
            expect(await commonUtilities.isElementEnabled(claimSelectionPage.columnFilterApplyButton)).toBe(true);
            expect(await commonUtilities.isElementEnabled(claimSelectionPage.columnFilterClearButton)).toBe(true);
        });
        it("Verify Cancel button functionality on Column Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterCancelButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.columnFilterSection)).toBe(false);
        });
        it("Verify Apply button functionality on Column Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.providerNumColumnFilter);
            await commonUtilities.enterValueInElement(claimSelectionPage.columnFilterSearchBox, claimTestData.providerNumColumnFilterValue);
            await claimSelectionPage.selectValueInColumnFilter(claimTestData.providerNumColumnFilterValue);
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterApplyButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.appliedColumnFilterIcon)).toBe(true);
            expect(await commonUtilities.getElementText(claimSelectionPage.providerNumber)).toContain(claimTestData.providerNumColumnFilterValue);
        });
        it("Verify Clear button functionality on Column Filter", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.appliedColumnFilterIcon);
            await commonUtilities.clickOnElement(claimSelectionPage.columnFilterClearButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.appliedColumnFilterIcon)).toBe(false);
        });
    });
    describe("Testing Page Size and Pagination functionality on Select Claims screen", () => {
        it('Verify Page Size is displayed on Select Claims screen', async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.pageSizeInput)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify default value in Page Size on Select Claims screen", async () => {
            try {
                expect(await commonUtilities.getElementText(claimSelectionPage.pageSizeInput)).toBeLessThanOrEqual(claimTestData.defaultSelectClaimsPageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Page Size functionality on Select Claims screen", async () => {
            try {
                await commonUtilities.enterValueInPageSize(claimSelectionPage.pageSizeInput, claimTestData.pageSize);
                await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
                expect(await commonUtilities.getElementsCount(claimSelectionPage.selectClaimsTotalSearchResultRows)).toBeLessThanOrEqual(claimTestData.pageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Pagination is displayed on Select Claims screen", async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.pagination)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Pagination functionality on Select Claims screen", async () => {
            try {
                expect(await commonUtilities.verifyPagination(claimSelectionPage.selectClaimsTotalSearchResultRows)).toBeLessThanOrEqual(claimTestData.pageSize);
                await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Header and Line on Select Claims Screen", () => {
        it("Verify clicking on down arrow button on Select Claim listing screen will expand the list row", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectClaimsListDowmArrow);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.headerTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.lineTab)).toBe(true);
        });
        it("Verify Header Tab is selected by default on clicking down arrow button on Select Claim listing screen", async () => {
            expect(await commonUtilities.getElementAttributeValue(claimSelectionPage.activeTab,claimTestData.attributeValue)).toContain(claimTestData.activeTab);
        });
        it("Verify Sections displayed on Header Tab", async () => {
            expect(await commonUtilities.getMultiElementTextOneByOne(claimSelectionPage.headerTabSections)).toEqual(claimTestData.headerSections);
        });
        it("Verify Line Tab is selected by clicking on line tab on Select Claim listing screen", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.lineTab);
            await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            expect(await commonUtilities.getElementAttributeValue(claimSelectionPage.activeTab,claimTestData.attributeValue)).toContain(claimTestData.activeTab);
        });
        it("Verify Line Tab on Select Claim screen", async () => {
            let lineDataPresence = await claimSelectionPage.getlineDataPresence(claimSelectionPage.lineTableData);
            switch (lineDataPresence) {
                case true: {
                    if (lineDataPresence == true) {
                        expect(await commonUtilities.getElementText(claimSelectionPage.noLines)).toContain(claimTestData.noLines);
                        await commonUtilities.clickOnElement(claimSelectionPage.selectClaimsListUpArrow);
                    }
                    break;
                }
                case false: {
                    let linesCount = await commonUtilities.getElementsCount(claimSelectionPage.lineRecord);
                    if (linesCount >= 4) {
                        expect(await commonUtilities.isElementDisplayed(claimSelectionPage.viewAll)).toBe(true);
                        expect(await commonUtilities.getMultiElementTextOneByOne(claimSelectionPage.lineModalColumnHeaders)).toEqual(claimTestData.lineColumnHeaders);
                        await commonUtilities.clickOnElement(claimSelectionPage.viewAll);
                        expect(await commonUtilities.isElementDisplayed(claimSelectionPage.lineModal)).toBe(true);
                        expect(await commonUtilities.getElementText(claimSelectionPage.lineModalHeaderText)).toContain(claimTestData.lines);
                        expect(await commonUtilities.getMultiElementTextOneByOne(claimSelectionPage.lineTabColumnHeaders)).toEqual(claimTestData.lineColumnHeaders);
                        await commonUtilities.clickOnElement(claimSelectionPage.crossIcon);
                        expect(await commonUtilities.isElementExisting(claimSelectionPage.lineModal)).toBe(false);
                        await commonUtilities.clickOnElement(claimSelectionPage.selectClaimsListUpArrow);
                    }
                    else if (linesCount < 4) {
                        expect(linesCount).toBeLessThan(4);
                        expect(await commonUtilities.isElementExisting(claimSelectionPage.viewAll)).toBe(false);
                        expect(await commonUtilities.getMultiElementTextOneByOne(claimSelectionPage.lineModalColumnHeaders)).toEqual(claimTestData.lineColumnHeaders);
                        await commonUtilities.clickOnElement(claimSelectionPage.selectClaimsListUpArrow);
                    }
                    break;
                }

            };
        });
    });
    describe("Testing Filter section on Select Claims Screen", () => {
        describe("Testing Select Filter functionality on Select Claims Screen", () => {
            it("Verify filter section on Select Claim screen ", async () => {
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterSection)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectFiltersButton)).toBe(true);
            });
            it("Verify filter drop-down is displayed on clicking Select Filters button", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectFiltersDropdown)).toBe(true);
            });
            it("Verify Select Filters drop-down", async () => {
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.savedFiltersLink)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterDataListSection)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterClearButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterApplyButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterCancelButton)).toBe(true);
            });
            it("Verify Cancel functionality on Select Filters drop-down", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.filterCancelButton);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.selectFiltersDropdown)).toBe(false);
            });
            it("Verify Clear functionality on Select Filters drop-down", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await claimSelectionPage.selectValueFromSelectFiltersDropdown(claimTestData.selectFilterValue);
                await commonUtilities.clickOnElement(claimSelectionPage.filterClearButton);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.selectFiltersDropdown)).toBe(false);
            });
            it("Verify Apply functionality on Select Filters drop-down", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await claimSelectionPage.selectValueFromSelectFiltersDropdown(claimTestData.selectFilterValue);
                await commonUtilities.clickOnElement(claimSelectionPage.filterApplyButton);
                expect(await commonUtilities.getElementText(claimSelectionPage.filterByText)).toContain(claimTestData.filterBy);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.billTypeField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterBySearchButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterBySaveButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterByResetAllButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.filterByRemoveAllButton)).toBe(true);
            });
        });
        describe("Testing Filter By section on Select Claims Screen", () => {
            it("Verify inline error message on Filter By section when Save button is clicked without entering value in filter", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.filterBySaveButton);
                expect(await commonUtilities.getElementText(claimSelectionPage.filterSaveInlineErrorMessage)).toContain(claimTestData.saveInlineErrorMessage);
            });
            it("Verify Save Filter modal is displayed when Save button is clicked after entering value in filter on Filter By section", async () => {
                await commonUtilities.enterValueInElement(claimSelectionPage.billTypeField, claimTestData.billType);
                await commonUtilities.clickOnElement(claimSelectionPage.filterBySaveButton);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectClaimSaveFilterModal)).toBe(true);
            });
            it("Verify fields and buttons on Save Filter modal on Select Claim screen", async () => {
                expect(await commonUtilities.getElementText(claimSelectionPage.selectClaimSaveFilterText)).toContain(claimTestData.saveFilter);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectClaimfilterModalTextField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectClaimfilterModalSaveButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectClaimfilterModalCancelButton)).toBe(true);
            });
            it("Verify clicking on Cancel button will close the Save Filter modal on Select Claim screen", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectClaimfilterModalCancelButton);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.selectClaimSaveFilterModal)).toBe(false);
            });
            it("Verify Save button is disabled by default on Save Filter modal", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.filterBySaveButton);
                expect(await commonUtilities.isElementEnabled(claimSelectionPage.selectClaimfilterModalSaveButton)).toBe(false);
            });
            it("Verify Save button is enabled on entering data in the text field on Save Filter modal", async () => {
                await commonUtilities.enterValueInElement(claimSelectionPage.selectClaimfilterModalTextField, claimTestData.savedFilter);
                expect(await commonUtilities.isElementEnabled(claimSelectionPage.selectClaimfilterModalSaveButton)).toBe(true);
            });
            it("Verify clicking on Save button will save the filter and success toaster will be displayed on Select Claim screen", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectClaimfilterModalSaveButton);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(claimTestData.saveFilterSuccessToasterMessage);
                await commonUtilities.waitForToasterMessageToDisappear();
            });
            it("Verify the Filters and Buttons are Visible after Clicking on Edit of Saved Filter", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await commonUtilities.scrollToElement(claimSelectionPage.filterSaved);
                await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.savedFilter, claimSelectionPage.editFilterIcon);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectClaimsEditFilterLabel)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.editSaveButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.editCancelButton)).toBe(true);
            });
            it("Verify the Edit Filter after Clicking on Cancel button", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.editCancelButton);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectFiltersButton)).toBe(true);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.selectClaimsEditFilterLabel)).toBe(false);
            });
            it("Verify the Edit Filter functionality", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await commonUtilities.scrollToElement(claimSelectionPage.filterSaved);
                await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.savedFilter, claimSelectionPage.editFilterIcon);
                await commonUtilities.enterValueInElement(claimSelectionPage.billTypeField, claimTestData.updatedBillType);
                await commonUtilities.clickOnElement(claimSelectionPage.editSaveButton);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(claimTestData.editFilterSuccessToasterMessage);
                await commonUtilities.waitForToasterMessageToDisappear();
            });
            it("Verify Yes and No buttons are visible after clicking on delete button of a Saved Filter", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await commonUtilities.scrollToElement(claimSelectionPage.filterSaved);
                await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.savedFilter, claimSelectionPage.deleteFilterIcon);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.deleteYesButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.deleteNoButton)).toBe(true);
            });
            it("Verify No button functionality after cicking on No button", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.deleteNoButton);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.deleteYesButton)).toBe(false);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.deleteNoButton)).toBe(false);
            });
            it("Verify the Saved Filter is deleted after clicking on Yes button", async () => {
                await commonUtilities.clickOnFilterIcon(claimSelectionPage.savedFilterNameValues, claimTestData.savedFilter, claimSelectionPage.deleteFilterIcon);
                await commonUtilities.clickOnElement(claimSelectionPage.deleteYesButton);
                expect(await claimSelectionPage.disappearanceOfSavedFilter(claimTestData.savedFilter)).toBeFalse;
            });
        });
        describe("Testing Search, Reset All and Remove All Filter functionality on Select Claims Screen", () => {
            it("Verify clicking on Search button search results must be displayed", async () => {
                await claimSelectionPage.selectValueFromSelectFiltersDropdown(claimTestData.selectFilterValue);
                await commonUtilities.clickOnElement(claimSelectionPage.filterApplyButton);
                await commonUtilities.enterValueInElement(claimSelectionPage.billTypeField, claimTestData.billType);
                await commonUtilities.clickOnElement(claimSelectionPage.filterBySearchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.listSection)).toBe(true);
            });
            it("Verify clicking on Reset All button must reset the values from the filters", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.filterByResetAllButton);
                expect(await commonUtilities.getElementText(claimSelectionPage.billTypeField)).toEqual(claimTestData.placeholderText);
            });
            it("Verify clicking on Remove All button without searching the filter must remove all the filters", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.filterByRemoveAllButton);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.filterBySearchButton)).toBe(false);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectFiltersButton)).toBe(true);
            });
            it("Verify confirmation modal is displayed on clicking on Remove All button after searching the filter", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await claimSelectionPage.selectValueFromSelectFiltersDropdown(claimTestData.selectFilterValue);
                await commonUtilities.clickOnElement(claimSelectionPage.filterApplyButton);
                await commonUtilities.enterValueInElement(claimSelectionPage.billTypeField, claimTestData.billType);
                await commonUtilities.clickOnElement(claimSelectionPage.filterBySearchButton);
                await commonUtilities.clickOnElement(claimSelectionPage.filterByRemoveAllButton);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
            });
            it("Verify Remove All confirmation modal", async () => {
                expect(await commonUtilities.getElementText(claimSelectionPage.confirmationModalHeaderText)).toContain(claimTestData.confirmationModalHeaderText);
                expect(await commonUtilities.getElementText(claimSelectionPage.confirmationModalText)).toContain(claimTestData.removeAllConfirmationModalText);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModalYesButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModalCancelButton)).toBe(true);
            });
            it("Verify clicking on Cancel button will close the confirmation modal and no filters are removed", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.confirmationModalCancelButton);
                expect(await commonUtilities.elementNotDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
            });
            it("Verify Yes button will close the confirmation modal and filters are removed", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.filterByRemoveAllButton);
                await commonUtilities.clickOnElement(claimSelectionPage.confirmationModalYesButton);
                expect(await commonUtilities.elementNotDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectFiltersButton)).toBe(true);
                await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            });
            it("Verify clicking on Delete button without searching the filter must remove that filter", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await claimSelectionPage.selectValueFromSelectFiltersDropdown(claimTestData.selectFilterValue);
                await commonUtilities.clickOnElement(claimSelectionPage.filterApplyButton);
                await claimSelectionPage.billTypeField.moveTo();
                await commonUtilities.clickOnElement(claimSelectionPage.deleteButton);
                expect(await commonUtilities.isElementExisting(claimSelectionPage.billTypeField)).toBe(false);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectFiltersButton)).toBe(true);
            });
            it("Verify confirmation modal is displayed on clicking on Delete button after searching the filter", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.selectFiltersButton);
                await claimSelectionPage.selectValueFromSelectFiltersDropdown(claimTestData.selectFilterValue);
                await commonUtilities.clickOnElement(claimSelectionPage.filterApplyButton);
                await commonUtilities.enterValueInElement(claimSelectionPage.billTypeField, claimTestData.billType);
                await commonUtilities.clickOnElement(claimSelectionPage.filterBySearchButton);
                await claimSelectionPage.billTypeField.moveTo();
                await commonUtilities.clickOnElement(claimSelectionPage.deleteButton);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
            });
            it("Verify delete confirmation modal", async () => {
                expect(await commonUtilities.getElementText(claimSelectionPage.confirmationModalHeaderText)).toContain(claimTestData.confirmationModalHeaderText);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModalYesButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModalCancelButton)).toBe(true);
            });
            it("Verify clicking on Cancel button will close the confirmation modal and filter is not removed", async () => {
                await commonUtilities.clickOnElement(claimSelectionPage.confirmationModalCancelButton);
                expect(await commonUtilities.elementNotDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
            });
            it("Verify Yes button will close the confirmation modal and filter is removed", async () => {
                await claimSelectionPage.billTypeField.moveTo();
                await commonUtilities.clickOnElement(claimSelectionPage.deleteButton);
                await commonUtilities.clickOnElement(claimSelectionPage.confirmationModalYesButton);
                expect(await commonUtilities.elementNotDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectFiltersButton)).toBe(true);
                await commonUtilities.waitUntilLoaderFinishedLoading(claimSelectionPage.loader);
            });
        });
    });
    describe("Testing Export Claim button functionality on Select Claims Screen", () => {
        it("Verify clicking on Export Claim button on Select Claim screen without selecting any claim must give an inline error message", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.exportClaimsButton);
            expect(await commonUtilities.getElementText(claimSelectionPage.selectClaimsInlineErrorMessage)).toContain(claimTestData.inlineErrorMessage);
        });
        it("Verify export claim to .xls functionality", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectClaimListCheckbox);
            await commonUtilities.clickOnElement(claimSelectionPage.exportClaimsButton);
            let isFileExist = await claimSelectionPage.verifyExportClaims();
            expect(isFileExist).toBe(true);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(claimTestData.exportToasterMessage);
            await commonUtilities.clickOnElement(claimSelectionPage.exportSuccessToaster);
        });
    });
    describe("Testing Record Request button functionality on Select Claims Screen", () => {
        it("Verify clicking on Record Request button on Select Claim screen without selecting any claim must give an inline error message", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.requestRecordsButton);
            expect(await commonUtilities.getElementText(claimSelectionPage.selectClaimsInlineErrorMessage)).toContain(claimTestData.inlineErrorMessage);
        });
        it("Verify confirmation modal is displayed after clicking on Record Request button", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectClaimListCheckbox);
            await commonUtilities.clickOnElement(claimSelectionPage.requestRecordsButton);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
            expect(await commonUtilities.getElementText(claimSelectionPage.confirmationModalHeaderText)).toContain(claimTestData.confirmationModalHeaderText);
            expect(await commonUtilities.getElementText(claimSelectionPage.confirmationModalText)).toContain(claimTestData.recordRequestConfirmationModalText);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModalYesButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.confirmationModalNoButton)).toBe(true);
        });
        it("Verify clicking on Cancel button will close the confirmation modal", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.confirmationModalNoButton);
            expect(await commonUtilities.elementNotDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
        });
        it("Verify clicking on Yes button will close the confirmation modal and Medical Record Request is created", async () => {
            let claimNumber = await commonUtilities.getElementText(claimSelectionPage.claimNumberData);
            await commonUtilities.clickOnElement(claimSelectionPage.requestRecordsButton);
            await commonUtilities.clickOnElement(claimSelectionPage.confirmationModalYesButton);
            expect(await commonUtilities.elementNotDisplayed(claimSelectionPage.confirmationModal)).toBe(true);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(claimTestData.recordRequestToasterMessage);
            await connectToDatabase();
            await claimSelectionPage.deletingMedicalRecordRequest(claimNumber);
        });
    });
    describe("Testing Back button functionality on Select Claims Screen", () => {
        it("Verify clicking on Back button on Select Claim screen will go back to Claim Selection Management screen ", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.backButton);
            expect(await commonUtilities.getElementText(claimSelectionPage.claimSelectionManagementText)).toContain(claimTestData.claimSelectionManagement);
        });
    });
});