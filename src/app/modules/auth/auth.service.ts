import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SignInReq, SignInResp, UsersClient } from 'src/app/apis/users.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersClient: UsersClient
  ) {}

  redirectUrl: string | undefined;

  get isSignedIn(): boolean {
    return !this.jwtService.isExpired;
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
