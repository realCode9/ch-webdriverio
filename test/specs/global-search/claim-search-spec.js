import menuoptionsPage from "../../pageobjects/menuoptions-page";
import loginPage from "../../pageobjects/login/login-page";
import claimSearchTestData from "../../../resources/global-search/claim-search-test-data.json";
import claimSearchPage from "../../pageobjects/global-search/claim-search-page";
import commonUtilities from "../../../utilities/common-utilities"

describe("Validation of Claim Search Functionality", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it("Verify user is able to navigate to Claim Search", async () => {
        await menuoptionsPage.clickOnGlobalSearch();
        await claimSearchPage.clickOnClaimSearch();
        expect(await claimSearchPage.checkClaimSearchTabIsOpen()).toBe(claimSearchTestData.tabClass);
    });
    it("Verify the default fields of the Claim search tab", async () => {
        expect(await claimSearchPage.checkClaimNumberFieldIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkDataSetFieldIsDisplayed()).toBe(true);
    });
    it("Verify the default static message is displayed on the Claim search tab", async () => {
        expect(await claimSearchPage.checkDDefaultMessageIsDisplayed()).toBe(true);
    });
    it("Verify the contents of the static message displayed on the Claim search tab", async () => {
        expect(await claimSearchPage.checkDDefaultMessageContent()).toContain(claimSearchTestData.defaultMessage);
    });
    it("Verify the default buttons displayed on the Claim search tab", async () => {
        expect(await claimSearchPage.checkSearchButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkClearButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkExtractButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkBulkMRRButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkColumnSelectionButtonIsDisplayed()).toBe(true);
    });
    it("Verify the info icon is displayed next to the dataset field", async () => {
        expect(await claimSearchPage.checkInfoIconIsDisplayed()).toBe(true);
    });
    it("Verify the tooltip is displayed next to the dataset field", async () => {
        expect(await claimSearchPage.checkDatasetToolTipIsDisplayed()).toBe(true);
    });
    it("Verify the dataset tooltip text", async () => {
        expect(await claimSearchPage.getDatasetTooltipText()).toBe(claimSearchTestData.datasetTooltip);
    });
    it("Verify the tooltip is displayed on the disabled search button", async () => {
        expect(await claimSearchPage.checkSearchToolTipIsDisplayed()).toBe(true);
    });
    it("Verify the dataset tooltip text", async () => {
        expect(await claimSearchPage.getSearchTooltipText()).toBe(claimSearchTestData.searchTooltip);
    });
    it("Verify selecting dataset displays additional fields", async () => {
        await claimSearchPage.clickOnDatasetDropdown();
        await claimSearchPage.selectDataset();
        expect(await claimSearchPage.checkLOBIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkDOSIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMemberNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPatientFirstNameIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPatientLastNameIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkProviderNameIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkProviderTINIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkProviderNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkStateIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPayementTimingIsDisplayed()).toBe(true);
    });
    it("Validate searching using multiple parameters (Dataset, LOB and Provider Name)", async () => {
        await claimSearchPage.clickOnLOBDropdown();
        await claimSearchPage.selectLOB();
        await claimSearchPage.enterProviderName(claimSearchTestData.providerName)
        await claimSearchPage.clickOnSearch();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        let claimCount = await claimSearchPage.getClaimCount();
        expect(await claimSearchPage.getLOBText(claimCount)).toBe(true);
        expect(await claimSearchPage.getProviderText(claimCount)).toBe(true);
    });
    it("Verify search panel collapses on loading search results along with edit option", async () => {
        expect(await claimSearchPage.checkFilterLabelIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkFilterEditButtonIsDisplayed()).toBe(true)
    });
    it("Validate Display Audit Checkbox functionality", async () => {
        await claimSearchPage.clickOnEditFilterButton();
        await claimSearchPage.clickOnDisplayAuditCheckbox();
        await claimSearchPage.clickOnSearch();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect(await claimSearchPage.getFirstColumnHeader()).toBe(claimSearchTestData.firstHeader)
        expect(await claimSearchPage.getSecondColumnHeader()).toBe(claimSearchTestData.secondHeader)
    });
    it("Verify incorrect claim number search displays the No data label", async () => {
        await claimSearchPage.clickOnEditFilterButton();
        await claimSearchPage.clickOnClearButton()
        await claimSearchPage.enterClaimNumber(claimSearchTestData.incorrectClaimNumber);
        await claimSearchPage.clickOnSearch();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect(await claimSearchPage.checkNoDataIsPresent()).toBe(true);
    });
    it("Verify functionality of clear button", async () => {
        await claimSearchPage.clickOnEditFilterButton();
        await claimSearchPage.clickOnClearButton()
        expect(await claimSearchPage.getClaimNumber()).toBe("");
    });
    it("Verify default Exact Match search criteria is displayed when Claim Number is entered", async () => {
        await claimSearchPage.enterClaimNumber(claimSearchTestData.claimNumber);
        expect(await claimSearchPage.checkExactMatchButtonIsDisplayed()).toBe(true);
    });
    it("Verify search can be conducted for finding the exact matching claim number", async () => {
        await claimSearchPage.enterClaimNumber(claimSearchTestData.claimNumber);
        await claimSearchPage.clickOnSearch();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect(await claimSearchPage.checkClaimListingIsDisplayed()).toBe(true);
        expect(await claimSearchPage.getExactClaimNumer()).toBe(claimSearchTestData.claimNumber)
    });
    it("Verify extract download", async () => {
        let isFileExist = await claimSearchPage.verifyExtractDownload();
        expect(isFileExist).toBe(true)
    });
    it("Verify opening a claim with multiple audits displays the associated audit pop up", async () => {
        await claimSearchPage.clickOnEditFilterButton();
        await claimSearchPage.clickOnDatasetDropdown();
        await claimSearchPage.selectDataset();
        await claimSearchPage.clickOnDisplayAuditCheckbox();
        await claimSearchPage.clickOnSearch();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        await claimSearchPage.openFirstClaim();
        await claimSearchPage.checkLoaderIsDisplayed();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect(await claimSearchPage.checkAssociatedAuditPopupIsDisplayed()).toBe(true);
    });
    it("Verify the heading and columns on the associated audit pop up", async () => {
        expect(await claimSearchPage.getAssociatedAuditPopupHeading()).toBe(claimSearchTestData.associatedAuditHeaderText); 
        expect(await claimSearchPage.getAssociatedAuditPopupTableHeader() == (claimSearchTestData.associatedAuditTableHeader)).toBe(true);
    });
    it("Verify the project tab is opened by default on Claim detail on closing the Associated audit pop up", async () => {
        await claimSearchPage.closeAssociatedAuditPopUp();
        expect(await claimSearchPage.checkDefaultTabOnClaimSearch()).toBe(claimSearchTestData.tabClass);
        expect(await commonUtilities.clickOnElement(claimSearchPage.viewAuditEyeIcon));
    });
    it("Verify the tabs present on the Claim detail", async () => {
        expect(await claimSearchPage.checkClaimsTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkLinesTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkProviderTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMembersTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkClinicalTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkImagesTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMRRTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMemberClaimsTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkCOBTabIsDisplayed()).toBe(true);
    });
    it("Verify the action buttons present on the Claim detail page header", async () => {
        expect(await claimSearchPage.checkMRRButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkExclusionButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkToggleViewButtonIsDisplayed()).toBe(true);
    });
    it("Verify the column headers for the project listing", async () => {
        expect((await claimSearchPage.getProjectListingHeader()) == (claimSearchTestData.projectListingTableHeader)).toBe(true);
    });
    it("Verify the buttons present on the Project Tab (Add project, Close Project, Next Claim)", async () => {
        expect(await claimSearchPage.checkAddProjectButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkCloseProjectButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkNextClaimButtonIsDisplayed()).toBe(true);
    });
    it("Verify clicking on Add Project button opens a pop up for Available projects", async () => {
        await claimSearchPage.clickOnAddProjectButton();
        expect(await claimSearchPage.checkAvailableProjectPopUpIsDisplayed()).toBe(true);
    });
    it("Verify postpay and prepay checkboxes are present on claims tab", async () => {
        await claimSearchPage.cancelProjectSelection();
        await claimSearchPage.clickOnClaimsTab();
        expect(await claimSearchPage.checkPostPayCheckboxIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPrePayCheckboxIsDisplayed()).toBe(true);
    });
    it("Verify the different information sections present on the claims tab", async () => {
        expect(await claimSearchPage.checkClaimHeaderIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPatientHeaderIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkAmountHeaderIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkEncounterHeaderIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPaymentHeaderIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkProviderHeaderIsDisplayed()).toBe(true);
    });
    it("Verify the claims header with prepay and postpay columns", async () => {
        expect(await claimSearchPage.claimsHeaderText()).toEqual(claimSearchTestData.claimSectionHeader);
    });
    it("Verify the patients header with patient information", async () => {
        expect(await claimSearchPage.patientSectionText()).toEqual(claimSearchTestData.patientSectionHeader);
    });
    it("Verify the Payments header with prepay and postpay columns", async () => {
        expect(await claimSearchPage.paymentSectionText()).toEqual(claimSearchTestData.paymentSectionHeader);
    });
    it("Verify the Encounter header with prepay and postpay columns", async () => { 
        expect(await claimSearchPage.encounterSectionText()).toEqual(claimSearchTestData.encounterSectionHeader);
    });
    it("Verify the Provider header with provider information", async () => {
        expect(await claimSearchPage.providerSectionText()).toEqual(claimSearchTestData.providerSectionHeader);
    });
    it("Verify the Amounts header with prepay and postpay columns", async () => { 
        expect(await claimSearchPage.amountsSectionText()).toEqual(claimSearchTestData.amountsSectionHeader);
    });
    it("Verify the if Postpay is not checked, Postpay information will not be displayed.", async () => {
        await claimSearchPage.clickOnPostPay();
        expect(await claimSearchPage.claimsHeaderText()).toEqual(claimSearchTestData.prepayClaimsHeader);
    });
    it("Verify the project name is listed and that field is a multi-option drop down on Lines Tab", async () => {
        await claimSearchPage.clickOnLinesTab();
        expect(await claimSearchPage.checkProjectDropdownIsDisplayed()).toBe(true);
    });
    it("Verify the prepay, postpay and expand lines fields are present", async () => {
        expect(await claimSearchPage.checkLinesPrepayIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkLinesPostpayIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkExpandLinesCheckboxIsDisplayed()).toBe(true);
    });
    it("Verify the columns headers present on the lines tab", async () => {
        expect(await claimSearchPage.getLinesTabHeader()).toEqual(claimSearchTestData.linesTableHeader);
    });
    it("Verify the total Summary is present on the lines tab", async () => {
        expect(await claimSearchPage.checkTotalSummaryIsDisplayed()).toBe(true);
    });
    it("Verify the sections present on the Provider Tab", async () => {
        await claimSearchPage.clickOnProviderTab();
        expect(await claimSearchPage.checkRenderingSectionIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkBillingSectionIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkCorrespondenceSectionIsDisplayed()).toBe(true);
    });
    it("Verify the sections present on the Members Tab", async () => {
        await claimSearchPage.clickOnMemberTab();
        expect(await claimSearchPage.checkMemberSectionIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkSubscriberSectionIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkGroupSectionIsDisplayed()).toBe(true);
    });
    it("Verify the diagnosis section along with column headers is present on the Clinical Tab", async () => {
        await claimSearchPage.clickOnClinicalTab();
        expect(await claimSearchPage.checkDiagnosisSectionIsDisplayed()).toBe(true);
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect((await claimSearchPage.getDiagnosisHeaderListing()) == (claimSearchTestData.diagnosisHeaderText)).toBe(true);
    });
    it("Verify the Procedures section along with column headers is present on the Clinical Tab", async () => {
        expect(await claimSearchPage.checkProcedureSectionIsDisplayed()).toBe(true);
        expect((await claimSearchPage.getProcedureHeaderListing()) == (claimSearchTestData.procedureHeaderText)).toBe(true);
    });
    it("Verify the Conditions section along with column headers is present on the Clinical Tab", async () => {
        expect(await claimSearchPage.checkConditionsSectionIsDisplayed()).toBe(true);
        expect((await claimSearchPage.getConditionsHeaderListing()) == (claimSearchTestData.conditionsHeaderText)).toBe(true);
    });
    it("Verify the Occurences section along with column headers is present on the Clinical Tab", async () => {
        expect(await claimSearchPage.checkOccurencesSectionIsDisplayed()).toBe(true);
        expect((await claimSearchPage.getOccurencesHeaderListing()) == (claimSearchTestData.occurenceHeaderText)).toBe(true);
    });
    it("Verify the Values section along with column headers is present on the Clinical Tab", async () => {
        expect(await claimSearchPage.checkValuesSectionIsDisplayed()).toBe(true);
        expect((await claimSearchPage.getValuesHeaderListing()) == (claimSearchTestData.valuesHeaderText)).toBe(true);
    });
    it("Verify the RUG section along with column headers is present on the Clinical Tab", async () => {
        expect(await claimSearchPage.checkRUGSectionIsDisplayed()).toBe(true);
        expect((await claimSearchPage.getRUGHeaderListing()) == (claimSearchTestData.RUGHeaderText)).toBe(true);
    });
    it("Verify the DRG section along with rows is present on the Clinical Tab", async () => {
        expect(await claimSearchPage.checkDRGSectionIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkDRGRowIsPresent()).toBe(claimSearchTestData.DRGFirstRow)
        expect(await claimSearchPage.checkDRGWeightRowIsPresent()).toBe(claimSearchTestData.DRGSecondRow)
    });
    it("Verify the buttons and tabs present on the Images tab", async () => {
        await claimSearchPage.clickOnImagesTab();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect(await claimSearchPage.checkChooseFileButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkImageViewTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkImageHistoryTabIsDisplayed()).toBe(true);
    });
    it("Verify the uploading of an image in Images tab", async () => {
        expect(await claimSearchPage.verifyPDFFileUpload()).toEqual(claimSearchTestData.uploadedFileName);
    });
    it("Verify error message is displayed on uploading file with wrong extension", async function () {
        expect(await claimSearchPage.verifyMessageOnWrongFileUpload()).toBe(true);
    });
    it("Verify single file download functionality", async function () {
        expect(await claimSearchPage.verifyFileDownload()).toBe(true);
    });
    it("Verify download all functionality", async function () {
        expect(await claimSearchPage.verifyDownloadAll()).toBe(true);
    });
    it("Verify Send to Integrated OCR button generates green success message", async function () {
        expect(await claimSearchPage.verifySendToCavo()).toBe(true);
    });
    it("Verify the history tab headers ", async function () {
        expect((await claimSearchPage.getImageHistoryTabHeader()) == (claimSearchTestData.imageHistoryHeaderText)).toBe(true);
    });
    it("Verify the subtabs present in the MR tab ", async function () {
        await claimSearchPage.clickOnMRTab();
        expect(await claimSearchPage.checkCurrentTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkHistoryTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkNotesTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMRImagesTabIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkAdminTabIsDisplayed()).toBe(true);
    });
    it("Verify the current medical record of the user is populated", async function () {
        expect(await claimSearchPage.checkCurrentMRRIsDisplayed()).toBe(true);
    });
    it("Verify the notes section is present on the Current tab", async function () {
        expect(await claimSearchPage.checkNoteTypeIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkNoteTemplateIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkNoteTextAreaIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkAddNoteButtonIsDisplayed()).toBe(true);
    });
    it("Verify adding new note displays a success toaster", async function () {
        expect(await claimSearchPage.addNewNote()).toBe(true);
    });
    it("Verify the MR history tab headers ", async function () {
        await claimSearchPage.clickOnMRHistoryTab();     
        expect((await claimSearchPage.getMRHistoryTabHeader()) == (claimSearchTestData.MRHistoryHeader)).toBe(true);
    });
    it("Verify the MR Notes tab headers ", async function () {
        await claimSearchPage.clickOnNotesTab();
        expect((await claimSearchPage.getNotesTabHeader()) == (claimSearchTestData.MRNotesHeader)).toBe(true);
    });
    it("Verify the MRR Admin panel is displayed on the Admin tab ", async function () {
        await claimSearchPage.clickOnAdminTab();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect(await claimSearchPage.checkAdminPanelIsDisplayed()).toBe(true);
    });
    it("Verify the Admin tab headers ", async function () {
        expect((await claimSearchPage.adminTabHeader()) == (claimSearchTestData.adminHeader)).toBe(true);
    });
    it("Verify that calender search and search button are displayed on the Member claim tab ", async function () {
        await claimSearchPage.clickOnMemberClaimTab();
        await claimSearchPage.checkLoaderIsNotDisplayed();
        expect(await claimSearchPage.checkClaimDateRangeIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkClaimSearchButtonIsDisplayed()).toBe(true);
    });
    it("Verify that entering date range and searching populates the claim data ", async function () {
        await claimSearchPage.setDateRange(claimSearchTestData.dateRange);
        await claimSearchPage.clickOnDateRangeSearch();
        await claimSearchPage.checkForMemberClaimToBeDisplayed();
        expect((await claimSearchPage.getMemberClaimHeader()) == (claimSearchTestData.memberClaimHeaderText)).toBe(true);
    });
    it("Verify the Coordination of benefits section along with table header is present ", async function () {
        await claimSearchPage.clickOnCOBTab();
        expect(await claimSearchPage.checkPayerClaimSectionIsDisplayed()).toBe(true);     
        expect((await claimSearchPage.getPayerClaimHeader()) == (claimSearchTestData.payerClaimHeaderText)).toBe(true);
    });
    it("Verify the Insurance details section along with sub sections is present ", async function () {
        expect(await claimSearchPage.checkInsuranceDetailsSectionIsDisplayed()).toBe(true);    
        expect((await claimSearchPage.getInsuranceHeader()) == (claimSearchTestData.insuranceDetailsHeaderText)).toBe(true);
    });
    it("Verify the fields present in the Member details section ", async function () {
        expect(await claimSearchPage.checkInsuranceMemberNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMemberDOBIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMemberStatusIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkRelationshipStatusIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkRetireeFieldIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkWorkStatusIsDisplayed()).toBe(true);
    });
    it("Verify the fields present in the Insurance details section ", async function () {
        expect(await claimSearchPage.checkInsuranceNameIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkIndividualPolicyIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkOIRankIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkEffectiveDateIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkTerminationDateIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPrimacyDateIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkCobraIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkGroupNameIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkGroupNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkGroupSizeIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkProductTypeIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkCoverageTypeIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkInsurancePhoneNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkInvestigationNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkServiceProviderNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkPediatricDentalServiceIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkContraceptiveOnlyIsDisplayed()).toBe(true);
    });
    it("Verify the fields present in the Subscriber details section ", async function () {
        expect(await claimSearchPage.checkSubscriberFirstNameIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkSubscriberLastNameIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkSubscriberDOBIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkSubscriberSSNIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkSubscriberNumberIsDisplayed()).toBe(true);
    });
    it("Verify the fields present in the ESRD details section ", async function () {
        expect(await claimSearchPage.checkESRDIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkFirstDialysisDateIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkESRDTreatmentIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkTransplantDateIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkDisabilityDateIsDisplayed()).toBe(true);
    });
    it("Verify the fields present in the Medicare details section ", async function () {
        expect(await claimSearchPage.checkEntitlementReasonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMedicareNumberIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkMedicareDeductibleIsDisplayed()).toBe(true);
    });
    it("Verify the fields Create Insurance button is present and is disabled by default along with a clear button ", async function () {
        expect(await claimSearchPage.checkCreateInsuranceButtonIsDisplayed()).toBe(true);
        expect(await claimSearchPage.checkCreateInsuranceButtonIsDisabled()).toBe(false);
        expect(await claimSearchPage.checkClearInsuranceDeatilButtonIsDisplayed()).toBe(true);
    });
    it("Verify adding mandatory field (Insurance Name) will enable the Create button ", async function () {
        await claimSearchPage.enterInsuranceName(claimSearchTestData.insuranceNameText);
        expect(await claimSearchPage.checkCreateInsuranceButtonIsDisabled()).toBe(true);
    });
    it("Verify clear button clears the fields with data ", async function () {
        await claimSearchPage.clickOnClearInsuranceDetailsButton();
        expect(await claimSearchPage.getInsuranceName()).toBe("");
    });
    it("Verify new insurance can be created and number of entries increases ", async function () {
        let initialPageCount = await claimSearchPage.getTotalInsurance();
        await claimSearchPage.enterInsuranceName(claimSearchTestData.insuranceNameText);
        await claimSearchPage.clickOnCreateInsuranceButton();
        expect(await claimSearchPage.getInsuranceName()).toBe("");
        expect(await claimSearchPage.getTotalInsurance()).toBe(initialPageCount + 1);
    });

});
