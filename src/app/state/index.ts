import {createReducer, on} from '@ngrx/store';
import * as fromPost from './posts/posts.reducer';

export const appFeatureKey = 'app';

export interface State {
  [fromPost.postsFeatureKey]: fromPost.State;
}

export const initialState: State = {
  [fromPost.postsFeatureKey]: fromPost.initialState
};

export const reducer = createReducer(
  initialState,
);

