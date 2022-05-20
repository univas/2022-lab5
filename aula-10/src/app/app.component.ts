import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postList  : Post[] = []
  newPost   : Post = {} as Post
  projectId = '29fa8892-241b-49a9-be59-b4af497257d0'

  constructor(private service: PostService) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.service.getPosts(this.projectId).subscribe(items => {
      this.postList = items
    })
  }

  save(myForm: NgForm) {
    this.newPost.project_uuid = this.projectId
    this.service.save(this.newPost, this.projectId).subscribe(() => {
      myForm.resetForm()
      this.newPost = {} as Post
      this.loadData()
    })
  }

  delete(postId: number) {
    this.service.delete(this.projectId, postId).subscribe(() => {
      this.loadData()
    })
  }
}
