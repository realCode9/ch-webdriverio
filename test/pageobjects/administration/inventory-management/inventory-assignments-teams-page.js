import teamsData from "../../../../resources/administration/inventory-management/inventory-assignments-teams-test-data.json";
import commonUtility from "../../../../utilities/common-utilities";
class TeamsPage {
    get assignmentsHeader() {
        return $("//div[@class='header-txt']");
    }
    get teamTab() {
        return $("//button[normalize-space()='Team Assignments']");
    }
    get manualTab() {
        return $("//button[normalize-space()='Manual Assignments']");
    }
    get createTeamAssignmentButton() {
        return $("//button[@id='notSubmitButton']");
    }
    get searchField() {
        return $("//input[@placeholder='Search by name']");
    }
    get teamsListingHeaders() {
        return $$("//thead//tr//th//div//div[contains(text(), 'e')]");
    }
    get pageSize() {
        return $("//div[@class='page-size']");
    }
    get pageNavigation() {
        return $("//ngb-pagination[@role='navigation']");
    }
    get nameColumnData() {
        return $$("//app-inventory-assignment-list-page//tr//td[1]");
    }
    get nameColumnHeader() {
        return $("//div[contains(text(),'Name')]");
    }
    get loader() {
        return $("//img[@alt='Spinner']");
    }
    get saveButton() {
        return $("(//button[@id='notSubmitButton'])[2]");
    }
    get inventoryNameValidationMessage() {
        return $("//span[@class='error-txt']");
    }
    get backButton() {
        return $("(//button[@id='notSubmitButton'])[1]");
    }
    get inventoryNameField() {
        return $("//input[@placeholder='Enter Inventory Name']");
    }
    get descriptionField() {
        return $("//textarea[@placeholder='Enter Description']");
    }
    get teamsTab() {
        return $("//button[normalize-space()='Teams']");
    }
    get rulesTab() {
        return $("//button[normalize-space()='Rules']");
    }
    get historyTab() {
        return $("//button[normalize-space()='History']");
    }
    get firstInventoryName() {
        return $("//tbody//tr[1]//td[1]");
    }
    get firstRowDeleteIcon() {
        return $("//tbody//tr[1]//td[4]//span[@class = 'icon-delete']");
    }
    get deleteButton() {
        return $("//button[normalize-space()='Delete']");
    }
    get deleteInventoryConfirmation() {
        return $("//ngb-modal-window//div//h4[contains(text(), 'Are you')]");
    }
    get cancelButton() {
        return $("//button[normalize-space()='Cancel']");
    }
    get availableTeamsHeading() {
        return $("//div[@class='heading'][normalize-space()='Available Teams']");
    }
    get availableTeamsSubHeading() {
        return $("(//section//div//div[@class = 'sub-heading'])[1]");
    }
    get assignedTeamsSubHeading() {
        return $("(//div[@class = 'sub-heading'])[2]");
    }
    get teamsSearchFieldInAvailableTeams() {
        return $("(//input[@placeholder='Search teams by name'])[1]");
    }
    get teamsSearchFieldInAssignedTeams() {
        return $("(//input[@placeholder='Search teams by name'])[2]");
    }
    get createNewTeamButton() {
        return $("(//button[@id='notSubmitButton'])[1]");
    }
    get availableTeamsListingHeaders() {
        return $$("(//div[@class = 'p-datatable-wrapper'])[1]//tr//th[@class = 'p-element p-sortable-column ng-star-inserted']")
    }
    get assignedTeamsListingHeaders() {
        return $$("(//table[@class = 'p-datatable-table p-datatable-scrollable-table ng-star-inserted'])[2]//th//div[contains(text(), 'Assign')]");
    }
    get firstColumnInAssignedTeams() {
        return $("(//div[@class = 'list-container'])[2]//tr//th[1]");
    }
    get backButtonOnTeamsTab() {
        return $("(//button[@id='notSubmitButton'])[2]");
    }
    get loaderForAvailableTeams() {
        return $("(//img[@alt='Spinner'])[1]");
    }
    get loaderForAssignedTeams() {
        return $("(//img[@alt='Spinner'])[2]");
    }
    get firstRowAvailableTeamName() {
        return $("//tbody//tr[1]//td[1]");
    }
    get firstRowAssignedTeamName() {
        return $("(//tbody//tr[1]//td[1])[2]");
    }
    get highLightedColumnName() {
        return $("((//div[@class = 'list-container ng-star-inserted'])[1]//tr//th[@class = 'p-element p-sortable-column p-highlight ng-star-inserted'])");
    }
    get noDataImage() {
        return $("//div[@class='img']");
    }
    get noTeamsDataMessage() {
        return $("//div[@class='sub-title']");
    }
    get teamNameLabel() {
        return $("//label[@for='teamName']");
    }
    get teamNameField() {
        return $("//input[@name = 'teamName']");
    }
    get teamNameValidationMessage() {
        return $("//div[@class='error-txt ng-star-inserted']");
    }
    get availableUsers() {
        return $("//strong[normalize-space()='Available Users']");
    }
    get selectedUsers() {
        return $("//strong[normalize-space()='Selected Users']");
    }
    get usersAssociatedInOtherTeams() {
        return $("//strong[normalize-space()='Users associated in other teams']");
    }
    get saveTeamButton() {
        return $("//app-common-button[@id='saveTeam']");
    }
    get cancelButtonOnCreateTeam() {
        return $("//app-common-button[@id='cancelBtn']//button[@id='notSubmitButton']");
    }
    get loaderOnCreateTeamModal() {
        return $("(//div[@class='ng-scrollbar-view'])[3]");
    }
    get searchUserFieldInAvailableUsers() {
        return $("(//input[@placeholder='Search users by name'])[1]");
    }
    get searchUserFieldInSelectedUsers() {
        return $("(//input[@placeholder='Search users by name'])[2]");
    }
    get searchUserFieldInUsersAssociatedInOtherTeams() {
        return $("(//input[@placeholder='Search users by name'])[3]");
    }
    get subTitleOfNoSelectedUsers() {
        return $("//div[@class='sub-title']");
    }
    get addAllButton() {
        return $("//button[text() = 'Add All ']");
    }
    get removeAllButton() {
        return $("//button[text() = 'Remove All ']");
    }
    get noDataImgForSelectedUsers() {
        return $("//app-infinite-list-box[@label = 'Selected Users']//div[@class='img']");
    }
    get noDataImgForAvailableUsers() {
        return $("//app-infinite-list-box[@label = 'Available Users']//div[@class='img']");
    }
    get removeAllConfirmationModalMessage() {
        return $("//div[@class='popup-data']");
    }
    get removeAllYesButton() {
        return $("//button//div[text() = 'Yes']");
    }
    get removeAllCancelButton() {
        return $("//button//div[text() = 'Cancel']");
    }
    get userSearchBoxInOtherTeam() {
        return $("(//input[@placeholder='Search users by name'])[3]");
    }
    get noUserLabel() {
        return $("//div[normalize-space()='No Users Selected']");
    }
    get userListForOtherTeamsWithNoUserLabelInSameTeam() {
        return $("(//div[@alwayscallback='true'])[2]//span[normalize-space()='" + teamsData.email + "'][1]");
    }
    get usersSearchBoxSelectedInSameTeam() {
        return $("(//input[@placeholder='Search users by name'])[2]");
    }
    get userListForSameTeam() {
        return $("(//div[@alwayscallback='true'])[2]//span[normalize-space()='" + teamsData.email + "'][1]");
    }
    get userRemoveConfirmation() {
        return $("//div[normalize-space()='Yes']");
    }
    get usersAddButton() {
        return $("(//span[text()='Add'])[1]");
    }
    get usersSearchBox() {
        return $("(//input[@placeholder='Search users by name'])[1]");
    }
    get addCount() {
        return $("//span[normalize-space()='(1)']");
    }
    get usersList() {
        return $("(//strong[normalize-space()='" + teamsData.username + "'])[1]");
    }
    get createNewTeamSaveButton() {
        return $("//app-common-button[@id='saveTeam']//button[@id='notSubmitButton']");
    }
    get teamAddButton() {
        return $("(//div[text()=' Add '])[1]");
    }
    get searchedTeam() {
        return $("//div[contains(text(),'QA Team')]");
    }
    get teamSearchFieldInSecurityTeams() {
        return $("//input[@placeholder='Search by name and hit enter']");
    }
    get deleteTeamButton() {
        return $("//span[@id='deleteTeam']");
    }
    get teamDeleteConfirmation() {
        return $("(//div[@class = 'popup']//button[@type = 'type'])[1]");
    }
    get selectedUserInTeam() {
        return $("//app-infinite-list-box[@label='Selected Users']//span//strong");
    }
    get teamInTable() {
        return $("(//tbody//tr//td[1]//span)[1]");
    }
    get loaderOnTeamDetails() {
        return $("(//div[@class='ng-scrollbar-view'])[2]");
    }
    get backButtonOnTeamDetails() {
        return $("//app-common-button[@id='backBtn']//button[@id='notSubmitButton']");
    }
    get pageSizeInAssignedTeams() {
        return $("(//div[@class='page-size'])[2]");
    }
    get pageNavigationInAssignedTeams() {
        return $("(//ul[@class='pagination pagination-sm'])[2]");
    }
    get totalTeamCount() {
        return $("//div[@class= 'page-size']//span[contains(text(), 'of')]");
    }
    get totalTeamCountInAssigned() {
        return $("(//div[@class= 'page-size'])[2]//span[contains(text(), 'of')]");
    }
    get pageSizeInputField() {
        return $("(//input[@placeholder=' '])[1]");
    }
    get pageSizeInputForAssignedSection() {
        return $("(//input[@placeholder=' '])[2]");
    }
    get totalRowCountOfAvailableTeams() {
        return $$("(//div[@class = 'cards-sections'])[1]//tbody[@class = 'p-element p-datatable-tbody']//tr");
    }
    get noAvailableTeamsInstruction() {
        return $("//div[contains(text(), 'No teams')]");
    }
    get assignedTeamsColumn() {
        return $("(//thead[@class = 'p-datatable-thead'])[2]//tr//th//div[text() = ' Assigned Teams ']");
    }
    get assignedTeamsColumnData() {
        return $$("(//app-inventory-assignment-teams-tab//div[@class = 'p-datatable-wrapper'])[2]//tr//td[1]");
    }
    get addButtons() {
        return $$("(//div[text()=' Add '])");
    }

    //FUNCTIONS
    async firstSortOnColumn(index) {
        try {
            await $("(//div[@class = 'p-datatable-wrapper'])[1]//tr//th[@id = 'teamTable'][" + index + "]").waitForDisplayed();
            await $("(//div[@class = 'p-datatable-wrapper'])[1]//tr//th[@id = 'teamTable'][" + index + "]").click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async addUserTotheTeamAndSaveTeam() {
        try {
            await this.usersAddButton.waitForDisplayed();
            await this.usersSearchBox.setValue(teamsData.username);
            await this.addCount.waitForDisplayed();
            await this.usersList.waitForDisplayed();
            await this.usersAddButton.waitForClickable();
            await this.usersAddButton.click();
            await this.createNewTeamSaveButton.waitForClickable();
            await this.createNewTeamSaveButton.click();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async removeUserInOtherTeam() {
        try {
            let count = await $$("//span[contains(text(),'Remove')]").length;
            let clickRemoveButton = "(//span[contains(text(),'Remove')])[" + count + "]";
            await $(clickRemoveButton).waitForClickable();
            await $(clickRemoveButton).click();
            await this.userRemoveConfirmation.waitForDisplayed();
            await this.userRemoveConfirmation.click();
            await this.userRemoveConfirmation.waitForDisplayed({ reverse: true });
            await this.addUserTotheTeamAndSaveTeam();
            await commonUtility.clickOnElement(this.createNewTeamSaveButton);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async removeUserAndAddInOtherTeam() {
        await this.userSearchBoxInOtherTeam.waitForDisplayed();
        let noUserLabel = await this.noUserLabel.isDisplayed();
        if (noUserLabel == true) {
            await this.userSearchBoxInOtherTeam.setValue(teamsData.username);
            await browser.pause(3000);
            let userDisplay = await this.userListForOtherTeamsWithNoUserLabelInSameTeam.isClickable();
            if (userDisplay != true) {
                await this.addUserTotheTeamAndSaveTeam();
            }
            else {
                await this.removeUserInOtherTeam();
            }
        }
        else {
            await this.userSearchBoxInOtherTeam.setValue(teamsData.username);
            await browser.pause(3000);
            let userDisplay = await this.UserListForOtherTeams.isClickable();
            if (userDisplay != true) {
                await this.usersSearchBoxSelectedInSameTeam.setValue(teamsData.username);
                await browser.pause(3000);
                let userDisplayForSameTeam = await this.userListForSameTeam.isDisplayed();
                if (userDisplayForSameTeam != true) {
                    await this.addUserTotheTeamAndSaveTeam();
                }
                else {
                    await commonUtility.clickOnElement(this.createNewTeamSaveButton);
                }
            }
            else {
                await this.removeUserInOtherTeam();
            }
        }
    }
    async assignTeamToTheInventory() {
        try {
            await this.teamAddButton.waitForDisplayed();
            await this.teamsSearchFieldInAvailableTeams.setValue(teamsData.teamName);
            await this.searchedTeam.waitForDisplayed();
            await this.teamAddButton.waitForClickable();
            await this.teamAddButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async viewTeamDetails() {
        try {
            await this.teamSearchFieldInSecurityTeams.waitForDisplayed();
            await this.teamSearchFieldInSecurityTeams.setValue(teamsData.teamName);
            await commonUtility.waitUntilLoaderFinishedLoading(this.loader);
            await browser.pause(3000);
            await this.teamInTable.waitForClickable();
            await this.teamInTable.click();
            await commonUtility.waitUntilLoaderFinishedLoading(this.loaderOnTeamDetails);
            await this.selectedUserInTeam.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async deleteTeam() {
        try {
            await this.teamSearchFieldInSecurityTeams.waitForDisplayed();
            await commonUtility.enterValueInElement(this.teamSearchFieldInSecurityTeams, teamsData.teamName);
            await commonUtility.waitUntilLoaderFinishedLoading(this.loader);
            await browser.pause(3000);
            await this.deleteTeamButton.waitForClickable();
            await this.deleteTeamButton.click();
            await this.teamDeleteConfirmation.waitForClickable();
            await this.teamDeleteConfirmation.click();
            await commonUtility.waitUntilLoaderFinishedLoading(this.loader);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async recordCount(teamCount) {
        try {
            await teamCount.waitForDisplayed();
            let countText = await teamCount.getText();
            const count = await countText.split(" ", 2);
            var countInNumber = parseInt(count[1]);
            return countInNumber;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignTeamsOneByOne() {
        try {
            for(let i = 1;i<=3; i++){
                let clickAddButton = "(//div[text()=' Add '])[" + i + "]";
                await this.loaderForAvailableTeams.waitForDisplayed({ reverse : true });
                await browser.pause(2000);
                await $(clickAddButton).click();
                await this.loaderForAvailableTeams.waitForDisplayed({ reverse : true });
            }
        } catch (error) {
          fail("Failed due to exception " + error);
        }
      }
}
module.exports = new TeamsPage();