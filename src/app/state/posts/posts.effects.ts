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

  createPost$ = createEffect(() => this.actions$.pipe(
      ofType(PostsActions.initAddPost),
      exhaustMap((action) => this.postsService.createPost(action.post)
        .pipe(
          map(post => PostsActions.addPostSuccess({post})),
          map(() => PostsActions.loadPosts()),
          catchError(() => EMPTY)
        ))
    ),
  );

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPost),
      exhaustMap((action) => this.postsService.getPost(action.postId)
        .pipe(
          map(post => PostsActions.loadPostSuccess({post})),
          catchError(() => EMPTY)
        ))
    )
  );

  editPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.initEditPost),
      exhaustMap((action) => this.postsService.editPost(action.postId, action.post)
        .pipe(
          map(post => PostsActions.editPostSuccess({post})),
          map(() => PostsActions.loadPosts()),
          catchError(() => EMPTY)
        ))
    )
  );


  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.removePost),
      exhaustMap((action) => this.postsService.deletePost(action.postId)
        .pipe(
          map(() => PostsActions.removePostSuccess()),
          map(() => PostsActions.loadPosts()),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(private actions$: Actions,
              private postsService: PostsService) {
  }
}
