import menuOptions from "../../pageobjects/menuoptions-page";
import extractPage from "../../pageobjects/extracts/extracts-page";
import loginPage from "../../pageobjects/login/login-page";
import utilities from "../../../utilities/common-utilities";
import data from "../../../resources/extracts/extracts-test-data.json";

describe('Testing Extracts', function () {
    
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it('Validate navigation to extracts', async function () {
        await utilities.clickOnElement(menuOptions.extracts);
        expect(await utilities.getElementText(extractPage.headerText)).toEqual(data.header);
    });

    describe('Validate creation of a new extract', function(){

        it('Navigate to new Extract detail page', async function () {
            await utilities.clickOnElement(extractPage.newButton);
            expect(await utilities.getElementText(extractPage.extractDetailHeader)).toEqual(data.extractDetailHeader);
        });
            
        it('Validate fields and buttons on new Extract detail page', async function () {
            expect(await utilities.isElementDisplayed(extractPage.extractTypeInputField)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.organizationInputField)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.extractNameInputField)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.mongodbCollectionDropdown)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.availableRights)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.updateAuditType)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.updateAuditStatus)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.activeToggle)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.description)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.fieldOrder)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.saveExtract)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.cancelExtractButton)).toBe(true);
        });
    
        it('Enter data and validate success toaster after creating extract', async function () {
            await utilities.enterValueInElement(extractPage.extractTypeInputField,data.newExtractType);
            await utilities.enterValueInElement(extractPage.organizationInputField,data.newOrganization);
            await utilities.enterValueInElement(extractPage.extractNameInputField,data.newExtractName);
            await utilities.enterValueInElement(extractPage.description,data.newExtractDescription);
            await utilities.clickOnElement(extractPage.mongodbCollectionDropdown);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await utilities.clickOnElement(extractPage.rightToggle);
            await utilities.clickOnElement(extractPage.availableRights);
            await utilities.enterValueInElement(extractPage.availableRightsInputField,data.availableRight);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await utilities.clickOnElement(extractPage.updateAuditType);
            await utilities.clickOnElement(extractPage.updateAuditTypeOption);
            await utilities.clickOnElement(extractPage.updateAuditStatus);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await utilities.clickOnElement(extractPage.saveExtract);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.extractCreateSuccessToaster);
        });
    });
    
    describe('Validate search functionality', function(){

        it('Verify search using Extract Type', async function () {
            await utilities.clickOnElement(extractPage.extractTypeDropdownPlaceholder);
            await utilities.enterValueInElement(extractPage.extractTypeDropdownPlaceholder, data.newExtractType);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await extractPage.newButton.waitForDisplayed();
            expect(await utilities.getElementText(extractPage.listExtractType)).toEqual(data.newExtractType);
            await utilities.clickOnElement(extractPage.crossIcon);
        });
    
        it('Verify search using Organization', async function () {
            await utilities.clickOnElement(extractPage.organizationDropdownPlaceholder);
            await utilities.enterValueInElement(extractPage.organizationDropdownPlaceholder, data.newOrganization);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await extractPage.newButton.waitForDisplayed();
            expect(await utilities.getElementText(extractPage.listOrganization)).toEqual(data.newOrganization);
            await utilities.clickOnElement(extractPage.crossIcon);
        });
    
        it('Verify search using Extract Name', async function () {
            await utilities.clickOnElement(extractPage.extractNameDropdownPlaceholder);
            await utilities.enterValueInElement(extractPage.extractNameDropdownPlaceholder, data.newExtractName);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await extractPage.newButton.waitForDisplayed();
            expect(await utilities.getElementText(extractPage.listExtractName)).toEqual(data.newExtractName);
            await utilities.clickOnElement(extractPage.crossIcon);
        });      
    });

    describe('Validate run functionality', function(){

        it('Verify file downloads while clicking on run icon when query is present', async function () {
            await utilities.clickOnElement(extractPage.extractNameDropdownPlaceholder);
            await utilities.enterValueInElement(extractPage.extractNameDropdownPlaceholder, data.extractName);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await extractPage.newButton.waitForDisplayed();
            expect(await extractPage.verifyFileDownload()).toBe(true);     
        });
    
        it('Verify info toaster while clicking on run icon when query is not present', async function () {
            await utilities.clickOnElement(extractPage.extractNameDropdownPlaceholder);
            await utilities.enterValueInElement(extractPage.extractNameDropdownPlaceholder, data.newExtractName);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await extractPage.newButton.waitForDisplayed();
            await utilities.clickOnElement(extractPage.runIcon);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.noExtractInfoToaster);
        });
        });

    describe('Validate deletion of extract', function () {
        
        it('Verify click on delete button opens a delete modal', async function () {
            await utilities.clickOnElement(extractPage.extractTypeDropdownPlaceholder);
            await utilities.enterValueInElement(extractPage.extractTypeDropdownPlaceholder, data.newExtractType);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await extractPage.newButton.waitForDisplayed();
            await utilities.clickOnElement(extractPage.editIcon);
            await utilities.clickOnElement(extractPage.deleteButton);
            expect(await utilities.isElementDisplayed(extractPage.deleteModal)).toBe(true);
        });
        
        it('Verify text and buttons on delete modal', async function () {
            expect(await utilities.getElementText(extractPage.deleteModalText)).toEqual(data.deleteModalText);
            expect(await utilities.isElementDisplayed(extractPage.deleteYesButton)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.deleteNoButton)).toBe(true);
        });
    
        it('Verify No button functionality', async function () {
            await utilities.clickOnElement(extractPage.deleteNoButton);
            expect(await extractPage.deleteModal.waitForDisplayed({reverse: true})).toBe(true);
        });
    
        it('Verify Yes button functionality', async function () {
            await utilities.clickOnElement(extractPage.deleteButton);
            await utilities.clickOnElement(extractPage.deleteYesButton);
            await extractPage.deleteModal.waitForDisplayed({reverse: true});
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.deleteExtractSuccessToaster);
        });
    });

    describe('Validate History page', function () {

        it('Verify navigation to history page', async function () {
            await utilities.clickOnElement(extractPage.extractNameDropdownPlaceholder);
            await utilities.enterValueInElement(extractPage.extractNameDropdownPlaceholder, data.extractName);
            await utilities.clickOnElement(extractPage.dropdownOption);
            await extractPage.newButton.waitForDisplayed();
            await utilities.clickOnElement(extractPage.historyIcon);
            expect(await utilities.getElementText(extractPage.historyHeaderText)).toEqual(data.historyHeaderText);
        }); 
         
        it('Verify fields and buttons on history page', async function () {
            expect(await utilities.isElementDisplayed(extractPage.userInputField)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.statusInputField)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.historyClearButton)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.historySearchButton)).toBe(true);
            expect(await utilities.isElementDisplayed(extractPage.historyCancelButton)).toBe(true);
        });
    
        it('Verify columns on history page', async function () {
            expect(await utilities.getMultiElementTextOneByOne(extractPage.historyColumn)).toEqual(data.tableColumnHeaders);
        });
    
        it('Verify search using User', async function () {
            await utilities.clickOnElement(extractPage.userInputField);
            await utilities.clickOnElement(extractPage.userColumnOption);
            await utilities.clickOnElement(extractPage.historySearchButton);
            await extractPage.userColumnListData.waitForDisplayed();
            expect(await utilities.getElementText(extractPage.userColumnListData)).toEqual(data.user);
        });
    
        it('Verify search using complete status', async function () {
            await utilities.clickOnElement(extractPage.statusInputField);
            await utilities.clickOnElement(extractPage.statusColumnCompleteOption);
            await utilities.clickOnElement(extractPage.historySearchButton);
            await extractPage.userStatusListData.waitForDisplayed();
            expect(await utilities.getElementText(extractPage.userStatusListData)).toEqual(data.statusCompleted);
        });
    
        it('Verify search using failed status', async function () {
            await utilities.clickOnElement(extractPage.statusInputField);
            await utilities.clickOnElement(extractPage.statusColumnFailedOption);
            await utilities.clickOnElement(extractPage.historySearchButton);
            await extractPage.userStatusListData.waitForDisplayed();
            expect(await utilities.getElementText(extractPage.userStatusListData)).toEqual(data.statusFailed);
        });
    
        it('Verify cancel button', async function () {
            await utilities.clickOnElement(extractPage.historyCancelButton);
            expect(await utilities.getElementText(extractPage.headerText)).toEqual(data.header);
        });
    });
});