const inquirer = require('inquirer');

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