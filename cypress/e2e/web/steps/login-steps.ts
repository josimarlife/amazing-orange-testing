const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I am on the Orange HRM app', () => {
    cy.visit('/');
  });