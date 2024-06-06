import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../state/posts/posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) {
  }

  getAll = (): Observable<Post[]> => {
    return this.http.get<Post[]>(this.baseUrl)
  }

  createPost = (post: Post): Observable<Post> => {
    return this.http.post<Post>(this.baseUrl, post)
  }

  getPost = (postId: number): Observable<Post> => {
    return this.http.get<Post>(`${this.baseUrl}/${postId}`)
  }

  editPost = (postId: number, post: Post): Observable<Post> => {
    return this.http.patch<Post>(`${this.baseUrl}/${postId}`, post)
  }

  deletePost = (postId: number): Observable<Post> => {
    return this.http.delete<Post>(`${this.baseUrl}/${postId}`)
  }


}
