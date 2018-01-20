import { Injectable } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Customer } from '../models/customer';
import { Policy } from '../models/policy';
import { CustomerWithPolicy } from '../models/customerWithPolicy';
import { User } from '../models/user';
 

@Injectable()
export class DataService {
 
  private getUsersUrl = 'http://localhost:3000/user';
  private getCustomersUrl = 'http://localhost:3000/customers';
  private getPoliciesUrl = 'http://localhost:3000/policies';
  private getCustomerWithPoliciesUrl = 'http://localhost:3000/customerswithpolicies';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.getCustomersUrl)
      .pipe(catchError(this.handleError('getCustomers', [])));
  }

  getPolicies (): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.getPoliciesUrl);
  }

  getCustomerWithPolicies (): Observable<CustomerWithPolicy[]> {
    return this.http.get<CustomerWithPolicy[]>(this.getCustomerWithPoliciesUrl);
  }


  private handleError<T> (operation, result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.name}`);
      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add('DataService: ' + message);
  }
  
}
