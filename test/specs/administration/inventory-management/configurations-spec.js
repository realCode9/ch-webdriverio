import loginPage from "../../../pageobjects/login/login-page";
import commonFunctions from "../../../../utilities/common-utilities";
import menuOptionsPage from "../../../pageobjects/menuoptions-page";
import configurationsPage from "../../../pageobjects/administration/inventory-management/configurations-page";
import configurationsData from "../../../../resources/administration/inventory-management/configurations.json";

describe("Test cases for Admin>Inventory Management: Configurations", function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    })
    it("Validate navigate to Inventory Management> Configurations", async () => {
        await commonFunctions.clickOnElement(menuOptionsPage.administration);
        await commonFunctions.clickOnElement(menuOptionsPage.inventoryManagement);
        await commonFunctions.clickOnElement(menuOptionsPage.configurations);
        await commonFunctions.waitForElementDisplayed(configurationsPage.configurationsHeader);
        await browser.pause(2000);
        expect(await commonFunctions.getElementText(configurationsPage.configurationsHeader)).toEqual(configurationsData.configurationsHeaderText);
    })
    it("Validate UI on the landing page of configurations", async () => {
        expect(await commonFunctions.getElementText(configurationsPage.headingText)).toEqual(configurationsData.headingText);
        expect(await commonFunctions.getElementText(configurationsPage.automaticCheckIn)).toEqual(configurationsData.automaticCheckInText);
        expect(await commonFunctions.getElementText(configurationsPage.checkInSubHeading)).toEqual(configurationsData.checkInSubHeadingText);
        expect(await commonFunctions.getElementText(configurationsPage.setLimitText)).toEqual(configurationsData.setLimitText);
        expect(await commonFunctions.getElementText(configurationsPage.setLimitSubHeading)).toEqual(configurationsData.setLimitSubHeadingText);
        expect(await commonFunctions.isElementDisplayed(configurationsPage.restoreToDefaultButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(configurationsPage.saveButton)).toBeTrue();
        expect(await commonFunctions.isElementEnabled(configurationsPage.restoreToDefaultButton)).toBeTrue();
        expect(await commonFunctions.isElementEnabled(configurationsPage.restoreToDefaultButton)).toBeTrue();
    })
    it("Validate no data image and message", async () => {
        expect(await commonFunctions.isElementDisplayed(configurationsPage.noTeamsImage)).toBeTrue();
        expect(await commonFunctions.getElementText(configurationsPage.noTeamsText)).toEqual(configurationsData.noDataMessageText);
    })
    it("Validate automatic check in toggle button and checked by default", async () => {
        expect(await commonFunctions.isElementDisplayed(configurationsPage.automaticCheckInButton)).toBeTrue();
        expect(await commonFunctions.getElementAttributeValue(configurationsPage.automaticCheckInButton, "class")).toEqual(configurationsData.toggleButtonClassValue);
    })
    it("Verify validation message on global limit input field", async () => {
        await configurationsPage.clearLimitField();
        expect(await commonFunctions.getElementText(configurationsPage.globalLimitValidation)).toEqual(configurationsData.globalLimitValidationMessage);
    })
    it("Verify popup by clicking on Restore Default button on the Configurations", async () => {
        await commonFunctions.clickOnElement(configurationsPage.restoreToDefaultButton);
        expect(await commonFunctions.getElementText(configurationsPage.popupData)).toEqual(configurationsData.confirmationMessageText);
        expect(await commonFunctions.isElementDisplayed(configurationsPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(configurationsPage.confirmationNoButton)).toBeTrue();
        expect(await commonFunctions.checkElementIsClickable(configurationsPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.checkElementIsClickable(configurationsPage.confirmationNoButton)).toBeTrue();
    })
    it("Validate functionality after Clicking No button on Confirmation popup", async () => {
        await commonFunctions.clickOnElement(configurationsPage.confirmationNoButton);
        await commonFunctions.waitForElementDisplayed(configurationsPage.globalLimitValidation);
        expect(await commonFunctions.getElementText(configurationsPage.globalLimitValidation)).toEqual(configurationsData.globalLimitValidationMessage);
    })
    it("Validate setting global limit to other than default limit", async () => {
        await commonFunctions.enterValueInElement(configurationsPage.globalLimitInputField, configurationsData.validGlobalLimit);
        await commonFunctions.clickOnElement(configurationsPage.saveButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(configurationsData.updateLimitSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
        await configurationsPage.navigateToAssignmentTeam();
        await commonFunctions.waitForElementDisplayed(configurationsPage.limitInInventory);
        expect(await configurationsPage.configuredLimit()).toEqual(configurationsData.validGlobalLimit);
    })
    it("Verify functionality after Clicking Yes Button on Confirmation popup", async () => {
        await commonFunctions.clickOnElement(menuOptionsPage.configurations);
        await commonFunctions.clickOnElement(configurationsPage.restoreToDefaultButton);
        await commonFunctions.clickOnElement(configurationsPage.confirmationYesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(configurationsPage.restoringLoaderButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(configurationsData.limitSetToDefaultSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
        await configurationsPage.navigateToAssignmentTeam();
        await commonFunctions.waitForElementDisplayed(configurationsPage.limitInInventory);
        expect(await configurationsPage.configuredLimit()).toEqual(configurationsData.defaultGlobalLimit);
    })
})