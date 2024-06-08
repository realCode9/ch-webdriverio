
import loginPage from "../../pageobjects/login/login-page";
import menuoptionsPage from "../../pageobjects/menuoptions-page";
import page from "../../pageobjects/recovery-posting/recoveryPosting-page";
import data from "../../../resources/recovery-posting/recovery-posting-test-data.json";
import utilities from "../../../utilities/common-utilities";
import databaseConnection from "../../../utilities/database-connection";

describe("Testing Recovery Posting", ()=>{
  beforeAll(async function () {
    await loginPage.open();
    await loginPage.login();
  });

  it("Validate navigation to Recovery Posting", async function () {
    await utilities.clickOnElement(menuoptionsPage.recoveryPosting)
    expect(await utilities.getElementText(page.headerText)).toEqual(data.header);
  });

  describe("Validate search functionality", function(){
        
    it('Validate filters and buttons on search panel', async function (){
      expect(await utilities.isElementDisplayed(page.numberLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.providerNameLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.statusLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.amountLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.checkDateLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.dateReceivedLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.userLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.auditIdLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.recoveryTypeLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.postingDateLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.assigneeLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.tagsLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.dateCreatedLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.searchButton)).toBe(true);
      expect(await utilities.isElementDisplayed(page.clearButton)).toBe(true);
   });

    it('Validate search button functionality', async function (){
      await utilities.clickOnElement(page.statusInputbox);
      await utilities.clickOnElement(page.statusValue);
      await utilities.clickOnElement(page.recoveryTypeInputbox);
      await utilities.clickOnElement(page.recoveryTypeValue);
      await utilities.clickOnElement(page.searchButton);
      expect(await utilities.getElementText(page.searchFilterText)).toEqual(data.searchFilterText);
      expect(await utilities.isElementDisplayed(page.editLink)).toBe(true);
    });

    it('Validate Edit search panel', async function (){
      await utilities.clickOnElement(page.editLink);
      expect(await utilities.isElementDisplayed(page.numberLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.providerNameLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.statusLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.searchButton)).toBe(true);
      expect(await utilities.isElementDisplayed(page.clearButton)).toBe(true);
      await utilities.clickOnElement(page.crossIconStatusValue);
      await utilities.clickOnElement(page.searchButton);
      expect(await utilities.getElementText(page.searchFilterText)).toEqual(data.searchFilterText);
      await utilities.clickOnElement(page.editLink);
    });

    it('Validate no search data screen', async function () {
      await page.elementSetValue(page.numberInputBox, data.invalidNumber);
      await utilities.clickOnElement(page.searchButton);
      expect(await utilities.isElementDisplayed(page.noSearchResultsFound)).toBe(true);
      await utilities.clickOnElement(page.editLink);
      await utilities.clickOnElement(page.clearButton);
    });

  });

  describe('Create new check', function () {
        
    it('Validate new button functionality', async function () {
      await utilities.clickOnElement(page.newButton);
      expect(await utilities.getElementText(page.newPageHeader)).toEqual(data.newPageHeaderText);
    });

    it('Validate filters and buttons on new check page', async function (){
      expect(await utilities.isElementDisplayed(page.numberLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.providerNameLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.amountLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.checkDateLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.dateReceivedLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.newRecoveryType)).toBe(true);
      expect(await utilities.isElementDisplayed(page.bankAccountLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.assigneeLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.tagsLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.assigneeLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.tagsLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.dateCreatedLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.noteTypeLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.noteTemplateLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.commentLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.netAmountLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.urNumberLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.urDateLabel)).toBe(true);
      expect(await utilities.isElementDisplayed(page.summarySection)).toBe(true);
      expect(await utilities.isElementDisplayed(page.newPageBackButton)).toBe(true);
      expect(await utilities.isElementDisplayed(page.newPageSubmitButton)).toBe(true);
    });

    it('Verify enabling and disabling of submit button', async function (){
      await page.enterNonMandatoryFields(data.newDateReceived, data.newCheckDate);
      expect(await utilities.isElementEnabled(page.newPageSubmitButton)).toBe(false);
      await page.enterMandatoryFields(data.newProviderName, data.newAmount, data.newNumber);
      expect(await utilities.isElementEnabled(page.newPageSubmitButton)).toBe(true);
    });

    it('Click submit button and verify check is created', async function () {
      await utilities.clickOnElement(page.newPageSubmitButton);
      expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.checkCreatedSuccessMessage);
      await utilities.waitForToasterMessageToDisappear();
      expect(await utilities.isElementDisplayed(page.saveButton)).toBe(true);
      expect(await utilities.isElementDisplayed(page.returnButton)).toBe(true);
      expect(await utilities.isElementDisplayed(page.postingTab)).toBe(true);
      expect(await utilities.isElementDisplayed(page.imagesTab)).toBe(true);
    });

    describe('Validate Posting tab > Audit Search', function () {
      
      it('Verify navigation to Posting tab', async function () {
        await utilities.clickOnElement(page.postingTab);
        expect(await utilities.isElementDisplayed(page.providerSearchTab)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearchTab)).toBe(true);
        expect(await utilities.isElementDisplayed(page.transactionTab)).toBe(true);
        expect(await utilities.isElementDisplayed(page.rejectedTransactionsTab)).toBe(true);
        expect(await utilities.isElementDisplayed(page.historyTab)).toBe(true);
        expect(await utilities.isElementDisplayed(page.postButton)).toBe(true);
        expect(await utilities.isElementDisplayed(page.backButton)).toBe(true);
      });

      it('Verify navigation to Audit Search tab', async function () {
        await utilities.clickOnElement(page.auditSearchTab);
        expect(await utilities.getElementText(page.auditSearchTabHeading)).toEqual(data.auditSearchTabHeading);
        expect(await utilities.isElementDisplayed(page.auditSearchClaimNumber)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearchAuditId)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearchPatientAccountNumberLabel)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearchPatientLastName)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearcAauditAmount)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearchDateofService)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearchNewButton)).toBe(true);
        expect(await utilities.isElementDisplayed(page.auditSearchSearchButton)).toBe(true);
      });

      describe('Verify posting a transaction by creating an audit', function () {
        
        it('Validate new button functionality', async function () {
          await utilities.clickOnElement(page.auditSearchNewButton);
          expect(await utilities.isElementDisplayed(page.newAuditHeading)).toBe(true);
          expect(await utilities.getElementText(page.newAuditHeading)).toEqual(data.newAuditHeading);
          expect(await utilities.isElementDisplayed(page.newAuditProviderTab)).toBe(true);
        });

        it('Validate provider selection', async function (){
          await utilities.clickOnElement(page.newAuditDataSetDropdown);
          expect(await utilities.isElementDisplayed(page.newAuditDemoDataSet)).toBe(true);
          await utilities.clickOnElement(page.newAuditDemoDataSet);
          expect(await utilities.isElementDisplayed(page.newAuditProviderNumber)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditProviderName)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditSearchButton)).toBe(true);
          await utilities.clickOnElement(page.newAuditSearchButton);
          await utilities.clickOnElement(page.newAuditRadioButton);
          expect(await utilities.isElementDisplayed(page.newAuditMemberTab)).toBe(true);
        });

        it('Validate fields and buttons on member tab', async function () {
          expect(await utilities.isElementDisplayed(page.newAuditMemberNumber)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberLastName)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberFirstName)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberAddress)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberCity)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberState)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberSearchButton)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberNewButton)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberBackButton)).toBe(true);
        });

        it('Validate Search button functionality on member tab', async function () {
          await utilities.clickOnElement(page.newAuditMemberSearchButton);
          expect(await utilities.isElementDisplayed(page.newAuditMemberSearchList)).toBe(true);
        });

        it('Validate New button functionality on member tab', async function (){
          await utilities.clickOnElement(page.newAuditMemberNewButton);
          expect(await utilities.isElementDisplayed(page.newAuditMemberNumber)).toBe(true);
        });

        it('Validate fields and buttons on new Member tab', async function (){
          expect(await utilities.isElementDisplayed(page.newAuditMemberNumber)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberLastName)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberFirstName)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberBackButton)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberDob)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditMemberSaveButton)).toBe(true);
        });

        it('Validate creation of new member', async function (){
          await page.elementSetValue(page.newAuditMemberFirstNameInputBox, data.memberFirstName);
          await page.elementSetValue(page.newAuditMemberNumber, data.memberNumber);
          await utilities.clickOnElement(page.newAuditMemberSaveButton);
          expect(await utilities.getElementText(page.newAuditClaimHeader)).toBe(data.newClaimHeader);
        });

        it('Validate fields and buttons on Claim & Audit tab ', async function (){
          expect(await utilities.isElementDisplayed(page.newAuditClaimLOBLabel)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditClaimNumberLabel)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditClaimAmountsBilled)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditClaimAmountPaid)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditClaimAdmitDate)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditClaimDischargeDate)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditClaimPaidDate)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditType)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditErrorCode)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditErrorCodeDetail)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditOrganization)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditAmounts)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditTextArea)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditBackButton)).toBe(true);
          expect(await utilities.isElementDisplayed(page.newAuditSaveButton)).toBe(true);
        });

        it('Validate creation of new claim', async function(){
          await page.elementSetValue(page.newAuditClaimNumberInputBox, data.newClaimNumber);
          await page.elementSetValue(page.newAuditClaimAdmitDate, data.newAuditClaimAdmitDate);
          await page.elementSetValue(page.newAuditClaimDischargeDate, data.newAuditClaimDischargeDate);
          await page.elementSetValue(page.newAuditClaimPaidDate, data.newAuditClaimPaidDate);
          await utilities.clickOnElement(page.newAuditType);
          await utilities.clickOnElement(page.newAuditTypeCOBOption);
          await utilities.clickOnElement(page.newAuditErrorCode);
          await utilities.clickOnElement(page.newAuditErrorCodeOption);
          await utilities.clickOnElement(page.newAuditErrorCodeDetail);
          await utilities.clickOnElement(page.newAuditErrorCodeDetailOption);
          await page.elementSetValue(page.newAuditAmounts, data.auditAmount);
          await utilities.clickOnElement(page.newAuditOrganization);
          await utilities.clickOnElement(page.newAuditOrganizationOption);
          await page.elementSetValue(page.newAuditTextArea, data.comment);
          await utilities.clickOnElement(page.newAuditSaveButton);
          await page.elementSetValue(page.auditSearchClaimNumber, data.newClaimNumber);
          expect(await utilities.visibilityOfSuccessToaster()).toContain(data.successMessage);
          await utilities.waitForToasterMessageToDisappear();
        });

        it('Validate posting transaction on new claim created', async function(){
          await utilities.clickOnElement(page.fullActionButton);
          await utilities.clickOnElement(page.postButton);
          expect(await utilities.visibilityOfSuccessToaster()).toContain(data.successMessage);
          await utilities.waitForToasterMessageToDisappear();
        });

        it('Validate the navigation to transaction tab', async function () {
          await utilities.clickOnElement(page.transactionTab);
          expect(await utilities.getElementText(page.transactionHeader)).toEqual(data.transactionHeading);
        });

        it('Validate transaction search functionality', async function () {
          expect(await utilities.isElementDisplayed(page.transactionSelectFilterDropdown)).toBe(true);

          expect(await utilities.isElementEnabled(page.transactionSearch)).toBe(false);
          await utilities.clickOnElement(page.transactionSelectFilterDropdown);
          await utilities.clickOnElement(page.transactionFilterDropdownValues);
          expect(await utilities.isElementEnabled(page.transactionSearch)).toBe(true);
          await page.elementSetValue(page.transactionSearch, data.transactionStatus);
        });

        it('Validate delete transaction', async function () {
          await utilities.clickOnElement(page.transactionEditButton);
          await utilities.clickOnElement(page.transactionDropDownArrow);
          await utilities.clickOnElement(page.transactiondeleteDropdownValue);
          await utilities.clickOnElement(page.transactionDeleteButton);
          await utilities.clickOnElement(page.transactionYesButton);
          expect(await utilities.visibilityOfSuccessToaster()).toContain(data.tansactionDeleteSuccessMessage);
          await utilities.waitForToasterMessageToDisappear();
          await utilities.clickOnElement(page.backButton);
        });

        it('Validate check delete', async function () {
          await page.elementSetValue(page.providerNameInputBox, data.newProviderName);
          await utilities.clickOnElement(page.searchButton);
          await utilities.clickOnElement(page.checkDeleteIcon);
          expect(await utilities.isElementDisplayed(page.checkDeleteModalText)).toBe(true);
          await utilities.clickOnElement(page.checkDeleteYesButton);
          expect(await utilities.visibilityOfSuccessToaster()).toContain(data.checkDeleteSuccessMessage);
          await utilities.waitForToasterMessageToDisappear();
        });

        it('Validate claim delete from database', async function (){
          await databaseConnection();
          await page.memberDeleteFunctionality(data.memberNumber);
          await page.auditDeleteFunctionality(data.newClaimNumber);
          await page.claimDeleteFunctionality(data.newClaimNumber);
        });
      });
    });
  });
});