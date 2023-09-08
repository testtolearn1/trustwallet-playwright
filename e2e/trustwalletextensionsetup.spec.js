import { test, expect } from '../fixtures/fixtures';
const locator = require("../utility/elementLocators.js");
const data = require("../fixtures/data.js");
const {copyConfirmSeedPhrase} = require("../utility/helper.js");


  test.beforeAll(async () => {
    test.slow(); 
  });

  test.describe('Trust wallet set up', () => {
    test('should set up wallet while saving seed phrase', async ({page,extensionId}) => {

      await page.goto(`chrome-extension://${extensionId}/home.html#/onboarding`);
      await page.getByTestId(locator.createNewWallet).click();
      await page.getByTestId(locator.password).fill(data.password)
      await page.getByTestId(locator.confirmPassword).fill(data.password)
      await page.getByTestId(locator.tncCheckbox).click()
      await page.getByTestId(locator.nextButtonSetPassword).click()
      await page.getByTestId(locator.showButtonBackUpPhrase).click()
      await page.getByTestId(locator.copySecretPhraseIcon).click()

      await copyConfirmSeedPhrase(page);

      await page.getByTestId(locator.nextButtonConfirmPhrase).click()
      await page.getByTestId(locator.shareDataButtonImproveWallet).click()

      await page.waitForSelector(locator.openWalletButton);
      await page.getByTestId(locator.openWalletButton).click()
      await page.getByTestId(locator.gotItButtonTip).click()

      await page.getByTestId(locator.readyToUseButtonTip).click() 
      await expect(page.getByTestId(locator.accountBalanceHome)).toEqual('$0.00');

      await page.close()

    })
})