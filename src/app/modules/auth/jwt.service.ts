import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private key = 'jwt_token';
  private jwtHelper: JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  get isExpired(): boolean {
    const token = this.getToken();

    if (token) {
      return this.jwtHelper.isTokenExpired(token);
    } else {
      return true;
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  setToken(token: string) {
    localStorage.setItem(this.key, token);
  }

  deleteToken(): void {
    localStorage.removeItem(this.key);
  }
}
