import { iRoutes } from '@/shared/components/models/route.model';

const EventsPage = () => import('./events-page/events-page').then(c => c.EventsPage);

export const eventRoutes: iRoutes = [
  {
    path: 'events',
    title: 'Events',
    data: { uniqueId: 'events' },
    children: [
      {
        path: '',
        loadComponent: EventsPage,
        data: { uniqueId: 'events_blank' },
      },
      {
        path: ':tab',
        loadComponent: EventsPage,
        data: { uniqueId: 'events_tabs' },
      },
    ]
  }
];
