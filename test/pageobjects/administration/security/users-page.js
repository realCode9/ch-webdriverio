import Page from "../../page";

class UsersPage extends Page {
  get userListText() {
    return $("//span[text()=' User List ']");
  }
  get pagination() {
    return $("//ul[@class='pagination pagination-sm']");
  }
  get totalPages() {
    return $$("//ul[@class='pagination pagination-sm']/li");
  }
  get rowCount() {
    return $("(//tbody[@class='ui-table-tbody'])[1]");
  }
  get rowUserCount() {
    return $$("(//tbody[@class='ui-table-tbody'])[1]/tr");
  }
  get userNameText() {
    return $("//th[text()=' Name ']");
  }
  get userTypeText() {
    return $("//th[text()=' Type ']");
  }
  get userLastLoginText() {
    return $("//th[text()= ' Last Login ']");
  }
  get userRoleText() {
    return $("//th[text()= ' Role ']");
  }
  get userEmailText() {
    return $("//th[text()= ' Email ']");
  }
  get userStatusText() {
    return $("//th[text()= 'Active']");
  }
  get newButton() {
    return $("//button[text()='New']");
  }
  get userDetailText() {
    return $("//span[text()=' User Detail ']");
  }
  get email() {
    return $("//input[@id='email']");
  }
  get name() {
    return $("//input[@id='name']");
  }
  get role() {
    return $("//ng-select[@id='role']");
  }
  get organization() {
    return $("//*[@id='organization']/div");
  }
  get dataRole() {
    return $("//ng-select[@id='DataRole']");
  }
  get fileType() {
    return $("//ng-select[@id='app-code-list-dropdown-File-Types']");
  }
  get inventoryAssignment() {
    return $("//input[@id='inventoryassignment']");
  }
  get payerIdentifier() {
    return $("//input[@id='payerIdentifier']");
  }
  get userLicensedState() {
    return $("//ng-select[@id='states']");
  }
  get userStatusToggle() {
    return $("//ui-switch[@id='blocked']/span");
  }
  get authType() {
    return $("//*[@id='authType-button']//div[3]");
  }
  get mfaCheckbox() {
    return $("//div/input[@id='mfa']");
  }
  get submitButton() {
    return $("//button[@class='btn btn-primary btn-sm m-t-md m-r-sm']");
  }
  get successToast() {
    return $("//div[text()=' Success ']");
  }
  get dropDownList() {
    return $$("//div[@role='option']");
  }
  get searchTextBox() {
    return $("//input[@name='searchText']");
  }
  get userType() {
    return $("//ng-select[@id='app-custom-dropdown-Select-Status']/div");
  }
  get blockUser() {
    return $("//span[text()='Blocked']");
  }
  get accountType() {
    return $("//ng-select[@id='app-custom-dropdown-Select-Account-Type']/div");
  }
  get provider() {
    return $("//div/span[text()='Provider']");
  }
  get blockedUser() {
    return $("//td[text()='New Automation User']");
  }
  get delete() {
    return $("//span[text()='Deleted']");
  }
  get deletedUser() {
    return $("(//td[text()='Jennifer McCurdy Development'])[1]");
  }
  get deleteButton() {
    return $("//button[text()=' Delete ']");
  }
  get confirmButton() {
    return $("//button[text()=' Yes ']");
  }
  get searchButton() {
    return $("//button[text()='Search']");
  }
  get activeUser() {
    return $("//span[text()='Active']");
  }
  get payer() {
    return $("//div/span[text()='Payer']");
  }
  get activedUser() {
    return $("//td[text()='Automation User']");
  }
  get view() {
    return $("(//button[@ngbtooltip='View User'])[1]");
  }
  get historyList() {
    return $("//tbody[@class='ui-table-tbody']/tr");
  }
  get beforeUpdateHistory() {
    return $$("//tbody[@class='ui-table-tbody']/tr");
  }
  get updateRole() {
    return $("//div[@role='option']//span[text()='Credit Balance Manager']");
  }
  get saveButton() {
    return $("//button/span[text()='Save']");
  }
  get afterUpdateHistory() {
    return $$("//tbody[@class='ui-table-tbody']/tr");
  }
  get cancelButton() {
    return $("//button[text()=' Cancel ']");
  }
  get noMatchingUser() {
    return $("//div[text()='No Data']");
  }

  // Functions of all users actions

  async visibilityOfUserListText() {
    try {
      return await this.userListText.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async visibilityOfPagination() {
    try {
      return await this.pagination.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getFirstPage() {
    try {
      await this.totalPages[1].click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getFirstPageAttribute() {
    try {
      return await this.totalPages[1].getAttribute("class");
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getLastPage() {
    try {
      let totalPagesCount = await this.totalPages.length;
      await this.totalPages[totalPagesCount - 2].click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async returnRowUserCount() {
    try {
      let rowCount = await this.rowUserCount.length;
      return rowCount;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getUserNameText() {
    try {
      await this.userNameText.waitForDisplayed();
      return await this.userNameText.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getUserTypeText() {
    try {
      await this.userTypeText.waitForDisplayed();
      return await this.userTypeText.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getUserLastLoginText() {
    try {
      await this.userLastLoginText.waitForDisplayed();
      return await this.userLastLoginText.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getUserRoleText() {
    try {
      await this.userRoleText.waitForDisplayed();
      return await this.userRoleText.getText();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }

  async getUserEmailText() {
    try {
      await this.userEmailText.waitForDisplayed();
      return await this.userEmailText.getText();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }

  async getUserStatusText() {
    try {
      await this.userStatusText.waitForDisplayed();
      return await this.userStatusText.getText();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }

  async clickOnNewButton() {
    try {
      await this.newButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async visibilityOfUserDetailText() {
    try {
      return await this.userDetailText.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async enterEmail(userEmail) {
    try {
      await this.email.setValue(userEmail);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async enterName(userName) {
    try {
      await this.name.setValue(userName);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnRole() {
    try {
      await this.role.waitForClickable();
      await this.role.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnOrganization() {
    try {
      await this.organization.waitForClickable();
      await this.organization.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnDataRole() {
    try {
      await this.dataRole.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnFileType() {
    try {
      await this.fileType.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async enterInventoryAssignment(inventory) {
    try {
      await this.inventoryAssignment.setValue(inventory);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async enterPayerIdentifier(payerid) {
    try {
      await this.payerIdentifier.setValue(payerid);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnUserLicensedState(state) {
    try {
      await this.userLicensedState.click(state);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAuthType() {
    try {
      await this.authType.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnMfaCheckbox() {
    try {
      await this.mfaCheckbox.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSubmitButton() {
    try {
      await this.submitButton.waitForEnabled();
      await this.submitButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfSuccessToast() {
    try {
      await this.successToast.waitForDisplayed();
      return await this.successToast.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async searchBlockedUser(searchText) {
    try {
      await this.searchTextBox.setValue(searchText);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async searchDeletedUser(searchText) {
    try {
      await this.searchTextBox.setValue(searchText);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnUserType() {
    try {
      await this.userType.waitForClickable();
      await this.userType.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnAccountType() {
    try {
      await this.accountType.waitForClickable();
      await this.accountType.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnSearchButton() {
    try {
      await this.searchButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getDeletedUser() {
    try {
      return await this.deletedUser.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getBlockedUser() {
    try {
      return await this.blockedUser.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clearSearch() {
    try {
      await this.searchTextBox.clearValue();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async searchActiveUser(searchText) {
    try {
      await this.searchTextBox.setValue(searchText);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getActiveUser() {
    try {
      return await this.activedUser.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async searchUser(searchText) {
    try {
      await this.searchTextBox.setValue(searchText);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async viewUser() {
    try {
      await this.view.waitForDisplayed();
      await this.view.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async beforeUpdateHistory() {
    try {
      let beforeUpdateHistory = this.beforeUpdateHistory.length;
      return await beforeUpdateHistory;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async save() {
    try {
      await this.saveButton.waitForClickable();
      await this.saveButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async updateUserRole() {
    try {
      await this.updateRole.waitForDisplayed();
      await this.updateRole.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async afterUpdateHistory() {
    try {
      let afterUpdateHistory = this.afterUpdateHistory.length;
      return await afterUpdateHistory;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async cancel() {
    try {
      await this.cancelButton.waitForClickable();
      await this.cancelButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async deleteUser() {
    try {
      await this.deleteButton.click();
      await this.confirmButton.waitForDisplayed();
      await this.confirmButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async searchNoMatchingUser(searchText) {
    try {
      await this.searchTextBox.setValue(searchText);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getNoMatchingUser() {
    try {
      return await this.noMatchingUser.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async submitEnable() {
    try {
      return await this.submitButton.isEnabled();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}

module.exports = new UsersPage();
