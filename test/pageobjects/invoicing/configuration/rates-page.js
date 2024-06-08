import Page from "../../page";

class RatesPage extends Page {

  get ratesHeaderText() {
    return $("//div[@class='page-header-wrapper']");
  }
  get configurationTab() {
    return $("//span[contains(text(),' Configuration ')]");
  }
  get historyTab() {
    return $("//span[contains(text(),' History ')]");
  }
  get homePlansField() {
    return $("//*[@id='app-shared-dropdown-Select-multiple-Home-Plan(s)']");
  }
  get organizationField() {
    return $("#app-shared-dropdown-Select-Organization")
  }
  get auditTypeField() {
    return $("#app-code-list-dropdown-Service-Lines")
  }
  get projectCodeField() {
    return $("//ng-select[@id='projects']")
  }
  get feeRateField() {
    return $("//*[@name='feeRate']/input")
  }
  get effectiveDateField() {
    return $("//*[@id='app-date-input-Effective-Date*']")
  }
  get terminationDateField() {
    return $("#app-date-input-Termination-Date")
  }
  get prepayRadioButton() {
    return $("//p-radiobutton[@label='Prepay']");
  }
  get postpayRadioButton() {
    return $("//p-radiobutton[@label='Postpay']");
  }
  get addButton() {
    return $("//*[text()='Add']");
  }
  get clearButton() {
    return $("//*[@class='ghost-blue app-common-button']/button");
  }
  get homePlansFieldInlineError() {
    return $("//*[@class='app-custom-claim-dropdown']/following-sibling::div");
  }
  get organizationFieldInlineError() {
    return $("//*[@class='app-custom-claim-dropdown']/following-sibling::span");
  }
  get auditTypeFieldInlineError() {
    return $("//*[@class='app-code-list-claim-dropdown']/following-sibling::span");
  }
  get feeRateFieldInlineError() {
    return $("//*[@class='multi-selection-grp']/following-sibling::span");
  }
  get paymentTimingFieldInlineError() {
    return $("//*[@class='radio-buttons']/following-sibling::span");
  }
  get effectiveDateFieldInlineError() {
    return $("//*[@label='Effective Date*']/following-sibling::span");
  }
  get pageSizeInput() {
    return $("//input[@placeholder=' ']");
  }
  get pagination() {
    return $("//ul[@class = 'pagination pagination-sm']");
  }
  get totalSearchResultRows() {
    return $$("//*[@class='ui-table-scrollable-body ng-star-inserted']/table/tbody/tr");
  }
  get loader() {
    return $("//*[@id='pareo-spinner']/div/div");
  }
  get errorToaster() {
    return $("#toast-container");
  }
  get configurationTabColumnHeaders() {
    return $$("//*[@id='rate-list-table']//thead/tr/th/div");
  }
  get historyTable() {
    return $("#history-table");
  }
  get historyColumnHeaders() {
    return $$("//*[@id='history-table']/div/div/div/div[1]/div/table/thead/tr/th");
  }
  get historyDate() {
    return $("(//*[@class='ui-table-tbody']/tr/td[7])[1]");
  }
  get rateIDColumnFilter() {
    return $("//div[@class='icon-column-filter']");
  }
  get rateID() {
    return $("(//tbody//tr//td)[3]");
  }
  get appliedColumnFilterIcon() {
    return $("//*[@class='icon-column-filter selected']");
  }
  get columnFilterSection() {
    return $("//div[@class='table-filter-wrapper arrow_box']");
  }
  get columnFilterSearchBox() {
    return $("(//div[@class='table-filter-wrapper arrow_box'])//input");
  }
  get columnFilterOptions() {
    return $$("//div[@class='selection-group ng-star-inserted']//*[@class='ng-star-inserted ui-chkbox-label']");
  }
  get columnFilterCheckBox() {
    return $$("//div[@class='selection-group ng-star-inserted']//*[@class='ui-chkbox ui-widget']");
  }
  get columnFilterApplyButton() {
    return $("//div[contains(text(),'Apply')]");
  }
  get columnFilterCancelButton() {
    return $("//div[contains(text(),'Cancel')]");
  }
  get columnFilterClearButton() {
    return $("//div[contains(text(),'Clear')]");
  }
  get actionIcon() {
    return $("//*[@class='icons icon-actions']");
  }
  get edit() {
    return $("//div[@class='dropdown']//button[contains(text(),'Edit')]");
  }
  get editHeaderText() {
    return $("//div[@class='manage-rates-wrapper']/div");
  }
  get updateButton() {
    return $("//*[text()='Update']");
  }
  get cancelButton() {
    return $("//*[text()='Cancel']");
  }
  get delete() {
    return $("//div[@class='dropdown']//button[contains(text(),'Delete')]");
  }
  get idColumnFilter() {
    return $("//thead[@class='p-datatable-thead']//th[1]//div[@class='icon-column-filter']");
  }
  get homePlanColumnFilter() {
    return $("//thead[@class='p-datatable-thead']//th[2]//div[@class='icon-column-filter']");
  }
  get orgColumnFilter() {
    return $("//thead[@class='p-datatable-thead']//th[3]//div[@class='icon-column-filter']");
  }
  get auditTypeColumnFilter() {
    return $("//thead[@class='p-datatable-thead']//th[4]//div[@class='icon-column-filter']");
  }
  get projectCodeColumnFilter() {
    return $("//thead[@class='p-datatable-thead']//th[5]//div[@class='icon-column-filter']");
  }
  get homePlan() {
    return $("(//tbody//tr//td)[2]");
  }
  get confirmationModal() {
    return $("//div[@class='popup']");
  }
  get confirmationModalHeaderText() {
    return $("//div[@class='title']");
  }
  get confirmationModalYesButton() {
    return $("//div[contains(text(),'Yes')]");
  }
  get confirmationModalCancelButton() {
    return $("//div[contains(text(),'Cancel')]");
  }
  async getTodayDate() {
    try {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let year = today.getFullYear();
      let yy = year.toString().substring(2, 4);
      if (mm < 10) {
        mm = "0" + mm;
      }
      return (today = mm + "/" + dd + "/" + yy);
    } catch (error) {
      fail("Error occurred:" + error);
    }
  }
}
module.exports = new RatesPage();