import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BookActions from './book.actions';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { BookService } from 'src/app/shared/book.service';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private bookService: BookService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.getBooks),
      exhaustMap(() => {
        return this.bookService.getAllBooks().pipe(
          map((books) => BookActions.getBooksSuccess({ books })),
          catchError((error) =>
            of(BookActions.getBooksFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
