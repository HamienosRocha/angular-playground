import {
  parentCountReducer,
  component1Reducer,
  component2Reducer
} from '@/features/events/state/reducers';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../models';


export const reducers = {
  parentCount: parentCountReducer,
  component1Count: component1Reducer,
  component2Count: component2Reducer,
} as ActionReducerMap<AppState> | InjectionToken<ActionReducerMap<AppState>>;