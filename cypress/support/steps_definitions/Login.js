import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import LandingPage from "../../support/pages/LandingPage";

const login = new LandingPage();

Given("I navigate to the home page", () => {
    login.visit();
});

When("I view the landing page", () => {
    true
});