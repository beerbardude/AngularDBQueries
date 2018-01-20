import { Component, OnInit } from '@angular/core';
import { USERS } from '../db/mock/mock-users';
import { forEach } from '@angular/router/src/utils/collection';
import { headersToString } from 'selenium-webdriver/http';
import { validateConfig } from '@angular/router/src/config';
import { User } from '../models/user';
import { Input } from '@angular/core/src/metadata/directives';
import { formatValue } from '../utils/formatUtils';
import { getIndexOfString, createTableCellWithValue, clearHtmlElement, createTableRowWithValues } from './query-page.utils';
import { DataService } from '../services/data.service';
import { htmlTableRowTag, htmlLinkTag, htmlTableHeadTag, htmlTableCellTag } from '../utils/htmlUtils';
import { MessageService } from '../services/message.service';

const resultTableId = 'resultTable';

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.css']
})
export class QueryPageComponent implements OnInit {
  id: any;
  index: number;
  resultTable: HTMLElement;
  resultTableHeader: HTMLElement;
  resultTableBody: HTMLElement;

  constructor(
    private messageServie : MessageService,
    private dataService : DataService
  ) { }

  ngOnInit() {
    //this.hideLoginButton();
  }

  // hideLoginButton() {
  //   let buttons = document.getElementsByTagName('Button');
  //   for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++){
  //     let button = (buttons[buttonIndex] as HTMLElement);
  //     if(button.innerHTML === 'Login') {
  //       button.style.display = 'none';
  //     }
  //   }
  // }

  showCustomers(): void {
    this.dataService.getCustomers().subscribe(customers => this.renderQueryResults(customers));
  }

  showPolicies() {
    this.dataService.getPolicies().subscribe(policies => this.renderQueryResults(policies));
  }

  showCustomerWithPolcies() {
    this.dataService.getCustomerWithPolicies().subscribe(customersWithPolcies => this.renderQueryResults(customersWithPolcies));
  }


  renderQueryResults(results: any) {
    this.resultTable = document.getElementById(resultTableId);
    clearHtmlElement(this.resultTable);
    this.resultTableHeader = this.resultTable.appendChild(document.createElement("thead"));
    this.resultTableHeader.appendChild(this.makeHeadingTableElements(results));
    this.resultTableBody = this.resultTable.appendChild(document.createElement("tbody"))
    for (let index = 0; index < results.length; index++){
      this.resultTableBody.appendChild(createTableRowWithValues(results, index));
    }
  }

  makeHeadingTableElements(objects: any[]): HTMLElement {
    const tr = document.createElement(htmlTableRowTag);
    this.index = 0;
    for (const attribute in objects[0]){
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.appendChild(this.createSortLink(attribute));
      tr.appendChild(th);
      this.index++;
    }
    return tr;
  }

  createSortLink(text: string): HTMLElement {
    const link = document.createElement(htmlLinkTag);
    link.id = this.index.toString();
    link.addEventListener('click', this.sortTable);
    link.innerHTML = text;
    return link;
  }

  sortTable() {
    this.resultTable = document.getElementById('resultTable');
    let  rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      rows = this.resultTable.getElementsByTagName('tr');
      const columnIndex = getIndexOfString(this.id);
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('td')[columnIndex];
        y = rows[i + 1].getElementsByTagName('td')[columnIndex];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

}
