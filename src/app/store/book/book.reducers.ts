import { createReducer, on } from '@ngrx/store';
import { initialBookState } from './book.state';
import * as BookActions from './book.actions';
import { stat } from 'fs';

export const bookReducer = createReducer(
  initialBookState,
  on(BookActions.getBooks, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(BookActions.createBook, (state, action) => {
    return {
      ...state,
      bookList: [...state.bookList, action.book],
      totalAmount: state.totalAmount + action.book.price * action.book.quantity,
      totalBooks: state.totalBooks + Number(action.book.quantity),
    };
  }),
  on(BookActions.getBooksSuccess, (state, action) => {
    let totalBooks = 0;
    let totalAmount = 0;
    action.books.map((data) => {
      totalBooks += data.quantity;
      totalAmount += data.price * data.quantity;
    });
    return {
      ...state,
      isLoading: false,
      bookList: action.books,
      totalAmount: totalAmount,
      totalBooks: totalBooks,
    };
  }),

  on(BookActions.getBooksFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

  on(BookActions.clearSelectedBook, (state, action) => {
    return {
      ...state,
      activeBookId: null,
    };
  }),
  on(BookActions.selectBook, (state, action) => {
    return {
      ...state,
      activeBookId: action.bookId,
    };
  }),
  on(BookActions.updateBook, (state, action) => {
    let books = [...state.bookList];
    books.filter((book) => book.bookId != action.bookId);

    return {
      ...state,
      bookList: [...books, action.book],
    };
  }),

  on(BookActions.deleteBook, (state, action) => {
    return {
      ...state,
      bookList: state.bookList.filter((book) => book.bookId != action.bookId),
    };
  })
);
