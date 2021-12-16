import { Routes } from '@angular/router';

export const Routing: Routes = [
  {
    path: 'dev-only/base-components',
    loadChildren: () =>
      import('./dev-only/base-components/base-components.module').then(
        (m) => m.BaseComponentsModule
      ),
  },
];
