import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-post-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatToolbar,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './post-layout.component.html',
  styleUrl: './post-layout.component.css'
})
export class PostLayoutComponent {

}
