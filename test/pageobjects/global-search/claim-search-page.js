import Page from "../page";
import commonFunctions from "../../../utilities/common-utilities";
import claimsTestData from "../../../resources/global-search/claim-search-test-data.json";

class ClaimSearchPage extends Page {
    get claimSearch() {
        return $("//li[@role='presentation']//button[contains(text(),'Claim Search')]");
    }
    get claimNumber() {
        return $("//input[@id='Claim-Number']");
    }
    get dataSet() {
        return $("//ng-select[@id='dataset']");
    }
    get defaultMessage() {
        return $("//div[@id='search-message']");
    }
    get searchButton() {
        return $("//button[@id='search-btn']");
    }
    get clearButton() {
        return $("//button[@id='clear-btn']");
    }
    get extractButton() {
        return $("//div[@id='app-csv-extract-csv-extract']")
    }
    get bulkMRRButton() {
        return $("//button[@id='bulk-medical-record-button']")
    }
    get columnSelectionButton() {
        return $("//button[@id='column-selection-btn']");
    }
    get datasetInfoIcon() {
        return $("//app-info-tooltip[@id='tooltip-btn-id']");
    }
    get datasetTooltip() {
        return $("//div[@class='p-tooltip p-component p-tooltip-top']")
    }
    get searchTooltip() {
        return $("//div[@class='tooltip-inner']");
    }
    get exactMatchButton() {
        return $("//button[@id='button-two']")
    }
    get startWithButton() {
        return $("//button[@id='button-one']")
    }
    get claimListingTable() {
        return $("//tr[@id='app-payer-claim-search-results-table-row-0']")
    }
    get loader() {
        return $("//*[@id='pareo-spinner']")
    }
    get searchedClaimNumber() {
        return $("//td[@id='row-0-td-0']")
    }
    get filterLabel() {
        return $("//div[@id='filter-label']")
    }
    get editFilterButton() {
        return $("//span[@id='edit-btn']")
    }
    get noDataLabel() {
        return $("//div[contains(text(),'No Data')]")
    }
    get selectedDataset() {
        return $("(//div[@role='option'])[3]");
    }
    get LOB() {
        return $("//ng-select[@id='lob']")
    }
    get dateOfService() {
        return $("//input[@id='app-date-input-Date-of-Service']")
    }
    get memberNumber() {
        return $("//input[@id='Member-Number']")
    }
    get patientFirstName() {
        return $("//input[@id='patient-fname']")
    }
    get patientLastName() {
        return $("//input[@id='patient-lname']")
    }
    get providerName() {
        return $("//input[@id='Provider-Name']")
    }
    get providerTIN() {
        return $("//input[@id='provider-tin']")
    }
    get providerNumer() {
        return $("//input[@id='provider-number']")
    }
    get states() {
        return $("//ng-select[@id='states']")
    }
    get paymentTiming() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Payment-Timing']")
    }
    get selectedLOB() {
        return $("//div[@role='option'][2]")
    }
    get claimList() {
        return $$("//tbody//tr")
    }
    get displayAuditCheckbox() {
        return $("//span[@id='display-audit-checkbtn']")
    }
    get firstColumnHeader() {
        return $("//th[@id='th0']")
    }
    get secondColumnHeader() {
        return $("//th[@id='th1']")
    }
    get firstClaim() {
        return $("//tr[@id='app-payer-claim-search-results-table-row-0']")
    }
    get associatedAuditPopup() {
        return $("//div[@class='modal-content']")
    }
    get associatedAuditPopupHeader() {
        return $("//h4[@id='modal-basic-title']")
    }
    get associatedAuditTableHeader() {
        return $$("//tr[@class='sticky-header']//th")
    }
    get closeButton() {
        return $("//button[@class='btn btn-sm btn-danger m-t-n-md model-close-button']")
    }
    get viewAuditEyeIcon(){
        return $("//tbody/tr[1]/td[5]/button[1]")
    }
    get projectTab() {
        return $("//a[@id='defaultTab']")
    }
    get claimsTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Claim')]")
    }
    get linesTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Lines')]")
    }
    get providerTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Provider')]")
    }
    get memberTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Member')]")
    }
    get clinicalTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Clinical')]")
    }
    get imagesTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Images')]")
    }
    get MRRTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Medical Records')]")
    }
    get memberClaimsTab() {
        return $("//app-tab-title-icon//span[contains(text(),'Member Claims')]")
    }
    get COBTab() {
        return $("//app-tab-title-icon//span[contains(text(),'COB')]")
    }
    get medicalRecordButton() {
        return $("//button[@id='medical-record-button']")
    }
    get exclusionButton() {
        return $("//button[@id='check-for-exclusions-btn']")
    }
    get toggleViewButton() {
        return $("//button[@id='toggle-view-btn']")
    }
    get projectListingHeader() {
        return $$("//table//thead//tr//th")
        //return $$("//tr[@class='sticky-header dm-p-header-width']/th")
    }
    get addProjectButton() {
        return $("//button[@id='add-project-btn']")
    }
    get closeProjectButton() {
        return $("//button[@id='close-projects-btn']")
    }
    get nextClaimButton() {
        return $("//*[@id='next-claim-button']")
    }
    get availableProjectPopup() {
        return $("//div[@class='modal-body']")
    }
    get cancelButton() {
        return $("//button[contains(text(),'Cancel')]")
    }
    get postPayCheckbox() {
        return $("//input[@id='postPay']")
    }
    get prePayCheckbox() {
        return $("//input[@id='prePay']")
    }
    get claimHeader() {
        return $("//div[@id='claim-div']")
    }
    get patientHeader() {
        return $("//div[@id='patient-div']")
    }
    get paymentHeader() {
        return $("//div[@id='payment-div']")
    }
    get encounterHeader() {
        return $("//div[@id='encounter-div']")
    }
    get providerHeader() {
        return $("//div[@id='provider-div']")
    }
    get amountsHeader() {
        return $("//div[@id='amounts-div']")
    }
    get claimSectionHeader() {
        return $("//app-data-row-header[@text='Claim']")
    }
    get patientSectionHeader() {
        return $("//app-page-header[@text='Patient']")
    }
    get paymentSectionHeader() {
        return $("//app-data-row-header[@text='Payment']")
    }
    get encounterSectionHeader() {
        return $("//app-data-row-header[@text='Encounter']")
    }
    get providerSectionHeader() {
        return $("//app-page-header[@text='Provider']")
    }
    get amountsSectionHeader() {
        return $("//app-data-row-header[@text='Amounts']")
    }
    get projectDropdown() {
        return $("//ng-select[@id='query']")
    }
    get linesPostpayCheckbox() {
        return $("//div[2]/app-checkbox/div/span[contains(text(),'Postpay')]")
    }
    get linesPrepayCheckbox() {
        return $("//app-checkbox[1]/div[1]/span[1][contains(text(),'Prepay')]")
    }
    get expandLinesCheckbox() {
        return $("//span[contains(text(),'Expand Lines')]")
    }
    get linesTableHeader() {
        return $$("//*[@id='data-mining-lines-table']/div/div/table/thead/tr/th")
    }
    get totalSummary() {
        return $("//app-payer-claim-lines/div/div/div[3]/div[2]")
    }
    get renderingSection() {
        return $("//div[@id='rendering-div']")
    }
    get billingSection() {
        return $("//div[@id='billing-div']")
    }
    get correspondenceSection() {
        return $("//div[@id='correspondence-div']")
    }
    get memberSection() {
        return $("//div[@id='member-div']")
    }
    get subscriberSection() {
        return $("//div[@id='subscriber-div']")
    }
    get groupSection() {
        return $("//div[@id='group-div']")
    }
    get diagnosisSection() {
        return $("//div[@id='diagnoses-div']")
    }
    get diagnosisSectionHeader() {
        return $$("//*[@id='diagnoses-div']/ng-scrollbar/div/div[3]/p-table/div/div/table/thead/tr/th")
    }
    get proceduresSection() {
        return $("//div[@id='procedures-div']")
    }
    get procedureSectionHeader() {
        return $$("//*[@id='procedures-div']/ng-scrollbar/div/div[3]/p-table/div/div/table/thead/tr/th")
    }
    get conditionsSection() {
        return $("//div[@id='conditions-div']")
    }
    get conditionsSectionHeader() {
        return $$("//*[@id='conditions-div']/ng-scrollbar/div/div[3]/p-table/div/div/table/thead/tr/th")
    }
    get occurencesSection() {
        return $("//div[@id='occurences-div']")
    }
    get occurencesSectionHeader() {
        return $$("//*[@id='occurences-div']/ng-scrollbar/div/div[3]/p-table/div/div/table/thead/tr/th")
    }
    get valuesSection() {
        return $("//div[@id='values-div']")
    }
    get valuesSectionHeader() {
        return $$("//*[@id='values-div']/ng-scrollbar/div/div[3]/p-table/div/div/table/thead/tr/th")
    }
    get RUGSection() {
        return $("//div[@id='rug-div']")
    }
    get RUGSectionHeader() {
        return $$("//*[@id='rug-div']/ng-scrollbar/div/div[3]/p-table/div/div/table/thead/tr/th")
    }
    get DRGSection() {
        return $("//div[@id='drg-div']")
    }
    get DRGRow() {
        return $("//*[@id='drg-div']/app-data-row[1]/div/div[1]/div")
    }
    get DRGWeightRow() {
        return $("//*[@id='drg-div']/app-data-row[2]/div/div[1]/div")
    }
    get chooseFileButton() {
        return $("//div[@class='file-select']")
    }
    get imageViewTab() {
        return $("//app-prime-tabs/p-tabview/div/ul/li[1]")
    }
    get imageHistoryTab() {
        return $("//app-prime-tabs/p-tabview/div/ul/li[2]")
    }
    get fileSelection() {
        return $("//input[@name='file']");
    }
    get tagDropdown() {
        return $("//div[1]/app-image-tag-dropdown[1]/div[1]/ng-select[1]/div[1]/span[1]")
    }
    get uploadButton() {
        return $("//button[normalize-space()='Upload']");
    }
    get imageViewIcon() {
        return $("//span[@id='app-image-list-OpenImageViewer0']")
    }
    get viewIconTooltip() {
        return $("//div[@class='ui-tooltip-text ui-shadow ui-corner-all']");
    }
    get fileName() {
        return $("//div[2]/table[1]/tbody[1]/tr[1]/td[1]")
    }
    get toasterMessage() {
        return $("//div[@class='snotifyToast__body']");
    }
    get downloadButton() {
        return $("//*[@id='app-image-list-AddDownloadHistory0']/app-download-button/div/button")
    }
    get downloadSpinner() {
        return $("//div[@class='spinner']//span//*[name()='svg']");
    }
    get downloadAllButton() {
        return $("//*[@id='app-image-wrapper-addDownloadAllHistory']")
    }
    get downloadWarning() {
        return $("//app-modal/div[@class='modal-content']")
    }
    get continueDownloadButton() {
        return $("//button[contains(text(),'Download')]")
    }
    get sendToCavoButton() {
        return $("//span[@id='app-image-list-UploadToCavo0']")
    }
    get viewInCavoButton() {
        return $("//tr[1]/td[5]/div/span[4]/app-cavo-link/button")
    }
    get historyTabHeader() {
        return $$("//*[@id='imageHistoryTable']")
    }
    get currentTab() {
        return $("//a[@id='current']")
    }
    get historyTab() {
        return $("//a[@id='history']")
    }
    get notesTab() {
        return $("//a[@id='notes']")
    }
    get MRRImagesTab() {
        return $("//app-medical-record-request/div/ngb-tabset/ul/li[4]/a")
    }
    get adminTab() {
        return $("//a[@id='admin']")
    }
    get currentMedicalRecordRequest() {
        return $("//div[@id='current-panel']")
    }
    get noteType() {
        return $("//app-medical-record-request-current/div/div[3]/div/app-note-type-driven-templates/div/div[1]/app-code-list-dropdown/div/ng-select")
    }
    get noteTemplate() {
        return $("//app-medical-record-request-current/div/div[3]/div/app-note-type-driven-templates/div/div[2]/app-note-templates-dropdown/ng-select")
    }
    get noteTextArea() {
        return $("//textarea[@id='add-note-text-id']")
    }
    get addNoteButton() {
        return $("//button[@id='add-note-btn']")
    }
    get MRHistoryHeader() {
        return $$("//tr[@class='sticky-header']/th")
    }
    get notesHeader() {
        return $$("//tr[@class='sticky-header']/th")
    }
    get adminPanelMRR() {
        return $("//div[@id='admin-panel']")
    }
    get adminPanelHeader() {
        return $$("//tr[@class='sticky-header']/th")
    }
    get claimDateRange() {
        return $("//input[@id='app-date-range-input-']")
    }
    get memberClaimSearchButton() {
        return $("//app-member-claims[1]/div[1]/div[2]/button[1]")
    }
    get memberClaimHeader() {
        return $$("//tr[@class='sticky-header']/th")
    }
    get memberClaimTable(){
        return $("//*[@id='memberClaimsTable']/p-table/div/div")
    }
    get payerClaimList() {
        return $("//div[@id='cobPayerClaimList']")
    }
    get payerClaimHeader() {
        return $$("//tr[@class='sticky-header ng-star-inserted']/th")
    }
    get createInsuranceSection() {
        return $("//app-page-header[@class='app-page-header claim-detail-header']")
    }
    get insuranceDetailsHeader() {
        return $$("//p-header")
    }
    get insuranceMemberNumber() {
        return $("//input[@id='member-number']")
    }
    get memberDOB() {
        return $("//input[@id='app-date-input-Member-DOB']")
    }
    get memberStatus() {
        return $("//ng-select[@id='status']")
    }
    get relationshipStatus() {
        return $("//ng-select[@id='app-code-list-dropdown-Relationship-Types']")
    }
    get retiree() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Retiree']")
    }
    get workStatus() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Work-Status']")
    }
    get insuranceName() {
        return $("//input[@id='insurance-name']")
    }
    get individualPolicy() {
        return $("//label[contains(text(),'Individual Policy')]")
    }
    get rankOI() {
        return $("//ng-select[@id='app-code-list-dropdown-OI-Ranks']")
    }
    get primacyDate() {
        return $("//input[@id='app-date-input-Primacy-Date']")
    }
    get effectiveDate() {
        return $("//input[@id='app-date-input-Effective-Date']")
    }
    get terminationDate() {
        return $("//input[@id='app-date-input-Termination-Date']")
    }
    get cobra() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Cobra']")
    }
    get groupName() {
        return $("//input[@id='group-name']")
    }
    get groupNumber() {
        return $("//input[@id='group-number']")
    }
    get groupSize() {
        return $("//input[@id='group-size']")
    }
    get productType() {
        return $("//ng-select[@id='app-code-list-dropdown-Product-Types']")
    }
    get coverageType() {
        return $("//ng-select[@id='app-code-list-dropdown-Product-Types']")
    }
    get insurancePhoneNumber() {
        return $("//input[@id='insurance-phone-number']")
    }
    get investigationNumber() {
        return $("//input[@id='investigation-number']")
    }
    get serviceProviderNumber() {
        return $("//input[@id='service-provider-number']")
    }
    get pediatricDental() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Pediatric-Dental']")
    }
    get contraceptiveOnly() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Pediatric-Dental']")
    }
    get subscriberFirstName() {
        return $("//input[@id='subscriber-first-name']")
    }
    get subscriberLastName() {
        return $("//input[@id='subscriber-last-name']")
    }
    get subscriberDOB() {
        return $("//input[@id='app-date-input-Subscriber-DOB']")
    }
    get subscriberSSN() {
        return $("//input[@id='subscriber-ssn']")
    }
    get subscriberNumber() {
        return $("//input[@id='subscriber-number']")
    }
    get esrd() {
        return $("//ng-select[@id='app-custom-dropdown-Select-ESRD']")
    }
    get dateFirstDialysis() {
        return $("//input[@id='app-date-input-ESRD-Date-First-Dialysis']")
    }
    get treatment() {
        return $("//ng-select[@id='app-custom-dropdown-Select-ESRD-Treatment']")
    }
    get transplantDate() {
        return $("//input[@id='app-date-input-Transplant-Date']")
    }
    get disabilityDate() {
        return $("//input[@id='app-date-input-Disability-Date']")
    }
    get entitlementReason() {
        return $("//ng-select[@id='app-code-list-dropdown-Entitlement-Reasons']")
    }
    get medicareNumber() {
        return $("//ng-select[@id='app-code-list-dropdown-Entitlement-Reasons']")
    }
    get medicareDeductible() {
        return $("//input[@id='medicare-deductible']")
    }
    get createInsuranceButton() {
        return $("//button[@id='new-save-insurance']")
    }
    get clearInsuranceDetailsButton() {
        return $("//button[@id='clear-cancel-insurance']")
    }
    get paginationFooter() {
        return $("//div[@class='page-size ng-star-inserted']")
    }
    // Functions of all claim search actions
    async clickOnClaimSearch() {
        try {
            await this.claimSearch.waitForClickable();
            await this.claimSearch.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }

    }
    async checkClaimSearchTabIsOpen() {
        try {
            return await this.claimSearch.getAttribute('class');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClaimNumberFieldIsDisplayed() {
        try {
            return await this.claimNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDataSetFieldIsDisplayed() {
        try {
            return await this.dataSet.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async checkDDefaultMessageIsDisplayed() {
        try {
            return await this.defaultMessage.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

    async checkDDefaultMessageContent() {
        try {
            return await this.defaultMessage.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSearchButtonIsDisplayed() {
        try {
            return await this.searchButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClearButtonIsDisplayed() {
        try {
            return await this.clearButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkExtractButtonIsDisplayed() {
        try {
            return await this.extractButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkBulkMRRButtonIsDisplayed() {
        try {
            return await this.bulkMRRButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkColumnSelectionButtonIsDisplayed() {
        try {
            return await this.columnSelectionButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkInfoIconIsDisplayed() {
        try {
            return await this.datasetInfoIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDatasetToolTipIsDisplayed() {
        try {

            await this.datasetInfoIcon.waitForClickable();
            await this.datasetInfoIcon.moveTo();
            return await this.datasetTooltip.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSearchToolTipIsDisplayed() {
        try {


            await this.searchButton.moveTo();
            return await this.searchTooltip.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getDatasetTooltipText() {
        try {

            return await this.datasetTooltip.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSearchTooltipText() {
        try {

            return await this.searchTooltip.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterClaimNumber(claimNum) {
        try {

            await this.claimNumber.setValue(claimNum);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkExactMatchButtonIsDisplayed() {
        try {

            return await this.exactMatchButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnSearch() {
        try {

            await this.searchButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClaimListingIsDisplayed() {
        try {

            return await this.claimListingTable.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkLoaderIsNotDisplayed() {
        try {

            await this.loader.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkLoaderIsDisplayed() {
        try {

            await this.loader.waitForDisplayed({ timeout: 10000 });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkForMemberClaimToBeDisplayed() {
        try {

            return await this.memberClaimTable.waitForDisplayed({ timeout: 10000 });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getExactClaimNumer() {
        try {

            return await this.searchedClaimNumber.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkFilterLabelIsDisplayed() {
        try {

            return await this.filterLabel.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkFilterEditButtonIsDisplayed() {
        try {

            return await this.editFilterButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnEditFilterButton() {
        try {

            await this.editFilterButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnClearButton() {
        try {

            await this.clearButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNoDataIsPresent() {
        try {

            return await this.noDataLabel.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnDatasetDropdown() {
        try {

            await this.dataSet.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async selectDataset() {
        try {

            await this.selectedDataset.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkLOBIsDisplayed() {
        try {

            return await this.LOB.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDOSIsDisplayed() {
        try {

            return await this.dateOfService.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberNumberIsDisplayed() {
        try {

            return await this.memberNumber.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPatientFirstNameIsDisplayed() {
        try {

            return await this.patientFirstName.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPatientLastNameIsDisplayed() {
        try {

            return await this.patientLastName.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProviderNameIsDisplayed() {
        try {

            return await this.providerName.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProviderTINIsDisplayed() {
        try {

            return await this.providerTIN.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProviderNumberIsDisplayed() {
        try {

            return await this.providerNumer.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkStateIsDisplayed() {
        try {

            return await this.states.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPayementTimingIsDisplayed() {
        try {

            return await this.paymentTiming.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getClaimNumber() {
        try {

            return await this.claimNumber.getText();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnLOBDropdown() {
        try {

            await this.LOB.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async selectLOB() {
        try {

            await this.selectedLOB.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterProviderName(name) {
        try {

            await this.providerName.setValue(name);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getClaimCount() {
        try {

            return await this.claimList.length;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getLOBText(noOfClaims) {
        try {
            let isEqual;
            let lobText;
            for (let i = 1; i <= noOfClaims; i++) {

                let lobColumn = $(`//tr[${i}]/td[${2}]`)
                lobText = await lobColumn.getText();
                if((lobText)==(claimsTestData.LOB)){
                    isEqual=true;
                }
                else
                isEqual=false;
            }
            return isEqual;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProviderText(noOfClaims) {
        try {
            let isEqual;
            let providerText;
            for (let i = 1; i <= noOfClaims; i++) {

                let providerColumn = $(`//tr[${i}]/td[${4}]`)
                providerText = await providerColumn.getText();
                if((providerText)==(claimsTestData.providerName)){
                    isEqual=true;
                }
                else
                isEqual=false;
            }
            return isEqual;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async verifyExtractDownload() {
        try {
            await this.extractButton.waitForClickable();
            await this.extractButton.click();
            await this.downloadSpinner.waitForDisplayed({ reverse: true });
            
            const presentDate = commonFunctions.getCurrentDate();
            const fileName = 'Claims' + ' - ' + presentDate + '.csv';

            // See if the file exists
            if (commonFunctions.checkIfFileExists(fileName)) {
                return true;
            }
            return fileName;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnDisplayAuditCheckbox() {
        try {

            await this.displayAuditCheckbox.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getFirstColumnHeader() {
        try {

            return await this.firstColumnHeader.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSecondColumnHeader() {
        try {

            return await this.secondColumnHeader.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async openFirstClaim() {
        try {

            await this.firstClaim.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAssociatedAuditPopupIsDisplayed() {
        try {

            return await this.associatedAuditPopup.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAssociatedAuditPopupHeading() {
        try {

            return await this.associatedAuditPopupHeader.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAssociatedAuditPopupTableHeader() {
        try {
            let header = await this.associatedAuditTableHeader.map(elem => elem.getText());
            let tableHeader = (header).filter(data => data);
            return tableHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async closeAssociatedAuditPopUp() {
        try {

            await this.closeButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDefaultTabOnClaimSearch() {
        try {

            return await this.projectTab.getAttribute('class');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClaimsTabIsDisplayed() {
        try {
            return await this.claimsTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkLinesTabIsDisplayed() {
        try {
            return await this.linesTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProviderTabIsDisplayed() {
        try {
            return await this.providerTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMembersTabIsDisplayed() {
        try {
            return await this.memberTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClinicalTabIsDisplayed() {
        try {
            return await this.clinicalTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkImagesTabIsDisplayed() {
        try {
            return await this.imagesTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMRRTabIsDisplayed() {
        try {
            return await this.MRRTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberClaimsTabIsDisplayed() {
        try {
            return await this.memberClaimsTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCOBTabIsDisplayed() {
        try {
            return await this.COBTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMRRButtonIsDisplayed() {
        try {
            return await this.medicalRecordButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkExclusionButtonIsDisplayed() {
        try {
            return await this.exclusionButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkToggleViewButtonIsDisplayed() {
        try {
            return await this.toggleViewButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProjectListingHeader() {
        try {
            let header = await this.projectListingHeader.map(elem => elem.getText());
            let projectListingHeader = (header).filter(data => data);
            return projectListingHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAddProjectButtonIsDisplayed() {
        try {
            return await this.addProjectButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCloseProjectButtonIsDisplayed() {
        try {
            return await this.closeProjectButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNextClaimButtonIsDisplayed() {
        try {
            return await this.nextClaimButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnAddProjectButton() {
        try {
            await this.addProjectButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAvailableProjectPopUpIsDisplayed() {
        try {
            return await this.availableProjectPopup.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async cancelProjectSelection() {
        try {
            await this.cancelButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnClaimsTab() {
        try {
            await this.claimsTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPostPayCheckboxIsDisplayed() {
        try {
            return await this.postPayCheckbox.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPrePayCheckboxIsDisplayed() {
        try {
            return await this.prePayCheckbox.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClaimHeaderIsDisplayed() {
        try {
            return await this.claimHeader.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPatientHeaderIsDisplayed() {
        try {
            return await this.patientHeader.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAmountHeaderIsDisplayed() {
        try {
            return await this.amountsHeader.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkEncounterHeaderIsDisplayed() {
        try {
            return await this.encounterHeader.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPaymentHeaderIsDisplayed() {
        try {
            return await this.paymentHeader.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProviderHeaderIsDisplayed() {
        try {
            return await this.providerHeader.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async claimsHeaderText() {
        try {
             let claimHeader = await this.claimSectionHeader.getText();
             claimHeader = claimHeader.replace(/[\n]/g, ' ');
             return claimHeader;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async patientSectionText() {
        try {
            let patientHeader = await this.patientSectionHeader.getText();
            patientHeader = patientHeader.replace(/[\n]/g, ' ');
            return patientHeader;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async paymentSectionText() {
        try {
            let paymentHeader = await this.paymentSectionHeader.getText();
        paymentHeader = paymentHeader.replace(/[\n]/g, ' ');
            return paymentHeader;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async encounterSectionText() {
        try {
            let encounterHeader = await this.encounterSectionHeader.getText();
            encounterHeader = encounterHeader.replace(/[\n]/g, ' ');
            return encounterHeader;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async providerSectionText() {
        try {
            let providerHeader = await this.providerSectionHeader.getText();
            providerHeader = providerHeader.replace(/[\n]/g, ' ');
            return providerHeader;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async amountsSectionText() {
        try {
            let amountsHeader = await this.amountsSectionHeader.getText();
            amountsHeader = amountsHeader.replace(/[\n]/g, ' ');
            return amountsHeader;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnPostPay() {
        try {
            await this.postPayCheckbox.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnLinesTab() {
        try {
            await this.linesTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProjectDropdownIsDisplayed() {
        try {
            return await this.projectDropdown.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkLinesPrepayIsDisplayed() {
        try {
            return await this.linesPrepayCheckbox.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkLinesPostpayIsDisplayed() {
        try {
            return await this.linesPostpayCheckbox.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkExpandLinesCheckboxIsDisplayed() {
        try {
            return await this.expandLinesCheckbox.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getLinesTabHeader() {
        try {

            let header = await this.linesTableHeader.map(elem => elem.getText());
            let linesTabHeader = (header).filter(data => data);
            return linesTabHeader.toString();;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkTotalSummaryIsDisplayed() {
        try {
            return await this.totalSummary.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnProviderTab() {
        try {
            await this.providerTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkRenderingSectionIsDisplayed() {
        try {
            return await this.renderingSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkBillingSectionIsDisplayed() {
        try {
            return await this.billingSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCorrespondenceSectionIsDisplayed() {
        try {
            return await this.correspondenceSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnMemberTab() {
        try {
            await this.memberTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberSectionIsDisplayed() {
        try {
            return await this.memberSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSubscriberSectionIsDisplayed() {
        try {
            return await this.subscriberSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkGroupSectionIsDisplayed() {
        try {
            return await this.groupSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnClinicalTab() {
        try {
            await this.clinicalTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDiagnosisSectionIsDisplayed() {
        try {
            return await this.diagnosisSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getDiagnosisHeaderListing() {
        try {
            let diagnosisHeader = await this.diagnosisSectionHeader.map(elem => elem.getText());
            return diagnosisHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProcedureSectionIsDisplayed() {
        try {
            return await this.proceduresSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProcedureHeaderListing() {
        try {
            let procedureHeader = await this.procedureSectionHeader.map(elem => elem.getText());
            return procedureHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkConditionsSectionIsDisplayed() {
        try {
            return await this.conditionsSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getConditionsHeaderListing() {
        try {
            let conditionsHeader = await this.conditionsSectionHeader.map(elem => elem.getText());
            return conditionsHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkOccurencesSectionIsDisplayed() {
        try {
            return await this.occurencesSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getOccurencesHeaderListing() {
        try {
            let occurencesHeader = await this.occurencesSectionHeader.map(elem => elem.getText());
            return occurencesHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkValuesSectionIsDisplayed() {
        try {
            return await this.valuesSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getValuesHeaderListing() {
        try {
            let valuesHeader = await this.valuesSectionHeader.map(elem => elem.getText());
            return valuesHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkRUGSectionIsDisplayed() {
        try {
            return await this.RUGSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getRUGHeaderListing() {
        try {
            let RUGHeader = await this.RUGSectionHeader.map(elem => elem.getText());
            return RUGHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDRGSectionIsDisplayed() {
        try {
            await this.DRGSection.scrollIntoView();
            return await this.DRGSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDRGRowIsPresent() {
        try {
            return await this.DRGRow.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDRGWeightRowIsPresent() {
        try {
            return await this.DRGWeightRow.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnImagesTab() {
        try {
            await this.imagesTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkChooseFileButtonIsDisplayed() {
        try {
            return await this.chooseFileButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkImageViewTabIsDisplayed() {
        try {
            return await this.imageViewTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkImageHistoryTabIsDisplayed() {
        try {
            return await this.imageHistoryTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async verifyPDFFileUpload() {
        try {
            await commonFunctions.uploadFile(claimsTestData.filePath, this.fileSelection);
            await this.tagDropdown.click();
            await commonFunctions.selectDropDownOptions(claimsTestData.tagName);
            await this.uploadButton.click();
            await this.tagDropdown.waitForDisplayed({ reverse: true });
            return await this.fileName.getText()
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async verifyMessageOnWrongFileUpload() {
        try {
            await commonFunctions.uploadFile(claimsTestData.wrongFilePath, this.fileSelection);
            await this.tagDropdown.click();
            await commonFunctions.selectDropDownOptions(claimsTestData.tagName);
            await this.uploadButton.click();
            await this.toasterMessage.waitForDisplayed();
            return await this.toasterMessage.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async verifyFileDownload() {
        try {
            await this.toasterMessage.click();
            await this.downloadButton.waitForClickable();
            await this.downloadButton.click();
            await this.downloadSpinner.waitForDisplayed({ reverse: true });

            const myFile = claimsTestData.downloadFile;

            // See if the file exists
            if (commonFunctions.checkIfFileExists(myFile)) {
                return true;
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async verifyDownloadAll() {
        try {
            await this.downloadAllButton.waitForClickable();
            await this.downloadAllButton.click();
            await this.downloadWarning.isDisplayed();
            await this.continueDownloadButton.click();
            await this.downloadSpinner.waitForDisplayed({ reverse: true });

            const myFile = claimsTestData.downloadAllZip;

            // See if the file exists
            if (commonFunctions.checkIfFileExists(myFile)) {
                return true;
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async verifySendToCavo() {
        try {
            await this.sendToCavoButton.waitForClickable();
            await this.sendToCavoButton.click();
            await this.downloadSpinner.waitForDisplayed({ reverse: true });
            await this.viewInCavoButton.isDisplayed();
            return await this.toasterMessage.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getImageHistoryTabHeader() {
        try {
            await this.imageHistoryTab.click();
            let historyHeader = await this.historyTabHeader.map(elem => elem.getText());
            return historyHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnMRTab() {
        try {
            await this.MRRTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCurrentTabIsDisplayed() {
        try {
            return await this.currentTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkHistoryTabIsDisplayed() {
        try {
            return await this.historyTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNotesTabIsDisplayed() {
        try {
            return await this.notesTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMRImagesTabIsDisplayed() {
        try {
            return await this.MRRImagesTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAdminTabIsDisplayed() {
        try {
            return await this.adminTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCurrentMRRIsDisplayed() {
        try {
            return await this.currentMedicalRecordRequest.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNoteTypeIsDisplayed() {
        try {
            await this.noteType.scrollIntoView();
            return await this.noteType.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNoteTemplateIsDisplayed() {
        try {
            return await this.noteTemplate.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNoteTextAreaIsDisplayed() {
        try {
            return await this.noteTextArea.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAddNoteButtonIsDisplayed() {
        try {
            return await this.addNoteButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async addNewNote() {
        try {
            await this.noteType.click();
            await commonFunctions.selectDropDownOptions(claimsTestData.noteType);
            await this.noteTemplate.click();
            await commonFunctions.selectDropDownOptions(claimsTestData.noteTemplate);
            await this.addNoteButton.click();
            return await this.toasterMessage.isDisplayed();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnMRHistoryTab() {
        try {
            await this.historyTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMRHistoryTabHeader() {
        try {
            let header = await this.MRHistoryHeader.map(elem => elem.getText());
            let MRHistoryHeader = (header).filter(data => data);
            return MRHistoryHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnNotesTab() {
        try {
            await this.notesTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getNotesTabHeader() {
        try {
            let header = await this.notesHeader.map(elem => elem.getText());
            let notesHeader = (header).filter(data => data);
            return notesHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAdminPanelIsDisplayed() {
        try {
            return await this.adminPanelMRR.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnAdminTab() {
        try {
            await this.adminTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async adminTabHeader() {
        try {
            let header = await this.adminPanelHeader.map(elem => elem.getText());
            let adminHeader = (header).filter(data => data);
            return adminHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnMemberClaimTab() {
        try {
            await this.memberClaimsTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClaimDateRangeIsDisplayed() {
        try {
            return await this.claimDateRange.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClaimSearchButtonIsDisplayed() {
        try {
            return await this.memberClaimSearchButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnDateRangeSearch() {
        try {
            await this.memberClaimSearchButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async setDateRange(claimDate) {
        try {

            await this.claimDateRange.setValue(claimDate);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMemberClaimHeader() {
        try {
            let header = await this.memberClaimHeader.map(elem => elem.getText());
            let memberClaimHeader = (header).filter(data => data);
            return memberClaimHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnCOBTab() {
        try {
            await this.COBTab.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPayerClaimSectionIsDisplayed() {
        try {
            return await this.payerClaimList.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getPayerClaimHeader() {
        try {
            let header = await this.payerClaimHeader.map(elem => elem.getText());
            let payerClaimHeader = (header).filter(data => data);
            return payerClaimHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkInsuranceDetailsSectionIsDisplayed() {
        try {
            return await this.createInsuranceSection.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getInsuranceHeader() {
        try {
            let header = await this.insuranceDetailsHeader.map(elem => elem.getText());
            let insuranceHeader = (header).filter(data => data);
            return insuranceHeader.toString();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkInsuranceMemberNumberIsDisplayed() {
        try {
            return await this.insuranceMemberNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberDOBIsDisplayed() {
        try {
            return await this.memberDOB.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberStatusIsDisplayed() {
        try {
            return await this.memberStatus.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkRelationshipStatusIsDisplayed() {
        try {
            return await this.relationshipStatus.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkRetireeFieldIsDisplayed() {
        try {
            return await this.retiree.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkWorkStatusIsDisplayed() {
        try {
            return await this.workStatus.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkInsuranceNameIsDisplayed() {
        try {
            return await this.insuranceName.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkIndividualPolicyIsDisplayed() {
        try {
            return await this.individualPolicy.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkOIRankIsDisplayed() {
        try {
            return await this.rankOI.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPrimacyDateIsDisplayed() {
        try {
            return await this.primacyDate.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkEffectiveDateIsDisplayed() {
        try {
            return await this.effectiveDate.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkTerminationDateIsDisplayed() {
        try {
            return await this.terminationDate.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCobraIsDisplayed() {
        try {
            return await this.cobra.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkGroupNameIsDisplayed() {
        try {
            return await this.groupName.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkGroupNumberIsDisplayed() {
        try {
            return await this.groupNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkGroupSizeIsDisplayed() {
        try {
            return await this.groupSize.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProductTypeIsDisplayed() {
        try {
            return await this.productType.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCoverageTypeIsDisplayed() {
        try {
            return await this.coverageType.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkInsurancePhoneNumberIsDisplayed() {
        try {
            return await this.insurancePhoneNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkInvestigationNumberIsDisplayed() {
        try {
            return await this.investigationNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkServiceProviderNumberIsDisplayed() {
        try {
            return await this.serviceProviderNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkPediatricDentalServiceIsDisplayed() {
        try {
            return await this.pediatricDental.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkContraceptiveOnlyIsDisplayed() {
        try {
            return await this.contraceptiveOnly.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSubscriberFirstNameIsDisplayed() {
        try {
            return await this.subscriberFirstName.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSubscriberLastNameIsDisplayed() {
        try {
            return await this.subscriberLastName.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSubscriberDOBIsDisplayed() {
        try {
            return await this.subscriberDOB.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSubscriberSSNIsDisplayed() {
        try {
            return await this.subscriberSSN.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSubscriberNumberIsDisplayed() {
        try {
            return await this.subscriberNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkESRDIsDisplayed() {
        try {
            return await this.esrd.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkFirstDialysisDateIsDisplayed() {
        try {
            return await this.dateFirstDialysis.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkESRDTreatmentIsDisplayed() {
        try {
            return await this.treatment.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkTransplantDateIsDisplayed() {
        try {
            return await this.transplantDate.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDisabilityDateIsDisplayed() {
        try {
            return await this.disabilityDate.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkEntitlementReasonIsDisplayed() {
        try {
            return await this.entitlementReason.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMedicareNumberIsDisplayed() {
        try {
            return await this.medicareNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMedicareDeductibleIsDisplayed() {
        try {
            return await this.medicareDeductible.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCreateInsuranceButtonIsDisplayed() {
        try {
            await this.createInsuranceButton.scrollIntoView();
            return await this.createInsuranceButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkCreateInsuranceButtonIsDisabled() {
        try {
            return await this.createInsuranceButton.isEnabled();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClearInsuranceDeatilButtonIsDisplayed() {
        try {

            return await this.clearInsuranceDetailsButton.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterInsuranceName(insuranceNamedata) {
        try {

            await this.insuranceName.setValue(insuranceNamedata);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnCreateButton() {
        try {

            await this.createInsuranceButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnClearInsuranceDetailsButton() {
        try {

            await this.clearInsuranceDetailsButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnCreateInsuranceButton() {
        try {

            await this.createInsuranceButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getInsuranceName() {
        try {

            return await this.insuranceName.getText();

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getTotalInsurance() {
        try {

            let paginationfooter = await this.paginationFooter.getText();
            let numberOfInsurance = parseInt(paginationfooter.replace(/[^0-9\.]/g, ''));
            return numberOfInsurance;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }

}


module.exports = new ClaimSearchPage();