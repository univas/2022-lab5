import { Injectable } from '@angular/core';
import { Post } from './post';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList : Post[] = []

  constructor() { }

  addPost(post: Post) {
    this.postList.push(post)
  }

  retrievePosts(user: User) {
    let posts = []
    for (let i = 0; i < this.postList.length; i++) {
      let post = this.postList[i]
      if (post.username == user.username || (user.followers && user.followers.findIndex(u => u.username === post.username) > -1)) {
        posts.push(post)
      }
    }
    return posts
  }
}
