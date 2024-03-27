import { createAction, props } from '@ngrx/store';
import { BookModel } from './book.state';

export const getBooks = createAction('[Book] Get All Books');
export const getBooksSuccess = createAction(
  '[Book] Get Books Success',
  props<{ books: BookModel[] }>()
);
export const getBooksFailure = createAction(
  '[Book] Get Books Failure',
  props<{ error: string }>()
);

export const selectBook = createAction(
  '[Book] Select a Book',
  props<{ bookId: number }>()
);

export const clearSelectedBook = createAction('[Book] Clear Selected Book');

export const createBook = createAction(
  '[Book] Add a Book',
  props<{ book: BookModel }>()
);
export const updateBook = createAction(
  '[Book] Update a Book',
  props<{ book: BookModel; bookId: number }>()
);

export const deleteBook = createAction(
  '[Book] delete a Book',
  props<{ bookId: number }>()
);
