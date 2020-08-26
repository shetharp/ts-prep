# ts-prep

_🧩 A TypeScript starter for solving LeetCode problems with test-driven-development_

# Usage

<details>
  <summary>
    <strong>Prerequisites</strong>
  </summary>

  - Ensure you have 
  [Node](https://nodejs.org/en/download/)
  installed on your machine before proceeding.

  - Clone this repo locally and `cd` into it
</details>

1. Install dependencies
   ```shell
   npm install
   ```
 
 2. Start test-driven-development (TDD)
    ```shell
    npm start
    ```
    _This script runs [Jest](https://jestjs.io/) in watch mode._

3. Start making changes! 
   - You will see your changes be validated against your test cases.
   - [Add a new problem](#add-a-new-problem) with the script (or manually)


## Add a new problem

You can add a new problem manually by following the repo [structure](#structure). 
However, this repo comes with a script to quickly set up starter files for new LeetCode problems&mdash;letting you focus on the real problem solving!

In the root directory of the repo, run
```shell
npm run new-problem '<title>'
```
<details>
 <summary>
  Where <code><title></code> is the LeetCode problem's title.
  </summary>

- The format of the title should be: `{number}. {name}` 
- The title must start with a number, followed by a period. Otherwise, the script won't work!
- The title should be wrapped in quotes for the argument to get passed into the script
</details>

For example, if you want to set up starter files for problem _[202. Happy Number](https://leetcode.com/problems/happy-number/)_, you would run
```shell
npm run new-problem '202. Happy Number'
```

<details>
 <summary>
  About this script
 </summary>
 
This script is defined in the `package.json`. 
It uses your local Node runtime environment to execute the `scripts/new-problem.js` file.
The script parses the inputted title and uses the templates to auto-generate the boilerplate `.md` and `.ts` files.

You could run this script directly from the repo root:
```shell
node ./scripts/new-problem.js -t '<title>'
```
</details>


## Structure

**`src/` directory** &ndash; In general, you should do all your work here
- Each LeetCode problem should have its own directory
- Add a `.md` file in the problem directory for the problem description and discussion
- Add a `.ts` file in the problem directory to solve and test

**`scripts/` directory** &ndash; Contains custom scripts
- The `new-problem.js` script is used to set up starter files for new LeetCode problems
- The `templates` directory contains files that define the boilerplate content for auto-generating `.md` and `.ts` files
- Feel free to add or modify scripts or templates to fit your needs

**`jest.config.js` file** &ndash; Defines our custom Jest configuration
- We match test cases defined in regular `.ts` files
  - By default, Jest matches `.ts` files in a `__tests__` dir or if the filename ends with `.spec.ts` or `.test.ts`
  - Our custom `testMatch` rule lets write code to solve and test in one file
- We use `ts-jest` as a dependency to transform `.ts` files for Jest
  - By default, Jest only works with JavaScript

# How to Contribute

Please note that this repo is meant to be a _starter_, so we don't need contributors to submit LeetCode problems solved with TypeScript.
However, any tooling or documentation that you would like to contribute to make the developer experience better is welcomed!

1. Fork this repo and set it up locally
2. Make your desired changes and commit them to a feature branch in your forked repo
3. Open up a PR from your forked repo branch against this repository

Thanks for making this project better! 💪
