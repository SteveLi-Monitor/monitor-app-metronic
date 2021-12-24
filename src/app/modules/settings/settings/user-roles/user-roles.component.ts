import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiComponent, UserRolesClient } from 'src/app/apis/user-roles.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
})
export class UserRolesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private userRolesClient: UserRolesClient) {}

  userRoles: {
    id: number;
    name: string;
    allowedUiComponents: UiComponent[];
  }[] = [];

  ngOnInit(): void {
    this.getUserRoles();
  }

  private getUserRoles(): void {
    const subs = this.userRolesClient.getAll().subscribe((resp) => {
      this.userRoles = resp.userRoles;
    });

    this.subscriptions.push(subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
