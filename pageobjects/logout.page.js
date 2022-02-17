const Page = require('../pageobjects/page');
const selectors = {
  profileButton: '#ybarAccountMenuOpener',
  logoffButton: '//*[@id="profile-signout-link"]',
  signinButton: '//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a',
  };

class LogoutPage extends Page {
  get profileButton() { return $(selectors.profileButton); }
  
  get logoffButton() { return $(selectors.logoffButton); }
  
  get signinButton() { return $(selectors.signinButton); }
  }

module.exports = new LogoutPage();