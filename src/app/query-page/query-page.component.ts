import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../db/mock/mock-customers';
import { POLICIES } from '../db/mock/mock-policies';
import { USERS } from '../db/mock/mock-users';
import { forEach } from '@angular/router/src/utils/collection';
import { headersToString } from 'selenium-webdriver/http';
import { validateConfig } from '@angular/router/src/config';
import { User } from '../models/user';
import { Input } from '@angular/core/src/metadata/directives';
import { formatValue } from './formatUtils';

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.css']
})
export class QueryPageComponent implements OnInit {
  resultTable: HTMLElement;
  objects: any[];
  
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
    
    link.addEventListener('click', this.sortTable);
    
    link.innerHTML = text;
    return link;
  }

  renderQueryResults(objects: any) {
    this.resultTable = document.getElementById('resultTable');
    this.resultTable.innerHTML = '';
    this.resultTable.appendChild(this.makeHeadingTableElements(objects));
    
    for (let index = 0; index < objects.length; index++){
      let tr = document.createElement('tr');
      let obj = objects[index];
      for (let key in obj){        
        let td = document.createElement('td');
        let value = formatValue(obj[key]);
        td.innerHTML = value;
        tr.appendChild(td);      
      }
      this.resultTable.appendChild(tr);
    }      
  }


  sortTable() {
    let  rows, switching, i, x, y, shouldSwitch;
    this.resultTable = document.getElementById("result");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = this.resultTable.getElementsByTagName("TR");
      /*Loop through all resultTable rows (except the
      first, which contains resultTable headers):*/

      let columnIndex = this.getIndexOfString('name');
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[columnIndex];
        y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
        //check if the two rows should switch place:
        console.log(x.innerHTML, ' > ' , y.innerHTML);
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

  getIndexOfString(name: string): number {
    if(name === 'name') {
      return 1;
    }
  }
  
}
