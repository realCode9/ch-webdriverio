import loginPage from "../../pageobjects/login/login-page";
import menuoptionsPage from "../../pageobjects/menuoptions-page";
import providersTestData from "../../../resources/relationship-management/providers-test-data.json";
import providersPage from "../../pageobjects/relationship-management/providers-page";

describe("Validation of Relationship Management - Providers section", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
        
    });
    it("Verify user is able to navigate to Providers Listing Page in CRM", async () => {
        await menuoptionsPage.clickOnCRM();
        await menuoptionsPage.clickOnProviders();
        expect(await providersPage.getProviderHeaderText()).toBe(providersTestData.providerPageHeader);
    });
    it("Verify the search fields present on Provider Search", async () => {
        expect(await providersPage.checkAccountNumberIsDisplayed()).toBe(true);
        expect(await providersPage.checkProviderNPIIsDisplayed()).toBe(true);
        expect(await providersPage.checkProviderNameIsDisplayed()).toBe(true);
        expect(await providersPage.checkTaxIDIsDisplayed()).toBe(true);
    });
    it("Verify the labels on the buttons on Provider Search", async () => {
        expect(await providersPage.checkSearchButtonLabel()).toEqual(providersTestData.searchButtonLabel);
        expect(await providersPage.checkClearButtonLabel()).toEqual(providersTestData.clearButtonLabel);
    });
    it("Verify the error message is displayed if empty search is conducted", async () => {
        await providersPage.clickOnSearchButton();
        expect(await providersPage.checkErrorMessageIsDisplayed()).toBe(true);
        expect(await providersPage.getErrorMessageText()).toEqual(providersTestData.validationMessage);
    });
    it("Verify search provider by Account Number", async () => {
        await providersPage.enterAccountNumber(providersTestData.accountNumber);
        await providersPage.clickOnSearchButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        expect(await providersPage.getAccountNumber()).toEqual(providersTestData.accountNumber);
    });
    it("Verify search provider by NPI", async () => {
        await providersPage.clickOnClearButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        await providersPage.enterProviderNPI(providersTestData.providerNPI);
        await providersPage.clickOnSearchButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        expect(await providersPage.getProviderNPI()).toEqual(providersTestData.providerNPI);
    });
    it("Verify search provider by Provider Name", async () => {
        await providersPage.clickOnClearButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        await providersPage.enterProviderName(providersTestData.providerName);
        await providersPage.clickOnSearchButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        expect(await providersPage.getProviderName()).toEqual(providersTestData.providerName);
    });
    it("Verify search provider by Provider Tax ID", async () => {
        await providersPage.clickOnClearButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        await providersPage.enterProviderTaxID(providersTestData.taxID);
        await providersPage.clickOnSearchButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        expect(await providersPage.getProviderTaxID()).toEqual(providersTestData.taxID);
    });
    it("Verify the table heading for the provider listing table", async () => {
        expect(await providersPage.getProviderListingHeader() == (providersTestData.providerListingHeader)).toBe(true);
    });
    it("Verify searching by wrong NPI displays the No result found label", async () => {
        await providersPage.clickOnClearButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        await providersPage.enterProviderNPI(providersTestData.incorrectNPI);
        await providersPage.clickOnSearchButton();
        await providersPage.checkLoaderIsNotDisplayed(); 
        expect(await providersPage.checkNoDataLabelIsDisplayed()).toBe(true)
        expect(await providersPage.getNoDataLabelText()).toEqual(providersTestData.noDataMessage);
    });
    
});