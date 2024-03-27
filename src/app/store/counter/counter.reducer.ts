import { createReducer, on } from '@ngrx/store';
import { initialCount } from './counter.state';
import { decrement, increment, reset } from './counter.actions';

export const counterReducer = createReducer(
  initialCount,
  on(increment, (state) => {
    return {
      count: state.count + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      count: state.count > 0 ? state.count - 1 : 0,
    };
  }),
  on(reset, (state) => {
    return {
      count: 0,
    };
  })
);
