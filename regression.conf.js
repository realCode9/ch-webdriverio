import { config } from "./wdio.shared.conf.js";
const allure = require("@wdio/allure-reporter").default;
exports.config = {
    ...config,
    ...{
        // specs: ["./test/specs/**/*.js"],
        // specs: ["./test/specs/update-audits/update-audits-history-spec.js"],
        // specs: ["./test/specs/administration/application-settings/status-mappings-spec.js"],
        // specs: ["./test/specs/administration/application-settings/status-categories-spec.js"],
        // specs: ["./test/specs/administration/application-settings/status-voting-spec.js"],
        // specs: ["./test/specs/administration/inventory-management/configurations-spec.js"],  
        // specs: ["./test/specs/invoicing/configuration/invoicing-settings-spec.js"], 
        // specs: ["./test/specs/invoicing/configuration/sn-ar-audit-types-mapping-spec.js"],
        specs: ["./test/specs/administration/inventory-management/assignments/manual-assignments-spec.js"],
        // specs: ["./test/specs/administration/inventory-management/assignments/inventory-assignments-rules-spec.js"],
        // specs: ["./test/specs/administration/inventory-management/assignments/inventory-assignments-teams-spec.js"],



        baseUrl: "https://regression.pareo.io/",



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