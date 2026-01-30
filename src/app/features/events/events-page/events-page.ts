import { iTabs } from '@/shared/components/models';
import { TabContentDirective } from '@/shared/components/tabs/tab-content.directive';
import { Tabs } from '@/shared/components/tabs/tabs/tabs';
import { Component } from '@angular/core';
import { OutputEventPage } from "./pages/output-event-page/output-event-page";
import { NgrxEventPage } from "./pages/ngrx-event-page/ngrx-event-page";
import { RxjsEventPage } from "./pages/rxjs-event-page/rxjs-event-page";

@Component({
  selector: 'app-events-page',
  imports: [TabContentDirective, Tabs, OutputEventPage, NgrxEventPage, RxjsEventPage],
  templateUrl: './events-page.html',
  styleUrl: './events-page.css',
})
export class EventsPage {

  protected tabs: iTabs = [
    {
      id: 'output',
      title: 'Output',
      path: this.getPath('output'),
    },
    {
      id: 'rxjs',
      title: 'RxJs',
      path: this.getPath('rxjs'),
    },
    {
      id: 'ngrx',
      title: 'NgRx',
      path: this.getPath('ngrx'),
    }
  ];

  protected getPath(fragment: string) {
    return `/events/${fragment}`;
  }
}
