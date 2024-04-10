const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    reporter: 'html',
    //retries: process.env.CI ? 2 : 1,
    use: {
        actionTimeout: 2 * 1000, // tuong tu implicit wait
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure'
    }
})