import loginPage from "../../../pageobjects/login/login-page";
import menuoptionsPage from "../../../pageobjects/menuoptions-page";
import statusMappingsPage from "../../../pageobjects/administration/application-settings/status-mappings-page";
import statusMappingsTestData from "../../../../resources/administration/application-settings/status-mappings-test-data.json";
import utilitiesPage from "../../../../utilities/common-utilities";

describe("Test Cases for Status Mappings", () => {
    beforeAll(async function () {
      await loginPage.open();
      await loginPage.login();
    });

    it("Validating navigation and landing to Status Mappings", async () => {
        await menuoptionsPage.clickOnAdmin();
        await menuoptionsPage.clickOnApplicationSettings();
        await menuoptionsPage.clickOnStatusMappings();
        await expect(browser).toHaveUrl(statusMappingsTestData.statusMappingsPageUrl);
    });

    it("Validating the tabs displayed on Status Mappings", async () => {
        expect(await statusMappingsPage.getMappingsText()).toEqual(statusMappingsTestData.mappingsText);
        expect(await statusMappingsPage.getDefaultsText()).toEqual(statusMappingsTestData.defaultsText);
    });

    it("Validating the sections displayed on Mapping tab", async () => {
        expect(await statusMappingsPage.getStatusMappingText()).toEqual(statusMappingsTestData.statusMappingText);
        expect(await statusMappingsPage.getAddStatusMappingText()).toEqual(statusMappingsTestData.addStatusMappingText);
    });

    it("Validating the fields and buttons present on Add Status Mapping", async () => {
        expect(await statusMappingsPage.getServiceLineText()).toEqual(statusMappingsTestData.serviceLineText);
        expect(await statusMappingsPage.getRecoveryTypesText()).toEqual(statusMappingsTestData.recoveryTypesText);
        expect(await statusMappingsPage.getFullRecoveryStatusText()).toEqual(statusMappingsTestData.fullRecoveryStatusText);
        expect(await statusMappingsPage.getPartialRecoveryStatusText()).toEqual(statusMappingsTestData.partialRecoveryStatusText);
        expect(await statusMappingsPage.visibilityOfSaveButton()).toBe(true);
        expect(await statusMappingsPage.visibilityOfCancelButton()).toBe(true);
    });

    it("Validating the disabled fields under the Add Status Mapping section", async () => {
        expect(await utilitiesPage.isElementClickable(statusMappingsPage.disabledFullRecoveryStatus)).toBeFalse();
        expect(await utilitiesPage.isElementClickable(statusMappingsPage.disabledPartialRecoveryStatus)).toBeFalse();
    });  
    
    it("Validating the single select and multi select dropdowns on Add Status Mapping", async () => {
        await statusMappingsPage.clickOnServiceLineDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.serviceLineValue1);
        await statusMappingsPage.clickOnServiceLineDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.serviceLineValue2);
        expect(await statusMappingsPage.isSingleSelectDropdown()).toEqual(statusMappingsTestData.singleSelectCount);
        await statusMappingsPage.clickOnRecoveryTypesDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.recoveryTypesValue1);
        await statusMappingsPage.clickOnRecoveryTypesDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.recoveryTypesValue2);
        expect(await statusMappingsPage.isMultiSelectDropdown()).toBeGreaterThanOrEqual(statusMappingsTestData.multiSelectCount)
    });

    it("Validating the disabled fields dependency on service line and enabled when service line is selected", async () => {
        expect(await statusMappingsPage.fullRecoveryStatusEnable()).toBe(true);
        expect(await statusMappingsPage.partialRecoveryStatusEnable()).toBe(true);
    });  

    it("Validating the plus button functionality when user enters value in fields and clicks on plus button", async () => {
        await statusMappingsPage.clickOnFullRecoveryStatus();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.fullRecoveryStatusValue);
        await statusMappingsPage.clickOnPartialRecoveryStatus();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.partialRecoveryStatusValue);
        await statusMappingsPage.countBeforeClickingPlusButton();
        await statusMappingsPage.clickOnPlusButton();
        expect(await statusMappingsPage.countAfterClickingPlusButtonIsGreater()).toBe(true);
    });  

    it("Validating the Cancel button functionality when user adds or deletes a record and clicks on Cancel button", async()=>{
        await statusMappingsPage.deletingARecord();
        await statusMappingsPage.clickOnCancelButton();
        await statusMappingsPage.waitForPageReload();
        expect(await statusMappingsPage.countAfterClickingCancelButtonIsSame()).toBe(true);       
    });

    it("Validating the duplicate entry scenario under Status Mapping", async()=>{
        await statusMappingsPage.clickOnServiceLineDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.serviceLineValue3);
        await statusMappingsPage.clickOnRecoveryTypesDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.recoveryTypesValue3);
        await statusMappingsPage.clickOnPlusButton();
        expect(await statusMappingsPage.duplicateEntryError()).toEqual(statusMappingsTestData.errorToaster);
    });

    it("Validating the Save button functionality when user adds or deletes a record and clicks on Save button", async()=>{
        await statusMappingsPage.clickOnServiceLineDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.serviceLineValue2);
        await statusMappingsPage.clickOnRecoveryTypesDropdown();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.recoveryTypesValue1);
        await statusMappingsPage.clickOnFullRecoveryStatus();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.fullRecoveryStatusValue);
        await statusMappingsPage.clickOnPartialRecoveryStatus();
        await utilitiesPage.selectDropDownOptions(statusMappingsTestData.partialRecoveryStatusValue);
        await statusMappingsPage.clickOnPlusButton();
        await statusMappingsPage.deleteRecord();
        await statusMappingsPage.clickOnSaveButton();
        expect(await utilitiesPage.visibilityOfSuccessToaster()).toEqual(statusMappingsTestData.saveSuccessToaster);
        await utilitiesPage.waitForToasterMessageToDisappear();
    });

    it("Validating the landing to Defaults tab", async () => {
        await statusMappingsPage.clickOnDefaultsTab();
        expect(await statusMappingsPage.getDefaultsTabText()).toEqual(statusMappingsTestData.defaultsTabText);
    });    

    it("Validating the fields and buttons present on Defaults tab", async () => {
        expect(await statusMappingsPage.getAuditText()).toEqual(statusMappingsTestData.auditText);
        expect(await statusMappingsPage.getQueryResultsText()).toEqual(statusMappingsTestData.queryResultsText);
        expect(await statusMappingsPage.getMedicalRecordRequestText()).toEqual(statusMappingsTestData.medicalRecordRequestText);
        expect(await statusMappingsPage.visibilityOfSaveButton()).toBe(true);
    });

    it("Validating the single select dropdown fields under Defaults tab", async () => {
       await statusMappingsPage.clickOnAuditDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.auditValue1);
       await statusMappingsPage.clickOnAuditDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.auditValue2);
       expect(await statusMappingsPage.isAuditSingleSelectDropdown()).toEqual(statusMappingsTestData.singleSelectAuditCount);
       await statusMappingsPage.clickOnQueryResultsDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.queryResultsValue1);
       await statusMappingsPage.clickOnQueryResultsDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.queryResultsValue2);
       expect(await statusMappingsPage.isQueryResultsSingleSelectDropdown()).toEqual(statusMappingsTestData.singleSelectQueryResultsCount);
       await statusMappingsPage.clickOnMedicalRecordRequestDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.medicalValue1);
       await statusMappingsPage.clickOnMedicalRecordRequestDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.medicalValue2);
       expect(await statusMappingsPage.isMedicalRecordSingleSelectDropdown()).toEqual(statusMappingsTestData.singleSelectMedicalRecordCount);
       await statusMappingsPage.clickOnMedicalRecordEndStatusDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.medicalRecordEndStatusValue1);
       await statusMappingsPage.clickOnMedicalRecordEndStatusDropdown();
       await utilitiesPage.selectDropDownOptions(statusMappingsTestData.medicalRecordEndStatusValue2);
       expect(await statusMappingsPage.isMedicalRecordEndStatusSingleSelectDropdown()).toEqual(statusMappingsTestData.singleSelectMedicalRecordEndStatusCount);
    });

    it("Validating the Save button functionality under Defaults tab", async()=>{        
        await statusMappingsPage.clickOnSaveButton();
        expect(await utilitiesPage.visibilityOfSuccessToaster()).toEqual(statusMappingsTestData.defaultsSuccessToaster);
        await utilitiesPage.waitForToasterMessageToDisappear();
    });
});