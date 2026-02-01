import { createReducer, on } from "@ngrx/store";
import { decrementParent, incrementParent } from "./count.actions";

const initialState = 0;

export const parentCountReducer = createReducer(
  initialState,
  on(incrementParent, state => state + 1),
  on(decrementParent, state => state - 1)
);