import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/store/book/book.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() bookList: BookModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
