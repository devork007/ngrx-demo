import { BookState } from './book/book.state';
import { CounterState } from './counter/counter.state';

export interface GlobalState {
  counter: CounterState;
  book: BookState;
}
