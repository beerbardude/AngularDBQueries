import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationGuardService } from './authentication-guard.service';
import {AuthenticationService} from './authentication.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {MessageService} from './message.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('AuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      providers: [AuthenticationGuardService, AuthenticationService, HttpClient, HttpClientModule, HttpHandler, MessageService]
    });
  });

  it('should be created', inject([AuthenticationGuardService], (service: AuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
