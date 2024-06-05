import {createReducer, on} from '@ngrx/store';
import {PostsActions} from './posts.actions';
import {Post} from "./posts.model";

export const postsFeatureKey = 'posts';

export interface State {
  posts: ReadonlyArray<Post>;
  loading: boolean;
  post: Post;
}

export const initialState: State = {
  posts: [],
  loading: false,
  post: {body: '', title: ''}
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
  on(PostsActions.addPostSuccess, (state, {post}) => ({
    ...state,
    loading: false,
    post: {
      ...state.post,
      ...post
    }
  }))
);

