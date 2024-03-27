import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { BookModel } from '../store/book/book.state';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  bookList: BookModel[] = [
    {
      bookId: 1,
      title: 'Ikigai',
      author: 'Hector Garcia',
      description: 'Book about lifestyle',
      price: 79,
      quantity: 20,
    },

    {
      bookId: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
      price: 99,
      quantity: 10,
    },
  ];

  getAllBooks(): Observable<BookModel[]> {
    return of(this.bookList).pipe(delay(2000));
  }
}
