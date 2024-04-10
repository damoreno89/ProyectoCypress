const { Given, When, } = require('cypress-cucumber-preprocessor/steps');
const Enters = require("../../support/tasks/EnterCredentials.js");

Given("David enters the Sauce application", () => {
    cy.viewport(1280,800);
    cy.visit("https://www.saucedemo.com");
    cy.url().should('include', '/inventory.html');
});

When("David enters credentials", function () {
    Enters.credenciales();
});