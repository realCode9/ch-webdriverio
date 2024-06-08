import loginPage from "../../../pageobjects/login/login-page";
import menuOptionsPage from "../../../pageobjects/menuoptions-page";
import codeListsPage from "../../../pageobjects/administration/data-setup/code-lists-page.js";
import codeListsTestData from "../../../../resources/administration/data-setup/code-lists-test-data.json";
import commonUtilities from "../../../../utilities/common-utilities";
import connectToDatabase from "../../../../utilities/database-connection";

describe("Validation of Code Lists module functionality", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Validating navigation to Code Lists screen", async () => {
        await commonUtilities.clickOnElement(menuOptionsPage.administration);
        await commonUtilities.clickOnElement(menuOptionsPage.dataSetup);
        await commonUtilities.clickOnElement(menuOptionsPage.codeLists);
        expect(await commonUtilities.getElementText(codeListsPage.codeListScreen)).toContain(codeListsTestData.codeListText);
    });
    it('Validating required field validation on add new code list', async () => {
        await commonUtilities.clickOnElement(codeListsPage.newButton);
        await commonUtilities.clickOnElement(codeListsPage.datasetField);
        await commonUtilities.selectDropDownOptions(codeListsTestData.dataset);
        await commonUtilities.clickOnElement(codeListsPage.auditTypesField);
        await commonUtilities.selectDropDownOptions(codeListsTestData.auditType);
        await commonUtilities.enterValueInElement(codeListsPage.codeDescription, codeListsTestData.codeListDescription);
        await commonUtilities.enterValueInElement(codeListsPage.codeIdentifier, codeListsTestData.codeListIdentifier);
        await commonUtilities.clickOnElement(codeListsPage.addButton);
        expect(await commonUtilities.isElementEnabled(codeListsPage.saveButton)).toBe(false);
    });
    it('Validating cancel button functionality', async () => {
        await commonUtilities.enterValueInElement(codeListsPage.nameField, codeListsTestData.codeListName);
        await commonUtilities.clickOnElement(codeListsPage.cancelButton);
        expect(await commonUtilities.getElementText(codeListsPage.codeListScreen)).toContain(codeListsTestData.codeListText);
    });
    it("Validating creating new Code Lists", async () => {
        await commonUtilities.clickOnElement(codeListsPage.newButton);
        await commonUtilities.enterValueInElement(codeListsPage.nameField, codeListsTestData.codeListName);
        await commonUtilities.clickOnElement(codeListsPage.datasetField);
        await commonUtilities.selectDropDownOptions(codeListsTestData.dataset);
        await commonUtilities.clickOnElement(codeListsPage.auditTypesField);
        await commonUtilities.selectDropDownOptions(codeListsTestData.auditType);
        await commonUtilities.enterValueInElement(codeListsPage.codeDescription, codeListsTestData.codeListDescription);
        await commonUtilities.enterValueInElement(codeListsPage.codeIdentifier, codeListsTestData.codeListIdentifier);
        await commonUtilities.clickOnElement(codeListsPage.addButton);
        await commonUtilities.clickOnElement(codeListsPage.saveButton);
        expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(codeListsTestData.createSuccessToasterMessage);
    });
    it("Validating Code Lists search functionality", async () => {
        await commonUtilities.enterValueInElement(codeListsPage.searchCodeListField, codeListsTestData.codeListName);
        await commonUtilities.waitForToasterMessageToDisappear();
        expect(await commonUtilities.getElementText(codeListsPage.name)).toContain(codeListsTestData.codeListName);
    });
    it("Validating Code Lists update functionality", async () => {
        await commonUtilities.clickOnElement(codeListsPage.eyeIcon);
        await commonUtilities.enterValueInElement(codeListsPage.codeDescription, codeListsTestData.updatedCodeListDescription);
        await commonUtilities.enterValueInElement(codeListsPage.codeIdentifier, codeListsTestData.updatedCodeListIdentifier);
        await commonUtilities.clickOnElement(codeListsPage.addButton);
        await commonUtilities.clickOnElement(codeListsPage.saveButton);
        expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(codeListsTestData.updateSuccessToasterMessage);
    });
    it("Validating remove code functionality", async () => {
        await commonUtilities.enterValueInElement(codeListsPage.searchCodeListField, codeListsTestData.codeListName);
        await commonUtilities.waitForToasterMessageToDisappear();
        await commonUtilities.clickOnElement(codeListsPage.eyeIcon);
        await browser.pause(2000);
        await commonUtilities.clickOnElement(codeListsPage.deleteCodeButton);
        await commonUtilities.clickOnElement(codeListsPage.saveButton);
        expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(codeListsTestData.updateSuccessToasterMessage);
    });
    it("Validating Pagination is displayed ", async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(codeListsPage.pagination)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it("Validating Pagination functionality ", async () => {
        try {
            expect(await commonUtilities.verifyPagination(codeListsPage.totalSearchResultRows)).toBeLessThanOrEqual(codeListsTestData.rowCount);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Verify navigate to History Tab', async () => {
        try {
            await commonUtilities.enterValueInElement(codeListsPage.searchCodeListField, codeListsTestData.codeListName);
            await commonUtilities.waitForToasterMessageToDisappear();
            await commonUtilities.clickOnElement(codeListsPage.eyeIcon);
            await commonUtilities.clickOnElement(codeListsPage.historyTab);
            expect(await commonUtilities.isElementDisplayed(codeListsPage.historyTable)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(codeListsPage.backButton)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Verify columns on History Tab', async () => {
        try {
            expect(await commonUtilities.getMultiElementTextOneByOne(codeListsPage.historyColumnHeaders)).toEqual(codeListsTestData.historyColumnHeaders);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Verify History functionality', async () => {
        try {
            let historyDate = await commonUtilities.getElementText(codeListsPage.codeListHistoryDate);
            let currentDate = await commonUtilities.getPresentDate();
            expect(historyDate).toEqual(currentDate);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validating delete Code Lists functionality", async () => {
        await connectToDatabase();
        await codeListsPage.deletingCodeList(codeListsTestData.codeListName);
        await commonUtilities.clickOnElement(codeListsPage.backButton);
        await commonUtilities.enterValueInElement(codeListsPage.searchCodeListField, codeListsTestData.codeListName);
        expect(await commonUtilities.getElementText(codeListsPage.noDataScreen)).toContain(codeListsTestData.noData);
    });
});