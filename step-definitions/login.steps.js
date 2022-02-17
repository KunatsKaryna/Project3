const { Given, When, Then } = require ('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');
const {expect} = require('chai');

Given(/^I am on the main page$/, async () => {
  await loginPage.open('https://yahoo.com/');
});

When(/^I click on signin button$/, async () => {
  await loginPage.signinButton.click();
});

When(/^I enter login$/, async () => {
  await loginPage.loginField.setValue('test12082011');
});

When(/^I click on next button$/, async () => {
  await loginPage.nextButton.click();
});

When(/^I enter password$/, async () => {
  await loginPage.passwordField.setValue('770021rl');
});  

When(/^I click on next$/, async () => {
  await loginPage.nextButton.click(); 
});  

Then(/^I should see mail button$/, async () => {
  expect (await (loginPage.mailButton).isDisplayed()).to.equal(true);  
});

