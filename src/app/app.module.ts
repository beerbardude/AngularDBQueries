import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { QueryPageComponent } from './query-page/query-page.component';
import { DataService } from './services/data.service';
import {DataTableModule} from "./utils/data-table/index";
import { TableCustomerComponent } from './table-customer/table-customer.component';
import { TablePolicyComponent } from './table-policy/table-policy.component';
import { TableCustomerPolicyComponent } from './table-customer-policy/table-customer-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    QueryPageComponent,
    TableCustomerComponent,
    TablePolicyComponent,
    TableCustomerPolicyComponent,
  ],
  imports: [
    DataTableModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthenticationService, MessageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
