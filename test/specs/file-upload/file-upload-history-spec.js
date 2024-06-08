import loginPage from "../../pageobjects/login/login-page";
import menuOptions from "../../pageobjects/menuoptions-page";
import fileUploadPage from "../../pageobjects/file-upload/file-upload";
import commonUtility from "../../../utilities/common-utilities";
import uploadHistoryPage from "../../pageobjects/file-upload/file-upload-history";
import fileUploadTestData from "../../../resources/file-upload/file-upload-test-data.json";
import connectToMongo from "../../../utilities/database-connection";

describe("Validating File Upload > upload history page", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        await commonUtility.clickOnElement(menuOptions.fileUpload);
        await commonUtility.clickOnElement(fileUploadPage.uploadHistoryTab);
    })

    it("Validate UI for search panel", async () => {
        expect(await commonUtility.getElementText(uploadHistoryPage.historyTabHeader)).toEqual(fileUploadTestData.uploadHistoryHeader);
        expect(await commonUtility.getElementText(uploadHistoryPage.fileTypeLabel)).toEqual(fileUploadTestData.fileTypeLabelText1);
        expect(await commonUtility.getElementText(uploadHistoryPage.usernameLabel)).toEqual(fileUploadTestData.usernameLabelText);
        expect(await commonUtility.getElementText(uploadHistoryPage.organizationLabel)).toEqual(fileUploadTestData.OrganizationLabelText);
        expect(await commonUtility.getElementText(uploadHistoryPage.statusLabel)).toEqual(fileUploadTestData.statusLabelText);
        expect(await commonUtility.getElementText(uploadHistoryPage.fileNameLabel)).toEqual(fileUploadTestData.fileNameLabelText);
        expect(await commonUtility.getElementText(uploadHistoryPage.uploadDateLabel)).toEqual(fileUploadTestData.uploadDateLabelText);
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.fileTypeDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.usernameInput)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.organizationDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.statusDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.fileNameInput)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.uploadDateInput)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.searchButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(uploadHistoryPage.clearButton)).toBeTrue();
    })
    it("Validate upload history table and no data screen", async () => {
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        var columnHeaders = await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.uploadHistoryColumnHeaders)
        if (columnHeaders = []) {
            await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
            expect(await uploadHistoryPage.noDataImage).toBePresent();
        } else {
            expect(columnHeaders).toEqual(fileUploadTestData.uploadHistoryColumnHeadersTexts);
        }
    })
    it("Validate sortable column on file upload history", async () => {
        await browser.pause(20000);
        expect(await uploadHistoryPage.isColumnSortable()).toBeTrue();
    })
    it("Validate dropdown field values for file type, status", async () => {
        //For File type dropdown values
        await connectToMongo();
        await commonUtility.clickOnElement(uploadHistoryPage.fileTypeDropdown);
        var fileTypes = await fileUploadPage.getFileTypesFromDB();
        if (fileTypes == []) {
            expect(await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.fileTypeDropdownValues)).toEqual(await fileUploadPage.choseFileTypes());
        } else {
            expect(await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.fileTypeDropdownValues)).toEqual(fileTypes);
        }
        await commonUtility.clickOnElement(uploadHistoryPage.organizationDropdown);

        //For Status dropdown values
        await commonUtility.clickOnElement(uploadHistoryPage.statusDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.statusDropdownFieldValues)).toEqual(fileUploadTestData.fileUploadStatus);
    })
    it("Validate sorting on the columns", async () => {
        //Sorting on Upload Date Column
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.dateColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.dateColumnData))).toBeTrue();
        await commonUtility.clickOnElement(uploadHistoryPage.uploadDateColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.dateColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.dateColumnData))).toBeTrue();

        //Sorting on User Column
        await commonUtility.clickOnElement(uploadHistoryPage.userColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.userColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.userColumnData))).toBeTrue();
        await commonUtility.clickOnElement(uploadHistoryPage.userColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.userColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.userColumnData))).toBeTrue();

        //Sorting on Status column
        await commonUtility.clickOnElement(uploadHistoryPage.statusColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.statusColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.statusColumnData))).toBeTrue();
        await commonUtility.clickOnElement(uploadHistoryPage.statusColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.statusColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.statusColumnData))).toBeTrue();

        //Sorting on File Type column
        await commonUtility.clickOnElement(uploadHistoryPage.fileTypeColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.fileTypeColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.fileTypeColumnData))).toBeTrue();
        await commonUtility.clickOnElement(uploadHistoryPage.fileTypeColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.fileTypeColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.fileTypeColumnData))).toBeTrue();

        //Sorting on File Name column
        await commonUtility.clickOnElement(uploadHistoryPage.fileNameColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.fileNameColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.fileNameColumnData))).toBeTrue();
        await commonUtility.clickOnElement(uploadHistoryPage.fileNameColumnHeader);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect((await commonUtility.getMultiElementTextOneByOne(uploadHistoryPage.fileNameColumnData)) == (await uploadHistoryPage.getMultiElementDataAndSort(uploadHistoryPage.fileNameColumnData))).toBeTrue();
    })
    it("Validate download file from upload history table", async () => {
        if (await uploadHistoryPage.isDownloadButtonEnabled() == true) {
            expect(await uploadHistoryPage.validateDownloadFile()).toBeTrue();
        } else {
            expect(await uploadHistoryPage.isDownloadButtonEnabled()).toBeFalse();
        }
    })
    it("Validate Search for file type and clear", async () => {
        var totalCountOnHistory = await uploadHistoryPage.getTotalRecordCount();
        if (await uploadHistoryPage.selectFileTypeAndSearch()) {
            expect(await uploadHistoryPage.selectFileTypeAndSearch()).toBeTrue();
        } else {
            expect(await uploadHistoryPage.noDataImage).toBePresent();
        }
        await commonUtility.clickOnElement(uploadHistoryPage.clearButton);
        await commonUtility.waitUntilLoaderFinishedLoading(uploadHistoryPage.loader);
        expect(await uploadHistoryPage.getTotalRecordCount()).toEqual(totalCountOnHistory);
    })
})