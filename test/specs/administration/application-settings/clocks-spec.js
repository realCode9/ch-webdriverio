import loginPage from "../../../pageobjects/login/login-page";
import clocksTestData from "../../../../resources/administration/application-settings/clocks-test-data.json";
import menuOptionsPage from "../../../pageobjects/menuoptions-page"
import clocks from "../../../pageobjects/administration/application-settings/clocks-page.js"
import commonUtilities from "../../../../utilities/common-utilities";
import claimSearch from "../../../pageobjects/global-search/claim-search-page";
import connectToDatabase from "../../../../utilities/database-connection";

describe("Test cases for Clocks", () => {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });
    it("Validate navigating to Clocks", async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.administration);
            await commonUtilities.clickOnElement(menuOptionsPage.applicationSettings);
            await commonUtilities.clickOnElement(menuOptionsPage.clocks);
            expect(await commonUtilities.getElementText(clocks.clocksHeaderText)).toContain(clocksTestData.clocks);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating New button and navigation to Add Clock screen', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.newButton);
            expect(await commonUtilities.getElementText(clocks.addOrEditClockText)).toContain(clocksTestData.addClocksScreen);
        }
        catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating the fields and buttons present on Add Clock screen', async () => {
        try {
            expect(await commonUtilities.isElementDisplayed(clocks.clockNameField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.clockTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.auditTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.validStatusField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.failureStatusField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.startDateBasisField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.isTimerCheckbox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.overallCheckbox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.clockStatusToggleButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.daysTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.timezoneField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.totalDaysField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.warningDaysField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.activeStartDateField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.activeEndDateField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.datasetField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.lineOfBusinessField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.organizationField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.claimTypeField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.ruleField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.parOrNonParField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.groupNumberField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.taxIDField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.npiField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.providerStateField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.memberStateField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.prepayCheckbox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.postpayCheckbox)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.paidAmountGreaterThanField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.commentsField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.saveButton)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.cancelButton)).toBe(true);

        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Verify fields on detail screen after clicking on Hours radio button ', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.hoursTypeRadioButton);
            expect(await commonUtilities.isElementDisplayed(clocks.totalHoursField)).toBe(true);
            expect(await commonUtilities.isElementDisplayed(clocks.warningHoursField)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating the save button is disabled by default on Add Clock screen', async () => {
        try {
            expect(await commonUtilities.isElementEnabled(clocks.saveButton)).toBe(false);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating the fields disabled by default on Add Clock screen', async () => {
        try {
            expect(await commonUtilities.isElementEnabled(clocks.validStatusField)).toBeFalse;
            expect(await commonUtilities.isElementEnabled(clocks.startDateBasisField)).toBeFalse;
            expect(await commonUtilities.isElementEnabled(clocks.failureStatusField)).toBeFalse;
            expect(await commonUtilities.isElementEnabled(clocks.lineOfBusinessField)).toBeFalse;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating Start Date Basis field is dependent on Clock Type field', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.clockTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.clockTypeFieldValue);
            expect(await commonUtilities.isElementEnabled(clocks.startDateBasisField)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating Valid Status and Failure Status field is dependent on Audit Type field', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.auditTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.auditTypeFieldValue);
            expect(await commonUtilities.isElementEnabled(clocks.validStatusField)).toBe(true);
            expect(await commonUtilities.isElementEnabled(clocks.failureStatusField)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating Failure Status field is disabled when Is Timer is selected', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.isTimerCheckbox);
            expect(await commonUtilities.isElementEnabled(clocks.failureStatusField)).toBeFalse;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating Line Of Business field is dependent on Dataset', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.datasetField);
            await commonUtilities.selectDropDownOptions(clocksTestData.datasetFieldValue);
            expect(await commonUtilities.isElementEnabled(clocks.lineOfBusinessField)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating cancel button functionality', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.cancelButton);
            expect(await commonUtilities.getElementText(clocks.clocksHeaderText)).toContain(clocksTestData.clocks);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating creation of days type clock', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.newButton);
            await commonUtilities.enterValueInElement(clocks.clockNameField, clocksTestData.clockNameDays);
            await commonUtilities.clickOnElement(clocks.clockTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.clockTypeFieldValue);
            await commonUtilities.clickOnElement(clocks.auditTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.auditTypeFieldValue);
            await commonUtilities.clickOnElement(clocks.startDateBasisField);
            await commonUtilities.selectDropDownOptions(clocksTestData.startDateBasisFieldValue);
            await commonUtilities.clickOnElement(clocks.validStatusField);
            await commonUtilities.selectDropDownOptions(clocksTestData.validStatusFieldValue);
            await commonUtilities.clickOnElement(clocks.failureStatusField);
            await commonUtilities.selectDropDownOptions(clocksTestData.failureStatusFieldValue);
            await commonUtilities.clickOnElement(clocks.daysTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.daysTypeFieldValue);
            await commonUtilities.enterValueInElement(clocks.totalDaysField, clocksTestData.totalDays);
            await commonUtilities.clickOnElement(clocks.timezoneField);
            await commonUtilities.enterValueInElement(clocks.timezoneField, clocksTestData.timezoneFieldValue);
            await commonUtilities.selectDropDownOptions(clocksTestData.timezoneFieldValue);
            await commonUtilities.clickOnElement(clocks.datasetField);
            await commonUtilities.selectDropDownOptions(clocksTestData.datasetFieldValue);
            await commonUtilities.clickOnElement(clocks.lineOfBusinessField);
            await commonUtilities.selectDropDownOptions(clocksTestData.lineOfBusinessFieldValue);
            await commonUtilities.clickOnElement(clocks.prepayCheckbox);
            await commonUtilities.clickOnElement(clocks.postpayCheckbox);
            await commonUtilities.clickOnElement(clocks.saveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(clocksTestData.successToaster);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating association of days type Clock with Audit', async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(claimSearch.claimSearch);
            await commonUtilities.enterValueInElement(claimSearch.claimNumber, clocksTestData.claimNumber);
            await commonUtilities.clickOnElement(claimSearch.searchButton);
            await commonUtilities.clickOnElement(claimSearch.firstClaim);
            await clocks.clickOnAssociatedAudit(clocksTestData.auditId);
            await commonUtilities.clickOnElement(clocks.clockSliderButton);
            expect(await clocks.verifyClockAttached(clocksTestData.clockNameDays)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating association of a Clock with more than one Audit', async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(claimSearch.editFilterButton);
            await commonUtilities.clickOnElement(claimSearch.clearButton);
            await commonUtilities.enterValueInElement(claimSearch.claimNumber, clocksTestData.secondClaimNumber);
            await commonUtilities.clickOnElement(claimSearch.searchButton);
            await commonUtilities.clickOnElement(claimSearch.firstClaim);
            await clocks.clickOnAssociatedAudit(clocksTestData.secondAuditId);
            expect(await clocks.verifyClockAttached(clocksTestData.clockNameDays)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    describe("Testing Search panel functionality on Clocks Search", function () {
        it('Validate default fields and buttons present on search panel', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.menuArrow);
                await commonUtilities.clickOnElement(menuOptionsPage.administration);
                await commonUtilities.clickOnElement(menuOptionsPage.applicationSettings);
                await commonUtilities.clickOnElement(menuOptionsPage.clocks);
                expect(await commonUtilities.isElementDisplayed(clocks.hideSearchButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.savedFiltersDropdownButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.clockID)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.name)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.validStatus)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.failureStatus)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.startDateBasis)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.clockStatus)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.searchButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.clearButton)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.saveFilterButton)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Validate fields present by clicking on Advanced Search on search panel', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.advancedSearch);
                expect(await commonUtilities.isElementDisplayed(clocks.dataset)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.lineOfBusiness)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.auditType)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.clockType)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.npi)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.taxID)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.rule)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.parNonPar)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.isTimer)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.overall)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.memberState)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.providerState)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.paymentTiming)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.groupNumber)).toBe(true);
                expect(await commonUtilities.isElementDisplayed(clocks.organization)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify error message without entering any search criteria', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.searchButton);
                expect(await commonUtilities.getElementText(clocks.errorMessageText)).toContain(clocksTestData.errorMessage);
                await commonUtilities.clickOnElement(clocks.clearButton);
                await commonUtilities.clickOnElement(clocks.saveFilterButton);
                expect(await commonUtilities.getElementText(clocks.errorMessageText)).toContain(clocksTestData.errorMessage);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify search functionality', async () => {
            try {
                await commonUtilities.enterValueInElement(clocks.name, clocksTestData.clockNameDays);
                await commonUtilities.clickOnElement(clocks.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
                expect(await commonUtilities.getElementText(clocks.clockName)).toEqual(clocksTestData.clockNameDays);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify clear button functionality', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.clearButton);
                expect(await commonUtilities.getElementText(clocks.name)).toEqual(clocksTestData.placeholderText)
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify no search result screen for search', async () => {
            try {
                await commonUtilities.enterValueInElement(clocks.name, clocksTestData.incorrectClockName);
                await commonUtilities.clickOnElement(clocks.searchButton);
                expect(await commonUtilities.getElementText(clocks.noSearchResults)).toContain(clocksTestData.noSearchResultText);
                expect(await commonUtilities.getElementText(clocks.tableRecordCount)).toContain(clocksTestData.tableRecordCountText);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify save filter modal is opened after clicking on save filter button functionality', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.clearButton);
                await commonUtilities.clickOnElement(clocks.clockType);
                await commonUtilities.selectDropDownOptions(clocksTestData.clockTypeFieldValue);
                await commonUtilities.clickOnElement(clocks.saveFilterButton);
                expect(await commonUtilities.getElementText(clocks.saveFilterModalHeader)).toContain(clocksTestData.saveFilterModalHeaderText)
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify clicking on cancel will close the save filter modal', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.filterModalCancelButton);
                expect(await clocks.elementNotDisplayed(clocks.saveFilterModalHeader)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify save filter functionality', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.saveFilterButton);
                await commonUtilities.enterValueInElement(clocks.addNameField, clocksTestData.filterName);
                await commonUtilities.clickOnElement(clocks.filterModalSaveButton);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toEqual(clocksTestData.savedFilterSuccessToaster);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify edit filter functionality', async () => {
            try {
                await commonUtilities.waitForToasterMessageToDisappear();
                await commonUtilities.clickOnElement(clocks.clearButton);
                await commonUtilities.clickOnElement(clocks.savedFiltersDropdownButton);
                await commonUtilities.clickOnFilterIcon(clocks.savedFilterNameValues, clocksTestData.filterName, clocks.editFilterIcon);
                await commonUtilities.clickOnElement(clocks.clockType);
                await commonUtilities.selectDropDownOptions(clocksTestData.editedclockTypeFieldValue);
                await commonUtilities.clickOnElement(clocks.editFilterSaveButton);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toEqual(clocksTestData.savedFilterSuccessToaster);
                await commonUtilities.waitForToasterMessageToDisappear();
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify duplicate filter error toaster message', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.clockType);
                await commonUtilities.selectDropDownOptions(clocksTestData.clockTypeFieldValue);
                await commonUtilities.clickOnElement(clocks.saveFilterButton);
                await commonUtilities.enterValueInElement(clocks.addNameField, clocksTestData.filterName);
                await commonUtilities.clickOnElement(clocks.filterModalSaveButton);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toEqual(clocksTestData.savedFilterDuplicateErrorToaster);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify delete filter functionality', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.errorToaster);
                await commonUtilities.clickOnElement(clocks.savedFiltersDropdownButton);
                await commonUtilities.clickOnFilterIcon(clocks.savedFilterNameValues, clocksTestData.filterName, clocks.deleteFilterIcon);
                expect(await commonUtilities.getElementText(clocks.deleteFilterModalText)).toEqual(clocksTestData.deleteFilterModalText);
                await commonUtilities.clickOnElement(clocks.deleteFilterYesButton);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Page Size and Pagination functionality on Clocks", function () {
        it('Verify page size is displayed on clocks screen', async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(clocks.pageSizeInput)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating default value in Page Size", async () => {
            try {
                expect(await commonUtilities.getElementText(clocks.pageSizeInput)).toBeLessThanOrEqual(clocksTestData.defaultPageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Page Size functionality", async () => {
            try {
                await commonUtilities.enterValueInPageSize(clocks.pageSizeInput, clocksTestData.pageSize);
                await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Pagination is displayed", async () => {
            try {
                expect(await commonUtilities.isElementDisplayed(clocks.pagination)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it("Validating Pagination functionality", async () => {
            try {
                expect(await commonUtilities.verifyPagination(clocks.totalSearchResultRows)).toBeLessThanOrEqual(clocksTestData.pageSize);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing Edit functionality on Clocks", function () {
        it('Verify navigate to edit clocks screen', async () => {
            try {
                await commonUtilities.enterValueInElement(clocks.name, clocksTestData.clockNameDays);
                await commonUtilities.clickOnElement(clocks.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
                await commonUtilities.clickOnElement(clocks.clockName);
                expect(await commonUtilities.getElementText(clocks.addOrEditClockText)).toContain(clocksTestData.editClockScreen);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify clock edit functionality', async () => {
            try {
                await commonUtilities.clickOnElement(clocks.clockStatusToggleButton);
                await commonUtilities.clickOnElement(clocks.saveButton);
                expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(clocksTestData.successToaster);
                await commonUtilities.waitForToasterMessageToDisappear();
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    describe("Testing History functionality on Clocks", function () {
        it('Verify navigate to History Tab', async () => {
            try {
                await commonUtilities.enterValueInElement(clocks.name, clocksTestData.clockNameDays);
                await commonUtilities.clickOnElement(clocks.searchButton);
                await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
                await commonUtilities.clickOnElement(clocks.clockName);
                await commonUtilities.clickOnElement(clocks.historyTab);
                expect(await commonUtilities.isElementDisplayed(clocks.historyTable)).toBe(true);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify columns on History Tab', async () => {
            try {
                expect(await commonUtilities.getMultiElementTextOneByOne(clocks.historyColumnHeaders)).toEqual(clocksTestData.historyColumnHeaders);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
        it('Verify History functionality', async () => {
            try {
                let dateText = await commonUtilities.getElementText(clocks.clockHistoryDate);
                let historyDate = dateText.substring(0, 7);
                let currentDate = await commonUtilities.getTodayDate();
                expect(historyDate).toEqual(currentDate);
                await commonUtilities.clickOnElement(clocks.detailsTab);
                await commonUtilities.clickOnElement(clocks.cancelButton);
            } catch (error) {
                fail("Failed due to exception " + error);
            }
        });
    });
    it('Validating dis-association of a Clock with Audit', async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(claimSearch.editFilterButton);
            await commonUtilities.clickOnElement(claimSearch.searchButton);
            await commonUtilities.clickOnElement(claimSearch.firstClaim);
            await clocks.clickOnAssociatedAudit(clocksTestData.auditId);
            let silderButtonPresence = await clocks.elementNotDisplayed(clocks.clockSliderButton);
            if (silderButtonPresence == true) {
                expect(await clocks.elementNotDisplayed(clocks.clockSliderButton)).toBe(true);
            }
            else {
                await commonUtilities.clickOnElement(clocks.clockSliderButton);
                expect(await clocks.verifyClockAttached(clocksTestData.clockNameDays)).toBeFalse;
            }
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating creation of hours type clock', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.menuArrow);
            await commonUtilities.clickOnElement(menuOptionsPage.administration);
            await commonUtilities.clickOnElement(menuOptionsPage.applicationSettings);
            await commonUtilities.clickOnElement(menuOptionsPage.clocks);
            await commonUtilities.clickOnElement(clocks.newButton);
            await commonUtilities.enterValueInElement(clocks.clockNameField, clocksTestData.clockNameHours);
            await commonUtilities.clickOnElement(clocks.clockTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.clockTypeFieldValue);
            await commonUtilities.clickOnElement(clocks.auditTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.auditTypeFieldValue);
            await commonUtilities.clickOnElement(clocks.startDateBasisField);
            await commonUtilities.selectDropDownOptions(clocksTestData.startDateBasisFieldValue);
            await commonUtilities.clickOnElement(clocks.validStatusField);
            await commonUtilities.selectDropDownOptions(clocksTestData.validStatusFieldValue);
            await commonUtilities.clickOnElement(clocks.failureStatusField);
            await commonUtilities.selectDropDownOptions(clocksTestData.failureStatusFieldValue);
            await commonUtilities.clickOnElement(clocks.hoursTypeRadioButton);
            await commonUtilities.enterValueInElement(clocks.totalHoursField, clocksTestData.totalHours);
            await commonUtilities.clickOnElement(clocks.timezoneField);
            await commonUtilities.enterValueInElement(clocks.timezoneField, clocksTestData.timezoneFieldValue);
            await commonUtilities.selectDropDownOptions(clocksTestData.timezoneFieldValue);
            await commonUtilities.clickOnElement(clocks.datasetField);
            await commonUtilities.selectDropDownOptions(clocksTestData.datasetFieldValue);
            await commonUtilities.clickOnElement(clocks.lineOfBusinessField);
            await commonUtilities.selectDropDownOptions(clocksTestData.lineOfBusinessFieldValue);
            await commonUtilities.clickOnElement(clocks.prepayCheckbox);
            await commonUtilities.clickOnElement(clocks.postpayCheckbox);
            await commonUtilities.clickOnElement(clocks.saveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(clocksTestData.successToaster);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating association of hours type Clock with Audit', async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(claimSearch.claimSearch);
            await commonUtilities.clickOnElement(claimSearch.editFilterButton);
            await commonUtilities.clickOnElement(claimSearch.searchButton);
            await commonUtilities.clickOnElement(claimSearch.firstClaim);
            await clocks.clickOnAssociatedAudit(clocksTestData.auditId);
            await browser.pause(2000);
            await commonUtilities.clickOnElement(clocks.clockSliderButton);
            expect(await clocks.verifyClockAttached(clocksTestData.clockNameHours)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating creation of timer type clock', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.menuArrow);
            await commonUtilities.clickOnElement(menuOptionsPage.administration);
            await commonUtilities.clickOnElement(menuOptionsPage.applicationSettings);
            await commonUtilities.clickOnElement(menuOptionsPage.clocks);
            await commonUtilities.clickOnElement(clocks.newButton);
            await commonUtilities.enterValueInElement(clocks.clockNameField, clocksTestData.timerClock);
            await commonUtilities.clickOnElement(clocks.clockTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.clockTypeFieldValue);
            await commonUtilities.clickOnElement(clocks.auditTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.auditTypeFieldValue);
            await commonUtilities.clickOnElement(clocks.startDateBasisField);
            await commonUtilities.selectDropDownOptions(clocksTestData.startDateBasisFieldValue);
            await commonUtilities.clickOnElement(clocks.validStatusField);
            await commonUtilities.selectDropDownOptions(clocksTestData.validStatusFieldValue);
            await commonUtilities.clickOnElement(clocks.isTimerCheckbox);
            await commonUtilities.clickOnElement(clocks.daysTypeField);
            await commonUtilities.selectDropDownOptions(clocksTestData.daysTypeFieldValue);
            await commonUtilities.enterValueInElement(clocks.totalDaysField, clocksTestData.totalDays);
            await commonUtilities.clickOnElement(clocks.timezoneField);
            await commonUtilities.enterValueInElement(clocks.timezoneField, clocksTestData.timezoneFieldValue);
            await commonUtilities.selectDropDownOptions(clocksTestData.timezoneFieldValue);
            await commonUtilities.clickOnElement(clocks.datasetField);
            await commonUtilities.selectDropDownOptions(clocksTestData.datasetFieldValue);
            await commonUtilities.clickOnElement(clocks.lineOfBusinessField);
            await commonUtilities.selectDropDownOptions(clocksTestData.lineOfBusinessFieldValue);
            await commonUtilities.clickOnElement(clocks.prepayCheckbox);
            await commonUtilities.clickOnElement(clocks.postpayCheckbox);
            await commonUtilities.clickOnElement(clocks.saveButton);
            expect(await commonUtilities.visibilityOfSuccessToaster()).toContain(clocksTestData.successToaster);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating association of timer type Clock with Audit', async () => {
        try {
            await commonUtilities.clickOnElement(menuOptionsPage.globalSearch);
            await commonUtilities.clickOnElement(claimSearch.claimSearch);
            await commonUtilities.clickOnElement(claimSearch.editFilterButton);
            await commonUtilities.clickOnElement(claimSearch.searchButton);
            await commonUtilities.clickOnElement(claimSearch.firstClaim);
            await clocks.clickOnAssociatedAudit(clocksTestData.auditId);
            await browser.pause(2000);
            await commonUtilities.clickOnElement(clocks.clockSliderButton);
            expect(await clocks.verifyClockAttached(clocksTestData.timerClock)).toBe(true);
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating deletion of days clock from clocks collection', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.menuArrow);
            await commonUtilities.clickOnElement(menuOptionsPage.administration);
            await commonUtilities.clickOnElement(menuOptionsPage.applicationSettings);
            await commonUtilities.clickOnElement(menuOptionsPage.clocks);
            await connectToDatabase();
            await clocks.verifyDeletingClocks(clocksTestData.clockNameDays);
            await commonUtilities.enterValueInElement(clocks.name, clocksTestData.clockNameDays);
            await commonUtilities.clickOnElement(clocks.searchButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
            expect(await commonUtilities.getElementText(clocks.noSearchResults)).toContain(clocksTestData.noSearchResultText);
            expect(await commonUtilities.getElementText(clocks.tableRecordCount)).toContain(clocksTestData.tableRecordCountText);
        } catch
        {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating deletion of hours clock from clocks collection', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.clearButton);
            await commonUtilities.enterValueInElement(clocks.name, clocksTestData.clockNameHours);
            await commonUtilities.clickOnElement(clocks.searchButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
            await commonUtilities.clickOnElement(clocks.clockName);
            await commonUtilities.clickOnElement(clocks.clockStatusToggleButton);
            await commonUtilities.clickOnElement(clocks.saveButton);
            await clocks.verifyDeletingClocks(clocksTestData.clockNameHours);
            await commonUtilities.enterValueInElement(clocks.name, clocksTestData.clockNameHours);
            await commonUtilities.clickOnElement(clocks.searchButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
            expect(await commonUtilities.getElementText(clocks.noSearchResults)).toContain(clocksTestData.noSearchResultText);
            expect(await commonUtilities.getElementText(clocks.tableRecordCount)).toContain(clocksTestData.tableRecordCountText);
        } catch
        {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating deletion of timer clock from clocks collection', async () => {
        try {
            await commonUtilities.clickOnElement(clocks.clearButton);
            await commonUtilities.enterValueInElement(clocks.name, clocksTestData.timerClock);
            await commonUtilities.clickOnElement(clocks.searchButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
            await commonUtilities.clickOnElement(clocks.clockName);
            await commonUtilities.clickOnElement(clocks.clockStatusToggleButton);
            await commonUtilities.clickOnElement(clocks.saveButton);
            await clocks.verifyDeletingClocks(clocksTestData.timerClock);
            await commonUtilities.enterValueInElement(clocks.name, clocksTestData.timerClock);
            await commonUtilities.clickOnElement(clocks.searchButton);
            await commonUtilities.waitUntilLoaderFinishedLoading(clocks.loader);
            expect(await commonUtilities.getElementText(clocks.noSearchResults)).toContain(clocksTestData.noSearchResultText);
            expect(await commonUtilities.getElementText(clocks.tableRecordCount)).toContain(clocksTestData.tableRecordCountText);
        } catch
        {
            fail("Failed due to exception " + error);
        }
    });
    it('Validating deletion of clocks from overpayment collection', async () => {
        try {
            await clocks.verifyDeletingClocksFormAudit(clocksTestData.clockNameDays);
            await clocks.verifyDeletingClocksFormAudit(clocksTestData.clockNameHours);
            await clocks.verifyDeletingClocksFormAudit(clocksTestData.timerClock);
        } catch
        {
            fail("Failed due to exception " + error);
        }
    });
});