import commonUtility from "../../../../../utilities/common-utilities";
import loginPage from "../../../../pageobjects/login/login-page";
import rulesPage from "../../../../pageobjects/administration/inventory-management/inventory-assignments-rules-page";
import menuOptionsPage from "../../../../pageobjects/menuoptions-page";
import teamsPage from "../../../../pageobjects/administration//inventory-management/inventory-assignments-teams-page";
import teamsData from "../../../../../resources/administration/inventory-management/inventory-assignments-teams-test-data.json";
import connectToMongo from "../../../../../utilities/database-connection";
import rulesData from "../../../../../resources/administration/inventory-management/inventory-assignments-rules-test-data.json"
import historyPage from "../../../../pageobjects/administration/inventory-management/inventory-assignments-history-page";
import historyData from "../../../../../resources/administration/inventory-management/inventory-assignment-history-test-data.json"

describe("Validate Rules Tab", function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        await commonUtility.clickOnElement(menuOptionsPage.administration);
        await commonUtility.clickOnElement(menuOptionsPage.inventoryManagement);
        await commonUtility.clickOnElement(menuOptionsPage.assignments);
    })
    it("Validate create new team assignment and display of rules tab", async () => {
        await commonUtility.clickOnElement(teamsPage.createTeamAssignmentButton);
        await commonUtility.enterValueInElement(teamsPage.inventoryNameField, teamsData.inventoryName);
        await commonUtility.enterValueInElement(teamsPage.descriptionField, teamsData.description);
        await commonUtility.clickOnElement(teamsPage.saveButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(teamsData.inventoryCreatedToasterMessage);
        await commonUtility.waitForToasterMessageToDisappear();
        expect(await commonUtility.isElementDisplayed(rulesPage.rulesTab)).toBeTrue();
    })
    it("Validate presence and navigation to rules tab", async () => {
        await commonUtility.clickOnElement(rulesPage.rulesTab);
        expect(await commonUtility.getElementText(rulesPage.noRulesTitle)).toEqual(rulesData.noRulesTitle);
        expect(await commonUtility.getElementText(rulesPage.noRulesSubtitle)).toEqual(rulesData.noRuleSubTitle);
        expect(await commonUtility.isElementDisplayed(rulesPage.createNewRuleButtonOnNoRulesScreen)).toBeTrue();
    })
    it("Validate clicking on create new rule and navigating to create new rule screen", async () => {
        await commonUtility.clickOnElement(rulesPage.createNewRuleButtonOnNoRulesScreen);
        expect(await commonUtility.isElementDisplayed(rulesPage.rulesTabInstruction)).toBeTrue();
    })
    it("Validate default UI of create rule screen", async () => {
        await commonUtility.waitForElementDisplayed(rulesPage.createNewRuleButtonOnRuleCreateScreen);
        expect(await commonUtility.isElementDisplayed(rulesPage.createNewRuleButtonOnRuleCreateScreen)).toBeTrue();
        expect(await commonUtility.getElementText(rulesPage.newRuleHeader)).toEqual(rulesData.newRuleLabel);
        expect(await commonUtility.getElementText(rulesPage.projectedResultsLabel)).toEqual(rulesData.projectedResultsLabel);
        expect(await commonUtility.getElementText(rulesPage.newRuleTitle)).toEqual(rulesData.newRuleLabel);
        expect(await commonUtility.getElementText(rulesPage.newRuleDescription)).toEqual(rulesData.newRuleDescription);
        expect(await commonUtility.isElementDisplayed(rulesPage.rulesForDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.inventoryTypeDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.datasetDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.sortByDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.globalClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.fieldsClearButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.addQueryButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.addQueryButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.selectFieldDropdown)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.deleteRuleButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.saveRuleButton)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.searchRuleButton)).toBeTrue();
        expect(await commonUtility.isElementEnabled(rulesPage.searchRuleButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(rulesPage.saveRuleButton)).toBeFalse();
    })
    it("Validate Rule for dropdown values", async () => {
        await commonUtility.clickOnElement(rulesPage.rulesForDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(rulesPage.rulesForDropdownValues)).toEqual(rulesData.rulesForDropdownValues);
    })
    it("Validate Inventory type dropdown values", async () => {
        await commonUtility.clickOnElement(rulesPage.inventoryTypeDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(rulesPage.rulesForDropdownValues)).toEqual(rulesData.inventoryTypeDropdownValues);
    })
    //This only works for CHTest environment.
    it("Validate dataset dropdown values", async () => {
        await connectToMongo();
        await commonUtility.clickOnElement(rulesPage.datasetDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(rulesPage.rulesForDropdownValues)).toEqual(await rulesPage.datasetValues());
    })
    it("Validate sort by dropdown default values for inventory type audits", async () => {
        await commonUtility.clickOnElement(rulesPage.sortByDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(rulesPage.rulesForDropdownValues)).toEqual(rulesData.sortByOptions);
    })
    it("Validate select dropdown values for inventory type audits", async () => {
        await commonUtility.clickOnElement(rulesPage.datasetDropdown);
        await commonUtility.selectDropDownOptions(rulesData.datasetValue);
        await commonUtility.clickOnElement(rulesPage.sortByDropdown);
        await commonUtility.selectDropDownOptions(rulesData.sortbyValueForAudit);
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.selectFieldValue);
        expect(await commonUtility.isElementDisplayed(rulesPage.operatorDropdownField)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.fieldValueSelectionDropdown)).toBeTrue();
        await commonUtility.clickOnElement(rulesPage.operatorDropdownField);
        await commonUtility.selectDropDownOptions(rulesData.auditTypeOperatorValue);
        await commonUtility.clickOnElement(rulesPage.fieldValueSelectionDropdown);
        await commonUtility.selectDropDownOptions(rulesData.auditTypeValue);
        await browser.pause(2000);
        expect(await commonUtility.isElementEnabled(rulesPage.searchRuleButton)).toBeTrue();
        expect(await commonUtility.isElementEnabled(rulesPage.saveRuleButton)).toBeTrue();
    })
    it("Validate add filter function and on adding filter AND button enabled or not", async () => {
        await commonUtility.clickOnElement(rulesPage.addQueryButton);
        expect(await commonUtility.isElementDisplayed(rulesPage.additionalSelectFieldDropdown)).toBeTrue();
        expect(await commonUtility.isElementEnabled(rulesPage.queryAndButton)).toBeTrue();
    })
    it("Validate delete button and functionality on additional field added", async () => {
        expect(await commonUtility.isElementDisplayed(rulesPage.deleteIcon));
        await commonUtility.clickOnElement(rulesPage.deleteIcon);
        expect(await commonUtility.isElementExisting(rulesPage.additionalSelectFieldDropdown)).toBeFalse();
        expect(await commonUtility.isElementEnabled(rulesPage.queryAndButton)).toBeFalse();
    })
    it("Validate search functionality for inventory type audits", async () => {
        await commonUtility.clickOnElement(rulesPage.searchRuleButton);
        await commonUtility.waitUntilLoaderFinishedLoading(rulesPage.searchingLoader);
        expect(parseInt(await commonUtility.getElementText(rulesPage.projectedResultCount))).toEqual(await rulesPage.getResultRecordCountFromDB());
    })
    it("Validate Search results for the AND logic between search fields for inventory type Audits", async () => {
        await commonUtility.clickOnElement(rulesPage.addQueryButton);
        await commonUtility.clickOnElement(rulesPage.secondSelectField);
        await commonUtility.selectDropDownOptions(rulesData.secondFieldValue);
        await commonUtility.clickOnElement(rulesPage.secondFieldOperand);
        await commonUtility.selectDropDownOptions(rulesData.secondFieldOperandValue);
        await commonUtility.clickOnElement(rulesPage.queryAndButton);
        await commonUtility.clickOnElement(rulesPage.searchRuleButton);
        await commonUtility.waitUntilLoaderFinishedLoading(rulesPage.searchingLoader);
        expect(parseInt(await commonUtility.getElementText(rulesPage.projectedResultCount))).toEqual(await rulesPage.getAuditResultRecordCountFromDBForMultipleFilters());
    });
    describe("Validate Save rule modal", () => {
        it("Validate save rule button functionality", async () => {
            await commonUtility.clickOnElement(rulesPage.saveRuleButton);
            expect(await commonUtility.getElementText(rulesPage.saveRuleModalHeader)).toEqual(rulesData.saveRuleModalHeader);
        })
        it("Validate save rule modal", async () => {
            expect(await commonUtility.getElementText(rulesPage.ruleNameFieldLabel)).toEqual(rulesData.ruleNamelabel);
            expect(await commonUtility.getElementText(rulesPage.descriptionLabel)).toEqual(rulesData.descriptionLabel);
            expect(await commonUtility.getElementAttributeValue(rulesPage.enterRuleNameField, "placeholder")).toEqual(rulesData.ruleNamePlaceholder);
            expect(await commonUtility.getElementAttributeValue(rulesPage.descriptionField, "placeholder")).toEqual(rulesData.descriptionPlaceholder);
            expect(await commonUtility.isElementDisplayed(rulesPage.modalSaveRuleButton)).toBeTrue();
            expect(await commonUtility.isElementDisplayed(rulesPage.modalCancelButton)).toBeTrue();
        })
        it("Validate validations on save rule popup", async () => {
            await commonUtility.clickOnElement(rulesPage.modalSaveRuleButton);
            expect(await commonUtility.isElementDisplayed(rulesPage.ruleNameValidationMessage)).toBeTrue();
            expect(await commonUtility.getElementText(rulesPage.ruleNameValidationMessage)).toEqual(rulesData.ruleNameValidation);
            expect(await commonUtility.isElementDisplayed(rulesPage.descriptionValidationMessage)).toBeTrue();
            expect(await commonUtility.getElementText(rulesPage.descriptionValidationMessage)).toEqual(rulesData.descriptionValidation);
        })
        it("Validate cancel button on save rule modal", async () => {
            await commonUtility.clickOnElement(rulesPage.modalCancelButton);
            expect(await commonUtility.getElementText(rulesPage.newRuleTitle)).toEqual(rulesData.newRuleLabel);
        })
    })
    it("Validate rules clear button functionality", async () => {
        await commonUtility.clickOnElement(rulesPage.fieldsClearButton);
        expect(await commonUtility.isElementEnabled(rulesPage.searchRuleButton)).toBeFalse();
        expect(await commonUtility.isElementEnabled(rulesPage.saveRuleButton)).toBeFalse();
    })
    it("Validate global clear button functionality", async () => {
        expect(await commonUtility.getElementText(rulesPage.selectedDatasetValue)).toEqual(rulesData.datasetValue);
        expect(await commonUtility.getElementText(rulesPage.selectedSortByOption)).toEqual(rulesData.sortbyValueForAudit);
        await commonUtility.clickOnElement(rulesPage.globalClearButton);
        expect(await commonUtility.isElementDisplayed(rulesPage.datasetPlaceholder)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.sortByPlaceholder)).toBeTrue();
    })
    it("Validate saving new rule for inventory type : audits", async () => {
        await commonUtility.clickOnElement(rulesPage.datasetDropdown);
        await commonUtility.selectDropDownOptions(rulesData.datasetValue);
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.selectFieldValue);
        await commonUtility.clickOnElement(rulesPage.operatorDropdownField);
        await commonUtility.selectDropDownOptions(rulesData.auditTypeOperatorValue);
        await commonUtility.clickOnElement(rulesPage.fieldValueSelectionDropdown);
        await commonUtility.selectDropDownOptions(rulesData.auditTypeValue);
        await commonUtility.clickOnElement(rulesPage.saveRuleButton);
        await commonUtility.enterValueInElement(rulesPage.enterRuleNameField, rulesData.ruleName);
        await commonUtility.enterValueInElement(rulesPage.descriptionField, rulesData.ruleDescription);
        await commonUtility.clickOnElement(rulesPage.modalSaveRuleButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(rulesData.ruleAddedToaster);
        await commonUtility.waitForToasterMessageToDisappear();
    })
    it("Validate update modal for already existing rule", async () => {
        await commonUtility.clickOnElement(rulesPage.saveRuleButton);
        expect(await commonUtility.getElementText(rulesPage.updateRuleModalHeader)).toEqual(rulesData.updateRuleModalHeader);
        expect(await commonUtility.isElementDisplayed(rulesPage.updateRuleButton)).toBeTrue();
    })
    it("Validate update function for already existing rule", async () => {
        await commonUtility.enterValueInElement(rulesPage.enterRuleNameField, rulesData.updatedRuleName);
        await commonUtility.enterValueInElement(rulesPage.descriptionField, rulesData.updatedRuleDescription);
        await commonUtility.clickOnElement(rulesPage.updateRuleButton);
        await browser.pause(2000);
        expect(await commonUtility.getElementText(rulesPage.ruleNameHeader)).toEqual(rulesData.updatedRuleName);
    })
    it("Validate creating rule with duplicate name", async () => {
        await commonUtility.clickOnElement(rulesPage.createNewRuleButtonOnRuleCreateScreen);
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.selectFieldValue);
        await commonUtility.clickOnElement(rulesPage.operatorDropdownField);
        await commonUtility.selectDropDownOptions(rulesData.auditTypeOperatorValue);
        await commonUtility.clickOnElement(rulesPage.fieldValueSelectionDropdown);
        await commonUtility.selectDropDownOptions(rulesData.auditTypeValue);
        await commonUtility.clickOnElement(rulesPage.saveRuleButton);
        await commonUtility.enterValueInElement(rulesPage.enterRuleNameField, rulesData.updatedRuleName);
        await commonUtility.enterValueInElement(rulesPage.descriptionField, rulesData.updatedRuleDescription);
        await commonUtility.clickOnElement(rulesPage.modalSaveRuleButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(rulesData.duplicateRuleNameError);
        await commonUtility.clickOnElement(rulesPage.duplicateRuleErrorToaster);
    })
    it("Validate create new rule to validate rule cards", async () => {
        await commonUtility.clickOnElement(rulesPage.saveRuleButton);
        await commonUtility.enterValueInElement(rulesPage.enterRuleNameField, rulesData.secondRuleName);
        await commonUtility.enterValueInElement(rulesPage.descriptionField, rulesData.secondDescription);
        await commonUtility.clickOnElement(rulesPage.modalSaveRuleButton);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(rulesData.ruleAddedToaster);
        await commonUtility.waitForToasterMessageToDisappear();
    })
    it("Validate Inventory type field must be disabled for existing rule", async () => {
        await commonUtility.clickOnElement(rulesPage.firstCardDragButton);
        expect(await commonUtility.isElementClickable(rulesPage.inventoryTypeDropdown)).toBeFalse();
    })
    it("Validate created rule cards", async () => {
        expect(await commonUtility.getElementText(rulesPage.firstCardName)).toEqual(rulesData.updatedRuleName);
        expect(await commonUtility.getElementText(rulesPage.firstCardDescription)).toEqual(rulesData.updatedRuleDescription);
        expect(await commonUtility.getElementText(rulesPage.secondCardName)).toEqual(rulesData.secondRuleName);
        expect(await commonUtility.getElementText(rulesPage.secondCardDescription)).toEqual(rulesData.secondDescription);
    })
    it("Validate delete created rule", async () => {
        await commonUtility.clickOnElement(rulesPage.deleteRuleButton);
        await browser.pause(2000);
        expect(await commonUtility.getElementText(rulesPage.ruleNameHeader)).toEqual(rulesData.newRuleLabel)
    })
});
describe("Validations test cases for inventory type Query results", function () {
    it("Validate switching to Query resutls inventory type", async () => {
        await commonUtility.clickOnElement(rulesPage.rulesForDropdown);
        await commonUtility.selectDropDownOptions(rulesData.queryResultsInventoryType);
        expect(await commonUtility.getElementText(rulesPage.inventoryTypeSelectedValue)).toEqual(rulesData.queryResultsInventoryType);
    })
    it("Validate query category field and its status and default value selected in it", async () => {
        expect(await commonUtility.getElementText(rulesPage.queryCategoryLabel)).toEqual(rulesData.queryCategoryLabelText);
        expect(await commonUtility.isElementDisplayed(rulesPage.queryCategoryDropdown)).toBeTrue();
        expect(await commonUtility.getElementText(rulesPage.queryCategoryDefaultValue)).toEqual(rulesData.queryCategoryDropdownDefaultValue);
        expect(await commonUtility.isElementClickable(rulesPage.queryCategoryDropdown)).toBeFalse();
    })
    it("Validate tooltip value for projected results", async () => {
        expect(await commonUtility.getElementAttributeValue(rulesPage.tooltipForProjectedResults, "tooltip")).toEqual(rulesData.tooltip);
    })
    it("Validate newly added and existing query related fields", async () => {
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        expect(await commonUtility.isElementDisplayed(rulesPage.queryIdOption)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.queryNameOption)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.queryStatusOption)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.queryConceptOption)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.queryProjectOption)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.queryQueryCloseReasonOption)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(rulesPage.queryPaymentTimingOption)).toBeTrue();
        expect(await commonUtility.getElementText(rulesPage.queryIdOption)).toEqual(rulesData.queryID);
        expect(await commonUtility.getElementText(rulesPage.queryConceptOption)).toEqual(rulesData.concept);
        expect(await commonUtility.getElementText(rulesPage.queryProjectOption)).toEqual(rulesData.project);
    })
    it("Validate Field operator for the Query ID", async () => {
        await commonUtility.selectDropDownOptions(rulesData.queryID);
        expect(await commonUtility.getElementText(rulesPage.selectedOperatorValue)).toEqual(rulesData.equalsOperator);
    })
    it("Validate Field operator for the Query Name", async () => {
        await commonUtility.clickOnElement(rulesPage.clearSelectDropdown);
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.queryName);
        expect(await commonUtility.getElementText(rulesPage.selectedOperatorValue)).toEqual(rulesData.equalsOperator);
        expect(await commonUtility.isElementDisplayed(rulesPage.queryNameValueDropdown)).toBeTrue();
    })
    it("Validate Field operator, value field and values from DB for the Concept", async () => {
        await commonUtility.clickOnElement(rulesPage.clearSelectDropdown);
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.concept);
        expect(await commonUtility.getElementText(rulesPage.selectedOperatorValue)).toEqual(rulesData.equalsOperator);
        await commonUtility.clickOnElement(rulesPage.selectConceptDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(rulesPage.valuesFromOperandDropdown)).toEqual(await rulesPage.getConceptsFromDB())
    })
    it("Validate Field operator, value field and values from DB for the Project", async () => {
        await commonUtility.clickOnElement(rulesPage.clearSelectDropdown);
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.project);
        expect(await commonUtility.getElementText(rulesPage.selectedOperatorValue)).toEqual(rulesData.equalsOperator);
        await commonUtility.clickOnElement(rulesPage.selectProjectsDropdown);
        await browser.pause(2000);
        expect(await commonUtility.getMultiElementTextOneByOne(rulesPage.valuesFromOperandDropdown)).toEqual(await rulesPage.getProjectsFromDB())
    })
    it("Verify Field operator and value field for the Payment Timing", async () => {
        await commonUtility.clickOnElement(rulesPage.clearSelectDropdown);
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.paymentTiming);
        expect(await commonUtility.getElementText(rulesPage.selectedOperatorValue)).toEqual(rulesData.equalsOperator);
        await commonUtility.clickOnElement(rulesPage.selectPaymentTiming);
        expect(await commonUtility.getMultiElementTextOneByOne(rulesPage.valuesFromOperandDropdown)).toEqual(rulesData.paymentTimings);
    })
});
describe("Validate test cases for inventory type Medical Record Requests", function () {
    it("Validate switching to MR Request inventory type", async () => {
        await commonUtility.clickOnElement(rulesPage.rulesForDropdown);
        await commonUtility.selectDropDownOptions(rulesData.mrRequestInventoryType);
        expect(await commonUtility.getElementText(rulesPage.inventoryTypeSelectedValue)).toEqual(rulesData.mrRequestInventoryType);
    })
    it("Validate search for MR Request for one field Inventory type - MR Requests", async () => {
        await commonUtility.clickOnElement(rulesPage.selectFieldDropdown);
        await commonUtility.selectDropDownOptions(rulesData.mrrStatusOption);
        await commonUtility.clickOnElement(rulesPage.operatorDropdownField);
        await commonUtility.selectDropDownOptions(rulesData.equalsOperator);
        await commonUtility.clickOnElement(rulesPage.mrStatusDropdown);
        await commonUtility.selectDropDownOptions(rulesData.mrrStatusValue);
        await commonUtility.clickOnElement(rulesPage.searchRuleButton);
        expect(parseInt(await commonUtility.getElementText(rulesPage.projectedResultCount))).toEqual(await rulesPage.getMRRRecordCountFromDB());
    })
    it("Validate Search results for the AND logic between search fields for inventory type MR Requests", async () => {
        await commonUtility.clickOnElement(rulesPage.addQueryButton);
        await commonUtility.clickOnElement(rulesPage.secondSelectField);
        await commonUtility.selectDropDownOptions(rulesData.paidAmount);
        await commonUtility.clickOnElement(rulesPage.secondFieldOperator);
        await commonUtility.selectDropDownOptions(rulesData.secondFieldOperator);
        await commonUtility.enterValueInElement(rulesPage.operandField, 100);
        await commonUtility.clickOnElement(rulesPage.queryAndButton);
        await commonUtility.clickOnElement(rulesPage.searchRuleButton);
        await commonUtility.waitUntilLoaderFinishedLoading(rulesPage.searchingLoader);
        expect(parseInt(await commonUtility.getElementText(rulesPage.projectedResultCount))).toEqual(await rulesPage.getMRRRecordCountFromDBByApplyingMultipleFilters());
    })
    it("Validate Back button and its functionality on rules tab", async () => {
        expect(await commonUtility.isElementDisplayed(rulesPage.backButton)).toBeTrue();
        await commonUtility.clickOnElement(rulesPage.backButton);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        expect(await commonUtility.isElementDisplayed(teamsPage.searchField)).toBeTrue();
    })
});
describe("Validate history tab", function () {
    it("Validate navigation to history tab", async () => {
        await commonUtility.enterValueInElement(teamsPage.searchField, rulesData.inventoryName);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        await commonUtility.clickOnElement(rulesPage.firstRowInventory);
        await commonUtility.waitForElementDisplayed(historyPage.historyTab);
        await commonUtility.clickOnElement(historyPage.historyTab);
        expect(await commonUtility.isElementDisplayed(historyPage.tabSelectionDropdown)).toBeTrue();
    })
    it("Validate default option selected in the tab selection dropdown", async () => {
        expect(await commonUtility.getElementText(historyPage.defaultSelectedDropdownValue)).toEqual(historyData.mainTab);
    })
    it("Validate table headers for the main tabs history", async () => {
        await commonUtility.waitUntilLoaderFinishedLoading(historyPage.spinner);
        expect(await commonUtility.getMultiElementTextOneByOne(historyPage.mainTabHistoryTableHeader)).toEqual(historyData.tableHeadersForMainTabHistory);
    })
    it("Validate existance of page size and pagination", async () => {
        expect(await commonUtility.isElementDisplayed(historyPage.pageSize)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(historyPage.pagination)).toBeTrue();
    })
    it("Validate tab selection dropdown values", async () => {
        await commonUtility.clickOnElement(historyPage.tabSelectionDropdown);
        expect(await commonUtility.getMultiElementTextOneByOne(historyPage.dropdownOptions)).toEqual(historyData.dropdownOptions);
    })
    it("Validate switching to history for the Rules tab", async () => {
        await commonUtility.selectDropDownOptions(historyData.rulesTab);
        await commonUtility.waitUntilLoaderFinishedLoading(historyPage.spinner);
        expect(await commonUtility.getElementText(historyPage.ruleNameColumnHeader)).toEqual(historyData.ruleNameColumnHeader);
    })
    it("Validate default sorting on Date and Time column", async () => {
        let defaultData = await commonUtility.getMultiElementTextOneByOne(historyPage.dataAndTimeColumnData);
        expect(await commonUtility.getMultiElementDataAndSort(historyPage.dataAndTimeColumnData)).toEqual(defaultData);
    })
    it("Validate table headers for the rules tab history", async () => {
        expect(await commonUtility.getMultiElementTextOneByOne(historyPage.mainTabHistoryTableHeader)).toEqual(historyData.tableHeadersForRulesHistoryTab);
    })
    it("Validate existance of page size and pagination for the rules tab history table", async () => {
        expect(await commonUtility.isElementDisplayed(historyPage.pageSize)).toBeTrue();
        expect(await commonUtility.isElementDisplayed(historyPage.pagination)).toBeTrue();
    })
    it("Validate switching clinical Rules to view comparison", async () => {
        await commonUtility.clickOnElement(historyPage.firstRowComparisonViewLink);
        expect(await commonUtility.getElementText(historyPage.clinicalRulesHeader)).toEqual(historyData.clinicalRuleHeading);
        expect(await commonUtility.isElementDisplayed(historyPage.clinicalRulesCloseButton)).toBeTrue();
        expect(await commonUtility.getMultiElementTextOneByOne(historyPage.statusesOnClinicalRules)).toEqual(historyData.statuses);
    })
    it("Validate Close button and its functionality", async () => {
        await commonUtility.clickOnElement(historyPage.clinicalRulesCloseButton);
        expect(await commonUtility.isElementDisplayed(historyPage.actionColumnHeader)).toBeTrue();
    })
    it("Validate clinical rules history for deleted rule", async () => {
        await commonUtility.clickOnElement(historyPage.firstRowComparisonViewLink);
        expect(await commonUtility.getElementText(historyPage.previousValueText)).toEqual(historyData.previousValue);
        expect(await commonUtility.getElementText(historyPage.newValueText)).toEqual(historyData.newValue);
        await commonUtility.clickOnElement(historyPage.clinicalRulesCloseButton);
    })
    it("Validate inventory type from history table and from clinical rules popup", async () => {
        var inventoryFromTable = await commonUtility.getElementText(historyPage.firstRowInventoryType);
        await commonUtility.clickOnElement(historyPage.thirdRowComparisonViewLink);
        expect(await commonUtility.getElementText(historyPage.inventoryTypeFromClinicalRules)).toEqual(inventoryFromTable);
        await commonUtility.clickOnElement(historyPage.clinicalRulesCloseButton);
    })
});
describe("Validate navigating back and deleting created test inventory", function () {
    it("Validate Back button and its functionality on history tab", async () => {
        expect(await commonUtility.isElementDisplayed(rulesPage.backButton)).toBeTrue();
        await commonUtility.clickOnElement(rulesPage.backButton);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        expect(await commonUtility.isElementDisplayed(teamsPage.searchField)).toBeTrue();
    })
    it("Validate Deleting recently created team inventory", async () => {
        await commonUtility.enterValueInElement(teamsPage.searchField, rulesData.inventoryName);
        await commonUtility.waitUntilLoaderFinishedLoading(teamsPage.loader);
        await commonUtility.clickOnElement(rulesPage.deleteIcon);
        await commonUtility.clickOnElement(rulesPage.deleteButtonOnPopup);
        expect(await commonUtility.visibilityOfSuccessToaster()).toEqual(rulesData.deleteInventoryToasterMessage);
    })
})