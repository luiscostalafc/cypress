import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://erickwendel.github.io/vanilla-js-web-app-example/",
    // It won't clean up the window state after each test
    testIsolation: false,
  },
});
