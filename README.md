# Cucumber HTML report generator
This GitHub action is a wrapper around the [cucumber-html-reporter v7.1.1](https://www.npmjs.com/package/cucumber-html-reporter/v/7.1.1) npm package.\
It takes a cucumber report in `json` format as an input and generates a `html` report for easy report analysis. \
The generated HTML report is located in the same dir as of the json report. The filename also remains the same except for the file extension that changes from `.json` to `.html` Refer to the [example usage below](#example-usage):


## Usage:
Recommended to use it in combination with [`actions/upload-artifact@v4`](https://github.com/marketplace/actions/upload-a-build-artifact?version=v4.3.1)
```
- uses: mt185252/cucumber-html-report-generator@v1
  with:
    # Themes supported by the npm package. Available HTML themes: ['bootstrap', 'hierarchy', 'foundation', 'simple']
    # Default: 'hierarchy'
    report-theme: ''

    # Full path to the cucumber-report json file.
    json-file-path: ''

    # Metadata to be included in the report
    # Default: '{}'
    report-metadata: ''

- uses: actions/upload-artifact@v4
  with:
    # Name to be used for the zip file being uploaded
    name: ''
    
    # Path to the html report
    # If json report path is: /tmp/reports/cucumber/stg.json, then, the generated html report will be located at /tmp/reports/cucumber/stg.html
    path: ''
    
    # If the html file is noy found in the path specified, result in an error.
    if-no-files-found: error

    # Number of days for which the uploaded file should be retained.
    retention-days: ''
```

## Example Usage:
```
- uses: mt185252/cucumber-html-report-generator@v1
  with:
    report-theme: 'hierarchy'
    json-file-path: '${{ github.workspace }}/auto_bdd_stg_cucumber_06_04_2023_T15_10_19.json'
    report-metadata: '{"Date":"06-Mar-2024", "Time":"23:30 IST", "Environment": "Staging"}'

- name: Upload HTML report as an artifact to GitHub
  id: artifact_upload
  uses: actions/upload-artifact@v4
  with:
    name: html-report
    path: '${{ github.workspace }}/auto_qe_cucumber_02_04_2023_T15_10_19.html'
    if-no-files-found: error
    retention-days: 2
```