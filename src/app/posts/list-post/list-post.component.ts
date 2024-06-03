import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../../state/posts/posts.model";
import {Store} from "@ngrx/store";
import {PostsActions} from "../../state/posts/posts.actions";

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent implements OnInit {


  posts$: Observable<Post[]> = this.store.select(state => state.posts);

  constructor(private store: Store<{ posts: Post[] }>) {
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.loadPosts());
  }

}
