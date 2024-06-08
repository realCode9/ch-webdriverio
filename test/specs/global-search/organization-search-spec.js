import loginPage from "../../pageobjects/login/login-page";
import organizationSearchTestData from "../../../resources/global-search/organization-search-test-data.json";
import menuOptionsPage from "../../pageobjects/menuoptions-page"
import organizationSearch from "../../pageobjects/global-search/organization-search-page"
import commonUtilities from "../../../utilities/common-utilities";

describe("Test Cases for Organization Search", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it("Validate navigating to Organization Search tab", async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(organizationSearch.organizationSearchTab);
            expect(await organizationSearch.checkOrganizationSearchTabIsOpen()).toEqual(organizationSearchTestData.activeTab);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Verify the default fields of the Organization search tab", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(organizationSearch.claimNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.auditIDField)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the buttons displayed on the Organization Search tab", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(organizationSearch.searchButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.clearButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.columnSelectionButton)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by Claim Number ", async () => {
        try {
            await commonUtilities.enterValueInElement(organizationSearch.claimNumberField,organizationSearchTestData.claimNumber);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            expect(await commonUtilities.getElementText(organizationSearch.claimNumber)).toContain(organizationSearchTestData.claimNumber);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by multiple Claim Numbers ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.clearButton);
            await commonUtilities.enterValueInElement(organizationSearch.claimNumberField,organizationSearchTestData.multipleClaiNumber);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.isElementDisplayed(organizationSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by incorrect Claim Number ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.clearButton);
            await commonUtilities.enterValueInElement(organizationSearch.claimNumberField,organizationSearchTestData.incorrectClaimNumber);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.getElementText(organizationSearch.noData)).toContain(organizationSearchTestData.noData);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by Audit Id ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.clearButton);
            await commonUtilities.enterValueInElement(organizationSearch.auditIDField,organizationSearchTestData.auditId);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.getElementText(organizationSearch.auditId)).toContain(organizationSearchTestData.auditId);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by multiple Audit Id's ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.clearButton);
            await commonUtilities.enterValueInElement(organizationSearch.auditIDField,organizationSearchTestData.multipleAuditId);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.isElementDisplayed(organizationSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by incorrect Audit Id ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.clearButton);
            await commonUtilities.enterValueInElement(organizationSearch.auditIDField,organizationSearchTestData.incorrectAuditId);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.getElementText(organizationSearch.noData)).toContain(organizationSearchTestData.noData);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate clear button functionality", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.clearButton);
            expect(await commonUtilities.getElementText(organizationSearch.claimNumberField)).toEqual(organizationSearchTestData.claimNumberFieldValue);
            expect(await commonUtilities.getElementText(organizationSearch.auditIDField)).toEqual(organizationSearchTestData.auditIdFieldValue);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the tool-tip displayed on the Audit Status dropdown", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(organizationSearch.auditStatusInfoIcon)).toBe(true);
            expect(await organizationSearch.getTooltipText(organizationSearch.auditStatusInfoIcon)).toContain(organizationSearchTestData.auditStatusTooltipText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    
    it("Validate searching by Audit Type ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.auditTypeField);
            await commonUtilities.selectDropDownOptions(organizationSearchTestData.auditTypeValue);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.isElementDisplayed(organizationSearch.filterLabel)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by Audit Type and Audit Status ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.auditStatusField);
            await commonUtilities.selectDropDownOptions(organizationSearchTestData.auditStatusValue);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.isElementDisplayed(organizationSearch.filterLabel)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
});

describe("Testing Page Size and Pagination functionality on Organization Search", function () {
    it("Validating Page Size is displayed on Organization Search", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(organizationSearch.pageSize)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating default value in Page Size drop-down", async () => {
        try {
            expect(await commonUtilities.getElementText(organizationSearch.pageSize)).toContain(organizationSearchTestData.defaultPageSize);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Page Size functionality ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.pageSize);
            await commonUtilities.selectDropDownOptions(organizationSearchTestData.newPageSize);
            await organizationSearch.waitForLoaderToDisappear();
            expect(await commonUtilities.getElementText(organizationSearch.pageSize)).toContain(organizationSearchTestData.newPageSize);
            expect(await organizationSearch.getSearchResultTableRowsCount()).toBeLessThanOrEqual(organizationSearchTestData.rowCount);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Pagination is displayed ", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(organizationSearch.pagination)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Pagination functionality ", async () => {
        try {
            expect(await commonUtilities.verifyPagination(organizationSearch.totalSearchResultRows)).toBeLessThanOrEqual(organizationSearchTestData.rowCount);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

});
describe("Testing Column Selection functionality on Organization Search", function () {
    it("Validating Column Selection Modal is visible ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.columnSelectionButton);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.columnSelectionModal)).toBe(true);
            expect(await commonUtilities.getElementText(organizationSearch.columnSelectionText)).toContain(organizationSearchTestData.columnSelectionText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Cancel button functionality on Column Selection modal", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.cancelButton);
            expect(await organizationSearch.checkOrganizationSearchTabIsOpen()).toEqual(organizationSearchTestData.activeTab);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Deleting column ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.columnSelectionButton);
            await commonUtilities.enterValueInElement(organizationSearch.addedToProjectSearchField,organizationSearchTestData.status);
            await commonUtilities.clickOnElement(organizationSearch.deleteButton);
            await commonUtilities.clickOnElement(organizationSearch.applyButton);
            expect(await commonUtilities.getMultiElementTextOneByOne(organizationSearch.columnHeaders)).toEqual(organizationSearchTestData.columnHeaders);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Adding new column ", async () => {
        try {
            await commonUtilities.clickOnElement(organizationSearch.columnSelectionButton);
            await commonUtilities.enterValueInElement(organizationSearch.availableColumnSearchField,organizationSearchTestData.status);
            await commonUtilities.clickOnElement(organizationSearch.addButton);
            await commonUtilities.clickOnElement(organizationSearch.applyButton);
            expect(await commonUtilities.getMultiElementTextOneByOne(organizationSearch.columnHeaders)).toEqual(organizationSearchTestData.updatedColumnHeaders);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
});

describe("Testing Organization Detail Screen", function () {
    it("Validating landing on Organization detail screen", async function () {
        try {
            await commonUtilities.clickOnElement(organizationSearch.editButton);
            await commonUtilities.clickOnElement(organizationSearch.clearButton);
            await commonUtilities.enterValueInElement(organizationSearch.claimNumberField,organizationSearchTestData.claimNumber);
            await commonUtilities.clickOnElement(organizationSearch.searchButton);
            await commonUtilities.clickOnElement(organizationSearch.auditId);
            expect(await commonUtilities.getElementText(organizationSearch.claimNumberText)).toContain(organizationSearchTestData.claimNumber);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating parent tabs on Organization detail screen", async function () {
        try {
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.auditTab)).toBe(true);
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.claimTab)).toBe(true);
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.linesTab)).toBe(true);
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.providerTab)).toBe(true);
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.memberTab)).toBe(true);
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.clinicalTab)).toBe(true);
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.customFieldsTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.imagesTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.cobTab)).toBe(true);
            expect(await organizationSearch.isTabElementDisplayed(organizationSearchTestData.medicalRecordTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.otherAuditsTab)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating sub-tabs on Organization detail screen", async function () {
        try {
            expect(await commonUtilities.isElementDisplayed(organizationSearch.mainTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.transactionTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.invoiceTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.historyTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.notesTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.internalCommentsTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.imagesSubTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.qualityTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.eventsTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.ibrTab)).toBe(true);
        } catch (error) {

            fail("Failed due to exception " + error);
        }
    });

    it("Validating sections on main tab of Organization detail screen", async function () {
        try {
            expect(await commonUtilities.isElementDisplayed(organizationSearch.claimSummary)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(organizationSearch.auditInfo)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
});
