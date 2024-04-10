const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const Enters = require("../../support/tasks/EnterCredentials.js");
const Verifica = require("../../support/questions/verify.js");




Given("ingreso en la pagina de sauce", () => {
    cy.viewport(1280,800);
    cy.visit("https://www.saucedemo.com");
});

When("ingreso credenciales de ingreso", function () {
    Enters.credenciales();
});

Then("verifico que ingreso exitosamente", function () {
    Verifica.Login();
});



