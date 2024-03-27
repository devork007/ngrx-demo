import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CounterState, initialCount } from './counter.state';
import { GlobalState } from '../global.state';
import { stat } from 'fs';
export const selectCounter = createFeatureSelector<CounterState>('counter');
// export const selectCounter = (state: GlobalState) => state.counter;
export const selectCount = createSelector(
  selectCounter,
  (counterState) => counterState.count
);
