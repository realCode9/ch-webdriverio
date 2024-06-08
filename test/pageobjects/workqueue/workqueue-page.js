import Page from "../page";
import workQueueConfigurationsTestData from "../../../resources/administration/work-queue/work-queue-configurations-test-data.json";
const mongoose = require('mongoose');
class WorkQueuePage extends Page {
  get workqueue() {
    return $("(//span[text()='Work Queue'])[1]");
  }
  get auditTypeDropdown() {
    return $("//ng-select[@id='work-queue-audit-type-dropdown']");
  }
  get DropdownList() {
    return $("(//div[@role='option'])");
  }
  get workQueueDropdown() {
    return $("(//input[@type='text'])[2]");
  }
  get searchByAuditOrClaim() {
    return $("//input[@id='search']");
  }
  get auditIdInSearchResult() {
    return $("(//div/div/div/div[@class='running-txt'])[1]");
  }
  get tagUserSearchBox() {
    return $("(//input[@role='combobox'])[5]");
  }
  get workQueueDropDown() {
    return $("//ng-select[@id='work-queues']//input[@role='combobox']");
  }
  get selectUsername() {
    return $("//div[text()=' Pareo Automation ']");
  }
  get clickLeftBlock() {
    return $("//div[@class='left-block']");
  }
  get bulkUpdateButton() {
    return $("//button[@id='work-queue-bulk-update-btn']");
  }
  get filterButton() {
    return $("//button[@id='work-queue-filter-btn']");
  }
  get refreshButton() {
    return $("//button[@id='work-queue-refresh-btn']");
  }
  get toggleButton() {
    return $("//span[contains(@class,'switch switch-medium')]");
  }
  get ascDescButton() {
    return $("//button[@id='single-button']");
  }
  get sortFieldDropDown() {
    return $("//ng-select[@id='select-sort-fields']");
  }
  get myInventoryButton() {
    return $("//button[@id='show-inventory-button']");
  }
  get searchResultView() {
    return $("//div[@id='Default Audit-0']");
  }
  get refreshButton() {
    return $("//button[@id='work-queue-refresh-btn']");
  }
  get workQueueTopBlock() {
    return $("//div[@class='top-block']");
  }
  get searhcClaimNumberButton() {
    return $("//button[@id='default-claim-number-btn']");
  }
  get searhcAuditIdButton() {
    return $("//button[@id='default-internal-id-btn']");
  }
  get auditId() {
    return $("//input[@name='internalId']");
  }
  get defaultAuditId() {
    return $("//div[@id='default-audit-id']");
  }
  get claimNumber() {
    return $("//div[@id='default-audit-claim-number']");
  }
  get toggleListButton() {
    return $("//span[@id='toggleForListAndDetailView']");
  }
  get detailedViewClaimNumber() {
    return $("//span[@id='Id-Id']");
  }
  get sortField() {
    return $("//ng-select[@id='select-sort-fields']");
  }
  get auditAmountOfSearchResult() {
    return $$("//div[text()='Audit Amount:']//..//div[2]");
  }
  get auditAmountOfFirstSearchResult() {
    return $("(//div[text()='Audit Amount:']//..//div[2])[1]");
  }
  get currentViewer() {
    return $("//div[@class='icon']//div");
  }
  get selectedViewBackground() {
    return $("//div[@class='work-queue-wrapper selected viewed']");
  }
  get LevelOnDetailedView() {
    return $("//span[@id='Level-Id']");
  }
  get claimNumberOnDetailedView() {
    return $("//span[@id='Claim-#-Id']");
  }
  get dataSetOnDetailedView() {
    return $("//span[@id='Dataset-Id']");
  }
  get clinicalDropDown() {
    return $("(//span[text()='Clinical Audit'])[4]");
  }
get statusAgeOnDetailedView() {
  return $("//span[@id='Status-Age-Id']");
}
get tagUserSearchField() {
  return $("//ng-select[@bindvalue='_id']");
}
get tagUserCommentBox() {
  return $("//textarea[@placeholder='Add a comment']");
}
get saveButtonOnDetailedView() {
  return $("//button[@class='btn btn-sm btn-primary m-l-sm']");
}
get usersTab() {
  return $("//span[normalize-space()='User']");
}
get notificationHeader() {
  return $("(//div[@class='notification-header'])[1]");
}
get notificationBody() {
  return $("(//div[@class='notification-body'])[1]");
}
get loader() {
  return $("//div[@class='loader']");
}
get directTabInUsers() {
  return $("//span[normalize-space()='DIRECT']");
}

  // Functions of all work queue actions
  async getNotificationsBodyText() {
    try {
      await this.notificationBody.waitForDisplayed();
     return await this.notificationBody.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getNotificationsHeaderText() {
    try {
     await this.notificationHeader.waitForDisplayed();
     return await this.notificationHeader.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnUsersTab() {
    try {
      await this.loader.waitForDisplayed({ reverse: true})
      await this.usersTab.waitForDisplayed();
      await this.usersTab.click();
      await this.loader.waitForDisplayed({ reverse: true})
      await this.directTabInUsers.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSaveButtonOnDetailedView() {
    try {
      await this.saveButtonOnDetailedView.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async enterCommentForUserTagging(userTaggingComment) {
    try {
      await this.tagUserCommentBox.setValue(userTaggingComment);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectUserNameForTagging(userName) {
    try {
      await this.tagUserSearchBox.setValue(userName);
      await this.selectUsername.waitForDisplayed();
      await this.selectUsername.click();
      await this.clickLeftBlock.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOntagUserSearchField() {
    try {
      await this.tagUserSearchBox.scrollIntoView();
      await this.tagUserSearchBox.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getCustomFieldValueFromDB() {
    try {
  const MyModel = mongoose.model('customfieldclaimdisplays', new mongoose.Schema({ name: String }, { name: String }));
            const a = await MyModel.find({ 'codeName': 'TestCode' }, { w: 0, wtimeout: 1000 });
          } catch (error) {
            fail("Failed due to exception " + error);
          }
        }
  async getAuditIdOnDetailedView() {
    try {
      return await this.auditId.getValue();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getStatusAgeOnDetailedView() {
    try {
      return await this.statusAgeOnDetailedView.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnClinicalDropDown() {
    try {
      await this.clinicalDropDown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getDataSetOnDetailedView() {
    try {
      return await this.dataSetOnDetailedView.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getClaimNumberOnDetailedView() {
    try {
      return await this.claimNumberOnDetailedView.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visiblilityOfLevelOnDetailedView() {
    try {
      await this.LevelOnDetailedView.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getValueOnSearchView(fieldValue) {
    try {
      return await $(
        "(//div[text()='" + fieldValue + "']//../div[2])[1]"
      ).getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getLevelOnDetailedView() {
    try {
      return await this.LevelOnDetailedView.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getBackgroundColor() {
    try {
      const backgroundColor = await this.selectedViewBackground.getCSSProperty(
        "background-color"
      );
      const BackGroundColorstring = JSON.stringify(backgroundColor);
      const matchingString = BackGroundColorstring.includes("#fefe97");
      return matchingString;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getCurrentViewer() {
    try {
      return await this.currentViewer.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visiblilityOfAuditID() {
    try {
      await this.auditId.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSearchResultView() {
    try {
      await this.searchResultView.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAscendingDescendingButton() {
    try {
      await this.ascDescButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getAuditAmountOfFirstSearchResult() {
    try {
      const auditAmount = await this.auditAmountOfFirstSearchResult.getText();
      const auditAmountString = auditAmount.replace(/,/g, "");
      return auditAmountString.split("$").pop(1);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getAuditAmountFromSearchResult(orderOfRecords) {
    try {
      var allAuditAmount = [];
      await this.auditAmountOfSearchResult.forEach(async function (result) {
        const auditAmountText = await result.getText();
        const replaceCommanFromAuditString = auditAmountText.replace(/,/g, "");
        const stringWithoutDollar = replaceCommanFromAuditString
          .split("$")
          .pop(1);
        const decimalAuditAmount = parseFloat(stringWithoutDollar).toFixed(2);
        allAuditAmount.push(decimalAuditAmount);
      });
      allAuditAmount.sort(function (a, b) {
        return a - b;
      });
      if (orderOfRecords == "ascending") {
        return allAuditAmount[0];
      } else {
        const lastValue = allAuditAmount
          .slice(allAuditAmount.length - 1)
          .toString();
        return lastValue;
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnSortField() {
    try {
      await this.sortField.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnToggleListButton() {
    try {
      await this.toggleListButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getDetailedViewClaimNumber() {
    try {
      return await this.detailedViewClaimNumber.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async getDefaultClaimNumber() {
    try {
      return await this.claimNumber.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getDefaultAuditId() {
    try {
      return await this.defaultAuditId.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async getAuditId() {
    try {
      return await this.auditId.getAttribute("disabled");
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnSearchResultView() {
    try {
      await this.searchResultView.waitForClickable();
      await this.searchResultView.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSearchClaimNumberButton() {
    try {
      await this.searhcClaimNumberButton.waitForClickable();
      await this.searhcClaimNumberButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSearchAuditIdButton() {
    try {
      await this.searhcAuditIdButton.waitForClickable();
      await this.searhcAuditIdButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnToggleButton() {
    try {
      await this.toggleButton.waitForClickable();
      await this.toggleButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfWorkQueueTopBlock() {
    try {
      await this.workQueueTopBlock.waitForDisplayed();
      return await this.workQueueTopBlock.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfWorkQueueOption() {
    try {
      await this.workqueue.waitForDisplayed();
      return await this.workqueue.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAuditTypeDropdown() {
    try {
      await this.auditTypeDropdown.waitForDisplayed();
      return await this.auditTypeDropdown.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfWorkQueueDropdown() {
    try {
      await this.workQueueDropDown.waitForDisplayed();
      return await this.workQueueDropDown.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfBulkUpdateButton() {
    try {
      await this.bulkUpdateButton.waitForDisplayed();
      return await this.bulkUpdateButton.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfFilterButton() {
    try {
      await this.filterButton.waitForDisplayed();
      return await this.filterButton.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfRefreshButton() {
    try {
      await this.refreshButton.waitForDisplayed();
      return await this.refreshButton.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfToggleButton() {
    try {
      await this.toggleButton.waitForDisplayed();
      return await this.toggleButton.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfAscendingDescendingButton() {
    try {
      await this.ascDescButton.waitForDisplayed();
      return await this.ascDescButton.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfSelectSortFieldButton() {
    try {
      await this.sortFieldDropDown.waitForDisplayed();
      return await this.sortFieldDropDown.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async scrollIntoWorkQueueView() {
    try {
      await this.workqueue.scrollIntoView();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnWorkQueueOption() {
    try {
      await this.workqueue.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfMyInventoryButton() {
    try {
      return await this.myInventoryButton.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAuditTypeDropdown() {
    try {
      await this.auditTypeDropdown.waitForDisplayed();
      await this.auditTypeDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnWorkQueueDropdown() {
    try {
      await this.workQueueDropDown.click();
      await this.workQueueDropDown.setValue(workQueueConfigurationsTestData.workQueueName);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async visibilityOfSearchResult() {
    try {
      await this.searchResultView.waitForDisplayed();
      return await this.searchResultView.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async selectWorkQueueDropdown(demoWorkQueueName) {
    try {
      let workqueueDropDownValue = "//div[@role='option']//span[text()='"+demoWorkQueueName+"']"
      await $(workqueueDropDownValue).click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async clickOnRefreshButton() {
    try {
      await this.refreshButton.waitForClickable();
      await this.refreshButton.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }

  async enterAuditIdOrClaimNumber(auditIdORClaimNumber) {
    try {
      await this.searchByAuditOrClaim.getValue();
      await this.searchByAuditOrClaim.setValue(auditIdORClaimNumber);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
}
module.exports = new WorkQueuePage();
