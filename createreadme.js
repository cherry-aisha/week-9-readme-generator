
function generateReadMe(data) {

    console.log(data);
    //({readmeTitle, description, installation, userInstructions, usageInformation, contributionGuidelines, testInstructions, licence, gitHubUser, email}) =>

    const markdown =

`#${data.readmeTitle}

## Licence

This application is covered under the ${data.licence} licence.

## Table of Contents

1. [Description](#descripton)
2. [Installation](#installation)
3. [Usage Instrutions](#user-instructions)
4. [Usage Information](#usage-information)
5. [Contribution Guildlines](#contribution-guidelines)
6. [Test Instructions](#test-instructions)


### Description

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