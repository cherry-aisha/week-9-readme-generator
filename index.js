const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./createreadme');

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
            message: 'Please choose a license',
            name: 'license',
            choices: ['MIT license' , 'Apache License 2.0', 'GNU General Public license', 'None'],
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

        
        
        fs.writeFile('README.md', readMePageContent, (err) =>
        err ? console.log(err) : console.log('Succesfully created ReadMe!')
        );
    });