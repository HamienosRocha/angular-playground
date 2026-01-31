import { Component, forwardRef, input, output, signal } from '@angular/core';
import { TripleCountDisplay } from "@/features/events/events-page/components/triple-count-display/triple-count-display";
import { BaseEventComponent } from '../../components/base-components/base-event-compent';

@Component({
  selector: 'app-output-event-page',
  imports: [
    forwardRef(() => OutputEventComp1),
    forwardRef(() => OutputEventComp2),
    TripleCountDisplay
  ],
  templateUrl: './output-event-page.html',
  styleUrl: './output-event-page.css',
})
export class OutputEventPage extends BaseEventComponent {
  count1 = signal(0);
  count2 = signal(0);

  protected onCount1(count: number) {
    this.count1.set(count);
  }

  protected onCount2(count: number) {
    this.count2.set(count);
  }
}

@Component({
  selector: 'app-output-event-comp-1',
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
export class OutputEventComp1 extends BaseEventComponent {
  count2 = input.required<number>();
  parentCount = input.required<number>();

  onCount = output<number>();

  override increment() {
    this.count.set(this.count() + 1);
    this.onCount.emit(this.count());
  }

  override decrement() {
    this.count.set(this.count() - 1);
    this.onCount.emit(this.count());
  }
}

@Component({
  selector: 'app-output-event-comp-2',
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
export class OutputEventComp2 extends BaseEventComponent {
  count1 = input.required<number>();
  parentCount = input.required<number>();

  onCount = output<number>();

  override increment() {
    this.count.set(this.count() + 1);
    this.onCount.emit(this.count());
  }

  override decrement() {
    this.count.set(this.count() - 1);
    this.onCount.emit(this.count());
  }
}
