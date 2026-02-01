import { Component, forwardRef, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseEventComponent } from '../../components/base-components/base-event-compent';
import { TripleCountDisplay } from '../../components/triple-count-display/triple-count-display';
import { incrementParent, decrementParent } from './state/parent/count.actions';
import { AppState } from '@/state/models';
import { component1Decrement, component1Increment, component2Decrement, component2Increment } from '@/state/actions';

@Component({
  selector: 'app-ngrx-event-page',
  imports: [
    forwardRef(() => NgrxEventComp1),
    forwardRef(() => NgrxEventComp2),
    TripleCountDisplay
  ],
  templateUrl: './ngrx-event-page.html',
  styleUrl: './ngrx-event-page.css',
})
export class NgrxEventPage extends BaseEventComponent {

  private readonly store: Store<AppState> = inject(Store);

  protected override count = this.store.selectSignal(state => state.parentCount) as WritableSignal<number>;
  protected count1 = this.store.selectSignal(state => state.component1Count);
  protected count2 = this.store.selectSignal(state => state.component2Count);

  override increment() {
    this.store.dispatch(incrementParent());
  }

  override decrement() {
    this.store.dispatch(decrementParent());
  }
}

@Component({
  selector: 'app-ngrx-event-comp-1',
  imports: [TripleCountDisplay],
  template: `
    <div [class]="defaultComponentClass">
      <h5 class="mb-2">
        Child Component 1
      </h5>

      <app-triple-count-display
        [count1]="count()"
        [count2]="count2()"
        [parentCount]="parentCount()"
      />

      <div>
        <button class="btn" (click)="decrement()">-</button>
        <span class="px-2">{{ count() }}</span>
        <button class="btn" (click)="increment()">+</button>
      </div>
    </div>
  `,
})
export class NgrxEventComp1 extends BaseEventComponent {
  private readonly store: Store<AppState> = inject(Store);

  protected override count = this.store.selectSignal(state => state.component1Count) as WritableSignal<number>;
  protected count2 = this.store.selectSignal(state => state.component2Count);
  protected parentCount = this.store.selectSignal(state => state.parentCount);

  override increment() {
    this.store.dispatch(component1Increment());
  }

  override decrement() {
    this.store.dispatch(component1Decrement());
  }
}

@Component({
  selector: 'app-ngrx-event-comp-2',
  imports: [TripleCountDisplay],
  template: `
    <div [class]="defaultComponentClass">
      <h5 class="mb-2">
        Child Component 2
      </h5>

      <app-triple-count-display
        [count1]="count1()"
        [count2]="count()"
        [parentCount]="parentCount()"
      />

      <div>
        <button class="btn" (click)="decrement()">-</button>
        <span class="px-2">{{ count() }}</span>
        <button class="btn" (click)="increment()">+</button>
      </div>
    </div>
  `,
})
export class NgrxEventComp2 extends BaseEventComponent {
  private readonly store: Store<AppState> = inject(Store);

  protected override count = this.store.selectSignal(state => state.component2Count) as WritableSignal<number>;
  protected count1 = this.store.selectSignal(state => state.component1Count);
  protected parentCount = this.store.selectSignal(state => state.parentCount);

  override increment() {
    this.store.dispatch(component2Increment());
  }

  override decrement() {
    this.store.dispatch(component2Decrement());

  }
}