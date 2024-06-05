import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../state/posts/posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
  }

  getAll = (): Observable<Post[]> => {
    return this.http.get<Post[]>(this.baseUrl)
  }

  createPost = (post: Post): Observable<Post> => {
    return this.http.post<Post>(this.baseUrl, post)
  }


}
