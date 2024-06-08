import loginPage from "../../../../pageobjects/login/login-page";
import menuoptionsPage from "../../../../pageobjects/menuoptions-page";
import planPage from "../../../../pageobjects/invoicing/configuration/plans/plans-page";
import data from "../../../../../resources/invoicing/configuration/invoicing-configuration-plans-test-data.json";
import databaseConnection from "../../../../../utilities/database-connection";

describe("Testing Invoicing > Configurations > Plans", ()=>{
    beforeAll(async function () {
        await loginPage.open();
        await loginPage.login();
      });

  it('Validate navigation to plans', async function () {
    await menuoptionsPage.clickOnInvoicing();
    await menuoptionsPage.clickOnInvoicingConfiguration();
    await menuoptionsPage.clickOnPlans();
    expect(await planPage.getElementText(planPage.headerText)).toEqual(data.header);
  });

  describe("Verify search panel", function () {
          
    it("Verify fields and buttons on search panel", async function () {
      expect(await planPage.getElementText(planPage.planIdLabel)).toEqual(data.planIdLabel);
      expect(await planPage.getElementText(planPage.planNameLabel)).toEqual(data.planNameLabel);
      expect(await planPage.getElementText(planPage.taxIdLabel)).toEqual(data.taxIdLabel);
      expect(await planPage.elementDisplayed(planPage.searchButton)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.clearButton)).toBe(true);  
    });

    it("Enter search criteria and verify search results", async function () {
      await planPage.enterPlanIDForSearch(data.planID);
      await planPage.clickElement(planPage.searchButton);
      expect(await planPage.getSearchResult(data.planID)).toEqual(data.planID);
      await planPage.clickElement(planPage.clearButton);
    })

  });

  describe("Verify Addition of new plan", function () {

    it("Verify Add Plan button text and presence", async function () {
      expect(await planPage.getElementText(planPage.addPlanButton)).toEqual(data.addPlanButtonText);
    });

    it("Verify click on Add Plan button", async function () {
      await planPage.clickElement(planPage.addPlanButton);
      expect(await planPage.getElementText(planPage.planDetailHeader)).toEqual(data.planDetailHeader);
    });

    it("Verify fields and buttons on plan details page", async function () {
      expect(await planPage.getElementText(planPage.planIdLabel)).toEqual(data.planDetailPlanIdLabel);
      expect(await planPage.getElementText(planPage.planNameLabel)).toEqual(data.planDetailPlanNameLabel);
      expect(await planPage.getElementText(planPage.taxIdLabel)).toEqual(data.taxIdLabel);
      expect(await planPage.getElementText(planPage.planDetailCheckBoxInstructionText)).toEqual(data.planDetailCheckBoxInstructionText);
      expect(await planPage.elementDisplayed(planPage.planDetailBackButton)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.planDetailSaveButton)).toBe(true); 
      expect(await planPage.elementDisplayed(planPage.planDetailCheckBox)).toBe(true);
    });

    it("Verify errors when fields are left blank", async function () {
      await planPage.clickElement(planPage.planDetailSaveButton);
      expect(await planPage.getElementText(planPage.planDetailBlankErrorPlanId)).toEqual(data.planDetailBlankErrorPlanId);
      expect(await planPage.getElementText(planPage.planDetailBlankErrorPlanName)).toEqual(data.planDetailBlankErrorPlanName);
    });

    it("Enter data in fields, click save button and verify success toaster for new plan", async function () {
      await planPage.enterNewPlanId(data.newPlanId);
      await planPage.enterNewPlanName(data.newPlanName);
      await planPage.enterNewTaxId(data.newTaxId);
      await planPage.clickElement(planPage.planDetailSaveButton);
      expect(await planPage.visibilityOfSuccessToaster()).toBe(data.savePlanSuccessNotificationMessage);
      await planPage.clickElement(planPage.successToaster);
    });

  });

  describe("Verify Contacts tab under Plan Configuration screen for new plan", function () {
        
    it("Verify header, instruction text and tabs on configuration section", async function () {
      expect(await planPage.getElementText(planPage.newPlanConfigurationHeader)).toEqual(data.newPlanConfigurationHeader);
      expect(await planPage.getElementText(planPage.newPlanConfigurationInstructionText)).toEqual(data.newPlanConfigurationInstructionText);  
      expect(await planPage.getElementText(planPage.contactTab)).toEqual(data.contatTabText);
      expect(await planPage.getElementText(planPage.filesTab)).toEqual(data.fileTabText);
      await planPage.clickElement(planPage.filesTab);
      await planPage.clickElement(planPage.contactTab); 
    });

    it("Verify fields and buttons on Contact Tab", async function () {
      expect(await planPage.getElementText(planPage.nameDepartmentLabel)).toEqual(data.nameDepartmentLabel);
      expect(await planPage.getElementText(planPage.phoneNumberLabel)).toEqual(data.phoneNumberLabel);
      expect(await planPage.getElementText(planPage.emailTextFieldLabel)).toEqual(data.emailLabel);
      expect(await planPage.getElementText(planPage.addressLine1Label)).toEqual(data.addressLine1Label);
      expect(await planPage.getElementText(planPage.addressLine2Label)).toEqual(data.addressLine2Label);
      expect(await planPage.getElementText(planPage.cityLabel)).toEqual(data.cityLabel);
      expect(await planPage.getElementText(planPage.zipLabel)).toEqual(data.zipLabel);
      expect(await planPage.getElementText(planPage.stateLabel)).toEqual(data.stateLabel);
      expect(await planPage.getElementText(planPage.defaultContactText)).toEqual(data.defaultContactText);
      expect(await planPage.getElementText(planPage.preferredDeliveryModeText)).toEqual(data.preferredDeliveryModeText);
      expect(await planPage.elementDisplayed(planPage.yesRadioButton)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.noRadioButton)).toBe(true); 
      expect(await planPage.elementDisplayed(planPage.emailRadioButton)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.mailRadioButton)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.contactsAddButton)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.contactsClearButton)).toBe(true);
    });

    it("Enter data to add new contact and verify success toaster on adding a contact", async function () {
      await planPage.enterNameDepartment(data.nameDepartment);
      await planPage.enterPhoneNumber(data.phoneNumber);
      await planPage.enterEmail(data.email);
      await planPage.enterAddress1(data.address1);
      await planPage.enterAddress2(data.address2);
      await planPage.enterCity(data.city);
      await planPage.clickElement(planPage.noRadioButton);
      await planPage.clickElement(planPage.emailRadioButton);
      await planPage.clickElement(planPage.contactsAddButton);
      expect(await planPage.visibilityOfSuccessToaster()).toBe(data.saveContactSuccessNotificationMessage);
      await planPage.clickElement(planPage.successToaster);
    });

    describe("Verify contact deletion", function () {

     it("Click on delete icon and verify confirmation pop up is displayed", async function () {
       await planPage.clickElement(planPage.deleteContactIcon);
       expect(await planPage.deleteContactConfirmationPopupDisplayed()).toBe(true);
     });

     it("Verify confirmation header and message", async function () {
       expect(await planPage.getElementText(planPage.deleteContactConfirmationPopupHeader)).toEqual(data.deleteContactConfirmationHeader);
       expect(await planPage.getElementText(planPage.deleteContactConfirmationPopupMessage)).toEqual(data.deleteContactConfirmationMessage);
     });

     it("Verify Cancel button", async function () {
       await planPage.clickElement(planPage.deleteContactConfirmationPopupCancelButton);
       expect(await planPage.deleteContactConfirmationPopupDisplayed()).toBe(true);
     });

     it("Verify Yes button", async function () {
       await planPage.clickElement(planPage.deleteContactIcon);
       await planPage.clickElement(planPage.deleteContactConfirmationPopupYesButton);
       expect(await planPage.visibilityOfSuccessToaster()).toBe(data.deleteContactSuccessNotificationMessage);
       await planPage.clickElement(planPage.successToaster);
     });

    });

  });

  describe("Verify Files tab under Plan Configuration screen for new plan", function () {

    it("Verify browse file functionality", async function () {
      await planPage.clickElement(planPage.filesTab);
      await planPage.browseFile();
      expect(await planPage.elementDisplayed(planPage.selectTagModalHeader)).toBe(true);
    });

    it("Verify select tags and upload files modal UI", async function () {
      expect(await planPage.getElementText(planPage.selectTagModalHeader)).toEqual(data.selectTagModalHeader);
      expect(await planPage.elementDisplayed(planPage.selectTagDropDown)).toBe(true);
      expect(await planPage.getElementText(planPage.selectTagUploadButton)).toEqual(data.selectTagUploadButton);
      expect(await planPage.getElementText(planPage.selectTagCancelButton)).toEqual(data.selectTagCancelButton);
    });

    it("Verify select tag and upload functionality", async function () {
      await planPage.selectTagDropDownOptionClick();
      await planPage.clickElement(planPage.selectTagModalHeader);
      await planPage.clickElement(planPage.selectTagUploadButton);
      await planPage.filetabSaveButtonClick();
      expect(await planPage.visibilityOfSuccessToaster()).toEqual(data.fileUploadSuccessMessage);
      await planPage.clickElement(planPage.successToaster);
    });

    it("Verify buttons and columns post document upload", async function () {
      expect(await planPage.getElementText(planPage.uploadedFiles)).toEqual(data.uploadedFilesText);
      expect(await planPage.elementDisplayed(planPage.uploadedFilesDeleteIcon)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.uploadedFilesDownloadIcon)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.fileNameColumn)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.fileCreatedOnColumn)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.fileTagsColumn)).toBe(true);
    });

    describe("Verify file deletion on Files Tab", function () {

      it("Click on delete icon and verify confirmation header and message", async function () {
        await planPage.clickElement(planPage.uploadedFilesDeleteIcon);
        expect(await planPage.getElementText(planPage.uploadedFileDeleteConfirmationHeader)).toEqual(data.uploadFileDeleteConfirmationHeader);
        expect(await planPage.getElementText(planPage.uploadedFileDeleteConfirmationMessage)).toEqual(data.fileDeleteConfirmationMessage);
      });

      it("Verify Cancel button", async function () {
        await planPage.clickElement(planPage.uploadedFileDeleteConfirmationCancelButton);
        expect(await planPage.uploadedFileDeleteConfirmationDisplayed()).toBe(true);
      });

      it("Verify Yes button", async function () {
        await planPage.clickElement(planPage.uploadedFilesDeleteIcon);
        await planPage.clickElement(planPage.uploadedFileDeleteConfirmationYesButton);
        expect(await planPage.visibilityOfSuccessToaster()).toBe(data.fileDeleteSuccessMessage);
        await planPage.clickElement(planPage.successToaster);
      });

    });

  });

  describe("Verify confirmation pop up when creation of new plan is in progress and user clicks back button ", function () {
        
    it("Verify buttons and message on confirmation pop up", async function () { 
      await planPage.clickElement(planPage.planDetailBackButton);
      await planPage.clickElement(planPage.addPlanButton);
      await planPage.enterNewPlanId(data.planID);
      await planPage.clickElement(planPage.planDetailBackButton);
      expect(await planPage.planDetailConfirmationPopupIsDisplayed()).toBe(true);
      expect(await planPage.getElementText(planPage.planDetailConfirmationPopupHeader)).toEqual(data.planDetailConfirmationPopupHeader);
      expect(await planPage.getElementText(planPage.planDetailConfirmationPopupContent)).toEqual(data.planDetailConfirmationPopupContent);
      expect(await planPage.elementDisplayed(planPage.planDetailConfirmationPopupCancelButton)).toBe(true); 
      expect(await planPage.elementDisplayed(planPage.planDetailConfirmationPopupProceedButton)).toBe(true);
    });

    it("Verify Cancel button click", async function () {
      await planPage.clickElement(planPage.planDetailConfirmationPopupCancelButton);
      expect(await planPage.planDetailConfirmationPopupIsDisplayed()).toBe(true);
    });

    it("Verify Proceed button click", async function () {
      await planPage.clickElement(planPage.planDetailBackButton);
      await planPage.clickElement(planPage.planDetailConfirmationPopupProceedButton);
      expect(await planPage.getElementText(planPage.headerText)).toEqual(data.header);
    });

  }); 

  describe("Verify listing page of plans configuration", function () {
        
    it("Verify icons and dropdowns available on listing page", async function () {
      expect(await planPage.elementDisplayed(planPage.listDropdown)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.archiveIcon)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.editIcon)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.recordCount)).toBe(true);
    });

    it("Click archive and verify confirmation pop up", async function () {
      await planPage.enterPlanIDForSearch(data.newPlanId);
      await planPage.clickElement(planPage.searchButton);
      await planPage.clickElement(planPage.archiveIcon);
      expect(await planPage.elementDisplayed(planPage.archivePopup)).toBe(true);
      expect(await planPage.getElementText(planPage.archivePopUpMessage)).toEqual((data.archiveModalMessage1)+(data.newPlanName)+(data.archiveModalMessage2));
      expect(await planPage.elementDisplayed(planPage.archiveButtonOnModal)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.cancelButtonOnModal)).toBe(true);
    });

    it("Verify success toaster after plan is archived", async function () {
      await planPage.clickElement(planPage.archiveButtonOnModal);
      expect(await planPage.visibilityOfSuccessToaster()).toBe(data.planArchiveSuccessMessage);
      await planPage.clickElement(planPage.successToaster);
    });

    it("Verify navigation to All archived plans", async function () {
      await planPage.clickElement(planPage.listDropdown);
      await  planPage.clickElement(planPage.allArchivedPlansOption);
      expect(await planPage.elementDisplayed(planPage.listDropdown)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.unarchiveIcon)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.recordCount)).toBe(true);
    });

    it("Click unarchive and verify confirmation pop up", async function () {
      await planPage.clickElement(planPage.unarchiveIcon);
      expect(await planPage.elementDisplayed(planPage.archivePopup)).toBe(true);
      expect(await planPage.getElementText(planPage.archivePopUpMessage)).toEqual((data.unarchiveModalMessage1)+(data.newPlanName)+(data.archiveModalMessage2));
      expect(await planPage.elementDisplayed(planPage.unarchiveButtonOnModal)).toBe(true);
      expect(await planPage.elementDisplayed(planPage.cancelButtonOnModal)).toBe(true);
    });

    it("Verify success toaster after plan is unarchived", async function () {
      await planPage.clickElement(planPage.unarchiveButtonOnModal);
      expect(await planPage.visibilityOfSuccessToaster()).toBe(data.planUnarchiveSuccessMessage);
      await planPage.clickElement(planPage.successToaster);
      await planPage.clickElement(planPage.listDropdown);
      await planPage.clickElement(planPage.allActivePlansOption);
      await planPage.clickElement(planPage.clearButton);
    });
  });

  describe("Delete plan from database", function(){

    it("Verify plan is deleted", async function () {
      await databaseConnection();
      await planPage.deletePlanCreated(data.newPlanName);
      await planPage.enterPlanIDForSearch(data.newPlanId);
      await planPage.clickElement(planPage.searchButton);
      expect(await planPage.getElementText(planPage.noActivePlansFound)).toEqual(data.noActivePlansFoundText);
    });
  });
});