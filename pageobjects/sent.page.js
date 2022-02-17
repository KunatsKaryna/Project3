const Page = require('../pageobjects/page');
const selectors = {
  sendButton: '//button[@data-test-id="compose-send-button"]',
  sentButton: '//a[@data-test-folder-name="Sent"]',
  sentLetter: '//span[@data-test-id="message-subject"]',
  timeLetter: '//time[@role="gridcell"]',
  };

class SentPage extends Page {  
  get sendButton() { return $(selectors.sendButton); }  

  get draftMail() { return $(selectors.draftMail); }

  get sentButton() { return $(selectors.sentButton); }
  
  get sentLetter() { return $(selectors.sentLetter); }

  get timeLetter() { return $(selectors.timeLetter); }
  }

module.exports = new SentPage();
