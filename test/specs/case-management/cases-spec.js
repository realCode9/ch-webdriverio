import loginPage from "../../pageobjects/login/login-page";
import casesPage from "../../pageobjects/case-management/cases-page";
import menuOptions from "../../pageobjects/menuoptions-page";
import utilities from "../../../utilities/common-utilities";
import data from "../../../resources/case-management/cases-test-data.json";
import leadsPage from "../../pageobjects/case-management/leads-page";
import leadsTestData from "../../../resources/case-management/leads-test-data.json";

describe('Testing FWA > Cases', function () {
    
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it('Validate navigation to FWA Cases', async function () {
        await utilities.clickOnElement(menuOptions.FWA);
        await utilities.clickOnElement(menuOptions.cases);
        expect(await utilities.getElementText(casesPage.caseHeader)).toEqual(data.header);
    });

    describe('Validate search functionality', function () {
        
        it('Verify fields and buttons on search panel', async function () {
            expect(await utilities.isElementDisplayed(casesPage.hideSearchButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.searchInputBox)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.dataSetDropdown)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.investigator)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.allegationCategorydropdown)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.caseStatus)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.casesSIUAction)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.dateRange)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.specialityType)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.searchButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.columnSelection)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.clearButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.saveFilterButton)).toBe(true);
        });

        it('Verify search functionality', async function () {
            await casesPage.enterSearchCriteria();
            await utilities.clickOnElement(casesPage.searchButton);
            expect(await utilities.getElementText(casesPage.tableCaseStatusValue)).toEqual(data.tableStatusValue);
        });

        it('Verify no data screen for search', async function () {
            await utilities.enterValueInElement(casesPage.searchInputBox, data.invalidSearchText);
            await utilities.clickOnElement(casesPage.searchButton);
            expect(await utilities.getElementText(casesPage.noDataText)).toEqual(data.noDataText);
            await utilities.clickOnElement(casesPage.clearButton);
        });

        it('Verify save filter functionality', async function () {
            expect(await utilities.isElementEnabled(casesPage.saveFilterButton)).toBe(false);
            await casesPage.enterSearchCriteria();
            await casesPage.saveFilterButton.waitForEnabled();
            expect(await utilities.isElementEnabled(casesPage.saveFilterButton)).toBe(true);
            await utilities.clickOnElement(casesPage.saveFilterButton);
            await utilities.enterValueInElement(casesPage.filterName, data.filterName);
            await utilities.clickOnElement(casesPage.saveFilterNameButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.filterSavedSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
            await utilities.clickOnElement(casesPage.clearButton);
        });

        it('Verify edit filter functionality', async function () {
            await utilities.clickOnElement(casesPage.savedFiltersButton);
            await casesPage.savedFilterName.moveTo();
            await utilities.clickOnElement(casesPage.editFilterIcon);
            await utilities.clickOnElement(casesPage.caseStatus);
            await utilities.clickOnElement(casesPage.editedCaseStatusValue);
            await utilities.clickOnElement(casesPage.editFilterSaveButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.filterSavedSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
        });

        it('Verify delete filter functionality', async function () {
            await utilities.clickOnElement(casesPage.savedFiltersButton);
            await casesPage.savedFilterName.moveTo();
            await utilities.clickOnElement(casesPage.deleteFilterIcon);
            expect(await utilities.getElementText(casesPage.deleteFilterModalText)).toEqual(data.deleteFilterModalText);
            await utilities.clickOnElement(casesPage.yesButtonForDeleteFilter);
            await utilities.clickOnElement(casesPage.crossIconSavedFilterModal);
        });

    });

    describe('Validate column selection functionality', function () {
        
        it('Verify navigation to column selection modal', async function () {
            await utilities.clickOnElement(casesPage.columnSelection);
            expect(await utilities.getElementText(casesPage.columnSelectionModalHeaderText)).toEqual(data.columnSelectionModalHeaderText);
        });
        
        it('Verify buttons and fields on column selection', async function () {
            expect(await utilities.isElementDisplayed(casesPage.availableColumnSearch)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.plusButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.applyButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.addedToProjectSearch)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.deleteColumnIcon)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.columnSelectionCancelButton)).toBe(true);
        });

        it('Add a column and verify it is visible on main screen ', async function () {
            await utilities.enterValueInElement(casesPage.availableColumnSearch, data.columnName);
            await utilities.clickOnElement(casesPage.plusButton);
            await utilities.clickOnElement(casesPage.applyButton);
            expect(await utilities.isElementDisplayed(casesPage.addedColumnOnMainScreen)).toBe(true);
            expect(await utilities.getElementText(casesPage.addedColumnOnMainScreen)).toEqual(data.columnName);
        });

        it('Remove the added column and verify it is not visible on main screen ', async function () {
            await utilities.clickOnElement(casesPage.columnSelection);
            await utilities.enterValueInElement(casesPage.addedToProjectSearch, data.columnName);
            await utilities.clickOnElement(casesPage.deleteColumnIcon);
            await utilities.clickOnElement(casesPage.applyButton);
            expect(await casesPage.elementNotDisplayed(casesPage.addedColumnOnMainScreen)).toBe(true);
        });
    });

    describe('Test cases to create a new Case', function(){

        it('Validate navigation to New Case Screen', async function () {
            await utilities.clickOnElement(casesPage.createNewCaseButton);
            expect(await utilities.getElementText(casesPage.newCaseHeader)).toEqual(data.newCaseHeader);
        });

        it('Validate fields and buttons on New Case Screen', async function () {
            expect(await utilities.isElementDisplayed(casesPage.summaryTab)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.providerRadioButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.memberRadioButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.newCaseId)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.newCaseName)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.dataSetField)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.lineOfBusiness)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.allegationCategory)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.providerFirstName)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.providerLastName)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.providerNPI)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.specialityType)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.newCaseSaveButton)).toBe(true);
            expect(await utilities.isElementDisplayed(casesPage.newCaseCancelButton)).toBe(true);
        });

        it('Enter data in fields and verify new case created', async function () {
            await utilities.enterValueInElement(casesPage.newCaseName, data.newCaseName);
            await utilities.clickOnElement(casesPage.dataSetField);
            await utilities.clickOnElement(casesPage.dropDrownOption);
            await utilities.clickOnElement(casesPage.lineOfBusiness);
            await utilities.clickOnElement(casesPage.dropDrownOption);
            await utilities.clickOnElement(casesPage.allegationCategory);
            await utilities.clickOnElement(casesPage.dropDrownOption);
            await utilities.clickOnElement(casesPage.payerState);
            await utilities.clickOnElement(casesPage.dropDrownOption);
            await utilities.clickOnElement(casesPage.specialityType);
            await utilities.clickOnElement(casesPage.dropDrownOption);
            await utilities.enterValueInElement(casesPage.providerFirstName, data.providerFirstName);
            await utilities.enterValueInElement(casesPage.providerLastName, data.providerLastName);
            await utilities.enterValueInElement(casesPage.providerNPI, data.providerNPI);
            await utilities.clickOnElement(casesPage.newCaseSaveButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.caseCreatedSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
            await utilities.clickOnElement(casesPage.newCaseCancelButton);
        });

    });

    describe('Verify Case Notes Tab', function () {
        
        it('Validate addition of a case note', async function () {
            await utilities.enterValueInElement(casesPage.searchInputBox, data.newCaseName);
            await utilities.clickOnElement(casesPage.searchButton);
            await utilities.clickOnElement(casesPage.viewEditButton);
            await utilities.clickOnElement(casesPage.caseNotesTab);
            await utilities.enterValueInElement(casesPage.addNotesTextArea, data.addNotesText);
            await utilities.clickOnElement(casesPage.addNoteButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.noteAddSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
        });

        it('Validate edition of a case note', async function () {
            await utilities.clickOnElement(casesPage.editNoteIcon);
            await utilities.enterValueInElement(casesPage.editModalTextArea, data.editModalText);
            await utilities.clickOnElement(casesPage.editModalSaveButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.noteEditSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
        });

        it('Validate deletion of a case note', async function () {
            await utilities.clickOnElement(casesPage.deleteNoteIcon);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.noteDeleteSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
            await utilities.clickOnElement(casesPage.backButton);
        });
    });

    describe('Verify Images Tab', function () {
        
        it("Validate Image Tab Header", async function () {
            await utilities.enterValueInElement(casesPage.searchInputBox, data.newCaseName); //change  new case name in data file
            await utilities.clickOnElement(casesPage.searchButton);
            await utilities.clickOnElement(casesPage.viewEditButton);
            await utilities.clickOnElement(casesPage.imagesTab);
            expect(await utilities.isElementDisplayed(casesPage.noImageAttachedLabel)).toBe(true);
        });

        it("Validate error message is displayed on uploading file with wrong extension", async function () {
            expect(await leadsPage.verifyMessageOnWrongFileUpload()).toBe(true);
            await leadsPage.clickClearButtonInImageTab();
        });

        it("Validate uploading an Image", async function () {
            expect(await leadsPage.verifyFileUpload()).toEqual(leadsTestData.tooltip);
        });

        it("Validate download functionality", async function () {
            expect(await leadsPage.verifyFileDownload()).toBe(true);
        });

        it("Validate file name in the preview panel of image", async function () {
            expect(await leadsPage.isVisibleImagePreviewPanel()).toBe(true);
            expect(await leadsPage.getFileNameInPreviewPanel()).toEqual(leadsTestData.fileName);
            await leadsPage.clickCloseIconInPreviewPanel();
        });

        it("Validate delete funcionality by deleting an image", async function () {
            expect(await leadsPage.verifyDeleteMessage()).toBe(true);
            await utilities.waitForToasterMessageToDisappear();
            await utilities.clickOnElement(casesPage.backButton);
        });

    });

    it("Validate delete functionality for created case", async function () {
        await utilities.enterValueInElement(casesPage.searchInputBox, data.newCaseName);
        await utilities.clickOnElement(casesPage.searchButton);
        await utilities.clickOnElement(casesPage.viewEditButton);
        await utilities.clickOnElement(casesPage.newCaseDeleteButton);
        expect(await utilities.getElementText(casesPage.newCaseDeleteModalHeaderText)).toEqual(data.newCaseDeleteModalHeaderText);
        await utilities.clickOnElement(casesPage.newCaseDeleteModalYesButton);
    });

});