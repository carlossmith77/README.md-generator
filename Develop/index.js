// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
    
inquirer.prompt([
      {
        type: 'input',
        message: 'what is the name of your product.',
        name: 'Title',
      },
      {
        type: 'input',
        message: 'Please give a description of your project. including how to install it, the practical use case for the product, please provide the license that was used, please also give you email and git hub username.',
        name: 'Description',
      },
    
    
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

//Description
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(run);
