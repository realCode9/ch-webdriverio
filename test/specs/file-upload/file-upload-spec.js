import fileUploadPage from "../../pageobjects/file-upload/file-upload";
import menuOptions from "../../pageobjects/menuoptions-page";
import loginPage from "../../pageobjects/login/login-page";
import fileUploadTestData from "../../../resources/file-upload/file-upload-test-data.json";
import connectToMongo from "../../../utilities/database-connection";
import commonUtility from "../../../utilities/common-utilities";

describe("Validating file upload > Upload tab", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        await commonUtility.clickOnElement(menuOptions.fileUpload);
    })
    it("Verify UI for the Upload tab of File Upload", async () => {
        expect(await fileUploadPage.getText(fileUploadPage.uploadTab)).toEqual(fileUploadTestData.uploadTab);
        expect(await fileUploadPage.getText(fileUploadPage.uploadHistoryTab)).toEqual(fileUploadTestData.uploadHistoryTab);
        expect(await fileUploadPage.getText(fileUploadPage.downloadHistoryTab)).toEqual(fileUploadTestData.downloadHistoryTab);
        expect(await fileUploadPage.getText(fileUploadPage.fileUploadHeader)).toEqual(fileUploadTestData.fileUploadHeader);
        expect(await fileUploadPage.getText(fileUploadPage.fileTypeLabel)).toEqual(fileUploadTestData.fileTypeLabelText);
        expect(await fileUploadPage.isElementDisplayed(fileUploadPage.chooseFilesButton)).toBeTrue();
        expect(await fileUploadPage.isElementDisplayed(fileUploadPage.uploadButton)).toBeTrue();
        expect(await fileUploadPage.isElementEnabled(fileUploadPage.uploadButton)).toBeFalse();
        expect(await fileUploadPage.isElementDisplayed(fileUploadPage.clearButton)).toBeTrue();
        expect(await fileUploadPage.getText(fileUploadPage.instruction)).toEqual(fileUploadTestData.instructionOnFileUpload);
        expect(await fileUploadPage.isElementEnabled(fileUploadPage.fileTypeDropdown)).toBeTrue();
    })
    it("Verify file types assigned to the user from DB", async () => {
        await connectToMongo();
        await commonUtility.clickOnElement(fileUploadPage.fileTypeDropdown);;
        expect(await commonUtility.getMultiElementTextOneByOne(fileUploadPage.dropdownValues)).toEqual(await fileUploadPage.getFileTypesFromDB());
    })
    it("Verify selecting values from the file type dropdown and uploading files", async () => {
        await fileUploadPage.selectFileType();
        expect(await fileUploadPage.isFileUploaded()).toBeTrue();
    })
    it("Verify clear button functionality", async () => {
        await commonUtility.clickOnElement(fileUploadPage.fileTypeDropdown);
        await fileUploadPage.selectFileType();
        expect(await fileUploadPage.isDropdownCrossButtonPresent()).toBeTrue();
        await fileUploadPage.verifyClearButton();
        expect(await fileUploadPage.isElementEnabled(fileUploadPage.uploadButton)).toBeFalse();
        expect(await fileUploadPage.isDropdownCrossButtonPresent()).toBeFalse();
    })
    it("Verify table headers", async () => {
        expect(await commonUtility.getMultiElementTextOneByOne(fileUploadPage.tableColumnHeaders)).toEqual(fileUploadTestData.tableColumnHeaders);
    })
})