Feature: This is a basic feature designed to ensure our environment is configured correctly.


    Scenario: 'Hello world' test to ensure our environment is configured properly
        Given I have navigated to the configured base URL
        When I write "Hello" to the Cypress log console

