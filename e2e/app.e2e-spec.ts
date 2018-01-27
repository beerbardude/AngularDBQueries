import { AppPage } from './app.po';
import {by, element, browser} from 'protractor';

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
    expect(page.getuserLabel().getText()).toEqual('User');
  });

  it('should Login with User "Tony" and Password "w1"', function() {
    expect(page.getCustomerButtonText().getText()).toEqual('Kunden');
  });

  it('should request the customers', function() {
    expect(page.getCustomers().isPresent()).toBe(true);
  });

  it('should check if first entry of customer table equals 1', function(){
    expect(page.getfirstIdofCustomerTable().getText()).toBe('1');
  });

});
