import loginPage from "../../../../pageobjects/login/login-page";
import commonUtility from "../../../../../utilities/common-utilities";
import menuOptionsPage from "../../../../pageobjects/menuoptions-page";
import teamsPage from "../../../../pageobjects/administration/inventory-management/inventory-assignments-teams-page";
import teamsData from "../../../../../resources/administration/inventory-management/inventory-assignments-teams-test-data.json";

describe("Validating test cases related to Teams assignments", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        await commonUtility.clickOnElement(menuOptionsPage.administration);
        await commonUtility.clickOnElement(menuOptionsPage.inventoryManagement);
        await commonUtility.clickOnElement(menuOptionsPage.assignments);
    })
    it("Validate navigate to inventory assignments", async () => {
        expect(await commonUtility.getElementText(teamsPage.assignmentsHeader)).toEqual(teamsData.header);
    })
    it("Validate UI of teams landing page", async () => {
        expect(await commonUtility.isElementDisplayed(teamsPage.teamTab)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.manualTab)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.createTeamAssignmentButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.searchField)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.pageSize)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.pageNavigation)).toBeTrue();
        expect(await commonUtility.isElementEnabled(teamsPage.createTeamAssignmentButton)).toBeTrue();
        expect(await commonUtility.isElementEnabled(teamsPage.searchField)).toBeTrue();
    })
    it("Validate columns of the teams listing table", async () => {
        expect(await commonUtility.getMultiElementTextOneByOne(teamsPage.teamsListingHeaders)).toEqual(teamsData.tableHeaders);
    })
    it("Validate default sorting on name column and sorting on the same", async () => {
        //Default and sorting on Name column
        expect(await commonUtility.getMultiElementTextOneByOne(teamsPage.nameColumnData)).toEqual(await commonUtility.getMultiElementDataAndSort(teamsPage.nameColumnData));
        await commonUtility.clickOnElement(teamsPage.nameColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        expect(await commonUtility.getMultiElementTextOneByOne(teamsPage.nameColumnData) == (await commonUtility.getMultiElementDataAndSort(teamsPage.nameColumnData))).toBeTrue;
    })
    it("Validate validation message on create team assignments and back button functionality", async () => {
        await commonUtility.clickOnElement(teamsPage.createTeamAssignmentButton);
        await commonUtility.clickOnElement(teamsPage.saveButton);
        expect(await commonUtility.getElementText(teamsPage.inventoryNameValidationMessage)).toEqual(teamsData.inventoryNameValidation);
        await commonUtility.clickOnElement(teamsPage.backButton);
        expect(await commonUtility.getElementText(teamsPage.assignmentsHeader)).toEqual(teamsData.header);
    })
    it("Validate create new team assignment", async () => {
        await commonUtility.clickOnElement(teamsPage.createTeamAssignmentButton);
        await commonUtility.enterValueInElement(teamsPage.inventoryNameField, teamsData.inventoryName);
        await commonUtility.enterValueInElement(teamsPage.descriptionField, teamsData.description);
        await commonUtility.clickOnElement(teamsPage.saveButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(teamsData.inventoryCreatedToasterMessage);
    })
    it("Validate more tabs populating post inventory creation", async () => {
        expect(await commonUtility.isElementDisplayed(teamsPage.teamsTab)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.rulesTab)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.historyTab)).toBeTrue();
    })
    describe("Validate teams tab for the newly created inventory", function () {
        it("Validate navigation and UI for teams tab", async () => {
            await commonUtility.clickOnElement(teamsPage.teamsTab);
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
            expect(await commonUtility.isElementDisplayed(teamsPage.availableTeamsHeading)).toBeTrue();
            expect(await commonUtility.getElementText(teamsPage.availableTeamsHeading)).toEqual(teamsData.availableTeamsHeader);
            expect(await commonUtility.getElementText(teamsPage.availableTeamsSubHeading)).toEqual(teamsData.availableTeamsSubHeading);
            expect(await commonUtility.isElementDisplayed(teamsPage.createNewTeamButton)).toBeTrue();
            expect(await commonUtility.isElementDisplayed(teamsPage.backButtonOnTeamsTab)).toBeTrue();
            expect(await commonUtility.getElementText(teamsPage.noTeamsDataMessage)).toEqual(teamsData.noTeamAssignedMessage);
        })
        it("Validate available teams listing headers", async () => {
            expect(await commonUtility.getMultiElementTextOneByOne(teamsPage.availableTeamsListingHeaders)).toEqual(teamsData.availableTeamsTableHeaders);
        })
        it("Validate teams search in available teams", async () => {
            var firstTeam = await commonUtility.getElementText(teamsPage.firstRowAvailableTeamName);
            await commonUtility.enterValueInElement(teamsPage.teamsSearchFieldInAvailableTeams, firstTeam);
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
            if (await commonUtility.isElementDisplayed(teamsPage.firstRowAvailableTeamName) == true) {
                expect(await commonUtility.getElementText(teamsPage.firstRowAvailableTeamName)).toEqual(firstTeam);
            } else {
                expect(await commonUtility.getElementText(teamsPage.noTeamsDataMessage)).toEqual(teamsData.availableTeamsNoDataMessage);
            }
            await teamsPage.teamsSearchFieldInAvailableTeams.clearValue();
        })
        it("Validate sorting on available teams listing columns", async () => {
            for (let i = 2; i >= await commonUtility.getElementsCount(teamsPage.availableTeamsListingHeaders); i--) {
                //Descending order sort validation
                await teamsPage.firstSortOnColumn(i);
                await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
                await browser.pause(2000);
                var sortedDataFromFunction = await commonUtility.getMultiElementDataAndSort($$("//app-inventory-assignment-teams-tab//tbody/tr//td[" + i + "]"));
                var sortedDataBySystem = await commonUtility.getMultiElementTextOneByOne($$("//app-inventory-assignment-teams-tab//tbody/tr//td[" + i + "]"));
                expect(sortedDataFromFunction).toEqual(sortedDataBySystem);

                //Ascending order sort validation
                await commonUtility.clickOnElement(teamsPage.highLightedColumnName);
                await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
                await browser.pause(2000);
                var sortedDataFromFunction = await commonUtility.getMultiElementDataAndSort($$("//app-inventory-assignment-teams-tab//tbody/tr//td[" + i + "]"));
                var sortedDataBySystem = await commonUtility.getMultiElementTextOneByOne($$("//app-inventory-assignment-teams-tab//tbody/tr//td[" + i + "]"));
                expect(sortedDataFromFunction).toEqual(sortedDataBySystem);
            }
        })
        it("Validate pagination and page size functionality in available teams", async () => {
            expect(await commonUtility.verifyPagination(teamsPage.totalRowCountOfAvailableTeams)).toBeLessThanOrEqual(teamsData.rowCount);
            await commonUtility.enterValueInPageSize(teamsPage.pageSizeInputField, await teamsPage.recordCount(teamsPage.totalTeamCount));
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
            expect(await commonUtility.getElementsCount(teamsPage.totalRowCountOfAvailableTeams)).toEqual(await teamsPage.recordCount(teamsPage.totalTeamCount));
        })
        it("Validate search in the assigned teams", async () => {
            await teamsPage.assignTeamsOneByOne();
            expect(await commonUtility.isElementDisplayed(teamsPage.firstRowAssignedTeamName))
            var firstTeam = await commonUtility.getElementText(teamsPage.firstRowAssignedTeamName);
            await commonUtility.enterValueInElement(teamsPage.teamsSearchFieldInAssignedTeams, firstTeam);
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAssignedTeams);
            expect(await commonUtility.getElementText(teamsPage.firstRowAssignedTeamName)).toEqual(firstTeam);
            await teamsPage.teamsSearchFieldInAssignedTeams.clearValue();
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAssignedTeams);
        })
        it("Validate sorting on assigned teams column in assigned teams section", async () => {
            await commonUtility.clickOnElement(teamsPage.assignedTeamsColumn);
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAssignedTeams);
            expect(await commonUtility.getMultiElementTextOneByOne(teamsPage.assignedTeamsColumnData)).toEqual(await commonUtility.getMultiElementDataAndSort(teamsPage.assignedTeamsColumnData));

            await browser.pause(3000);
            await commonUtility.clickOnElement(teamsPage.assignedTeamsColumn);
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAssignedTeams);
            expect(await commonUtility.getMultiElementTextOneByOne(teamsPage.assignedTeamsColumnData)).toEqual(await commonUtility.getMultiElementDataAndSort(teamsPage.assignedTeamsColumnData));
        })
        it("Validate pagination and page size functionality in assigned teams", async () => {
            await commonUtility.enterValueInPageSize(teamsPage.pageSizeInputForAssignedSection, await teamsPage.recordCount(teamsPage.totalTeamCountInAssigned));
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
            expect(await commonUtility.getElementsCount(teamsPage.assignedTeamsColumnData)).toEqual(await teamsPage.recordCount(teamsPage.totalTeamCountInAssigned));
            await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAssignedTeams);
        })
        describe("Validate new team functions", function () {
            it("Validate create new team modal", async () => {
                await commonUtility.clickOnElement(teamsPage.createNewTeamButton);
                await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderOnCreateTeamModal);
                expect(await commonUtility.isElementDisplayed(teamsPage.teamNameLabel)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.teamNameField)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.availableUsers)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.selectedUsers)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.usersAssociatedInOtherTeams)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.saveTeamButton)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.cancelButtonOnCreateTeam)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.searchUserFieldInAvailableUsers)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.noDataImage)).toBeTrue();
                expect(await commonUtility.getElementText(teamsPage.subTitleOfNoSelectedUsers)).toEqual(teamsData.noUserSelectedForTeam);
                expect(await commonUtility.getElementText(teamsPage.assignedTeamsSubHeading)).toEqual(teamsData.assignedTeamsSubHeading);
                expect(await commonUtility.isElementDisplayed(teamsPage.searchUserFieldInUsersAssociatedInOtherTeams)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.addAllButton)).toBeTrue();
            })
            it("Validate team name validation by creating it without name", async () => {
                await commonUtility.clickOnElement(teamsPage.saveTeamButton);
                await teamsPage.teamNameValidationMessage.waitForDisplayed();
                expect(await commonUtility.isElementDisplayed(teamsPage.teamNameValidationMessage)).toBeTrue();
                expect(await commonUtility.getElementText(teamsPage.teamNameValidationMessage)).toEqual(teamsData.teamNameValidation);
            })
            it("Validate add all users to the team", async () => {
                await commonUtility.clickOnElement(teamsPage.addAllButton);
                await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
                expect(await commonUtility.isElementDisplayed(teamsPage.searchUserFieldInSelectedUsers)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.noDataImgForAvailableUsers)).toBeTrue();
            })
            it("Validate remove all confirmation modal", async () => {
                await commonUtility.clickOnElement(teamsPage.removeAllButton);
                expect(await commonUtility.getElementText(teamsPage.removeAllConfirmationModalMessage)).toEqual(teamsData.removeAllConfirmation);
                expect(await commonUtility.isElementDisplayed(teamsPage.removeAllYesButton)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.removeAllCancelButton)).toBeTrue();
            })
            it("Validate remove all selected users from the team", async () => {
                await commonUtility.clickOnElement(teamsPage.removeAllYesButton);
                await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAvailableTeams);
                expect(await commonUtility.isElementDisplayed(teamsPage.noDataImgForSelectedUsers)).toBeTrue();
            })
            it("Validate creating new team in teams tab", async () => {
                await teamsPage.removeUserAndAddInOtherTeam()
                await commonUtility.enterValueInElement(teamsPage.teamNameField, teamsData.teamName);
                await commonUtility.clickOnElement(teamsPage.createNewTeamSaveButton);
                expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(teamsData.teamCreatedSuccess);
            })
            it("Validate Search for the created team and assign by clicking add", async () => {
                await teamsPage.assignTeamToTheInventory();
                await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loaderForAssignedTeams);
                expect(await commonUtility.getMultiElementTextOneByOne(teamsPage.assignedTeamsListingHeaders)).toEqual(teamsData.assignedTeamsTableHeaders);
                expect(await commonUtility.isElementDisplayed(teamsPage.pageSizeInAssignedTeams)).toBeTrue();
                expect(await commonUtility.isElementDisplayed(teamsPage.pageNavigationInAssignedTeams)).toBeTrue();
            })
        })
    })
    it("Search for the inventory just created", async () => {
        await commonUtility.clickOnElement(teamsPage.backButtonOnTeamsTab);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        await commonUtility.enterValueInElement(teamsPage.searchField, teamsData.inventoryName);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        expect(await commonUtility.getElementText(teamsPage.firstInventoryName)).toEqual(teamsData.inventoryName);
    })
    it("Validate delete inventory popup", async () => {
        await commonUtility.clickOnElement(teamsPage.firstRowDeleteIcon);
        expect(await commonUtility.getElementText(teamsPage.deleteInventoryConfirmation)).toEqual("Are you sure you want to delete assignment: " + teamsData.inventoryName + "?");
        expect(await commonUtility.isElementDisplayed(teamsPage.cancelButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(teamsPage.deleteButton)).toBeTrue;
    })
    it("Deleting recently created team inventory", async () => {
        await commonUtility.clickOnElement(teamsPage.deleteButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(teamsData.deleteInventoryToasterMessage);
    })
    it("Validate user selected in the team", async () => {
        await commonUtility.clickOnElement(menuOptionsPage.administration);
        await commonUtility.clickOnElement(menuOptionsPage.security);
        await commonUtility.clickOnElement(menuOptionsPage.teams);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        await teamsPage.viewTeamDetails();
        expect(await commonUtility.getElementText(teamsPage.selectedUserInTeam)).toEqual(teamsData.username);
    })
    it("Delete created team from Admin>Security>Teams", async () => {
        await commonUtility.clickOnElement(teamsPage.backButtonOnTeamDetails);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        await teamsPage.deleteTeam();
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(teamsData.deleteTeamToasterMessage);
    })
})