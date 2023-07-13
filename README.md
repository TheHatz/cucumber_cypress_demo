# cucumber_cypress_demo

This is an example of Cypress in action. This repository contains a collection of functional tests designed to demonstrate what functional automated tests implemented in Cypress look like. The tests specs are written in Cucumber/Gherkin syntax using a BDD (Behavior Driven Development) approach. 

These test follow the PageObject pattern. Reusable steps are created as part of the Gherkin statements in .feature files. Each step maps to 1 step definition. Step definitions primarly focus should be to ultimately determine if the step passes or fails. Only basic level code resides within a given step definition. Step definitions are grouped by likeness and according to application features. Think of step definitons as buttons and levers you can push and pull

Step definitions leverage functionality residing in PageObjects. PageObjects are created and usually map to high level features of the application. The vast majority of implementation code resides within PageObjects. All/most element locators also reside here. PageObjects should contain the most detail code and its where your tests interface with the application. Following this pattern is one of the best ways to create robust tests and promotes code resuse. 
