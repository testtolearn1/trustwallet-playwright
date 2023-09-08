TrustWallet tech asssesment

1. Trust Wallet chrome extension set up and account creation

Structure :
--data : contains static data
--e2e : contains test
--fixtures : contains function to set up chrome extension and service workers as per Manifest.json
--playwright-report : test reports
--test-results : test results
--Trust-Wallet : exploded extension file for the project Trust-wallet
--utility : helper functions and element locators

    I have used playwright since automating chrome extensions was most effective using playwright.
    Cypress cannot visit things like chrome-extension:// however playwright supports this out of the box.

    The video of successfull execution is attached with the email.

    Steps to execute :
    1. Clone the repo
    2. cd repo (cd trustwallet-playwright)
    3. run `npm i` on terminal
    3. run  -> npm run script-name from package.json to run the desired script . Example :   $npm run runTestHeaded

Thanks
