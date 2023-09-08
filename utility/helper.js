const locator = require("./elementLocators.js");
const fs = require('fs');


    const copyConfirmSeedPhrase = async(page) =>{
        await page.getByTestId(locator.copySecretPhraseIcon).click()
        await page.waitForTimeout(1000);

        const seedPhrase = await page.evaluate(() => navigator.clipboard.readText());
        fs.writeFileSync('seed-phrase.txt', seedPhrase);
        await page.getByTestId(locator.proceedSecretPhrasetoConfirm).click()
      
        const words = seedPhrase.split(' ');
      
        for (const word of words) {
          await page.click(`[data-testid="${word}-selectable"]`);
          await page.waitForTimeout(1000);
        }
      
    };

module.exports = {
    copyConfirmSeedPhrase
}