const inquirer = require('inquirer');
const fs = require('fs');

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
    ])

    .then((response) => {
        console.log("generating README");
        fs.writeFile('README.md', inquirerResponse, data);
        (err) => err ? console.error(err) : console.log('success!')
    });
    