import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../db/mock/mock-customers';
import { POLICIES } from '../db/mock/mock-policies';
import { USERS } from '../db/mock/mock-users';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.css']
})
export class QueryPageComponent implements OnInit {

  objects: any[];

  constructor() { }

  ngOnInit() {
  }

  getCustomers() {
    this.objects = CUSTOMERS;
  }

  getPolicies() {
    this.objects = POLICIES;
  }

  getUsers() {
    this.objects = USERS;
  }

}
