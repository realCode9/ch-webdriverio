class AssignmentHistoryPage {
    get historyTab() {
        return $("//a[@id='assignmentHistory']");
    }
    get tabSelectionDropdown() {
        return $("(//div[@class='ng-select-container ng-has-value'])[1]")
    }
    get dropdownOptions() {
        return $$("//div[@role='option']");
    }
    get defaultSelectedDropdownValue() {
        return $("//span[@class='ng-value-label'][normalize-space()='Main']");
    }
    get mainTabHistoryTableHeader() {
        return $$("(//div[@role='tabpanel'])[1]//th//div[@class='table-header-title']");
    }
    get pageSize() {
        return $("//div[@class='page-size']");
    }
    get pagination() {
        return $("//ul[@class='pagination pagination-sm']");
    }
    get spinner() {
        return $("//img[@alt='Spinner']");
    }
    get ruleNameColumnHeader() {
        return $("//div[contains(text(),'Rule Name')]");
    }
    get firstRowInventoryType() {
        return $("//div[@id='assignmentHistory-panel']//tbody//tr[3]//td[3]");
    }
    get firstRowComparisonViewLink() {
        return $("//div[@id='assignmentHistory-panel']//tbody//tr[1]//td[6]")
    }
    get thirdRowComparisonViewLink() {
        return $("//div[@id='assignmentHistory-panel']//tbody//tr[3]//td[6]")
    }
    get clinicalRulesHeader() {
        return $("//span[normalize-space()='Clinical Rules']");
    }
    get clinicalRulesCloseButton() {
        return $("//button[@id='close-btn']");
    }
    get actionColumnHeader() {
        return $("//div[contains(text(),'Action')]");
    }
    get inventoryTypeFromClinicalRules() {
        return $("(//table[@class = 'primary-data']//tr[2]//td[1])[1]");
    }
    get statusesOnClinicalRules() {
        return $$("//div[@class='terminology']//span");
    }
    get previousValueText() {
        return $("//span[normalize-space()='Rule Created. No previous value available.']");
    }
    get newValueText() {
        return $("//span[normalize-space()='Rule Deleted. No current value available.']")
    }
    get dataAndTimeColumnData() {
        return $$("//div[@id='assignmentHistory-panel']//tbody//tr//td[5]");
    }
}
export default new AssignmentHistoryPage();