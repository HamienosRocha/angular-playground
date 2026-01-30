import { Routes } from '@angular/router';
import { HomePage } from '@features/home/home-page/home-page';
import { eventRoutes } from '@features/events/events.routes';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePage,
        title: 'Home',
        data: { uniqueId: 'home' },
      },
      ...eventRoutes
    ]
  },
];
