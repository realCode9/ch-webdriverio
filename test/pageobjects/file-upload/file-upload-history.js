import commonFunctions from "../../../utilities/common-utilities";
import loginTestData from "../../../resources/login/login-test-data.json";
import fileUploadTestData from "../../../resources/file-upload/file-upload-test-data.json";

class UploadHistoryPage {
    get historyTabHeader() {
        return $("(//span[@class='default-color h6 title'])[1]");
    }
    get fileTypeLabel() {
        return $("(//label[normalize-space()='File Type'])[1]");
    }
    get usernameLabel() {
        return $("//label[normalize-space()='Username']");
    }
    get organizationLabel() {
        return $("//label[normalize-space()='Organization']");
    }
    get statusLabel() {
        return $("//label[normalize-space()='Status']");
    }
    get fileNameLabel() {
        return $("//label[normalize-space()='File Name']");
    }
    get uploadDateLabel() {
        return $("//label[normalize-space()='Upload Date']");
    }
    get fileTypeDropdown() {
        return $("(//div[@role='combobox'])[1]");
    }
    get usernameInput() {
        return $("(//input[@placeholder='Search User'])[1]");
    }
    get organizationDropdown() {
        return $("(//div[@role='combobox'])[2]");
    }
    get statusDropdown() {
        return $("(//div[@role='combobox'])[3]");
    }
    get fileNameInput() {
        return $("//input[@placeholder='Search by File Type or File Name']");
    }
    get uploadDateInput() {
        return $("//input[@id='app-date-range-input-Upload-Date']");
    }
    get searchButton() {
        return $("//button[@class='btn btn-sm btn-primary btn-sm']");
    }
    get clearButton() {
        return $("//button[normalize-space()='Clear']");
    }
    get uploadHistoryColumnHeaders() {
        return $$("//thead//tr[@class = 'sticky-header']/th");
    }
    get loader() {
        return $("//div[@class='loader']");
    }
    get fileTypeDropdownValues() {
        return $$("//div//ng-select//div[@role = 'option']");
    }
    get statusDropdownFieldValues() {
        return $$("//ng-select[@id = 'app-custom-dropdown-Search-Status']//div[@role = 'option']");
    }
    get organizationDropdownValues() {
        return $$("//ng-select[@id = 'organization']//div[@role = 'option']");
    }
    get dateColumnData() {
        return $$("//div//table//tbody//tr//td[4]");
    }
    get uploadDateColumnHeader() {
        return $("//th[normalize-space()='Upload Date']");
    }
    get userColumnHeader() {
        return $("//th[normalize-space()='User']");
    }
    get userColumnData() {
        return $$("//div//table/tbody//tr//td[5]");
    }
    get statusColumnHeader() {
        return $("//th[normalize-space()='Status']");
    }
    get statusColumnData() {
        return $$("//div//table/tbody//tr//td[6]");
    }
    get fileTypeColumnHeader() {
        return $("//th[normalize-space()='File Type']");
    }
    get fileTypeColumnData() {
        return $$("//div[@class = 'ui-table-scrollable-body']//table//tbody//tr//td[2]");
    }
    get fileNameColumnHeader() {
        return $("//th[normalize-space()='File Name']");
    }
    get fileNameColumnData() {
        return $$("//div[@class = 'ui-table-scrollable-view']//tbody//tr//td[1]")
    }
    get noDataImage() {
        return $("//div[@class='img']");
    }
    get downloadButtonForFirstRow() {
        return $("//tbody/tr[1]/td[9]/app-download-button[1]/div[1]/button[1]");
    }
    get downloadFileButtonSpinner() {
        return $("(//*[name()='svg'][@class='svg-inline--fa fa-spinner-third fa-w-16 fa-spin fa-2x'])[1]");
    }
    get firstRowFileName() {
        return $("(//div[@class = 'p-datatable-wrapper']//tr[1]/td[1])[1]");
    }
    get recordCountLabel() {
        return $("//span[@class='m-t-sm']");
    }
    get firstRowFileType() {
        return $("//tbody/tr[1]/td[2]");
    }
    //Functions
    async waitForDataToBeDisplayed() {
        try {
            await this.loader.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async isColumnSortable() {
        try {
            for (let i = 1; i <= 7; i++) {
                let columnHeader = $("(//thead[@class='p-datatable-thead']//tr)[1]//th[" + i + "]");
                let classes = await columnHeader.getAttribute('class');
                if (await classes.includes("p-sortable-column")) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getMultiElementDataAndSort(multiElement) {
        try {
            let multiElementData = await multiElement.map(elem => elem.getText());
            let sortedData = (multiElementData).sort(data => data);
            return sortedData.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async isDownloadButtonEnabled() {
        try {
            await this.downloadButtonForFirstRow.waitForDisplayed();
            return this.downloadButtonForFirstRow.isEnabled();
        } catch (error) {
            fail("Failed due to exception " + error)
        }
    }
    async validateDownloadFile() {
        try {
            await this.downloadButtonForFirstRow.click();
            await this.downloadFileButtonSpinner.waitForDisplayed({ reverse: true });

            const file = "../claris-qa-automation/tempDownloads/" + await this.firstRowFileName.getText();

            if (commonFunctions.checkIfFileExists(file)) {
                return true;
            }
        } catch (error) {
            fail("Failed due to exception" + error);
        }
    }
    async getTotalRecordCount() {
        try {
            await this.recordCountLabel.waitForDisplayed();
            var countText = await this.recordCountLabel.getText();
            var totalCount = countText.substring(15, 20);
            return totalCount;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async selectFileTypeAndSearch() {
        try {
            await this.fileTypeDropdown.waitForClickable();
            await this.fileTypeDropdown.click();
            var urlValue = browser.config.baseUrl;
            if (urlValue.includes(loginTestData.keyword)) {
                await commonFunctions.selectDropDownOptions(fileUploadTestData.fileTypeOfRegression);
            } else {
                await commonFunctions.selectDropDownOptions(fileUploadTestData.fileTypeOfTest);
            }
            await this.searchButton.waitForDisplayed();
            await this.searchButton.click();
            await this.loader.waitForDisplayed({ reverse: true });
            var fileType = await this.firstRowFileType.getText();
            if (await this.recordCountLabel.isDisplayed() == true) {
                if (urlValue.includes(loginTestData.keyword)) {
                    return fileType == fileUploadTestData.fileTypeOfRegression;
                } else {
                    return fileType == fileUploadTestData.fileTypeOfTest;
                }
            } else {
                return false;
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
module.exports = new UploadHistoryPage();
