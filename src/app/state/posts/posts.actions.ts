import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Post} from "./posts.model";

export const PostsActions = createActionGroup({
  source: 'Posts API',
  events: {
    loadPosts: emptyProps(),
    loadPostsSuccess: props<{ posts: ReadonlyArray<Post> }>(),
    loadPostsFailed: props<{ error: unknown }>(),
    initAddPost: props<{ post: Post}>(),
    addPostSuccess: props<{ post: Post }>(),
    removePost: props<{ postId: number }>(),
  }
});
