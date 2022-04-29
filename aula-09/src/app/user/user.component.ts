import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newUser: User = {} as User
  userList: User[] = []

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.userList = this.service.getAll()
  }

  saveData(myForm: NgForm) {
    this.newUser.id = (new Date()).getTime()
    this.service.addUser(this.newUser)
    this.newUser = {} as User
    myForm.resetForm()
  }
}
