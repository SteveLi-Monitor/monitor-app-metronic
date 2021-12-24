import { Injectable } from '@angular/core';
import { CanLoad, Route, Routes, UrlSegment } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CanLoadDevOnlyModules implements CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return !environment.production;
  }
}

export const Routing: Routes = [
  {
    path: 'dev-only/base-components',
    loadChildren: () =>
      import('./dev-only/base-components/base-components.module').then(
        (m) => m.BaseComponentsModule
      ),
    canLoad: [CanLoadDevOnlyModules],
  },
  {
    path: 'dev-only/forms',
    loadChildren: () =>
      import('./dev-only/forms/forms.module').then((m) => m.FormsModule),
    canLoad: [CanLoadDevOnlyModules],
  },
  {
    path: 'dev-only/tables',
    loadChildren: () =>
      import('./dev-only/tables/tables.module').then((m) => m.TablesModule),
    canLoad: [CanLoadDevOnlyModules],
  },
];
