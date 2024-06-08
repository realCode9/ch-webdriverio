import Page from "../page";
import providersAuditsTestData from "../../../resources/relationship-management/providers-audits-test-data.json";
import commonFunctions from "../../../utilities/common-utilities";
import path from "path";

class ProvidersAuditsPage extends Page {
    get providerNPI() {
        return $("//div[2]/app-prime-input[1]/input")
    }
    get searchButton() {
        return $("//form//div[2]//app-common-button[1]");
    }
    get searchedProviderNPI() {
        return $("//app-providers-list//tbody//tr[1]//td[2]//div[@class='hyperlink-txt ng-star-inserted']");
    }
    get auditsTab() {
        return $("//app-prime-tabs//ul//li[3]//span");
    }
    get columnFilterIcon() {
        return $$("//app-provider-audits//thead//tr[1]//th//div[@class='table-filter-container']//span");
    }
    get columnFilterIcon1() {
        return $("//app-provider-audits//thead//tr[1]//th[");
    }
    get columnFilterIcon2() {
        return $("]//div[@class='table-filter-container']//span");
    }
    get filterpopupDisplay() {
        return $("//div[@class='table-filter-container']//div//app-table-filter-static");
    }
    get filterPopupApplyButton() {
        return $("//app-table-filter-static//div[@class='group']//div[1]");
    }
    get filterPopupCancelButton() {
        return $("//app-table-filter-static//div[@class='group']//div[2]");
    }
    get auditIdFilterIcon() {
        return $("//app-provider-audits//thead//tr[1]//th[2]//div[@class='table-filter-container']//span");
    }
    get filterPopupInputbox() {
        return $("//div//app-table-filter-static//app-prime-input//input");
    }
    get dosFilterPopupInputbox() {
        return $("//th[8]//div[2]//div//app-date-range-input//div//input[@id='app-date-range-input-']");
    }
    get filterPopupClearButton() {
        return $("//app-table-filter-static//div[1]//div[(text()='Clear')]");
    }
    get defaultRecordsCountOnTop() {
        return $("//div[@class='sub-section-label']/div");
    }
    get defaultReocordCountAtBottom() {
        return $("(//app-pagination-v2//div)[3]/span[2]");
    }
    get serachedAuditId() {
        return $("//table//tbody/tr[1]/td[2]/div[@class='hyperlink-txt']");
    }
    get auditTypeFilterIcon() {
        return $("//app-provider-audits//thead//tr[1]//th[3]//div[@class='table-filter-container']//span");
    }
    get filterPopupColumnnListInputbox() {
        return $("//div//app-table-filter-static//div[@class='search-field ng-star-inserted']//input");
    }
    get filterPopupCrossIcon() {
        return $("//app-table-filter-static//div//span[2]");
    }
    get filterPopupCheckbox() {
        return $$("//app-table-filter-static//div[@role='checkbox']");
    }
    get searchedAuditType() {
        return $("//table//tbody/tr[1]/td[3]/div");
    }
    get auditStatusFilterIcon() {
        return $("//app-provider-audits//thead//tr[1]//th[4]//div[@class='table-filter-container']//span");
    }
    get auditStatus() {
        return $("(//app-table-filter-static//div//input)[1]");
    }
    get searchedAuditStatus() {
        return $("//table//tbody/tr[1]/td[4]/div");
    }
    get memberIdFilterIcon() {
        return $("//app-provider-audits//thead//tr[1]//th[7]//div[@class='table-filter-container']//span");
    }
    get searchedMemberId() {
        return $("//table//tbody/tr[1]/td[7]/div");
    }
    get dosFilterIcon() {
        return $("//app-provider-audits//thead//tr[1]//th[8]//div[@class='table-filter-container']//span");
    }
    get searchedDOS1() {
        return $("//app-provider-audits//table//tbody/tr[1]/td[8]/div");
    }
    get searchedDOS() {
        return $$("//app-provider-audits//table//tbody/tr/td[8]/div");
    }
    get claimFilterIcon() {
        return $("//app-provider-audits//thead//tr[1]//th[9]//div[@class='table-filter-container']//span");
    }
    get searchedClaim() {
        return $("//table//tbody/tr[1]/td[9]/div");
    }
    get npiFilterIcon() {
        return $("//app-provider-audits//thead//tr[1]//th[12]//div[@class='table-filter-container']//span");
    }
    get searchedNPI() {
        return $("//table//tbody/tr[1]/td[12]/div");
    }
    get noDataLabel() {
        return $("//app-provider-audits//div[@class='title']");
    }
    get scrollHeader() {
        return $("//app-provider-audits//thead//tr[1]//th[12]");
    }
    get selectColumnsButton() {
        return $("//app-provider-audits/div/div/child::div[2]//app-select-table-column//div[@class='select-column-btn']");
    }
    get selectColumnsButtonDropdownIcon() {
        return $("//app-provider-audits/div/div/child::div[2]//app-select-table-column//div[@class='select-column-btn']//span");
    }
    get selectColumnsPopup() {
        return $("//app-provider-audits/div/div/child::div[2]//app-select-table-column/div/div[2]");
    }
    get selectColumnsPopupList() {
        return $$("//app-select-table-column//ul//li");
    }
    get selectAllCheckbox() {
        return $("//app-provider-audits/div/div/child::div[2]//app-select-table-column//ul//li[1]//app-prime-tristate-checkbox");
    }
    get defaultSelectedColumnscheckbox() {
        return $$("//ul//li//div[@role='checkbox'][@aria-checked='true']");
    }
    get headerColumnsList() {
        return $$("//app-provider-audits//thead//tr[1]//th//div[@class='table-header-title']");
    }
    get auditIdDisabled() {
        return $("//ul//li[@class='disabled ng-star-inserted']");
    }
    get uncheckedColumnsCheckbox() {
        return $$("//ul//li//app-prime-checkbox//div[@aria-checked='false']");
    }
    get selectColumnsClearButton() {
        return $("//app-select-table-column//div[@class='footer-btns ng-star-inserted']//span[1]//span");
    }
    get selectColumnsApplyButton() {
        return $("//app-select-table-column//div[@class='footer-btns ng-star-inserted']//span[2]//span[1]");
    }
    get selectColumnsCancelButton() {
        return $("//app-select-table-column//div[@class='footer-btns ng-star-inserted']//span[2]//span[2]");
    }
    get addCommentInBulkButton() {
        return $("//app-provider-audits/div/div/child::div[2]//app-common-button//button");
    }
    get singleAuditAddCommentIcon() {
        return $$("//app-provider-audits//table//tbody//tr//td[13]//span[@class='icon-comment-notes icons']");
    }
    get singleAuditAddCommentpopup() {
        return $("//p-dynamicdialog//div//div[@role='dialog']");
    }
    get singleAuditCommentpopupHeader() {
        return $("//app-add-bulk-notes//app-default-page-header//div[@class='header-txt']");
    }
    get singleAuditCommentPopupInfo() {
        return $("//app-add-bulk-notes//section[1]//div[1]");
    }
    get singleAuditCommentpopupMaxCharInfo() {
        return $("//app-add-bulk-notes//section[1]//div[2]//span[1]");
    }
    get singleAuditCommentpopupSaveButton() {
        return $("//app-add-bulk-notes//section[1]//div[3]//app-common-button[1]");
    }
    get singleAuditCommentpopupCancelButton() {
        return $("//app-add-bulk-notes//section[1]//div[3]//app-common-button[2]");
    }
    get singleAuditCommentpopupInLineErrorMessage() {
        return $("//app-add-bulk-notes//section[1]//div//span[@class='error-txt ng-star-inserted']");
    }
    get singleOrBulkAuditCommentpopupNoteSection() {
        return $("//app-add-bulk-notes//section[1]//textarea[@id='comment']");
    }
    get singleAuditCommentpopupUserAddedNote() {
        return $("//app-add-bulk-notes//section[2]//div[@class='comment-box ng-star-inserted'][1]//app-read-more-toggle");
    }
    get addCommentInBulkpopup() {
        return $("//p-dynamicdialog//div[@role='dialog']");
    }
    get bulkCommentInLineErrorMsgOnAuditsScreen() {
        return $("//app-provider-audits/div/div/child::div[2]/div[2]");
    }
    get addCommentInBulkpopupHeader() {
        return $("//app-add-bulk-notes//app-default-page-header//div/div");
    }
    get addCommentInBulkpopupInLineErrorMessage() {
        return $("//app-add-bulk-notes//section[1]//span[@class='error-txt ng-star-inserted']");
    }
    get addCommentInBulkpopupSaveButton() {
        return $("//app-add-bulk-notes//section[1]//div//app-common-button[1]");
    }
    get addCommentInBulkpopupCancelButton() {
        return $("//app-add-bulk-notes//section[1]//div//app-common-button[2]");
    }
    get auditIDRecord() {
        return $("//app-provider-audits//tbody/tr[i]//td[2]//div");
    }
    get paginationNumbers() {
        return $$("//ngb-pagination//ul//li");
    }
    get recordsPerPage() {
        return $("//app-input-box//input");
    }
    get nextPage() {
        return $("//ngb-pagination//ul//li//a[@aria-label='Next']");
    }
    get bulkColumnHeaderCheckbox() {
        return $("//app-provider-audits//table//tr//th[1]");
    }
    get bulkColumnCheckbox() {
        return $$("//app-provider-audits//table//tr//td[1]");
    }
    get scrollHeaderRow() {
        return $("//app-provider-audits//table//thead//tr");
    }
    get successToasterMsg() {
        return $("//div[@class='snotify snotify-rightTop ng-star-inserted']//ng-snotify-toast/div/div//div[2]");
    }
    get downloadButton() {
        return $("//div[@class='ghost-download-btn']");
    }
    get downloadSpinner() {
        return $("//span[@class='icon-inprogress loading-icon ng-star-inserted']");
    }
    get tableFirstColumn() {
        return $("//app-provider-audits/div/div/div[2]/div[2]//table//thead/tr[1]//th[3]");
    }
    get tableLastColumn() {
        return $("//app-provider-audits/div/div/div[2]/div[2]//table//thead/tr[1]//th[12]");
    }
    get showFilterPanelButton() {
        return $("//div[@class='right-section']//div[2]/span[1]");
    }
    get showFilterPanelButtonLabel() {
        return $("//div[@class='right-section']//div[2]//span[2]");
    }
    get filterPanelDisplay() {
        return $("//div[@class='filter-section']");
    }
    get filterPanelHeader() {
        return $("//app-filter//div//h3");
    }
    get claimFilterLabel() {
        return $("//div[@id='scroll-left-section']//form//section[1]//div[@class='form-label']");
    }
    get auditIdFilterLabel() {
        return $("//div[@id='scroll-left-section']//form//section[2]//div[@class='form-label']");
    }
    get datasetFilterLabel() {
        return $("//div[@id='scroll-left-section']//form//section[3]//label");
    }
    get auditStautusFilterLabel() {
        return $("//div[@id='scroll-left-section']//form//section[4]//label");
    }
    get searchButtonOnFilterPanel() {
        return $("//section//app-common-button");
    }
    get serachLabelOnFilterPanel() {
        return $("//section//app-common-button");
    }
    get selectFiletrsDropdownButtonOnFilterPanel() {
        return $("//app-select-table-column[@class='select-table-col']/div/div");
    }
    get saveButtonOnFilterPanel() {
        return $("//app-provider-audits//app-filter//div[@class='action-links']//span[1]");
    }
    get filterDropdownOptions() {
        return $$("//ng-dropdown-panel//div[@role='option']");
    }
    get appliedFiltersCountOnFilterPanel() {
        return $$("//div[@class='right-section']//div[2]//span/span");
    }
    get appliedFilterResultsInTable() {
        return $$("//div[@class='freezed-table-wrapper']//table//tbody//tr//td//div[@tooltipposition='top']");
    }

    //functions for CRM-providers-audits
    async enterProviderNPI(npiNo) {
        try {
            await this.providerNPI.setValue(npiNo);
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
    async getProviderNPI() {
        try {
            await this.searchedProviderNPI.waitForDisplayed();
            return await this.searchedProviderNPI.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnProiderNPIHyperlink() {
        try {
            await this.searchedProviderNPI.waitForDisplayed();
            await this.searchedProviderNPI.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAuditsTabIDisplayed() {
        try {
            await this.auditsTab.waitForDisplayed();
            return await this.auditsTab.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAuditsTabLabel() {
        try {
            await this.auditsTab.click();
            return await this.auditsTab.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAuditIdFilterIconIsDisplayed() {
        try {
            await this.auditIdFilterIcon.waitForDisplayed();
            return await this.auditIdFilterIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAuditTypeFilterIconIsDisplayed() {
        try {
            await this.auditTypeFilterIcon.waitForDisplayed();
            return await this.auditTypeFilterIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAuditStatusFilterIconIsDisplayed() {
        try {
            await this.auditStatusFilterIcon.waitForDisplayed();
            return await this.auditStatusFilterIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkMemberIdFilterIconIsDisplayed() {
        try {
            await this.memberIdFilterIcon.waitForDisplayed();
            return await this.memberIdFilterIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDOSFilterIconIsDisplayed() {
        try {
            await this.dosFilterIcon.waitForDisplayed();
            return await this.dosFilterIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkClaimFilterIconIsDisplayed() {
        try {
            await this.claimFilterIcon.waitForDisplayed();
            return await this.claimFilterIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkNPIFilterIconIsDisplayed() {
        try {
            await this.npiFilterIcon.waitForDisplayed();
            return this.npiFilterIcon.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async displayOfFilterPopup() {
        try {
            var filterPopupCount = await this.columnFilterIcon.map(async (element) => {
                await element.click();
                return await element.isClickable();
            })
            let i = 0;
            while (i < filterPopupCount.length) {
                if (filterPopupCount[i] == false) {
                    return false;
                }
                i++;
            }
            return filterPopupCount.pop();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //To verify Apply ,Clear,Cancel buttons Text in all Filter popups .
    //Case 0: label(0)= Apply ,Case 1 : label(1) = Cancel , Case 2: label(2) =Clear
    async getAllButtonLabelsOfFilterPopup(popupLabelsParams) {
        try {
            const labelArr = [];
            const popupLabels = popupLabelsParams.split(",");
            for (let label = 0; label < popupLabels.length; label++) {
                const selectColumnFilter = providersAuditsTestData.columnFiltersPosition;
                await this.tableFirstColumn.scrollIntoView();
                await this.tableFirstColumn.moveTo();
                for (let j = 0; j < selectColumnFilter.length; j++) {
                    let arg = selectColumnFilter[j];
                    if (arg > 7) {
                        await this.tableLastColumn.scrollIntoView();
                        await this.tableLastColumn.moveTo();
                    }
                    await $(`//app-provider-audits/div/div/div[2]/div[2]//table//thead//tr[1]//th[${arg}]//div[@class='table-filter-container']`).isClickable();
                    await $(`//app-provider-audits/div/div/div[2]/div[2]//table//thead//tr[1]//th[${arg}]//div[@class='table-filter-container']`).click();
                    switch (label) {
                        case 0: {
                            var labelText = await this.filterPopupApplyButton.getText();
                            if (labelText != popupLabels[label]) return false;
                            break;
                        };
                        case 1: {
                            var labelText = await this.filterPopupCancelButton.getText();
                            if (labelText != popupLabels[label]) return false;
                            break;
                        };
                        case 2: {
                            var labelText = await this.filterPopupClearButton.getText();
                            if (labelText != popupLabels[label]) return false;
                            break;
                        };
                    }
                }
                labelArr.push(labelText);
            }
            const labelArray = labelArr.toString();
            return labelArray;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //To verify Apply ,Clear buttons are not enabled in all Filter popups when there is no data in Filterpopup Input box.
    //Case 0: label(0)= Apply , Case 2: label(2) =Clear
    async checkFilterPopupApplyAndClearButtonsAreNotClickable(buttonParams) {
        try {
            const popupLabels = buttonParams.split(",");
            for (let labels = 0; labels < popupLabels.length; labels++) {
                if (labels == 1) continue;
                else {
                    const selectColumnFilter = providersAuditsTestData.columnFiltersPosition;
                    await this.tableFirstColumn.scrollIntoView();
                    await this.tableFirstColumn.moveTo();
                    for (let j = 0; j < selectColumnFilter.length; j++) {
                        let arg = selectColumnFilter[j];
                        if (arg > 7) {
                            await this.tableLastColumn.scrollIntoView();
                            await this.tableLastColumn.moveTo();
                        }
                        await $(`//app-provider-audits/div/div/div[2]/div[2]//table//thead//tr[1]//th[${arg}]//div[@class='table-filter-container']`).isClickable();
                        await $(`//app-provider-audits/div/div/div[2]/div[2]//table//thead//tr[1]//th[${arg}]//div[@class='table-filter-container']`).click();
                        switch (labels) {
                            case 0: {
                                var buttonIsNotEnabled = await this.filterPopupApplyButton.isEnabled({
                                    reverse: true
                                });
                                if (buttonIsNotEnabled != true) return false;
                                break;
                            };
                            case 2: {
                                var buttonIsNotEnabled = await this.filterPopupClearButton.isEnabled({
                                    reverse: true
                                });
                                if (buttonIsNotEnabled != true) return false;
                                break;
                            };
                        }
                    }
                }
            }
            return buttonIsNotEnabled;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //To verify Apply ,Clear buttons are enabled in all Filter popups when user provides data in Filterpopup Input box.
    //Case 0: label(0)= Apply , Case 2: label(2) =Clear
    async checkFilterPopupApplyClearButtonAreClickable(buttonsParams) {
        try {
            const popupLabels = buttonsParams.split(",");
            for (let labels = 0; labels < popupLabels.length; labels++) {
                if (labels == 1) continue;
                else {
                    const selectColumnFilter = providersAuditsTestData.columnFiltersPosition;
                    const multiSlectColumnFilter = providersAuditsTestData.multiSelectColumnFilterPosition;
                    await this.tableFirstColumn.scrollIntoView();
                    await this.tableFirstColumn.moveTo();
                    for (let j = 0; j < selectColumnFilter.length; j++) {
                        let arg = selectColumnFilter[j];

                        if (arg > 7) {
                            await this.tableLastColumn.scrollIntoView();
                            await this.tableLastColumn.moveTo();
                        }

                        await $(`//app-provider-audits/div/div/div[2]/div[2]//table//thead//tr[1]//th[${arg}]//div[@class='table-filter-container']`).isClickable();
                        await $(`//app-provider-audits/div/div/div[2]/div[2]//table//thead//tr[1]//th[${arg}]//div[@class='table-filter-container']`).click();
                        if ((arg == multiSlectColumnFilter[0] || arg == multiSlectColumnFilter[1])) {
                            await this.filterPopupColumnnListInputbox.waitForDisplayed();
                            await this.filterPopupColumnnListInputbox.setValue(providersAuditsTestData.randomValueForMultiInput);
                            await this.filterPopupCheckbox.forEach(async (element) => {
                                await element.click();
                            })
                        }
                        else {
                            if (arg == providersAuditsTestData.dateColumnFilter) {
                                continue;
                            }
                            else {
                                await this.filterPopupInputbox.setValue(providersAuditsTestData.randomValueForSingleInput);
                            }
                        }
                        switch (labels) {
                            case 0: {
                                var buttonIsEnabled = await this.filterPopupApplyButton.isEnabled();
                                if (buttonIsEnabled != true) return false;
                                break;
                            };
                            case 2: {
                                var buttonIsEnabled = await this.filterPopupClearButton.isEnabled();
                                if (buttonIsEnabled != true) return false;
                                break;
                            };
                        }

                    }
                }
            }
            return buttonIsEnabled;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickAuditIdFilter() {
        try {
            await this.auditIdFilterIcon.waitForDisplayed();
            await this.auditIdFilterIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterAuditIdInFilterPopup(auditID) {
        try {
            await this.filterPopupInputbox.waitForDisplayed();
            await this.filterPopupInputbox.setValue(auditID);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickCancelButtonInFlterPopup() {
        try {
            await this.filterPopupCancelButton.waitForDisplayed();
            await this.filterPopupCancelButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSearchedAuditId() {
        try {
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.serachedAuditId.waitForDisplayed();
            return await this.serachedAuditId.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickOnClearButton() {
        try {
            await this.filterPopupClearButton.waitForDisplayed();
            await this.filterPopupClearButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getFilterpopupSingleInputValue() {
        try {
            await this.filterPopupInputbox.waitForDisplayed();
            return await this.filterPopupInputbox.getAttribute('label');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickAuditTypeFilter() {
        try {
            await this.auditTypeFilterIcon.waitForDisplayed();
            await this.auditTypeFilterIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterAuditTypeInFilterPopup(auditType) {
        try {
            await this.filterPopupColumnnListInputbox.waitForDisplayed();
            await this.filterPopupColumnnListInputbox.setValue(auditType);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickCrossIconInFilterPopup() {
        try {
            await this.filterPopupCrossIcon.waitForDisplayed();
            await this.filterPopupCrossIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async selectCheckboxesInFilterPopupColumnList() {
        try {
            await this.filterPopupCheckbox.map(async (element) => {
                await element.waitForDisplayed();
                await element.click();
            })
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSearchedAuditType() {
        try {
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.searchedAuditType.waitForDisplayed();
            return await this.searchedAuditType.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickAuditStatusFilter() {
        try {
            await this.auditStatusFilterIcon.waitForDisplayed();
            await this.auditStatusFilterIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterAuditStatusInFilterPopup(auditStatus) {
        try {
            await this.filterPopupColumnnListInputbox.waitForDisplayed();
            await this.filterPopupColumnnListInputbox.setValue(auditStatus);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSearchedAuditStatus() {
        try {
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.searchedAuditStatus.waitForDisplayed();
            return await this.searchedAuditStatus.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickMemberIdFilter() {
        try {
            await this.scrollHeader.scrollIntoView();
            await this.scrollHeader.moveTo();
            await this.memberIdFilterIcon.waitForDisplayed();
            await this.memberIdFilterIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterMemberIdInFilterPopup(memberId) {
        try {
            await this.filterPopupInputbox.waitForDisplayed();
            await this.filterPopupInputbox.setValue(memberId);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSearchedMemberId() {
        try {
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.searchedMemberId.waitForDisplayed();
            return await this.searchedMemberId.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickDOSFilter() {
        try {
            await this.scrollHeader.scrollIntoView();
            await this.scrollHeader.moveTo();
            await this.dosFilterIcon.waitForDisplayed();
            await this.dosFilterIcon.waitForClickable();
            await this.dosFilterIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterDOSInFilterPopup(Dos) {
        try {

            await this.dosFilterPopupInputbox.waitForDisplayed();
            await this.dosFilterPopupInputbox.setValue(Dos);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //Verify searched results Date falls in between Date provided by user
    async getSearchedDOS() {
        try {
            var startDate = providersAuditsTestData.dosRangeinput;
            var date = startDate.split("-");
            var date1 = date[0].trim();
            var date2 = date[1].trim();
            const start = new Date(date1);
            const end = new Date(date2);
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.searchedDOS1.waitForDisplayed();
            var searchDOS = await this.searchedDOS.map(async (ele1) => {
                await ele1.waitForDisplayed();
                return await ele1.getText();
            });
            for (let i = 0; i < searchDOS.length; i++) {
                if (searchDOS[i] == 'N/A') continue;
                const returnDate = new Date(searchDOS[i]);
                if (returnDate >= start && returnDate <= end) {
                    var dOS = 'true';
                } else {
                    dOS = 'false';
                    break;
                }
            }
            if ((dOS == 'true') ? (dOS = providersAuditsTestData.dosRange) : (dOS = providersAuditsTestData.notDosRange));
            return dOS;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickClaimFilter() {
        try {
            await this.scrollHeader.scrollIntoView();
            await this.scrollHeader.moveTo();
            await this.claimFilterIcon.waitForDisplayed();
            await this.claimFilterIcon.waitForClickable();
            await this.claimFilterIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterClaimInFilterPopup(claimNo) {
        try {
            await this.filterPopupInputbox.waitForDisplayed();
            await this.filterPopupInputbox.setValue(claimNo);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSearchedClaim() {
        try {
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.searchedClaim.waitForDisplayed();
            return await this.searchedClaim.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickNPIFilter() {
        try {
            await this.scrollHeader.scrollIntoView();
            await this.scrollHeader.moveTo();
            await this.npiFilterIcon.waitForDisplayed();
            await this.npiFilterIcon.waitForClickable();
            await this.npiFilterIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async enterNpiNumberInFilterPopup(npiNo) {
        try {
            await this.filterPopupInputbox.waitForDisplayed();
            await this.filterPopupInputbox.setValue(npiNo);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSearchedNPI() {
        try {
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.searchedNPI.waitForDisplayed();
            return await this.searchedNPI.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getNoDataLabelText() {
        try {
            await this.filterPopupApplyButton.waitForDisplayed();
            await this.filterPopupApplyButton.click();
            await this.noDataLabel.waitForDisplayed();
            return await this.noDataLabel.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSelectColumnsButtoniIsEnabled() {
        try {
            await this.selectColumnsButton.waitForDisplayed();
            return await this.selectColumnsButton.isEnabled();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSelectColumnsButtonlabel() {
        try {
            await this.selectColumnsButton.waitForDisplayed();
            return await this.selectColumnsButton.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSelectColumnsDropdownIconisEnabled() {
        try {
            await this.selectColumnsButtonDropdownIcon.waitForDisplayed();
            return this.selectColumnsButtonDropdownIcon.isClickable();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSelectColumnsDropdownIcon() {
        try {
            await this.selectColumnsButtonDropdownIcon.waitForDisplayed();
            await this.selectColumnsButtonDropdownIcon.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDisplayOfSelectColumnsPopup() {
        try {
            await this.selectColumnsPopup.waitForDisplayed();
            return await this.selectColumnsPopup.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async countOfDefaultSelectedColumnsInColumnList() {
        try {
            var countPopuptList = await this.defaultSelectedColumnscheckbox.map(async (element) => {
                return await element.isDisplayed();
            });
            var poupColumnsCountList = (countPopuptList.length);
            return poupColumnsCountList;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async countOfHeaderColumnsList() {
        try {
            var countHeaderList = await this.headerColumnsList.map(async (element) => {
                return await element.isDisplayed();
            });
            var headerColumnListCount = (countHeaderList.length);
            return headerColumnListCount;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSelectColumnsPopupColumnList() {
        try {
            var popupList = await this.selectColumnsPopupList.map(async (element) => {
                return await element.getText();
            });
            var selectColumnsList = popupList.toString();
            return selectColumnsList;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getHeaderColumnsList() {
        try {
            var headerList = await this.headerColumnsList.map(async (element) => {
                return await element.getText();
            });
            var defaultHeaderColumnList = headerList.toString();
            return defaultHeaderColumnList;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async countOfHeaderColumnsList() {
        try {
            var countHeaderList = await this.headerColumnsList.map(async (element) => {
                return await element.isDisplayed();
            });
            var headerColumnListCount = (countHeaderList.length);
            return headerColumnListCount;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async selectColumnsPopupAuditIdIsDisabled() {
        try {
            await this.auditIdDisabled.waitForDisplayed();
            return await this.auditIdDisabled.isEnabled({
                reverse: true
            });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSelectAllCheckboxInSelectColumnsPopup() {
        try {
            await this.selectAllCheckbox.waitForDisplayed();
            await this.selectAllCheckbox.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //Verify 'Apply,Clear,Cancel labels' in Select Columns box
    async getSelectColumnsApplyCancelClearButtonsLabel() {
        try {
            const labelsArr = [];
            for (let label = 0; label < 3; label++) {
                if (label == 0) {
                    await this.selectColumnsApplyButton.waitForDisplayed();
                    labelsArr.push(await this.selectColumnsApplyButton.getText());
                }
                else if (label == 1) {
                    await this.selectColumnsCancelButton.waitForDisplayed();
                    labelsArr.push(await this.selectColumnsCancelButton.getText());
                }
                else {
                    await this.selectColumnsClearButton.waitForDisplayed();
                    labelsArr.push(await this.selectColumnsClearButton.getText());
                }
            }
            const selectColumnsLabelsText = labelsArr.toString();
            return selectColumnsLabelsText;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //Verify Select Columns 'Apply,Cancel,Clear' labels are enabled
    async checkSelectColumnsApplyClearCancelButtonsEnabled() {
        try {
            const buttonsArr = [];
            await this.selectColumnsClearButton.waitForEnabled();
            var clearBtnEnabled = await this.selectColumnsClearButton.isEnabled();
            buttonsArr.push(clearBtnEnabled);
            await this.selectColumnsApplyButton.waitForEnabled();
            var applyBtnEnabled = await this.selectColumnsApplyButton.isEnabled();
            buttonsArr.push(applyBtnEnabled);
            await this.selectColumnsCancelButton.waitForEnabled();
            var cancelBtnEnabled = await this.selectColumnsCancelButton.isEnabled();
            buttonsArr.push(cancelBtnEnabled);
            let i = 0;
            while (i < buttonsArr.length) {
                if (buttonsArr[i] == true) {
                    i++;
                } else {
                    return false;
                }
            }
            return buttonsArr.pop();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async uncheckSelectAllUnchecksAllCheckboxes() {
        try {
            var uncheckBoxesList = await this.uncheckedColumnsCheckbox.map(async (element) => {
                return await element.isEnabled();
            });
            let i = 0;
            while (i < uncheckBoxesList.length) {
                if (uncheckBoxesList[i] == true) {
                    i++;
                } else
                    return false;
            };
            return uncheckBoxesList.pop();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkselectAllchecksAllCheckboxes() {
        try {
            var checkBoxesList = await this.defaultSelectedColumnscheckbox.map(async (element) => {
                return await element.isEnabled();
            })
            let i = 0;
            while (i < checkBoxesList.length) {
                if (checkBoxesList[i] == true) {
                    i++;
                } else {
                    return false;
                }
            };
            return checkBoxesList.pop();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSelectColumnsApplyButton() {
        try {
            await this.selectColumnsApplyButton.waitForDisplayed();
            await this.selectColumnsApplyButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSelectColumnsClearButton() {
        try {
            await this.selectColumnsClearButton.waitForDisplayed();
            await this.selectColumnsClearButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //Get column names of user selected checkboxes
    async clickUserChoiceCheckbox(selectCheckboxes) {
        try {
            var selectCheckboxText = "";
            var checkColumnBoxes = selectCheckboxes.split(",");
            for (let i = 0; i < checkColumnBoxes.length; i++) {
                let argVal = checkColumnBoxes[i];
                await $("//app-provider-audits/div/div/child::div[2]//app-select-table-column//ul//li[" + argVal + "]//app-prime-checkbox").waitForClickable();
                await $("//app-provider-audits/div/div/child::div[2]//app-select-table-column//ul//li[" + argVal + "]//app-prime-checkbox").click();
                selectCheckboxText = selectCheckboxText + (await $("//app-select-table-column//ul//li[" + argVal + "]").getText()) + ((i !== (checkColumnBoxes.length - 1)) ? "," : "");
            }
            var selectedCheckboxText = selectCheckboxText.toString();
            await this.selectColumnsApplyButton.click();
            return selectedCheckboxText;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async userSelectedColumns() {
        try {

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getColumnHeaderPostSelectingColumns() {
        try {
            var headerPostSelection = await this.headerColumnsList.map(async (element) => {
                return await element.getText();
            });
            var headerColumnPostSelection = "";
            for (let i = 0; i < headerPostSelection.length; i++) {
                if (headerPostSelection[i] !== "Audit ID") {
                    headerColumnPostSelection = headerColumnPostSelection + headerPostSelection[i] + ((i != (headerPostSelection.length - 1)) ? "," : "")
                } else {
                    headerColumnPostSelection = headerColumnPostSelection + "";
                }
            }
            headerColumnPostSelection = headerColumnPostSelection.toString();
            return headerColumnPostSelection;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkSingleAuditAddCommentIconisEnabled() {
        try {
            var auditCommentIcon = await this.singleAuditAddCommentIcon.map(async (element) => {
                return await element.isEnabled();
            })
            let i = 0;
            while (i != auditCommentIcon.length) {
                if (auditCommentIcon[i] == true) {
                    i++;
                } else {
                    return false;
                }
            }
            return auditCommentIcon.pop();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //Click AddCommentIcon of AuditId (AuditId IS dynamic argument passed by user) 
    async clickSingleAuditAddCommentIcon(userAuditID) {
        try {
            await $(`//ngb-pagination`).scrollIntoView();
            const paginationCount = await this.paginationNumbers.length;
            const pageCount = await this.recordsPerPage.getValue();
            await this.scrollHeaderRow.waitForDisplayed();
            await this.scrollHeaderRow.scrollIntoView();
            addCommentIcon: for (let i = 2; i < paginationCount; i++) {
                let j = 1;
                while (j <= pageCount) {
                    await $(`(//tr[${j}]//td[2])[1]`).scrollIntoView();
                    await $("//app-provider-audits//tbody/tr[" + j + "]//td[2]//div").waitForDisplayed();
                    var rowAuditID = await $("//app-provider-audits//tbody/tr[" + j + "]//td[2]//div").getText();
                    if (rowAuditID == userAuditID) {
                        await $("//app-provider-audits//table//tbody//tr[" + j + "]//td[13]//span[@class='icon-comment-notes icons']").waitForDisplayed();
                        await $("//app-provider-audits//table//tbody//tr[" + j + "]//td[13]//span[@class='icon-comment-notes icons']").click();
                        break addCommentIcon;
                    } else {
                        j++;
                    }
                }
                await $("//div[@class='pagination-section']//app-pagination-v2//div//ngb-pagination//ul//li[" + (i + 1) + "]").waitForClickable();
                await $("//div[@class='pagination-section']//app-pagination-v2//div//ngb-pagination//ul//li[" + (i + 1) + "]").click();
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async displayOfSingleAuditAddCommentpopup() {
        try {
            await this.singleAuditAddCommentpopup.waitForDisplayed();
            return await this.singleAuditAddCommentpopup.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async singleAuditCommentpoupHeader() {
        try {
            await this.singleAuditCommentpopupHeader.waitForDisplayed();
            return await this.singleAuditCommentpopupHeader.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async singleAuditCommentpopupNoteInfo() {
        try {
            await this.singleAuditCommentPopupInfo.waitForDisplayed();
            return await this.singleAuditCommentPopupInfo.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async singleAuditCommentpopupNoteMaxCharInfo() {
        try {
            await this.singleAuditCommentpopupMaxCharInfo.waitForDisplayed();
            return await this.singleAuditCommentpopupMaxCharInfo.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async singleAuditCommentpopupSaveButtonLabel() {
        try {
            await this.singleAuditCommentpopupSaveButton.waitForDisplayed();
            return await this.singleAuditCommentpopupSaveButton.getAttribute('label');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSingleAuditCommentpopupSaveButton() {
        try {
            await this.singleAuditCommentpopupSaveButton.waitForDisplayed();
            return await this.singleAuditCommentpopupSaveButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async singleAuditCommentpopupCancelButtonLabel() {
        try {
            await this.singleAuditCommentpopupCancelButton.waitForDisplayed();
            return await this.singleAuditCommentpopupCancelButton.getAttribute('label');
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSingleAuditCommentpopupCancelButton() {
        try {
            await this.singleAuditCommentpopupCancelButton.waitForDisplayed();
            return await this.singleAuditCommentpopupCancelButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async singleAuditCommentpopupInLineErrorMsg() {
        try {
            await this.singleAuditCommentpopupInLineErrorMessage.waitForDisplayed();
            return await this.singleAuditCommentpopupInLineErrorMessage.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async singleOrBulkCommentpopupNoteSection(commentNote) {
        try {
            await this.singleOrBulkAuditCommentpopupNoteSection.waitForDisplayed();
            await this.singleOrBulkAuditCommentpopupNoteSection.setValue(commentNote);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getSingleAuditCommentpopupUserAddedNote() {
        try {
            await this.singleAuditCommentpopupUserAddedNote.waitForDisplayed();
            return await this.singleAuditCommentpopupUserAddedNote.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAuditCommentSuccessToasterMsg() {
        try {
            await this.successToasterMsg.waitForDisplayed();
            return await this.successToasterMsg.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkAddCommentInBulkButtonisEnabled() {
        try {
            await this.addCommentInBulkButton.waitForDisplayed();
            return await this.addCommentInBulkButton.isEnabled()
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAddCommentInBulkButtonLabel() {
        try {
            await this.addCommentInBulkButton.waitForDisplayed();
            return await this.addCommentInBulkButton.getText()
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickAddCommentInBulkButton() {
        try {
            await this.addCommentInBulkButton.waitForDisplayed();
            await this.addCommentInBulkButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getInLineErrorMsgOnAuditsScreen() {
        try {
            await this.bulkCommentInLineErrorMsgOnAuditsScreen.waitForDisplayed();
            return await this.bulkCommentInLineErrorMsgOnAuditsScreen.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async displayOfAddCommentInBulkpopup() {
        try {
            await this.addCommentInBulkpopup.waitForDisplayed();
            return await this.addCommentInBulkpopup.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getHeaderFromAddCommentInBulkpopup() {
        try {
            await this.addCommentInBulkpopupHeader.waitForDisplayed();
            return await this.addCommentInBulkpopupHeader.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async addCommentInBulkInLineErrorMsg() {
        try {
            await this.addCommentInBulkpopupInLineErrorMessage.waitForDisplayed();
            return await this.addCommentInBulkpopupInLineErrorMessage.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickAddCommentInBulkpopupSaveButton() {
        try {
            await this.addCommentInBulkpopupSaveButton.waitForDisplayed();
            await this.addCommentInBulkpopupSaveButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickAddCommentInBulkpopupCancelButton() {
        try {
            await this.addCommentInBulkpopupCancelButton.waitForDisplayed();
            await this.addCommentInBulkpopupCancelButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickBulkColumnHeaderCheckbox() {
        try {
            await this.bulkColumnHeaderCheckbox.waitForDisplayed();
            await this.bulkColumnHeaderCheckbox.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getCommentByClickingMultipleAddCommentIcons() {
        try {
            await this.recordsPerPage.waitForDisplayed();
            var recordCount = await this.recordsPerPage.getValue();
            for (let i = 1; i <= recordCount.length; i++) {
                await $("//app-provider-audits//table//tbody//tr[" + i + "]//td[13]//span[@class='icon-comment-notes icons']").waitForDisplayed();
                await $("//app-provider-audits//table//tbody//tr[" + i + "]//td[13]//span[@class='icon-comment-notes icons']").click();
                await this.singleAuditCommentpopupUserAddedNote.waitForDisplayed();
                var bulkComment = await this.singleAuditCommentpopupUserAddedNote.isDisplayed();
                await this.addCommentInBulkpopupCancelButton.waitForClickable();
                await this.addCommentInBulkpopupCancelButton.click();
            }
            return bulkComment;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAuditsCountperPage() {
        try {
            await this.recordsPerPage.waitForDisplayed();
            return await this.recordsPerPage.getValue();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async visibilityOfDownloadButton() {
        try {
            return await this.downloadButton.waitForDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickDownloadButton() {
        try {
            await this.downloadButton.waitForClickable();
            await this.downloadButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async checkDownloadSpinner() {
        try {
            await this.downloadSpinner.waitForDisplayed({ reverse: true });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    //Verify auditFileName in temporary directorary
    async verifyDownloadedFileNameInDirectory() {
        try {
            const auditFileName = ((providersAuditsTestData.providerNPI) + '_Audits_' + (commonFunctions.getCurrentDatewithTime())).toString();
            await commonFunctions.checkIfFileExists(global.downloadDir);
            path.join(global.downloadDir, auditFileName);
            browser.call(function () {
                return waitForFileExists(filePath, 60000);
            });
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getShowButtonLabelOnFilterPanel() {
        try {
            return await this.showFilterPanelButtonLabel.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async showButtonIsEnabled() {
        try {
            return await this.showFilterPanelButton.isEnabled();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickShowButtonOnFilterPanel() {
        try {
            await this.showFilterPanelButton.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async displayOfFilterPanel() {
        try {
            return await this.filterPanelDisplay.isDisplayed();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getlabelText(element) {
        try {
            return await element.getText();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getserachLabelOnFilterPanel() {
        try {
            return await this.serachLabelOnFilterPanel.getAttribute('label');
        } catch (error) {
            fail("Failed due to exception " + error);
        }

    }
    async setValueForClaimAuditIdDataSetAuditStatusFiltersOnFilterPanel() {
        try {
            const filtersOnFilterPanel = providersAuditsTestData.filterLabelsOnFilterPanel;
            const inputValues = providersAuditsTestData.filterPanelInputValues;;
            for (let i = 1; i <= 4; i++) {
                if (filtersOnFilterPanel[i - 1] == "Dataset") {
                    await $(`//app-filter//div[@id='scroll-left-section']//form//section[${i}]//div//input`).click();
                    await this.filterDropdownOptions.forEach(async (ele) => {
                        if ((await ele.getText()) == "Demo Data")
                            await ele.click();
                    })
                }
                else if (filtersOnFilterPanel[i - 1] == "Audit Status") {
                    await $(`//app-filter//div[@id='scroll-left-section']//form//section[${i}]//div//input`).click();
                    await this.filterDropdownOptions.forEach(async (ele) => {
                        if ((await ele.getText()) == "1st Level Appeal")
                            await ele.click();
                    })
                }
                else {
                    await $(`//app-filter//div[@id='scroll-left-section']//form//section[${i}]//div//input`).setValue(inputValues[i - 1]);
                }
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async clickSearchOnFilterPanel() {
        try {
            await this.searchButtonOnFilterPanel.click();
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAppliedFilterResultsInTable() {
        try {
            const searchedResultsInTableArray = [];
            const filterPanelInputValues = providersAuditsTestData.filterPanelInputValues;
            const filterPanelInputValuesExcludingDataset = filterPanelInputValues.filter(x => x != "Demo Data");
            const serachedResultsFromTable = await this.appliedFilterResultsInTable.map(async (ele) => {
                return await ele.getText();
            })
            for (let i = 0; i < filterPanelInputValuesExcludingDataset.length; i++) {
                for (let j = 0; j < serachedResultsFromTable.length; j++) {
                    if (filterPanelInputValuesExcludingDataset[i] == serachedResultsFromTable[j]) {
                        searchedResultsInTableArray.push(serachedResultsFromTable[j]);
                    }
                }
            }
            if (searchedResultsInTableArray.toString() == filterPanelInputValuesExcludingDataset.toString()) {
                return true;
            } else {
                return false;
            };
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}

module.exports = new ProvidersAuditsPage();