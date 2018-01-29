import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import {MessagesComponent} from '../messages/messages.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationService} from '../services/authentication.service';
import {MessageService} from '../services/message.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ LoginComponent, MessagesComponent ],
      providers: [ AuthenticationService , MessageService, HttpClientModule, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
