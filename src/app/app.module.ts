import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './pages/counter/counter/counter.component';
import { CounterButtonComponent } from './pages/counter/components/counter-button/counter-button.component';
import { UpdateBookComponent } from './pages/book/features/components/update-book/update-book.component';
import { MaterialModule } from './shared/material/material.module';
import { BookComponent } from './pages/book/book.component';
import { BookListComponent } from './pages/book/features/components/book-list/book-list.component';
import { BookCardComponent } from './pages/book/features/components/book-card/book-card.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/book/book.reducers';
import { counterReducer } from './store/counter/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/book/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    BookComponent,
    UpdateBookComponent,
    BookListComponent,
    BookCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ counter: counterReducer, book: bookReducer }),
    EffectsModule.forRoot([BooksEffects]),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
