import { AppPage } from './app.po';
import {by, element, browser} from "protractor";

describe('angular-login App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the Title "Database Queries', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Database Queries');
  });

  it('should Click on Login Button', function() {
    browser.get('/');
    element(by.id('loginbtn')).click()
    let user = element(by.css(".userlabel")).getWebElement();
    expect(user.getText()).toEqual("User");
  })

  it('should Login with User "Tony" and Password "w1"', function() {
    browser.get('/login');
    let userinput = element(by.id('inputName'))
    let passwordinput = element(by.id('inputPass'))
    let okButton = element(by.id('okButton'))
    userinput.sendKeys('Tony')
    passwordinput.sendKeys('w1')
    okButton.click()
    let customerButton = element(by.css('#customerButton'))
    expect(customerButton.getText()).toEqual('Kunden')
  })

  it('should request the customers', function() {
    browser.get('/login');
    let userinput = element(by.id('inputName'))
    let passwordinput = element(by.id('inputPass'))
    let okButton = element(by.id('okButton'))

    userinput.sendKeys('Tony')
    passwordinput.sendKeys('w1')
    okButton.click()

    let customerButton = element(by.css('#customerButton'))
    customerButton.click()
    let resultTable = element(by.id('resultTable'))
    expect(resultTable.isPresent()).toBe(true);
  })

  it('should check if first entry of customer table equals 1', function(){
    browser.get('/login');
    let userinput = element(by.id('inputName'))
    let passwordinput = element(by.id('inputPass'))
    let okButton = element(by.id('okButton'))

    userinput.sendKeys('Tony')
    passwordinput.sendKeys('w1')
    okButton.click()

    let customerButton = element(by.css('#customerButton'))
    customerButton.click()

    let resultTable = element(by.css('td'))
    expect(resultTable.getText()).toBe('1');
  })

});
