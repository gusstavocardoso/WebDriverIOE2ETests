const shoppingCartPageElements = require('../elements/shoppingCartPageElements');

class ShoppingCartPage {
  get cartItem() {
    return $(shoppingCartPageElements.cartItem);
  }

  get checkoutButton() {
    return $(shoppingCartPageElements.checkoutButton);
  }

  get firstNameInput() {
    return $('[data-test="firstName"]');
  }

  get lastNameInput() {
    return $('[data-test="lastName"]');
  }

  get zipCodeInput() {
    return $('[data-test="postalCode"]');
  }

  get continueButton() {
    return $('.cart_button');
  }

  get summaryInfo() {
    return $('.summary_info');
  }

  get finishButton() {
    return $('.cart_button');
  }

  open() {
    browser.url('/cart.html');
  }

  fillUserInfo(firstName, lastName, zipCode) {
    this.firstNameInput.setValue(firstName);
    this.lastNameInput.setValue(lastName);
    this.zipCodeInput.setValue(zipCode);
  }
}

module.exports = new ShoppingCartPage();
