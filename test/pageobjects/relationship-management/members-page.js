import Page from "../page";
import membersTestData from "../../../resources/relationship-management/members-test-data.json";
const mongoose = require('mongoose');

class MembersPage extends Page {
    get pageHeader() {
        return $("//app-default-page-header");
    }
    get memberIdField() {
        return $("//div[1]/app-prime-input[1]/input[1]");
    }
    get memberFirstNameField() {
        return $("//div[2]/app-prime-input[1]/input[1]");
    }
    get memberLastNameField() {
        return $("//div[3]/app-prime-input[1]/input[1]");
    }
    get memberDOBField() {
        return $("//app-date-input//input");
    }
    get searchButton() {
        return $("//form/div[2]/app-common-button[1]");
    }
    get clearButton() {
        return $("//form/div[2]/app-common-button[2]");
    }
    get errorMessage() {
        return $("//app-members-search/div/span");
    }
    get loader() {
        return $("//*[@id='pareo-spinner']")
    }
    get serachedMemberId() {
        return $("//div[@class='ui-table-scrollable-view ui-table-frozen-view']//table//tbody//tr[1]//td[1]/div");
    }
    get searchedMemberName() {
        return $("//div[@class='ui-table-scrollable-view ui-table-frozen-view']//table//tbody//tr[1]//td[2]")
    }
    get searchedMemberDOB() {
        return $("//div[@class='ui-table-scrollable-view ui-table-unfrozen-view']//tbody//tr[1]//td[2]");
    }
    get memberListHeader() {
        return $$("//*[@id='members-list-table']//table//thead/tr[1]/th");
    }
    get memberListIDHeader() {
        return $("//div[@class='ui-table-scrollable-view ui-table-frozen-view']//table//thead/tr/th[1]");
    }
    get noDataLabel() {
        return $("//div[@class='msg']/div[1]")
    }
    get membersTableView() {
        return $(`//app-members-list/div/div[2]/div[2]/p-table`);
    }
    get columnData() {
        return $$("//div[@class='ui-table-scrollable-view ui-table-frozen-view']//table/tbody/tr/td[2]/div");
    }

    //functions for CRM Member
    async getMemberHeaderText() {
        try {
            return await this.pageHeader.getAttribute('headertext');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberIdIsDisplayed() {
        try {
            return await this.memberIdField.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberFirstNameIsDisplayed() {
        try {
            return await this.memberFirstNameField.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberLastNameIsDisplayed() {
        try {
            return await this.memberLastNameField.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberDOBIsDisplayed() {
        try {
            return await this.memberDOBField.isDisplayed();
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
    async checkSearchButtonLabel() {
        try {
            return await this.searchButton.getAttribute('label');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClearButtonLabel() {
        try {
            return await this.clearButton.getAttribute('label');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnSearchButton() {
        try {
            await this.searchButton.waitForDisplayed();
            await this.searchButton.waitForClickable();
            await this.searchButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkErrorMessageIsDisplayed() {
        try {
            return await this.errorMessage.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getErrorMessageText() {
        try {
            return await this.errorMessage.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterMemberId(memberID) {
        try {
            await this.memberIdField.waitForDisplayed();
            await this.memberIdField.setValue(memberID);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMemberId() {
        try {
            await browser.waitUntil(async () => (await this.serachedMemberId.getText()) == membersTestData.memberID, {
                timeout: 600000,
                timeoutMsg: 'expected text to be different after 5s'
            });
            return await this.serachedMemberId.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnClearButton() {
        try {
            await this.clearButton.waitForDisplayed();
            await this.clearButton.waitForClickable();
            await this.clearButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterMemberFirstName(FirstName) {
        try {
            await this.memberFirstNameField.setValue(FirstName);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterMemberLastName(LastName) {
        try {
            await this.memberLastNameField.setValue(LastName);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMemberName() {
        try {
            let member = await this.searchedMemberName.getText();
            return await member;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async memberFirstName() {
        try {
            let memberName = await this.getMemberName();
            memberName = memberName.trim().toString().split(" ");
            let result = memberName[0].toString();
            return await result;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async memberLastName() {
        try {
            let memberName = await this.getMemberName();
            memberName = memberName.trim().toString().split(" ");
            let result = memberName[1].toString();
            return await result;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterMemberDOB(memberDOB) {
        try {
            await this.memberDOBField.setValue(memberDOB);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMemberDOB() {
        try {
            return await this.searchedMemberDOB.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMemberListingHeader() {
        try {
            var header = (await this.memberListHeader.map(async (element) => {
                return await element.getText();
            }));
            var tableHeader = header.toString();
            return tableHeader;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getNoDataLabelText() {
        try {
            return await this.noDataLabel.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNoDataLabelIsDisplayed() {
        try {
            return await this.noDataLabel.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSortedMemberNamesFromDB() {
        try {
            browser.pause(100000);
            const MyModel = mongoose.model('members', new mongoose.Schema({ name: String }, { name: String }));
            var namesArr = await MyModel.aggregate([{ $project: { "memberName": { $concat: ["$name.first", " ", "$name.last"] } } }, { $sort: { "memberName": 1 } }, { $limit: 10 }]);
            var memberNamesArray = [];
            for (let i = 0; i < namesArr.length; i++) {
                memberNamesArray.push(namesArr[i]["memberName"]);
            }
            const memberNamesArr = memberNamesArray.toString();
            return memberNamesArr;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async verifyDefaultSortColumnOnUI(data) {
        try {
            await this.membersTableView.scrollIntoView();
            var length = await data.length;
            const res = (length <= 1) ? true : false;
            if (res == true) {
                return true;
            } else {
                var defaultSortedDataInAscendingOrder = await data.map(async (ele) => {
                    return await ele.getText()
                });
                const defaultSortedDataInAscOrder = defaultSortedDataInAscendingOrder.toString();
                return defaultSortedDataInAscOrder;
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}

module.exports = new MembersPage();