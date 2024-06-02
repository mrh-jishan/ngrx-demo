import { Component } from '@angular/core';
import {PostsFormComponent} from "../posts-form/posts-form.component";

@Component({
  selector: 'app-posts-add',
  standalone: true,
    imports: [
        PostsFormComponent
    ],
  templateUrl: './posts-add.component.html',
  styleUrl: './posts-add.component.css'
})
export class PostsAddComponent {

}
