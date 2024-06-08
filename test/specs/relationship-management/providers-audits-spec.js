import loginPage from "../../pageobjects/login/login-page";
import menuoptionsPage from "../../pageobjects/menuoptions-page";
import providersAuditsPage from "../../pageobjects/relationship-management/providers-audits-page";
import commonUtilities from "../../../utilities/common-utilities";
import providersAuditsTestData from "../../../resources/relationship-management/providers-audits-test-data.json";

describe("Validation of Relationship Management - Providers Audits section", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Verify user is able to see Audits tab in  Provider Details Page in CRM", async () => {
        await menuoptionsPage.clickOnCRM();
        await menuoptionsPage.clickOnProviders();
        await providersAuditsPage.enterProviderNPI(providersAuditsTestData.providerNPI);
        await providersAuditsPage.clickOnSearchButton();
        expect(await providersAuditsPage.getProviderNPI()).toBe(providersAuditsTestData.providerNPI);
        await providersAuditsPage.clickOnProiderNPIHyperlink();
        expect(await providersAuditsPage.checkAuditsTabIDisplayed()).toBe(true);
    });
    it("Verify user is able to land on Provider details Audits tab in CRM", async () => {
        expect(await providersAuditsPage.getAuditsTabLabel()).toEqual(providersAuditsTestData.tabName);
    });
    it("Verify Column filters present on Audits Page", async () => {
        expect(await providersAuditsPage.checkAuditIdFilterIconIsDisplayed()).toBe(true);
        expect(await providersAuditsPage.checkAuditTypeFilterIconIsDisplayed()).toBe(true);
        expect(await providersAuditsPage.checkAuditStatusFilterIconIsDisplayed()).toBe(true);
        expect(await providersAuditsPage.checkMemberIdFilterIconIsDisplayed()).toBe(true);
        expect(await providersAuditsPage.checkDOSFilterIconIsDisplayed()).toBe(true);
        expect(await providersAuditsPage.checkClaimFilterIconIsDisplayed()).toBe(true);
        expect(await providersAuditsPage.checkNPIFilterIconIsDisplayed()).toBe(true);
    });
    it(" Verify display of Filter popup when user clicks on each Column Filter Icon", async () => {
        expect(await providersAuditsPage.displayOfFilterPopup()).toBe(true);
    });
    it("Verify Apply,Clear,Cancel button labels text in all Column Filters popup", async () => {
        expect(await providersAuditsPage.getAllButtonLabelsOfFilterPopup(providersAuditsTestData.filterPopupLabels)).toEqual(providersAuditsTestData.filterPopupLabels);
    });
    it("Verify Apply ,Clear buttons are disabled in all Column Filters popup before providing data ", async () => {
        expect(await providersAuditsPage.checkFilterPopupApplyAndClearButtonsAreNotClickable(providersAuditsTestData.filterPopupLabels)).toBe(true);
    });
    it("Verify Apply ,Clear buttons are enabled in Column Filter popup after providing data ", async () => {
        expect(await providersAuditsPage.checkFilterPopupApplyClearButtonAreClickable(providersAuditsTestData.filterPopupLabels)).toBe(true);
    });
    it("Verify search Audit ID by Audit ID Column filter", async () => {
        await providersAuditsPage.clickAuditIdFilter();
        await providersAuditsPage.enterAuditIdInFilterPopup(providersAuditsTestData.auditID);
        expect(await commonUtilities.checkLoaderIsNotDisplayed()).toBe(true);
        expect(await providersAuditsPage.getSearchedAuditId()).toEqual(providersAuditsTestData.auditID);
    });
    it("Verify search Audit Type by Audit Type Column filter", async () => {
        await providersAuditsPage.clickAuditIdFilter();
        await providersAuditsPage.clickOnClearButton();
        await providersAuditsPage.clickAuditTypeFilter();
        await providersAuditsPage.enterAuditTypeInFilterPopup(providersAuditsTestData.auditType);
        await providersAuditsPage.selectCheckboxesInFilterPopupColumnList();
        expect(await commonUtilities.checkLoaderIsNotDisplayed()).toBe(true);
        expect(await providersAuditsPage.getSearchedAuditType()).toEqual(providersAuditsTestData.auditType);
    });
    it("Verify search Audit Status by Audit Status Column filter", async () => {
        await providersAuditsPage.clickAuditTypeFilter();
        await providersAuditsPage.clickOnClearButton();
        await providersAuditsPage.clickAuditStatusFilter();
        await providersAuditsPage.enterAuditStatusInFilterPopup(providersAuditsTestData.auditStatus);
        await providersAuditsPage.selectCheckboxesInFilterPopupColumnList();
        expect(await providersAuditsPage.getSearchedAuditStatus()).toEqual(providersAuditsTestData.auditStatus);
    });
    it("Verify search MemberID by MemberID Column filter", async () => {
        await providersAuditsPage.clickAuditStatusFilter();
        await providersAuditsPage.clickOnClearButton();
        await providersAuditsPage.clickMemberIdFilter();
        await providersAuditsPage.enterMemberIdInFilterPopup(providersAuditsTestData.memberID);
        expect(await providersAuditsPage.getSearchedMemberId()).toEqual(providersAuditsTestData.memberID);
    });
    it("Verify search DOS by DOS Column filter", async () => {
        await providersAuditsPage.clickMemberIdFilter();
        await providersAuditsPage.clickOnClearButton();
        await providersAuditsPage.clickDOSFilter();
        await providersAuditsPage.enterDOSInFilterPopup(providersAuditsTestData.dosRangeinput);
        expect(await providersAuditsPage.getSearchedDOS()).toEqual(providersAuditsTestData.dosRange);
    });
    it("Verify search Claim by Claim Column filter", async () => {
        await providersAuditsPage.clickDOSFilter();
        await providersAuditsPage.clickOnClearButton();
        await providersAuditsPage.clickClaimFilter();
        await providersAuditsPage.enterClaimInFilterPopup(providersAuditsTestData.claimNumber);
        expect(await providersAuditsPage.getSearchedClaim()).toEqual(providersAuditsTestData.claimNumber);
    });
    it("Verify search NPI by NPI Column filter", async () => {
        await providersAuditsPage.clickClaimFilter();
        await providersAuditsPage.clickOnClearButton();
        await providersAuditsPage.clickNPIFilter();
        await providersAuditsPage.enterNpiNumberInFilterPopup(providersAuditsTestData.npiNumber);
        expect(await providersAuditsPage.getSearchedNPI()).toEqual(providersAuditsTestData.npiNumber);
    });
    it("Verify searching by wrong AuditId displays the No result found label", async () => {
        await providersAuditsPage.clickNPIFilter();
        await providersAuditsPage.clickOnClearButton();
        await providersAuditsPage.clickAuditIdFilter();
        await providersAuditsPage.enterAuditIdInFilterPopup(providersAuditsTestData.invalidAuditID);
        expect(await providersAuditsPage.getNoDataLabelText()).toEqual(providersAuditsTestData.noDataMessage);
        await providersAuditsPage.clickAuditIdFilter();
        await providersAuditsPage.clickOnClearButton();
    });
    it("Verify Select Columns button in CRM-Providers-Audits screen", async () => {
        expect(await providersAuditsPage.checkSelectColumnsButtoniIsEnabled()).toBe(true);
        expect(await providersAuditsPage.getSelectColumnsButtonlabel()).toEqual(providersAuditsTestData.selectColumnsLabel);
    });
    it("Verify display of Select Columns popup on clicking Select Columns dropdown button", async () => {
        expect(await providersAuditsPage.checkSelectColumnsDropdownIconisEnabled()).toBe(true);
        await providersAuditsPage.clickSelectColumnsDropdownIcon();
        expect(await providersAuditsPage.checkDisplayOfSelectColumnsPopup()).toBe(true);
    });
    it("Verify Columns in Select Columns popup list ", async () => {
        expect(await providersAuditsPage.getSelectColumnsPopupColumnList()).toEqual(providersAuditsTestData.selectColumnsList);
    });
    it("Verify default displayed Columns on Audits screen ", async () => {
        expect(await providersAuditsPage.getHeaderColumnsList()).toEqual(providersAuditsTestData.defaultHeaderColumnsList);
    });
    it("Verify default selected Columns Count in Select Columns popup equals to default displayed Columns Count on Audits Screen", async () => {
        expect(await providersAuditsPage.countOfDefaultSelectedColumnsInColumnList()).toEqual(await providersAuditsPage.countOfHeaderColumnsList());
    });
    it("Verify Apply,Clear,Cancel buttons are enabled in Select Columns popup", async () => {
        expect(await providersAuditsPage.getSelectColumnsApplyCancelClearButtonsLabel()).toEqual(providersAuditsTestData.filterPopupLabels);
        expect(await providersAuditsPage.checkSelectColumnsApplyClearCancelButtonsEnabled()).toBe(true);
    });
    it("Verify AuditID in Select Columns popup is disabled and selected by default", async () => {
        expect(await providersAuditsPage.selectColumnsPopupAuditIdIsDisabled()).toBe(true);
    });
    it("Verify Unchecking SelectAll Checkbox unchecks all Column Checkboxes in Select Columns popup", async () => {
        await providersAuditsPage.clickSelectAllCheckboxInSelectColumnsPopup();
        expect(await providersAuditsPage.uncheckSelectAllUnchecksAllCheckboxes()).toBe(true);
        await providersAuditsPage.clickSelectColumnsApplyButton();
        expect(await providersAuditsPage.getHeaderColumnsList()).toEqual(providersAuditsTestData.defaultDisabledHeaderColumnsList);
    });
    it("Verify Checking Select All Checkbox Checks all Column Checkboxes in Select Columns popup", async () => {
        await providersAuditsPage.clickSelectColumnsDropdownIcon();
        await providersAuditsPage.clickSelectAllCheckboxInSelectColumnsPopup();
        expect(await providersAuditsPage.checkselectAllchecksAllCheckboxes()).toBe(true);
        await providersAuditsPage.clickSelectColumnsApplyButton();
        expect(await providersAuditsPage.getHeaderColumnsList()).toEqual(providersAuditsTestData.headerColumnsList);
    });
    it("Verify User Selected Columns are displayed on Audits Screen", async () => {
        await providersAuditsPage.clickSelectColumnsDropdownIcon();
        await providersAuditsPage.clickSelectAllCheckboxInSelectColumnsPopup();
        expect(await providersAuditsPage.clickUserChoiceCheckbox(providersAuditsTestData.userSelectedColumns)).toEqual(await providersAuditsPage.getColumnHeaderPostSelectingColumns());
    });
    it("Verify that Clear functionality in Select Columns List clears user Selected columns and displays default selected columns", async () => {
        await providersAuditsPage.clickSelectColumnsDropdownIcon();
        await providersAuditsPage.clickSelectColumnsClearButton();
        expect(await providersAuditsPage.getHeaderColumnsList()).toEqual(providersAuditsTestData.defaultHeaderColumnsList);
    });
    it("Verify Add Comment Icon is displayed on each Audit record", async () => {
        expect(await providersAuditsPage.checkSingleAuditAddCommentIconisEnabled()).toBe(true);
    });
    it("Verify display of Add Comment popup on clicking AuditID Add Comment Icon", async () => {
        await providersAuditsPage.clickSingleAuditAddCommentIcon(providersAuditsTestData.singleCommentAuditID);
        expect(await providersAuditsPage.displayOfSingleAuditAddCommentpopup()).toBe(true);
    });
    it("Verify Single Audit Add Comment popup Header equal to AuditId of Comment Icon that has been clicked", async () => {
        expect(await providersAuditsPage.singleAuditCommentpoupHeader()).toEqual((providersAuditsTestData.headerAddText1) + (providersAuditsTestData.singleCommentAuditID) + (providersAuditsTestData.headerAddText2));
    });
    it("Verify Note Section hint displayed on Single Audit Add Comment popup ", async () => {
        expect(await providersAuditsPage.singleAuditCommentpopupNoteInfo()).toEqual(providersAuditsTestData.addCommentHint);
    });
    it("Verify Note Section Maximum Charecter hint displayed on Single Audit Add Comment popup ", async () => {
        expect(await providersAuditsPage.singleAuditCommentpopupNoteMaxCharInfo()).toEqual(providersAuditsTestData.commentMaxCharHint);
    });
    it("Verify labels on Single Audit Add Comment popup", async () => {
        expect(await providersAuditsPage.singleAuditCommentpopupSaveButtonLabel()).toEqual(providersAuditsTestData.saveButtonLabel);
        expect(await providersAuditsPage.singleAuditCommentpopupCancelButtonLabel()).toEqual(providersAuditsTestData.cancelButtonLabel);
    });
    it("Verify Note Section inline Error Message displayed on Single Audit Add Comment poup ", async () => {
        await providersAuditsPage.clickSingleAuditCommentpopupSaveButton();
        expect(await providersAuditsPage.singleAuditCommentpopupInLineErrorMsg()).toEqual(providersAuditsTestData.commentpopupInlineErrorMsg);
    });
    it("Verify display of Success toaster after saving user entered Comment in Single Audit Add Comment popup ", async () => {
        await providersAuditsPage.singleOrBulkCommentpopupNoteSection(providersAuditsTestData.addCommentNote);
        await providersAuditsPage.clickSingleAuditCommentpopupSaveButton();
        expect(await providersAuditsPage.getAuditCommentSuccessToasterMsg()).toEqual((providersAuditsTestData.successToasterMsg) + (providersAuditsTestData.singleCommentAuditID));
    });
    it("Verify user is able to see Added Comment along with Added User Name in Note Section Summary", async () => {
        expect(await providersAuditsPage.getSingleAuditCommentpopupUserAddedNote()).toEqual(providersAuditsTestData.addCommentNote);
        await providersAuditsPage.clickSingleAuditCommentpopupCancelButton();
    });
    it("Verify Add Comment In Bulk Button is Enabled on Audits Screen", async () => {
        expect(await providersAuditsPage.checkAddCommentInBulkButtonisEnabled()).toBe(true);
        expect(await providersAuditsPage.getAddCommentInBulkButtonLabel()).toEqual(providersAuditsTestData.bulkCommentLabel);
    });
    it("Verify inline Error Message On Audits Screen when user clicks Add Comment In Bulk button without selecting Audits", async () => {
        await providersAuditsPage.clickAddCommentInBulkButton();
        expect(await providersAuditsPage.getInLineErrorMsgOnAuditsScreen()).toEqual(providersAuditsTestData.bulkCommentInlineErrorMsgOnAuditsScreen);
    });
    it("Verify display of Bulk Comment popup on clicking Add Comment In Bulk button post selecting Header Column Checkbox", async () => {
        await providersAuditsPage.clickBulkColumnHeaderCheckbox();
        await providersAuditsPage.clickAddCommentInBulkButton();
        expect(await providersAuditsPage.displayOfAddCommentInBulkpopup()).toBe(true);
    });
    it("Verify Header Text in Add Comment In Bulk popup ", async () => {
        expect(await providersAuditsPage.getHeaderFromAddCommentInBulkpopup()).toEqual(providersAuditsTestData.bulkCommentLabel);
    });
    it("Verify display of Success toaster after saving user entered Comment in Bulk Audit Add Comment popup ", async () => {
        await providersAuditsPage.singleOrBulkCommentpopupNoteSection(providersAuditsTestData.addCommentNote);
        await providersAuditsPage.clickAddCommentInBulkpopupSaveButton();
        expect(await providersAuditsPage.getAuditCommentSuccessToasterMsg()).toEqual((providersAuditsTestData.bulkSucessToasterMsg1) + (await providersAuditsPage.getAuditsCountperPage()) + (providersAuditsTestData.bulkSucessToasterMsg2));
    });
    it("Verify user is able to see Added Comment along with added User Name in Bulk Audits Note Section Summary", async () => {
        expect(await providersAuditsPage.getCommentByClickingMultipleAddCommentIcons()).toBe(true);
    });
    it("Verify display of Inline Error Message when user clicks on Download button without selecting an Audit", async () => {
        expect(await providersAuditsPage.visibilityOfDownloadButton()).toBe(true);
        await providersAuditsPage.clickDownloadButton();
        expect(await providersAuditsPage.getInLineErrorMsgOnAuditsScreen()).toEqual(providersAuditsTestData.bulkCommentInlineErrorMsgOnAuditsScreen);
    });
    it("Verify Audit is downloaded by displaying Success toaster", async () => {
        await commonUtilities.selectTableCheckboxAcrossPagination(providersAuditsTestData.multipleAuditIDs, 2);
        await providersAuditsPage.clickDownloadButton();
        await providersAuditsPage.checkDownloadSpinner();
        expect(await providersAuditsPage.getAuditCommentSuccessToasterMsg()).toEqual(providersAuditsTestData.successToasterDownloadMsg);
    });
    it("Verify Downloaded Audit Name in Local Dir is equal to Audit Name downloaded from UI", async () => {
        await providersAuditsPage.verifyDownloadedFileNameInDirectory();
    });
    it("Verify Filter Panel button is Enabled on Audits tab", async () => {
        expect(await providersAuditsPage.showButtonIsEnabled()).toBe(true);
    });
    it("Verify display of Filter Panel on clicking Show button on Audits tab", async () => {
        await providersAuditsPage.clickShowButtonOnFilterPanel();
        expect(await providersAuditsPage.displayOfFilterPanel()).toBe(true);
    });
    it("Verify all Labels on displayed Filter Panel ", async () => {
        expect(await providersAuditsPage.getlabelText(providersAuditsPage.filterPanelHeader)).toEqual(providersAuditsTestData.filterPanelHeader);;
        expect(await providersAuditsPage.getlabelText(providersAuditsPage.claimFilterLabel)).toEqual(providersAuditsTestData.filterLabelsOnFilterPanel[0]);
        expect(await providersAuditsPage.getlabelText(providersAuditsPage.auditIdFilterLabel)).toEqual(providersAuditsTestData.filterLabelsOnFilterPanel[1]);
        expect(await providersAuditsPage.getlabelText(providersAuditsPage.datasetFilterLabel)).toEqual(providersAuditsTestData.filterLabelsOnFilterPanel[2]);
        expect(await providersAuditsPage.getlabelText(providersAuditsPage.auditStautusFilterLabel)).toEqual(providersAuditsTestData.filterLabelsOnFilterPanel[3]);
        expect(await providersAuditsPage.getserachLabelOnFilterPanel()).toEqual(providersAuditsTestData.filterPanelSearchLabel);
        expect(await providersAuditsPage.getlabelText(providersAuditsPage.selectFiletrsDropdownButtonOnFilterPanel)).toEqual(providersAuditsTestData.filterPanelSelectFiltersLabel);
    });
    it("Verify Search results of Applied Filters in Filter Panel", async () => {
        await providersAuditsPage.setValueForClaimAuditIdDataSetAuditStatusFiltersOnFilterPanel();
        await providersAuditsPage.clickSearchOnFilterPanel();
        await providersAuditsPage.getAppliedFilterResultsInTable();
    });
})