#!/usr/bin/env.node

const fsPromise = require("fs").promises;
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const templateDescribeAndDiscuss = require("./templates/description-and-discussion");
const templateSolveAndTest = require("./templates/solve-and-test");

/**
 * CLI Args
 */
const options = yargs
    .usage("Usage: $0 -t <title>")
    .option("t", { alias: "title", describe: "Problem title", type: "string", demandOption: true, requiresArg: true })
    .example("$0 -t '155. Min Stack'")
    .epilogue(`📌 Problem title must be formatted as: '{number}. {name}'`)
    .argv;

/**
 * Set up
 */
const title = options.title;
const [number, name] = title.split('. ');
const slugName = name.toLowerCase().split(' ').join('-')
const slugTitle = `${number}-${slugName}`;

/**
 * Create starter files
 */
const createStarterFiles = async () => {
    console.log("🛠  Setting up starter files...");

    const basePath = `${__dirname}/../src/${slugTitle}`;

    try {
        const mdContent = templateDescribeAndDiscuss(title, slugName);
        const tsContent = templateSolveAndTest(title, slugName);

        await fsPromise.mkdir(basePath, { recursive: true });
        console.log(chalk.dim(` ✓ Done making folder`));

        await fsPromise.writeFile(`${basePath}/${number}.md`, mdContent);
        console.log(chalk.dim(` ✓ Done creating .md file`));

        await fsPromise.writeFile(`${basePath}/${number}.ts`, tsContent);
        console.log(chalk.dim(` ✓ Done creating .ts file`));

        console.log(chalk.hex("#51FBA6")(`✅ Your files are ready: \`src/${slugTitle}/\``))
        console.log(chalk.hex("#F8DFED")(`🧠 Happy solving!`))

    } catch (error) {
        console.error("🚨 Something went wrong!");
        console.error(error);
    }
};

/**
 * Render Intro
 */
const renderIntro = () => {
    const greeting = chalk.hex("#F8DFED").bold(`${slugTitle}`);
    const boxenOptions = {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "#F23C97",
        backgroundColor: "#3B0821"
    };
    const msgBox = boxen(greeting, boxenOptions);

    console.log(msgBox);
};

/**
 * Render Outro
 */
const renderOutro = () => {

};

/**
 * Run functions
 */
renderIntro();
createStarterFiles();
renderOutro();