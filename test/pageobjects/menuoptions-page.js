import Page from "../pageobjects/page";

class MenuOptionsPage extends Page {
  
  get userProfileDropdown() {
    return $("//div[@id='profileDropdown']//*[name()='svg']");
  }
  get userNotification() {
    return $("//span[normalize-space()='Notifications']");
  }
  get administration() {
    return $("//div[@id='icon-administration-Administration']");
  }
  get security(){
    return $("//div[@id='Security-expandable-subElement']");
  }
  get user(){
    return $("//div[@id='Users-app-user-list']");
  }
  get workQueues() {
    return $("//div[@id='Work-Queues-expandable-subElement']");
  }
  get configuration() {
    return $("//div[@id='Configuration-app-work-queue-configuration-list']");
  }
  get users() {
    return $("(//span[text()='Users'])[3]");
  }
  get roles() {
    return $("(//span[@class='title'][text()='Roles'])[1]");
  }
  get pareoClinical() {
    return $("//div[@id='icon-pareo-clinical-Pareo-Clinical']");
  }
  get claimSelectionManagement() {
    return $("//div[@id='Claim-Selection-Management-app-pareo-clinical-claim-selection-management-query-list']");
  }
  get medicalRecordRequestManagement() {
    return $("//div[@id='Medical-Record-Request-Management-app-pareo-clinical-mrr-selection-management']");
  }
  get invoicing() {
    return $(
      "(//app-navigation-element[@icon='icon-invoicing']//div[1]//div[3]//div[1]//span[contains(text(),'Invoicing')])[1]"
    );
  }
  get specialNotationsAndAdjustmentReasonCodesMapping() {
    return $("//div[@id='Special-Notations-and-Adjustment-Reason-Mapping-app-codes-mapping-screen']//div[1]//span[1]");
  }
  get bluesPlans() {
    return $(
      "(//app-navigation-element[@icon='icon-invoicing']//div[1]//div[3]//div[1]//span[contains(text(),'Blues Plans')])[3]"
    );
  }
  get outgoing() {
    return $(
      "(//div[@id='Outgoing-app-invoicing-outgoing']//div//span[contains(text(),'Outgoing')])[1]"
    );
  }
  get loggedInUser() {
    return $("(//div[@class='user-info']//span[1])[1]");
  }
  get FWA() {
    return $(
      "//div[@class='menu-expandable-true menu-close']//span[text()='Fraud, Waste and Abuse']"
    );
  }
  get cases() {
    return $("//app-navigation-element[@id='cases']//div//div[1]//*[text()='Cases']");
  }
  get leads() {
    return $("(//span[@class='title'][normalize-space()='Leads'])[1]");
  }
  get globalSearch() {
    return $("//button[@id='search-panel-button']");
  }
  get varianceManagement() {
    return $("//div[@id='icon-varianceManagement-app-variance-management']")
  }
  get applicationSettings(){
    return $("//div[@id='Application-Settings-expandable-subElement']");
  }
  get statusMappings(){
    return $("//div[@id='Status-Mappings-app-status-mappings']");
  }
  get statusVoting(){
    return $("//div[@id='Status-Voting-app-admin-status-voting']");
  }
  get invoicingConfiguration() {
    return $("(//app-navigation-element[@icon='icon-invoicing']//div[1]//div[3]//div[1]//span[contains(text(),'Configuration')])[3]");
  }
  get plans() {
    return $("(//div[@id='Plans-app-plans']//span[contains(text(),'Plans')])[1]");
  }
  get invoicingSettings() {
    return $("#Invoicing-Settings-app-invoicing-settings");
  }
  get relationshipManagement(){
    return $("//*[@id='icon-relationship-manager-Relationship-Management']/div[3]/div[1]/span[1]")
  }
  get providers(){
    return $("//*[@id='Providers-app-relationship-management-providers']/div[1]")
  }
  get updateAudits() {
    return $("(//span[text() ='Update Audits'])[1]");
  }
  get members(){
    return $("//*[@id='Members-app-relationship-management-members']/div[1]")
  }
  get fileUpload() {
    return $("(//span[@class='title'][normalize-space()='File Upload'])[1]");
  }
  get clocks() {
    return $("//div[@id='Clocks-app-admin-clocks']");
  }
  get clocksSetting() {
    return $("//div[@id='Clocks-Setting-app-admin-clocks-setting']");
  }
  get recoveryPosting(){
    return $("//div[@id='icon-recovery-posting-app-recovery-posting-check-list']");
  }
  get extracts(){
    return $("//div[@id='icon-extracts-app-extracts']");
  }
  get inventoryManagement() {
    return $("(//span[@class='title expandable-not-minified-title'][normalize-space()='Inventory Management'])[1]");
  }
  get assignments() {
    return $("(//span[@class='title'][normalize-space()='Assignments'])[1]");
  }
  get teams() {
    return $("(//span[@class='title'][normalize-space()='Teams'])[1]");
  }
  get logoutLink() {
    return $("#logout");
  }
  get loginForm() {
    return $("//div[@class='login-form']");
  }
  get assignment() {
    return $("//div[@id='icon-assignments-Assignment']//div//div//span[contains(text(),'Assignment')]");
  }
  get myInventory() {
    return $("//div[@id='icon-assignments-Assignment']//div//div//app-navigation-element");
  }
  get dataSetup() {
    return $("//div[@id='Data-Setup-expandable-subElement']");
  }
  get codeLists() {
    return $("//div[@id='Code-Lists-app-codelists-list']");
  }
  get configurations() {
    return $("(//span[contains(text(),'Configurations')])[1]");
  }
  get statusCategories() {
    return $("(//span[contains(text(),'Status Categories')])[1]");
  }
  get noteTemplates() {
    return $("#Note-Templates-app-admin-note-templates");
  }
  get menuArrow() {
    return $("#minify");
  }
  get letters() {
    return $("//app-navigation-element[@text='Letters']//span[@class='title expandable-not-minified-title']");
  }
  get templates() {
    return $("//app-navigation-element[@text='Templates']//div[@id='Templates-app-admin-letter-creation-templates']");
  }
  get controls(){
    return $("//app-navigation-element[@text='Controls']//div[@id='Controls-app-admin-letter-creation-controls']")
  }
  get rates() {
    return $("#Rates-app-invoicing-rates");
  }
  
  // functions for all menuoptions
  
  async clickOnNotifications() {
    try {
      await this.userNotification.waitForClickable();
      await this.userNotification.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnUserProfileDropDown() {
    try {
      await this.userProfileDropdown.waitForClickable();
      await this.userProfileDropdown.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnVarianceManagement() {
    try{
      return await this.varianceManagement.click();
    }catch (error){
        fail("Failed due to exception " + error);
      }
    }
   async getLoggedInUserText() {
    try {
      return await this.loggedInUser.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnAdmin() {
    try {
      await this.administration.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnSecurity() {
    try {
      await this.security.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnUsers() {
    try {
      await this.user.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnApplicationSettings() {
    try {
      await this.applicationSettings.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnStatusMappings() {
    try {
      await this.statusMappings.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnStatusVoting() {
    try {
      await this.statusVoting.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnWorkQueueUser() {
    try {
      await this.users.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnWorkQueueConfigurations() {
    try {
      await this.configuration.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnWorkQueue() {
    try {
      await this.workQueues.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnInvoicing() {
    try {
      await this.invoicing.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnFWA() {
    try {
      await this.FWA.waitForClickable();
      await this.FWA.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnBluesPlans() {
    try {
      await this.bluesPlans.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnLeads() {
    try {
      await this.leads.waitForClickable();
      await this.leads.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnOutgoing() {
    try {
      await this.outgoing.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnGlobalSearch() {
    try {
      await this.globalSearch.waitForDisplayed({ timeout: 30000 });
      await this.globalSearch.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnInvoicingConfiguration() {
    try {
      await this.invoicingConfiguration.waitForClickable();
      await this.invoicingConfiguration.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnPlans() {
    try {
      await this.plans.waitForClickable();
      await this.plans.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnCRM() {
    try {
      await this.relationshipManagement.waitForClickable();
      await this.relationshipManagement.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnProviders() {
    try {
      await this.providers.waitForClickable();
      await this.providers.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickUpdateAudits() {
    try{
      await this.updateAudits.waitForDisplayed();
      await this.updateAudits.click();
    }catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async clickOnMembers() {
    try {
      await this.members.waitForClickable();
      await this.members.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickOnUpdateAudits() {
    try{
      await this.updateAudits.waitForDisplayed();
      await this.updateAudits.click();
    }catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async clickOnFileUpload() {
    try {
      await this.fileUpload.waitForDisplayed();
      await this.fileUpload.click();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
}
module.exports = new MenuOptionsPage();
