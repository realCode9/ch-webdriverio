import loginPage from "../../pageobjects/login/login-page";
import commonUtility from "../../../utilities/common-utilities";
import menuOptions from "../../pageobjects/menuoptions-page";
import fileUploadPage from "../../pageobjects/file-upload/file-upload";
import downloadHistoryPage from "../../pageobjects/file-upload/file-download-history";
import fileUploadTestData from "../../../resources/file-upload/file-upload-test-data.json";
import connectToMongo from "../../../utilities/database-connection";

describe("Validation on file download history tab of file upload", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        await commonUtility.clickOnElement(menuOptions.fileUpload);
        await commonUtility.clickOnElement(fileUploadPage.downloadHistoryTab);
    })
    it("Validate navigation to the file download history tab", async () => {
        expect(await commonUtility.getElementText(downloadHistoryPage.downloadHistoryHeader)).toEqual(fileUploadTestData.downloadHistoryHeader);
    })
    it("Validate UI of Download history tab", async () => {
        expect(await commonUtility.getElementText(downloadHistoryPage.fileTypeLabel)).toEqual(fileUploadTestData.fileTypeLabel);
        expect(await commonUtility.getElementText(downloadHistoryPage.usernameLabel)).toEqual(fileUploadTestData.usernameLabel);
        expect(await commonUtility.getElementText(downloadHistoryPage.organizationLabel)).toEqual(fileUploadTestData.organizationLabel);
        expect(await commonUtility.getElementText(downloadHistoryPage.statusLabel)).toEqual(fileUploadTestData.statusLabel);
        expect(await commonUtility.getElementText(downloadHistoryPage.fileNameLabel)).toEqual(fileUploadTestData.fileNameLabel);
        expect(await commonUtility.getElementText(downloadHistoryPage.downloadDateLabel)).toEqual(fileUploadTestData.downloadDateLabel);
        expect(await commonUtility.isElementClickable(downloadHistoryPage.searchButton)).toBeTrue();
        expect(await commonUtility.isElementClickable(downloadHistoryPage.clearButton)).toBeTrue();
        expect(await commonUtility.isFieldDropdown(downloadHistoryPage.fileTypeDropdown)).toBeTrue();
        expect(await commonUtility.isFieldDropdown(downloadHistoryPage.organizationDropdown)).toBeTrue();
        expect(await commonUtility.isFieldDropdown(downloadHistoryPage.statusDropdown)).toBeTrue();
        await commonUtility.waitUntilLoaderFinishedLoading(downloadHistoryPage.spinner);
        expect(await commonUtility.isElementDisplayed(downloadHistoryPage.recordCountLabel)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(downloadHistoryPage.pageNavigation)).toBeTrue();
    })
    it("Validate scenario of table headers and if there is no data then no data screen", async () => {
        if (await commonUtility.isElementDisplayed(downloadHistoryPage.fileNameColumnHeader) == true) {
            expect(await commonUtility.getMultiElementTextOneByOne(downloadHistoryPage.tableHeaders)).toEqual(fileUploadTestData.tableHeaders);
        } else {
            expect(await commonUtility.getElementText(downloadHistoryPage.noDataTitleMessage).toEqual(fileUploadTestData.noDataTitle));
        }
    })
    it("Validate dropdown values", async () => {
        await connectToMongo();
        await commonUtility.clickOnElement(downloadHistoryPage.fileTypeDropdown);
        var fileTypes = await fileUploadPage.getFileTypesFromDB();
        console.log(fileTypes)
        if (fileTypes == []) {
            expect(await commonUtility.getMultiElementTextOneByOne(downloadHistoryPage.fileTypeDropdownValues)).toEqual(await fileUploadPage.choseFileTypes());
        } else {
            expect(await commonUtility.getMultiElementTextOneByOne(downloadHistoryPage.fileTypeDropdownValues)).toEqual(fileTypes);
        }
        await commonUtility.clickOnElement(downloadHistoryPage.organizationDropdown);
        await commonUtility.clickOnElement(downloadHistoryPage.statusDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(downloadHistoryPage.statusDropdownValues)).toEqual(fileUploadTestData.statusDropdownValuesOnDownload);
    })
    it("Validate default and other sorting on the columns", async () => {
        // default sorting on download date column
        await browser.keys("\ue004")
        expect((await commonUtility.getMultiElementTextOneByOne(downloadHistoryPage.downloadDateColumnData)) ==
            (await commonUtility.getMultiElementDataAndSort(downloadHistoryPage.downloadDateColumnData))).toBeTrue();
        //Generic sorting validations on all the columns
        for (let i = 1; i <= await downloadHistoryPage.columnCount(); i++) {
            await commonUtility.clickOnElement($("(//div//table//thead)[1]//tr//th[" + i + "]"));
            await commonUtility.waitUntilLoaderFinishedLoading(downloadHistoryPage.spinner);
            expect((await downloadHistoryPage.genericFunctionToSortColumns(i)) == (await downloadHistoryPage.getMultiElementDataOfIndex(i))).toBeTrue();
            await commonUtility.clickOnElement($("(//div//table//thead)[1]//tr//th[" + i + "]"));
            await commonUtility.waitUntilLoaderFinishedLoading(downloadHistoryPage.spinner);
            expect((await downloadHistoryPage.genericFunctionToSortColumns(i)) == (await downloadHistoryPage.getMultiElementDataOfIndex(i))).toBeTrue();
        }
    })
    it("Validate search by selecting file type from dropdown", async () => {
        await downloadHistoryPage.selectFileType();
        if (await commonUtility.isElementDisplayed(downloadHistoryPage.historyTable) == true) {
            expect(await commonUtility.getElementText(downloadHistoryPage.firstRowFileType)).toEqual(await downloadHistoryPage.selectedFileType());
        } else {
            expect(await commonUtility.getElementText(downloadHistoryPage.noDataTitleMessage)).toEqual(fileUploadTestData.noDataTitle);
        }
    })
    it("Validate search by Username with valid Username", async () => {
        await downloadHistoryPage.setValueToUser(fileUploadTestData.userName);
        await commonUtility.waitUntilLoaderFinishedLoading(downloadHistoryPage.spinner);
        if (await commonUtility.isElementDisplayed(downloadHistoryPage.historyTable) == true) {
            expect(await commonUtility.getElementText(downloadHistoryPage.firstRowUserName)).toEqual(fileUploadTestData.userName);
        } else {
            expect(await commonUtility.getElementText(downloadHistoryPage.noDataTitleMessage)).toEqual(fileUploadTestData.noDataTitle);
        }
    })
    it("Validate search by selecting organization from dropdown", async () => {
        await downloadHistoryPage.selectOrganization();
        if (await commonUtility.isElementDisplayed(downloadHistoryPage.historyTable) == true) {
            expect(await commonUtility.getElementText(downloadHistoryPage.firstRowOrganization)).toEqual(fileUploadTestData.OrganizationAmenity);
        } else {
            expect(await commonUtility.getElementText(downloadHistoryPage.noDataTitleMessage)).toEqual(fileUploadTestData.noDataTitle);
        }
    })
    it("Validate search by selecting status from dropdown", async () => {
        await downloadHistoryPage.selectStatus();
        if (await commonUtility.isElementDisplayed(downloadHistoryPage.historyTable) == true) {
            expect(await commonUtility.getElementText(downloadHistoryPage.firstRowUploadStatus)).toEqual(fileUploadTestData.firstStatusInDropdown);
        } else {
            expect(await commonUtility.getElementText(downloadHistoryPage.noDataTitleMessage)).toEqual(fileUploadTestData.noDataTitle);
        }
    })
    it("Validate search for file name", async () => {
        await downloadHistoryPage.setValueToFileName(fileUploadTestData.fileName);
        if (await commonUtility.isElementDisplayed(downloadHistoryPage.historyTable) == true) {
            expect(await commonUtility.getElementText(downloadHistoryPage.firstRowFileName)).toEqual(fileUploadTestData.fileName);
        } else {
            expect(await commonUtility.getElementText(downloadHistoryPage.noDataTitleMessage)).toEqual(fileUploadTestData.noDataTitle);
        }
    })
    it("Download file from upload history tab and validate in download history tab", async () => {
        await commonUtility.clickOnElement(fileUploadPage.uploadHistoryTab);
        var downloadDate = await commonUtility.getElementText(downloadHistoryPage.downloadDateOnUploadHistoryTab);
        if ((await commonUtility.isElementEnabled(downloadHistoryPage.downloadButtonOnUploadHistory) == true) && (await downloadHistoryPage.downloadFileFromUploadHistoryTab() == true)) {
            var downloadDate = await commonUtility.getElementText(downloadHistoryPage.downloadDateOnUploadHistoryTab);
            await commonUtility.clickOnElement(fileUploadPage.downloadHistoryTab);
            await commonUtility.waitUntilLoaderFinishedLoading(downloadHistoryPage.spinner);
            expect(await commonUtility.getElementText(downloadHistoryPage.firstRowDownloadDate)).toContain(downloadDate);
        } else {
            expect(await commonUtility.isElementEnabled(downloadHistoryPage.downloadButtonOnUploadHistory)).toBeFalse();
        }
    })
    it("Validate no data screen on no results for search ", async () => {
        await downloadHistoryPage.setValueToUser(fileUploadTestData.userNameForNoDataScreen);
        await commonUtility.clickOnElement(downloadHistoryPage.searchButton);
        await commonUtility.waitUntilLoaderFinishedLoading(downloadHistoryPage.spinner);
        expect(await commonUtility.getElementText(downloadHistoryPage.noDataTitleMessage)).toEqual(fileUploadTestData.noDataTitle);
        expect(await commonUtility.getElementText(downloadHistoryPage.noDataSubTitleMessage)).toEqual(fileUploadTestData.noDataSubTitle);
    })
})