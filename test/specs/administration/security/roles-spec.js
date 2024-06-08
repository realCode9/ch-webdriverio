import loginPage from "../../../pageobjects/login/login-page";
import menuoptionsPage from "../../../pageobjects/menuoptions-page";
import rolesPage from "../../../pageobjects/administration/security/roles-page";
import rolesTestData from "../../../../resources/administration/security/roles-test-data.json";
import commonUtility from "../../../../utilities/common-utilities";

describe("Test Cases for Roles", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it("Validating navigation to Roles Module", async () => {
        await commonUtility.clickOnElement(menuoptionsPage.administration);
        await commonUtility.clickOnElement(menuoptionsPage.security);
        await commonUtility.clickOnElement(menuoptionsPage.roles);
        await rolesPage.waitForElementToDisappear(rolesPage.rolesLoader);
        await rolesPage.originalCountOfRoles();
        expect(await commonUtility.getElementText(rolesPage.rolesTitle)).toEqual(rolesTestData.moduleTitle);
    });

    it('Validating fields and label while creating new Label', async function () {
        await commonUtility.clickOnElement(rolesPage.newButton);
        await rolesPage.newPageLoad();
        expect(await commonUtility.isElementDisplayed(rolesPage.domoIdLabel)).toBe(true);
        expect(await commonUtility.isElementDisplayed(rolesPage.ocrLabel)).toBe(true);
        expect(await commonUtility.isElementDisplayed(rolesPage.pareoUniversityGroupLabel)).toBe(true);
    });

    it('Validating Save button is disabled till the time required field is not entered', async function () {
        expect(await commonUtility.isElementEnabled(rolesPage.saveButton)).toBe(false);
    });

    it('Validating Creation of a new Role', async function () {
        await commonUtility.enterValueInElement(rolesPage.roleNameField, rolesTestData.newRoleName);
        await commonUtility.enterValueInElement(rolesPage.roleDescription, rolesTestData.roleDescription);
        await commonUtility.clickOnElement(rolesPage.saveButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(rolesTestData.createToasterMsg);
        await rolesPage.waitForElementToDisappear(rolesPage.rolesLoader);
    });

    it('Validating count of roles after adding a new role', async function () {
        expect(await rolesPage.CountOfRolesAfterAddingNewRole()).toBeGreaterThan(rolesPage.originalCount);
    });

    it('Validating eye icon and updation in role information', async function () {
        await commonUtility.clickOnElement(rolesPage.searchBox);
        await commonUtility.enterValueInElement(rolesPage.searchBox, rolesTestData.newRoleName);
        await rolesPage.waitForElementToDisappear(rolesPage.viewIconDisappear);
        await rolesPage.waitForElementToDisplay(rolesPage.roleSearchResults);
        await commonUtility.clickOnElement(rolesPage.viewIcon);
        await rolesPage.newPageLoad();
        await commonUtility.enterValueInElement(rolesPage.roleNameField, rolesTestData.updatedNewRoleName);
        await commonUtility.enterValueInElement(rolesPage.roleDescription, rolesTestData.updatedRoleDescription);
        await commonUtility.clickOnElement(rolesPage.saveButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(rolesTestData.updateToasterMsg);
        await rolesPage.waitForElementToDisappear(rolesPage.rolesLoader);
    });
    it('Validating History Tab and update in it', async function () {
        await commonUtility.clickOnElement(rolesPage.searchBox);
        await commonUtility.enterValueInElement(rolesPage.searchBox, rolesTestData.updatedNewRoleName);
        await rolesPage.waitForElementToDisappear(rolesPage.viewIconDisappear);
        await rolesPage.waitForElementToDisplay(rolesPage.roleSearchResultWithUpdatedName);
        await commonUtility.clickOnElement(rolesPage.viewIcon);
        await rolesPage.newPageLoad();
        await commonUtility.clickOnElement(rolesPage.historyTab);
        expect(await commonUtility.getElementText(rolesPage.historyTabTitle)).toEqual(rolesTestData.historyTitle);
        expect(await commonUtility.isElementDisplayed(rolesPage.userField)).toBe(true);
        expect(await commonUtility.isElementDisplayed(rolesPage.dateField)).toBe(true);
        expect(await commonUtility.isElementDisplayed(rolesPage.roleEditField)).toBe(true);
        expect(await commonUtility.isElementDisplayed(rolesPage.roleEditValue)).toBe(true);
        await commonUtility.clickOnElement(rolesPage.roleTab);
    });

    it('Validating Search rights by Available category and Rights', async function () {
        await rolesPage.newPageLoad();
        await commonUtility.getElementText(rolesPage.searchRight, rolesTestData.rightName);
        await rolesPage.waitForElementToDisplay(rolesPage.searchRightResult);
        expect(await commonUtility.isElementDisplayed(rolesPage.searchRightResult)).toBe(true);
    });
    it('Validating add and remove Rights Functionality', async function () {
        expect(await commonUtility.isElementDisplayed(rolesPage.addRightButton)).toBe(true);
        await commonUtility.clickOnElement(rolesPage.addRightButton);
        expect(await commonUtility.isElementDisplayed(rolesPage.removeRightButton)).toBe(true);
        await commonUtility.clickOnElement(rolesPage.saveButton);
        await rolesPage.waitForElementToDisappear(rolesPage.rolesLoader);
    });
    it('Validating creation of duplicate roles', async function () {
        await commonUtility.clickOnElement(rolesPage.newButton);
        await rolesPage.newPageLoad();
        await rolesPage.enterTextInField(rolesPage.roleNameField, rolesTestData.updatedNewRoleName);
        await commonUtility.clickOnElement(rolesPage.saveButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(rolesTestData.errorMessage);

    });
    it('Validating Cancel Button and its functionality', async function () {
        await commonUtility.clickOnElement(rolesPage.toasterBody);
        expect(await commonUtility.isElementDisplayed(rolesPage.cancelButton)).toBe(true);
        await commonUtility.clickOnElement(rolesPage.cancelButton);
        await rolesPage.waitForElementToDisappear(rolesPage.rolesLoader);
        expect(await commonUtility.getElementText(rolesPage.rolesTitle)).toEqual(rolesTestData.moduleTitle);
    });
    it('Validating Role Delete Functionality', async function () {
        await commonUtility.clickOnElement(rolesPage.searchBox);
        await commonUtility.enterValueInElement(rolesPage.searchBox, rolesTestData.updatedNewRoleName);
        await rolesPage.waitForElementToDisappear(rolesPage.viewIconDisappear);
        await rolesPage.waitForElementToDisplay(rolesPage.roleSearchResultWithUpdatedName);
        await commonUtility.clickOnElement(rolesPage.viewIcon);
        await rolesPage.newPageLoad();
        await commonUtility.clickOnElement(rolesPage.deleteButton);
        await commonUtility.clickOnElement(rolesPage.confirmButton);
        await rolesPage.waitForElementToDisplay(rolesPage.rolesTitle);
        await rolesPage.waitForElementToDisappear(rolesPage.rolesLoader);
        expect(await commonUtility.getElementText(rolesPage.toasterBody)).toEqual(rolesTestData.deleteToasterMsg);
    });

    it("Validate access of module based on right assigned", async () => {
        await rolesPage.checkRightAssigned();
        expect(await commonUtility.getElementText(rolesPage.successToaster)).toEqual(rolesTestData.updateToasterMsg);
        await rolesPage.logoutAndLoginAgain();
        expect(await commonUtility.getElementText(menuoptionsPage.updateAudits)).toEqual(rolesTestData.categoryName);
    });
    
});
