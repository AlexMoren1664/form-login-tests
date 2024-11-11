class LoginPage {
  get usernameInput() { return $('#user-name'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }
  get errorMessage() { return $('.error-message-container'); }
  get productsPage() { return $('.inventory_container'); }

  async open() {
      await browser.url('https://www.saucedemo.com');
  }

  async login(username, password) {
      await this.usernameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
  }

  async isProductsPageVisible() {
      return this.productsPage.isDisplayed();
  }

  async getErrorMessage() {
      return this.errorMessage.getText();
  }

  async getUsernameErrorMessage() {
      return this.errorMessage.getText();
  }

  async getPasswordErrorMessage() {
      return this.errorMessage.getText();
  }

  async clearInput(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    const clearButton = $('.error-button');
    await this.loginButton.click();
    await clearButton.click()
    return this.errorMessage.getText();
  }
}

module.exports = new LoginPage();
