import loginPage from "../../pageobjects/login/login-page";
import queryListPage from "../../pageobjects/global-search/queryList-page";
import menuOptions from "../../pageobjects/menuoptions-page";
import utilities from "../../../utilities/common-utilities";
import data from "../../../resources/global-search/query-builder-test-data.json";
import queryBuilderPage from "../../pageobjects/global-search/queryBuilder-page";

describe('Validate Query List', function () {
    
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it('Validate navigation to QueryList', async function () {
        await utilities.clickOnElement(menuOptions.globalSearch);
        expect(await utilities.isElementDisplayed(queryListPage.queryListTab)).toBe(true);
    });

    it('Verify table elements, fields and buttons on query list page', async function () {
        expect(await utilities.isElementDisplayed(queryListPage.searchField)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.queyName)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.description)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.auditIdField)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.claimNumberField)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.clearButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.searchButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.bulkMedicalRecordButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.generateExtractButton)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.searchIcon)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.editQueryIcon)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.generateExtractIcon)).toBe(true);
        expect(await utilities.isElementDisplayed(queryListPage.deleteIcon)).toBe(true);
    });

    it('Verify creation of query', async function () {
        await utilities.clickOnElement(queryBuilderPage.queryBuilderTab);
        await queryBuilderPage.selectQueryData(data.searchAuditType,data.auditType);
        await utilities.clickOnElement(queryBuilderPage.saveButton);
        await queryBuilderPage.enterRuleData();
        await utilities.clickOnElement(queryBuilderPage.modalSaveButton);
        expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.ruleSaveSuccessToaster);
        await utilities.waitForToasterMessageToDisappear();
        await utilities.clickOnElement(queryBuilderPage.queryListTab);
    });

    it('Verify query name search field functionality', async function () {
        await utilities.enterValueInElement(queryListPage.searchField, data.ruleName);
        expect(await utilities.getElementText(queryListPage.tableDataQueryName)).toEqual(data.ruleName);
    });

    it('Verify search query icon functionality', async function () {
        await utilities.clickOnElement(queryListPage.searchIcon);
        await utilities.waitUntilLoaderFinishedLoading(queryBuilderPage.loader);
        expect(await utilities.isElementDisplayed(queryListPage.searchResult)).toBe(true);
    });

    it('Verify edit query icon', async function () {
        await utilities.clickOnElement(queryListPage.editQueryIcon);
        await utilities.isElementDisplayed(queryBuilderPage.queryBuilderTab);
        await utilities.clickOnElement(queryBuilderPage.saveButton);
        await utilities.enterValueInElement(queryBuilderPage.ruleDescription, data.updatedRuleDescription);
        await utilities.clickOnElement(queryBuilderPage.updateButton);
        await utilities.enterValueInElement(queryListPage.searchField, data.ruleName);
        expect(await utilities.getElementText(queryListPage.tableDescription)).toEqual(data.updatedRuleDescription);
    });

    it('Verify generate extract icon functionality', async function () {
        await utilities.clickOnElement(queryListPage.generateExtractIcon);
        expect(await queryListPage.verifyExtractDownload()).toBe(true);
    });
    
    it('Verify claim search functionality', async function () {
        await utilities.enterValueInElement(queryListPage.claimNumberField ,data.claimNumber);
        await utilities.clickOnElement(queryListPage.searchButton);
        await browser.pause(1000);
        expect(await utilities.isElementDisplayed(queryListPage.tableOutputClaimNumber)).toBe(true);
    });

    it('Verify confirmation modal opens on clicking delete icon', async function () {
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
    });

});