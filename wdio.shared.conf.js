import path from "path";
import commonFunction from "./utilities/common-utilities";
global.downloadDir = path.join(process.cwd(), "tempDownloads");

exports.config = {
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 2,



    logLevel: "trace",
    outputDir: path.resolve(__dirname, "logs"),



    bail: 0,



    waitforTimeout: 10000,



    connectionRetryTimeout: 120000,



    connectionRetryCount: 3,



    services: [
        [
            "selenium-standalone",
            { drivers: { chrome: true, chromiumedge: "latest" } },
        ],
    ],
    ...(process.env.CAP === "parallel"
        ? {
            capabilities: [
                {
                    browserName: "chrome",
                    "goog:chromeOptions": {
                        prefs: {
                            "download.default_directory": downloadDir,
                        },
                    },
                },
                {
                    browserName: "MicrosoftEdge",
                },
            ],
        }
        : {
            capabilities: [
                {
                    browserName: process.env.BROWSER,
                    ...(process.env.BROWSER === "chrome"
                        ? {
                            "goog:chromeOptions": {
                                prefs: {
                                    "download.default_directory": downloadDir,
                                },
                                args: ["--no-sandbox", "--test-type=browser"],
                            },
                        }
                        : process.env.BROWSER === "MicrosoftEdge" && {
                            "ms:edgeOptions": {
                                prefs: {
                                    "download.default_directory": downloadDir,
                                },
                            },
                        }),
                },
            ],
        }),
    framework: "jasmine",
    beforeSuite: function (suite) {
        browser.maximizeWindow();
        global.allure = allure;
        allure.addFeature(suite.name);
    },



    onComplete: async function () {
        await commonFunction.rmdir(downloadDir);
    },



    jasmineOpts: {
        // Jasmine default timeout
        defaultTimeoutInterval: 60000,
    },
};