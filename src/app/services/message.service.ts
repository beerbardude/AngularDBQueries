import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  messages: string[] = [];

  constructor() {}

  add(message: string) {
    this.messages.push(message);
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message});
  }

  error(message: string) {
    this.messages.push(message);
  }

  info(data: string) {
    this.messages.push(data);
  }

  clear() {
    this.messages = [];
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
