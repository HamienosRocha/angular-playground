import { signal } from "@angular/core";

interface iBaseEventComponent {
  increment(): void;
  decrement(): void;
}

type iEventCompoentType = 'component1' | 'component2' | 'parent';

export class BaseEventComponent implements iBaseEventComponent {
  protected count = signal(0);

  protected defaultComponentClass(type: iEventCompoentType) {
    const types: Record<iEventCompoentType, string> = {
      parent: 'border-parent-event-comp',
      component1: 'border-event-comp-1',
      component2: 'border-event-comp-2',
    };

    return `border-2 py-2 px-3 ${types[type]}`;
  };

  increment() { }
  decrement() { }
}
