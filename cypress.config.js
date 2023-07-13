const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');



const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );
  return config;
};

module.exports = defineConfig({
  viewportWidth: 800,
  viewportHeight: 600,
  chromeWebSecurity: false,
  fixturesFolder: false,
  e2e: {
    hideXHRInCommandLog: true,
    setupNodeEvents,
    specPattern: '**/*.feature',
    baseUrl: 'https://www.saucedemo.com/v1/',
    excludeSpecPattern: ['*.js'],
  },
});
