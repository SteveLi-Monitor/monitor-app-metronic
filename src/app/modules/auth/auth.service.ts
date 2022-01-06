import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { SignInReq, SignInResp, UsersClient } from 'src/app/apis/users.service';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersClient: UsersClient,
    private router: Router
  ) {}

  redirectUrl: string | undefined;

  get isSignedIn(): boolean {
    return !this.jwtService.isExpired;
  }

  isAllowed(): Observable<boolean | UrlTree> {
    let uiComponent:
      | { section: string; module: string; page: string }
      | undefined;

    environment.asideMenu.sections.forEach((section) => {
      section.modules.forEach((module) => {
        module.pages.forEach((page) => {
          if (page.routerLink === this.redirectUrl) {
            uiComponent = {
              section: section.id,
              module: module.id,
              page: page.id,
            };
          }
        });
      });
    });

    if (uiComponent) {
      return this.usersClient
        .getUiComponentsById(this.jwtService.applicationUser!.id)
        .pipe(
          map((resp) => {
            if (
              resp.uiComponents.some(
                (x) =>
                  x.section === uiComponent!.section &&
                  x.module === uiComponent!.module &&
                  x.page === uiComponent!.page &&
                  x.isAuthorized
              )
            ) {
              return true;
            } else {
              return this.router.parseUrl('');
            }
          })
        );
    } else {
      return of(true);
    }
  }

  signIn(req: SignInReq): Observable<SignInResp> {
    return this.usersClient.signIn(req).pipe(
      tap((resp) => {
        this.jwtService.setToken(resp.token);
      })
    );
  }

  signOut(): void {
    this.jwtService.deleteToken();
  }
}
