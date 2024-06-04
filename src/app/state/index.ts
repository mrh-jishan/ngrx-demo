import {combineReducers, createReducer, on} from '@ngrx/store';
import * as fromPost from './posts/posts.reducer';

export const appFeatureKey = 'app';

export interface AppState {
  [fromPost.postsFeatureKey]: fromPost.State;
}

export const appState: AppState = {
  [fromPost.postsFeatureKey]: fromPost.initialState
};

export const reducer = combineReducers(
  {
    ...appState,
    [fromPost.postsFeatureKey]: fromPost.reducer
  }
);

