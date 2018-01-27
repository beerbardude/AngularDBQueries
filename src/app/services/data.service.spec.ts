import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {MessageService} from './message.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, HttpClientModule, HttpClient, HttpHandler, MessageService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
