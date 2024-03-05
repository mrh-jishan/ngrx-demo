import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../common/iTodo";
import {MatListModule, MatSelectionListChange} from "@angular/material/list";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {CommonModule, NgIf} from "@angular/common";
import {Observable, of} from "rxjs";
import {AppService} from "../app.service";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCheckbox,
    MatIcon,
    MatButton,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  @Input('todos') todos$: Observable<Todo[]> = of([]);

  @Output("todoSelectedEvent") todoSelectedEvent = new EventEmitter<Todo>();

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.todos$ = this.appService.todos();
  }


  changeTodo($event: MatSelectionListChange) {
    this.todoSelectedEvent.emit($event.source.selectedOptions.selected[0].value)
  }
}
