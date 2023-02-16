const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  includeShadowDom: true,
  defaultCommandTimeout: 5000,

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});