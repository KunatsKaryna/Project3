const { When, Then } = require ('@wdio/cucumber-framework');
const savingPage = require('../pageobjects/saving.page');
const draftPage = require('../pageobjects/draft.page');
const {expect} = require('chai');

When(/^I click on draft email$/, async () => {
  await savingPage.draftLetter.click();
});

Then(/^I should see that receiver field is filled with adress'test12082011@yahoo.com'$/, async () => {
  expect(await (draftPage.draftWhom).getText()).to.be.equal('test12082011@yahoo.com');
});

Then(/^I should see that theme field is filled with text'letter'$/, async () => {
  expect(await (draftPage.draftTheme).getAttribute('value')).to.be.equal('letter');
});

Then(/^I should see that body of draft is filled with text 'Hello, tester'$/, async () => {
  expect(await (draftPage.draftBody).getText()).to.contain('Hello, tester'); 
});


