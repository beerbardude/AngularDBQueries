import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../db/mock/mock-customers';
import { POLICIES } from '../db/mock/mock-policies';
import { USERS } from '../db/mock/mock-users';
import { forEach } from '@angular/router/src/utils/collection';
import { headersToString } from 'selenium-webdriver/http';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.css']
})
export class QueryPageComponent implements OnInit {
  objects: any[];

  resultTable: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  getCustomers() {

    this.renderQueryResults(CUSTOMERS);
  }

  getPolicies() {
    this.renderQueryResults(POLICIES);
  }

  getUsers() {
    this.renderQueryResults(USERS);
  }

  makeHeadingTableElements(objects: any[]): HTMLElement {
    let tr = document.createElement('tr');
    for (let key in objects[0]){
      let th = document.createElement('th');
      th.appendChild(this.addSortLink(key));
      tr.appendChild(th);
    }    
    return tr;
  } 

  addSortLink(text: string): HTMLElement {
    let link = document.createElement('a');
    link.innerHTML = text;
    return link;
  }

  renderQueryResults(objects: any) {
    this.resultTable = document.getElementById('result');
    this.resultTable.innerHTML = '';
    this.resultTable.appendChild(this.makeHeadingTableElements(objects));
    
    for (let index = 0; index < objects.length; index++){
      let tr = document.createElement('tr');
      let obj = objects[index];
      for (let key in obj){
        let td = document.createElement('td');
        let value = this.formatValue(obj[key]);
        td.innerHTML = value;
        tr.appendChild(td);      
      }
      this.resultTable.appendChild(tr);
    }      
  }

  formatValue(value: any): any {
    if(value instanceof Date) {
      return this.formatAsDate(value);
    }
    if(value instanceof Number) {      
      return this.formatAsNumber(value);
    }
    else {
      return value;
    }
  }

  formatAsDate(value: Date): string {
    return value.getFullYear() + '-' + value.getMonth() + '-' + value.getDate();
  }

  formatAsNumber(value: Number): string {
    return value.toLocaleString( 'de-DE', { minimumFractionDigits: 2 });
  }

  
}
