import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserRolesClient } from 'src/app/apis/user-roles.service';
import { environment } from 'src/environments/environment';
import { AllowedPage } from '../shared/allowed-pages/allowed-pages.model';
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
    this.initAllowedPages();
  }

  userRoleFc: FormControl | undefined;

  allowedPages: AllowedPage[] = [];

  userRoles: UserRole[] = [];

  ngOnInit(): void {
    this.getUserRoles();
  }

  private initUserRoleFc(): void {
    this.userRoleFc = new FormControl(null, Validators.required);

    const subs = this.userRoleFc.valueChanges.subscribe(
      (userRole: UserRole) => {
        const allowedPagesCopy: AllowedPage[] = JSON.parse(
          JSON.stringify(this.allowedPages)
        );

        userRole.uiComponents.forEach((uiComponent) => {
          if (uiComponent.isAuthorized) {
            const allowPage = allowedPagesCopy.find(
              (x) =>
                x.section.id === uiComponent.section &&
                x.module.id === uiComponent.module &&
                x.page.id === uiComponent.page
            );

            if (allowPage) {
              allowPage.isAuthorized = true;
            }
          }
        });

        this.allowedPages = allowedPagesCopy;
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
