import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = []

  constructor() { }

  getAll() {
    return this.userList
  }

  addUser(user: User) {
    this.userList.push(user)
  }

  getUserById(id: number) {
    return this.userList.find(u => u.id === id)
  }
}
