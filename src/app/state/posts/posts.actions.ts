import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Post} from "./posts.model";

export const PostsActions = createActionGroup({
  source: 'Posts API',
  events: {
    loadPosts: emptyProps(),
    loadPostsSuccess: props<{ posts: ReadonlyArray<Post> }>(),
    loadPostsFailed: props<{ error: unknown }>(),
    addPost: props<{ postId: number }>(),
    removePost: props<{ postId: number }>(),
  }
});
