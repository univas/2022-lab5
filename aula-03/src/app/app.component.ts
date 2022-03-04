import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myUser : User

  userDetailText = ''

  constructor() {
    this.myUser = {} as User
    this.myUser.name = "Rodrigo"
    this.myUser.email = "rodrigo@gmail.com"
    this.myUser.phone = "1234-1234"
  }

  updateUserDetailText(anyInformation: string) {
    this.userDetailText = anyInformation
  }
}
