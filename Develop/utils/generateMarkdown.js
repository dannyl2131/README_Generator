// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license = "Apache 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license = "Boost"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(license = "BSD"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if(license = "Eclipse"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = "MIT"){
    return "https://opensource.org/license/mit/"
  }
  else if(license = "Apache 2.0"){
    return "https://opensource.org/license/apache-2-0/"
  }
  else if(license = "Boost"){
    return "https://www.boost.org/LICENSE_1_0.txt"
  }
  else if(license = "BSD"){
    return "https://opensource.org/license/bsd-3-clause/"
  }
  else if(license = "Eclipse"){
    return "https://opensource.org/license/epl-1-0/"
  }
  else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseMarkdown = `
    ##License
    ${renderLicenseLink(license)}\
    \
  `
  if(license = ""){
    return ""
  }
  else{
    return licenseMarkdown
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
   # ${response.title}
  ${renderLicenseBadge(response.license)}
   ## Description
   ${response.description}
   ## Table of Contents
   ${response.tableOfContents}
   ## Installation
   ${response.installation}
   ## Usage Information
   ${response.usageInformation}
   ## Contributing
   ${response.contributionGuidelines}
   ## Questions
   If there are any additional questions, please email me at ${response.email}

   Here is a link to my Github profile if you'd like to check out any more of my work![github.com/${response.questions}](github.com/${response.questions})
   ${renderLicenseSection(response.license)}
`;
}

module.exports = generateMarkdown;