import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = []
  userLogged: User = {} as User

  constructor() { }

  addUser(user: User) {
    this.userList.push(user)
  }

  findAll() {
    return this.userList.filter(user => user.username !== this.userLogged.username)
  }

  doLogin(userToLogin: User) {
    return this.userList.find(
      u => u.username === userToLogin.username && u.password === userToLogin.password
    )
  }

  setLoggedUser(user: User) {
    this.userLogged = user
  }

  getUserLogged() {
    return this.userLogged
  }
}
