const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title?',
            name: 'readme title',
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
            name: 'user instructions',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage information',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribution guidelines',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test instructions',
        },
    ])

    .then((response) => {
        console.log("generating README");
        fs.writeFile('README.md', inquirerResponse, data);
        (err) => err ? console.error(err) : console.log('success!')
    });
    