import { Component } from '@angular/core';
import {PostsFormComponent} from "../posts-form/posts-form.component";

@Component({
  selector: 'app-edit-post',
  standalone: true,
    imports: [
        PostsFormComponent
    ],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {

}
