import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
  }

  posts = (): Observable<any> => {
    return this.http.get(this.baseUrl)
  }


}
