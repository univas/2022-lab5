import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://news-api-node.herokuapp.com/api/v1/news/'

  constructor(private http: HttpClient) { }

  getPosts(projectUUID: string) : Observable<Post[]> {
    return this.http.get<Post[]>(this.url + projectUUID)
  }

  save(post: Post, projectUUID: string) : Observable<Post> {
    return this.http.post<Post>(this.url + projectUUID, post)
  }

  delete(projectUUID: string, postId: number) : Observable<Post> {
    return this.http.delete<Post>(this.url + projectUUID + "/" + postId)
  }
}
