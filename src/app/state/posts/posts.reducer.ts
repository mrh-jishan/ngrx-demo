import {createReducer, on} from '@ngrx/store';
import {PostsActions} from './posts.actions';
import {Post} from "./posts.model";

export const postsFeatureKey = 'posts';

export interface State {
  posts: ReadonlyArray<Post>;
  loading: boolean;
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
  on(PostsActions.removePost, (state, {postId}) => {
    // state.filter((id) => id !== bookId)
    return {
      ...state,
      loading: false,
      // posts: [...state.posts]
    };
  }),
  on(PostsActions.addPost, (state, {postId}) => {
    // if (state.indexOf(bookId) > -1) return state;
    return {
      ...state,
      loading: false,
      // posts: [...state.posts]
    };
  })
);

