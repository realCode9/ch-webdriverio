import loginPage from "../../pageobjects/login/login-page";
import menuOption from "../../pageobjects/menuoptions-page";
import claimTestData from "../../../resources/pareo-clinical/claim-selection-management-test-data.json";
import claimSelectionPage from "../../pageobjects/pareo-clinical/claim-selection-management-page";
import commonUtilities from "../../../utilities/common-utilities";
import medicalRecordRequestPage from "../../pageobjects/pareo-clinical/medical-record-request-management-page";

describe("Medical Record Request Management", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Verify 'Medical Record Request Management' option under Pareo Clinical menu", async () => {
        await commonUtilities.clickOnElement(menuOption.pareoClinical);
        expect(await commonUtilities.getElementText(medicalRecordRequestPage.menuOptionMedicalRecordRequestManagement)).toEqual(claimTestData.medicalRecordRequestHeader);
    });
    it("Navigate to Pareo Clinical -> Medical Record Request Management", async () => {
        await commonUtilities.clickOnElement(menuOption.medicalRecordRequestManagement);
        await expect(browser).toHaveUrl(claimTestData.medicalRecordRequestPageUrl);
    });
    it("Verify successful navigation to Medical Record Request page with Header confirmation", async () => {
        expect(await commonUtilities.getElementText(medicalRecordRequestPage.selectHeaderText)).toEqual(claimTestData.medicalRecordRequestHeader);
    });

    describe("Testing Select Columns functionality on Medical Record Request Grid screen", () => {
        it("Verify visibility of Status Columns section", async () => {
            await commonUtilities.clickOnElement(medicalRecordRequestPage.selectStatusLanes);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectColumnsSection)).toBe(true);
        });
        it("Verify options available on Status Columns dropdown", async () => {
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.selectAll)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectColumnsApplyButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(claimSelectionPage.selectColumnsCancelButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.selectColumnsResetButton)).toBe(true);
        });
        it("Verify Cancel button functionality on Select Columns", async () => {
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsCancelButton);
            expect(await commonUtilities.isElementExisting(claimSelectionPage.selectColumnsSection)).toBe(false);
        });
        it("Verify validation message if no status column is selected", async () =>{
            await commonUtilities.clickOnElement(medicalRecordRequestPage.selectStatusLanes);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.selectAllCheckbox);
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsApplyButton);
            expect(await commonUtilities.getElementText(medicalRecordRequestPage.selectAllValidationMessage)).toEqual(claimTestData.selectAllValidationMessage);
        });
        it("Verify visibility of selected status in the status lane after using Apply Button", async () =>{
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.selectSecondStatusInStatusLane);
            const statusNameInSelectionFilter = await commonUtilities.getElementText(medicalRecordRequestPage.getTextOfSecondStatusInStatusLane);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.selectSecondStatusInStatusLane);
            await commonUtilities.clickOnElement(claimSelectionPage.selectColumnsApplyButton);
            await commonUtilities.waitForElementDisplayed(medicalRecordRequestPage.getTextOfSelectedStatusInGrid);
            const statusGridLocator = await medicalRecordRequestPage.createLocatorOfStatusGrid(statusNameInSelectionFilter);
            expect(await commonUtilities.isElementDisplayed(statusGridLocator)).toBe(true);
        });
        it("Verify Reset button functionality on Select Columns", async () => {
            await commonUtilities.clickOnElement(medicalRecordRequestPage.selectStatusLanes);
            const statusNameInSelectionFilter = await commonUtilities.getElementText(medicalRecordRequestPage.getTextOfFirstStatusInStatusLane);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.selectColumnsResetButton);
            await commonUtilities.waitForElementDisplayed(medicalRecordRequestPage.getTextOfSelectedStatusInGrid);
            const statusGridLocator = await medicalRecordRequestPage.createLocatorOfStatusGrid(statusNameInSelectionFilter);
            expect(await commonUtilities.isElementDisplayed(statusGridLocator)).toBe(true);
        });
    });

    describe("Testing Filters functionality on Medical Record Request page", () => {
        it("Verify clicking on 'Show' filter button should open the filter panel", async () => {
            await commonUtilities.clickOnElement(medicalRecordRequestPage.showFilter);
            expect(await commonUtilities.checkElementIsClickable(medicalRecordRequestPage.filterPanel)).toBe(true);
        });
        it("Verify filtering of results based on Claim Number", async () => {
            const claimNumberOfMRRTile = await commonUtilities.getElementText(medicalRecordRequestPage.firstClaimNumberInStatusGrid);          
            await commonUtilities.enterValueInElement(medicalRecordRequestPage.claimNumberInputFilter, claimNumberOfMRRTile);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            expect(await commonUtilities.getElementText(medicalRecordRequestPage.firstClaimNumberInStatusGrid)).toEqual(claimNumberOfMRRTile);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });
        it("Verify filtering of results based on Provider Number", async () => {
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.claimNumberInputFilter);
            const locatorOfDataListOfMRRTiles = await medicalRecordRequestPage.dataOfRetryLetterGenerationTile(1);
            const textOfDataListOfMRRTiles = await commonUtilities.getElementText(locatorOfDataListOfMRRTiles);
            const providerNumberInputField = await medicalRecordRequestPage.filterInputField(11);
            await commonUtilities.enterValueInElement(providerNumberInputField, textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            expect(await commonUtilities.getElementText(locatorOfDataListOfMRRTiles)).toEqual(textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });
        it("Verify filtering of results based on Provider Name", async () => {
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.claimNumberInputFilter);
            const locatorOfDataListOfMRRTiles = await medicalRecordRequestPage.dataOfRetryLetterGenerationTile(2);
            const textOfDataListOfMRRTiles = await commonUtilities.getElementText(locatorOfDataListOfMRRTiles);
            const providerNameInputField = await medicalRecordRequestPage.filterInputField(10);
            await commonUtilities.enterValueInElement(providerNameInputField, textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.providerNameOption);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            expect(await commonUtilities.getElementText(locatorOfDataListOfMRRTiles)).toEqual(textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });
        it("Verify filtering of results based on MR Request ID", async () => {
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.claimNumberInputFilter);
            const locatorOfDataListOfMRRTiles = await medicalRecordRequestPage.dataOfRetryLetterGenerationTile(3);
            const textOfDataListOfMRRTiles = await commonUtilities.getElementText(locatorOfDataListOfMRRTiles);
            const mrRequestIDInputField = await medicalRecordRequestPage.filterInputField(8);
            await commonUtilities.enterValueInElement(mrRequestIDInputField, textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            expect(await commonUtilities.getElementText(locatorOfDataListOfMRRTiles)).toEqual(textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });
        it("Verify filtering of results based on Member ID", async () => {
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.claimNumberInputFilter);
            const locatorOfDataListOfMRRTiles = await medicalRecordRequestPage.dataOfRetryLetterGenerationTile(4);
            const textOfDataListOfMRRTiles = await commonUtilities.getElementText(locatorOfDataListOfMRRTiles);
            const memberIDInputField = await medicalRecordRequestPage.filterInputField(6);
            await commonUtilities.enterValueInElement(memberIDInputField, textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            expect(await commonUtilities.getElementText(locatorOfDataListOfMRRTiles)).toEqual(textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });
        it("Verify filtering of results based on Member First Name and Last Name", async () => {
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.claimNumberInputFilter);
            const locatorOfDataListOfMRRTiles = await medicalRecordRequestPage.dataOfRetryLetterGenerationTile(5);
            const textOfDataListOfMRRTiles = await commonUtilities.getElementText(locatorOfDataListOfMRRTiles);
            const providerName = textOfDataListOfMRRTiles.split(" ");
            const providerFirstNameInputField = await medicalRecordRequestPage.filterInputField(4);
            const providerLastNameInputField = await medicalRecordRequestPage.filterInputField(5);
            await commonUtilities.enterValueInElement(providerFirstNameInputField, providerName[0]);
            await commonUtilities.enterValueInElement(providerLastNameInputField, providerName[1]);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            expect(await commonUtilities.getElementText(locatorOfDataListOfMRRTiles)).toEqual(textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });
        it("Verify filtering of results based on Dataset name", async () => {
            await commonUtilities.clickOnElement(medicalRecordRequestPage.expandGridDetail);
            const locatorOfDataListOfMRRTiles = await medicalRecordRequestPage.dataOfRetryLetterGenerationTile(12);
            const textOfDataListOfMRRTiles = await commonUtilities.getElementText(locatorOfDataListOfMRRTiles);
            const datasetInputField = await medicalRecordRequestPage.filterInputField(2);
            await commonUtilities.enterValueInElement(datasetInputField, textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.datasetNameOption);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.expandGridDetail);
            expect(await commonUtilities.getElementText(locatorOfDataListOfMRRTiles)).toEqual(textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });

        // Review type test case is incomplete since regression environment was not having such data
        xit("Verify filtering of results based on Review Type", async () => {
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.claimNumberInputFilter);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.expandGridDetail);
            const locatorOfDataListOfMRRTiles = await medicalRecordRequestPage.dataOfRetryLetterGenerationTile(11);
            const textOfDataListOfMRRTiles = await commonUtilities.getElementText(locatorOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.selectFiltersButton);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.reviewTypeCheckbox);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.applyButtonForAdditionalFields);
            const datasetInputField = await medicalRecordRequestPage.filterInputField(14);
            await commonUtilities.enterValueInElement(datasetInputField, textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.datasetNameOption);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.submitButton);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.expandGridDetail);
            expect(await commonUtilities.getElementText(locatorOfDataListOfMRRTiles)).toEqual(textOfDataListOfMRRTiles);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.resetAll);
        });
        it("Verify clicking on 'Hide' filter button should close the filter panel", async () => {
            await commonUtilities.waitForElementClickable(medicalRecordRequestPage.showFilter);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.showFilter);
            expect(await commonUtilities.checkElementIsClickable(medicalRecordRequestPage.filterPanel)).toBe(false);
        });
    });
    describe("Testing Upload documents to Claims feature", () => {
        it("Verify clicking on 'Upload' icon should open upload documents panel", async () => {
            await commonUtilities.clickOnElement(medicalRecordRequestPage.uploadDocumentsToClaimIcon);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadDocumentsPanel)).toBe(true);
        });
        it("Verify Upload documents panel's 'Header Text'", async () => {
            expect(await commonUtilities.getElementText(medicalRecordRequestPage.uploadDocumentsPanelHeaderText)).toEqual(claimTestData.uploadClaimsHeaderText);
        });
        it("Verify Upload documents panel's Step 1 instruction message", async () => {
            expect(await commonUtilities.getElementText(medicalRecordRequestPage.uploadDocumentsPanelStepOneInstructions)).toEqual(claimTestData.uploadClaimsHeaderStepOneInstruction);
        });
        it("Verify fields available on Upload Documents Panel", async () => {
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelClaimNumber)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelDateOfService)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelProviderName)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelProviderNumber)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelMemberFirstName)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelMemberLastName)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelMemberDateOfBirth)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelSearch)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelClear)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(medicalRecordRequestPage.uploadPanelCancel)).toBe(true);
        });
        it("Verify searching claims based on Claim Number", async () => {
            const claimNumberOfMRRTile = await commonUtilities.getElementText(medicalRecordRequestPage.firstClaimNumberInStatusGrid);          
            await commonUtilities.enterValueInElement(medicalRecordRequestPage.uploadPanelClaimNumberInputField, claimNumberOfMRRTile);
            await commonUtilities.clickOnElement(medicalRecordRequestPage.uploadPanelSearch);
            await commonUtilities.waitForElementDisplayed(medicalRecordRequestPage.claimNumberOnStepTwo);
            expect(await commonUtilities.getElementText(medicalRecordRequestPage.claimNumberOnStepTwo)).toEqual(claimNumberOfMRRTile);
        });
    });
});