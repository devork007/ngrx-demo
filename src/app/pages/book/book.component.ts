import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBooks, selectBook } from 'src/app/store/book/book.actions';
import { selectBookState } from 'src/app/store/book/book.selectors';
import { BookModel, BookState } from 'src/app/store/book/book.state';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books$: Observable<BookState>;
  bookList: BookModel[] = [];
  constructor(private store: Store) {
    this.books$ = this.store.select(selectBookState);
  }

  ngOnInit(): void {
    this.store.dispatch(getBooks());
  }
}
