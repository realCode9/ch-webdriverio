import loginPage from "../../pageobjects/login/login-page";
import leadsTestData from "../../../resources/case-management/leads-test-data.json";
import menuoptionsPage from "../../pageobjects/menuoptions-page";
import leadsPage from "../../pageobjects/case-management/leads-page";
import commonUtilities from "../../../utilities/common-utilities";
describe("Test Cases for Case Management - Leads", () => {
    var today = new Date();
    var date = String(today.getDate());
    var expectedRowCount = 10;
    var expectedRowCountAfterPageSizeChange =20;
 
    beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });

  it('Navigate to Leads', async function ()
  {
      await menuoptionsPage.clickOnFWA();
      await menuoptionsPage.clickOnLeads();
      expect(await leadsPage.isVisibleHeader()).toEqual(leadsTestData.headerValue);
      console.log("Navigated to Leads");
  });

  it('Validate the hide search button functionality', async function ()
  {
      expect(await leadsPage.getTextHideSearchButton()).toEqual(leadsTestData.buttonText);
      await leadsPage.clickHideSearchButton();
      expect(await leadsPage.verifyHiddenSearchPanel()).toEqual(leadsTestData.newButtonText);
  
  });

  it('Verify the fields on Search Filter section after landing on Leads.', async function ()
  {
      await leadsPage.clickHideSearchButton();
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.searchField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.searchFieldPlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.searchFieldLabel)).toEqual(leadsTestData.searchLabel);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.datasetField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.datasetFieldPlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.datasetFieldLabel)).toEqual(leadsTestData.datasetLabel);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.investigatorField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.investigatorFieldPlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.investigatorFieldLabel)).toEqual(leadsTestData.investigatorLabel);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.allegationCategoryField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.allegationCategoryPlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.allegationCategoryLabel)).toEqual(leadsTestData.allegationCategoryLabel);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.leadStatusField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.leadStatusPlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.leadStatusLabel)).toEqual(leadsTestData.leadStatusLabel);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.specialtyTypeField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.specialtyTypePlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.specialtyTypeLabel)).toEqual(leadsTestData.specialityTypeLabel);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.leadSourceField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.leadSourcePlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.leadSourceLabel)).toEqual(leadsTestData.leadSourceLabel);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.dateRangeField)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.dateRangePlaceholder)).toBe(true);
      expect(await leadsPage.verifyTextForElementInSearchCriteria(leadsPage.dateRangeLabel)).toEqual(leadsTestData.dateRangeLabel);
  });

  it('Verify the buttons on Search Filter section after landing on Leads.', async function ()
  {
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.searchButton)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.columnSelectionButton)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.clearButton)).toBe(true);
      expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.saveFilterButton)).toBe(true);
  });

  it("Validate date range field", async function ()
  {
    await leadsPage.clickOnCalendar();
    expect(await leadsPage.validateDateRangeField()).toEqual(date);
    expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.monthToDate)).toBe(true);
    expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.previousMonth)).toBe(true);
    expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.quarterToDate)).toBe(true);
    expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.yearToDate)).toBe(true);
    expect(await leadsPage.isVisibleElementsInSearchCriteria(leadsPage.previousYear)).toBe(true);
    await leadsPage.clickOnCalendar();
  });

  it('Validate no data screen for search', async function ()
  {
    await leadsPage.enterNoDataSearchCriteria();
    await leadsPage.clickSearchButton();
    expect(await leadsPage.validateNoDataResult()).toBe(true);
  });

  it('Validate the clear button functionality', async function ()
  {
      expect(await leadsPage.validateTheVisibilityOfClearButton()).toBe(true);
      await leadsPage.clickClearButton();
  });

  it('validate Column Selection modal header', async function ()
  {
      await leadsPage.clickColumnSelectionButton();
      expect(await leadsPage.verifyHeaderText()).toEqual(leadsTestData.columnSelectionHeader);
  });

  it('Validate the added and then Delete the same column', async function ()
  {
      await leadsPage.searchColumnToBeAdded();
      await leadsPage.clickApplyButton();
      await leadsPage.clickColumnSelectionButton();
      expect(await leadsPage.validateAddedColumn()).toBe(true);
      await leadsPage.clickDeleteButton();
      await leadsPage.clickApplyButton();
  });

  it('Validate Pagination and row Count on Lead Page', async function ()
  {
    expect(await leadsPage.validatePaginationOnPage()).toBe(true);
  });

  it('Validate Lead row Count on Page', async function ()
  {
    expect(await leadsPage.validateLeadRowCount()).toEqual(expectedRowCount);
  });

  it('Validate by changing page size  for Lead record', async function ()
  {
    await leadsPage.validateChangingPageSize();
    expect(await leadsPage.validateLeadRowCountAfterPageSizeChange()).toEqual(expectedRowCountAfterPageSizeChange);
  });

  it('Validate adding a new Filter', async function ()
  {
    await leadsPage.enterDataSearchCriteria();
    await leadsPage.clickSaveFilterButton();
    await leadsPage.enterFilterNameInModal();
    expect(await leadsPage.validateSaveFilterSuccessMessage()).toBe(true);
  });
  it('Validate editing a new Filter', async function ()
  {
    await leadsPage.validateEditingFilter();
    await leadsPage.validateUpdatingFilterMessage();
    expect(await leadsPage.validateSaveFilterSuccessMessage()).toBe(true);
  });

  it('Validate Deleting a  Filter', async function ()
  {
    await leadsPage.validateDeletingFilter();
    expect(await leadsPage.validateDeletedFilterNotToBeVisible()).toBe(false);
  });

  it('Validate navigating to new Lead Page', async function ()
  {
    expect(await leadsPage.validateNewLeadTab()).toBe(true);
  });
  it('Validate fields on new lead Page', async function ()
  {
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadId)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadAllegationCategoryDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadDatasetDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadLOBDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadSourceDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadStatusDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadPayerStateDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadProviderNPI)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadSpecialityTypeDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadIdSubmitButton)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadIdCancelButton)).toBe(true);
  });
  it('Validate success message on creating a lead', async function ()
  {
    await leadsPage.getLeadId();
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadAllegationCategoryDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadDatasetDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadLOBDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadSourceDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadStatusDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadPayerStateDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.enterLastNameDetail();
    await leadsPage.enterNPIDetail();
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadSpecialityTypeDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickSubmitButtonOnNewLeadTab();
    expect(await leadsPage.validateSaveFilterSuccessMessage()).toBe(true);
    
  });
  it('Validate user redirect to case tab when user clicks on convert to case and delete case', async function ()
  {
    await leadsPage.clickConvertToCaseButtonButton();
    expect(await leadsPage.validateCaseTab()).toBe(true);
    await leadsPage.deleteCase();
    await menuoptionsPage.clickOnLeads();
    expect(await leadsPage.isVisibleHeader()).toEqual(leadsTestData.headerValue);
  });
 it('Validate deleting the new Lead which was created', async function ()
  {
    await leadsPage.openLead();
    await leadsPage.deleteLeadCreated();
    expect(await leadsPage.validateDeleteSuccessMessage()).toBe(true);
  });

  it('Validate fields of a new lead of Member Type', async function ()
  {    
    await leadsPage.validateNewLeadTab();
    await leadsPage.selectMemberTypeOnLeadsPage();
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadId)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadAllegationCategoryDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.memberLeadDatasetDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadLOBDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadSourceDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadStatusDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadPayerStateDropdown)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.memberName)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadIdSubmitButton)).toBe(true);
    expect(await leadsPage.isVisibleFieldsONewLeadTab(leadsPage.newLeadIdCancelButton)).toBe(true);
  });
  it('Validate creating new lead of member Type', async function ()
  {
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadAllegationCategoryDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.memberLeadDatasetDropdown);
    await leadsPage.selectDatasetDropdownValueForMemberType();
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadLOBDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadSourceDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadStatusDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.clickDropdownOnNewLeadTab(leadsPage.newLeadPayerStateDropdown);
    await leadsPage.selectDropdownValue(leadsTestData.dropdownValue);
    await leadsPage.enterMemberLastNameDetail();
    await leadsPage.enterMemberNumber();
    await leadsPage.clickSubmitButtonOnNewLeadTab();
    expect(await leadsPage.validateDeleteSuccessMessage()).toBe(true);
  });
  it('Validate  deleting the member type new Lead which was created', async function ()
  {
    await leadsPage.deleteLeadCreated();
    expect(await leadsPage.validateDeleteSuccessMessageForMemberTypeLead()).toBe(true);
  });
});