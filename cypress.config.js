const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://video.sky.it/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
