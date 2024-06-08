import commonFunctions from "../../../../utilities/common-utilities";
import rolesPage from "../../../pageobjects/administration/security/roles-page";
import menuOptions from "../../../pageobjects/menuoptions-page";
import snAndArCodesMappingData from "../../../../resources/invoicing/configuration/sn-ar-audit-types-mapping-test-data.json";
import mongoose from "mongoose";

class SNAndARCodesAuditTypeMappingPage {
    get snAndArCodesMappingRight() {
        return $("//span[@class='right-item-name']")
    }
    get selectedRight() {
        return $("//app-list-box[@label='Selected Rights']//span[@class='right-item-name']");
    }
    get availableRight() {
        return $("//app-list-box[@label='Available Rights']//span[@class='right-item-name']");
    }
    get successToaster() {
        return $("#toast-container");
    }
    get header() {
        return $("//div[@class='header-txt']");
    }
    get noScrollHeader() {
        return $("//div[@class='not-scroll-header']");
    }
    get description() {
        return $("//div[@class='description']");
    }
    get noDataMessage() {
        return $("//h3//span");
    }
    get specialNotationHeader() {
        return $("(//p-accordion//p-header)[1]");
    }
    get adjustmentReasonCodeHeader() {
        return $("(//p-accordion//p-header)[2]");
    }
    get noDataImage() {
        return $("//div[@class='no-data-img']");
    }
    get specialNotationCodeAccordion() {
        return $("//p-accordiontab[1]//div[1]//a[1]//span[1]");
    }
    get adjustmentReasonCodeAccordion() {
        return $("//p-accordiontab[2]//div[1]//a[1]//span[1]");
    }
    get specialNotationCodesListed() {
        return $$("//div[@id='p-accordiontab-0-content']//ul//li//span[1]");
    }
    get adjustmentReasonCodesListed() {
        return $$("//div[@id='p-accordiontab-1-content']//ul//li//span[1]");
    }
    get firstSpecialNotationCode() {
        return $("//p-accordiontab[1]//div[2]//div[1]//ul[1]//li[1]");
    }
    get auditTypesColumnHeader() {
        return $("//th[@role='columnheader']//div//div[contains(text(),'Audit Types')]");
    }
    get projectCodesColumnHeader() {
        return $("//th[@role='columnheader']//div//div[contains(text(),'Project Codes')]");
    }
    get selectAllCheckbox() {
        return $("//p-tristatecheckbox//div//div[@role='checkbox']");
    }
    get firstAuditTypeCheckbox() {
        return $("//tr[1]//p-checkbox//div[@class='p-checkbox-box']");
    }
    get secondAuditTypeCheckbox() {
        return $("//tr[2]//p-checkbox//div[@class='p-checkbox-box']");
    }
    get firstProjectCodeDropdown() {
        return $("//tr[1]//ng-select[@id='app-shared-dropdown-Select-Project-Codes']");
    }
    get selectAllProjectsCheckbox() {
        return $("#selectAll");
    }
    get projectClearItem() {
        return $("(//span[@aria-hidden='true'][normalize-space()='×'])[1]");
    }
    get selectProjectCodesPlaceholder() {
        return $("(//div[contains(text(),'Select Project Codes')])[1]");
    }
    get clearAllProjectsCrossIcon() {
        return $("//span[@title='Clear all']");
    }
    get assignSelectedAuditTypesButton() {
        return $("//span[normalize-space()='Assign Selected Audit Types']");
    }
    get removeAllLink() {
        return $("//span[normalize-space()='Remove All']");
    }
    get assignedAuditTypeTagName() {
        return $("(//span[@class='tag-name']//span[text()= '465 Flag'])[1]");   
    }
    get assignedAuditTypeForAdjustmentReasonCode() {
        return $("//td[normalize-space()='465 Flag']")
    }
    get assignedAuditType() {
        return $("//span[@class='tag-name']//span[1]");
    }
    get assignedAuditTypeSubHeader() {
        return $("//div[@class='sub-header ng-star-inserted']");
    }
    get searchClearCrossIcon() {
        return $("//span[@class='icon-cross ng-star-inserted']");
    }
    get mappedProjectCode() {
        return $("(//span[@class='tag-name']//span[@class='ng-star-inserted'])[1]")
    }
    get assignedProjectTypeDropdownOption() {
        return $("//span[normalize-space()='AMBINP']");
    }
    get specialNotationsCodeAssignedCountDescription() {
        return $("(//div[@id='p-accordiontab-0-content']//ul//li//span[2])[1]");
    }
    get assignAuditTypeValidation() {
        return $("//div[@class='error-txt ng-star-inserted']");
    }
    get confirmationYesButton() {
        return $("//div[normalize-space()='Yes']");
    }
    get firstAdjustmentReasonCode() {
        return $("//span[normalize-space()='44 - Provider Audit']");
    }
    get crossIconToRemoveSingleAssignment() {
        return $("(//span[@class='icon-cross'])[1]");
    }
    get confirmationPopupHeader() {
        return $("//div[normalize-space()='Confirmation Required']");
    }
    get popupData() {
        return $("//div[@class='popup-data']");
    }
    get popupCancelButton() {
        return $("//div[normalize-space()='Cancel']");
    }
    get toaster() {
        return $("#toast-container");
    }
    get assignButtonInProgressIcon() {
        return $("//span[normalize-space()='Assigning Selected Audit Types']//span")
    }
    get noItemsFound() {
        return $("//div[text()='No items found']");
    }
    get adjustmentReasonCodeAssignedCountDescription() {
        return $("(//div[@id='p-accordiontab-1-content']//ul//li//span[2])[1]");
    }
    get assignedAuditsSectionHeaderAndSubHeader() {
        return $("//h4[contains(text(),'Assigned Audit Types ')]");
    }
    get unassignedHeaderAndSubHeaderInfo() {
        return $("//h4[contains(text(),'Unassigned Audit Types ')]");
    }
    get searchAuditTypesField() {
        return $("//input[@placeholder='Search Audit Types']");
    }
    get searchResultDisplayed() {
        return $("//td[normalize-space()='COB']");
    }
    get columnHeaders() {
        return $$("//tr[@class='ng-star-inserted']//th[@role='columnheader']");
    }
    get auditTypes() {
        return $$("//tr[@class='ng-star-inserted']//td[2]");
    }
    get projectCodesDropdownOptions() {
        return $$("//div[@role='option']//span");
    }
    get projectCodeSearchResult() {
        return $("(//label[@class='label-text']//span)[2]");
    }
    get projectCodeDropdownInput() {
        return $("//tr[1]//ng-select[@id='app-shared-dropdown-Select-Project-Codes']//input");
    }
    // FUNCTIONS
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
    async unassignRightFromRole() {
        try {
            await browser.pause(2500);
            await commonFunctions.enterValueInElement(rolesPage.searchRight, snAndArCodesMappingData.snAndArCodesMappingRightName);
            await this.snAndArCodesMappingRight.waitForDisplayed();
            await commonFunctions.waitForElementDisplayed(rolesPage.removeRightButton);
            await browser.pause(2000);
            await commonFunctions.clickOnElement(rolesPage.removeRightButton);
            await this.availableRight.waitForDisplayed();
            await commonFunctions.clickOnElement(rolesPage.saveButton);
            await this.successToaster.waitForDisplayed();
            await rolesPage.logoutAndLoginAgain();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignRightToRole() {
        try {
            await browser.pause(2500);
            await commonFunctions.enterValueInElement(rolesPage.searchRight, snAndArCodesMappingData.snAndArCodesMappingRightName);
            await this.snAndArCodesMappingRight.waitForDisplayed();
            await commonFunctions.waitForElementDisplayed(rolesPage.addRightButton);
            await browser.pause(2000);
            await commonFunctions.clickOnElement(rolesPage.addRightButton);
            await this.selectedRight.waitForDisplayed();
            await commonFunctions.clickOnElement(rolesPage.saveButton);
            await this.successToaster.waitForDisplayed();
            await rolesPage.logoutAndLoginAgain();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProjectCodesFromDatabase() {
        try {
            const MyModel = mongoose.model('projects', new mongoose.Schema({code : String}));
            var projects = await MyModel.aggregate([
                { $sort: { "code": 1 } },
                {"$group": {"_id": null, code: {$push: "$code"}}},
                {"$project": {_id: false, code: true}}
            ])
            var projectCodes = [];
            for (let i = 0; i < projects.length; i++) {
                projectCodes.push(projects[i]["code"]);
            }
            return projectCodes.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getCountFromHeader(header) {
        try {
            var headerInfo = await commonFunctions.getElementText(header);
            var countFromInfo = await headerInfo.split("(");
            var countText = await countFromInfo[1].toString();
            var finalCount = await countText.split(")");
            return parseInt(finalCount[0]);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async isSearchResultsDisplayed() {
        try {
            await commonFunctions.enterValueInElement(this.searchAuditTypesField, snAndArCodesMappingData.auditTypeToSearch);
            await commonFunctions.waitForElementDisplayed(this.searchResultDisplayed);
            return await commonFunctions.isElementDisplayed(this.searchResultDisplayed);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
export default new SNAndARCodesAuditTypeMappingPage();