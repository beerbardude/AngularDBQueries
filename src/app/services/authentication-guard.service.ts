import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";


@Injectable()
export class AuthenticationGuardService {

  constructor(private auth: AuthenticationService, private router: Router) {}

  //TODO: canActivate so ergänzen, dass nach erfolgreichem Login bei Refresh Session gültig bleibt

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.auth.isValid()) {
      console.log("What the fuck is going on??")
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      })
    }
    console.log("yeah authenticated")
    return false;
    }

}
