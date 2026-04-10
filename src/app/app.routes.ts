import { Routes } from '@angular/router';

import { PORTFOLIO_NAV_ITEMS } from './core/navigation/portfolio-nav';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PORTFOLIO_NAV_ITEMS[0].path,
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/portfolio-shell/portfolio-shell').then(
        (m) => m.PortfolioShell,
      ),
    children: [
      {
        path: PORTFOLIO_NAV_ITEMS[0].path,
        title: PORTFOLIO_NAV_ITEMS[0].label,
        loadComponent: () =>
          import('./features/profile/profile').then((m) => m.Profile),
      },
      {
        path: PORTFOLIO_NAV_ITEMS[1].path,
        title: PORTFOLIO_NAV_ITEMS[1].label,
        loadComponent: () =>
          import('./features/skills/skills').then((m) => m.Skills),
      },
      {
        path: PORTFOLIO_NAV_ITEMS[2].path,
        title: PORTFOLIO_NAV_ITEMS[2].label,
        loadComponent: () =>
          import('./features/experience/experience').then((m) => m.Experience),
      },
      {
        path: PORTFOLIO_NAV_ITEMS[3].path,
        title: PORTFOLIO_NAV_ITEMS[3].label,
        loadComponent: () =>
          import('./features/projects/projects').then((m) => m.Projects),
      },
      {
        path: PORTFOLIO_NAV_ITEMS[4].path,
        title: PORTFOLIO_NAV_ITEMS[4].label,
        loadComponent: () =>
          import('./features/javascript-algorithms/javascript-algorithms').then(
            (m) => m.JavascriptAlgorithms,
          ),
      },
      {
        path: PORTFOLIO_NAV_ITEMS[5].path,
        title: PORTFOLIO_NAV_ITEMS[5].label,
        loadComponent: () =>
          import('./features/contact/contact').then((m) => m.Contact),
      },
    ],
  },
  {
    path: '**',
    redirectTo: PORTFOLIO_NAV_ITEMS[0].path,
  },
];
