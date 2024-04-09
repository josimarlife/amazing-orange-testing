const report = require("multiple-cucumber-html-reporter");
const path = require("path");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  //reportPath: "./reports/cucumber-htmlreport.html",
  reportPath: path.join(__dirname, "reports", "cucumber-htmlreport.html"),
  metadata: {
    browser: {
      name: "chrome",
      version: "121",
    },
    device: "Local test machine",
    platform: {
      name: "osx",
      version: "13.2.1",
    },
  },
});