import rolesPage from "../../../pageobjects/administration/security/roles-page";
import commonFunctions from "../../../../utilities/common-utilities";
import menuOptions from "../../../pageobjects/menuoptions-page";
import invoicingSettingsData from "../../../../resources/invoicing/configuration/invoicing-settings-test-data.json";
import mongoose from "mongoose";
const MyModel = mongoose.model('workflowsettings', new mongoose.Schema({ name: Boolean }));

class InvoicingSettings {
    get invoicingHeader() {
        return $("//div[contains(text(),'Invoicing Settings')]");
    }
    get headerContent() {
        return $("//p[contains(text(),'Use the settings')]");
    }
    get ipdsPrepayButton() {
        return $("#mat-mdc-slide-toggle-1-button");
    }
    get ipdsPostpayButton() {
        return $("#mat-mdc-slide-toggle-2-button");
    }
    get gr999Button() {
        return $("#mat-mdc-slide-toggle-3-button");
    }
    get mappingAuditTypesButton() {
        return $("#mat-mdc-slide-toggle-4-button");
    }
    get ipdsLabel() {
        return $("//div[normalize-space()='IPDS (Inter Plan Data Solution)']");
    }
    get ipdsInfoText() {
        return $("//p[contains(text(),'Audit transactions will come from IPDS (Inter Plan')]");
    }
    get gr999Label() {
        return $("//div[normalize-space()='GR999']");
    }
    get gr999InfoText() {
        return $("//p[contains(text(),'GR999 will be populated')]");
    }
    get mappingAuditTypesLabel() {
        return $("//div[contains(text(),'Mapping Special Notations')]");
    }
    get mappingInfoText() {
        return $("//p[contains(text(),'Special Notations/Adjustment')]");
    }
    get ipdsTooltip() {
        return $("(//span[@tooltipstyleclass='ipds-tooltip'])[1]");
    }
    get gr999Tooltip() {
        return $("//span[@tooltipstyleclass='gr-tooltip']");
    }
    get mappingAuditTypesTooltip() {
        return $("(//span[@tooltipstyleclass='ipds-tooltip'])[2]");
    }
    get restoreToDefaultButton() {
        return $("//app-common-button[@label='Restore to Default']//button[@id='notSubmitButton']");
    }
    get saveButton() {
        return $("//app-common-button[@label='Save']//button[@id='notSubmitButton']");
    }
    get popupTextData() {
        return $("//div[@class='popup-data']");
    }
    get confirmationYesButton() {
        return $("//div[normalize-space()='Yes']");
    }
    get confirmationCancelButton() {
        return $("//div[normalize-space()='Cancel']")
    }
    get firstRoleViewIcon() {
        return $("(//*[@class='svg-inline--fa fa-eye'])[1]")
    }
    get invoicingRight() {
        return $("//span[text()='Get Invoicing Settings']");
    }
    get selectedInvoicingRight() {
        return $("//app-list-box[@label='Selected Rights']//span[text()='Get Invoicing Settings']");
    }
    get availableInvoicingRight() {
        return $("//app-list-box[@label='Available Rights']//span[text()='Get Invoicing Settings']");
    }
    get successToaster() {
        return $("#toast-container");
    }
    get spinner() {
        return $("//div[@id='pareo-spinner']//div//span");
    }

    //FUNCTIONS
    async navigateToRolesAndSearchAdminRole() {
        try {
            await commonFunctions.clickOnElement(menuOptions.administration);
            await commonFunctions.clickOnElement(menuOptions.security);
            await commonFunctions.clickOnElement(menuOptions.roles);
            await rolesPage.searchForAdministratorRole();
        } catch (error) {
            fail("Failed due to exception " + error)
        }
    }
    async unassignRightIfAssignedAndAssignIfNotAssigned() {
        try {
            await browser.pause(2500);
            await commonFunctions.enterValueInElement(rolesPage.searchRight, invoicingSettingsData.invoiceSettingsRightName);
            await this.invoicingRight.waitForDisplayed();
            if (await this.selectedInvoicingRight.isExisting() == true) {
                await commonFunctions.waitForElementDisplayed(rolesPage.removeRightButton);
                await browser.pause(1000);
                await commonFunctions.clickOnElement(rolesPage.removeRightButton);
                await this.availableInvoicingRight.waitForDisplayed();
            } else {
                await commonFunctions.waitForElementDisplayed(rolesPage.addRightButton);
                await browser.pause(1000);
                await commonFunctions.clickOnElement(rolesPage.addRightButton);
                await this.selectedInvoicingRight.waitForDisplayed();
            }
            await commonFunctions.clickOnElement(rolesPage.saveButton);
            await this.successToaster.waitForDisplayed();
            await rolesPage.logoutAndLoginAgain();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSettingsFromDatabase(setting) {
        try {
            var settings = await MyModel.aggregate([
                { "$unwind": "$ipdsSettings" },
                { "$group": { "_id": null, isEnabled: { $push: "$ipdsSettings.isEnabled" }, isGR999Enabled: { $push: "$ipdsSettings.isGR999Enabled" }, isMappingEnabled: { $push: "$ipdsSettings.isMappingEnabled" } } },
                { "$project": { _id: false, isEnabled: true, isGR999Enabled: true, isMappingEnabled: true } }
            ])
            var settingsArray = [];
            for (let i = 0; i < settings.length; i++) {
                settingsArray.push(settings[i]["isEnabled"], settings[i]["isGR999Enabled"], settings[i]["isMappingEnabled"]);
            }
            return settingsArray[setting].toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
module.exports = new InvoicingSettings();