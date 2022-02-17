const { When, Then } = require ('@wdio/cucumber-framework');
const sentPage = require('../pageobjects/sent.page');
const {expect} = require('chai');

When(/^I click on send button$/, async () => {
  await sentPage.sendButton.click();
});

When(/^I click on sent folder button$/, async () => {
  await sentPage.sentButton.click();
});
When(/^I wait when sent letter will be displayed$/, async () => {
  await (sentPage.sentLetter).waitForDisplayed({ timeout: 10000 });
});

Then(/^I should see that sent letter is displayed$/, async () => {
  expect(await sentPage.sentLetter.isDisplayed()).to.be.equal(true);
});

Then (/^I should see that time of mail sent matches the RegExp pattern$/, async () => {
  const timeLetter = await sentPage.timeLetter.getText();
  expect((new RegExp('\\d\\d')).test(timeLetter)).to.equal(true);
});


