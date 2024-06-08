class UpdateIDDetailsPage {
    get updateIDInHeader() {
        return $("(//span[@class='upperCase'])[1]");
    }
    get searchAuditIdBox() {
        return $("(//input[@placeholder='Search Audit ID'])[1]");
    }
    get auditStatusDropdown() {
        return $("(//div[@class='ng-value-container'])[1]");
    }
    get copyIdsButton() {
        return $("(//span[@class='text'])[1]");
    }
    get pagination() {
        return $("(//div[@class='page-size'])[1]");
    }
    get pageNumberOption() {
        return $("(//ul[@class='pagination pagination-sm'])[1]");
    }
    get bottomInfo() {
        return $("(//div[@class='bottom-info'])[1]");
    }
    get tableHeader() {
        return $$("//table//thead//th[@id = 'claimListContainer']");
    }
    get statusDropdownValues() {
        return $$("//div[@role = 'option']");
    }
    get headerCheckBox() {
        return $("(//div[@role='checkbox'])[1]");
    }
    get bodyRowCheckBoxes() {
        return $$("//tbody//tr//td//div//p-checkbox");
    }
    get firstAuditID() {
        return $("(//table//tbody//tr[1])[1]//td[2]");
    }
    get pageSize() {
        return $("//div[@class = 'page-size']");
    }
    get pageNavigation() {
        return $("(//ul[@class='pagination pagination-sm'])[1]");
    }
    get bottomInfoLabels() {
        return $$("//div[@class = 'group']//span[@class = 'grey-label-bold']");
    }
    get bottomInfoUsername() {
        return $("(//div[@class = 'group']//span)[2]");
    }
    get auditIdColumn() {
        return $("//div[contains(text(),'Audit ID')]");
    }
    get auditIdColumnSort() {
        return $("(//span[@class='pi pi-fw pi-sort-alt'])[1]");
    }
    get auditIdColumnData() {
        return $$("//tbody//tr//td[@class = 'freeze-col-1']");
    }
    get auditIdColumnAscendingSortIcon() {
        return $("(//span[@class='pi pi-fw pi-sort-amount-down'])[1]");
    }
    get claimColumnSort() {
        return $("(//span[@class='pi pi-fw pi-sort-alt'])[2]");
    }
    get claimColumnData() {
        return $$("//tbody//tr//td[@class = 'freeze-col-2']");
    }
    get claimColumnAscendingSortIcon() {
        return $("(//span[@class='pi pi-fw pi-sort-amount-down'])[2]");
    }
    get amountColumnSort() {
        return $("(//span[@class='pi pi-fw pi-sort-alt'])[5]");
    }
    get amountColumnData() {
        return $$("//tbody//tr//td[6]");
    }
    get amountColumnAscendingSortIcon() {
        return $("(//span[@class='pi pi-fw pi-sort-amount-down'])[5]");
    }
    get pageNumberOptionOnUpdateIdDetailsLeftArrow() {
        return $("(//li[@class='page-item disabled'])[1]");
    }
    get paginationTextOnUpdateIdDetailsPage() {
        return $("//div[@class='page-size']//span[contains(text(), 'of')]");
    }
    get paginationInputBox() {
        return $("//div//app-input-box//input");
    }
    get totalAuditsListed() {
        return $$("//table[@aria-label = 'Update Audit Results']//tbody//tr");
    }
    get loader() {
        return $("//div[@class='loader']");
    }
    get paginationError() {
        return $("(//div[@class='inline-error'])[1]");
    }


    //Functions
    async getUpdateIDInHeader() {
        try {
            await this.updateIDInHeader.waitForDisplayed();
            return this.updateIDInHeader.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async isFieldsVisibleOnUpdateIdDetails(element) {
        try {
            await element.waitForDisplayed();
            return await element.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async isColumnSortable() {
        try {
            for (let i = 1; i <= 5; i++) {
                let column = $("(//table//thead//th[@id = 'claimListContainer']//span[@class= 'sorting'])[" + i + "]");
                let classes = await column.getAttribute('class');
                if (await classes.includes("sorting")) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (error) {
            fail("Failed due to error" + error);
        }
    }
    async clickStatusDropdown() {
        try {
            await this.auditStatusDropdown.waitForDisplayed();
            await this.auditStatusDropdown.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async isCheckBoxClickable(element) {
        try {
            await element.waitForDisplayed();
            return await element.isClickable();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async isRowCheckBoxClickable() {
        try {
            let rowLength = await this.bodyRowCheckBoxes.length;
            for (let i = 1; i <= rowLength; i++) {
                let rowCheckbox = await $("(//tbody//tr//td//div//p-checkbox)[" + i + "]");
                await rowCheckbox.waitForDisplayed();
                let isCheckboxClickable = await rowCheckbox.isClickable();
                if (isCheckboxClickable == true) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSelectAllAuditsCheckbox() {
        try {
            await this.headerCheckBox.waitForDisplayed();
            await this.headerCheckBox.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickCopyIDsButton() {
        try {
            await this.copyIdsButton.waitForDisplayed();
            await this.copyIdsButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterAuditIdToSearch() {
        try {
            await this.searchAuditIdBox.waitForDisplayed();
            let auditID = await this.firstAuditID.getText();
            await this.searchAuditIdBox.setValue(auditID);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getFirstAuditIdFromTable() {
        try {
            await this.searchAuditIdBox.waitForDisplayed();
            return await this.firstAuditID.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async isPageSizeDisplayed() {
        try {
            await this.pageSize.waitForDisplayed();
            return await this.pageSize.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async ispageNavigationDisplayed() {
        try {
            await this.pageNavigation.waitForDisplayed();
            return await this.pageNavigation.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getBottomInfoUsernameText() {
        try {
            await this.bottomInfoUsername.waitForDisplayed();
            return await this.bottomInfoUsername.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickElementToSort(element) {
        try {
            await element.waitForDisplayed();
            await element.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getTotalAuditsListed(index) {
        let paginationTextValue = await this.paginationTextOnUpdateIdDetailsPage.getText();
        let paginationTextsArray = [];
        paginationTextsArray = await paginationTextValue.split(" ");
        return paginationTextsArray[index];
    }
    async enterIntoPaginationBox(pageSizeToEnter) {
        try {
            await this.paginationInputBox.waitForClickable();
            const selectorValue = await this.paginationInputBox.getValue();
            const backSpaces = new Array(selectorValue.length).fill('Backspace');
            await this.paginationInputBox.addValue(backSpaces);
            await this.paginationInputBox.addValue(pageSizeToEnter);
            await browser.keys('Enter');
            await this.loader.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to error" + error);
        }
    }
    async actualAuditsCount() {
        try {
            let auditsCount = await this.totalAuditsListed.length;
            return auditsCount;
        } catch (error) {
            fail("Failed due to error" + error);
        }
    }
    async getPaginationErrorText() {
        try {
            await this.paginationError.waitForDisplayed();
            return await this.paginationError.getText();
        } catch (error) {
            fail("Failed due to error" + error);
        }
    }

}

module.exports = new UpdateIDDetailsPage();