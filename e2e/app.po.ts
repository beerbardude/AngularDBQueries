import { browser, by, element } from 'protractor';

const customerButton = element(by.css('#customerButton'));

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.title')).getText();
  }

  getuserLabel() {
    element(by.id('loginbtn')).click();
    return element(by.css('.userlabel')).getWebElement();
  }

  getCustomerButtonText() {
    this.loginmethod();
    return element(by.css('#customerButton'));
  }

  getCustomers() {
    this.loginmethod();
    customerButton.click();
    return element(by.id('customer-grid'));
  }

  // TODO: Test so anpassen, dass nur id von erstem Reihe ausglesen wird,
  // nicht mehrere Values (da erster Eintrag übernommen wird, funktioniert Test bereits,
  // allerdings mit Warning: more than one element found for locator By(css selector, .data-column.column-id)
  // - the first result will be used)
  getfirstIdofCustomerTable() {
    this.loginmethod();
    customerButton.click();
    return element(by.className('data-column column-id'));
  }

  loginmethod() {
    browser.get('/login');
    const userinput = element(by.id('inputName'));
    const passwordinput = element(by.id('inputPass'));
    const okButton = element(by.id('okButton'));
    userinput.sendKeys('Tony');
    passwordinput.sendKeys('w1');
    okButton.click();
  }
}
