// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
import 'cypress-file-upload';
Cypress.Commands.add('consultarAPIyCrearArchivo', (baseUrl, endpoint, queryParams, fileName) => {
  const url = new URL(endpoint, baseUrl);

  Object.keys(queryParams).forEach((key) => url.searchParams.append(key, queryParams[key]));
  cy.request({  
    method: 'GET',  
    url: url.toString(),  
    encoding: 'utf-8',  
  }).then((response) => {  
    const filePath = `cypress/fixtures/${fileName}`;  
    const firstData = response.body[0].data;  
    const jsonData = JSON.stringify(firstData, null, 2);  
    cy.writeFile(filePath, jsonData, { flag: 'w' });  
    console.log('API Response:', response.body);
  });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })