import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../../state/posts/posts.model";
import {Store} from "@ngrx/store";
import {PostsActions} from "../../state/posts/posts.actions";
import {allPosts} from "../../state/posts/posts.selectors";
import {AppState} from "../../state";

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

  posts$: Observable<readonly Post[]> = this.store.select(allPosts);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.loadPosts());
  }

}
