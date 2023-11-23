import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <my-login-form (menu)='open($event)'>Your Form</my-login-form>
  
  <my-login-form [error]="'Username or password invalid'" (menu)='open($event)'>Your Form With Error Message</my-login-form>
  `,
  styles: []
})
export class AppComponent  {
  title = 'angularFrontEndClient';
}