import loginPage from "../../../pageobjects/login/login-page";
import noteTemplatesTestData from "../../../../resources/administration/data-setup/note-templates-test-data.json";
import menuOptionsPage from "../../../pageobjects/menuoptions-page";
import noteTemplates from "../../../pageobjects/administration/data-setup/note-templates-page";
import commonUtilities from "../../../../utilities/common-utilities";
import auditSearch from "../../../pageobjects/global-search/audit-search-page"

describe("Test Cases for Note Templates", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Validating navigation to Note Templates screen", async () => {
        await commonUtilities.clickOnElement(menuOptionsPage.administration);
        await commonUtilities.clickOnElement(menuOptionsPage.dataSetup);
        await commonUtilities.clickOnElement(menuOptionsPage.noteTemplates);
        expect(await commonUtilities.getElementText(noteTemplates.noteTemplatesListScreen)).toContain(noteTemplatesTestData.noteTemplatesListText);
    });
    it('Validating New button and navigation to Create Note Template screen', async () => {
        try {
            await commonUtilities.clickOnElement(noteTemplates.createNoteTemplateButton);
            expect(await commonUtilities.getElementText(noteTemplates.noteTemplateScreen)).toContain(noteTemplatesTestData.createNoteTemplates);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating the fields and buttons present on Create Note Template screen', async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(noteTemplates.nameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.noteField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.teamsField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.noteTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.datasetField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.noteCommentLocationField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.auditTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.prepayCheckbox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.postpayCheckbox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.saveButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(noteTemplates.cancelButton)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Verify error message on mandatory fields on Create Note Template screen", async () => {
        await commonUtilities.clickOnElement(noteTemplates.saveButton);
        expect(await commonUtilities.getElementText(noteTemplates.nameFieldInlineError)).toEqual(noteTemplatesTestData.errorMessageNameField);
        expect(await commonUtilities.getElementText(noteTemplates.noteFieldInlineError)).toEqual(noteTemplatesTestData.errorMessageNoteField);
        expect(await commonUtilities.getElementText(noteTemplates.noteTypeFieldInlineError)).toEqual(noteTemplatesTestData.errorMessageNoteTypeField);
        expect(await commonUtilities.getElementText(noteTemplates.noteCommentLocationFieldInlineError)).toEqual(noteTemplatesTestData.errorMessageNoteCommentLocationField);
        expect(await commonUtilities.getElementText(noteTemplates.auditTypeFieldInlineError)).toEqual(noteTemplatesTestData.errorMessageAuditTypeField);
    });
    it('Validating cancel button functionality on Create Note Template screen', async () => {
        try {
            await commonUtilities.clickOnElement(noteTemplates.cancelButton);
            expect(await commonUtilities.getElementText(noteTemplates.noteTemplatesListScreen)).toContain(noteTemplatesTestData.noteTemplatesListText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating creation of Note Template', async () => {
        try {
            await commonUtilities.clickOnElement(noteTemplates.createNoteTemplateButton);
            await commonUtilities.clickOnElement(noteTemplates.auditTypeField);
            await commonUtilities.selectDropDownOptions(noteTemplatesTestData.auditTypeFieldValue);
            await commonUtilities.clickOnElement(noteTemplates.noteCommentLocationField);
            await commonUtilities.selectDropDownOptions(noteTemplatesTestData.noteCommentLocationFieldValue);
            await commonUtilities.clickOnElement(noteTemplates.noteTypeField);
            await commonUtilities.selectDropDownOptions(noteTemplatesTestData.noteTypeFieldValue);
            await commonUtilities.enterValueInElement(noteTemplates.nameField, noteTemplatesTestData.noteTemplateName);
            await commonUtilities.enterValueInElement(noteTemplates.noteField, noteTemplatesTestData.note);
            await commonUtilities.clickOnElement(noteTemplates.saveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(noteTemplatesTestData.createSuccessToaster);
            await commonUtilities.waitForToasterMessageToDisappear();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    xit('Validating created Note Template in application', async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(auditSearch.auditSearchTab);
            await commonUtilities.enterValueInElement(auditSearch.auditIDField, noteTemplatesTestData.auditID);
            await commonUtilities.clickOnElement(auditSearch.searchButton);
            await commonUtilities.clickOnElement(auditSearch.auditId);
            await commonUtilities.clickOnElement(noteTemplates.auditSearchNoteTypeField);
            await commonUtilities.selectDropDownOptions(noteTemplatesTestData.noteTypeFieldValue);
            await commonUtilities.clickOnElement(noteTemplates.auditSearchNoteTemplateField);
            expect(await noteTemplates.verifyDataInNoteTemplateField(noteTemplatesTestData.noteTemplateName)).toBe(true);
            await commonUtilities.clickOnElement(menuOptionsPage.menuArrow);
            await commonUtilities.clickOnElement(menuOptionsPage.administration);
            await commonUtilities.clickOnElement(menuOptionsPage.dataSetup);
            await commonUtilities.clickOnElement(menuOptionsPage.noteTemplates);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating duplicate Note Template error', async () => {
        try {
            await commonUtilities.clickOnElement(noteTemplates.createNoteTemplateButton);
            await commonUtilities.clickOnElement(noteTemplates.auditTypeField);
            await commonUtilities.selectDropDownOptions(noteTemplatesTestData.auditTypeFieldValue);
            await commonUtilities.clickOnElement(noteTemplates.noteCommentLocationField);
            await commonUtilities.selectDropDownOptions(noteTemplatesTestData.noteCommentLocationFieldValue);
            await commonUtilities.clickOnElement(noteTemplates.noteTypeField);
            await commonUtilities.selectDropDownOptions(noteTemplatesTestData.noteTypeFieldValue);
            await commonUtilities.enterValueInElement(noteTemplates.nameField, noteTemplatesTestData.noteTemplateName);
            await commonUtilities.enterValueInElement(noteTemplates.noteField, noteTemplatesTestData.note);
            await commonUtilities.clickOnElement(noteTemplates.saveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(noteTemplatesTestData.duplicateNoteTemplateErrorMessage);
            await commonUtilities.clickOnElement(noteTemplates.errorToaster);
            await commonUtilities.clickOnElement(noteTemplates.cancelButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    describe("Testing Column Filter functionality on Note Templates List screen", () => {
        it("Verify Column Filter section along with the fields and buttons present on it after clicking on Column Filter Icon", async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.auditTypeColumnFilter);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.columnFilterSection)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.columnFilterSearchBox)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.columnFilterApplyButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.columnFilterCancelButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.columnFilterClearButton)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Apply and Clear buttons are disabled before selecting value in Column Filter", async () => {
            try {
                expect(await commonUtilities.checkElementIsClickable(noteTemplates.columnFilterApplyButton)).toBe(false);
                expect(await commonUtilities.checkElementIsClickable(noteTemplates.columnFilterClearButton)).toBe(false);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Apply and Clear buttons are enabled after selecting a value in Column Filter", async () => {
            try {
                await commonUtilities.enterValueInElement(noteTemplates.columnFilterSearchBox, noteTemplatesTestData.auditTypeColumnFilterValue);
                await commonUtilities.selectValueInColumnFilter(noteTemplates.columnFilterOptions, noteTemplates.columnFilterCheckBox, noteTemplatesTestData.auditTypeColumnFilterValue);
                expect(await commonUtilities.isElementEnabled(noteTemplates.columnFilterApplyButton)).toBe(true);
                expect(await commonUtilities.isElementEnabled(noteTemplates.columnFilterClearButton)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Cancel button functionality on Column Filter", async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.columnFilterCancelButton);
                expect(await commonUtilities.isElementExisting(noteTemplates.columnFilterSection)).toBe(false);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Apply button functionality on Column Filter", async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.auditTypeColumnFilter);
                await commonUtilities.enterValueInElement(noteTemplates.columnFilterSearchBox, noteTemplatesTestData.auditTypeColumnFilterValue);
                await commonUtilities.selectValueInColumnFilter(noteTemplates.columnFilterOptions, noteTemplates.columnFilterCheckBox, noteTemplatesTestData.auditTypeColumnFilterValue);
                await commonUtilities.clickOnElement(noteTemplates.columnFilterApplyButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.appliedColumnFilterIcon)).toBe(true);
                expect(await commonUtilities.getElementText(noteTemplates.auditType)).toContain(noteTemplatesTestData.auditTypeColumnFilterValue);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Clear button functionality on Column Filter", async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.auditTypeColumnFilter);
                await commonUtilities.clickOnElement(noteTemplates.columnFilterClearButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.isElementExisting(noteTemplates.columnFilterSection)).toBe(false);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Page Size and Pagination functionality on Note Templates", function () {
        it('Verify page size is displayed on Note Templates List screen', async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(noteTemplates.pageSizeInput)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating default value in Page Size", async () => {
            try {
                expect(await commonUtilities.getElementText(noteTemplates.pageSizeInput)).toBeLessThanOrEqual(noteTemplatesTestData.defaultPageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Page Size functionality", async () => {
            try {
                await commonUtilities.enterValueInPageSize(noteTemplates.pageSizeInput, noteTemplatesTestData.pageSize);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.getElementsCount(noteTemplates.totalSearchResultRows)).toBeLessThanOrEqual(noteTemplatesTestData.pageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Pagination is displayed", async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(noteTemplates.pagination)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Pagination functionality", async () => {
            try {
                expect(await commonUtilities.verifyPagination(noteTemplates.totalSearchResultRows)).toBeLessThanOrEqual(noteTemplatesTestData.pageSize);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Search panel functionality on Note Templates screen", function () {
        it('Validate default fields and buttons present on search panel', async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(noteTemplates.nameField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.teamsField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.noteTypeField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.datasetField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.noteCommentLocationField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.prepayCheckbox)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.postpayCheckbox)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.searchButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.clearButton)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify no search result screen for search', async () => {
            try {
                await commonUtilities.enterValueInElement(noteTemplates.nameField, noteTemplatesTestData.incorrectNoteTemplateName);
                await commonUtilities.clickOnElement(noteTemplates.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.getElementText(noteTemplates.noSearchResults)).toContain(noteTemplatesTestData.noSearchResultText);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify clear button functionality', async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.clearButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.getElementText(noteTemplates.nameField)).toEqual(noteTemplatesTestData.placeholderText)
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify search functionality', async () => {
            try {
                await commonUtilities.enterValueInElement(noteTemplates.nameField, noteTemplatesTestData.noteTemplateName);
                await commonUtilities.clickOnElement(noteTemplates.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.getElementText(noteTemplates.name)).toEqual(noteTemplatesTestData.noteTemplateName);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Edit functionality on Note Template", function () {
        it('Verify navigate to Edit Note Template screen', async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.name);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.getElementText(noteTemplates.noteTemplateScreen)).toContain(noteTemplatesTestData.editNoteTemplates);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify Note Template edit functionality', async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.datasetField);
                await commonUtilities.selectDropDownOptions(noteTemplatesTestData.datasetFieldValue);
                await commonUtilities.clickOnElement(noteTemplates.saveButton);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(noteTemplatesTestData.editSuccessToaster);
                await commonUtilities.waitForToasterMessageToDisappear();
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing History functionality on Note Template", function () {
        it('Verify navigate to History Tab', async () => {
            try {
                await commonUtilities.enterValueInElement(noteTemplates.nameField, noteTemplatesTestData.noteTemplateName);
                await commonUtilities.clickOnElement(noteTemplates.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                await commonUtilities.clickOnElement(noteTemplates.name);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                await commonUtilities.clickOnElement(noteTemplates.historyTab);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.historyTable)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify columns on History Tab', async () => {
            try {
                expect(await commonUtilities.getMultiElementTextOneByOne(noteTemplates.historyColumnHeaders)).toEqual(noteTemplatesTestData.historyColumnHeaders);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify History functionality', async () => {
            try {
                let dateText = await commonUtilities.getElementText(noteTemplates.noteTemplateHistoryDate);
                let historyDate = dateText.substring(0, 10);
                let currentDate = await commonUtilities.getPresentDate();
                expect(historyDate).toEqual(currentDate);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Delete functionality on Note Template", function () {
        it('Verify clicking on delete button confirmation modal is displayed', async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.detailsTab);
                await commonUtilities.clickOnElement(noteTemplates.cancelButton);
                await commonUtilities.enterValueInElement(noteTemplates.nameField, noteTemplatesTestData.noteTemplateName);
                await commonUtilities.clickOnElement(noteTemplates.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                await commonUtilities.clickOnElement(noteTemplates.deleteButton);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.confirmationModal)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify delete confirmation modal", async () => {
            try {
                expect(await commonUtilities.getElementText(noteTemplates.confirmationModalHeaderText)).toContain(noteTemplatesTestData.confirmationModalHeaderText);
                expect(await commonUtilities.getElementText(noteTemplates.confirmationModalText)).toContain(noteTemplatesTestData.deleteConfirmationModalText);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.confirmationModalYesButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(noteTemplates.confirmationModalCancelButton)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify clicking on Cancel button will close the confirmation modal", async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.confirmationModalCancelButton);
                expect(await commonUtilities.elementNotDisplayed(noteTemplates.confirmationModal)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Verify Yes button will close the confirmation modal and Note Template is deleted", async () => {
            try {
                await commonUtilities.clickOnElement(noteTemplates.deleteButton);
                await commonUtilities.clickOnElement(noteTemplates.confirmationModalYesButton);
                expect(await commonUtilities.elementNotDisplayed(noteTemplates.confirmationModal)).toBe(true);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(noteTemplatesTestData.deleteSuccessToaster);
                await commonUtilities.waitForToasterMessageToDisappear();
                await commonUtilities.enterValueInElement(noteTemplates.nameField, noteTemplatesTestData.noteTemplateName);
                await commonUtilities.clickOnElement(noteTemplates.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(noteTemplates.loader);
                expect(await commonUtilities.getElementText(noteTemplates.noSearchResults)).toContain(noteTemplatesTestData.noSearchResultText);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
});