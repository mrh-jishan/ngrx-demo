import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsLayoutComponent} from "./posts-layout/posts-layout.component";
import {PostsListComponent} from "./posts-list/posts-list.component";
import {PostsAddComponent} from "./posts-add/posts-add.component";
import {PostsEditComponent} from "./posts-edit/posts-edit.component";


const routes: Routes = [
  {
    path: '',
    component: PostsLayoutComponent,
    children: [
      {
        path: 'list',
        component: PostsListComponent
      },
      {
        path: 'add',
        component: PostsAddComponent
      },
      {
        path: 'edit/:id',
        component: PostsEditComponent
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
