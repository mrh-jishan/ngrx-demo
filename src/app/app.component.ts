import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule, StoreRootModule} from "@ngrx/store";
import {appFeatureKey, reducer} from "./state";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    RouterLink,
    MatToolbar,
    MatAnchor,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  providers: [],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
