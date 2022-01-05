import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiComponent, UserRolesClient } from 'src/app/apis/user-roles.service';
import { UsersClient } from 'src/app/apis/users.service';
import { environment } from 'src/environments/environment';
import { AllowedPage } from '../shared/allowed-pages/allowed-pages.model';
import { UserRole } from '../user-roles/user-roles.model';
import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private usersClient: UsersClient,
    private userRolesClient: UserRolesClient
  ) {
    this.initUserFc();
    this.initUserRoleFc();
    this.initAllowedPages();
  }

  userFc: FormControl | undefined;

  userRoleFc: FormControl | undefined;

  allowedPages: AllowedPage[] = [];

  users: {
    id: string;
    username: string;
  }[] = [];

  userRoles: UserRole[] = [];

  get selectedUser(): User | null {
    return this.userFc?.value;
  }

  get isAllowedPagesOverridden(): boolean {
    const selectedUserRole = this.userRoleFc?.value as UserRole;

    if (selectedUserRole) {
      for (
        let index = 0;
        index < selectedUserRole.uiComponents.length;
        index++
      ) {
        const uiComponent = selectedUserRole.uiComponents[index];
        const allowPage = this.allowedPages.find(
          (x) =>
            x.section.id === uiComponent.section &&
            x.module.id === uiComponent.module &&
            x.page.id === uiComponent.page
        );

        if (allowPage && allowPage.isAuthorized !== uiComponent.isAuthorized) {
          return true;
        }
      }
    }

    return false;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getUserRoles();
  }

  private initUserFc(): void {
    this.userFc = new FormControl(null, Validators.required);

    const subs = this.userFc.valueChanges.subscribe(
      (
        user: {
          id: string;
          username: string;
        } | null
      ) => {
        if (user !== null) {
          const getByIdSubs = this.usersClient
            .getById(user.id)
            .subscribe((resp) => {
              this.userRoleFc?.setValue(
                this.userRoles.find((x) => x.id === resp.user.userRole?.id)
              );

              if (resp.user.uiComponents.length !== 0) {
                this.updateAllowedPages(resp.user.uiComponents);
              }
            });

          this.subscriptions.push(getByIdSubs);
        }
      }
    );

    this.subscriptions.push(subs);
  }

  private initUserRoleFc(): void {
    this.userRoleFc = new FormControl(null, Validators.required);

    const subs = this.userRoleFc.valueChanges.subscribe(
      (userRole: UserRole | null) => {
        if (userRole) {
          this.updateAllowedPages(userRole.uiComponents);
        } else {
          this.initAllowedPages();
        }
      }
    );

    this.subscriptions.push(subs);
  }

  private initAllowedPages(): void {
    const allowedPages: AllowedPage[] = [];

    environment.asideMenu.sections.forEach((section) => {
      const sectionId = section.id;

      section.modules.forEach((module) => {
        const moduleId = module.id;

        module.pages.forEach((page) => {
          const pageId = page.id;

          allowedPages.push(
            new AllowedPage(sectionId, moduleId, pageId, false)
          );
        });
      });
    });

    this.allowedPages = allowedPages;
  }

  private getUsers(): void {
    const subs = this.usersClient.getAll().subscribe((resp) => {
      this.users = resp.users;
    });

    this.subscriptions.push(subs);
  }

  private getUserRoles(): void {
    const subs = this.userRolesClient.getAll().subscribe((resp) => {
      this.userRoles = resp.userRoles;
    });

    this.subscriptions.push(subs);
  }

  private updateAllowedPages(uiComponents: UiComponent[]): void {
    const allowedPagesCopy: AllowedPage[] = JSON.parse(
      JSON.stringify(this.allowedPages)
    );

    uiComponents.forEach((uiComponent) => {
      const allowPage = allowedPagesCopy.find(
        (x) =>
          x.section.id === uiComponent.section &&
          x.module.id === uiComponent.module &&
          x.page.id === uiComponent.page
      );

      if (allowPage) {
        allowPage.isAuthorized = uiComponent.isAuthorized;
      }
    });

    this.allowedPages = allowedPagesCopy;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
