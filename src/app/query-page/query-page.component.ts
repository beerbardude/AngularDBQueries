import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../db/mock/mock-customers';
import { POLICIES } from '../db/mock/mock-policies';
import { USERS } from '../db/mock/mock-users';
import { forEach } from '@angular/router/src/utils/collection';
import { headersToString } from 'selenium-webdriver/http';
import { validateConfig } from '@angular/router/src/config';
import { User } from '../models/user';
import { Input } from '@angular/core/src/metadata/directives';
import { formatValue } from '../utils/formatUtils';
import { getIndexOfString, createTableCellWithValue, clearHtmlElement, createTableRowWithValues } from './query-page.utils';
import { addLinkStyle } from './query-page.style';

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.css']
})
export class QueryPageComponent implements OnInit {
  id: any;
  index: number;
  resultTable: HTMLElement;
  objects: any[];
  
  htmlTableRowTag = 'tr';
  htmlTableCellTag = 'td';
  htmlLinkTag = 'a';
  resultTableId = 'resultTable';

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

  renderQueryResults(results: any) {
    this.resultTable = document.getElementById(this.resultTableId);
    clearHtmlElement(this.resultTable);
    this.resultTable.appendChild(this.makeHeadingTableElements(results)); 
    for (let index = 0; index < results.length; index++){
      this.resultTable.appendChild(createTableRowWithValues(results, index));
    }
  }

  makeHeadingTableElements(objects: any[]): HTMLElement {
    let tr = document.createElement(this.htmlTableRowTag);
    this.index = 0;
    for (let attribute in objects[0]){
      let th = document.createElement('th');
      th.appendChild(this.createSortLink(attribute));
      tr.appendChild(th);
      this.index++;
    }    
    return tr;
  } 

  createSortLink(text: string): HTMLElement {
    let link = document.createElement(this.htmlLinkTag);
    link.id = this.index.toString();
    link.addEventListener('click', this.sortTable);
    link.innerHTML = text;
    addLinkStyle(link);
    return link;
  }

  sortTable() {
    this.resultTable = document.getElementById("resultTable");
    let  rows, switching, i, x, y, shouldSwitch;
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = this.resultTable.getElementsByTagName("tr");
      /*Loop through all resultTable rows (except the
      first, which contains resultTable headers):*/

      let columnIndex = getIndexOfString(this.id);
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[columnIndex];
        y = rows[i + 1].getElementsByTagName("td")[columnIndex];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

}
