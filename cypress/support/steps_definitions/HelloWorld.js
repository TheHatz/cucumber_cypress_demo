import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';


Given('I have navigated to the configured base URL', () => {
    cy.visit(''); 
});

Given('I write {string} to the Cypress log console', (text) => {
    cy.log(text); 
    console.log(text);
});