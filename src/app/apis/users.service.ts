import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersClient {
  private baseUrl = environment.baseUrl + '/Users';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllResp> {
    return this.httpClient.get<GetAllResp>(this.baseUrl);
  }

  signIn(req: SignInReq): Observable<SignInResp> {
    return this.httpClient.post<SignInResp>(this.baseUrl + '/SignIn', req);
  }
}

export interface GetAllResp {
  users: {
    id: string;
    username: string;
  }[];
}

export interface SignInReq {
  username: string;
  password: string;
  companyNumber: string;
}

export interface SignInResp {
  token: string;
}
