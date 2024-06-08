import Page from "../page";
class ProvidersPage extends Page {
    get pageHeader() {
        return $("//app-default-page-header")
    }
    get accountNumber() {
        return $("//div[1]/app-prime-input[1]/input[1]")
    }
    get providerNPI() {
        return $("//div[2]/app-prime-input[1]/input")
    }
    get providerName() {
        return $("//div[3]/app-prime-input[1]/input")
    }
    get providerTaxID() {
        return $("//div[4]/app-prime-input[1]/input")
    }
    get searchButton() {
        return $("//form/div[2]/app-common-button[1]")
    }
    get clearButton() {
        return $("//form/div[2]/app-common-button[2]")
    }
    get errorMessage() {
        return $("//app-providers-search/div/span")
    }
    get loader() {
        return $("//*[@id='pareo-spinner']")
    }
    get searchedAccountNumber() {
        return $("//tbody/tr[1]/td[6]");
    }
    get searchedProviderNPI() {
        return $("//tbody/tr[1]/td[2]");
    }
    get searchedProviderName() {
        return $("//tbody/tr[1]/td[3]/div/div/span[1]")
    }
    get searchedTaxID() {
        return $("//tbody/tr[1]/td[5]")
    }
    get providerListHeader() {
        return $$("//*[@id='provider-list-table']//table/thead/tr[1]")
    }
    get noDataLabel(){
        return $("//div[@class='msg']/div[1]")
    }



    //functions for CRM-providers
    async getProviderHeaderText() {
        try {
            return await this.pageHeader.getAttribute('headertext');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAccountNumberIsDisplayed() {
        try {
            return await this.accountNumber.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkProviderNPIIsDisplayed() {
        try {
            return await this.providerNPI.isDisplayed();
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
    async checkTaxIDIsDisplayed() {
        try {
            return await this.providerTaxID.isDisplayed();
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
    async enterAccountNumber(accNO) {
        try {
            await this.accountNumber.setValue(accNO);
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
    async getAccountNumber() {
        try {

            return await this.searchedAccountNumber.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterProviderNPI(npi) {
        try {
            await this.providerNPI.setValue(npi);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProviderNPI() {
        try {

            return await this.searchedProviderNPI.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnClearButton() {
        try {
            this.clearButton.click();
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
    async enterProviderTaxID(taxID) {
        try {
            await this.providerTaxID.setValue(taxID);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProviderName() {
        try {

            return await this.searchedProviderName.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProviderTaxID() {
        try {

            return await this.searchedTaxID.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProviderListingHeader() {
        try {
            let header = await this.providerListHeader.map(elem => elem.getText());
            let tableHeader = header.toString();
            return tableHeader.replace(/[\n]/g, ',');
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
    
}


module.exports = new ProvidersPage();