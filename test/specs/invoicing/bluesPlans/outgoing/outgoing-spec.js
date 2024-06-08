import loginPage from "../../../../pageobjects/login/login-page";
import menuoptionsPage from "../../../../pageobjects/menuoptions-page";
import outgoingPage from "../../../../pageobjects/invoicing/bluesPlans/outgoing/outgoing-page.js";
import data from "../../../../../resources/invoicing/blues-plans/outgoing-test-data.json";


describe("Testing BluesPlan > Outgoing module", () => {
    beforeAll(async function () {
      await loginPage.open();
      await loginPage.login();
    });

    it('validate navigation to outgoing', async function () {
      await menuoptionsPage.clickOnInvoicing();
      await menuoptionsPage.clickOnBluesPlans();
      await menuoptionsPage.clickOnOutgoing();
      expect(await outgoingPage.getHeaderText()).toBe(data.header);
      
    });

    describe('Create New Invoice', function (){

        it('Validate create invoice button and navigation', async function ()
        {
            await outgoingPage.clickCreateInvoiceButton();
            expect(await outgoingPage.getCreateInvoiceHeaderText()).toEqual(data.createInvoicePageHeaderText);
        });
        it('Navigate to Manual tab', async function ()
        {
            await outgoingPage.clickManualTab();
            expect(await outgoingPage.defaultMessageOnManualTabDisplayed()).toBe(true);
        });
        it('Verify fields and buttons on manual tab', async function ()
        {
            expect(await outgoingPage.getHomePlanLabelText()).toEqual(data.homePlanLabel);
            expect(await outgoingPage.getHostPlanLabelText()).toEqual(data.hostPlanLabel);
            expect(await outgoingPage.getPaymentTimingLabelText()).toEqual(data.paymentTimingLabel);
            expect(await outgoingPage.singlePlanRadioButtonDisplayed()).toBe(true);
            expect(await outgoingPage.multiplePlansRadioButtonDisplayed()).toBe(true);
            expect(await outgoingPage.recoveryDateRangeLabelDisplayed()).toBe(true);
            expect(await outgoingPage.backButtonDisplayed()).toBe(true);
            expect(await outgoingPage.searchTransactionButtonDisplayed()).toBe(true);
        });
        it('Validate error messages for transaction search', async function ()
        {
            await outgoingPage.clickSearchTransactionButton();
            expect(await outgoingPage.getHostPlanErrorText()).toEqual(data.hostPlanErrorText);
            expect(await outgoingPage.getHomePlanErrorText()).toEqual(data.homePlanErrorText);
            expect(await outgoingPage.getRecoveryDateRangeErrorText()).toEqual(data.recoveryDateRangeErrorText);
        });
        it('Enter data in fields and search for transaction', async function ()
        {
            await outgoingPage.enterHostPlan();
            await outgoingPage.enterHomePlan();
            await outgoingPage.enterRecoveryDateRange();
            await outgoingPage.clickSearchTransactionButton();
            expect(await outgoingPage.getAuditTransactionHeader()).toEqual(data.auditTransactionHeader);
        });
        it('Verify error notification ', async function ()
        {
            await outgoingPage.clickGenerateButton();
            expect(await outgoingPage.getIncludeExcludeAllTransactionsErrorNotificationText()).toEqual(data.includeExcludeAllTransactionsErrorText);
        });
        it('Verify transaction include', async function ()
        {
            var count1 = await outgoingPage.getIncludeTabCount();
            var id1 = await outgoingPage.getSccfId();
            count1++;
            await outgoingPage.clickIncludeButton();
            var count2 = await outgoingPage.getIncludeTabCount();
            expect(count2).toEqual(count1);
            await outgoingPage.navigateToIncludeTab();
            var id2 = await outgoingPage.getSccfId();
            expect(id2).toEqual(id1);
            await outgoingPage.navigateToPendingTab();
        });
        it('Verify transaction exclude', async function ()
        {
            var count1 = await outgoingPage.getExcludeTabCount();
            var id1 = await outgoingPage.getSccfId();
            count1++;
            await outgoingPage.clickExcludeButton();
            var count2 = await outgoingPage.getExcludeTabCount();
            expect(count2).toEqual(count1);
            await outgoingPage.navigateToExcludeTab();
            var id2 = await outgoingPage.getSccfId();
            expect(id2).toEqual(id1);
            await outgoingPage.clickIncludeButton();
            await outgoingPage.navigateToPendingTab();
        });
        it('Include all the remaining transactions if any', async function ()
        {
            await outgoingPage.clickBulkCheckbox();
            await outgoingPage.clickIncludeButton();
        });
        it('Verify new invoice created', async function ()
        {
            await outgoingPage.clickGenerateButton();
        });
    });

})