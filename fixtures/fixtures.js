const { test: base, expect, chromium  } = require('@playwright/test');
const path = require('path');

let context; 
exports.test = base.extend({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, '../Trust-Wallet');
     context = await chromium.launchPersistentContext('', { 
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });

  const pages = context.pages();
    for (const page of pages) {
      const pageUrl = page.url();
      if ( pageUrl.includes('about:blank'))
       {
        await page.close();
       }
      }

    await use(context);
    await context.close();

  },
  extensionId: async ({ context }, use) => {

    // // for manifest v3:
    let [background] = context.serviceWorkers();
    if (!background)
      background = await context.waitForEvent('serviceworker');

    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  },
});
exports.expect = expect;

