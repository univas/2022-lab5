import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  userPassword = ''

  constructor() { }

  ngOnInit(): void {
  }

  doLogin() {
    console.log('ola')
    console.log(this.username)
    console.log(this.userPassword)
  }
}
