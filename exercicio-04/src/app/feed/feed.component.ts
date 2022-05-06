import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  currentUser : User = {} as User
  postContent: string = ''
  feed : Post[] = []

  constructor(private userService: UserService,
            private postService: PostService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getUserLogged()
    this.loadPosts()
  }

  doLogout() {
    this.userService.setLoggedUser({} as User)
  }

  doPost() {
    let post = {} as Post
    post.content = this.postContent
    post.username = this.currentUser.username
    post.date = new Date()
    this.postService.addPost(post)

    alert('Post realized successfully')
    this.postContent = ''
    this.loadPosts()
  }

  loadPosts() {
    this.feed = this.postService.retrievePosts(this.currentUser)
  }
}
