import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = {} as User
  wrongCredential : boolean = false
  
  constructor(private userService: UserService, 
            private router: Router) { }

  ngOnInit(): void { }

  login() {
    const logged = this.userService.doLogin(this.user)
    if (logged) {
      this.userService.setLoggedUser(logged)
      this.router.navigate(['/feed'])
    } else {
      this.wrongCredential = true
    }
  }

}
