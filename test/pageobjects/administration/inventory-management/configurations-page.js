import commonFunctions from "../../../../utilities/common-utilities";
import menuOptionsPage from "../../../pageobjects/menuoptions-page";

class Configurations {
    get configurationsHeader() {
        return $("//span[@queryparamshandling='merge']");
    }
    get headingText() {
        return $("//div[@class='row m-b-md']/p");
    }
    get automaticCheckIn() {
        return $("//div[normalize-space()='Automatic Check In']");
    }
    get checkInSubHeading() {
        return $("//p[contains(text(),'Any unpinned')]")
    }
    get setLimitText() {
        return $("//span[contains(text(),'Set the global assignment')]");
    }
    get setLimitSubHeading() {
        return $("//p[contains(text(),'You can adjust the')]");
    }
    get noTeamsImage() {
        return $("//div[@class='img']");
    }
    get noTeamsText() {
        return $("//div[@class='msg']");
    }
    get restoreToDefaultButton() {
        return $("//span[normalize-space()='Restore to Default']");
    }
    get saveButton() {
        return $("(//button[@id='notSubmitButton'])[2]");
    }
    get automaticCheckInButton() {
        return $("//button[@role='switch']");
    }
    get popupData() {
        return $("//div[@class='popup-data']");
    }
    get confirmationYesButton() {
        return $("//div[normalize-space()='Yes']");
    }
    get confirmationNoButton() {
        return $("//div[normalize-space()='No']");
    }
    get globalLimitInputField() {
        return $("(//input[@type='text'])[1]");
    }
    get globalLimitValidation() {
        return $("//div[text()='Please enter the value between 1-15']");  
    }
    get inventoryNameLink() {
        return $("//tbody//tr[1]//td[1]//span");
    }
    get teamsTab() {
        return $("//li[@ngbnavitem='assignmentTeams']//button[contains(text(),'Teams')]");
    }
    get limitInInventory() {
        return $("((//div[@class='sub-heading'])[2]//strong)[1]");
    }
    get restoringLoaderButton() {
        return $("//span[normalize-space()='Restoring']//span");
    }

    // FUNCTIONS
    async clearLimitField() {
        try {
            await this.globalLimitInputField.waitForClickable();
            const selectorValue = await this.globalLimitInputField.getValue();
            const backSpaces = new Array(selectorValue.length).fill('Backspace');
            await this.globalLimitInputField.addValue(backSpaces);
        } catch (error) {
            fail("Failed due to " + error);
        }
    }
    async configuredLimit() {
        try {
            var limitText = await this.limitInInventory.getText();
            const limit = await limitText.split(" ");
            return parseInt(limit[2]);
        } catch (error) {
            fail("Failed due to " + error);
        }
    }
    async navigateToAssignmentTeam() {
        try {
            await commonFunctions.clickOnElement(menuOptionsPage.assignments);
            await commonFunctions.clickOnElement(this.inventoryNameLink);
            await commonFunctions.clickOnElement(this.teamsTab);
        } catch (error) {
            fail("Failed due to " + error);
        }
    }
}
module.exports = new Configurations();