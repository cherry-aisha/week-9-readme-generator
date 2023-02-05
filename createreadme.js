const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');

const generateReadMe = ({readmeTitle, description, installation, userInstructions, usageInformation, contributionGuidelines, testInstructions, licence, gitHubUser, email}) =>
`#${readmeTitle}

## Description
\```\
${description}
\```\

### Table of Contents
\```\
1. ${installation.name},
2. ${userInstructions.name},
3. ${usageInformation.name},
4. ${contributionGuidelins.name},
5. ${testInstructions.name},
\```\

##### Installation
\```\
${installation}
\```\

###### Usage
\```\
${usageInstructions}
\```\

###### Usage
\```\
${usageInformation}
\```\

####### Contributing
\```\
${contributionGuidelines}
\```\
######## Tests
\```\
${testInstructions}
\```\
########## Licence
\```\
This application is covered under the ${licence} licence.
\```\
########### GitHub Repo
\```\
[View GitHub Repo](https://github.com/${gitHubUser})
\```\
########### Contact Me
\```\
If you have questions abou tthis application you can reach me at ${email}
\```\
`;