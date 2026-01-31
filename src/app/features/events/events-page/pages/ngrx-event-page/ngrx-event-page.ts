import { Component, signal } from '@angular/core';

import { BaseEventComponent } from '../../components/base-components/base-event-compent';

@Component({
  selector: 'app-ngrx-event-page',
  imports: [],
  templateUrl: './ngrx-event-page.html',
  styleUrl: './ngrx-event-page.css',
})
export class NgrxEventPage extends BaseEventComponent {
  count1 = signal(0);
  count2 = signal(0);

  protected onCount1(count: number) {
    this.count1.set(count);
  }

  protected onCount2(count: number) {
    this.count2.set(count);
  }
}