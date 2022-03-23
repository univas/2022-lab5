import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newPost: Post = {} as Post
  postList: Post[] = []

  saveData(form: NgForm) {
    this.postList.push(this.newPost)
    this.newPost = {} as Post
    form.resetForm()
  }

  loadImage(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = new FileReader()

      file.readAsDataURL(event.target.files[0])

      file.onload = () => {
        this.newPost.imageUrl = file.result as string
      }
    }
  }

}
