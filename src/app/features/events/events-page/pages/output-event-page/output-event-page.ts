import { Component, forwardRef, input, output, signal } from '@angular/core';

class BaseComponent {
  protected count = signal(0);

  protected defaultComponentClass = 'border-2 py-2 px-3';

  protected increment() {
    this.count.set(this.count() + 1);
  }

  protected decrement() {
    this.count.set(this.count() - 1);
  }
}

@Component({
  selector: 'app-output-event-page',
  imports: [
    forwardRef(() => OutputEventComp1),
    forwardRef(() => OutputEventComp2),
  ],
  templateUrl: './output-event-page.html',
  styleUrl: './output-event-page.css',
})
export class OutputEventPage extends BaseComponent {
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
  imports: [],
  template: `
    <div [class]="defaultComponentClass">
      <h5 class="mb-2">
        Child Component 1
      </h5>

      <div class="py-1">
        <div>Count 1: {{ count() }}</div>
        <div>Count 2: {{ count2() }}</div>
           <div>Parent count: {{ parentCount() }}</div>
      </div>

      <div>
        <button class="btn" (click)="decrement()">-</button>
        <span class="px-2">{{ count() }}</span>
        <button class="btn" (click)="increment()">+</button>
      </div>
    </div>
  `,
})
export class OutputEventComp1 extends BaseComponent {
  count2 = input.required<number>();
  parentCount = input.required<number>();

  onCount = output<number>();

  protected override increment() {
    this.count.set(this.count() + 1);
    this.onCount.emit(this.count());
  }

  protected override decrement() {
    this.count.set(this.count() - 1);
    this.onCount.emit(this.count());
  }
}

@Component({
  selector: 'app-output-event-comp-2',
  imports: [],
  template: `
    <div [class]="defaultComponentClass">
      <h5 class="mb-2">
        Child Component 2
      </h5>

       <div class="py-1">
        <div>Count 1: {{ count1() }}</div>
        <div>Count 2: {{ count() }}</div>
        <div>Parent count: {{ parentCount() }}</div>
      </div>

      <div>
        <button class="btn" (click)="decrement()">-</button>
        <span class="px-2">{{ count() }}</span>
        <button class="btn" (click)="increment()">+</button>
      </div>
    </div>
  `,
})
export class OutputEventComp2 extends BaseComponent {
  count1 = input.required<number>();
  parentCount = input.required<number>();

  onCount = output<number>();

  protected override increment() {
    this.count.set(this.count() + 1);
    this.onCount.emit(this.count());
  }

  protected override decrement() {
    this.count.set(this.count() - 1);
    this.onCount.emit(this.count());
  }
}
