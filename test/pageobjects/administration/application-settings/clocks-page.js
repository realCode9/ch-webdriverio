import Page from "../../page";
const mongoose = require('mongoose');
const clocksModel = new mongoose.Schema({ name: String });
const overpaymentsModel = new mongoose.Schema({ clocks:[new mongoose.Schema({clockName:String})]});

class ClocksPage extends Page {

    get clocksHeaderText() {
        return $("//div[@class='header-txt']");
    }
    get newButton() {
        return $("//*[@class='p-element ui-button-raised custom-btn blue-primary p-button p-component']");
    }
    get addOrEditClockText() {
        return $("//div[@class='clock-header']/div");
    }
    get clockNameField() {
        return $("(//*[@id='name'])[2]");
    }
    get clockTypeField() {
        return $("#app-code-list-dropdown-clock-type");
    }
    get auditTypeField() {
        return $("#app-code-list-dropdown-Service-Lines");
    }
    get validStatusField() {
        return $("#valid-statuses");
    }
    get failureStatusField() {
        return $("#failure-status");
    }
    get startDateBasisField() {
        return $("#start-date-basis");
    }
    get isTimerCheckbox() {
        return $("#timer-checkbox");
    }
    get overallCheckbox() {
        return $("#overall");
    }
    get clockStatusToggleButton() {
        return $("#active-inactive-button");
    }
    get daysTypeField() {
        return $("#app-custom-dropdown-Select-Days-Type");
    }
    get timezoneField() {
        return $("//*[@id='app-custom-dropdown-Select-Timezone']/div/div/div[2]/input");
    }
    get totalDaysField() {
        return $("#total-days");
    }
    get warningDaysField() {
        return $("#warning-days");
    }
    get activeStartDateField() {
        return $("#app-date-input-start-date");
    }
    get activeEndDateField() {
        return $("#app-date-input-end-date");
    }
    get hoursTypeRadioButton() {
        return $("//*[@id='hours']/div");
    }
    get totalHoursField() {
        return $("//input[@id='toatl-hours']");
    }
    get warningHoursField() {
        return $("#warning-hours");
    }
    get datasetField() {
        return $("#dataset");
    }
    get lineOfBusinessField() {
        return $("#lob");
    }
    get organizationField() {
        return $("#organization");
    }
    get claimTypeField() {
        return $("#app-code-list-dropdown-Claim-Types");
    }
    get ruleField() {
        return $("#rules");
    }
    get parOrNonParField() {
        return $("#app-custom-dropdown-Select-Type");
    }
    get groupNumberField() {
        return $("#groupNumber");
    }
    get taxIDField() {
        return $("#tax-id");
    }
    get npiField() {
        return $("#npi");
    }
    get providerStateField() {
        return $("#provider-state");
    }
    get memberStateField() {
        return $("#member-state");
    }
    get prepayCheckbox() {
        return $("(//*[@id='prepay-checkbox'])[2]");
    }
    get postpayCheckbox() {
        return $("(//*[@id='postpay-checkbox'])[2]");
    }
    get paidAmountGreaterThanField() {
        return $("#paidAmount");
    }
    get commentsField() {
        return $("#comments");
    }
    get saveButton() {
        return $("//button[@class='button save-btn']");
    }
    get cancelButton() {
        return $("//button[@class='button cancel-btn']");
    }

    // Search Panel Elements
    get clockID() {
        return $("#clock-id");
    }
    get name() {
        return $("(//*[@id='clock-name'])[2]");
    }
    get validStatus() {
        return $("#app-shared-dropdown-Select-Valid-Status");
    }
    get failureStatus() {
        return $("(//*[@id='clock-failure-status'])[2]");
    }
    get startDateBasis() {
        return $("(//*[@id='clock-date'])[2]");
    }
    get clockStatus() {
        return $("(//*[@id='clock-status'])[2]");
    }
    get advancedSearch() {
        return $("//*[@class='icon icon-arrow-right']");
    }
    get dataset() {
        return $("#app-shared-dropdown-Select-Dataset");
    }
    get lineOfBusiness() {
        return $("#app-shared-dropdown-Select-Line-of-Business")
    }
    get auditType() {
        return $("#app-code-list-dropdown-Service-Lines")
    }
    get clockType() {
        return $("#app-code-list-dropdown-clock-type")
    }
    get npi() {
        return $("//*[@formcontrolname='npis']")
    }
    get taxID() {
        return $("//*[@formcontrolname='taxIds']")
    }
    get rule() {
        return $("(//*[@id='queriesType'])[2]")
    }
    get parNonPar() {
        return $("(//*[@id='participationType'])[2]")
    }
    get isTimer() {
        return $("//*[@formcontrolname='isTimer']/p-checkbox/div")
    }
    get overall() {
        return $("//*[@formcontrolname='overall']/p-checkbox/div")
    }
    get memberState() {
        return $("(//*[@id='member-state'])[2]")
    }
    get providerState() {
        return $("(//*[@id='provider-state'])[2]")
    }
    get paymentTiming() {
        return $("//*[@class='form-group checkbox-grp']/label")
    }
    get groupNumber() {
        return $("#groupNumber")
    }
    get organization() {
        return $("#app-shared-dropdown-Select-Organization")
    }
    get hideSearchButton() {
        return $("#app-search-top-panel-hide-show-search");
    }
    get savedFiltersDropdownButton() {
        return $("//button[@id='app-filters-dropdown-saved-filters']");
    }
    get searchButton() {
        return $("#app-search-bottom-panel-search-btn");
    }
    get clearButton() {
        return $("#app-search-bottom-panel-search-clear");
    }
    get errorMessageText() {
        return $("//*[@class='error-txt common-error ng-star-inserted']");
    }
    get noSearchResults() {
        return $("//div[@class='title']");
    }
    get tableRecordCount() {
        return $("//div[@class='count-header']/div");
    }
    get saveFilterButton() {
        return $("#app-save-filter-button-save-filter");
    }
    get saveFilterModalHeader() {
        return $("#modal-basic-title");
    }
    get addNameField() {
        return $("#app-save-filter-button-add-name");
    }
    get filterModalSaveButton() {
        return $("#app-save-filter-button-save");
    }
    get filterModalCancelButton() {
        return $("#app-save-filter-button-cancel");
    }
    get crossIconSavedFiltersDropdown() {
        return $("#app-filters-dropdown-close-btn");
    }
    get savedFilterNameValues() {
        return $$("//div[@class='name-tag single-line-ellipsis']")
    }
    get errorToaster() {
        return $("#toast-container")
    }
    get editFilterIcon() {
        return $("//div[@class='edit icon']");
    }
    get editFilterSaveButton() {
        return $("//span[contains(text(),'Save')]");
    }
    get deleteFilterIcon() {
        return $("//div[@class='delete icon']")
    }
    get deleteFilterModalText() {
        return $("//div[contains(text(),'Are you sure you want to delete this search filter')]");
    }
    get deleteFilterYesButton() {
        return $("//span[contains(text(),'Yes')]");
    }
    get resultTable() {
        return $("(//div[@class='ui-table-scrollable-body']/table/tbody/tr/td)[2]");
    }
    get clockName() {
        return $("(//tbody//tr//td)[2]");
    }
    get pagination() {
        return $("//*[@class='pagination pagination-sm']");
    }
    get auditIdColumnValues() {
        return $$("//div[@class='modal-body']/table/tbody/tr/td[1]");
    }
    get eyeIcon() {
        return $$("//div[@class='modal-body']//button[@class='btn btn-sm btn-primary']");
    }
    get clockSliderButton() {
        return $("#show-clocks-button");
    }
    get sliderClocks() {
        return $$("//*[@id='clock-claim-panel']/div[2]/div/div/div/app-clock-claim-block");
    }
    get historyTab() {
        return $("(//*[@class='p-element p-ripple p-tabview-nav-link'])[2]");
    }
    get detailsTab() {
        return $("(//*[@class='p-element p-ripple p-tabview-nav-link'])[1]");
    }
    get pageSizeInput() {
        return $("//input[@placeholder=' ']");
    }
    get pagination() {
        return $("//ul[@class = 'pagination pagination-sm']");
    }
    get totalSearchResultRows() {
        return $$("//*[@class='ui-table-scrollable-body']/table/tbody/tr");
    }
    get historyTable() {
        return $("//*[@class='app-clock-history']");
    }
    get historyColumnHeaders() {
        return $$("//*[@class='app-clock-history']//th")
    }
    get menuArrow() {
        return $("#minify")
    }
    get clockHistoryDate() {
        return $("(//*[@class='app-clock-history']//tr/td[1])[1]")
    }
    get loader() {
        return $("//*[@id='pareo-spinner']/div/div");
    }
    async clickOnAssociatedAudit(auditId) {
        try {
            let auditIdColumnCount = await this.auditIdColumnValues.length;
            for (let i; i <= auditIdColumnCount; i++) {
                if ((await auditIdColumnValues[i].getText()) == auditId) {
                    await this.eyeIcon[i].waitForClickable();
                    await this.eyeIcon[i].click();
                }
            }
        }
    catch(error) {
        fail("Failed due to exception " + error);
    }
};
    async verifyClockAttached(clockName) {
        try {
            let sliderClockList = await this.sliderClocks;
            for (let i = 0; i < sliderClockList.length; i++) {
                let text = await sliderClockList[i].getText();
                if (text.includes(clockName)) {
                    return true;
                }
            }
            return false;
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async elementNotDisplayed(element) {
        try {
            return await element.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception " + error)
        }
    };
    async verifyDeletingClocks(name) {
        try {
            const ClocksModel = mongoose.model('clocks', clocksModel );
            await ClocksModel.findOneAndDelete({ "name": name });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
    async verifyDeletingClocksFormAudit(name) {
        try {
            const OverpaymentModel = mongoose.model('overpayments', overpaymentsModel );
            await OverpaymentModel.updateMany(
                {'clocks.clockName': name },
                { $pull: { 'clocks':{'clockName': name}}}
              );
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new ClocksPage();