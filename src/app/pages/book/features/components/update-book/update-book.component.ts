import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createBook, updateBook } from 'src/app/store/book/book.actions';
import { BookModel } from 'src/app/store/book/book.state';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  handleSubmit(data: BookModel) {
    this.store.dispatch(createBook({ book: data }));
  }
}
