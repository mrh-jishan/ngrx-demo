import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPostComponent} from "./add-post/add-post.component";
import {ListPostComponent} from "./list-post/list-post.component";
import {PostLayoutComponent} from "./post-layout/post-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PostLayoutComponent,
    providers: [],
    children: [
      {
        path: 'list',
        component: ListPostComponent
      },
      {
        path: 'add',
        component: AddPostComponent
      },
      {
        path: '',
        redirectTo: 'list',
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
