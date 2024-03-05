import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {Todo, TodoAction} from "./common/iTodo";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";
import {MatList, MatListItem} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TodoListComponent,
    TodoFormComponent,
    MatCard,
    MatCardContent,
    MatDivider,
    HttpClientModule,
    MatList,
    MatListItem],
  templateUrl: './app.component.html',
  providers: [AppService],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  selectedTodo: Todo | undefined;

  todos$: Observable<Todo[]> = of([]);

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {

  }


  todoEvent(todoAction: TodoAction) {
    this.todos$ = this.appService.todos()

    // if (todoAction.type == 'create') {
    //   this.todos.push({
    //     ...todoAction.todo,
    //     id: new Date().getTime()
    //   })
    // }
    console.log('todoAction: ', todoAction)
    // if (todoAction.type == 'update') {
    //   const updatedTodos = this.todos.map(t => {
    //     if (t.id == todoAction.todo.id) {
    //       const {title, content, isDone} = todoAction.todo
    //       return {
    //         ...t,
    //         title: title,
    //         content: content,
    //         isDone: isDone
    //       }
    //     } else {
    //       return t
    //     }
    //   })
    //   console.log('this.todos = : ', updatedTodos)
    //   this.todos = updatedTodos;
    // }
  }

  todoSelectedEvent(todo: Todo) {
    this.selectedTodo = todo
  }
}
