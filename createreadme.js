const fs = require('fs');
const questions = require('questions.js');

const generateREADME = ({'readmeTitle', 'description', 'installation', 'userInstructions', 'usageInformation', 'contributionGuidelines', 'testInstructions'}) =>
`#${readmeTitle}

## Description
\```\
${description}
\```\

### Table of Contents
\```\
1. ${installation.name},
2. ${userInstructions.name},
3. ${UsageInformation.name},
4. ${contributionGuidelins.name},
5. ${testInstructions.name},
\```\

##### Installation
\```\
${installation}
\```\

###### Usage
\```\
${userInstructions}
\```\

####### Contributing
\```\
${contributionGuidelines}
\```\
######## Tests
\```\
${testInstructions}
\```\
`