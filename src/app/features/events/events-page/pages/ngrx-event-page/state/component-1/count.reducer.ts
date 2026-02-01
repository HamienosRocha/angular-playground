import { createReducer, on } from "@ngrx/store";
import { component1Decrement, component1Increment } from "./count.actions";

const initialState = 1;

export const component1Reducer = createReducer(
  initialState,
  on(component1Increment, state => state + 1),
  on(component1Decrement, state => state - 1)
);