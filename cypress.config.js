const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: Cypress.env('BASEURL'),
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
