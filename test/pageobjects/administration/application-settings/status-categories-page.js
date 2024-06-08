import commonFunctions from "../../../../utilities/common-utilities";

class StatusCategoriesPage { 
    get statusCategoryHeader() {
        return $("//span[@queryparamshandling='merge']");
    }
    get categoryTab() {
        return $("//span[normalize-space()='Category']");
    }
    get headerLabel() {
        return $("//div[contains(text(),'This section is for mapping')]");
    }
    get header() {
        return $("//div[@class='not-scroll']//div[1]");
    }
    get headerSubText() {
        return $("//div[@class='not-scroll']//div[2]");
    }
    get searchCategory() {
        return $("//input[@placeholder='Search Categories']");
    }
    get noDataImage() {
        return $("//div[@class='no-data-img']");
    }
    get noDataMessage() {
        return $("//div[contains(@class,'no-data-found')]//h3");
    }
    get totalCategories() {
        return $$("//ul[@class='scroller']//li//div[@class='group-list-item-list']");
    }
    get firstCategoryOrStatus() {
        return $("//ul[@class='scroller']//li[1]//div[@class='group-list-item-list'][1]");
    }
    get unassignedTab() {
        return $("//li[normalize-space()='Unassigned']");
    }
    get assignedTab() {
        return $("//li[normalize-space()='Assigned']");
    }
    get allTab() {
        return $("(//ul[@class='selection-tabs']//li)[3]");
    }
    get searchStatuses() {
        return $("//input[@placeholder='Search Statuses']");
    }
    get statusesOrCategoriesListed() {
        return $$("//ul[@class='check-option scroller ng-star-inserted']/li/label")
    }
    get countOnUnassignedTab() {
        return $$("//ul[@class='check-option scroller']/li/label");
    }
    get selectAllCheckbox() {
        return $("//div[@role='checkbox']");
    }
    get assignedSelectedStatusesButton() {
        return $("//span[normalize-space()='Assign Selected Statuses']");
    }
    get viewSelected() {
        return $("//span[contains(text(), 'View Selected')]");
    }
    get searchCategoryClear() {
        return $("//span[contains(@class, 'icon-cross')]");
    }
    get firstStatusOrCategory() {
        return $("//ul[contains(@class,'check-option scroller')]/li[1]/label[1]");
    }
    get anotherSecondStatus() {
        return $("//ul[@class='check-option scroller ng-star-inserted']/li[2]/label[1]");
    }
    get activeSelectAllCheckbox() {
        return $("//div[@class='p-checkbox-box p-highlight']");
    }
    get viewAllHyperlink() {
        return $("//span[normalize-space()='View All']");
    }
    get firstCategoryAssignedInfo() {
        return $("(//app-data-container[@selectionview='vertical']//li//span)[1]")
    }
    get unassignSelectedButton() {
        return $("//span[normalize-space()='Unassign Selected Statuses']");
    }
    get confirmationHeader() {
        return $("//div[normalize-space()='Confirmation Required']");
    }
    get confirmationText() {
        return $("//span[normalize-space()='Are you sure you want to proceed?']");
    }
    get confirmationYesButton() {
        return $("//body//p-dynamicdialog//button[1]");
    }
    get confirmationCancelButton() {
        return $("//div[normalize-space()='Cancel']");
    }
    get firstStatusAfterAssignment() {
        return $("(//ul[@class='check-option scroller ng-star-inserted']//li//label[@class='checkbox-label'])[1]");
    }
    get secondStatusAfterAssignment() {
        return $("//ul[@class='check-option scroller ng-star-inserted']/li[2]/label")
    }
    get assignedLabelInAllTab() {
        return $("(//span[@class='label']//span[@class='pre-assigned ng-star-inserted'])[1]");
    }
    get unassignedStatusInAllTab() {
        return $("(//ul[@class='check-option scroller ng-star-inserted']//li//span[@class='pre-assigned ng-star-inserted'])[3]")
    }
    get searchResultsOnSearchStatus() {
        return $$("//ul[@class='check-option scroller ng-star-inserted']/li/label");
    }
    get removeAssignedButton() {
        return $("(//span[contains(text(),'Remove')])[1]");
    }
    get validationMessage() {
        return $("//div[contains(text(),'Please select at')]");
    }
    get unassignValidationMessage() {
        return $("//div[normalize-space()='Please select at least one Status to unassign']");
    }
    //Status Tab Elements Xpath
    get statusTab() {
        return $("//span[normalize-space()='Status']");
    }
    get searchStatus() {
        return $("//input[@placeholder='Search Statuses']");
    }
    get searchCategories() {
        return $("//input[@placeholder='Search Reporting Categories']");
    }
    get assignCategoryToStatusButton() {
        return $("//span[normalize-space()='Assign Selected Categories']");
    }
    get unassignSelectedCategoriesButton() {
        return $("//span[normalize-space()='Unassign Selected Categories']");
    }
    get unassignedCategoryInAllTab() {
        return $("(//ul[@class='check-option scroller']//li//span[@class='label'])[3]")
    }
    get searchedCategoryLabel() {
        return $("//label[@class='checkbox-label']");
    }
    get appealUpheldStatus() {
        return $("//span[normalize-space()='1st Appeal Upheld']");
    }
    get categoryResults() {
        return $$("//label[@class='checkbox-label']");
    }

    //FUNCTIONS
    async selectCategoryWhichHasNoAssignedStatus() {
        try {
            let i;
            var totalListedCategories = await this.totalCategories.length;
            for (i = 1; i <= totalListedCategories; i++) {
                var assignedStatusesLabel = await commonFunctions.getElementText($("(//app-data-container[@selectionview='vertical']//li//span)[" + i + "]"));
                const countOfStatuses = await assignedStatusesLabel.split(" ");
                if (countOfStatuses[0] == "0") {
                    break;
                } else {
                    continue;
                }
            }
            return i;
        } catch (error) {
            fail("Failed due to exceeption " + error);
        }
    }
    async getCountFromViewSelectedInfo() {
        try {
            var viewSelectedInfo = await commonFunctions.getElementText(this.viewSelected);
            var viewSelectedCount = await viewSelectedInfo.split("(");
            var countText = await viewSelectedCount[1].toString();
            var finalCount = await countText.split(")");
            return parseInt(finalCount[0]);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async assignedStatusOrCategoryCount() {
        try {
            var countInfo = await commonFunctions.getElementText(this.firstCategoryAssignedInfo);
            const countFromInfo = await countInfo.split(" ");
            return parseInt(countFromInfo);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
export default new StatusCategoriesPage();