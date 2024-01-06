// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'Academic':
      return '(https://opensource.org/licenses/AFL-3.0)';
    case 'GNU':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC':
      return '(https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'Open':
      return '(https://opensource.org/licenses/OPL-1.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `
## License

This project is licensed under the ${license} license.

${badge}
${link}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseSection = renderLicenseSection(answers.license);

  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
${answers.tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseSection}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the repository, or would like to open an issue, contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).
  `;
}

module.exports = generateMarkdown;
