import { Component } from '@angular/core';
import { User } from './user';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myUser : User

  constructor() {
    this.myUser = {} as User
    this.myUser.name = "Rodrigo"
  }
}
