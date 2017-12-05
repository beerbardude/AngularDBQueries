import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { MessageService } from '../services/message.service';
import { User } from '../models/user';
import { QueryPageComponent } from '../query-page/query-page.component';
import { Observable } from 'rxjs/Observable';
import { ObservableInput } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    @Input() user : User;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private messageService: MessageService        
    ) { }

    ngOnInit(): void {
        this.user = new User();        
    }

    login() {
        let loginResult = this.authenticationService.login(this.user);
        this.redirect(loginResult);
    }

    redirect(data: any) {
        if(typeof data.value !== 'undefined') {
            this.redirectTo('queries', '');
        }
        else {
            let inputName = document.getElementById('inputName');
            let inputPass = document.getElementById('inputPass');
            inputName.style.border = '1px solid #f00';
            inputPass.style.border = '1px solid #f00';
            this.redirectTo('login', 'login error');
        }
    }

    redirectTo(routeString: string, message: string) {
        this.router.navigate([routeString]);
        this.messageService.info(message);
    }
}
