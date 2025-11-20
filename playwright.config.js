// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
    screenshot: "off",
    video: "off"
  },
  reporter: "list"
});
