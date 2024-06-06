import {createReducer, on} from '@ngrx/store';
import {PostsActions} from './posts.actions';
import {Post} from "./posts.model";

export const postsFeatureKey = 'posts';

export interface State {
  posts: ReadonlyArray<Post>;
  loading: boolean;
  post?: Post;
  postId?: number;
}

export const initialState: State = {
  posts: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({
    ...state,
    loading: true,
  })),
  on(PostsActions.loadPostsSuccess, (state, {posts}) => ({
    ...state,
    posts,
    loading: false,
  })),
  on(PostsActions.removePost, (state, {postId}) => ({
    ...state,
    loading: false,
  })),
  on(PostsActions.initAddPost, (state, {post}) => ({
    ...state,
    loading: true,
    post
  })),
  on(PostsActions.addPostSuccess, (state, {post}) => {
    return ({
      ...state,
      loading: false,
      post,
    });
  }),
  on(PostsActions.loadPost, (state, {postId}) => ({
    ...state,
    loading: true,
    post: undefined,
    postId
  })),
  on(PostsActions.loadPostSuccess, (state, {post}) => {
    return ({
      ...state,
      loading: false,
      post,
    });
  })
);

