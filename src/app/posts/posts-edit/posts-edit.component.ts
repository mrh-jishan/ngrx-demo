import { Component } from '@angular/core';
import {PostsFormComponent} from "../posts-form/posts-form.component";

@Component({
  selector: 'app-posts-edit',
  standalone: true,
  imports: [
    PostsFormComponent
  ],
  templateUrl: './posts-edit.component.html',
  styleUrl: './posts-edit.component.css'
})
export class PostsEditComponent {

}
