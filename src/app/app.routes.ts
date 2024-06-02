import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
