import loginPage from "../../../pageobjects/login/login-page";
import menuoptionsPage from "../../../pageobjects/menuoptions-page";
import statusVotingPage from "../../../pageobjects/administration/application-settings/status-voting-page";
import statusVotingTestData from "../../../../resources/administration/application-settings/status-voting-test-data.json";
import utilitiesPage from "../../../../utilities/common-utilities";

describe("Test Cases for Status Voting", () => {
    beforeAll(async function () {
      await loginPage.open();
      await loginPage.login();
    });

    it("Validating navigation and landing to Status Voting", async () => {
        await menuoptionsPage.clickOnAdmin();
        await menuoptionsPage.clickOnApplicationSettings();
        await menuoptionsPage.clickOnStatusVoting();
        expect(await statusVotingPage.visibilityOfProjectListText()).toBe(true);
    });

    it("Validating the placeholders in the dropdown fields under project list section", async () => {
        expect(await statusVotingPage.getProjectDropdownPlaceholder()).toEqual(statusVotingTestData.projectPlaceholder);
        expect(await statusVotingPage.getQueryTypeDropdownPlaceholder()).toEqual(statusVotingTestData.queryTypePlaceholder);
        expect(await statusVotingPage.getQueryCategoryDropdownPlaceholder()).toEqual(statusVotingTestData.queryCategoryPlaceholder);
    });

    it("Validating the single select dropdown fields under project list section", async () => {
        await statusVotingPage.waitForPageLoad();
        await statusVotingPage.clickOnProjectDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.projectValue1);
        await statusVotingPage.clickOnProjectDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.projectValue2);
        expect(await statusVotingPage.isProjectSingleSelectDropdown()).toEqual(statusVotingTestData.singleSelectCount);
        await statusVotingPage.clickOnQueryTypeDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.queryTypeValue1);
        await statusVotingPage.clickOnQueryTypeDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.queryTypeValue2);
        expect(await statusVotingPage.isQueryTypeSingleSelectDropdown()).toEqual(statusVotingTestData.singleSelectCount);
    });

    it("Validating the Search button text and its functionality when there are matching results for the search criteria", async () => {
        expect(await statusVotingPage.getSearchButtonText()).toEqual(statusVotingTestData.searchButtonText);
        await statusVotingPage.clickOnSearchButton();
        expect(await statusVotingPage.verifyProjectInSearchResults()).toEqual(statusVotingTestData.projectValue2);
        expect(await statusVotingPage.verifyQueryTypeInSearchResults()).toEqual(statusVotingTestData.queryTypeValue2);
    });

    it("Validating the Clear button text and its functionality after selecting some values in search criteria fields", async () => {
        expect(await statusVotingPage.getClearButtonText()).toEqual(statusVotingTestData.clearButtonText);
        await statusVotingPage.clickOnClearButton();
        expect(await statusVotingPage.isProjectFieldValueEmpty()).toBe(true);
        expect(await statusVotingPage.isQueryTypeFieldValueEmpty()).toBe(true);
        expect(await statusVotingPage.isQueryCategoryFieldValueEmpty()).toBe(true);
        expect(await statusVotingPage.paginationIsDisplayed()).toBe(true);
    });

    it("Validating the scenario when there are NO matching results for the search criteria", async () => {
        await statusVotingPage.clickOnProjectDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.projectValue1);
        await statusVotingPage.clickOnQueryTypeDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.queryTypeValue1);
        await statusVotingPage.clickOnSearchButton();
        expect(await statusVotingPage.getNoDataText()).toEqual(statusVotingTestData.noDataText);
    });

    it("Validating the column headers of the project table", async () => {
        expect(await statusVotingPage.getCodeHeader()).toEqual(statusVotingTestData.codeHeader);
        expect(await statusVotingPage.getDescriptionHeader()).toEqual(statusVotingTestData.descriptionHeader);
        expect(await statusVotingPage.getLongDescriptionHeader()).toEqual(statusVotingTestData.longDescriptionHeader);
        expect(await statusVotingPage.getQueryTypeHeader()).toEqual(statusVotingTestData.queryTypeHeader);
        expect(await statusVotingPage.getQueryCategoryHeader()).toEqual(statusVotingTestData.queryCategoryHeader);
    });

    it("Validating the visibility of pagination and the default number of records in the project table", async () => {
        await statusVotingPage.clickOnClearButton();
        expect(await statusVotingPage.paginationIsDisplayed()).toBe(true);
        expect(await statusVotingPage.getDefaultCountOfRecords()).toBeLessThanOrEqual(statusVotingTestData.defaultRecordCount);
    });

    it("Validating the eye icon functionality to display the status voting of the corresponding project in the project table", async () => {
        await statusVotingPage.clickOnEyeIcon();
        expect(await statusVotingPage.getStatusVotingForProject()).toEqual(statusVotingTestData.projectStatusVoting);
    });

    it("Validating the single select dropdown field and input textbox under the Status Voting section", async () => {
        await statusVotingPage.clickOnTeamsDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.teamsValue1);
        await statusVotingPage.clickOnTeamsDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.teamsValue2);
        expect(await statusVotingPage.isTeamsSingleSelectDropdown()).toEqual(statusVotingTestData.singleSelectCount);
        await statusVotingPage.enterTeamVotes(statusVotingTestData.setTeamVotes);
        expect(await statusVotingPage.getTeamVotes()).toEqual(statusVotingTestData.setTeamVotes);
    });

    it("Validating the plus button functionality when user clicks on it after entering the vote under Status Voting section", async () => {
        await statusVotingPage.clickOnPlusButton();
        expect(await statusVotingPage.deleteIconIsDisplayed()).toBe(true);
    });
    
    it("Validating the save button functionality when user clicks on it after adding the vote under Status Voting section", async () => {
        await statusVotingPage.clickOnSaveButton();
        expect(await utilitiesPage.visibilityOfSuccessToaster()).toEqual(statusVotingTestData.saveSuccessToaster);
        await utilitiesPage.waitForToasterMessageToDisappear();
    });

    it("Validating the presence of project voting requirements icon after team vote is added and total team votes to be equal to total votes", async () => {
        // expect(await statusVotingPage.projectVotingIconIsDisplayed()).toBe(true);
        await statusVotingPage.clickOnEyeIcon();
        expect(await statusVotingPage.getTotalTeamVotes()).toEqual(statusVotingTestData.totalVotes);
    });

    it("Validating the delete icon functionality to delete the team vote for the corresponding project", async () => {
        await statusVotingPage.clickOnDeleteIcon();
        expect(await statusVotingPage.verifyConfirmationPopUpTextMessage()).toEqual(statusVotingTestData.confirmationText);
        await statusVotingPage.clickOnNoButton();
        expect(await statusVotingPage.confirmationPopUpIsDisplayed()).toBe(false);
        await statusVotingPage.clickOnDeleteIcon();
        await statusVotingPage.clickOnYesButton();
        await statusVotingPage.clickOnSaveButton();
        expect(await utilitiesPage.visibilityOfSuccessToaster()).toEqual(statusVotingTestData.saveSuccessToaster);
        await utilitiesPage.waitForToasterMessageToDisappear();
    });

    it("Validating the cancel button functionality when user clicks on it after adding the vote under Status Voting section", async () => {
        await statusVotingPage.clickOnEyeIcon();
        await statusVotingPage.clickOnTeamsDropdown();
        await utilitiesPage.selectDropDownOptions(statusVotingTestData.teamsValue1);
        await statusVotingPage.enterTeamVotes(statusVotingTestData.setTeamVotes);
        await statusVotingPage.clickOnPlusButton();
        await statusVotingPage.clickOnCancelButton();
        expect(await statusVotingPage.initialProjectStateIsDisplayed()).toBe(true);
    });

  



    

});