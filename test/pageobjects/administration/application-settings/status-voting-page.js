import Page from "../../page";

class StatusVotingPage extends Page{
    get projectListText(){
        return $("//span[text()=' Project List ']");
      }
    get selectProject(){
        return $("//app-project-dropdown/div/ng-select[@id='projects']");
    }
    get tableSection(){
        return $("(//div[@tooltipclass='project-tool-eye'])[1]");
    }
    get projectDropdownValue(){
        return $$("(//div[@class='ng-value']/span)[2]");
    }
    get selectQueryType(){
        return $("//app-code-list-dropdown/div/ng-select[@id='app-code-list-dropdown-Query-Types']");
    }
    get queryTypeDropdownValue(){
        return $$("//div[@class='codelist-dropdown']/ng-select/div/div/div[2]/span[2]");
    }
    get selectQueryCategory(){
        return $("//app-code-list-dropdown/div/ng-select[@id='app-code-list-dropdown-Query-Categories']");
    }
    get queryCategoryDropdownValue(){
        return $$("(//div[@class='codelist-dropdown']/ng-select/div/div/div[2]/span[2])[2]");
    }
    get projectPlaceholderText(){
        return $("//div[text()='Select Project']");
    }
    get queryTypePlaceholderText(){
        return $("//div[text()='Select a Query Type']");
    }
    get queryCategoryPlaceholderText(){
        return $("//div[text()='Select a Query Category']");
    }
    get searchButtonText(){
        return $("//app-common-button[@label='Search']/button/span[1]");
    }
    get clearButtonText(){
        return $("//app-common-button[@label='Clear']/button/span");
    }
    get projectFieldValue() {
        return $("//ng-select[@id='projects']/div[@class='ng-select-container ng-has-value']");
    }
    get queryTypeFieldValue() {
        return $("//ng-select[@id='app-code-list-dropdown-Query-Types']/div[@class='ng-select-container ng-has-value']");
    }
    get queryCategoryFieldValue() {
        return $("//ng-select[@id='app-code-list-dropdown-Query-Categories']/div[@class='ng-select-container ng-has-value']");
    }
    get projectInSearchResults(){
        return $("(//div[@class='line-clamp-container']/div/span)[1]");
    }
    get queryTypeInSearchResults(){
        return $("//tbody[@class='p-element p-datatable-tbody']//tr//td[4]");
    }
    get queryCategoryInSearchResults(){
        return $("//tbody[@class='p-element p-datatable-tbody']//tr//td[5]");
    }
    get pagination(){
        return $("//div[@class='page-size']/span[1]");
    }
    get noDataText(){
        return $("//div[@class='no-data-wrapper']/div");
    }
    get codeHeaderText(){
        return $("//tr[@class='sticky-header']/th[1]");
    }
    get descriptionHeaderText(){
        return $("//tr[@class='sticky-header']/th[2]");
    }
    get longDescriptionHeaderText(){
        return $("//tr[@class='sticky-header']/th[3]");
    }
    get queryTypeHeaderText(){
        return $("//tr[@class='sticky-header']/th[4]");
    }
    get queryCategoryHeaderText(){
        return $("//tr[@class='sticky-header']/th[5]");
    }
    get defaultRecordCount(){
        return $$("(//tbody[@class='ui-table-tbody'])[2]/tr");
    }
    get eyeIcon(){
        return $("(//div[@tooltipclass='project-tool-eye'])[1]");
    }
    get waitForTeamsToDisplay(){
        return $("//app-team-field-dropdown/div/label[text()='Teams']");
    }
    get statusVotingForProject(){
        return $("(//div[@class='default-border header'])[2]/span");
    }
    get selectTeams(){
        return $("(//div[@class='ng-input'])[4]/input");
    }
    get teamsDropdownValue(){
        return $$("(//div[@class='ng-value'])[1]/span[2]");
    }
    get teamVotesTextBox(){
        return $("//input[@name='teamVoteCount']");
    }
    get plusButton(){
        return $("//span[@class='icon-plus add-count-btn']");
    }
    get deleteIcon(){
        return $("(//span[@class='icon-delete'])[1]");
    }
    get saveButton(){
        return $("//button[@type='button']/span[text()='Save']");
    }
    get projectVotingIcon(){
        return $("(//span[@ngbtooltip='This project has voting requirements'])[1]");
    }
    get totalTeamVotes(){
        return $("//input[@placeholder='Team Vote Count']");
    }
    get confirmationPopUp(){
        return $("//div[@class='popup']/div[text()=' Confirmation Required ']");
    }
    get confirmationPopUpTextMessage(){
        return $("//div[@class='popup-data']");
    }
    get noButton(){
        return $("//button/div[text()='No']");
    }
    get yesButton(){
        return $("//button/div[text()='Yes']");
    }
    get cancelButton(){
        return $("//button[@type='button']/span[text()='Cancel']");
    }
    get initialProjectState(){
        return $("//div[@class='empty-box']/label[text()=' Please Select a Project ']");
    }
      
// Functions for all Status Voting sections
async visibilityOfProjectListText() {
    try {
      await this.projectListText.waitForDisplayed();
      return await this.projectListText.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async waitForPageLoad() {
    try {
      await this.tableSection.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
}
async clickOnProjectDropdown() {
    try {
        await this.selectProject.waitForClickable();
        await this.selectProject.click();
        } catch (error) {
        fail("Failed due to exception " + error);
        }
    }
async isProjectSingleSelectDropdown() {
    try {    
    let dropDownValueCount = await this.projectDropdownValue.length;
    return await dropDownValueCount;
    } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnQueryTypeDropdown() {
    try {
        await this.selectQueryType.waitForClickable();
        await this.selectQueryType.click();
        } catch (error) {
        fail("Failed due to exception " + error);
       }    
    }
async isQueryTypeSingleSelectDropdown() {
    try {    
        let dropDownValueCount = await this.queryTypeDropdownValue.length;
        return await dropDownValueCount;
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getProjectDropdownPlaceholder() {
    try {    
        await this.projectPlaceholderText.waitForDisplayed();
        return await this.projectPlaceholderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getQueryTypeDropdownPlaceholder() {
    try {    
        await this.queryTypePlaceholderText.waitForDisplayed();
        return await this.queryTypePlaceholderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getQueryCategoryDropdownPlaceholder() {
    try {    
        await this.queryCategoryPlaceholderText.waitForDisplayed();
        return await this.queryCategoryPlaceholderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getClearButtonText() {
    try {    
        await this.clearButtonText.waitForDisplayed();
        return await this.clearButtonText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnClearButton() {
    try {    
        await this.clearButtonText.waitForClickable();
        await this.clearButtonText.click();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async isProjectFieldValueEmpty() {
    try {    
        return await this.projectFieldValue.waitForExist({ reverse: true });
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async isQueryTypeFieldValueEmpty() {
    try {    
        return await this.queryTypeFieldValue.waitForExist({ reverse: true });
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async isQueryCategoryFieldValueEmpty() {
    try {    
        return await this.queryCategoryFieldValue.waitForExist({ reverse: true });
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getSearchButtonText() {
    try {    
        await this.searchButtonText.waitForDisplayed();
        return await this.searchButtonText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnSearchButton() {
    try {    
        await this.searchButtonText.waitForClickable();
        await this.searchButtonText.click();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async verifyProjectInSearchResults(){
    try {    
        await this.projectInSearchResults.waitForDisplayed();
        return await this.projectInSearchResults.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async verifyQueryTypeInSearchResults(){
    try {    
        await this.queryTypeInSearchResults.waitForDisplayed();
        return await this.queryTypeInSearchResults.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async paginationIsDisplayed(){
    try {    
        await this.pagination.waitForDisplayed();
        return await this.pagination.isDisplayed();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getNoDataText(){
    try {    
        await this.noDataText.waitForDisplayed();
        return await this.noDataText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getCodeHeader(){
    try {    
        await this.codeHeaderText.waitForDisplayed();
        return await this.codeHeaderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getDescriptionHeader(){
    try {    
        await this.descriptionHeaderText.waitForDisplayed();
        return await this.descriptionHeaderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getLongDescriptionHeader(){
    try {    
        await this.longDescriptionHeaderText.waitForDisplayed();
        return await this.longDescriptionHeaderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getQueryTypeHeader(){
    try {    
        await this.queryTypeHeaderText.waitForDisplayed();
        return await this.queryTypeHeaderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getQueryCategoryHeader(){
    try {    
        await this.queryCategoryHeaderText.waitForDisplayed();
        return await this.queryCategoryHeaderText.getText();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getDefaultCountOfRecords(){
    try {    
        let defaultCount = await this.defaultRecordCount.length;
        return await defaultCount;
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnEyeIcon(){
    try {    
        await this.eyeIcon.waitForDisplayed();
        await this.eyeIcon.click();     
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getStatusVotingForProject(){
    try {    
        await this.waitForTeamsToDisplay.waitForDisplayed();
        return await this.statusVotingForProject.getText();    
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnTeamsDropdown() {
    try {
        await this.selectTeams.waitForClickable();
        await this.selectTeams.click();
        } catch (error) {
        fail("Failed due to exception " + error);
        }
    }
async isTeamsSingleSelectDropdown() {
    try {    
    let dropDownValueCount = await this.teamsDropdownValue.length;
    return await dropDownValueCount;
    } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async enterTeamVotes(teamVotes) {
    try {    
    await this.teamVotesTextBox.clearValue();
    await this.teamVotesTextBox.setValue(teamVotes);
    } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getTeamVotes() {
    try {    
    let value = Number(await this.teamVotesTextBox.getValue());
    return value;
    } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnPlusButton(){
    try {    
        await this.plusButton.waitForDisplayed();
        await this.plusButton.click();     
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async deleteIconIsDisplayed(){
    try {    
        await this.deleteIcon.waitForDisplayed();
        return await this.deleteIcon.isDisplayed();     
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnSaveButton(){
    try {    
        await this.saveButton.waitForDisplayed();
        await this.saveButton.click();     
        } catch (error) {
        fail("Failed due to exception " + error);
    }   
}
async projectVotingIconIsDisplayed(){
    try {    
        await this.projectVotingIcon.waitForDisplayed();
        await this.projectVotingIcon.moveTo();
        return await this.projectVotingIcon.isDisplayed();     
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async getTotalTeamVotes(){
    try {    
        let totalVote = Number(await this.totalTeamVotes.getValue());
        return totalVote;     
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnDeleteIcon(){
    try {    
        await this.deleteIcon.waitForDisplayed();
        await this.deleteIcon.click();   
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async verifyConfirmationPopUpTextMessage(){
    try {       
        await this.confirmationPopUp.waitForDisplayed();
        return await this.confirmationPopUpTextMessage.getText()
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnNoButton(){
    try {       
        await this.noButton.waitForDisplayed();
        await this.noButton.click();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async confirmationPopUpIsDisplayed(){
    try {       
        await this.confirmationPopUp.waitForDisplayed({
            reverse: true,
        });
        return await this.confirmationPopUp.isDisplayed();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnYesButton(){
    try {       
        await this.yesButton.waitForDisplayed();
        await this.yesButton.click();
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async clickOnCancelButton(){
    try {    
        await this.cancelButton.waitForDisplayed();
        await this.cancelButton.click();     
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}
async initialProjectStateIsDisplayed(){
    try {    
        await this.initialProjectState.waitForDisplayed();
        return await this.initialProjectState.isDisplayed();     
        } catch (error) {
        fail("Failed due to exception " + error);
    }
}







}
module.exports = new StatusVotingPage();
