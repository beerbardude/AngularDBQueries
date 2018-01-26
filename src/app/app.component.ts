import { Component } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Database Queries';
  showComponent;

  constructor(
    private router: Router
  ) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart){
        this.showComponent = event.url !== "/queries";
      }
    })
/*    if (this.router.url === '/queries') {
      this.showComponent = false;}*/
  }

  goToLogin() {
    this.router.navigate(['login']);
  }


}
