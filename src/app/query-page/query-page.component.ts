import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataTableResource } from '../utils/data-table';

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.css']
})
export class QueryPageComponent implements OnInit {
  id: any;
  index: number;

  itemResource: any;
  items = [];
  itemCount = 0;

  customerTable: HTMLElement;
  policyTable: HTMLElement;
  customerPolicyTable: HTMLElement;

  constructor(private dataService : DataService) {}

  ngOnInit() {
    this.customerTable = document.getElementById('customer-grid');
    this.policyTable = document.getElementById('policy-grid');
    this.customerPolicyTable = document.getElementById('customer-policy-grid');
    this.hideTables();
  }

  hideTables() {
    this.customerTable.style.display = 'none';
    this.policyTable.style.display = 'none';
    this.customerPolicyTable.style.display = 'none';
  }

  showTable(table: HTMLElement) {
    table.style.display = '';
  }

  showCustomers(): void {
    this.dataService.getCustomers().subscribe(customers => {
      this.hideTables();
      this.showTable(this.customerTable);
      this.createDatatableResourceAndCount(customers);
      this.reloadItems(this.itemResource);
    });
  }

  reloadItems(params) {
    if (this.itemResource !== undefined) {
      this.itemResource.query(params).then(items => {this.items = items});
    }
  }

  showPolicies() {
    this.dataService.getPolicies().subscribe(policies => {
      this.hideTables();
      this.showTable(this.policyTable);
      this.createDatatableResourceAndCount(policies);
      this.reloadItems(this.itemResource);
    });
  }

  showCustomerWithPolcies() {
    this.dataService.getCustomerWithPolicies().subscribe(customersWithPolcies => {
      this.hideTables();
      this.showTable(this.customerPolicyTable);
      this.createDatatableResourceAndCount(customersWithPolcies);
      this.reloadItems(this.itemResource);
    });
  }

  createDatatableResourceAndCount(values) {
    this.itemResource = new DataTableResource(values);
    this.itemResource.count().then(count => this.itemCount = count);
  }

}
