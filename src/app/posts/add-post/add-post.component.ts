import { Component } from '@angular/core';
import {PostsFormComponent} from "../posts-form/posts-form.component";

@Component({
  selector: 'app-add-post',
  standalone: true,
    imports: [
        PostsFormComponent
    ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

}
