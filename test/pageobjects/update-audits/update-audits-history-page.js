class UpdateAuditsHistoryPage {
  get historyTable() {
    return $("//div[@class = 'table-wrapper']");
  }
  get pagination() {
    return $("//ul[@class = 'pagination pagination-sm']");
  }
  get recordsOnHistory() {
    return $$("//div[@class = 'table-wrapper']//div//table//tbody//tr");
  }
  get pageSizeInput() {
    return $("//input[@placeholder=' ']");
  }
  get dateAndTimeColumnSortIcon() {
    return $("(//table//thead//tr//th[@id = 'updateAuditsHistoryTable'])[4]");
  }
  get pageNumberOption() {
    return $("//ul[@class = 'pagination pagination-sm']");
  }
  get pageNumberOptionLeftArrow() {
    return $("//ul//li[@class = 'page-item disabled']");
  }
  get historyTableColumnHeaders() {
    return $$("//table//thead//tr//th[@id = 'updateAuditsHistoryTable']");
  }
  get paginationText() {
    return $("//div[@class = 'page-size']//span[contains(text(), 'of')]");
  }
  get loader() {
    return $("//div[@class='loader']");
  }
  get updateIDColumn(){
    return $("(//th[@id='updateAuditsHistoryTable'])[1]");
  }
  get totalColumn() {
    return $("//div[text() = ' Total ']");
  }
  get paginationInlineError() {
    return $("(//div[@class='inline-error'])[1]")
  }
  get dateAndTimeColumn() {
    return $("//div[contains(text(),'Date and Time')]");
  }
  get dateTimeColumnData() {
    return $$("//div//table//tbody//td[4]");
  }
  get auditTypeColumn() {
    return $("//div[contains(text(),'Audit Type')]");
  }
  get auditTypeColumnData() {
    return $$("//div//table//tbody//td[5]");
  }
  get auditStatusColumn() {
    return $("//div[contains(text(),'Status')]")
  }
  get auditStatusColumnData() {
    return $$("//div//table//tbody//td[6]");
  }
  get updateIDLink() {
    return $("(//tbody//tr/td)[1]");
  }
  get updateIDFirstRow() {
    return 4("(//tbody//tr)[1]//td");
  }

  //Functions

  async paginationOnHistoryPage() {
    try {
      await this.pagination.waitForDisplayed();
      return await this.pagination.isDisplayed();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async getRecordsCountOnHistory() {
    try {
      let actualRecordsCount = await this.recordsOnHistory.length;
      return actualRecordsCount;
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async enterPageSizeCount(pageSizeToEnter) {
    try {
      await this.pageSizeInput.waitForClickable();
      const selectorValue = await this.pageSizeInput.getValue();
      const backSpaces = new Array(selectorValue.length).fill('Backspace');
      await this.pageSizeInput.addValue(backSpaces);
      await this.pageSizeInput.addValue(pageSizeToEnter);
      await browser.keys('Enter');
      await this.loader.waitForDisplayed({ reverse: true });
    } catch (error) {
      fail("Failed due to error" + error);
    }
  }
  async isElementSortedDescending(element) {
    try {
      let classes = await element.getAttribute('aria-sort');
      return classes;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isElementSortedAscending(element) {
    try {
      let classes = await element.getAttribute('class');
      return (await classes.includes("amount-up"));
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isColumnSortable(element) {
    try {
      let classes = await element.getAttribute('class');
      return (await classes.includes("amount-up"));
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isPageNumberOptionPresent() {
    try {
      await this.pageNumberOption.waitForDisplayed();
      return await this.pageNumberOption.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isPageNumberOptionLeftArrowDisabled(element) {
    try {
      let classes = await element.getAttribute('class');
      return (await classes.includes("disabled"));
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async isColumnSortable() {
    try {
      for (let i = 2; i <= 11; i++) {
        let columnHeader = $("(//table//thead//tr//th[@id = 'updateAuditsHistoryTable'])[" + i + "]");
        let classes = await columnHeader.getAttribute('class');
        if (await classes.includes("p-sortable-column")) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async getTotalRecordsListed(index) {
    let paginationTextValue = await this.paginationText.getText();
    let paginationTextsArray = [];
    paginationTextsArray = await paginationTextValue.split(" ");
    return paginationTextsArray[index];
  }
  async getText(element) {
    try {
      await element.waitForDisplayed();
      return element.getText();
    } catch (error) {
      fail("Failed due to exception" + error);
    }
  }
  async getMultiElementDataAndSortInDescending(multiElement) {
    try {
      let multiElementData = await multiElement.map(elem => elem.getText());
      let sortedData = (multiElementData).sort(data => data);
      return sortedData.toString();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
  async clickElement(element) {
    try {
      await element.waitForClickable();
      await element.click();
      await this.loader.waitForDisplayed({ reverse: true });
    } catch (error) {
      fail("Failed due to error" + error);
    }
  }
  async getFilteredDataFromArray(arrayData) {
    try {
      let filteredData = await arrayData.filter(data => data);
      return filteredData;
    } catch (error) {
      fail("Failed due to error" + error);
    }
  }
}

module.exports = new UpdateAuditsHistoryPage();