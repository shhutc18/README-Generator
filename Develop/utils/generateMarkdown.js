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
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Academic':
      return '[![License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-blue.svg)](https://opensource.org/licenses/AFL-3.0)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Open':
      return '[![License: OPL 1.0](https://img.shields.io/badge/License-OPL%201.0-blue.svg)](https://opensource.org/licenses/OPL-1.0)';
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
    case 'Apache 2.0':
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
function generateTableOfContents(sections) {
  let tableOfContents = '## Table of Contents\n\n';

  sections.forEach((section, index) => {
    tableOfContents += `${index + 1}. [${section}](#${section.toLowerCase().replace(/ /g, '-')})\n`;
  });

  return tableOfContents;
}

function generateMarkdown(answers) {
  const licenseSection = renderLicenseSection(answers.license);
  const licenseBadge = renderLicenseBadge(answers.license);
  const sections = ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];
  const tableOfContents = generateTableOfContents(sections);

  return `
# ${answers.title}

${licenseBadge}

## Description
${answers.description}

${tableOfContents}

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
