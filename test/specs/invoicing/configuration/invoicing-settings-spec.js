import loginPage from "../../../pageobjects/login/login-page";
import menuOptions from "../../../pageobjects/menuoptions-page";
import commonFunctions from "../../../../utilities/common-utilities";
import invoicingSettingsPage from "../../../pageobjects/invoicing/configuration/invoicing-settings-page";
import invoicingSettingsData from "../../../../resources/invoicing/configuration/invoicing-settings-test-data.json";
import connectToMongo from "../../../../utilities/database-connection";

describe("Test cases for the Invoicing > Configurations > Invoicing Settings", function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    })
    it("Verify new submenu option 'Invoice Settings' in Configuration when right assigned to the user and is clickable or not", async () => {
        await commonFunctions.clickOnElement(menuOptions.invoicing);
        await commonFunctions.clickOnElement(menuOptions.invoicingConfiguration);
        await commonFunctions.waitForElementDisplayed(menuOptions.invoicingSettings);
        expect(await commonFunctions.isElementDisplayed(menuOptions.invoicingSettings)).toBeTrue();
    })
    it("Verify Invoice settings submenu in configuration by un-assigning the Invoice Setting's right from user role", async () => {
        await invoicingSettingsPage.navigateToRolesAndSearchAdminRole();
        await commonFunctions.clickOnElement(invoicingSettingsPage.firstRoleViewIcon);
        await invoicingSettingsPage.unassignRightIfAssignedAndAssignIfNotAssigned()
        await commonFunctions.clickOnElement(menuOptions.invoicing);
        await commonFunctions.clickOnElement(menuOptions.invoicingConfiguration);
        expect(await commonFunctions.isElementExisting(menuOptions.invoicingSettings)).toBeFalse();
    })
    it("Verify Invoice settings submenu in configuration by assigning the Invoice Setting's right to user role", async () => {
        await invoicingSettingsPage.navigateToRolesAndSearchAdminRole();
        await commonFunctions.clickOnElement(invoicingSettingsPage.firstRoleViewIcon);
        await invoicingSettingsPage.unassignRightIfAssignedAndAssignIfNotAssigned();
        await commonFunctions.clickOnElement(menuOptions.invoicing);
        await commonFunctions.clickOnElement(menuOptions.invoicingConfiguration);
        expect(await commonFunctions.isElementExisting(menuOptions.invoicingSettings)).toBeTrue();
    })
    it("Validate navigation to Configurations - Invoicing Settings", async () => {
        await commonFunctions.clickOnElement(menuOptions.invoicingSettings);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.invoicingHeader)).toEqual(invoicingSettingsData.header);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.headerContent)).toEqual(invoicingSettingsData.headerContentText);
    })
    it("Verify different settings, description and its content on the Invoice Settings screen", async () => {
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.ipdsPrepayButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.ipdsPostpayButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.gr999Button)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.mappingAuditTypesButton)).toBeTrue();
        expect(await commonFunctions.getElementText(invoicingSettingsPage.ipdsLabel)).toEqual(invoicingSettingsData.ipdsLabelText);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.ipdsInfoText)).toEqual(invoicingSettingsData.ipdsInfo);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.gr999Label)).toEqual(invoicingSettingsData.gr999LabelText);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.gr999InfoText)).toEqual(invoicingSettingsData.gr999Info);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.mappingAuditTypesLabel)).toEqual(invoicingSettingsData.mappingLabelText);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.mappingInfoText)).toEqual(invoicingSettingsData.mappingInfo);
    })
    it("Verify the content of the Invoice Setting screen", async () => {
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.ipdsTooltip, "ptooltip")).toEqual(invoicingSettingsData.ipdsTooltip);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.gr999Tooltip, "ptooltip")).toEqual(invoicingSettingsData.gr999Tooltip);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.mappingAuditTypesTooltip, "ptooltip")).toEqual(invoicingSettingsData.mappingAuditTypesTooltip);
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.restoreToDefaultButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.saveButton)).toBeTrue();
    })
    it("Verify default state of each toggle button on the invoice settings screen", async () => {
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.ipdsPrepayButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.ipdsPostpayButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.gr999Button, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.mappingAuditTypesButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
    })
    it("Verify the confirmation popup on clicking Restore to Default", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.restoreToDefaultButton);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.popupTextData)).toEqual(invoicingSettingsData.restoreToDefaultPopupData);
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationCancelButton)).toBeTrue();
    })
    it("Verify settings on UI when settings restored to default", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(invoicingSettingsData.restoreToDefaultSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.ipdsPrepayButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.ipdsPostpayButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.gr999Button, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.mappingAuditTypesButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
    })
    it("To verify settings remain same if user refresh page or come back from another module", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.ipdsPrepayButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.gr999Button);
        await browser.refresh();
        await commonFunctions.waitUntilLoaderFinishedLoading(invoicingSettingsPage.spinner);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.ipdsPrepayButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.ipdsPostpayButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.gr999Button, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
        expect(await commonFunctions.getElementAttributeValue(invoicingSettingsPage.mappingAuditTypesButton, "class")).toEqual(invoicingSettingsData.uncheckedButtonClassValue);
    })
    it("Verify actions on the confirmation popup", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.restoreToDefaultButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.confirmationCancelButton);
        await commonFunctions.waitForElementDisplayed(invoicingSettingsPage.saveButton);
        await browser.pause(1000);
        expect(await commonFunctions.checkElementIsClickable(invoicingSettingsPage.saveButton)).toBeTrue();
        await commonFunctions.clickOnElement(invoicingSettingsPage.restoreToDefaultButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(invoicingSettingsData.restoreToDefaultSuccessToaster);
    })
    it("Verify default settings from the database", async () => {
        await commonFunctions.waitForToasterMessageToDisappear();
        await connectToMongo();
        expect((await invoicingSettingsPage.getSettingsFromDatabase(0)).toString()).toBe("false");
        expect((await invoicingSettingsPage.getSettingsFromDatabase(1)).toString()).toBe("false");
        expect((await invoicingSettingsPage.getSettingsFromDatabase(2)).toString()).toBe("false");
    })
    it("Verify changing default settings to any other set of setting", async ()=> {
        await commonFunctions.clickOnElement(invoicingSettingsPage.ipdsPrepayButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.gr999Button);
        await commonFunctions.clickOnElement(invoicingSettingsPage.saveButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(invoicingSettingsData.settingSavedToasterMessage);
        await commonFunctions.waitForToasterMessageToDisappear();
        expect((await invoicingSettingsPage.getSettingsFromDatabase(0)).toString()).toBe("true");
        expect((await invoicingSettingsPage.getSettingsFromDatabase(1)).toString()).toBe("true");
    })
    it("To verify validation pop up appear when user tries to toggle on mapping screen configuration, If IPDS configuration is on (for either pre or post pay)", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.mappingAuditTypesButton);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.popupTextData)).toEqual(invoicingSettingsData.auditTypeMappingValidationPopupText);
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationCancelButton)).toBeTrue();
    })
    it("To verify validation pop up appear when user tries to toggle on IPDS configuration, If mapping screen configuration is on", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.confirmationYesButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.ipdsPrepayButton);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.popupTextData)).toEqual(invoicingSettingsData.ipdsSettingsValidationPopup);
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationYesButton));
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationCancelButton));
    })
    it("To verify validation pop up appear when user tries to toggle on GR999 configuration, If mapping screen configuration is on", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.confirmationCancelButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.gr999Button);
        expect(await commonFunctions.getElementText(invoicingSettingsPage.popupTextData)).toEqual(invoicingSettingsData.ipdsSettingsValidationPopup);
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationYesButton));
        expect(await commonFunctions.isElementDisplayed(invoicingSettingsPage.confirmationCancelButton));
    })
    it("To verify validation pop up should not appear when user tries to toggle GR999 configuration, If IPDS configuration is on (for either pre or post pay)", async () => {
        await commonFunctions.clickOnElement(invoicingSettingsPage.confirmationYesButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.gr999Button);
        await commonFunctions.clickOnElement(invoicingSettingsPage.ipdsPrepayButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.gr999Button);
        expect(await commonFunctions.isElementExisting(invoicingSettingsPage.popupTextData)).toBeFalse();
        await commonFunctions.clickOnElement(invoicingSettingsPage.restoreToDefaultButton);
        await commonFunctions.clickOnElement(invoicingSettingsPage.confirmationYesButton);
    })
})