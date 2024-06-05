import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {Store} from "@ngrx/store";
import {AppState} from "../../state";
import {PostsActions} from "../../state/posts/posts.actions";

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatInput,
    MatFormField,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardHeader
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {

  constructor(private _fb: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {

  }

  form: FormGroup = this._fb.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required, Validators.minLength(125)]]
  })

  submitPost($event: MouseEvent) {
    this.store.dispatch(PostsActions.initAddPost({post: this.form.value}));
  }
}
