import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserRolesClient {
  private baseUrl = environment.baseUrl + '/UserRoles';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllResp> {
    return this.httpClient.get<GetAllResp>(this.baseUrl);
  }
}

export interface GetAllResp {
  userRoles: {
    id: number;
    name: string;
    uiComponents: UiComponent[];
  }[];
}

export interface UiComponent {
  section: string;
  module: string;
  page: string;
  isAuthorized: boolean;
}
