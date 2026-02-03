import { Routes } from '@angular/router';
import { HomePage } from '@features/home/home-page/home-page';
import { eventRoutes } from '@features/events/events.routes';
import { iRoutes } from './shared/components/models/route.model';
import { formRoutes } from './features/forms/form.routes';

export const routes: iRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePage,
        title: 'Home',
        data: { uniqueId: 'home' },
      },
      ...eventRoutes,
      ...formRoutes
    ]
  },
];
