import Page from "../../page";
const mongoose = require('mongoose');

class CodeListsPage extends Page {

    get codeListScreen() {
        return $("//div[@class='default-border header']/span");
    }
    get newButton() {
        return $("//button[text()='New']");
    }
    get nameField() {
        return $("//input[@name='name']");
    }
    get datasetField() {
        return $("#dataset");
    }
    get auditTypesField() {
        return $("#app-code-list-dropdown-Service-Lines");
    }
    get codeDescription() {
        return $("#clistDetailCodeDescription");
    }
    get codeIdentifier() {
        return $("#clistDetailCodeIdentifier");
    }
    get addButton() {
        return $("#clistDetailAddNewCode");
    }
    get cancelButton() {
        return $("#clistDetailCancel");
    }
    get saveButton() {
        return $("#clistDetailSave");
    }
    get searchCodeListField() {
        return $("//div[@id='codelistSearchBox']/input");
    }
    get deleteCodeButton() {
        return $("(//button[contains(@class,'btn btn-sm btn-danger')])[1]");
    }
    get name() {
        return $("(//tbody//tr//td)[1]");
    }
    get noDataScreen() {
        return $("//div[text()='No Data']");
    }
    get eyeIcon() {
        return $("//td[@id='viewCodeListDetail0']");
    }
    get historyTab() {
        return $("//button[text()='History']");
    }
    get pagination() {
        return $("//*[@class='pagination pagination-sm']");
    }
    get totalSearchResultRows() {
        return $$("//tr[@class='ng-star-inserted']");
    }
    get historyTable() {
        return $("#clistDetailHistoryTable");
    }
    get historyColumnHeaders() {
        return $$("//*[@id='clistDetailHistoryTable']//th");
    }
    get codeListHistoryDate() {
        return $("(//*[@class='p-element p-datatable-tbody']/tr/td[3])[1]");
    }
    get backButton() {
        return $("#clistDetailHistoryBackButton");
    }

    async deletingCodeList(name) {
        try {
            const MyCodeListModel = mongoose.model('codelists', new mongoose.Schema({ name: String }));
            await MyCodeListModel.deleteOne({ "codeName": '' + name + '' });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new CodeListsPage();