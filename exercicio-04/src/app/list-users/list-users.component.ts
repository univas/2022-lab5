import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users : User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.findAll()
  }

  follow(user: User) {
    let currentUser = this.userService.getUserLogged()
    if (!currentUser.followers) {
      currentUser.followers = []
    }
    currentUser.followers.push(user)
  }

  unfollow(user: User) {
    let index = this.userService.getUserLogged().followers.findIndex(u => u.username === user.username)
    this.userService.getUserLogged().followers.splice(index, 1)
  }

  isCurrentFollow(user: User) {
    let followers = this.userService.getUserLogged().followers
    if (!followers) {
      return false
    }

    let index = followers.findIndex(u => u.username === user.username)
    return index > -1
  }
}
