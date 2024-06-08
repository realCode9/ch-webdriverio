import loginPage from "../../pageobjects/login/login-page";
import medicalRecordSearchTestData from "../../../resources/global-search/medical-record-search-test-data.json";
import menuOptionsPage from "../../pageobjects/menuoptions-page"
import medicalRecordSearch from "../../pageobjects/global-search/medical-record-search-page"
import commonUtilities from "../../../utilities/common-utilities";

describe("Test Cases for Medical Record Search", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Validate navigating to Medical Record Search tab", async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(medicalRecordSearch.medicalRecordSearchTab);
            expect(await commonUtilities.getElementAttributeValue(medicalRecordSearch.medicalRecordSearchTab, medicalRecordSearchTestData.attribute)).toEqual(medicalRecordSearchTestData.activeTab);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate the default message on the Medical Record Search tab", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.defaultMessage)).toBe(true);
            expect(await commonUtilities.getElementText(medicalRecordSearch.defaultMessage)).toContain(medicalRecordSearchTestData.defaultMessageOnMedicalRecordSearch);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate the default fields and buttons on the Medical Record search tab", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.claimNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.medicalRecordIDField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.datasetField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.searchButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.clearButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.generateLettersButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.generateExtractButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.columnSelectionButton)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate the tool-tip displayed on the Dataset dropdown", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.datasetInfoIcon)).toBe(true);
            expect(await commonUtilities.getElementAttributeValue(medicalRecordSearch.datasetInfoIcon, medicalRecordSearchTestData.attributeName)).toContain(medicalRecordSearchTestData.datasetTooltipText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate the tool-tip displayed on the Search button", async () => {
        try {
            await medicalRecordSearch.searchButton.moveTo();
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.searchButtonTooltipText)).toBe(true);
            expect(await commonUtilities.getElementText(medicalRecordSearch.searchButtonTooltipText)).toContain(medicalRecordSearchTestData.searchButtonTooltipText)
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate searching by Claim Number ", async () => {
        try {
            await commonUtilities.enterValueInElement(medicalRecordSearch.claimNumberField, medicalRecordSearchTestData.claimNumber);
            await commonUtilities.clickOnElement(medicalRecordSearch.searchButton);
            expect(await commonUtilities.getElementText(medicalRecordSearch.claimNumber)).toContain(medicalRecordSearchTestData.claimNumber);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate searching by incorrect Claim Number ", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.editButton);
            await commonUtilities.clickOnElement(medicalRecordSearch.clearButton);
            await commonUtilities.enterValueInElement(medicalRecordSearch.claimNumberField, medicalRecordSearchTestData.incorrectClaimNumber);
            await commonUtilities.clickOnElement(medicalRecordSearch.searchButton);
            expect(await commonUtilities.getElementText(medicalRecordSearch.noData)).toContain(medicalRecordSearchTestData.noData);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate searching by Medical Record ID ", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.editButton);
            await commonUtilities.clickOnElement(medicalRecordSearch.clearButton);
            await commonUtilities.enterValueInElement(medicalRecordSearch.medicalRecordIDField, medicalRecordSearchTestData.medicalRecordID);
            await commonUtilities.clickOnElement(medicalRecordSearch.searchButton);
            expect(await commonUtilities.getElementText(medicalRecordSearch.mrRequestID)).toContain(medicalRecordSearchTestData.medicalRecordID);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate searching by multiple Medical Record ID's ", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.editButton);
            await commonUtilities.clickOnElement(medicalRecordSearch.clearButton);
            await commonUtilities.enterValueInElement(medicalRecordSearch.medicalRecordIDField, medicalRecordSearchTestData.multipleMedicalRecordID);
            await commonUtilities.clickOnElement(medicalRecordSearch.searchButton);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate searching by incorrect Medical Record ID ", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.editButton);
            await commonUtilities.clickOnElement(medicalRecordSearch.clearButton);
            await commonUtilities.enterValueInElement(medicalRecordSearch.medicalRecordIDField, medicalRecordSearchTestData.incorrectMedicalRecordID);
            await commonUtilities.clickOnElement(medicalRecordSearch.searchButton);
            expect(await commonUtilities.getElementText(medicalRecordSearch.noData)).toContain(medicalRecordSearchTestData.noData);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate clear button functionality", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.editButton);
            await commonUtilities.clickOnElement(medicalRecordSearch.clearButton);
            expect(await commonUtilities.getElementText(medicalRecordSearch.claimNumberField)).toEqual(medicalRecordSearchTestData.claimNumberFieldValue);
            expect(await commonUtilities.getElementText(medicalRecordSearch.medicalRecordIDField)).toEqual(medicalRecordSearchTestData.medicalRecordIDFieldValue);
            expect(await commonUtilities.getElementText(medicalRecordSearch.datasetField)).toContain(medicalRecordSearchTestData.datasetPlaceholderText);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate additional fields after selecting Dataset ", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.datasetField);
            await commonUtilities.selectDropDownOptions(medicalRecordSearchTestData.datasetValue);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.medicalRecordStatusField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.lineOfBusinessField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.memberNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.reviewTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.subscriberIDField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.providerNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.providerNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.providerTinField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.patientFirstNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.patientLastNameField)).toBe(true);

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate the search button is disabled when only dataset field is selected", async () => {
        try {
            expect(await commonUtilities.isElementEnabled(medicalRecordSearch.searchButton)).toBe(false);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validate searching with Dataset and Line of Business fields ", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.lineOfBusinessField);
            await commonUtilities.selectDropDownOptions(medicalRecordSearchTestData.lineOfBusinessValue);
            await commonUtilities.clickOnElement(medicalRecordSearch.searchButton);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.filterLabel)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validating that a user can search using dataset and additional fields ", async () => {
        try {
            await commonUtilities.clickOnElement(medicalRecordSearch.editButton);
            await commonUtilities.clickOnElement(medicalRecordSearch.medicalRecordStatusField);
            await commonUtilities.selectDropDownOptions(medicalRecordSearchTestData.medicalRecordStatusValue);
            await commonUtilities.clickOnElement(medicalRecordSearch.searchButton);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.filterLabel)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.resultTable)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    describe("Testing Page Size and Pagination functionality on Medical Record Search", function () {
        it("Validating Page Size is displayed on Medical Record Search", async () => {
            try {
                await commonUtilities.waitUntilLoaderFinishedLoading(medicalRecordSearch.loader);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.pageSize)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating default value in Page Size drop-down", async () => {
            try {
                expect(await commonUtilities.getElementText(medicalRecordSearch.pageSize)).toContain(medicalRecordSearchTestData.defaultPageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Page Size functionality ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.pageSize);
                await commonUtilities.selectDropDownOptions(medicalRecordSearchTestData.newPageSize);
                expect(await commonUtilities.getElementText(medicalRecordSearch.pageSize)).toContain(medicalRecordSearchTestData.newPageSize);
                expect(await commonUtilities.getElementsCount(medicalRecordSearch.totalSearchResultRows)).toBeLessThanOrEqual(medicalRecordSearchTestData.rowCount);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Pagination is displayed ", async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.pagination)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Pagination functionality ", async () => {
            try {
                expect(await commonUtilities.verifyPagination(medicalRecordSearch.totalSearchResultRows)).toBeLessThanOrEqual(medicalRecordSearchTestData.rowCount);
                await commonUtilities.waitUntilLoaderFinishedLoading(medicalRecordSearch.loader);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });

    describe("Testing Letter Generation functionality on Medical Record Search", function () {
        it("Validating Generate Letter Modal is visible ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.generateLettersButton);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.generateLettersModal)).toBe(true);
                expect(await commonUtilities.getElementText(medicalRecordSearch.generateLettersText)).toContain(medicalRecordSearchTestData.generateLettersForMedicalRecordRequestText);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validate fields and buttons present on Generate Letter Modal", async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.letterCategoryField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.templateNameField)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.checkBulkUpdateText)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.checkBox)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.generateLettersButtonOnModal)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.generateLetterCancelButton)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating inline error message for mandatory fields on Generate Letter Modal ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.generateLettersButtonOnModal);
                expect(await commonUtilities.getElementText(medicalRecordSearch.inlineErrorMessage)).toContain(medicalRecordSearchTestData.inlineErrorMessageOnLetterModal);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Cancel button functionality on Generate Letter Modal ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.generateLetterCancelButton);
                await browser.pause(1000);
                expect(await commonUtilities.isElementExisting(medicalRecordSearch.generateLettersModal)).toBe(false);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Letter Generation on Medical Record Search ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.generateLettersButton);
                await commonUtilities.clickOnElement(medicalRecordSearch.letterCategoryField);
                await commonUtilities.selectDropDownOptions(medicalRecordSearchTestData.letterCategoryValue);
                await commonUtilities.clickOnElement(medicalRecordSearch.templateNameField);
                await commonUtilities.selectDropDownOptions(medicalRecordSearchTestData.templateNameValue);
                await commonUtilities.clickOnElement(medicalRecordSearch.generateLettersButtonOnModal);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(medicalRecordSearchTestData.letterGenerationToasterMessage);
                await commonUtilities.waitForToasterMessageToDisappear();
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });

    describe("Testing Column Selection functionality on Medical Record Search", function () {
        it("Validating Column Selection Modal is visible ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.columnSelectionButton);
                expect(await commonUtilities.isElementDisplayed(medicalRecordSearch.columnSelectionModal)).toBe(true);
                expect(await commonUtilities.getElementText(medicalRecordSearch.columnSelectionText)).toContain(medicalRecordSearchTestData.columnSelectionText);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Cancel button functionality on Column Selection modal", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.cancelButton);
                await browser.pause(1000);
                expect(await commonUtilities.isElementExisting(medicalRecordSearch.columnSelectionModal)).toBe(false);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Deleting column ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.columnSelectionButton);
                await commonUtilities.enterValueInElement(medicalRecordSearch.addedToProjectSearchField, medicalRecordSearchTestData.reviewType);
                await commonUtilities.clickOnElement(medicalRecordSearch.deleteButton);
                await commonUtilities.clickOnElement(medicalRecordSearch.applyButton);
                expect(await commonUtilities.getMultiElementTextOneByOne(medicalRecordSearch.columnHeaders)).toEqual(medicalRecordSearchTestData.columnHeaders);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Adding new column ", async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.columnSelectionButton);
                await commonUtilities.enterValueInElement(medicalRecordSearch.availableColumnSearchField, medicalRecordSearchTestData.reviewType);
                await commonUtilities.clickOnElement(medicalRecordSearch.addButton);
                await commonUtilities.clickOnElement(medicalRecordSearch.applyButton);
                expect(await commonUtilities.getMultiElementTextOneByOne(medicalRecordSearch.columnHeaders)).toEqual(medicalRecordSearchTestData.updatedColumnHeaders);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });

    describe("Testing Generate Extract functionality on Medical Record Search", function () {
        it('Validating generate extract functionality on Medical Record Search', async () => {
            try {
                await commonUtilities.clickOnElement(medicalRecordSearch.generateExtractButton);
                expect(await medicalRecordSearch.verifyExtractDownload()).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
});
