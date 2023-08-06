const loginPageElements = require('../elements/loginPageElements');

class LoginPage {
  get usernameInput() { return $(loginPageElements.usernameInput); }
  get passwordInput() { return $(loginPageElements.passwordInput); }
  get loginButton() { return $(loginPageElements.loginButton); }

  open() {
    browser.url('/');
  }

  login(username, password) {
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new LoginPage();
