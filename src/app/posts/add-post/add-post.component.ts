import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../state";
import {PostsActions} from "../../state/posts/posts.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  constructor(private _fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router) {
  }

  form: FormGroup = this._fb.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required, Validators.minLength(10)]]
  })

  submitPost() {
    this.store.dispatch(PostsActions.initAddPost({post: this.form.value}));
    this.form.reset();
    this.router.navigateByUrl('/posts').then(console.debug)
  }
}
