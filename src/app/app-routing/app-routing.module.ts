import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { QueryPageComponent } from '../query-page/query-page.component';
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'queries', component: QueryPageComponent },
  { path: '**', redirectTo: ''}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}