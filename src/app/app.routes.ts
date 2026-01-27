import { Routes } from '@angular/router';
import { HomePage } from './views/home/home-page/home-page';
import { eventRoutes } from './views/events/events.routes';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePage,
      },
      ...eventRoutes
    ]
  },
];
