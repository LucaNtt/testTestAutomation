const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    jnson: true,

  },
  e2e: {
    baseUrl: 'https://video.sky.it/',
    video: true,
    screenshotOnRunFailure: true
  },
});
