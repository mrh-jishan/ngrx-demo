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
  on(PostsActions.loadPosts, (state) => {
    console.log('state--- : ', state)
    return {
      ...state,
      loading: true,
    };
  }),
  on(PostsActions.loadPostsSuccess, (state, data) => {
    console.log('posts--- : ', data)
    return {
      ...state,
      data,
      loading: false,
      // posts: [...posts]
    };
  }),
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

