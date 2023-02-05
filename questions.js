const inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./createreadme.js');

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
            type: 'list',
            message: 'Please choose a licence',
            name: 'licence',
            choices: ['MIT Licesnce' , 'Apache License 2.0', 'GNU General Public Licence'],
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

    .then((answers) => {
        const readMePageContent = generateReadMe(answers);

        console.log("generating README");
        
        fs.generateReadMe('README.md', readMePageContent, (err) =>
        err ? console.log(err) : console.log('Succesfully created ReadMe!')
        );
    });