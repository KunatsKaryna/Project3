const { When, Then } = require ('@wdio/cucumber-framework');
const savingPage = require('../pageobjects/saving.page');
const {expect} = require('chai');

When(/^I click on draft folder$/, async () => {
  await savingPage.draftButton.click();
});

When(/^I wait for display of a draft$/, async () => {
  await (savingPage.draftLetter).waitForDisplayed({ timeout: 10000 });
});

Then(/^I should see display of draft$/, async () => {
  expect(await (savingPage.draftLetter).isDisplayed()).is.equal(true);
});


