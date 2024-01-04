// Variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// Prompts the user questions to populate the new README file
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "table of contents",
            message: "Table of Contents: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installations needed: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have a question? "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md file
        await writeFileAsync('README.md', generateContent);
        console.log('✔️  Successfully generated to README.md file');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init(); 
