import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/store/book/book.state';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() book: BookModel;
  constructor() {}

  ngOnInit(): void {}
}
