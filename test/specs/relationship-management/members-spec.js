import loginPage from "../../pageobjects/login/login-page";
import menuoptionsPage from "../../pageobjects/menuoptions-page";
import membersTestData from "../../../resources/relationship-management/members-test-data.json";
import membersPage from "../../pageobjects/relationship-management/members-page";
import commomUtilities from "../../../../Claris-Automation-webdriver/utilities/common-utilities";
import connectToDataBase from "../../../utilities/database-connection";


describe("Validation of Relationship Management - Members section", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Verify user is able to navigate to Members Listing Page in CRM", async () => {
        await menuoptionsPage.clickOnCRM();
        await menuoptionsPage.clickOnMembers();
        expect(await membersPage.getMemberHeaderText()).toBe(membersTestData.memberPageHeader);
    });
    it("Verify the search fields present on Member Search", async () => {
        expect(await membersPage.checkMemberIdIsDisplayed()).toBe(true);
        expect(await membersPage.checkMemberFirstNameIsDisplayed()).toBe(true);
        expect(await membersPage.checkMemberLastNameIsDisplayed()).toBe(true);
        expect(await membersPage.checkMemberDOBIsDisplayed()).toBe(true);
    });
    it("Verify the labels on the buttons on Member Search", async () => {
        expect(await membersPage.checkSearchButtonLabel()).toEqual(membersTestData.searchButtonLabel);
        expect(await membersPage.checkClearButtonLabel()).toEqual(membersTestData.clearButtonLabel);
    });
    it("Verify the error message is displayed if empty search is conducted", async () => {
        await membersPage.clickOnSearchButton();
        expect(await membersPage.checkErrorMessageIsDisplayed()).toBe(true);
        expect(await membersPage.getErrorMessageText()).toEqual(membersTestData.validationMessage);
    });
    it("Verify member search by Member ID", async () => {
        await membersPage.enterMemberId(membersTestData.memberID);
        await membersPage.clickOnSearchButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        expect(await membersPage.getMemberId()).toEqual(membersTestData.memberID);
    });
    it("Verify member search  by MemberFirstName", async () => {
        await membersPage.clickOnClearButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        await membersPage.enterMemberFirstName(membersTestData.memberFirstName);
        await membersPage.clickOnSearchButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        expect(await membersPage.memberFirstName()).toEqual(membersTestData.memberFirstName);
    });
    it("Verify member search  by MemberLastName", async () => {
        await membersPage.clickOnClearButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        await membersPage.enterMemberLastName(membersTestData.memberLastName);
        await membersPage.clickOnSearchButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        expect(await membersPage.memberLastName()).toEqual(membersTestData.memberLastName);
    });
    it("Verify member search  by MemberDob", async () => {
        await membersPage.clickOnClearButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        await membersPage.enterMemberDOB(membersTestData.memberDOB);
        await membersPage.clickOnSearchButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        expect(await membersPage.getMemberDOB()).toEqual(membersTestData.memberDOB);
    });
    it("Verify the table heading for the Member listing table", async () => {
        expect(await membersPage.getMemberListingHeader()).toEqual(membersTestData.memberListingHeader);
    });
    it("Verify searching by wrong MemberId displays the No result found label", async () => {
        await membersPage.clickOnClearButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        await membersPage.enterMemberId(membersTestData.incorrectMemberId);
        await membersPage.clickOnSearchButton();
        await commomUtilities.checkLoaderIsNotDisplayed();
        expect(await membersPage.checkNoDataLabelIsDisplayed()).toBe(true)
        expect(await membersPage.getNoDataLabelText()).toEqual(membersTestData.noDataMessage);
        await membersPage.clickOnClearButton();
    });
    it("Verify default sorting column and Sorting on all columns", async () => {
        await connectToDataBase();
        browser.pause(1000);
        expect(await membersPage.getSortedMemberNamesFromDB()).toEqual(await membersPage.verifyDefaultSortColumnOnUI(membersPage.columnData));
    });
})