import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UiComponent } from './user-roles.service';

@Injectable({
  providedIn: 'root',
})
export class UsersClient {
  private baseUrl = environment.baseUrl + '/Users';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllResp> {
    return this.httpClient.get<GetAllResp>(this.baseUrl);
  }

  getById(id: string): Observable<GetByIdResp> {
    return this.httpClient.get<GetByIdResp>(`${this.baseUrl}/${id}`);
  }

  signIn(req: SignInReq): Observable<SignInResp> {
    return this.httpClient.post<SignInResp>(this.baseUrl + '/SignIn', req);
  }

  updateUserRoleAndUiComponents(
    req: UpdateUserRoleAndUiComponentsReq
  ): Observable<Object> {
    return this.httpClient.post(
      this.baseUrl + '/UpdateUserRoleAndUiComponents',
      req
    );
  }
}

export interface GetAllResp {
  users: {
    id: string;
    username: string;
  }[];
}

export interface GetByIdResp {
  user: {
    id: string;
    username: string;
    uiComponents: UiComponent[];
    userRole: {
      id: number;
      name: string;
      uiComponents: UiComponent[];
    } | null;
  };
}

export interface SignInReq {
  username: string;
  password: string;
  companyNumber: string;
}

export interface SignInResp {
  token: string;
}

export interface UpdateUserRoleAndUiComponentsReq {
  id: string;
  userRoleId: number | undefined;
  uiComponents: UiComponent[];
}
