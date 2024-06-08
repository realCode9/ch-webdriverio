import fs from "fs";
import path from "path";
import membersPage from "../test/pageobjects/relationship-management/members-page";
module.exports = {
  async loginFunction(username, password, element1, element2, element3) {
    try {
      await element1.setValue(username);
      await element2.setValue(password);
      await element3.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async selectDropDownOptions(dropDownValue) {
    try {
      await $(
        "//div[@role='option']//span[text()='" + dropDownValue + "']"
      ).waitForClickable();
      await $(
        "//div[@role='option']//span[text()='" + dropDownValue + "']"
      ).click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async waitForToasterMessageToDisappear() {
    try {
      await $("#toast-container").waitForDisplayed({
        reverse: true,
      });
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async randomNumberGenerator(min, max) {
    try {
      return Math.floor(Math.random() * (max - min) + min);
    } catch (error) {
      fail("Error occurred:" + error);
    }
  },
  async uploadFile(filePath, uploadElement) {
    try {
      const remoteFilePath = await browser.uploadFile(filePath);

      await uploadElement.setValue(remoteFilePath);
    } catch (error) {
      fail("Error occurred:" + error);
    }
  },
  async checkIfFileExists(downloadPath) {
    try {
      if (!fs.existsSync(downloadPath)) {
        fs.mkdirSync(downloadPath);
      } else {
        fs.existsSync(downloadPath)
      }
    } catch (error) {
      fail("Error occurred:" + error);
    }
  },
  async rmdir(dir) {
    try {
      let list = fs.readdirSync(dir);
      for (let i = 0; i < list.length; i++) {
        let filename = path.join(dir, list[i]);
        let stat = fs.statSync(filename);

        if (filename == "." || filename == "..") {
          // pass these files
        } else if (stat.isDirectory()) {
          // rmdir recursively
          rmdir(filename);
        } else {
          // rm fiilename
          fs.unlinkSync(filename);
        }
      }
      fs.rmdirSync(dir);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async getCurrentDate() {
    try {
      let currentDate = new Date();
      let day = ("0" + currentDate.getDate()).slice(-2);
      let month = ("0" + currentDate.getMonth()).slice(-2) + 1; //January is 0
      let year = currentDate.getFullYear();
      return month + '-' + day + '-' + year;
    } catch (error) {
      fail("Error occurred:" + error);
    }
  },
  async checkLoaderIsNotDisplayed() {
    try {
      return await membersPage.loader.waitForDisplayed({
        reverse: true
      });
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async getMultiElementTextOneByOne(element) {
    try {
      let elementData = await element.map(elem => elem.getText());
      let elementValue = (elementData).filter(data => data);
      return elementValue.toString();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async isElementDisplayed(element) {
    try {
      await element.waitForDisplayed();
      return await element.isDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async isElementEnabled(element) {
    try {
      await element.waitForDisplayed();
      return await element.isEnabled();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async isElementClickable(element) {
    try {
      let classes = await element.getAttribute('class');
      return !(await classes.includes("disabled"));

    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async getElementText(element) {
    try {
      await element.waitForDisplayed();
      return await element.getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async clickOnElement(element) {
    try {
      await element.waitForClickable();
      await element.click();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async selectTableCheckboxAcrossPagination(columnPositionSearchText, columnPosition) {
    try {
      let count = 0;
      await $(`//ngb-pagination`).scrollIntoView();
      const auditsPagination = await $$("//ngb-pagination//ul//li");
      var auditsPaginationCount = await auditsPagination.length;
      const auditsPageCount = await $("//app-input-box//input").getValue();
      selectBox: while (count != columnPositionSearchText.length) {
        for (let i = 2; i < auditsPaginationCount; i++) {
          const activePageNum = await $(`//ul//li[@class='page-item active ng-star-inserted']//a`).getText();
          if (activePageNum != (i - 1)) {
            await $(`//ngb-pagination//ul//li[${i}]`).click();
          }
          for (let j = 1; j <= auditsPageCount; j++) {
            await $(`(//tr[${j}]//td[${columnPosition}])[1]`).scrollIntoView();
            const record = $(`//tbody/tr[${j}]//td[${columnPosition}]//div`);
            await record.waitForDisplayed();
            const recordText = await record.getText();
            if (recordText == columnPositionSearchText[count]) {
              count++;
              const checkbox = $(`//tbody/tr[${j}]//td[1]//div[@role='checkbox']`);
              await checkbox.click();
            }
          }
          await $(`//ngb-pagination`).scrollIntoView();
          const nextClick = await $(`//ngb-pagination//ul//li[@class='page-item ng-star-inserted']/a[@aria-label='Next']`);
          let isEnabled = nextClick.waitForDisplayed();
          if (isEnabled == true) {
            await nextClick.click();
            await checkLoaderIsNotDisplayed();
            var auditsPaginationCount = await auditsPagination.length;
          } else {
            break selectBox;
          }
        }
      }
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  getCurrentDatewithTime() {
    try {
      let date = new Date();
      const timeStamp = `${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}${date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()}${date.getFullYear()}${date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()}${date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()}`;
      return timeStamp;
    } catch (error) {
      fail("Failed due to exception :" + error);
    }
  },
  async isFieldDropdown(element) {
    try {
      let classes = await element.getAttribute('class');
      return classes.includes("ng-select-container");
    } catch (error) {
      fail("Failed due to exception " + error)
    }
  },
  async getMultiElementDataAndSort(multiElement) {
    try {
      let multiElementData = await multiElement.map(elem => elem.getText());
      let sortedData = (multiElementData).sort(data => data);
      return sortedData.toString();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async waitUntilLoaderFinishedLoading(loader) {
    try {
      return await loader.waitForDisplayed({ reverse: true });
    } catch (error) {
      fail("Failed due to exception " + error)
    }
  },
  async getPresentDate() {
    try {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return (today = mm + "/" + dd + "/" + yyyy);
    } catch (error) {
      fail("Error occurred:" + error);
    }
  },
  async verifyPagination(rowCount) {
    try {
      const nextPage = await $("//a[@aria-label='Next']");
      let nextPagePresence = nextPage.isEnabled();
      if (nextPagePresence = true) {
        await nextPage.click();
        let actualRowCount = await rowCount.length;
        return actualRowCount;
      }
      else {
        let actualRowCount = await rowCount.length;
        return actualRowCount;
      }
    }
    catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async enterValueInElement(element, value) {
    try {
      await element.waitForDisplayed();
      await element.setValue(value);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async enterValueInPageSize(element, value) {
    try {
      await element.waitForClickable();
      const selectorValue = await element.getValue();
      const backSpaces = new Array(selectorValue.length).fill('Backspace');
      await element.addValue(backSpaces);
      await element.addValue(value);
      await browser.keys('Enter');
    }
    catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async clickOnFilterIcon(filterElements, filterName, icon) {
    try {
      let filterElementCount = await filterElements.length;
      for (let i = 0; i < filterElementCount; i++) {
        if (await filterElements[i].getText() == filterName) {
          await filterElements[i].moveTo();
          await icon[i].click();
        }
      }
    }
    catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async getTodayDate() {
    try {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let year = today.getFullYear();
      let yy = year.toString().substring(2, 4);
      return (today = mm + "/" + dd + "/" + yy);
    } catch (error) {
      fail("Error occurred:" + error);
    }
  },
  async getElementsCount(elements) {
    try {
      return await elements.length;
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async elementNotDisplayed(element) {
    try {
      return await element.waitForDisplayed({ reverse: true });
    } catch (error) {
      fail("Failed due to exception " + error)
    }
  },
  async checkElementIsClickable(element) {
    try {
      return await element.isClickable();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async scrollToElement(element) {
    try {
      await element.scrollIntoView();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async getElementAttributeValue(element, value) {
    try {
      return await element.getAttribute(value);
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async isElementExisting(element) {
    try {
      return await element.isExisting();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async clearInputField(element) {
    try {
      await element.clearValue();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async waitForElementDisplayed(element) {
    try {
      await element.waitForDisplayed();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async waitForElementClickable(element) {
    try {
      await element.waitForClickable({ timeout: 5000 });
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async selectValueInColumnFilter(columnFilterOptions, columnFilterCheckBox, filterValue) {
    try {
      let columnFilterOptionsCount = await columnFilterOptions.length;
      for (let i = 0; i < columnFilterOptionsCount; i++) {
        if (await columnFilterOptions[i].getText() == filterValue) {
          await columnFilterCheckBox[i].click();
        }
      }
    }
    catch (error) {
      fail("Failed due to exception " + error);
    }
  },
  async visibilityOfSuccessToaster() {
    try {
      await $("#toast-container").waitForDisplayed(); ``
      return await $("#toast-container").getText();
    } catch (error) {
      fail("Failed due to exception " + error);
    }
  }
};