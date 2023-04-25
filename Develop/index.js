// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "What is the title for your project?",
    },
    {
      name: "description",
      type: "input",
      message: "Give us a description of your repo",
    },
    {
      name: "tableOfContents",
      type: "input",
      message: "Please provide a table of contents for your README",
    },
    {
      name: "installation",
      type: "input",
      message: "Please provide installation instructions",
    },
    {
      name: "usageInformation",
      type: "input",
      message: "Please provide any usage information",
    },
    {
      name: "contributionGuidelines",
      type: "input",
      message: "Please provide contribution guidelines",
    },
    {
      name: "questions",
      type: "input",
      message: "Please provide a github username for questions",
    },
    {
      name: "email",
      type: "input",
      message: "Please enter an email address for questions"
    },
    {
      name: "license",
      type: "list",
      message: "Please select a license to use",
      choices: ["MIT", "Apache 2.0", "Boost", "BSD", "Eclipse"],
    },
  ])
  .then((response) => {
    const markdown = generateMarkdown(response);
    fs.writeFile("README.md", markdown, (err) => {
        err ? console.log(err) : console.log("success!")
    });
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
