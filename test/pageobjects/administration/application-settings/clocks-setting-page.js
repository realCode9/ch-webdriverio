import Page from "../../page";

class ClocksSettingPage extends Page {

    get clocksSettingHeaderText() {
        return $("//div[@class='default-border header']");
    }
    get clockCollection() {
        return $("#app-custom-dropdown-Select-a-collection");
    }
    get clockCollectionValues() {
        return $$("//div[@class='ng-dropdown-panel-items scroll-host']/div/div");
    }
    get selectADate() {
        return $("#app-custom-dropdown-Select-Audit-date");
    }
    get selectADateValue() {
        return $("//div[@class='ng-dropdown-panel-items scroll-host']/div/div[1]");
    }
    get startDateBasisName() {
        return $("//*[@name='friendlyName']");
    }
    get addButton() {
        return $("#datasetFieldButton");
    }
    get startDateBasisNameColumnValues() {
        return $$("//div[@class='row m-t-lg']/div/p-table/div/div/table/tbody/tr/td[3]");
    }
    get deleteButton() {
        return $$("//button[@class='btn m-t-xs btn-danger']");
    }
    get confirmationModal() {
        return $("(//div[@class='modal-content'])[1]");
    }
    get yesButton() {
        return $("//button[text()=' Yes ']");
    }
    get noButton() {
        return $("//button[text()=' No ']");
    }
    get deleteToasterMessage() {
        return $("//div[@class='snotifyToast__inner']/div[2]");
    }
    get startDateBasis() {
        return $("#start-date-basis");
    }
    get startDateBasisValues() {
        return $$("//div[@class='ng-dropdown-panel-items scroll-host']//span");
    }

    //Functions

    async verifyDataAddedInTable(name) {
        try {
            let startDateBasisNameColumnCount = await this.startDateBasisNameColumnValues.length;
            for (let i = 0; i < startDateBasisNameColumnCount; i++) {
                if (await this.startDateBasisNameColumnValues[i].getText() == name) {
                    return true;
                }
            }
            return false;
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    };

    async verifyDataInStartDateBasisField(name) {
        try {
            let startDateBasisCount = await this.startDateBasisValues.length;
            for (let i = 0; i < startDateBasisCount; i++) {
                if (await this.startDateBasisValues[i].getText() == name) {
                    return true;
                }
            }
            return false;
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    };

    async clickOnDeleteButton(name) {
        try {
            let startDateBasisNameColumnCount = await this.startDateBasisNameColumnValues.length;
            for (let i = 0; i < startDateBasisNameColumnCount; i++) {
                if (await this.startDateBasisNameColumnValues[i].getText() == name) {
                    await this.deleteButton[i].click();
                }
            }
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    };
}
module.exports = new ClocksSettingPage();