import { iRoutes } from '@/shared/components/models/route.model';

const FormsPage = () => import('@/features/forms/forms-page/forms-page').then(c => c.FormsPage);

export const formRoutes: iRoutes = [
  {
    path: 'forms',
    title: 'Forms',
    data: { uniqueId: 'forms' },
    children: [
      {
        path: '',
        loadComponent: FormsPage,
        data: { uniqueId: 'forms_blank' },
      },
      {
        path: ':tab',
        loadComponent: FormsPage,
        data: { uniqueId: 'forms_tabs' },
      }
    ]
  }
];