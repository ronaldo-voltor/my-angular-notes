import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'data-biding',
    loadComponent: () => import('./pages/data-biding/data-biding'),
  },
];
