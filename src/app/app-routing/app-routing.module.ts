import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { QueryPageComponent } from '../query-page/query-page.component';
import { AuthenticationGuardService } from '../services/authentication-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'queries', component: QueryPageComponent, canActivate: [AuthenticationGuardService] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthenticationGuardService ]
})
export class AppRoutingModule {}
