import loginPage from "../../../../pageobjects/login/login-page";
import menuOptions from "../../../../pageobjects/menuoptions-page";
import utilities from "../../../../../utilities/common-utilities";
import controlsPage from "../../../../pageobjects/administration/application-settings/letters/controls-page";
import data from "../../../../../resources/administration/application-settings/letters/controls-test-data.json";
import templatesPage from "../../../../pageobjects/administration/application-settings/letters/templates/templates-page";

describe('Testing Letters > Controls', function () {
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
    });

    it('Validate navigation to Controls', async function () {
        await menuOptions.clickOnAdmin();
        await menuOptions.clickOnApplicationSettings();
        await utilities.clickOnElement(menuOptions.letters);
        await utilities.clickOnElement(menuOptions.controls);
        expect(await utilities.getElementText(controlsPage.header)).toEqual(data.header);
    });

    it('Verify columns present on the control list page', async function () {
        expect(await controlsPage.verifyListColumn()).toBe(true);
    });

    describe('Validate new control creation', function () {
        
        it('Verify new button click', async function () {
            await utilities.clickOnElement(controlsPage.newButton);
            expect(await utilities.getElementText(controlsPage.controlDetailHeader)).toEqual(data.detailHeader);
        });

        it('Verify fields and buttons on the detail page', async function () {
            expect(await utilities.isElementDisplayed(controlsPage.type)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.friendlyName)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.key)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.sourceType)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.saveButton)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.cancelButton)).toBe(true);
        });

        it('Verify custom fields appear for borderless table', async function () {
            await controlsPage.selectType("Borderless Table");
            expect(await utilities.isElementDisplayed(controlsPage.addRowButton));
            expect(await utilities.isElementDisplayed(controlsPage.landscapeCheckbox));
        });

        it('Verify custom fields appear for default table', async function () {
            await controlsPage.selectType("Default Table");
            expect(await utilities.isElementDisplayed(controlsPage.addRowButton));
            expect(await utilities.isElementDisplayed(controlsPage.addTotalRowButton))
            expect(await utilities.isElementDisplayed(controlsPage.landscapeCheckbox));
        });

        it('Verify custom fields appear for form table ', async function () {
            await controlsPage.selectType("Form Table");
            expect(await utilities.isElementDisplayed(controlsPage.addRowButton));
            expect(await utilities.isElementDisplayed(controlsPage.landscapeCheckbox));
        });

        it('Verify custom fields appear for static type', async function () {
            await controlsPage.selectType("Static");
            expect(await utilities.isElementDisplayed(controlsPage.field));
        });

        it('Verify tooltip text of Friendly Name field', async function () {
            expect(await controlsPage.getTooltipText(controlsPage.friendlyNameTooltip)).toEqual(data.friendlyNameTooltip);
        });

        it('Verify tooltip text of Key field', async function () {
            expect(await controlsPage.getTooltipText(controlsPage.keyTooltip)).toEqual(data.keyTooltip);
        });

        it('Verify tooltip text of Landscape checkbox', async function () {
            await controlsPage.selectType("Borderless Table"); 
            expect(await controlsPage.getTooltipText(controlsPage.landscapeTooltip)).toEqual(data.landscapeTooltip);
        });

        it('Verify tooltip text of Field without selecting source type', async function () {
            await controlsPage.selectType("Static");
            expect(await controlsPage.getTooltipText(controlsPage.fieldTooltip)).toEqual(data.fieldTooltipWithoutSourceType);
        });

        it('Verify tooltip text of Field for Audit source type', async function () {
            await controlsPage.selectType("Static");
            await controlsPage.selectSourceType("Audit");
            expect(await controlsPage.getTooltipText(controlsPage.fieldTooltip)).toEqual(data.fieldTooltipForAudit);
        });

        it('Verify tooltip text of Field for claim source type', async function () {
            await controlsPage.selectType("Static");
            await controlsPage.selectSourceType("Claim");
            expect(await controlsPage.getTooltipText(controlsPage.fieldTooltip)).toEqual(data.fieldTooltipForClaim);
        });

        it('Verify tooltip text of Field for MRR source type', async function () {
            await controlsPage.selectType("Static");
            await controlsPage.selectSourceType("Medical Record Request");
            expect(await controlsPage.getTooltipText(controlsPage.fieldTooltip)).toEqual(data.fieldTooltipForMRR);
            await utilities.clickOnElement(controlsPage.cancelButton);
        });

        describe('Verify Add Row button functionality for Borderless Table', function () {
            
            it('Verify Row tab opens upon clicking Add Row button', async function () {
                await utilities.clickOnElement(controlsPage.newButton);
                await controlsPage.selectType("Borderless Table");
                await utilities.clickOnElement(controlsPage.addRowButton);
                expect(await utilities.isElementDisplayed(controlsPage.rowTab)).toBe(true);
            });

            it('Verify fields and buttons on Row tab', async function () {
                expect(await utilities.isElementDisplayed(controlsPage.addColumnButton)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.togglePanel)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabHeading)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabField)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabColspan)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabRowspan)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabStyle)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabFormatter)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabOperations)).toBe(true);
            });

            it('Verify tooltip text of all the fields on Row tab', async function () {
                expect(await controlsPage.getTooltipText(controlsPage.rowTabHeadingTooltip)).toEqual(data.headingTooltip);
                expect(await controlsPage.getTooltipText(controlsPage.rowTabFieldTooltip)).toEqual(data.fieldTooltipWithoutSourceType);
                expect(await controlsPage.getTooltipText(controlsPage.rowTabColspanTooltip)).toEqual(data.colspanTooltip);
                expect(await controlsPage.getTooltipText(controlsPage.rowTabRowspanTooltip)).toEqual(data.rowspanTooltip);
                expect(await controlsPage.getTooltipText(controlsPage.rowTabStyleTooltip)).toEqual(data.styleTooltip);
                expect(await controlsPage.getTooltipText(controlsPage.rowTabFormatterTooltip)).toContain(data.formatterTooltip);
            });

            it('Verify Add Column button functionality', async function () {
                await utilities.clickOnElement(controlsPage.addColumnButton);
                expect(await utilities.isElementDisplayed(controlsPage.anotherColumn)).toBe(true);
            });

        });

        describe('Creation of borderless table type control',function () {
            
            it('Enter the data, click on save button and verify success toaster', async function () {
                await controlsPage.selectType("Borderless Table");
                await utilities.enterValueInElement(controlsPage.friendlyName, data.newBorderlessFriendlyName);
                await utilities.enterValueInElement(controlsPage.key, data.newKey);
                await controlsPage.selectSourceType("Audit");
                await utilities.enterValueInElement(controlsPage.rowTabHeading, data.newColumnHeading);
                await utilities.clickOnElement(controlsPage.saveButton);
                expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.controlCreatedSuccessToaster);
            });

            it('Verify back and delete buttons appear post creation of a control', async function () {
                expect(await utilities.isElementDisplayed(controlsPage.backButton)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.deleteButton)).toBe(true);
            });

            it('Verify created control is available on letter Templates', async function () {
                await controlsPage.navigateToLetterTemplateBody();
                await controlsPage.enterBodyContentUsingLetterControls(data.newBorderlessFriendlyName);
                expect(await utilities.isElementDisplayed(controlsPage.controllerOption)).toBe(true);
                expect(await utilities.getElementText(controlsPage.controllerOption)).toEqual(data.newBorderlessFriendlyName);
                await utilities.clickOnElement(controlsPage.controllerOption);
                expect(await utilities.isElementDisplayed(controlsPage.templateKey)).toBe(true);
            });
        });

        describe('Creation of static type control',function () {
            
            it('Navigate to controls new page, enter the data, click on save button and verify success toaster', async function () {
                await utilities.clickOnElement(menuOptions.controls);
                await utilities.clickOnElement(controlsPage.newButton);
                await controlsPage.selectType("Static");
                await utilities.enterValueInElement(controlsPage.friendlyName, data.newStaticFriendlyName);
                await utilities.enterValueInElement(controlsPage.key, data.newKey);
                await controlsPage.selectSourceType("Audit");
                await utilities.enterValueInElement(controlsPage.field, data.newField);
                await utilities.clickOnElement(controlsPage.saveButton);
                expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.controlCreatedSuccessToaster);
                expect(await utilities.isElementDisplayed(controlsPage.backButton)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.deleteButton)).toBe(true);
            });

            it('Verify created control is available on letter Templates', async function () {
                await controlsPage.navigateToLetterTemplateBody();
                await controlsPage.enterBodyContentUsingLetterControls(data.newStaticFriendlyName);
                expect(await utilities.isElementDisplayed(controlsPage.controllerOption)).toBe(true);
                expect(await utilities.getElementText(controlsPage.controllerOption)).toEqual(data.newStaticFriendlyName);
                await utilities.clickOnElement(controlsPage.controllerOption);
                expect(await utilities.isElementDisplayed(controlsPage.templateKey)).toBe(true);
            });
        });

        describe('Creation of default table type control',function () {

            it('Navigate to controls new page and verify add total row button functionality',async function () {
                await utilities.clickOnElement(menuOptions.controls);
                await utilities.clickOnElement(controlsPage.newButton);
                await controlsPage.selectType("Default Table");
                await utilities.clickOnElement(controlsPage.addTotalRowButton);
                expect(await utilities.isElementDisplayed(controlsPage.totalRowTab)).toBe(true);
            });

            it('Verify fields and buttons on total row tab', async function () {
                expect(await utilities.isElementDisplayed(controlsPage.addColumnButton)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.togglePanel)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabField)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.rowTabOperations)).toBe(true);
            });
            
            it('Enter the data, click on save button and verify success toaster', async function () {
                await utilities.enterValueInElement(controlsPage.friendlyName, data.newDefaultFriendlyName);
                await utilities.enterValueInElement(controlsPage.key, data.newKey);
                await controlsPage.selectSourceType("Audit");
                await utilities.enterValueInElement(controlsPage.rowTabField, data.newField);
                await utilities.clickOnElement(controlsPage.rowTabOperations);
                await utilities.selectDropDownOptions("Sum");
                await utilities.clickOnElement(controlsPage.saveButton);
                expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.controlCreatedSuccessToaster);
                expect(await utilities.isElementDisplayed(controlsPage.backButton)).toBe(true);
                expect(await utilities.isElementDisplayed(controlsPage.deleteButton)).toBe(true);
            });

            it('Verify created control is available on letter Templates', async function () {
                await controlsPage.navigateToLetterTemplateBody();
                await controlsPage.enterBodyContentUsingLetterControls(data.newDefaultFriendlyName);
                expect(await utilities.isElementDisplayed(controlsPage.controllerOption)).toBe(true);
                expect(await utilities.getElementText(controlsPage.controllerOption)).toEqual(data.newDefaultFriendlyName);
                await utilities.clickOnElement(controlsPage.controllerOption);
                expect(await utilities.isElementDisplayed(controlsPage.templateKey)).toBe(true);
            });
        });

    }); 

    describe('Verify search functionality', function () {

        it('Verify no filter text appears on search panel by default', async function () {
            await utilities.clickOnElement(menuOptions.controls);
            expect(await utilities.isElementDisplayed(controlsPage.searchLink)).toBe(true);
        });
        
        it('Verify fields and buttons on search panel post clicking on search link', async function () {
            await utilities.clickOnElement(controlsPage.searchLink);
            expect(await utilities.isElementDisplayed(controlsPage.searchSourceType)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.searchControlType)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.searchFriendlyName)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.searchButton)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.clearButton)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.closeSearchLink)).toBe(true);
        });

        it('Verify search using source type', async function () {
            await controlsPage.selectSourceType("Audit");
            await utilities.clickOnElement(controlsPage.searchButton);
            expect(await templatesPage.verifySearchOutput(controlsPage.listSourceType , data.sourceTypeColumnData));
        });

        it('Verify clear button functionality', async function () {
            await utilities.clickOnElement(controlsPage.editSearchLink);
            await utilities.clickOnElement(controlsPage.clearButton);
            expect(await utilities.isElementDisplayed(controlsPage.searchLink)).toBe(true);
        });

        it('Verify search using control type', async function () {
            await utilities.clickOnElement(controlsPage.searchLink);
            await utilities.clickOnElement(controlsPage.searchControlType);
            await utilities.selectDropDownOptions(data.listControlType);
            await utilities.clickOnElement(controlsPage.searchButton);
            expect(await templatesPage.verifySearchOutput(controlsPage.listControlType , data.listControlType));
            await utilities.clickOnElement(controlsPage.editSearchLink);
            await utilities.clickOnElement(controlsPage.clearButton);
        })
    });

    describe('Verify delete functionality', function () {
        
        it('Verify delete modal appears on click of delete button', async function () {
            await utilities.clickOnElement(controlsPage.searchLink);
            await controlsPage.searchControlAndPressDeleteButton(data.newBorderlessFriendlyName);
            expect(await utilities.isElementDisplayed(controlsPage.deleteModal)).toBe(true);
        });

        it('Verify content and buttons on the modal', async function () {
            expect(await utilities.getElementText(controlsPage.deleteModalContent)).toEqual(data.deleteModalMessage);
            expect(await utilities.isElementDisplayed(controlsPage.deleteModalYesButton)).toBe(true);
            expect(await utilities.isElementDisplayed(controlsPage.deleteModalNoButton)).toBe(true)
        });

        it('Verify No button functionality', async function () {
            await utilities.clickOnElement(controlsPage.deleteModalNoButton);
            expect(await controlsPage.deleteModal).toExist(false);
        });

        it('Verify Yes button functionality', async function () {
            await utilities.clickOnElement(controlsPage.deleteButton);
            await utilities.clickOnElement(controlsPage.deleteModalYesButton); 
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.controlDeletedSuccessToaster);
        });

        it('Verify deletion of static control created in previous test case', async function () {
            await utilities.clickOnElement(controlsPage.searchLink);
            await controlsPage.searchControlAndPressDeleteButton(data.newStaticFriendlyName);
            await utilities.clickOnElement(controlsPage.deleteModalYesButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.controlDeletedSuccessToaster);
        });

        it('Verify deletion of default control created in previous test case', async function () {
            await utilities.clickOnElement(controlsPage.searchLink);
            await controlsPage.searchControlAndPressDeleteButton(data.newDefaultFriendlyName);
            await utilities.clickOnElement(controlsPage.deleteModalYesButton);
            expect(await utilities.visibilityOfSuccessToaster()).toEqual(data.controlDeletedSuccessToaster);
        });

    });
});