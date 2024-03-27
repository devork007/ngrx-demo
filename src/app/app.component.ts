import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBookList } from './store/book/book.selectors';
import { BookModel } from './store/book/book.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-demo-client';
  books$: Observable<BookModel[]>;
  constructor(private store: Store) {
    this.books$ = this.store.select(selectBookList);
  }
}
