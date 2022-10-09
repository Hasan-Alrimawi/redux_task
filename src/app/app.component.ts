import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "best-practices";
  temp = new User("Hasan", "Rimawi", "hasan.alrimawi@exalt.ps");
}
export class User {
  firstName: string;
  lastName: string;
  email: string;
  constructor(firstName: string, lastName: string, email: string) {
    this.email = email;
    this.lastName = lastName;
    this.firstName = firstName;
  }
}