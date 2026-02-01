import { createAction } from "@ngrx/store";

export const incrementParent = createAction('[Parent Counter] increment');
export const decrementParent = createAction('[Parent Counter] decrement');