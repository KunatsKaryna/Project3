const { When, Then } = require ('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');
const mailPage = require('../pageobjects/mail.page');
const {expect} = require('chai');

When(/^I click on mail button$/, async () => {
  await loginPage.mailButton.click();
});

When(/^I click on write button$/, async () => {
  await mailPage.writeButton.click();
});

When(/^I enter text in receiver field$/, async () => {
  await mailPage.whomField.setValue('test12082011@yahoo.com');
});

When(/^I enter text in theme field$/, async () => {
  await mailPage.themeField.setValue('letter');
});

When(/^I enter text in body of email$/, async () => {
  await mailPage.bodyField.setValue('Hello, tester');
});    

Then(/^I should see the text in body field is correct$/, async () => {
  expect(await (mailPage.bodyField).getText()).to.contain('Hello, tester');
});
 

