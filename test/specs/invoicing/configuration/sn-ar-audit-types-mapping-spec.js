import loginPage from "../../../pageobjects/login/login-page";
import commonFunctions from "../../../../utilities/common-utilities";
import menuOptions from "../../../pageobjects/menuoptions-page";
import snAndArCodesMappingPage from "../../../pageobjects/invoicing/configuration/sn-ar-audit-types-mapping-page";
import rolesPage from "../../../pageobjects/administration/security/roles-page";
import snArAuditTypesMappingData from "../../../../resources/invoicing/configuration/sn-ar-audit-types-mapping-test-data.json";
import connectToMongo from "../../../../utilities/database-connection";

describe("Test cases execution for SN And AR codes mapping with Audit Type", function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    })
    it("Verify Special Notations and Adjustment Reason Mapping is not visible on Left Navigation when right is not assigned to the user", async () => {
        await snAndArCodesMappingPage.navigateToRolesAndSearchAdminRole();
        await commonFunctions.clickOnElement(rolesPage.viewIconForAdministrator);
        await snAndArCodesMappingPage.unassignRightFromRole();
        await commonFunctions.clickOnElement(menuOptions.invoicing);
        await commonFunctions.clickOnElement(menuOptions.invoicingConfiguration);
        expect(await commonFunctions.isElementExisting(menuOptions.specialNotationsAndAdjustmentReasonCodesMapping)).toBeFalse();
    })
    it("Verify Special Notations and Adjustment Reason Mapping is visible on Left Navigation when right is assigned to the user", async () => {
        await snAndArCodesMappingPage.navigateToRolesAndSearchAdminRole();
        await commonFunctions.clickOnElement(rolesPage.viewIconForAdministrator);
        await snAndArCodesMappingPage.assignRightToRole();
        await commonFunctions.clickOnElement(menuOptions.invoicing);
        await commonFunctions.clickOnElement(menuOptions.invoicingConfiguration);
        expect(await commonFunctions.isElementExisting(menuOptions.specialNotationsAndAdjustmentReasonCodesMapping)).toBeTrue();
    })
    it("Verify navigation to Special Notations/Adjustment Reason Code and Audit Types Mapping screen", async () => {
        await commonFunctions.clickOnElement(menuOptions.specialNotationsAndAdjustmentReasonCodesMapping);
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.header)).toEqual(snArAuditTypesMappingData.headerText);
    })
    it("Verify Special Notations/Adjustment Reason Code and Audit Types Mapping default landing screen UI", async ()=> {
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.noDataImage)).toBeTrue();
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.noDataMessage)).toEqual(snArAuditTypesMappingData.noDataText);
    })
    it("Verify Special Notations/Adjustment Reason Codes section", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.noScrollHeader)).toEqual(snArAuditTypesMappingData.noScrollHeaderText);
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.description)).toEqual(snArAuditTypesMappingData.descriptionText);
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.specialNotationHeader)).toEqual(snArAuditTypesMappingData.specialNotationHeader);
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.adjustmentReasonCodeHeader)).toEqual(snArAuditTypesMappingData.adjustmentReasonCodesHeader);
    })
    it("Verify expand and collapse functionality", async () => {
        await expect(snAndArCodesMappingPage.specialNotationCodeAccordion).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, snArAuditTypesMappingData.collapsedClassValue);
        await expect(snAndArCodesMappingPage.adjustmentReasonCodeAccordion).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, snArAuditTypesMappingData.collapsedClassValue);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.adjustmentReasonCodeAccordion);
        await expect(snAndArCodesMappingPage.adjustmentReasonCodeAccordion).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, snArAuditTypesMappingData.expandedClassValue);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.specialNotationCodeAccordion);
        await expect(snAndArCodesMappingPage.specialNotationCodeAccordion).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, snArAuditTypesMappingData.expandedClassValue);
    })
    it("Verify Special Notations Codes and Adjustment Reason Codes expanded section", async () => {
        await commonFunctions.waitForElementDisplayed(snAndArCodesMappingPage.firstSpecialNotationCode);
        await browser.pause(1000);
        expect(await commonFunctions.getMultiElementTextOneByOne(snAndArCodesMappingPage.specialNotationCodesListed)).toEqual(snArAuditTypesMappingData.specialNotationCodesListedText);
        expect(await commonFunctions.getMultiElementTextOneByOne(snAndArCodesMappingPage.adjustmentReasonCodesListed)).toEqual(snArAuditTypesMappingData.adjustmentReasonCodesListedText);
    })
    it("Verify count is displayed on Special Notations Codes and Adjustment Reason Codes section", async () => {
        expect(await snAndArCodesMappingPage.getCountFromHeader(snAndArCodesMappingPage.specialNotationHeader)).toEqual(snArAuditTypesMappingData.specialNotationCodesCount);
        expect(await snAndArCodesMappingPage.getCountFromHeader(snAndArCodesMappingPage.adjustmentReasonCodeHeader)).toEqual(snArAuditTypesMappingData.adjustmentReasonCodesCount);
    })
})
describe("Validating test cases related to Special Notations Code mapping with Audit Types", function () {
    it("To verify user is able to select Special Notations Code to assign an Audit Type - Project Codes combination", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstSpecialNotationCode);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.auditTypesColumnHeader)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.projectCodesColumnHeader)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.selectAllCheckbox)).toBeTrue();
    })
    it("To verify user is able to select Audit Type to assign an Audit Type - Project Codes combination", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.secondAuditTypeCheckbox);
        await expect(snAndArCodesMappingPage.selectAllCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "p-checkbox-box p-highlight");
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllCheckbox);
        await expect(snAndArCodesMappingPage.selectAllCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "p-checkbox-box p-focus");
    })
    it("To verify user is able to select Project Code to assign an Audit Type - Project Code combination", async () => {
        expect(await commonFunctions.isElementClickable(snAndArCodesMappingPage.firstProjectCodeDropdown)).toBeFalse();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        expect(await commonFunctions.isElementClickable(snAndArCodesMappingPage.firstProjectCodeDropdown)).toBeTrue();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstProjectCodeDropdown);
        await commonFunctions.selectDropDownOptions(snArAuditTypesMappingData.projectCodeToSearch);
        await commonFunctions.selectDropDownOptions(snArAuditTypesMappingData.projectCodeToAssign);
        await expect(snAndArCodesMappingPage.selectAllProjectsCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "form-group-check select-all minus-sign");
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.projectClearItem);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.projectClearItem);
        await expect(snAndArCodesMappingPage.selectAllProjectsCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "form-group-check select-all");
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllProjectsCheckbox);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.clearAllProjectsCrossIcon)).toBeTrue();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllProjectsCheckbox);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.selectProjectCodesPlaceholder)).toBeTrue();
    })
    it("Verify user is able to get success toaster post assigning the Audit Type : For Special Notations Code", async () => {
        await commonFunctions.selectDropDownOptions(snArAuditTypesMappingData.projectCodeToSearch);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.assignSelectedAuditTypesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(snAndArCodesMappingPage.assignButtonInProgressIcon); 
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(snArAuditTypesMappingData.oneCombinationAssignedSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("Verify Assigned Audit Types section post assigning the Audit Type : For Special Notations Code", async () => {
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.assignedAuditTypeTagName)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.mappedProjectCode)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.removeAllLink)).toBeTrue();
    })
    it("Verify Unassigned Audit Types section post assigning the Audit Type : For Special Notations Code", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstProjectCodeDropdown);
        expect(await commonFunctions.isElementExisting(snAndArCodesMappingPage.assignedProjectTypeDropdownOption)).toBeFalse();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllProjectsCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.assignSelectedAuditTypesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(snAndArCodesMappingPage.assignButtonInProgressIcon);
        await browser.pause(1000);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstProjectCodeDropdown);
        expect(await commonFunctions.isElementExisting(snAndArCodesMappingPage.noItemsFound)).toBeTrue();
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("Verify Count of Audit Types and/or Project Codes post assigning the Audit Type : For Special Notations Code", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.specialNotationsCodeAssignedCountDescription)).toEqual(snArAuditTypesMappingData.assignedCountDescription);
    })
    it("To verify single un-assignment using cross icon on chips in the Assigned Audit Types section", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.crossIconToRemoveSingleAssignment);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationPopupHeader)).toBeTrue();
    })
    it("To verify single un-assignment confirmation pop up", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.popupData)).toEqual(snArAuditTypesMappingData.removeAssignmentPopupTextData);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.popupCancelButton)).toBeTrue();
    })
    it("To verify single un-assignment confirmation pop up Cancel button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.popupCancelButton);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.crossIconToRemoveSingleAssignment)).toBeTrue();
    })
    it("To verify single un-assignment confirmation pop up Yes button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.crossIconToRemoveSingleAssignment);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(snArAuditTypesMappingData.singleSpecialNotationCodeRemoveSuccessToaster)
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("To verify count post single un-assignment for special Notation code", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.specialNotationsCodeAssignedCountDescription)).toEqual(snArAuditTypesMappingData.assignedDescriptionForSpecialNotationCodeAfterSingleRemoval)
    })
    it("To verify un-assigning all Audit Types and/or Audit Type - Project Code combinations using remove all link", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.removeAllLink);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationPopupHeader)).toBeTrue();
    })
    it("To verify remove all confirmation pop up", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.popupData)).toEqual(snArAuditTypesMappingData.removeAllAssignmentPopupTextData);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.popupCancelButton)).toBeTrue();
    })
    it("To verify remove all confirmation pop up Cancel button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.popupCancelButton);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.removeAllLink)).toBeTrue();
    })
    it("To verify remove all confirmation pop up Yes button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.removeAllLink);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.confirmationYesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(snAndArCodesMappingPage.assignButtonInProgressIcon);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(snArAuditTypesMappingData.specialNotationCodeRemoveAllSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("To verify count post all the combinations are unassigned for Adjustment Reason  code", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.specialNotationsCodeAssignedCountDescription)).toEqual(snArAuditTypesMappingData.nothingAssignedCountDescription);
    })
    it("Verify validations on Assign Selected Audit Types button: For Special Notations Code", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.assignSelectedAuditTypesButton);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.assignAuditTypeValidation)).toBeTrue();
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.assignAuditTypeValidation)).toEqual(snArAuditTypesMappingData.assignAuditTypeValidationMessage);
    })
})
describe("Validating test cases related to Adjustment Reason Code mapping with Audit Types", function () {
    it("Verify user is able to select Adjustment Reason code to assign an Audit Type -Project Code combination", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAdjustmentReasonCode);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.auditTypesColumnHeader)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.projectCodesColumnHeader)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.selectAllCheckbox)).toBeTrue();
    })
    it("Verify user is able to select Audit Type to assign an Audit Type - Project Code combination", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.secondAuditTypeCheckbox);
        await expect(snAndArCodesMappingPage.selectAllCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "p-checkbox-box p-highlight");
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllCheckbox);
        await expect(snAndArCodesMappingPage.selectAllCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "p-checkbox-box");
    })
    it("To verify user is able to select Project Code to assign an Audit Type - Project Code combination", async () => {
        expect(await commonFunctions.isElementClickable(snAndArCodesMappingPage.firstProjectCodeDropdown)).toBeFalse();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        expect(await commonFunctions.isElementClickable(snAndArCodesMappingPage.firstProjectCodeDropdown)).toBeTrue();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstProjectCodeDropdown);
        await commonFunctions.selectDropDownOptions(snArAuditTypesMappingData.projectCodeToSearch);
        await commonFunctions.selectDropDownOptions(snArAuditTypesMappingData.projectCodeToAssign);
        await expect(snAndArCodesMappingPage.selectAllProjectsCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "minus-sign");
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.projectClearItem);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.projectClearItem);
        await expect(snAndArCodesMappingPage.selectAllProjectsCheckbox).toHaveAttributeContaining(snArAuditTypesMappingData.attributeClass, "select-all");
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllProjectsCheckbox);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.clearAllProjectsCrossIcon)).toBeTrue();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllProjectsCheckbox);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.selectProjectCodesPlaceholder)).toBeTrue();
    })
    it("To verify user is able to get success toaster post assigning the Audit Type", async () => {
        await commonFunctions.selectDropDownOptions(snArAuditTypesMappingData.projectCodeToSearch);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.assignSelectedAuditTypesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(snAndArCodesMappingPage.assignButtonInProgressIcon);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(snArAuditTypesMappingData.oneCombinationAssignedAdjustmentReasonCodeSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("Verify Assigned Audit Types section when any Special Notations Code or Adjustment Reason Code is selected with Audit Types more than zero", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.assignedAuditType)).toEqual(snArAuditTypesMappingData.auditTypeAssigned);
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.assignedAuditTypeSubHeader)).toEqual(snArAuditTypesMappingData.assignedAuditTypeSubHeaderText);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.removeAllLink)).toBeTrue();
    })
    it("To verify Assigned Audit Types section post assigning the Audit Type", async () => {
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.assignedAuditTypeForAdjustmentReasonCode)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.mappedProjectCode)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.removeAllLink)).toBeTrue();
    })
    it("To verify Unassigned Audit Types section post assigning the Audit Type", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstProjectCodeDropdown);
        expect(await commonFunctions.isElementExisting(snAndArCodesMappingPage.assignedProjectTypeDropdownOption)).toBeFalse();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.selectAllProjectsCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.assignSelectedAuditTypesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(snAndArCodesMappingPage.assignButtonInProgressIcon);
        await browser.pause(1000);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstProjectCodeDropdown);
        expect(await commonFunctions.isElementExisting(snAndArCodesMappingPage.noItemsFound)).toBeTrue();
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("Verify Count of Audit Types and/or Project Codes post assigning the Audit Type", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.adjustmentReasonCodeAssignedCountDescription)).toEqual(snArAuditTypesMappingData.assignedDescriptionForAdjustmentReasonCode);
    })

    it("To verify single un-assignment using cross icon on chips in the Assigned Audit Types section", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.crossIconToRemoveSingleAssignment);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationPopupHeader)).toBeTrue();
    })
    it("To verify single un-assignment confirmation pop up", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.popupData)).toEqual(snArAuditTypesMappingData.singleRemovalPopupTextDataForAdjustmentReasonCode);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.popupCancelButton)).toBeTrue();
    })
    it("To verify single un-assignment confirmation pop up Cancel button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.popupCancelButton);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.crossIconToRemoveSingleAssignment)).toBeTrue();
    })
    it("To verify single un-assignment confirmation pop up Yes button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.crossIconToRemoveSingleAssignment);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.confirmationYesButton);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(snArAuditTypesMappingData.singleAdjustmentReasonCodeRemoveSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("To verify count post single un-assignment for adjustment reason code", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.adjustmentReasonCodeAssignedCountDescription)).toEqual(snArAuditTypesMappingData.assignedDescriptionForSpecialNotationCodeAfterSingleRemoval)
    })
    it("To verify un-assigning all Audit Types and/or Audit Type - Project Code combinations using remove all link", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.removeAllLink);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationPopupHeader)).toBeTrue();
    })
    it("To verify remove all confirmation pop up", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.popupData)).toEqual(snArAuditTypesMappingData.removeAllAssignmentPopupTextDataForAdjustmentReasonCode);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.confirmationYesButton)).toBeTrue();
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.popupCancelButton)).toBeTrue();
    })
    it("To verify remove all confirmation pop up Cancel button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.popupCancelButton);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.removeAllLink)).toBeTrue();
    })
    it("To verify remove all confirmation pop up Yes button functionality", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.removeAllLink);
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.confirmationYesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(snAndArCodesMappingPage.assignButtonInProgressIcon);
        expect(await commonFunctions.visibilityOfSuccessToaster()).toEqual(snArAuditTypesMappingData.adjustmentReasonCodeRemoveAllSuccessToaster);
        await commonFunctions.waitForToasterMessageToDisappear();
    })
    it("To verify count post all the combinations are unassigned for Adjustment Reason code", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.adjustmentReasonCodeAssignedCountDescription)).toEqual(snArAuditTypesMappingData.nothingAssignedCountDescription);
    })
    it("Verify validations on Assign Selected Audit Types button", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.assignSelectedAuditTypesButton);
        await commonFunctions.waitUntilLoaderFinishedLoading(snAndArCodesMappingPage.assignButtonInProgressIcon);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.assignAuditTypeValidation)).toBeTrue();
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.assignAuditTypeValidation)).toEqual(snArAuditTypesMappingData.assignAuditTypeValidationMessage);
    })
    it("Verify when Special Notations Code or Adjustment Reason Code is selected to see Audit Types", async () => {
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.assignedAuditsSectionHeaderAndSubHeader)).toEqual(snArAuditTypesMappingData.assignedAuditsSectionHeaderAndSubHeader);
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.unassignedHeaderAndSubHeaderInfo)).toEqual(snArAuditTypesMappingData.unassignedAuditsSectionHeaderAndSubHeaders);
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.assignSelectedAuditTypesButton)).toBeTrue();
    })
    it("Verify Search Audit Types field under Unassigned Audit Types section", async () => {
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.searchAuditTypesField)).toBeTrue();
        expect(await snAndArCodesMappingPage.isSearchResultsDisplayed()).toBeTrue();
    })
    it("Verify Checkboxes and its functionality displayed under Unassigned Audit Types section", async () => {
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.searchClearCrossIcon)
        expect(await commonFunctions.isElementDisplayed(snAndArCodesMappingPage.firstAuditTypeCheckbox)).toBeTrue();
        expect(await commonFunctions.isElementClickable(snAndArCodesMappingPage.firstProjectCodeDropdown)).toBeFalse();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstAuditTypeCheckbox);
        expect(await commonFunctions.isElementClickable(snAndArCodesMappingPage.firstProjectCodeDropdown)).toBeTrue();
    })
    it("Verify the table and Audit Types displayed under Unassigned Audit Types section", async () => {
        expect(await commonFunctions.getMultiElementTextOneByOne(snAndArCodesMappingPage.columnHeaders)).toEqual(snArAuditTypesMappingData.columnHeadersText);
        expect(await commonFunctions.getMultiElementTextOneByOne(snAndArCodesMappingPage.auditTypes)).toEqual(snArAuditTypesMappingData.auditTypesText);
    })
    it("Verify Project Codes from database under Unassigned Audit Types section", async () => {
        await connectToMongo();
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.firstProjectCodeDropdown);
        expect(await commonFunctions.getMultiElementTextOneByOne(snAndArCodesMappingPage.projectCodesDropdownOptions)).toEqual(await snAndArCodesMappingPage.getProjectCodesFromDatabase());
        await commonFunctions.enterValueInElement(snAndArCodesMappingPage.projectCodeDropdownInput, snArAuditTypesMappingData.projectCodeToSearch);
        await commonFunctions.waitForElementDisplayed(snAndArCodesMappingPage.projectCodeSearchResult);
        expect(await commonFunctions.getElementText(snAndArCodesMappingPage.projectCodeSearchResult)).toEqual(snArAuditTypesMappingData.projectCodeToSearch);
    })
    it("Verify sorting functionality on Audit Type column", async () => {
        expect(await commonFunctions.getMultiElementTextOneByOne(snAndArCodesMappingPage.auditTypes)).toEqual(await commonFunctions.getMultiElementDataAndSort(snAndArCodesMappingPage.auditTypes));
        await commonFunctions.clickOnElement(snAndArCodesMappingPage.auditTypesColumnHeader);
        expect(await commonFunctions.getMultiElementTextOneByOne(snAndArCodesMappingPage.auditTypes)).toEqual(await commonFunctions.getMultiElementDataAndSort(snAndArCodesMappingPage.auditTypes));
    })
})