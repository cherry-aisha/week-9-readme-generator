
function generateReadMe(data) { //({readmeTitle, description, installation, userInstructions, usageInformation, contributionGuidelines, testInstructions, licence, gitHubUser, email}) =>
`#${data.readmeTitle}

## Table of Contents
\```\
1. [Description])#(Descripton)\n,
2. [User Instructions])#(userInstruction)\n,
3. [Usage Instruvtions])#(usageInstructions)\n,
4. [Contribution]#(guidelines.name)\n,
5. [Test Instructions]#(testInstructions),
\```\

### Description
\```\
${data.description}
\```\

##### Installation
\```\
${data.installation}
\```\

###### Usage
\```\
${data.userInstructions}
\```\

###### Usage
\```\
${data.usageInformation}
\```\

####### Contributing
\```\
${data.contributionGuidelines}
\```\
######## Tests
\```\
${data.testInstructions}
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
If you have questions abou this application you can reach me at ${email}
\```\
`
;}

module.export = generateReadMe;

return;