import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, EMPTY, exhaustMap, map} from "rxjs";
import {PostsService} from "../../posts/posts.service";
import {PostsActions} from "./posts.actions";

@Injectable()
export class PostsEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      exhaustMap(() => this.postsService.getAll()
        .pipe(
          map(posts => PostsActions.loadPostsSuccess({posts})),
          catchError(() => EMPTY)
        ))
    ),
  );

  constructor(private actions$: Actions,
              private postsService: PostsService) {
  }
}
