// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { if (!license) {
  return ``;
} else {
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(Licenses) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  } 
  
  if (license === 'GPL') 
    return `http://perso.crans.org/besson/LICENSE.html`
}

 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  }   else 
    return `your license is not supported by this product.`
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.prerequisites}
  * [Description](#description)
  * [Installation](#installation)
  * [Use-case](#use-case)
  * [Licenses](#licenses)
  * [Questions](#questions)
  *[Contact-info](#contact-info)
  
  ## Description

  ${data.description}

  ## Installation
 
  ${data.installation}
  
  ## Use-case

  ${data.use-cases}

  ## Licenses

  ${renderLicenseSection(data.licenses)}

  ## Contact-info

  ${data.contact-info}
  
  
`;
}


