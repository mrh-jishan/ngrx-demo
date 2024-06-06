import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Post} from "./posts.model";

export const PostsActions = createActionGroup({
  source: 'Posts API',
  events: {
    loadPost: props<{ postId: number }>(),
    loadPostSuccess: props<{ post: Post }>(),

    loadPosts: emptyProps(),
    loadPostsSuccess: props<{ posts: ReadonlyArray<Post> }>(),

    initAddPost: props<{ post: Post}>(),
    addPostSuccess: props<{ post: Post }>(),

    initEditPost: props<{ postId: number , post: Post}>(),
    editPostSuccess: props<{ post: Post }>(),

    removePost: props<{ postId: number }>(),
    removePostSuccess: emptyProps(),

    hasFailed: props<{ error: unknown }>(),
  }
});
