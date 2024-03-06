# Cucumber HTML report generator
This GitHub action is a wrapper around the [cucumber-html-reporter v7.1.1](https://www.npmjs.com/package/cucumber-html-reporter/v/7.1.1) npm package.\
It takes a cucumber report in `json` format as an input and generates a `html` report for easy report analysis.

## Usage:
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
```

## Example:
```
- uses: mt185252/cucumber-html-report-generator@v1
  with:
    report-theme: 'hierarchy'
    json-file-path: '${{ github.workspace }}/auto_bdd_stg_cucumber_06_04_2023_T15_10_19.json'
    report-metadata: '{"Date":"06-Mar-2024", "Time":"23:30 IST", "Environment": "Staging"}'
```

## Contribution & Maintenance:
#### Clone the repo:
```
git clone https://github.com/mt185252/cucumber-html-report-generator
```
#### Install Pre Requisites:
- Recommended Node Version: v20 (`v20.11.1`)
- Install `ncc` globally to compile the code and modules into one file used for distribution.
    ```
    npm i -g @vercel/ncc
    ```

#### Install all node dependencies
```
npm i
```
Make all required code changes in `src` folder `index.js` is the entrypoint.

#### Compilation using `ncc`:
Run:
```
npm run build
```

Once build is successful, a `dist/index.js` file will be generated, push the `dist` folder also to GitHub. As defined in the last line of [`action.yml`](./action.yml) the action runs using [`dist/index.js`](dist/index.js).\
Finally raise a PR to main branch with appropriate commit message and description.