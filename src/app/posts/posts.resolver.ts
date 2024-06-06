import {ResolveFn} from '@angular/router';
import {Store} from "@ngrx/store";
import {AppState} from "../state";
import {filter, finalize, first} from "rxjs";
import {PostsActions} from "../state/posts/posts.actions";
import {selectPost} from "../state/posts/posts.selectors";
import {inject} from "@angular/core";
import {Post} from "../state/posts/posts.model";

export const postsResolver: ResolveFn<Post> = (route, state) => {

  const store = inject(Store<AppState>)
  const postId = Number(route.paramMap.get('id'));
  store.dispatch(PostsActions.loadPost({postId}));

  return store.select(selectPost)
    .pipe(
      filter((post): post is Post => !!post),  // Type guard to ensure post is not undefined
      first(),  // Complete the observable after the first emission
      finalize(() => {
        console.log('Post Resolver completed');
      })
    );
};
