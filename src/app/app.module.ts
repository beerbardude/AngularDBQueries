import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { QueryPageComponent } from './query-page/query-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    QueryPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [AuthenticationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
