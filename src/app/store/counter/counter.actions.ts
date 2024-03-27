import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component]Inrements the value');
export const decrement = createAction(
  '[Counter Component]Decrements the value'
);
export const reset = createAction('[Counter Component]Resets the value');
