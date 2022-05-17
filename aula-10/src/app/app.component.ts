import { Component } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postList : Post[] = []
  projectId = '29fa8892-241b-49a9-be59-b4af497257d0'

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts(this.projectId).subscribe(items => {
      this.postList = items
    })
  }

}
