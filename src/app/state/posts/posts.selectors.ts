import {createFeatureSelector, createSelector} from '@ngrx/store';
import {appFeatureKey, AppState} from "../index";
import {postsFeatureKey} from "./posts.reducer";

export const selectFeature = createFeatureSelector<AppState>(appFeatureKey);

export const posts = createSelector(
  selectFeature, (state) => state[postsFeatureKey]
);

export const allPosts = createSelector(
  posts, (state) => state.posts
);

