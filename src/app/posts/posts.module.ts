import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsRoutingModule} from './posts-routing.module';
import {PostsEffects} from "../state/posts/posts.effects";
import {provideHttpClient} from "@angular/common/http";
import {PostsService} from "./posts.service";
import {provideEffects} from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  providers: [
    provideHttpClient(),
    provideEffects(PostsEffects),
    PostsService,
  ]
})
export class PostsModule {
}
