import Page from "../../page";
import rolesTestData from "../../../../resources/administration/security/roles-test-data.json";
import loginPage from "../../../pageobjects/login/login-page";
import commonUtility from "../../../../utilities/common-utilities";
import menuOptionsPage from "../../menuoptions-page";

class RolesPage extends Page {
    get rolesTitle() {
        return $("(//app-page-header)[1]");
    }
    get rolesLoader() {
        return $("//div[@class='loader']");
    }
    get newButton() {
        return $("(//button[text()='New'])[1]");
    }
    get newRolePageLoad() {
        return $("//h3[text()='Category: Contract']");
    }
    get roleNameField() {
        return $("//input[@name='roleName']");
    }
    get roleDescription() {
        return $("//textarea[@name='roleDescription']");
    }
    get saveButton() {
        return $("(//button[normalize-space()='Save'])[1]");
    }
    get successToaster() {
        return $("#toast-container");
    }
    get searchBox() {
        return $("//*[@id='content']//app-roles-list//input");
    }
    get roleSearchResults() {
        return $("//td[contains(text(),'" + rolesTestData.newRoleName + "')]");
    }
    get roleSearchResultWithUpdatedName() {
        return $("//td[contains(text(),'" + rolesTestData.updatedNewRoleName + "')]");
    }
    get viewIcon() {
        return $("//*[@class='svg-inline--fa fa-eye']");
    }
    get viewIconDisappear() {
        return $("(//button[@data-cy='view-button'])[2]");
    }
    get searchRight() {
        return $("//input[@placeholder='Right Name']");
    }
    get searchRightResult() {
        return $("(//span[@class='right-item-name'][text()='" + rolesTestData.rightName + "'])[1]");
    }
    get accessRightResult() {
        return $("(//span[@class='right-item-name'][text()='" + rolesTestData.rightNameForAccess + "'])[1]");
    }
    get disappearAddRightButton() {
        return $("(//button[@class='btn btn-xs btn-success right-item-button'])[2]");
    }
    get addRightButton() {
        return $("(//button[@class='btn btn-xs btn-success right-item-button'])[1]");
    }
    get removeRightButton() {
        return $("(//button[@class='btn btn-xs btn-danger right-item-button'])[1]");
    }
    get cancelButton() {
        return $("(//button[normalize-space()='Cancel'])[1]");
    }
    get roleCount() {
        return $("//*[@id='content']//p");
    }
    get historyTab() {
        return $("//button[text()='History']");
    }
    get historyTabTitle() {
        return $("//span[@class='default-color h6 title ng-star-inserted']");
    }
    get userField() {
        return $("//th[normalize-space()='User']");
    }
    get dateField() {
        return $("//th[normalize-space()='Date']");
    }
    get roleEditField() {
        return $("//th[normalize-space()='Role Edits']");
    }
    get roleEditValue() {
        return $("//span[normalize-space()='Description Updated: " + rolesTestData.updatedRoleDescription + "']");
    }
    get roleTab() {
        return $("//button[text()='Role']");
    }
    get deleteButton() {
        return $("//span[@class='ng-star-inserted'][contains(text(),'Delete')]");
    }
    get toasterBody() {
        return $("#toast-container");
    }
    get confirmButton() {
        return $("//button[normalize-space()='Confirm']");
    }
    get domoIdLabel() {
        return $("//label[normalize-space()='Domo Dashboard Id']");
    }
    get ocrLabel() {
        return $("(//label[normalize-space()='Integrated OCR Role'])[1]");
    }
    get pareoUniversityGroupLabel() {
        return $("(//label[normalize-space()='Pareo University User Group'])[1]");
    }
    get currentUserRole() {
        return $("(//div[@class = 'user-info']//span[@class = 'title'])[2]");
    }
    get adminRole() {
        return $("//td[normalize-space()='Administrator']");
    }
    get viewIconForAdministrator() {
        return $("(//button[@ngbtooltip='View Role'])[1]");
    }
    get searchCategory() {
        return $("//input[@placeholder='Category Name']");
    }
    get bulkUpdateRightNotAssigned() {
        return $("//app-list-box[@label = 'Available Rights']//div//span[text() = 'Bulk Update']")
    }
    get bulkUpdateRightAssigned() {
        return $("//app-list-box[@label = 'Selected Rights']//div//span[text() = 'Bulk Update']")
    }
    get categoryUpdateAudits() {
        return $("//h3[normalize-space()='Category: Update Audits']");
    }

    originalCount = 0;
    //FUNCTIONS
    async waitForElementToDisappear(element) {
        try {
            await element.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    
    async newPageLoad() {
        try {
            await browser.pause(6000);
            await this.newRolePageLoad.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async searchPageLoad() {
        try {
            await browser.pause(2500);
            await this.categoryUpdateAudits.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async enterTextInField(element, value) {
        try {
            await element.waitForDisplayed();
            await element.clearValue();
            await element.setValue(value)
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async waitForElementToDisplay(element) {
        try {
            await element.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async originalCountOfRoles() {
        try {

            let totalRoles = await this.roleCount.getText();
            this.originalCount = parseInt(totalRoles.substring(14, 16));
            return this.originalCount;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async CountOfRolesAfterAddingNewRole() {
        try {
            let rolesCount = await this.roleCount.getText();
            let updatedCount = parseInt(rolesCount.substring(14, 16));
            return updatedCount;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async searchForAdministratorRole() {
        try {
            await commonUtility.clickOnElement(this.searchBox);
            let userRole = await commonUtility.getElementText(this.currentUserRole);
            await commonUtility.enterValueInElement(this.searchBox, userRole);
            await this.adminRole.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignRightToRole() {
        try {
            await this.accessRightResult.waitForDisplayed();
            await this.addRightButton.waitForDisplayed();
            await browser.pause(2000);
            await this.addRightButton.click();
            await this.bulkUpdateRightAssigned.waitForDisplayed();
            await this.saveButton.waitForDisplayed();
            await this.saveButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignWhenBulkUpdateNotAssigned() {
        try {
            await this.searchForAdministratorRole();
            await commonUtility.clickOnElement(this.viewIconForAdministrator);
            await this.searchPageLoad();
            await commonUtility.enterValueInElement(this.searchCategory, rolesTestData.categoryName);
            await this.categoryUpdateAudits.waitForDisplayed();
            await this.assignRightToRole();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async logoutAndLoginAgain() {
        try {
            await loginPage.validateLogoutLink();
            await loginPage.validateLandingPageAfterLogout();
            await browser.pause(2000);
            await loginPage.login();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkRightAssigned() {
        try {
            await this.searchForAdministratorRole();
            await commonUtility.clickOnElement(this.viewIconForAdministrator);
            await this.searchPageLoad();
            await commonUtility.enterValueInElement(this.searchCategory, rolesTestData.categoryName);
            await this.categoryUpdateAudits.waitForDisplayed();
            let isRightAssigned = await this.bulkUpdateRightNotAssigned.isDisplayed();
            if (isRightAssigned == true) {
                await this.assignRightToRole();
            } else {
                await this.searchPageLoad();
                await this.removeRightButton.waitForDisplayed();
                await this.removeRightButton.click();
                await this.bulkUpdateRightNotAssigned.waitForDisplayed();
                await this.saveButton.waitForDisplayed();
                await this.saveButton.click();
                await this.successToaster.waitForDisplayed();
                await this.logoutAndLoginAgain();
                await commonUtility.clickOnElement(menuOptionsPage.administration);
                await commonUtility.clickOnElement(menuOptionsPage.security);
                await commonUtility.clickOnElement(menuOptionsPage.roles);
                await this.waitForElementToDisappear(this.rolesLoader);
                await this.assignWhenBulkUpdateNotAssigned();
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
module.exports = new RolesPage();