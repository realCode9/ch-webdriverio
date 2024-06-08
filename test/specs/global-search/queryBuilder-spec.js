import loginPage from "../../pageobjects/login/login-page";
import queryBuilderPage from "../../pageobjects/global-search/queryBuilder-page";
import menuOptions from "../../pageobjects/menuoptions-page";
import utilities from "../../../utilities/common-utilities";
import data from "../../../resources/global-search/query-builder-test-data.json";
import queryListPage from "../../pageobjects/global-search/queryList-page";

describe('Testing QueryBuilder', function () {

    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it('Validate navigation to QueryBuilder', async function () {
        await utilities.clickOnElement(menuOptions.globalSearch);
        await utilities.clickOnElement(queryBuilderPage.queryBuilderTab);
        expect(await utilities.isElementDisplayed(queryBuilderPage.queryBuilderSearchPanel)).toBe(true);
    });

    it('Verify fields and buttons on the QueryBuilder search panel', async function () {
        expect(await utilities.isElementDisplayed(queryBuilderPage.inventoryType)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.dataSet)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.sortBy)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.clearButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.saveButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.searchButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.andButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.orButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.queryGroup)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.queryFilter)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.queryClearButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.queryDropDownField)).toBe(true);
        expect(await utilities.isElementDisplayed(queryBuilderPage.columnSelection)).toBe(true);
    });

    it('Verify default inventory type', async function () {
        expect(await utilities.getElementText(queryBuilderPage.inventoryType)).toEqual(data.inventoryType);
    });

    describe('Validate save query functionality', function () {
        
        it('Enter data to save a query and verify select operator field and query type field appear', async function () {
            await utilities.clickOnElement(queryBuilderPage.queryDropDownField);
            await utilities.clickOnElement(queryBuilderPage.queryDropDownOption);
            expect(await utilities.isElementDisplayed(queryBuilderPage.selectOperator)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.selectQuerySearchType)).toBe(true);
        });

        it('Verify Save rule modal pops up on click of save button', async function () {
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await utilities.clickOnElement(queryBuilderPage.saveButton);
            expect(await utilities.isElementDisplayed(queryBuilderPage.saveRuleHeader)).toBe(true);
        });

        it('Verify fields and buttons on Save rule modal', async function () {
            expect(await utilities.isElementDisplayed(queryBuilderPage.saveRuleHeader)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.ruleName)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.ruleDescription)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.modalSaveButton)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.modalCancelButton)).toBe(true);
        });

        it('Verify inline errors on Save rule modal', async function () {
            await utilities.clickOnElement(queryBuilderPage.modalSaveButton);
            expect(await utilities.isElementDisplayed(queryBuilderPage.ruleNameInlineErrorMassage)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.ruleDescriptionInlineErrorMassage)).toBe(true);
            await utilities.clickOnElement(queryBuilderPage.modalCancelButton);
        });

        it('Enter rule name and description and verify rule is saved', async function () {
            await queryBuilderPage.saveButton.waitForDisplayed();
            await utilities.clickOnElement(queryBuilderPage.saveButton);
            await queryBuilderPage.enterRuleData();
            await utilities.clickOnElement(queryBuilderPage.modalSaveButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.ruleSaveSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
        });

        it('Validating adding duplicate query functionality,regression bug NPP-9363', async function () {
            await utilities.clickOnElement(queryBuilderPage.queryBuilderTab);
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await utilities.clickOnElement(queryBuilderPage.saveButton);
            await queryBuilderPage.enterRuleData();
            await utilities.clickOnElement(queryBuilderPage.modalSaveButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.duplicateQueryMessage);
            await utilities.clickOnElement(queryBuilderPage.modalCancelButton);
            await utilities.clickOnElement(queryBuilderPage.toaster);
        });
    });

    describe('Validate search functionality', function () {
        
        it('Enter search criteria and verify output table appears on clicking search button', async function () {
            await utilities.clickOnElement(queryBuilderPage.queryBuilderTab);
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await utilities.clickOnElement(queryBuilderPage.searchButton);
            await queryBuilderPage.waitIfLoaderAppears();
            expect(await utilities.isElementDisplayed(queryBuilderPage.searchOutputTable)).toBe(true);
        });

        it('Verify search output matches the search criteria', async function () {
            await utilities.clickOnElement(queryBuilderPage.columnSelectionButton);
            expect(await queryBuilderPage.getSearchOutputColumn()).toEqual(data.auditType);
        });

        it('Verify searching for query with AND query group', async function () {
            await utilities.clickOnElement(queryBuilderPage.clearButton); 
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await utilities.clickOnElement(queryBuilderPage.queryGroup);
            await queryBuilderPage.selectSecondQueryData(data.searchPatientFirstName,data.searchPatientFirstNameOption);
            await browser.pause(1000);
            await utilities.clickOnElement(queryBuilderPage.searchButton);
            await queryBuilderPage.waitIfLoaderAppears();
            expect(await queryBuilderPage.andFilterOutput()).toBe(true);
        });

        it('Verify searching for query with OR query group', async function () {
            await utilities.clickOnElement(queryBuilderPage.clearButton); 
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await utilities.clickOnElement(queryBuilderPage.queryGroup);
            await utilities.clickOnElement(queryBuilderPage.orButton);
            await queryBuilderPage.selectSecondQueryData(data.searchPatientFirstName,data.searchPatientFirstNameOption);
            await browser.pause(1000);
            await utilities.clickOnElement(queryBuilderPage.searchButton);
            await queryBuilderPage.waitIfLoaderAppears();
            expect(await queryBuilderPage.orFilterOutput()).toBe(true);
        });

        it('Verify searching for query with AND filter', async function () {
            await utilities.clickOnElement(queryBuilderPage.clearButton); 
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await utilities.clickOnElement(queryBuilderPage.queryFilter);
            await queryBuilderPage.selectSecondQueryData(data.searchPatientFirstName,data.searchPatientFirstNameOption);
            await browser.pause(1000);
            await utilities.clickOnElement(queryBuilderPage.searchButton);
            await queryBuilderPage.waitIfLoaderAppears();
            expect(await queryBuilderPage.andFilterOutput()).toBe(true);
        });

        it('Verify searching for query with OR filter', async function () {
            await utilities.clickOnElement(queryBuilderPage.clearButton); 
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await utilities.clickOnElement(queryBuilderPage.queryFilter);
            await utilities.clickOnElement(queryBuilderPage.orButton);
            await queryBuilderPage.selectSecondQueryData(data.searchPatientFirstName,data.searchPatientFirstNameOption);
            await browser.pause(1000);
            await utilities.clickOnElement(queryBuilderPage.searchButton);
            await queryBuilderPage.waitIfLoaderAppears();
            expect(await queryBuilderPage.orFilterOutput()).toBe(true);
        });
    
    });

    describe('Validate deleting query', function () {
        
        it('Verify navigation to query list', async function () {
           await utilities.clickOnElement(queryBuilderPage.queryListTab);
           expect(await utilities.isElementDisplayed(queryListPage.queryListTab)).toBe(true);
        });

        it('Search for the query and verify confirmation modal opens on clicking delete icon', async function () {
            await utilities.enterValueInElement(queryListPage.searchField, data.ruleName);
            await utilities.clickOnElement(queryListPage.deleteIcon);
            expect(await utilities.isElementDisplayed(queryListPage.deleteModal)).toBe(true);
        });

        it('Verify confirmation modal No button functionality', async function () {
            await utilities.clickOnElement(queryListPage.deleteModalNoButton);
            expect(await utilities.getElementText(queryListPage.tableDataQueryName)).toEqual(data.ruleName);
        });
    
        it('Verify confirmation modal Yes button functionality', async function () {
            await utilities.clickOnElement(queryListPage.deleteIcon);
            await utilities.clickOnElement(queryListPage.deleteModalYesButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.deleteQuerySuccessToaster);
            await utilities.clickOnElement(queryBuilderPage.queryBuilderTab);
        });
    
    });

    describe('Validate column selection functionality', function () {
        
        it('Verify navigation to column selection modal', async function () {
            await utilities.clickOnElement(queryBuilderPage.queryBuilderTab);
            await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
            await browser.pause(1000);
            await utilities.clickOnElement(queryBuilderPage.searchButton);
            await utilities.clickOnElement(queryBuilderPage.columnSelectionButton);
            expect(await utilities.getElementText(queryBuilderPage.columnSelectionModalHeaderText)).toEqual(data.columnSelectionModalHeaderText);
        });
        
        it('Verify buttons and fields on column selection', async function () {
            expect(await utilities.isElementDisplayed(queryBuilderPage.availableColumnSearch)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.plusButton)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.applyButton)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.addedToProjectSearch)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.deleteColumnIcon)).toBe(true);
            expect(await utilities.isElementDisplayed(queryBuilderPage.columnSelectionCancelButton)).toBe(true);
        });

        it('Add a column and verify it is visible on main screen ', async function () {
            await utilities.enterValueInElement(queryBuilderPage.availableColumnSearch, data.allowedColumn);
            await utilities.clickOnElement(queryBuilderPage.plusButton);
            await utilities.clickOnElement(queryBuilderPage.applyButton);
            expect(await utilities.isElementDisplayed(queryBuilderPage.allowedColumn)).toBe(true);
            expect(await utilities.getElementText(queryBuilderPage.allowedColumn)).toEqual(data.allowedColumn);
        });

        it('Remove the added column and verify it is not visible on main screen ', async function () {
            await utilities.clickOnElement(queryBuilderPage.columnSelectionButton);
            await utilities.enterValueInElement(queryBuilderPage.addedToProjectSearch, data.allowedColumn);
            await utilities.clickOnElement(queryBuilderPage.deleteColumnIcon);
            await utilities.clickOnElement(queryBuilderPage.applyButton);
            expect(await utilities.isElementExisting(queryBuilderPage.allowedColumn)).toBe(true);
        });
    });

});