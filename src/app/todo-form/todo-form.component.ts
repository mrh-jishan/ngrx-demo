import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {Todo, TodoAction} from "../common/iTodo";
import {NgIf} from "@angular/common";
import {AppService} from "../app.service";

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    ReactiveFormsModule,
    FormsModule,
    MatCheckbox,
    NgIf
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnChanges {

  form = this._fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    isDone: [false],
  })

  @Input("selectedTodo") selectedTodo: Todo | undefined = undefined;
  @Output("todoEvent") todoEvent = new EventEmitter<TodoAction>();

  constructor(private _fb: FormBuilder, private appService: AppService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('selectedTodo: ', this.selectedTodo)
    if (this.selectedTodo) {
      this.form.patchValue(this.selectedTodo)
    }
  }

  addTodo($event: any) {
    if (this.selectedTodo && this.selectedTodo.id) {
      this.appService.todoUpdate(this.selectedTodo.id, this.form.value as Todo)
        .subscribe((data) => {
          console.log('data:', data)
        })
    } else {
      this.appService.todoCreate(this.form.value as Todo)
        .subscribe((data) => {
          console.log('data:', data)
        })
    }

    this.todoEvent.emit({
      type: this.selectedTodo ? 'update' : 'create',
    })
    this.form.reset();
    this.form.setErrors({})
    this.form.updateValueAndValidity();
  }

  deleteTodo($event: MouseEvent) {
    $event.preventDefault();
    if (this.selectedTodo && this.selectedTodo.id) {
      this.appService.todoDelete(this.selectedTodo?.id)
        .subscribe((data) => {
          console.log('data:', data)
          this.todoEvent.emit({
            type: 'deleted',
          })
          this.form.reset();
          this.form.setErrors({})
          this.form.updateValueAndValidity();
        })
    }
  }
}
