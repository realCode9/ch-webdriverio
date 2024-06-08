import Page from "../../page";

class NoteTemplatesPage extends Page {
    get noteTemplatesListScreen() {
        return $("//div[@class='header-txt']");
    }
    get createNoteTemplateButton() {
        return $("//*[text()='Create Note Template']");
    }
    get nameField() {
        return $("//input[@name='name']");
    }
    get datasetField() {
        return $("(//*[@id='dataset']/div/div)[1]");
    }
    get noteTypeField() {
        return $("#app-code-list-dropdown-Note-Types");
    }
    get noteCommentLocationField() {
        return $("//*[@id='app-code-list-dropdown-Note/Comment-Location']");
    }
    get teamsField() {
        return $("//*[@class='line-dropdown ng-select-multiple ng-select-searchable ng-select-clearable ng-select ng-untouched ng-pristine ng-valid']");
    }
    get prepayCheckbox() {
        return $("(//*[@class='p-checkbox p-component'])[1]");
    }
    get postpayCheckbox() {
        return $("(//*[@class='p-checkbox p-component'])[2]");
    }
    get searchButton() {
        return $("//*[@id='SearchForm']/button");
    }
    get clearButton() {
        return $("//*[@id='ClearForm']/button");
    }
    get noteTemplateScreen() {
        return $("//*[@class='default-border header']/span");
    }
    get noteField() {
        return $("#note");
    }
    get auditTypeField() {
        return $("//*[@id='app-code-list-dropdown-Service-Lines']");
    }
    get saveButton() {
        return $("//*[text()='Save']");
    }
    get cancelButton() {
        return $("//*[text()='Cancel']");
    }
    get nameFieldInlineError() {
        return $("//input[@name='name']/following-sibling::div");
    }
    get noteFieldInlineError() {
        return $("//input[@id='note']/following-sibling::div");
    }
    get noteTypeFieldInlineError() {
        return $("//*[@name='Note Types']/following-sibling::div");
    }
    get noteCommentLocationFieldInlineError() {
        return $("//*[@name='type']/following-sibling::div");
    }
    get auditTypeFieldInlineError() {
        return $("//*[@name='auditTypes']/following-sibling::div");
    }
    get name() {
        return $("(//tbody//tr//td)[1]");
    }
    get pageSizeInput() {
        return $("//input[@placeholder=' ']");
    }
    get pagination() {
        return $("//ul[@class = 'pagination pagination-sm']");
    }
    get totalSearchResultRows() {
        return $$("//*[@class='freezed-table-wrapper']/table/tbody/tr");
    }
    get noSearchResults() {
        return $("//div[@class='title']");
    }
    get historyTab() {
        return $("//*[@class='ibox-content']//button[@class='nav-link']");
    }
    get detailsTab() {
        return $("//*[@class='ibox-content']//button[@class='nav-link']");
    }
    get historyTable() {
        return $("//*[@class='note-template-history']");
    }
    get historyColumnHeaders() {
        return $$("//*[@class='note-template-history']//th")
    }
    get noteTemplateHistoryDate() {
        return $("(//*[@class='p-element p-datatable-tbody']/tr/td[1])[1]")
    }
    get deleteButton() {
        return $("//span[@class='icon-delete']");
    }
    get confirmationModal() {
        return $("//div[@class='popup']");
    }
    get confirmationModalHeaderText() {
        return $("//div[@class='title']");
    }
    get confirmationModalText() {
        return $("//div[@class='popup-data']");
    }
    get confirmationModalYesButton() {
        return $("//div[contains(text(),'Yes')]");
    }
    get confirmationModalCancelButton() {
        return $("//div[contains(text(),'Cancel')]");
    }
    get loader() {
        return $("//*[@id='pareo-spinner']/div/div");
    }
    get auditTypeColumnFilter() {
        return $("//div[@class='table-filter-container']/span");
    }
    get auditType() {
        return $("(//tbody//tr//td)[5]");
    }
    get appliedColumnFilterIcon() {
        return $("//*[@class='table-filter-container']/span");
    }
    get columnFilterSection() {
        return $("//div[@class='table-filter-wrapper arrow_box']");
    }
    get columnFilterSearchBox() {
        return $("(//div[@class='table-filter-wrapper arrow_box']//input)[1]");
    }
    get columnFilterOptions() {
        return $$("//*[@class='column-filter-table']//label");
    }
    get columnFilterCheckBox() {
        return $$("//*[@class='column-filter-table']//*[@class='p-checkbox-box']");
    }
    get columnFilterApplyButton() {
        return $("//div[@class='table-filter-wrapper arrow_box']/div[3]/div/*[text()='Apply']");
    }
    get columnFilterCancelButton() {
        return $("//div[@class='table-filter-wrapper arrow_box']/div[3]/div/*[text()='Cancel']");
    }
    get columnFilterClearButton() {
        return $("//div[@class='table-filter-wrapper arrow_box']/div[3]/*[text()='Clear']");
    }
    get errorToaster() {
        return $("#toast-container");
    }
    get auditSearchNoteTypeField() {
        return $("(//*[@id='app-code-list-dropdown-Note-Types'])[1]");
    }
    get auditSearchNoteTemplateField() {
        return $("(//*[@id='note-templates-dropdown-id'])[1]");
    }
    get auditSearchNoteTemplateFieldValues() {
        return $$("//div[@class='ng-dropdown-panel-items scroll-host']//span");
    }

    async verifyDataInNoteTemplateField(name) {
        try {
            let auditSearchNoteTemplateFieldCount = await this.auditSearchNoteTemplateFieldValues.length;
            for (let i = 0; i < auditSearchNoteTemplateFieldCount; i++) {
                if (await this.auditSearchNoteTemplateFieldValues[i].getText() == name) {
                    return true;
                }
            }
            return false;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new NoteTemplatesPage();