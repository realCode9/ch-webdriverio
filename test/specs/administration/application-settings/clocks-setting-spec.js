import loginPage from "../../../pageobjects/login/login-page";
import clocksSettingTestData from "../../../../resources/administration/application-settings/clocks-setting-test-data.json";
import menuOptionsPage from "../../../pageobjects/menuoptions-page"
import clocksSetting from "../../../pageobjects/administration/application-settings/clocks-setting-page.js"
import commonUtilities from "../../../../utilities/common-utilities";
import clocks from "../../../pageobjects/administration/application-settings/clocks-page.js"

describe("Test Cases for Clocks Settings", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it("Validate navigating to Clocks Setting", async function () {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.administration);
            await commonUtilities.clickOnElement(menuOptionsPage.applicationSettings);
            await commonUtilities.clickOnElement(menuOptionsPage.clocksSetting);
            expect(await commonUtilities.getElementText(clocksSetting.clocksSettingHeaderText)).toContain(clocksSettingTestData.clockDatesText);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate default fields on Clocks Setting", async function () {
        try {
            expect(await commonUtilities.isElementDisplayed(clocksSetting.clockCollection)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate Select a Date drop-down field is present after selecting value in Clock Collection field", async function () {
        try {
            await commonUtilities.clickOnElement(clocksSetting.clockCollection);
            await commonUtilities.selectDropDownOptions(clocksSettingTestData.clockCollection);
            expect(await commonUtilities.isElementDisplayed(clocksSetting.selectADate)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate Start Date Basis Name field is present after selecting value in Select a Date field", async function () {
        try {
            await commonUtilities.clickOnElement(clocksSetting.selectADate);
            await commonUtilities.clickOnElement(clocksSetting.selectADateValue);
            expect(await commonUtilities.isElementDisplayed(clocksSetting.startDateBasisName)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate Add button is disabled on Clocks Setting when value is not added in Start Date Basis Name field", async function () {
        try {
            expect(await commonUtilities.isElementEnabled(clocksSetting.addButton)).toBeFalse;
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate Add button is enabled on Clocks Setting when value added in Start Date Basis Name field", async function () {
        try {
            await commonUtilities.enterValueInElement(clocksSetting.startDateBasisName,clocksSettingTestData.startDateBasisName);
            expect(await commonUtilities.isElementEnabled(clocksSetting.addButton)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate Adding a date on Clocks Setting", async function () {
        try {
            await commonUtilities.clickOnElement(clocksSetting.addButton);
            await browser.pause(1000);
            expect(await clocksSetting.verifyDataAddedInTable(clocksSettingTestData.startDateBasisName)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate value present in Start Date Basis Drop-down on Clocks", async function () {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.clocks);
            await commonUtilities.clickOnElement(clocks.newButton);
            await commonUtilities.clickOnElement(clocks.clockTypeField);
            await commonUtilities.selectDropDownOptions(clocksSettingTestData.clockTypeFieldValue);
            await commonUtilities.clickOnElement(clocks.startDateBasisField);
            expect(await clocksSetting.verifyDataInStartDateBasisField(clocksSettingTestData.startDateBasisName)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate confirmation modal and buttons present after clicking delete button from table", async function () {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.clocksSetting);
            await browser.pause(1000);
            await clocksSetting.clickOnDeleteButton(clocksSettingTestData.startDateBasisName);
            expect(await commonUtilities.isElementDisplayed(clocksSetting.confirmationModal)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocksSetting.yesButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocksSetting.noButton)).toBe(true);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate clicking on No button on modal", async function () {
        try {
            await commonUtilities.clickOnElement(clocksSetting.noButton);
            expect(await commonUtilities.isElementExisting(clocksSetting.confirmationModal)).toBeFalse;
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

    it("Validate clicking on Yes button on modal", async function () {
        try {
            await clocksSetting.clickOnDeleteButton(clocksSettingTestData.startDateBasisName);
            await commonUtilities.clickOnElement(clocksSetting.yesButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(clocksSettingTestData.successToasterMessage);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });

});