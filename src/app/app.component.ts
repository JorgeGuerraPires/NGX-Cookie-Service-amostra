import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  cookieValue;

  constructor(private cookieService: CookieService
  ) {
    this.cookieService.set('Test', 'Hello World, this is Jorge Guerra Pires talking to you');
    this.cookieValue = this.cookieService.get('Test');
  }


}
