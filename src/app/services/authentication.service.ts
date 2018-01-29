import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {getUserUrl} from '../utils/urls';

@Injectable()
export class AuthenticationService {

  valueforAuth = false;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  loginUser(user: User): Observable<User> {
    return this.http.get(getUserUrl + '/' + user.name + '/' + user.pass)
      .pipe(tap( data => this.log(data)), catchError(this.handleErrorObservable));
  }

  setValid(value){
    this.valueforAuth = value
  }

  isValid(){
    return this.valueforAuth
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
