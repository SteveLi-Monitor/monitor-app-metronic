import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonCommandsClient {
  private baseUrl = environment.baseUrl + '/CommonCommands';

  constructor(private httpClient: HttpClient) {}

  getMonitorConfiguration(): Observable<GetMonitorConfigurationResp> {
    return this.httpClient.post<GetMonitorConfigurationResp>(
      this.baseUrl + '/GetMonitorConfiguration',
      null
    );
  }
}

export interface GetMonitorConfigurationResp {
  companies: {
    companyNumber: string;
    name: string;
  }[];
}
