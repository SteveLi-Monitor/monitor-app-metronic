import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserRolesClient } from 'src/app/apis/user-roles.service';
import { environment } from 'src/environments/environment';
import { UserRole } from './user-roles.model';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss'],
})
export class UserRolesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private userRolesClient: UserRolesClient) {
    this.initUserRoleFc();
  }

  userRoleFc: FormControl | undefined;

  userRoles: UserRole[] = [];

  allowedPages: UiComponent[] = [];

  ngOnInit(): void {
    this.getUserRoles();
  }

  private initUserRoleFc(): void {
    this.userRoleFc = new FormControl(null, Validators.required);

    const subs = this.userRoleFc.valueChanges.subscribe((x: UserRole) => {
      // this.allowedPages = x.uiComponents;
    });
    this.subscriptions.push(subs);
  }

  private initAllowedPages(): void {
    environment.asideMenu.sections.forEach((section) => {
      const sectionId = section.id;

      section.modules.
    });
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
