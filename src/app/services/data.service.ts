import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { Policy } from '../models/policy';
import { CustomerWithPolicy } from '../models/customerWithPolicy';


@Injectable()
export class DataService {

  private getCustomersUrl = 'http://localhost:3000/customers';
  private getPoliciesUrl = 'http://localhost:3000/policies';
  private getCustomerWithPoliciesUrl = 'http://localhost:3000/customerswithpolicies';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.getCustomersUrl)
      .pipe(tap( data => this.log(data)), catchError(this.handleErrorObservable));
  }

  getPolicies (): Observable<Policy[]> {
    return this.http.get(this.getPoliciesUrl)
      .pipe(tap( data => this.log(data)), catchError(this.handleErrorObservable));
  }

  getCustomerWithPolicies (): Observable<CustomerWithPolicy[]> {
    return this.http.get(this.getCustomerWithPoliciesUrl)
      .pipe(tap( data => this.log(data)), catchError(this.handleErrorObservable));
  }

  handleErrorObservable (error: Response | any) {
    return Observable.throw(error.message || error);
  }

  log(message: any) {
    if (message.code !== undefined) {
      this.messageService.add(message.code);
    }
  }

}
