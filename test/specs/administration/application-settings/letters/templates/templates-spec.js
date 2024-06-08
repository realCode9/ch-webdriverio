import loginPage from "../../../../../pageobjects/login/login-page";
import menuOptions from "../../../../../pageobjects/menuoptions-page";
import utilities from "../../../../../../utilities/common-utilities";
import templatesPage from "../../../../../pageobjects/administration/application-settings/letters/templates/templates-page";
import data from "../../../../../../resources/administration/application-settings/letters/letters-test-data.json";

describe('Testing Letters > Templates', function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it('Validate navigation to Templates', async function () {
        await menuOptions.clickOnAdmin();
        await menuOptions.clickOnApplicationSettings();
        await utilities.clickOnElement(menuOptions.letters);
        await utilities.clickOnElement(menuOptions.templates);
        expect( await utilities.getElementText(templatesPage.header)).toEqual(data.header);
    });

    describe('Validate creation of new template', function () {
        
        it('Verify new button functionality', async function () {
            await utilities.clickOnElement(templatesPage.newButton);
            expect(await utilities.getElementText(templatesPage.createTemplateHeader)).toEqual(data.createTemplateHeader);
        });

        it('Verify fields and buttons on letter template detail page', async function () {
            expect(await utilities.isElementDisplayed(templatesPage.newSourceType)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newLetterCategory)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newName)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.groupByProviderType)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newMarginTop)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newMarginBottom)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newMarginLeft)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newMarginRight)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newMarginUnit)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newPDFFormat)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newTagsDropdown)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.onFirstPage)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.onAllPages)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newHeaderEditor)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newBodyEditor)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newFooterEditor)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newPublishButton)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newDraftButton)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newPreviewButton)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newCancelButton)).toBe(true);
        });

        it('Enter all the details and verify creation of new template', async function () {
            await utilities.clickOnElement(templatesPage.newSourceType);
            await utilities.clickOnElement(templatesPage.auditOption);
            await utilities.clickOnElement(templatesPage.newLetterCategory);
            await utilities.clickOnElement(templatesPage.statementOption);
            await utilities.enterValueInElement(templatesPage.newName, data.newTemplateName);
            await utilities.clickOnElement(templatesPage.newTagsDropdown);
            await utilities.clickOnElement(templatesPage.options);
            await utilities.enterValueInElement(templatesPage.newHeaderEditor, data.letterHeader);
            await templatesPage.enterBodyContentUsingLetterControls();
            await utilities.enterValueInElement(templatesPage.newFooterEditor, data.letterFooter);
            await utilities.clickOnElement(templatesPage.newDraftButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.letterSavedSuccessToaster);
            await utilities.waitForToasterMessageToDisappear();
        });

        it('Verify letter template status when it is saved as draft', async function () {
            await templatesPage.searchAndViewLetterTemplate();
            expect(await utilities.getElementText(templatesPage.status)).toEqual(data.draftStatus);
            await utilities.clickOnElement(templatesPage.newCancelButton);
        });

        it('Verify letter template status when it is published', async function () {
            await templatesPage.searchAndViewLetterTemplate();
            await utilities.clickOnElement(templatesPage.newPublishButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.letterSavedSuccessToaster);
            await templatesPage.searchAndViewLetterTemplate();
            expect(await utilities.getElementText(templatesPage.status)).toEqual(data.activeStatus);
        });

    });

    describe('Validate History tab', function () {
        
        it('Navigate to history tab and verify the column names on it', async function () {
            await utilities.clickOnElement(templatesPage.historyTab);
            expect(await utilities.isElementDisplayed(templatesPage.historyTabDate)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.historyTabField)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.historyTabPreviousValue)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.historyTabNewValue)).toBe(true);
        });

        it('Verify the history is updated', async function () {
            expect(await utilities.getElementText(templatesPage.historyTabFieldData)).toEqual(data.historyField);
            expect(await utilities.getElementText(templatesPage.historyTabPreviousValueData)).toEqual(data.historyPreviousValue);
            expect(await utilities.getElementText(templatesPage.historyTabNewValueData)).toEqual(data.historyNewValue);
            await utilities.clickOnElement(templatesPage.detailTab);
            await utilities.clickOnElement(templatesPage.newCancelButton);
        });

    });

    describe('Verify Preview button functionality', function () {

        it('Verify Preview modal appears', async function () {
            await templatesPage.selectSourceType(templatesPage.mrrOption);
            await utilities.clickOnElement(templatesPage.searchButton);
            await utilities.clickOnElement(templatesPage.viewButton);
            await browser.pause(5000);
            await utilities.clickOnElement(templatesPage.newPreviewButton);
            expect(await templatesPage.modal).toExist(true);
        });

        it('Verify buttons and fields on Preview modal', async function () {
            expect(await utilities.getElementText(templatesPage.previewModalHeader)).toEqual(data.previewModalHeader);
            expect(await utilities.isElementDisplayed(templatesPage.previewModalContent)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.previewSubmitButton)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.previewCancelButton)).toBe(true);
        });

        it('Verify preview modal cancel button', async function () {
            await utilities.clickOnElement(templatesPage.previewCancelButton);
            expect(await templatesPage.modal).toExist(false);
        });

        it('Enter medical record request id and verify loader appears on preview button on submit click', async function () {
            await utilities.clickOnElement(templatesPage.newPreviewButton);
            await utilities.enterValueInElement(templatesPage.previewModalInputField, data.mrrId);
            await utilities.clickOnElement(templatesPage.previewSubmitButton);
            expect(await templatesPage.previewButtonLoader).toExist(true);
        });

        it('Verify pdf window opens on submit click', async function () {  
            await browser.pause(15000);
            await templatesPage.moveToNewWindow();
            expect(await browser).toHaveUrlContaining('blob');
            await templatesPage.moveToParentWindow();
            await utilities.clickOnElement(templatesPage.newCancelButton);
        });

    });

    describe('Validate search functionality', function () {
        
        it('Verify fields and buttons on the search panel', async function () {
            expect(await utilities.isElementDisplayed(templatesPage.sourceTypeSearch)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.letterCategorySearch)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.nameSearch)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.createdBySearch)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.createdOnDateSearch)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.searchButton)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.clearButton)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.newButton)).toBe(true);
        });

        it('Verify search using source type', async function () {
            await templatesPage.selectSourceType(templatesPage.auditOption);
            await utilities.clickOnElement(templatesPage.searchButton);
            expect(await templatesPage.verifySearchOutput(templatesPage.sourceTypeColumnData , data.sourceTypeColumnData));
        });

        it('Verify search using Letter Category', async function () {
            await templatesPage.selectSourceType(templatesPage.auditOption);
            await utilities.clickOnElement(templatesPage.letterCategorySearch);
            await utilities.clickOnElement(templatesPage.statementOption);
            await utilities.clickOnElement(templatesPage.searchButton);
            expect(await templatesPage.verifySearchOutput(templatesPage.letterCategoryColumnData , data.letterCategoryColumnData));
        });

    });

    describe('Verify letter template delete functionality', function () {
        
        it('Click on the delete icon and verify modal appears', async function () {
            await utilities.enterValueInElement(templatesPage.nameSearch, data.newTemplateName);
            await utilities.clickOnElement(templatesPage.searchButton);
            await utilities.clickOnElement(templatesPage.deleteButton);
            expect(await templatesPage.modal).toExist(true);
        });

        it('Verify content and buttons on delete modal', async function () {
            expect(await utilities.getElementText(templatesPage.deleteModalContent)).toEqual(data.deleteModalContent);
            expect(await utilities.isElementDisplayed(templatesPage.deleteModalYesButton)).toBe(true);
            expect(await utilities.isElementDisplayed(templatesPage.deleteModalNoButton)).toBe(true);
        });

        it('Verify Cancel button functionality on delete modal', async function () {
            await utilities.clickOnElement(templatesPage.deleteModalNoButton);
            expect(await templatesPage.modal).toExist(false);
        });

        it('Verify Yes button functionality on delete modal', async function () {
            await utilities.clickOnElement(templatesPage.deleteButton);
            await utilities.clickOnElement(templatesPage.deleteModalYesButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.deleteSuccessToaster)
        })
    });

});