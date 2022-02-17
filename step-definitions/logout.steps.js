const { When, Then } = require ('@wdio/cucumber-framework');
const logoutPage = require('../pageobjects/logout.page');
const {expect} = require('chai');

When(/^I move to profile button$/, async () => {
  await logoutPage.profileButton.moveTo();
});

When(/^I wait for display of logoff button$/, async () => {
  await (logoutPage.logoffButton).waitForDisplayed();
});

When(/^I click on logoff button$/, async () => {
  await logoutPage.logoffButton.click();
});

When(/^I wait for display of signin button$/, async () => {
  await (logoutPage.signinButton).waitForDisplayed();
});  

Then(/^I should see signin button$/, async () => {
  expect(await (logoutPage.signinButton).isDisplayed()).to.equal(true);
});

