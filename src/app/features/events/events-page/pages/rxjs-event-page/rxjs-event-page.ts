import { AfterContentInit, Component, forwardRef, inject, OnDestroy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { BaseEventComponent } from '../../components/base-components/base-event-compent';
import { TripleCountDisplay } from '../../components/triple-count-display/triple-count-display';
import { CountEventBusService } from './services/count-event-bus-service';

@Component({
  selector: 'app-rxjs-event-page',
  imports: [
    forwardRef(() => RxJsEventComp1),
    forwardRef(() => RxJsEventComp2),
    TripleCountDisplay
  ],
  templateUrl: './rxjs-event-page.html',
  styleUrl: './rxjs-event-page.css',
})
export class RxjsEventPage extends BaseEventComponent {
  count1 = signal(0);
  count2 = signal(0);

  private readonly countEventService = inject(CountEventBusService);

  private readonly eventCountId = 'parent-event';

  constructor() {
    super();
    this.countEventService.createEvent(this.eventCountId);

    this.countEventService.onEventAddEvent().pipe(takeUntilDestroyed())
      .subscribe(id => {
        if (id === 'comp1-event') {
          this.countEventService.onEvent(id).pipe(takeUntilDestroyed())
            .subscribe(count => {
              this.count1.set(count);
            });

        } else if (id === 'comp2-event') {
          this.countEventService.onEvent(id).pipe(takeUntilDestroyed())
            .subscribe(count => {
              this.count2.set(count);
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.countEventService.removeEvent(this.eventCountId);
  }

  sendCount(count: number) {
    this.countEventService.emit(this.eventCountId, count);
  }

  override increment() {
    this.count.set(this.count() + 1);
    this.sendCount(this.count());
  }

  override decrement() {
    this.count.set(this.count() - 1);
    this.sendCount(this.count());
  }
}

@Component({
  selector: 'app-rxjs-event-comp-1',
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
export class RxJsEventComp1 extends BaseEventComponent implements OnDestroy {
  count2 = signal<number>(0);
  parentCount = signal<number>(0);

  private readonly countEventService = inject(CountEventBusService);

  private readonly eventCountId = 'comp1-event';

  constructor() {
    super();

    this.countEventService.createEvent(this.eventCountId);

    this.countEventService.onEventAddEvent().pipe(takeUntilDestroyed())
      .subscribe(id => {
        if (id === 'comp2-event') {
          this.countEventService.onEvent(id).pipe(takeUntilDestroyed())
            .subscribe(count => {
              this.count2.set(count);
            });
        }
      });

    this.countEventService.onEvent('parent-event')
      .pipe(takeUntilDestroyed())
      .subscribe(count => {
        this.parentCount.set(count);
      });
  }

  ngOnDestroy(): void {
    this.countEventService.removeEvent(this.eventCountId);
  }

  sendCount(count: number) {
    this.countEventService.emit(this.eventCountId, count);
  }

  override increment() {
    this.count.set(this.count() + 1);
    this.sendCount(this.count());
  }

  override decrement() {
    this.count.set(this.count() - 1);
    this.sendCount(this.count());
  }
}

@Component({
  selector: 'app-rxjs-event-comp-2',
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
export class RxJsEventComp2 extends BaseEventComponent {
  count1 = signal<number>(0);
  parentCount = signal<number>(0);

  private readonly countEventService = inject(CountEventBusService);

  private readonly eventCountId = 'comp2-event';

  constructor() {
    super();

    this.countEventService.createEvent(this.eventCountId);

    this.countEventService.onEvent('parent-event')
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: count => {
          this.parentCount.set(count);
        }
      });

    this.countEventService.onEvent('comp1-event')
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: count => {
          this.count1.set(count);
        }
      });

  }

  ngOnDestroy(): void {
    this.countEventService.removeEvent(this.eventCountId);
  }

  sendCount(count: number) {
    this.countEventService.emit(this.eventCountId, count);
  }

  override increment() {
    this.count.set(this.count() + 1);
    this.sendCount(this.count());
  }

  override decrement() {
    this.count.set(this.count() - 1);
    this.sendCount(this.count());
  }
}
