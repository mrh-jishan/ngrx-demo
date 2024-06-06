import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../../state/posts/posts.model";
import {Store} from "@ngrx/store";
import {PostsActions} from "../../state/posts/posts.actions";
import {allPosts} from "../../state/posts/posts.selectors";
import {AppState} from "../../state";
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatList,
    MatListItem,
    MatIcon,
    MatListSubheaderCssMatStyler,
    MatDivider,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
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
