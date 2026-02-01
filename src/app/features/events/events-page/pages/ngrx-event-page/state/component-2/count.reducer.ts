import { createReducer, on } from "@ngrx/store";
import { component2Decrement, component2Increment } from "./count.actions";

const initialState = 0;

export const component2Reducer = createReducer(
  initialState,
  on(component2Increment, state => state + 1),
  on(component2Decrement, state => state - 1),
);