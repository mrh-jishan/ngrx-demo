import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../state";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsActions} from "../../state/posts/posts.actions";
import {Post} from "../../state/posts/posts.model";

@Component({
  selector: 'app-edit-post',
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
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  constructor(private _fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({post}) => {
      this.form.patchValue(post)
    });
  }

  form: FormGroup = this._fb.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required, Validators.minLength(10)]]
  })

  editPost() {
    this.store.dispatch(PostsActions.initEditPost({
      postId: Number(this.activatedRoute.snapshot.paramMap.get('id')),
      post: this.form.value
    }));
    this.form.reset();
    this.router.navigateByUrl('/posts').then(console.debug)
  }

}
