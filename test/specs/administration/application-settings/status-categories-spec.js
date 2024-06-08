import loginPage from "../../../pageobjects/login/login-page";
import menuOptionsPage from "../../../pageobjects/menuoptions-page";
import commonFunctions from "../../../../utilities/common-utilities";
import statusCategoriesPage from "../../../pageobjects/administration/application-settings/status-categories-page";
import categoriesData from "../../../../resources/administration/application-settings/status-categories-test-data.json";

describe("Test cases of status categories", function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    })
    it("Validating navigation to status categories", async () => {
        await commonFunctions.clickOnElement(menuOptionsPage.administration);
        await commonFunctions.clickOnElement(menuOptionsPage.applicationSettings);
        await commonFunctions.clickOnElement(menuOptionsPage.statusCategories);
        await browser.pause(2000);
        expect(await commonFunctions.getElementText(statusCategoriesPage.statusCategoryHeader)).toEqual(categoriesData.header);
    })
    it("Validate UI for the status categories > categories tab", async () => {
        expect(await commonFunctions.getElementText(statusCategoriesPage.headerLabel)).toEqual(categoriesData.headerLabel);
        expect(await commonFunctions.getElementText(statusCategoriesPage.header)).toEqual(categoriesData.categoriesHeader);
        expect(await commonFunctions.getElementText(statusCategoriesPage.headerSubText)).toEqual(categoriesData.selectCategoryText);
    })
    it("Verify a search field is available on category tab to search for any category", async () => {
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.categoryTab)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.searchCategory)).toBeTrue();
    })
    it("Verify the data at the right side panel when user has just landed on the page.", async () => {
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.noDataImage)).toBeTrue();
        expect(await commonFunctions.getElementText(statusCategoriesPage.noDataMessage)).toEqual(categoriesData.noDataMessage);
    })
    it("Verify the scenario that user must see all categories when no search criteria is entered", async () => {
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.totalCategories)).toBeGreaterThanOrEqual(categoriesData.categoriesCount);
    })
    it("Verify the matching search results when user types into the search field for status category", async () => {
        await commonFunctions.enterValueInElement(statusCategoriesPage.searchCategory, categoriesData.searchCategory);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.totalCategories)).toBeGreaterThanOrEqual(4);
    })
    it("Verify the status tabs at the right side panel when user has selected a category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.firstCategoryOrStatus);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.unassignedTab)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.assignedTab)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.allTab)).toBeTrue();
    })
    it("Verify the presence of search field at the right side panel when user has selected a category", async () => {
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.searchStatuses)).toBeTrue();
    })
    it("Verify the unassigned tab when atleast one status has not been assigned to the selected category", async () => {
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.countOnUnassignedTab)).toBeGreaterThanOrEqual(1);
    })
    it("Verify message on assigning without selecting any of the status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.assignedSelectedStatusesButton);
        expect(await commonFunctions.getElementText(statusCategoriesPage.validationMessage)).toEqual(categoriesData.assignValidation);
    })
    it("Verify the unassigned tab when all statuses have been assigned to the selected category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.selectAllCheckbox);
        var allCount = await statusCategoriesPage.getCountFromViewSelectedInfo();
        expect(await commonFunctions.getElementText(statusCategoriesPage.viewSelected)).toEqual("View Selected (" + allCount + ")");
        await commonFunctions.clickOnElement(statusCategoriesPage.assignedSelectedStatusesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual("Success\n" + allCount + " Statuses were assigned to the Category");
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignedTab);
        expect(await commonFunctions.getElementText(statusCategoriesPage.noDataMessage)).toEqual(categoriesData.allStatusesAssignedNoDataMessage);
    })
    it("Verify the assigned tab when atleast one status has been assigned to the selected category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.assignedTab);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.statusesOrCategoriesListed)).toBeGreaterThanOrEqual(1);
    })
    it("Verify message on unassigning without selecting any of the status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignSelectedButton);
        expect(await commonFunctions.getElementText(statusCategoriesPage.unassignValidationMessage)).toEqual(categoriesData.unassignValidation);
    })
    it("Verify the assigned tab when none of the statuses have been assigned to the selected category", async () => {
            await commonFunctions.clickOnElement(statusCategoriesPage.searchCategoryClear);
            await commonFunctions.clickOnElement($("(//app-data-container[@selectionview='vertical']//li//span)[" + await statusCategoriesPage.selectCategoryWhichHasNoAssignedStatus() + "]"));
            await commonFunctions.clickOnElement(statusCategoriesPage.assignedTab);
            expect(await commonFunctions.getElementText(statusCategoriesPage.noDataMessage)).toEqual(categoriesData.noStatusesAssignedYetMessage);
    })
    it("Verify that user should be able to select checkboxes corresponding to one or multiple available statuses for a category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignedTab);
        await commonFunctions.clickOnElement(statusCategoriesPage.firstStatusOrCategory);
        await commonFunctions.clickOnElement(statusCategoriesPage.anotherSecondStatus);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.activeSelectAllCheckbox)).toBeTrue();
    })
    it("Verify the view selected hyperlink functionality when user selects different statuses and clicks on the respective hyperlink", async () => {
        expect(await commonFunctions.getElementText(statusCategoriesPage.viewSelected)).toEqual(categoriesData.viewSelected);
        await commonFunctions.clickOnElement(statusCategoriesPage.viewSelected);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.statusesOrCategoriesListed)).toEqual(2);
    })
    it("Verify the view all hyperlink functionality when user clicks on the respective hyperlink", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.viewAllHyperlink);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.statusesOrCategoriesListed)).toBeGreaterThanOrEqual(2);
    })
    it("Verify the assigned status count under a category should match with the corresponding count under assigned tab for that category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.firstCategoryOrStatus);
        await commonFunctions.clickOnElement(statusCategoriesPage.assignedTab);
        await commonFunctions.clickOnElement(statusCategoriesPage.selectAllCheckbox);
        expect(await statusCategoriesPage.getCountFromViewSelectedInfo()).toEqual(await statusCategoriesPage.assignedStatusOrCategoryCount());
    })
    it("Verify that user is able to unassign selected status(s) from a category by clicking on 'Unassign Selected Statuses'", async () => {
        var allCount = await statusCategoriesPage.getCountFromViewSelectedInfo();
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignSelectedButton)
        expect(await commonFunctions.getElementText(statusCategoriesPage.confirmationHeader)).toEqual(categoriesData.unassignConfirmationHeader);
        expect(await commonFunctions.getElementText(statusCategoriesPage.confirmationText)).toEqual(categoriesData.unassignConfirmMessage);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.confirmationCancelButton)).toBeTrue();
        await commonFunctions.clickOnElement(statusCategoriesPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual("Success\n" + allCount + " Statuses were unassigned from the Category");
    })
    it("Verify the All status tab should list all the assigned and unassigned statuses for a category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignedTab);
        await commonFunctions.clickOnElement(statusCategoriesPage.firstStatusAfterAssignment);
        await commonFunctions.clickOnElement(statusCategoriesPage.secondStatusAfterAssignment);
        await commonFunctions.clickOnElement(statusCategoriesPage.assignedSelectedStatusesButton);
        await commonFunctions.waitForToasterMessageToDisappear();
        await commonFunctions.clickOnElement(statusCategoriesPage.allTab);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.assignedLabelInAllTab)).toBeTrue();
        expect(await commonFunctions.isElementExisting(statusCategoriesPage.unassignedStatusInAllTab)).toBeFalse();
    })
    it("Verify the search functionality on the All status tab for a category", async () => {
        await commonFunctions.enterValueInElement(statusCategoriesPage.searchStatuses, categoriesData.searchStatus);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.searchResultsOnSearchStatus)).toEqual(categoriesData.searchCount);
    })
    it("Verify the select all checkbox on the All tab only selects the unassigned statuses", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.selectAllCheckbox);
        expect(await commonFunctions.getElementText(statusCategoriesPage.viewSelected)).toEqual(categoriesData.viewSelectedUnassignedInAllTab);
    })
    it("Verify the 'Remove' and 'cancel' button functionality on All tab to unassign status from a category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.selectAllCheckbox);
        await commonFunctions.clickOnElement(statusCategoriesPage.searchCategoryClear);
        await commonFunctions.clickOnElement(statusCategoriesPage.removeAssignedButton);
        expect(await commonFunctions.getElementText(statusCategoriesPage.confirmationText)).toEqual(categoriesData.unassignConfirmMessage);
        await commonFunctions.clickOnElement(statusCategoriesPage.confirmationCancelButton);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.removeAssignedButton)).toBeTrue();
        await commonFunctions.clickOnElement(statusCategoriesPage.removeAssignedButton);
        await commonFunctions.clickOnElement(statusCategoriesPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(categoriesData.removedStatusToasterMessage);
    })
})
describe("Test cases of status categories", function () {
    it("Verify the navigation of user to Status tab after clicking on Status tab", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.statusTab);
        expect(await commonFunctions.getElementText(statusCategoriesPage.header)).toEqual(categoriesData.statusLabel);
    })
    it("Validate UI for the status categories > categories tab", async () => {
        expect(await commonFunctions.getElementText(statusCategoriesPage.headerLabel)).toEqual(categoriesData.statusHeaderLabel);
        expect(await commonFunctions.getElementText(statusCategoriesPage.header)).toEqual(categoriesData.statusLabel);
        expect(await commonFunctions.getElementText(statusCategoriesPage.headerSubText)).toEqual(categoriesData.selectStatusText);
    })
    it("Verify a search field is available on status tab to search for any status.", async () => {
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.searchStatus)).toBeTrue();
    })
    it("Verify the data at the right side panel when user has just landed on the status tab", async () => {
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.noDataImage)).toBeTrue();
        expect(await commonFunctions.getElementText(statusCategoriesPage.noDataMessage)).toEqual(categoriesData.noDataMessageForStatusTab);
    })
    it("Verify the scenario that user must see all statuses when no search criteria is entered", async () => {
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.totalCategories)).toBeGreaterThanOrEqual(categoriesData.statusesCount);
    })
    it("Verify the matching search results when user types into the search field of available statuses", async () => {
        await commonFunctions.enterValueInElement(statusCategoriesPage.searchStatus, categoriesData.searchStatuses);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.totalCategories)).toBeGreaterThanOrEqual(7);
    })
    it("Verify the different tabs at the right side panel when user has selected a status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.searchCategoryClear);
        await commonFunctions.clickOnElement(statusCategoriesPage.firstCategoryOrStatus);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.unassignedTab)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.assignedTab)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.allTab)).toBeTrue();
    })
    it("Verify the presence of search field at the right side panel when user has selected a status", async () => {
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.searchCategories)).toBeTrue();
    })
    it("Verify the unassigned tab when atleast one category has not been assigned to the selected status", async () => {
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.categoryResults)).toBeGreaterThanOrEqual(1);
    })
    it("Validate message on assigning without selecting any of the category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.assignCategoryToStatusButton);
        expect(await commonFunctions.getElementText(statusCategoriesPage.validationMessage)).toEqual(categoriesData.assignCategoryValidationMessage);
    })
    it("Verify the assigned tab when atleast one category has been assigned to the selected status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.assignedTab);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.categoryResults)).toBeGreaterThanOrEqual(1);
    })
    it("Validate message on unassigning without selecting any of the category", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignSelectedCategoriesButton);
        expect(await commonFunctions.getElementText(statusCategoriesPage.validationMessage)).toEqual(categoriesData.unassignCategoryValidationMessage);
    })
    it("Verify that user should be able to select checkboxes corresponding to one or multiple available categories for a status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.firstStatusOrCategory);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.activeSelectAllCheckbox)).toBeTrue();
    })
    it("Verify the view selected hyperlink functionality when user selects different reporting categories and clicks on the respective hyperlink", async () => {
        expect(await commonFunctions.getElementText(statusCategoriesPage.viewSelected)).toEqual(categoriesData.viewSelectedOne);
        await commonFunctions.clickOnElement(statusCategoriesPage.viewSelected);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.categoryResults)).toEqual(1);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.viewAllHyperlink));
    })
    it("Verify the view all hyperlink functionality when user clicks on the respective hyperlink after selecting the reporting categories", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.viewAllHyperlink);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.categoryResults)).toEqual(await statusCategoriesPage.assignedStatusOrCategoryCount());
    })
    it("Verify the assigned category count under a status should match with the corresponding count under assigned tab for that status", async () => {
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.categoryResults)).toEqual(await statusCategoriesPage.assignedStatusOrCategoryCount());
    })
    it("Verify that user is able to assign selected categories to a status by clicking on 'Assign Selected Categories", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignedTab);
        await commonFunctions.clickOnElement(statusCategoriesPage.firstStatusOrCategory);
        await commonFunctions.clickOnElement(statusCategoriesPage.assignCategoryToStatusButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(categoriesData.categoryAssignedToStatusSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("Verify confirmation popup while unassigning selected categories from status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.firstStatusOrCategory);
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignSelectedCategoriesButton);
        expect(await commonFunctions.getElementText(statusCategoriesPage.confirmationHeader)).toEqual(categoriesData.unassignConfirmationHeader);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.confirmationCancelButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.confirmationYesButton)).toBeTrue();
    })
    it("Verify that user is able to 'Cancel' and 'Unassign' selected categories from status by clicking on 'Unassign Selected Categories'", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.confirmationCancelButton);
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignSelectedCategoriesButton);
        await commonFunctions.clickOnElement(statusCategoriesPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(categoriesData.categoryUnassignedFromStatusSuccessToaster);
    })
    it("Verify the All category tab should list all the assigned and unassigned categories for a status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.allTab);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.assignedLabelInAllTab)).toBeTrue();
        expect(await commonFunctions.isElementExisting(statusCategoriesPage.unassignedCategoryInAllTab)).toBeFalse();
    })
    it("Verify the search functionality on the All category tab for a status", async () => {
        await commonFunctions.enterValueInElement(statusCategoriesPage.searchCategories, categoriesData.searchCategories);
        expect(await commonFunctions.getElementsCount(statusCategoriesPage.categoryResults)).toEqual(categoriesData.searchCount);
    })
    it("Verify the 'Remove' button functionality on All tab to unassign category from a status", async () => {
        await commonFunctions.clickOnElement(statusCategoriesPage.searchCategoryClear);
        await commonFunctions.clickOnElement(statusCategoriesPage.removeAssignedButton);
        await commonFunctions.clickOnElement(statusCategoriesPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(categoriesData.categoryUnassignedFromStatusSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("Verify the mapping of assigned category to a status under status tab and the same status to assigned category under category tab", async () => {
        await commonFunctions.enterValueInElement(statusCategoriesPage.searchStatuses, categoriesData.searchStatusValue);
        await commonFunctions.clickOnElement(statusCategoriesPage.firstCategoryOrStatus);
        await commonFunctions.clickOnElement(statusCategoriesPage.searchedCategoryLabel);
        await commonFunctions.clickOnElement(statusCategoriesPage.assignCategoryToStatusButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(categoriesData.categoryAssignedToStatusSuccessToaster);
        await commonFunctions.clickOnElement(statusCategoriesPage.categoryTab);
        await commonFunctions.enterValueInElement(statusCategoriesPage.searchCategory, categoriesData.searchCategoryValue);
        await commonFunctions.clickOnElement(statusCategoriesPage.firstCategoryOrStatus);
        await commonFunctions.clickOnElement(statusCategoriesPage.assignedTab);
        expect(await commonFunctions.isElementDisplayed(statusCategoriesPage.appealUpheldStatus)).toBeTrue();
        await commonFunctions.clickOnElement(statusCategoriesPage.searchedCategoryLabel);
        await commonFunctions.clickOnElement(statusCategoriesPage.unassignSelectedButton);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
})