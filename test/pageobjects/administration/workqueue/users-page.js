import Page from "../../page";

class WorkQueueUsers extends Page {
  get users() {
    return $("(//span[text()='Users'])[3]");
  }
  get worqueueUsersHeader() {
    return $("//span[@class= 'default-color h6 title']");
  }
  get searchUsers() {
    return $("//input[@placeholder= 'Search Users']");
  }
  get searchAvaialableWorkqueues() {
    return $("(//input[@placeholder= 'Search Work Queues'])[1]");
  }
  get selectButtonInUsers() {
    return $("//button[text()=' Select ']");
  }
  get plusIconInAvailable() {
    return $("//button[@class='btn btn-sm btn-success btn-align-right']");
  }
  get searchSelectedWorkQueue() {
    return $("(//input[@placeholder= 'Search Work Queues'])[2]");
  }
  get saveButton() {
    return $("//button[text()=' Save ']");
  }
  get successToaster() {
    return $("//div[@class='snotifyToast__inner']");
  }
  get subSectionHeader() {
    return $("//app-list-box/div/div/h2[@class= 'block']//strong");
  }
  get cancelButton() {
    return $("//button[text()=' Cancel ']");
  }
  get trashIcon() {
    return $("//button[@class='btn btn-sm btn-danger btn-align-right']");
  }
  // function for all actions on Users Page
  async clickOnTrashIcon() {
    try {
      await this.trashIcon.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkAvailableWorkQueueIsDisplayed(selectedWorkQueueName) {
    try {
      return await $(
        "//strong[text()='" + selectedWorkQueueName + "']"
      ).waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnCancelButton() {
    try {
      await this.cancelButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkSaveButtonIsEnabled() {
    try {
      return await this.saveButton.isEnabled();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkUsersSubSectionHeadersName(header) {
    try {

      return await $("(//app-infinite-list-box/div/div/h2[@class= 'block']//strong)[" + header + "]").getText();

    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkUsersSubSectionFirstHeadersName() {
    try {

      return await this.subSectionHeader.getText();

    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async checkUsersPageHeaderName() {
    try {
      return await this.worqueueUsersHeader.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async checkUsersMenuOptionIsVisible() {
    try {
      return await this.users.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterUserName(Username) {
    try {
      await this.searchUsers.setValue(Username);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSelectButton() {
    try {
      await this.selectButtonInUsers.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterAvailableWorkQueue(availableWorkQueueName) {
    try {
      await this.searchAvaialableWorkqueues.setValue(availableWorkQueueName);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnPlusIcon() {
    try {
      await this.plusIconInAvailable.waitForClickable();
      await this.plusIconInAvailable.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterSelectedWorkQueue(selectedWorkQueueName) {
    try {
      await this.searchSelectedWorkQueue.setValue(selectedWorkQueueName);
      await $(
        "//strong[text()='" + selectedWorkQueueName + "']"
      ).waitForClickable();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSaveButton() {
    try {
      await this.saveButton.waitForClickable();
      await this.saveButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickSuccessToaster() {
    try {
      await this.successToaster.waitForDisplayed();
      await this.successToaster.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfUserName() {
    try {
      await this.searchUsers.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}
module.exports = new WorkQueueUsers();
