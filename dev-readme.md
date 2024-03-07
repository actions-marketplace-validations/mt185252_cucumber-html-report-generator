## Contribution & Maintenance:
#### Clone the repo:
```
git clone https://github.com/mt185252/cucumber-html-report-generator && cd cucumber-html-report-generator
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
Make all required code changes in `src` folder.(`src/index.js` is the entrypoint.)

#### Compilation using `ncc`:
Run:
```
npm run build
```

Once build is successful, a `dist/index.js` file will be generated, push the `dist` folder also to GitHub. As defined in the last line of [`action.yml`](./action.yml) the action runs using [`dist/index.js`](dist/index.js).\
Finally raise a PR to main branch with appropriate commit message and description.