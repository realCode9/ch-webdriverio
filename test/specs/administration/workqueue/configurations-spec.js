import loginPage from "../../../pageobjects/login/login-page";
import workQueueConfigurationsPage from "../../../pageobjects/administration/workqueue/configurations-page";
import menuoptionsPage from "../../../pageobjects/menuoptions-page";
import workQueueConfigurationsTestData from "../../../../resources/administration/work-queue/work-queue-configurations-test-data.json";
import commonUtilities from "../../../../utilities/common-utilities";

describe("Validation of work queue configurations module functionality", () => {
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });
  it("Validating navigation to work queue configurations menuoption", async () => {
    await menuoptionsPage.clickOnAdmin();
    await menuoptionsPage.clickOnWorkQueue();
    await menuoptionsPage.clickOnWorkQueueConfigurations();
    expect(
      await workQueueConfigurationsPage.checkWorkQueueConfigurationHeader()
    ).toBe(workQueueConfigurationsTestData.workQueueConfigurationHeader);
  });
  it("Validating visibility of global workqueue button.", async () => {
    expect(await workQueueConfigurationsPage.checkGlobalWorkQueueButton()).toBe(
      true
    );
  });
  it("Validating visibility of global workqueue setting model", async () => {
    await workQueueConfigurationsPage.clickOnGlobalWorkQueueButton();
    expect(
      await workQueueConfigurationsPage.checkGlobalWorkQueueSettingModel()
    ).toBe(true);
  });
  it("Validate dropdown values on  Global Work Queue Settings Modal", async () => {
    await workQueueConfigurationsPage.clickOnGlobalWorkQueueSortingButton();
    expect(await workQueueConfigurationsPage.getDropDownOptions(0)).toBe(
      workQueueConfigurationsTestData.globalWorkQueueModelDropdownValue0
    );
    expect(await workQueueConfigurationsPage.getDropDownOptions(1)).toBe(
      workQueueConfigurationsTestData.globalWorkQueueModelDropdownValue1
    );
    expect(await workQueueConfigurationsPage.getDropDownOptions(2)).toBe(
      workQueueConfigurationsTestData.globalWorkQueueModelDropdownValue2
    );
  });
  it("Validate AscDesc toggle button is displayed on Global Work Queue Settings modal", async () => {
    expect(await workQueueConfigurationsPage.checkAscDescToggleButton()).toBe(
      true
    );
  });
  it("Validate functionality of cancel button on Global Work Queue Settings modal", async () => {
    await workQueueConfigurationsPage.clickOnCancelButton();
    expect(
      await workQueueConfigurationsPage.checkGlobalWorkQueueSettingModelNotDisplayed()
    ).toBe(true);
  });
  it("Validate functionality of save button on Global Work Queue Settings modal", async () => {
    await workQueueConfigurationsPage.clickOnGlobalWorkQueueButton();
    await workQueueConfigurationsPage.clickOnAscDescToggleButton();
    await workQueueConfigurationsPage.clickOnModelSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueConfigurationsTestData.saveSuccessMessageModel
    );
  });
  it("Validating Navigation to New workqueue configuration Page", async () => {
    await workQueueConfigurationsPage.clickOnNewButton();
    expect(await workQueueConfigurationsPage.getCurrentURL()).toContain(
      workQueueConfigurationsTestData.newWorkQueuePageUrl
    );
  });
  it("Verify Save button is disabled when user lands on Create workqueue configuration Screen.", async () => {
    expect(await workQueueConfigurationsPage.checkSaveButtonDisabled()).toBe(
      false
    );
  });
  it("Validating creating new work queue functionality", async () => {
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
    await workQueueConfigurationsPage.clickOnProjects();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.projectValue
    );
    await workQueueConfigurationsPage.clickOnProjectType();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.projectType
    );
    await workQueueConfigurationsPage.clickOnErrorCodes();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.errorCode
    );
    await workQueueConfigurationsPage.clickOnErrorCodesDetail();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.errorCodeDetails
    );
    await workQueueConfigurationsPage.enterDescription(
      workQueueConfigurationsTestData.workQueueDescription
    );
    await workQueueConfigurationsPage.clickOnLimit();
    await workQueueConfigurationsPage.clickOnSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueConfigurationsTestData.workQueueSuccessMessage
    );
  });
  it("Validate total workqueue configuration displayed in the workqueue configuration list default screen", async () => {
    await commonUtilities.waitForToasterMessageToDisappear();
    expect(
      await workQueueConfigurationsPage.getCountofRecordsOnConfigurationList()).toBe(true);
    
  });
  it("Validate columns displayed in the workqueue configuration list", async () => {
    expect(await workQueueConfigurationsPage.getTextofNameColumn()).toBe(
      workQueueConfigurationsTestData.listingFirstColumn
    );

    expect(await workQueueConfigurationsPage.getTextofTypeColumn()).toBe(
      workQueueConfigurationsTestData.listingSecondColumn
    );

    expect(await workQueueConfigurationsPage.getTextofViewColumn()).toBe(
      workQueueConfigurationsTestData.listingThirdColumn
    );

    expect(await workQueueConfigurationsPage.getTextofStatusColumn()).toBe(
      workQueueConfigurationsTestData.listingFourthColumn
    );
  });
  it("Validate the search functionality by workqueue name, type and view and status", async () => {
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        1
      )
    ).toBe(workQueueConfigurationsTestData.workQueueName);
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        2
      )
    ).toBe(workQueueConfigurationsTestData.auditTypeDropDownValue);
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        3
      )
    ).toBe(workQueueConfigurationsTestData.viewDropDownValue);
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        4
      )
    ).toBe(workQueueConfigurationsTestData.auditStatusDropDownValue);
  });
  it("Verify view button is displayed with each workqueue on workqueue configuration list", async () => {
    expect(await workQueueConfigurationsPage.checkViewButton()).toBe(true);
  });
  it("Verify when user clicks on view button and update work queue from workqueue configuration list", async () => {
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueConfigurationsPage.clickOnViewWorkQueueButton(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueConfigurationsPage.clickOnWorkQueueView();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.updateView
    );
    await workQueueConfigurationsPage.clickOnAuditType();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.updateAuditType
    );
    await workQueueConfigurationsPage.clickOnAuditStatus();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.updateStatus
    );
    await workQueueConfigurationsPage.clickOnSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueConfigurationsTestData.workQueueUpdateSuccessMessage
    );
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        2
      )
    ).toBe(workQueueConfigurationsTestData.updateAuditType);
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        3
      )
    ).toBe(workQueueConfigurationsTestData.updateView);
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        4
      )
    ).toBe(workQueueConfigurationsTestData.updateStatus);
  });
  it("Verify when user clicks on cancel button from workqueue configuration detail screen", async () => {
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueConfigurationsPage.clickOnViewWorkQueueButton(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueConfigurationsPage.clickOnCancelButton();
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        2
      )
    ).toBe(workQueueConfigurationsTestData.updateAuditType);
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        3
      )
    ).toBe(workQueueConfigurationsTestData.updateView);
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        4
      )
    ).toBe(workQueueConfigurationsTestData.updateStatus);
  });
  it("Verify when user clicks on Bulk Button", async () => {
    await workQueueConfigurationsPage.clickOnBulkButton();
    expect(await workQueueConfigurationsPage.getBulkWorkQueueHeader()).toBe(
      workQueueConfigurationsTestData.bulkWorkQueueHeader
    );
  });
  it("Verify search button is enabled when user selects the value in audit type and workqueue view search field", async () => {
    expect(await workQueueConfigurationsPage.checkSearchButtonisEnabled()).toBe(
      false
    );
    await workQueueConfigurationsPage.clickOnBulkAuditType();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.bulkAuditType
    );
    await workQueueConfigurationsPage.clickOnBulkWorkQueueView();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.viewDropDownValue
    );
    expect(await workQueueConfigurationsPage.checkSearchButtonisEnabled()).toBe(
      true
    );
  });
  it("Verify search button functionality on bulk workqueue creation screen.", async () => {
    await workQueueConfigurationsPage.clickOnBulkViewSearchButton();
    expect(await workQueueConfigurationsPage.getBulkSearchResultHeader()).toBe(
      workQueueConfigurationsTestData.bulkSearchResultHeader
    );
    expect(
      await workQueueConfigurationsPage.getBulkSearchResultColumnHeader(2)
    ).toBe(workQueueConfigurationsTestData.bulkHeader1);
    expect(
      await workQueueConfigurationsPage.getBulkSearchResultColumnHeader(3)
    ).toBe(workQueueConfigurationsTestData.bulkHeader2);
    expect(
      await workQueueConfigurationsPage.getBulkSearchResultColumnHeader(4)
    ).toBe(workQueueConfigurationsTestData.bulkHeader3);
  });
  it("Verify group by field is enabled when user selects value grouped in workQueue view", async () => {
    await workQueueConfigurationsPage.clickOnBulkWorkQueueView();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.bulkWorkQueueViewGrouped
    );
    expect(await workQueueConfigurationsPage.checkGroupedByField()).toBe(true);
    await workQueueConfigurationsPage.clickOnBulkCancelButton();
  });
  it("Validate creating new workqueue with group by field enabled", async () => {
    await workQueueConfigurationsPage.clickOnNewButton();
    await workQueueConfigurationsPage.enterWorkQueueName(
      workQueueConfigurationsTestData.groupedWorkQueue
    );
    await workQueueConfigurationsPage.clickOnWorkQueueView();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.groupedView
    );
    await workQueueConfigurationsPage.clickOnGroupedByField();

    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.groupedByFieldValue
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
    await workQueueConfigurationsPage.clickOnProjects();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.projectValue
    );
    await workQueueConfigurationsPage.clickOnProjectType();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.projectType
    );
    await workQueueConfigurationsPage.clickOnErrorCodes();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.errorCode
    );
    await workQueueConfigurationsPage.clickOnErrorCodesDetail();
    await workQueueConfigurationsPage.selectDropDownOptions(
      workQueueConfigurationsTestData.errorCodeDetails
    );
    await workQueueConfigurationsPage.enterDescription(
      workQueueConfigurationsTestData.workQueueDescription
    );
    await workQueueConfigurationsPage.clickOnLimit();
    await workQueueConfigurationsPage.clickOnSaveButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueConfigurationsTestData.workQueueSuccessMessage
    );
    await commonUtilities.waitForToasterMessageToDisappear();
  });
  it("Verify delete button is displayed with each workqueue on workqueue configuration list", async () => {
    expect(
      await workQueueConfigurationsPage.checkConfigurationsDeleteButton()
    ).toBe(true);
  });
  it("Validate when user click on delete button present in workqueue list", async () => {
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    await workQueueConfigurationsPage.clickOnConfigurationsDeleteButton();
    expect(
      await workQueueConfigurationsPage.visibilityOfDeleteWorkQueueModel()
    ).toBe(true);
  });
  it("Validate when user click on No button present in delete workqueue configuration modal", async () => {
    await workQueueConfigurationsPage.clickOnDeleteModelNoButton();
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.workQueueName
    );
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.workQueueName,
        1
      )
    ).toBe(workQueueConfigurationsTestData.workQueueName);
  });
  it("Validate when user click on Yes button present in delete workqueue configuration modal", async () => {
    await workQueueConfigurationsPage.clickOnConfigurationsDeleteButton();
    await workQueueConfigurationsPage.clickOnDeleteModelYesButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueConfigurationsTestData.workQueueDeleteMessage
    );
    await commonUtilities.waitForToasterMessageToDisappear();
  });
  it("Validate deleting grouped work queue functionality", async () => {
    await workQueueConfigurationsPage.enterDataInSearchField(
      workQueueConfigurationsTestData.groupedWorkQueue
    );
    expect(
      await workQueueConfigurationsPage.getConfigurationsColumns(
        workQueueConfigurationsTestData.groupedWorkQueue,
        1
      )
    ).toBe(workQueueConfigurationsTestData.groupedWorkQueue);

    await workQueueConfigurationsPage.clickOnConfigurationsDeleteButton();
    await workQueueConfigurationsPage.clickOnDeleteModelYesButton();
    expect(await commonUtilities.visibilityOfSuccessToaster()).toBe(
      workQueueConfigurationsTestData.workQueueDeleteMessage
    );
  });
});
