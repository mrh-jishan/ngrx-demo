import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./common/iTodo";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  todos = () => {
    return this.http.get<Todo[]>('/todos')
  }

  todoCreate = (todo: Todo) => {
    return this.http.post<Todo>('/todos', todo)
  }

  todoUpdate = (id: string, todo: Todo) => {
    return this.http.patch<Todo>(`/todos/${id}`, todo)
  }

  todoDelete = (id: string) => {
    return this.http.delete<Todo>(`/todos/${id}`)
  }
}
