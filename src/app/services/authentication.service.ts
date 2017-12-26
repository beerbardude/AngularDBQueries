import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { USERS } from '../db/mock/mock-users';
import { User } from '../models/user';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Injectable()
export class AuthenticationService {
  
  users = USERS;

  constructor(
  ) { }

  login(loginUser: User): Observable<User>{
    console.log(loginUser);
    

    let result = of(USERS.find(user => user.name === loginUser.name && 
                                       user.pass === loginUser.pass));
    
    return result;
    
    /* return this.http.post('/api/authenticate', JSON.stringify({ name: name, pass: pass }))
      .map((response: Response) => {
        let user = response.json();
        if(user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }); */
  }

  
  logout() {
    localStorage.removeItem('currentUser');
  }
}
