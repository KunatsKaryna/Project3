const Page = require('../pageobjects/page');
const selectors = {
  draftWhom: '[data-test-id="pill-text"]',
  draftTheme: '//input[@data-test-id="compose-subject"]',
  draftBody: '//*[@id="editor-container"]/div[1]',
  };

class DraftPage extends Page {  
  get draftWhom() { return $(selectors.draftWhom); }

  get draftTheme() { return $(selectors.draftTheme); }

  get draftBody() { return $(selectors.draftBody); }
  }

module.exports = new DraftPage();
