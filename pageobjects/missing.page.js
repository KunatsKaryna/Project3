const Page = require('../pageobjects/page');
const selectors = {
  draftButton: '//span[@data-test-folder-name="Draft"]',
  draftMail: '//span[@title="test12082011@yahoo.com"][1]',
  };

class MissingPage extends Page {  
  get draftButton() { return $(selectors.draftButton); }

  get draftMail() { return $(selectors.draftMail); }
  }

module.exports = new MissingPage();

  
