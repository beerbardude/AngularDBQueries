import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { USERS } from '../db/mock/mock-users';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

  constructor(
  ) { }

  login(loginUser: User): Observable<User>{
    return of(USERS.find(user => user.name === loginUser.name &&
                                       user.pass === loginUser.pass));
  }

}
