import { signal } from "@angular/core";

interface iBaseEventComponent {
  increment(): void;
  decrement(): void;
}

export class BaseEventComponent implements iBaseEventComponent {
  protected count = signal(0);
  protected defaultComponentClass = 'border-2 py-2 px-3';

  increment() { }
  decrement() { }
}
