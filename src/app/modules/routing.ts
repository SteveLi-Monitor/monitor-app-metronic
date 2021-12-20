import { Routes } from '@angular/router';

export const Routing: Routes = [
  {
    path: 'dev-only/base-components',
    loadChildren: () =>
      import('./dev-only/base-components/base-components.module').then(
        (m) => m.BaseComponentsModule
      ),
  },
  {
    path: 'dev-only/forms',
    loadChildren: () =>
      import('./dev-only/forms/forms.module').then((m) => m.FormsModule),
  },
];
