// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  timeout: 120000,
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'chrome-extension://egjidjbpglichdcondbcbdnbeeppgdph/home.html#/onboarding',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    browserName: 'chromium',
    // channel: 'chrome',
    headless: false,


  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {contextOptions: {
        // chromium-specific permissions
        permissions: ['clipboard-read', 'clipboard-write'],
      },
       ...devices['Desktop Chrome'] },
       fullyParallel: false
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ]
});

