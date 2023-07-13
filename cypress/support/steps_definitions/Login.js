import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import LandingPage from "../../support/pages/LandingPage";

const login = new LandingPage();

Given("I navigate to the home page", () => {
    login.visit();
});

When("I view the landing page", () => {
    true
});

Given("I am signed in as the standard user", () => {
    login.enter_username('standard_user');
    login.enter_password('secret_sauce');
});  

When("I submit the login request", () => {
    login.submit_login();
    cy.wait(3000);
});