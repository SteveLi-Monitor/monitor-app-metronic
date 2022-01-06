import { Injectable, NgModule } from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  RouterModule,
  Routes,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { AuthService } from './modules/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoadLayoutModule implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    if (!this.authService.isSignedIn) {
      return this.router.parseUrl('/auth/login');
    }

    return true;
  }
}

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    canLoad: [CanLoadLayoutModule],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
