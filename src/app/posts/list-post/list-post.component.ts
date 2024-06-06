import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {map, Observable} from "rxjs";
import {Post} from "../../state/posts/posts.model";
import {Store} from "@ngrx/store";
import {PostsActions} from "../../state/posts/posts.actions";
import {allPosts} from "../../state/posts/posts.selectors";
import {AppState} from "../../state";
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatList,
    MatListItem,
    MatIcon,
    MatListSubheaderCssMatStyler,
    MatDivider,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
  ],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent implements OnInit, AfterViewInit {

  posts$: Observable<readonly Post[]> = this.store.select(allPosts);
  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<Post>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.loadPosts());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.posts$.pipe(map(post => {
      this.dataSource.data = [...post];
    })).subscribe();
  }

}
