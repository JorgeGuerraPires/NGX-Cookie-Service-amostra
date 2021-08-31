import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  cookieValue = '';

  constructor(private cookieService: CookieService
  ) {

    //this.setCookieConsent();

  }

  setCookieConsent() {
    this.cookieService.set('Cookie Consent', 'true');
    this.cookieValue = this.cookieService.get('Cookie Consent');

  }


}
