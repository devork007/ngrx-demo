import { State, createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book.state';
import { GlobalState } from '../global.state';

export const selectBookState = createFeatureSelector<BookState>('book');

export const selectBookList = createSelector(
  selectBookState,
  (state: BookState) => state.bookList
);
export const activeBookId = createSelector(
  selectBookState,
  (state: BookState) => state.activeBookId
);
export const error = createSelector(
  selectBookState,
  (state: BookState) => state.error
);
export const isLoading = createSelector(
  selectBookState,
  (state: BookState) => state.isLoading
);
