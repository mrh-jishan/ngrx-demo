import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {StoreRootModule} from "@ngrx/store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    RouterLink,
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
