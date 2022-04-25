import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newUser: User = {} as User
  userList: User[] = []

  constructor() { }

  ngOnInit(): void {
  }

  saveData(myForm: NgForm) {
    this.userList.push(this.newUser)
    this.newUser = {} as User
    myForm.resetForm()
  }
}
