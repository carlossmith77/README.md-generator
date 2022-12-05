// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const prerequisites = [
  //inquirer.prerequisite([
      {
      
        type: 'input',
        message: 'what is the name of your product.',
        name: 'Name',
      },
      {
        type: 'input',
        message: 'Please give a description of your product.',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'Please explain how to instal the product. ',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'what is the real world use case for this product?',
        name: 'Use-case',
      },
      {
        type: 'input',
        message: 'what license are you using?',
        name: 'License',
      },
      {
        type: 'input',
        message: 'Message the github or email below with any questions.',
        name: 'Questions',
      },
      {
        type: 'input',
        message: 'Please enter your github username.',
        name: 'Github',
      },
      {
        type: 'input',
        message: 'Please enter your email.',
        name: 'Email',
      },
    
    ]
    //)]
    // .prompt(prerequisites)
    // .then(function(data))
// TODO: Create a function to write README file
function writeToFile( data) {
  fs.writeFileSync("README.md", generateMarkdown.js(data));
console.log("README.md succesfully generated.")
}

//Description
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(prerequisites)
.then((event)=>console.log(event))


}

// Function call to initialize app
 
// .then(prerequisites => {
//   return generateMarkdown(prerequisites);
// })
// .then(data => {
//   return writeToFile(data);
// }) 
// .catch(err => {
//   console.log(err)
// })

function init() {
  inquirer.prompt(prerequisites)
  .then((event)=>console.log(event))
  writeToFile(event)
  
  }
