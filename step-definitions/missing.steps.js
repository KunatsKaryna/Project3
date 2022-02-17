const { When, Then } = require ('@wdio/cucumber-framework');
const missingPage = require('../pageobjects/missing.page');
const {expect} = require('chai');

When(/^I click on draft button$/, async () => {
  await missingPage.draftButton.click();
});

When(/^I wait for the draft to disappear$/, async () => {
  await missingPage.draftMail.waitForDisplayed({reverse: true});
});

Then(/^I should see that the draft disappeared from draft folder$/, async () => {
  expect(await missingPage.draftMail.isDisplayed()).is.equal(false);
});



