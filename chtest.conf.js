import { config } from "./wdio.shared.conf.js";
const allure = require("@wdio/allure-reporter").default;
exports.config = {
  ...config,
  ...{
    specs: ["./test/specs/**/*.js"],

    baseUrl: "https://clarishealthtest.pareo.io/",

    reporters: [
      "spec",
      [
        "allure",
        {
          outputDir: "report/allure-results",
        },
      ],
    ],
    beforeSuite: function (suite) {
      global.allure = allure;
      allure.addFeature(suite.name);
    },
    beforeTest: function (test, context) {
      browser.maximizeWindow();
      allure.addEnvironment("BROWSER", browser.capabilities.browserName);
      allure.addEnvironment("URL", browser.config.baseUrl);
      allure.addEnvironment(
        "BROWSER_VERSION",
        browser.capabilities.browserName
      );
      allure.addEnvironment("PLATFORM", "CHTest");
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
      if (error) {
        browser.takeScreenshot();
      }
    },
  },
};
