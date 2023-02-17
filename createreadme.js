// Return license badge based on which license is passed in or return empty string
function renderLicenseBadge (license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/bagde/license${license}-blue.sgv)`;
    }
    return '';
    }

    // Return licence URL or an empty string
    function renderLicenseLink(license) {
        if (license !== 'None') {
            return `\n* [License](£license)\n`
        }
        return '';
    }

    // Return license section of README or return an empty string
    function renderLicenseSection(license) {
        if (license !== 'None') {
            return `## License
            This project is licensed under the ${license} license`;
        }
        return licenseBadge(license) + "\r" + link + "";

    }

//Create the markdown for the ReadMe file
function generateReadMe(data) {

    console.log(data);
    //({readmeTitle, description, installation, userInstructions, usageInformation, contributionGuidelines, testInstructions, licence, gitHubUser, email}) =>

    const markdown =

`# ${data.readmeTitle}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Table of Contents

1. [Description](#descripton)
2. [Installation](#installation)
3. [Usage Instrutions](#user-instructions)
4. [Usage Information](#usage-information)
5. [Contribution Guildlines](#contribution-guidelines)
6. [Test Instructions](#test-instructions)


### Description
${renderLicenseLink(data.license)}
${data.description}


### Installation

${data.installation}


### Usage Instructions
${data.userInstructions}


### Usage Information

${data.usageInformation}


### Contribution Guidelines

${data.contributionGuidelines}

### Test Instructions

${data.testInstructions}

### GitHub Repo

[View GitHub Repo](https://github.com/${data.gitHubUser})

### Contact Me

If you have questions abou this application you can reach me at ${data.email}

`
        ;
    return markdown;
}
module.exports = generateReadMe;