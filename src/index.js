const core = require('@actions/core');
const github = require('@actions/github');

const report_formatter = require('cucumber-html-reporter');

try {
  // Fetching inputs from GitHub actions core
  const report_theme = core.getInput('report-theme');
  const json_file_path = core.getInput('json-file-path');
  const report_suite_as_scenarios = core.getInput('report-suite-as-scenarios');
  const scenario_timestamp = core.getInput('scenario-timestamp');
  const report_metadata = core.getInput('report-metadata');
  const failed_summary_report = core.getInput('failed-summary-report');
  
  // Preparing the html output file path based on the json file
  const output_file_path = json_file_path.slice(0,-4)+'html';
  
  var html_report_options = {
        theme: report_theme,
        jsonFile: json_file_path,
        output: output_file_path,
        reportSuiteAsScenarios: report_suite_as_scenarios,
        scenarioTimestamp: scenario_timestamp,
        launchReport: false,
        metadata: JSON.parse(report_metadata),
        failedSummaryReport: failed_summary_report,
  }  
  console.log(html_report_options);
  report_formatter.generate(html_report_options);
} 

catch (error) {
  console.log("Something went wrong, check the error log below:");
  core.setFailed(error.message);
}