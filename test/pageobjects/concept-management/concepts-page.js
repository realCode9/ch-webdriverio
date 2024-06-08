import Page from "../page";


class ConceptManagementPage extends Page {
    get conceptsHeaderText() {
        return $("//div[@class='header-txt']");
    }
    get createNewConceptButton() {
        return $("//div[@class='buttons']");
    }
    get conceptDetailHeaderText() {
        return $("//div[@class='default-border header']");
    }
    get conceptDetailTabs() {
        return $$("//span[@class='tab-title']");
    }
    get claimsTab() {
        return $("//span[@data-cy='concepts-detail-claims-tab']");
    }
    get conceptName() {
        return $("//div[@id='conceptName']/input");
    }
    get hideSearchButton() {
        return $("#app-search-top-panel-hide-show-search");
    }
    get filterAndSearchButton() {
        return $("#app-search-top-panel-hide-show-search");
    }
    get searchButton() {
        return $("#app-search-bottom-panel-search-btn");
    }
    get columnSelectionButton() {
        return $("(//*[@id='app-search-bottom-panel-column-selection'])[1]");
    }
    get clearButton() {
        return $("#app-search-bottom-panel-search-clear");
    }
    get saveFilterButton() {
        return $("#app-save-filter-button-save-filter");
    }
    get generateExtractButton() {
        return $("#app-csv-extract-csv-extract");
    }
    get savedFiltersDropdownButton() {
        return $("#app-filters-dropdown-saved-filters");
    }
    get savedFiltersDropdown() {
        return $("//div[@class='filter-container']");
    }
    get savedFilterNameValues() {
        return $$("//div[@class='name-tag single-line-ellipsis']");
    }
    get editFilterIcon() {
        return $$("//div[@class='edit icon']");
    }
    get deleteFilterIcon() {
        return $$("//div[@class='delete icon']");
    }
    get editFilterLabel() {
        return $("//div[@class='edit-search']");
    }
    get editSaveButton() {
        return $("//span[contains(text(),'Save')]");
    }
    get editCancelButton() {
        return $("//span[contains(text(),'Cancel')]");
    }
    get deleteYesButton() {
        return $("//button[@class='red-btn']");
    }
    get deleteNoButton() {
        return $("//button[@class='white-btn']");
    }
    get crossIconSavedFiltersDropdown() {
        return $("#app-filters-dropdown-close-btn");
    }
}
module.exports = new ConceptManagementPage();