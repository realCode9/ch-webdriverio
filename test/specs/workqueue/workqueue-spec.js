import loginPage from "../../pageobjects/login/login-page";
import workQueueConfigurationsPage from "../../pageobjects/administration/workqueue/configurations-page";
import workQueueUsersPage from "../../pageobjects/administration/workqueue/users-page";
import workQueueConfigurationsTestData from "../../../resources/administration/work-queue/work-queue-configurations-test-data.json";
import menuoptionsPage from "../../pageobjects/menuoptions-page";
import workQueueUsersTestData from "../../../resources/administration/work-queue/work-queue-user-test-data.json";
import loginTestData from "../../../resources/login/login-test-data.json";
import workQueuePage from "../../pageobjects/workqueue/workqueue-page";
import commonUtilities from "../../../utilities/common-utilities";
import workQueueTestData from "../../../resources/work-queue/work-queue-test-data.json";
import connecToDataBase from "../../../utilities/database-connection";

describe("Validation of work queue module functionality", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });

  it("Validating creating new work queue functionality", async () => {
    await menuoptionsPage.clickOnAdmin();
    await menuoptionsPage.clickOnWorkQueue();
    await menuoptionsPage.clickOnWorkQueueConfigurations();
    await workQueueConfigurationsPage.clickOnNewButton();
    await workQueueConfigurationsPage.enterWorkQueueName(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueConfigurationsPage.clickOnWorkQueueView();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.viewDropDownValue
    );
    await workQueueConfigurationsPage.enterLimit(
      workQueueConfigurationsTestData.workQueuelimit
    );
    await workQueueConfigurationsPage.clickOnAuditType();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.auditTypeDropDownValue
    );
    await workQueueConfigurationsPage.clickOnAuditStatus();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.auditStatusDropDownValue
    );
    await workQueueConfigurationsPage.enterDescription(
      workQueueConfigurationsTestData.workQueueDescription
    );
    await workQueueConfigurationsPage.clickOnLimit();
    await workQueueConfigurationsPage.clickOnSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueUsersTestData.workQueueSuccessMessage
    );
  });

  it("Validating assigning workqueue functionality", async () => {
    await workQueueConfigurationsPage.scrollIntoConfigurationsView();
    await workQueueUsersPage.clickSuccessToaster();
    await menuoptionsPage.clickOnWorkQueueUser();
    await workQueueUsersPage.enterUserName(loginTestData.userName);
    await workQueueUsersPage.clickOnSelectButton();
    await workQueueUsersPage.enterAvailableWorkQueue(
      workQueueUsersTestData.workQueueName
    );
    await workQueueUsersPage.clickOnPlusIcon();
    await workQueueUsersPage.enterSelectedWorkQueue(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueUsersPage.clickOnSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueUsersTestData.successMessage
    );
    await workQueueUsersPage.visibilityOfUserName();
  });
  it("Validating navigation to work queue menu option", async () => {
    await workQueuePage.scrollIntoWorkQueueView();
    expect(await workQueuePage.visibilityOfWorkQueueOption()).toBe(true);
    
  });
  it("Validating my inventory button on work queue page", async () => {
    await workQueuePage.clickOnWorkQueueOption();
    expect(await workQueuePage.visibilityOfMyInventoryButton()).toBe(true);
  });
  it("Validating  fields and buttons present on work queue", async () => {
    expect(await workQueuePage.visibilityOfAuditTypeDropdown()).toBe(true);
    expect(await workQueuePage.visibilityOfWorkQueueDropdown()).toBe(true);
    expect(await workQueuePage.visibilityOfBulkUpdateButton()).toBe(true);
    expect(await workQueuePage.visibilityOfFilterButton()).toBe(true);
    expect(await workQueuePage.visibilityOfRefreshButton()).toBe(true);
    expect(await workQueuePage.visibilityOfToggleButton()).toBe(true);
    expect(await workQueuePage.visibilityOfAscendingDescendingButton()).toBe(
      true
    );
    expect(await workQueuePage.visibilityOfSelectSortFieldButton()).toBe(true);
    await commonUtilities.waitForToasterMessageToDisappear();
  });

  it("Validating work queue search functionality by available workQueue Type", async () => {
    await workQueuePage.clickOnAuditTypeDropdown();
    await commonUtilities.selectDropDownOptions(
      workQueueConfigurationsTestData.auditTypeDropDownValue
    );
    await workQueuePage.visibilityOfWorkQueueDropdown();
    await workQueuePage.clickOnWorkQueueDropdown();
    await workQueuePage.selectWorkQueueDropdown(
      workQueueConfigurationsTestData.workQueueName
    );
    expect(await workQueuePage.visibilityOfSearchResult()).toBe(true);
  });
  it("Validating work queue refresh button functionality on page", async () => {
    await workQueuePage.clickOnRefreshButton();
    expect(await workQueuePage.visibilityOfSearchResult()).toBe(true);
  });

  it("Validating search by audit id functionality", async () => {
    await workQueuePage.enterAuditIdOrClaimNumber(workQueueTestData.auditId);
    await workQueuePage.clickOnSearchAuditIdButton();
    expect(await workQueuePage.getDefaultAuditId()).toBe(
      workQueueTestData.auditId
    );
  });
  it("Validating search by claim number functionality", async () => {
    await workQueuePage.clickOnRefreshButton();
    await workQueuePage.visibilityOfSearchResult();
    await workQueuePage.enterAuditIdOrClaimNumber(
      workQueueTestData.claimNumber
    );
    await workQueuePage.clickOnSearchClaimNumberButton();
    expect(await workQueuePage.getDefaultClaimNumber()).toBe(
      workQueueTestData.claimNumber
    );
  });

  it("Validating work queue toggle detail button functionality", async () => {
    await workQueuePage.clickOnToggleButton();
    expect(await workQueuePage.visibilityOfWorkQueueTopBlock()).toBe(true);
  });
  it("Validating fields and button present on toggle detailed view", async () => {
    expect(await workQueuePage.visibilityOfAuditTypeDropdown()).toBe(true);
    expect(await workQueuePage.visibilityOfWorkQueueDropdown()).toBe(true);
    expect(await workQueuePage.visibilityOfBulkUpdateButton()).toBe(true);
    expect(await workQueuePage.visibilityOfFilterButton()).toBe(true);
    expect(await workQueuePage.visibilityOfRefreshButton()).toBe(true);
    expect(await workQueuePage.visibilityOfToggleButton()).toBe(true);
    expect(await workQueuePage.visibilityOfAscendingDescendingButton()).toBe(
      true
    );
    expect(await workQueuePage.visibilityOfSelectSortFieldButton()).toBe(true);
  });

  it("Validating claim details on result list of detailed view ", async () => {
    expect(await workQueuePage.getDetailedViewClaimNumber()).toBe(
      workQueueTestData.claimNumber
    );
  });
  it("Validating toggle list view functionality", async () => {
    await workQueuePage.clickOnToggleListButton();
    expect(await workQueuePage.visibilityOfSearchResult()).toBe(true);
  });
  it("Validating sorting of search result in ascending order, Covers Regression(6.61.0) bug NPP-27583", async () => {
    await workQueuePage.clickOnRefreshButton();
    expect(await workQueuePage.visibilityOfSearchResult()).toBe(true);
    await workQueuePage.clickOnSortField();
    await commonUtilities.selectDropDownOptions(
      workQueueTestData.sortFieldValue
    );
    await workQueuePage.clickOnAscendingDescendingButton();
    expect(await workQueuePage.visibilityOfSearchResult()).toBe(true);
    await browser.pause(1000);
    expect(
      await workQueuePage.getAuditAmountFromSearchResult(
        workQueueTestData.ascendingOrder
      )
    ).toBe(await workQueuePage.getAuditAmountOfFirstSearchResult());
  });
  it("Validating sorting of search result in descending order, Covers Regression(6.61.0) bug NPP-27583", async () => {
    await workQueuePage.clickOnAscendingDescendingButton();
    expect(await workQueuePage.visibilityOfSearchResult()).toBe(true);
    await workQueuePage.getAuditAmountFromSearchResult(
      workQueueTestData.descendingOrder
    );
    expect(
      await workQueuePage.getAuditAmountFromSearchResult(
        workQueueTestData.descendingOrder
      )
    ).toBe(await workQueuePage.getAuditAmountOfFirstSearchResult());
  });
  it("Validating that viewer name is same as that of logged in user", async () => {
    await workQueuePage.clickOnRefreshButton();
    expect(await workQueuePage.visibilityOfSearchResult()).toBe(true);
    await workQueuePage.clickOnSearchResultView();
    expect(await menuoptionsPage.getLoggedInUserText()).toBe(
      await workQueuePage.getCurrentViewer()
    );
  });
  it("Validating background color of audit when viewer is currently working on audit", async () => {
    expect(await workQueuePage.getBackgroundColor()).toBe(true);
  });
  it("Validating line type of audit on detailed view", async () => {
    expect(
      await workQueuePage.getValueOnSearchView(
        workQueueTestData.levelOnSearchView
      )
    ).toBe(await workQueuePage.getLevelOnDetailedView());
  });
  it("Validating claim number of audit on detailed view", async () => {
    expect(
      await workQueuePage.getValueOnSearchView(
        workQueueTestData.claimNumberOnSearchView
      )
    ).toBe(await workQueuePage.getClaimNumberOnDetailedView());
  });

  it("Validating dataset type of audit on detailed view", async () => {
    expect(
      await workQueuePage.getValueOnSearchView(
        workQueueTestData.dataSetOnSearchView
      )
    ).toBe(await workQueuePage.getDataSetOnDetailedView());
  });
  it("Validating  Status age of audit on detailed view", async () => {
    expect(
      await workQueuePage.getValueOnSearchView(
        workQueueTestData.statusAgeOnSearchView
      )
    ).toBe(await workQueuePage.getStatusAgeOnDetailedView());
    
  });
  it("Validating audit id on detailed view.", async () => {
    expect(
      await workQueuePage.getValueOnSearchView(
        workQueueTestData.auditIDOnSearchView
      )
    ).toEqual(await workQueuePage.getAuditIdOnDetailedView());
  });
  it("To verify custom field of audit from db.", async () => {
    connecToDataBase();

  });
  it("To verify user tagging functionality", async () => {
    await workQueuePage.clickOntagUserSearchField();
    await workQueuePage.selectUserNameForTagging(loginTestData.userName);
    await workQueuePage.enterCommentForUserTagging(workQueueTestData.userTaggingComment);
    await workQueuePage.clickOnSaveButtonOnDetailedView();
    await commonUtilities.waitForToasterMessageToDisappear();
    await browser.refresh();
    await menuoptionsPage.clickOnUserProfileDropDown();
    await menuoptionsPage.clickOnNotifications();
    await workQueuePage.clickOnUsersTab();
    expect(await workQueuePage.getNotificationsBodyText()).toBe(workQueueTestData.userTaggingComment);
    expect(await workQueuePage.getNotificationsHeaderText()).toEqual(workQueueTestData.notificationsHeader);
    
  });
  it("Validate deleting the configuration which was created", async () => {
    await menuoptionsPage.clickOnAdmin();
    await menuoptionsPage.clickOnWorkQueue();
    await menuoptionsPage.clickOnWorkQueueConfigurations();
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueConfigurationsPage.clickOnConfigurationsDeleteButton();
    await workQueueConfigurationsPage.clickOnDeleteModelYesButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueConfigurationsTestData.workQueueDeleteMessage
    );
    await commonUtilities.waitForToasterMessageToDisappear();
  });

});
