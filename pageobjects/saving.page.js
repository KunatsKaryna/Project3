const Page = require('../pageobjects/page');
const selectors = {
  draftButton: '//span[@data-test-folder-name="Draft"]',
  draftLetter: '//span[@title="test12082011@yahoo.com"][1]',
  };

class SavingPage extends Page {  
  get draftButton() { return $(selectors.draftButton); }

  get draftLetter() { return $(selectors.draftLetter); }
  }

module.exports = new SavingPage();
