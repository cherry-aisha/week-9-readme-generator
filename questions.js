const inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./createreadme');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title?',
            name: 'readmeTitle',
        },
        {
            type: 'input',
            message: 'What is the description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are the user instructions?',
            name: 'userInstructions',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usageInformation',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributionGuidelines',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'testInstructions',
        },
        {
            type: 'checkbox',
            message: 'Please choose a licence',
            choices: 'MIT Licesnce , Apache License 2.0, GNU General Public Licence',
            name: 'licence',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHubUser',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },

    ])

    .then((response) => {
        console.log("generating README");
        fs.generateReadMe('README.md', inquirerResponse, data);
        (err) => err ? console.error(err) : console.log('success!')
    });