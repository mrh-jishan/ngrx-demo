import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPostComponent} from "./add-post/add-post.component";
import {ListPostComponent} from "./list-post/list-post.component";
import {PostLayoutComponent} from "./post-layout/post-layout.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {postsResolver} from "./posts.resolver";

const routes: Routes = [
  {
    path: '',
    component: PostLayoutComponent,
    providers: [],
    children: [
      {
        path: '',
        component: ListPostComponent
      },
      {
        path: 'new',
        component: AddPostComponent
      },
      {
        path: ':id',
        component: EditPostComponent,
        resolve: {
          post: postsResolver
        }
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
