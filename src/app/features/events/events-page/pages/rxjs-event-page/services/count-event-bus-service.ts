import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountEventBusService {
  private eventSources$: Record<string, Subject<number>> = {};
  private onAddEvent$ = new Subject<string>();

  createEvent(id: string) {
    if ((this.eventSources$ as Object).hasOwnProperty(id)) {
      console.error(`Event '${id}' already exists!`);
      return;
    }

    this.eventSources$[id] = new Subject<number>();
    this.emitOnAddEvent(id);
  }

  removeEvent(id: string) {
    if (!(this.eventSources$ as Object).hasOwnProperty(id)) {
      console.error(`Event '${id}' not found!`);
      return;
    }

    delete this.eventSources$[id];
  }

  emit(id: string, count: number) {
    if (!this.eventSources$?.[id]) {
      console.error(`Event '${id}' not found!`);
      return;
    }

    this.eventSources$[id].next(count);
  }

  onEvent(id: string): Observable<number> {
    if (!this.eventSources$?.[id]) {
      return throwError(() => new Error(`Event '${id}' not found!`));
      //return undefined;
    }

    return this.eventSources$[id].asObservable();
  }

  emitOnAddEvent(id: string) {
    this.onAddEvent$.next(id);
  }

  onEventAddEvent() {
    return this.onAddEvent$.asObservable();
  }
}
