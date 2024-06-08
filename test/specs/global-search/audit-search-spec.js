import loginPage from "../../pageobjects/login/login-page";
import auditSearchTestData from "../../../resources/global-search/audit-search-test-data.json";
import menuOptionsPage from "../../pageobjects/menuoptions-page"
import auditSearch from "../../pageobjects/global-search/audit-search-page"
import commonUtilities from "../../../utilities/common-utilities";
import connectToDatabase from "../../../utilities/database-connection";

describe("Test Cases for Audit Search", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it("Validate navigating to Audit Search tab", async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(auditSearch.auditSearchTab);
            expect(await auditSearch.checkAuditSearchTabIsOpen()).toEqual(auditSearchTestData.activeTab);

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the default message is displayed on the Audit Search tab", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.defaultMessage)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the content of the default message on the Audit Search tab", async () => {
        try {
            expect(await commonUtilities.getElementText(auditSearch.defaultMessage)).toContain(auditSearchTestData.defaultMessageOnAuditSearch);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Verify the default fields of the Audit search tab", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.claimNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditIDField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.datasetField)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the buttons displayed on the Audit Search tab", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.searchButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.clearButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.generateLettorsButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.generateExtractButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.bulkUpdateButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.createMRRButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.columnSelectionButton)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the tool-tip displayed on the Dataset dropdown", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.datasetInfoIcon)).toBe(true);
            expect(await auditSearch.getTooltipText(auditSearch.datasetInfoIcon)).toContain(auditSearchTestData.datasetTooltipText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the tool-tip displayed on the Search button", async () => {
        try {
            expect(await auditSearch.checkSearchTooltipIsDisplayed()).toBe(true);
            expect(await commonUtilities.getElementText(auditSearch.searchButtonTooltipText)).toContain(auditSearchTestData.searchButtonTooltipText)
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by Claim Number ", async () => {
        try {
            await commonUtilities.enterValueInElement(auditSearch.claimNumberField,auditSearchTestData.claimNumber);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            expect(await commonUtilities.getElementText(auditSearch.claimNumber)).toContain(auditSearchTestData.claimNumber);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by incorrect Claim Number ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.editButton);
            await commonUtilities.clickOnElement(auditSearch.clearButton);
            await commonUtilities.enterValueInElement(auditSearch.claimNumberField,auditSearchTestData.incorrectClaimNumber);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            expect(await commonUtilities.getElementText(auditSearch.noData)).toContain(auditSearchTestData.noData);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by Audit Id ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.editButton);
            await commonUtilities.clickOnElement(auditSearch.clearButton);
            await commonUtilities.enterValueInElement(auditSearch.auditIDField,auditSearchTestData.auditId);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            expect(await commonUtilities.getElementText(auditSearch.auditId)).toContain(auditSearchTestData.auditId);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by incorrect Audit Id ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.editButton);
            await commonUtilities.clickOnElement(auditSearch.clearButton);
            await commonUtilities.enterValueInElement(auditSearch.auditIDField,auditSearchTestData.incorrectAuditId);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            expect(await commonUtilities.getElementText(auditSearch.noData)).toContain(auditSearchTestData.noData);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching by multiple Audit Id's ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.editButton);
            await commonUtilities.clickOnElement(auditSearch.clearButton);
            await commonUtilities.enterValueInElement(auditSearch.auditIDField,auditSearchTestData.multipleAuditId);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            expect(await commonUtilities.isElementDisplayed(auditSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate clear button functionality", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.editButton);
            await commonUtilities.clickOnElement(auditSearch.clearButton);
            expect(await commonUtilities.getElementText(auditSearch.claimNumberField)).toEqual(auditSearchTestData.claimNumberFieldValue);
            expect(await commonUtilities.getElementText(auditSearch.auditIDField)).toEqual(auditSearchTestData.auditIdFieldValue);
            expect(await commonUtilities.getElementText(auditSearch.datasetField)).toContain(auditSearchTestData.datasetPalceholderText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate additional fields after selecting Dataset ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.datasetField);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.datasetValue);
            expect(await commonUtilities.isElementDisplayed(auditSearch.lineOfBusinessField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditStatusField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.organizationNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.stateField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.projectField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.conceptIDField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.conceptNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.subscriberIDField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.dateOfServiceField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.memberNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.patientFirstNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.patientLastNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.providerNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.providerTinField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.providerNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.dateEnteredField)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the tool-tip displayed on the Audit Status dropdown", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditStatusInfoIcon)).toBe(true);
            expect(await auditSearch.getTooltipText(auditSearch.auditStatusInfoIcon)).toContain(auditSearchTestData.auditStatusTooltipText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate the search button is disabled when only dataset field is selected/ 6.47 Regression:NPP-12903", async () => {
        try {
            expect(await commonUtilities.isElementEnabled(auditSearch.searchButton)).toBe(false);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate searching with Dataset and Line of Business fields ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.lineOfBusinessField);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.lineOfBusinessValue);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(auditSearch.loader);
            expect(await commonUtilities.isElementDisplayed(auditSearch.filterLabel)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating that a user can search using dataset and additional fields ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.editButton);
            await commonUtilities.clickOnElement(auditSearch.auditTypeField);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.auditTypeValue);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            expect(await commonUtilities.isElementDisplayed(auditSearch.filterLabel)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
});

describe("Testing Page Size and Pagination functionality on Audit Search", function () {
    it("Validating Page Size is displayed on Audit Search", async () => {
        try {
            await commonUtilities.waitUntilLoaderFinishedLoading(auditSearch.loader);
            expect(await commonUtilities.isElementDisplayed(auditSearch.pageSize)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating default value in Page Size drop-down", async () => {
        try {
            expect(await commonUtilities.getElementText(auditSearch.pageSize)).toContain(auditSearchTestData.defaultPageSize);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Page Size functionality ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.pageSize);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.newPageSize);
            expect(await commonUtilities.getElementText(auditSearch.pageSize)).toContain(auditSearchTestData.newPageSize);
            expect(await auditSearch.getSearchResultTableRowsCount()).toBeLessThanOrEqual(auditSearchTestData.rowCount);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Pagination is displayed ", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.pagination)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Pagination functionality ", async () => {
        try {
           expect (await commonUtilities.verifyPagination(auditSearch.totalSearchResultRows)).toBeLessThanOrEqual(auditSearchTestData.rowCount);
           await commonUtilities.waitUntilLoaderFinishedLoading(auditSearch.loader);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

});

describe("Testing Letter Generation functionality on Audit Search", function () {
    it("Validating Generate Letter Modal is visible ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.generateLettorsButton);
            expect(await commonUtilities.isElementDisplayed(auditSearch.generateLettersModal)).toBe(true);
            expect(await commonUtilities.getElementText(auditSearch.generateLettersText)).toContain(auditSearchTestData.generateLettersForAuditText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate fields and buttons present on Generate Letter Modal", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.letterCategoryField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.templateNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.checkBulkUpdateText)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.checkBox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.generateLettersButtonOnModal)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.cancelButtonLetterModal)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating inline error message for mandatory fields on Generate Letter Modal ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.generateLettersButtonOnModal);
            expect(await commonUtilities.getElementText(auditSearch.inlineErrorMessage)).toContain(auditSearchTestData.inlineErrorMessageOnLetterModal);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Cancel button functionality on Generate Letter Modal ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.cancelButtonLetterModal);
            expect(await auditSearch.checkAuditSearchTabIsOpen()).toEqual(auditSearchTestData.activeTab);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Letter Generation on Audit Search ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.generateLettorsButton);
            await commonUtilities.clickOnElement(auditSearch.letterCategoryField);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.letterCategoryValue);
            await commonUtilities.clickOnElement(auditSearch.templateNameField);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.templateNameValue);
            await commonUtilities.clickOnElement(auditSearch.generateLettersButtonOnModal);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(auditSearchTestData.letterGenerationToasterMessage);
            await commonUtilities.waitForToasterMessageToDisappear();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
});

describe("Testing Bulk Update functionality on Audit Search", function () {
    it("Validating Bulk Update Modal is visible ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.bulkUpdateButton);
            expect(await commonUtilities.isElementDisplayed(auditSearch.bulkUpdateModal)).toBe(true);
            expect(await commonUtilities.getElementText(auditSearch.bulkUpdateText)).toContain(auditSearchTestData.bulkUpdateText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate fields and buttons present on Bulk Update Modal", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditTypeFieldBulkUpdate)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditStatusFieldBulkUpdate)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditIdFieldBulkUpdate)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.internalCommentField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.notesField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.updateButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.cancelButtonBulkUpdate)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Cancel button functionality on Bulk Update modal ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.cancelButtonBulkUpdate);
            expect(await auditSearch.checkAuditSearchTabIsOpen()).toEqual(auditSearchTestData.activeTab);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Update button is disabled by default on Bulk Update modal ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.bulkUpdateButton);
            expect(await commonUtilities.isElementEnabled(auditSearch.updateButton)).toBe(false);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Bulk Update functionality on Audit Search ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.auditTypeFieldBulkUpdate);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.auditTypeValue);
            await commonUtilities.clickOnElement(auditSearch.auditStatusFieldBulkUpdate);
            await commonUtilities.selectDropDownOptions(auditSearchTestData.auditStatusValueBulkUpdate);
            await commonUtilities.enterValueInElement(auditSearch.internalCommentField,auditSearchTestData.internalComment);
            await commonUtilities.clickOnElement(auditSearch.updateButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(auditSearchTestData.bulkUpdateToasterMessage);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

});

describe("Testing Column Selection functionality on Audit Search", function () {
    it("Validating Column Selection Modal is visible ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.columnSelectionButton);
            expect(await commonUtilities.isElementDisplayed(auditSearch.columnSelectionModal)).toBe(true);
            expect(await commonUtilities.getElementText(auditSearch.columnSelectionText)).toContain(auditSearchTestData.columnSelectionText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Cancel button functionality on Column Selection modal", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.cancelButtonColumnSelection);
            expect(await auditSearch.checkAuditSearchTabIsOpen()).toEqual(auditSearchTestData.activeTab);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Adding new column ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.columnSelectionButton);
            await commonUtilities.enterValueInElement(auditSearch.availableColumnSearchField,auditSearchTestData.lob);
            await commonUtilities.clickOnElement(auditSearch.addButton);
            await commonUtilities.clickOnElement(auditSearch.applyButton);
            expect(await commonUtilities.getMultiElementTextOneByOne(auditSearch.columnHeaders)).toEqual(auditSearchTestData.updatedColumnHeaders);        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating Deleting column ", async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.columnSelectionButton);
            await commonUtilities.enterValueInElement(auditSearch.addedToProjectSearchField,auditSearchTestData.lob);
            await commonUtilities.clickOnElement(auditSearch.deleteButton);
            await commonUtilities.clickOnElement(auditSearch.applyButton);
            expect(await commonUtilities.getMultiElementTextOneByOne(auditSearch.columnHeaders)).toEqual(auditSearchTestData.columnHeaders);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
});

describe("Testing Generate Medical Record Request functionality on Audit Search", function () {
    it('Validating no button functionality on generate medical record request', async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.editButton);
            await commonUtilities.clickOnElement(auditSearch.clearButton);
            await commonUtilities.enterValueInElement(auditSearch.auditIDField,auditSearchTestData.auditId);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            await commonUtilities.clickOnElement(auditSearch.createMRRButton);
            await commonUtilities.clickOnElement(auditSearch.mrrNoButton);
            expect(await auditSearch.checkAuditSearchTabIsOpen()).toEqual(auditSearchTestData.activeTab);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it('Validating generate medical record request functionality for audit on Audit Search ', async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.createMRRButton);
            await commonUtilities.clickOnElement(auditSearch.mrrYesButton);
            await commonUtilities.waitForToasterMessageToDisappear();
            await commonUtilities.clickOnElement(auditSearch.auditId);
            await commonUtilities.clickOnElement(auditSearch.medicalRecordTab);
            let mrrDate = await commonUtilities.getElementText(auditSearch.mrrRequestDate);
            let todayDate = await commonUtilities.getPresentDate();
            expect(mrrDate).toEqual(todayDate);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it('Validating deleting medical record request', async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await connectToDatabase();
            await auditSearch.deletingMedicalRecordRequest(auditSearchTestData.claimNumber);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

});

describe("Testing Generate Extract functionality on Audit Search", function () {
    it('Validating generate extract functionality on Audit Search', async () => {
        try {
            await commonUtilities.clickOnElement(auditSearch.generateExtractButton);
            expect(await auditSearch.verifyExtractDownload()).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

});

describe("Testing Audit Detail Screen", function () {
    it("Validating landing on Audit detail screen", async function () {
        try {
            await commonUtilities.clickOnElement(auditSearch.auditId);
            expect(await commonUtilities.getElementText(auditSearch.claimNumberText)).toContain(auditSearchTestData.claimNumber);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating parent tabs on Audit detail screen", async function () {
        try {
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.auditTab)).toBe(true);
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.claimTab)).toBe(true);
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.linesTab)).toBe(true);
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.providerTab)).toBe(true);
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.memberTab)).toBe(true);
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.clinicalTab)).toBe(true);
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.customFieldsTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.imagesTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.cobTab)).toBe(true);
            expect(await auditSearch.isTabElementDisplayed(auditSearchTestData.medicalRecordTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.otherAuditsTab)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating sub-tabs on Audit detail screen", async function () {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.mainTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.transactionTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.invoiceTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.historyTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.notesTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.internalCommentsTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.imagesSubTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.qualityTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.eventsTab)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.ibrTab)).toBe(true);
        } catch (error) {

            fail("Failed due to exception " + error);
        }
    });

    it("Validating sections on main tab of Audit detail screen", async function () {
        try {
            expect(await commonUtilities.isElementDisplayed(auditSearch.claimSummary)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(auditSearch.auditInfo)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
});
