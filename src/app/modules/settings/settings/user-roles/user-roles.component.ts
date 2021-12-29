import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
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

  @ViewChild('successSwal')
  private successSwalComponent: SwalComponent | undefined;

  @ViewChild('deleteSwal')
  private deleteSwalComponent: SwalComponent | undefined;

  constructor(
    private userRolesClient: UserRolesClient,
    private translateService: TranslateService
  ) {
    this.initUserRoleFc();
    this.initAllowedPages();
  }

  userRoleFc: FormControl | undefined;

  allowedPages: AllowedPage[] = [];

  userRoles: UserRole[] = [];

  get selectedUserRole(): UserRole | null {
    return this.userRoleFc?.value;
  }

  ngOnInit(): void {
    this.getUserRoles();
  }

  onUpdate(): void {
    const subs = this.userRolesClient
      .update({
        id: this.selectedUserRole!.id,
        uiComponents: this.allowedPages.map((allowedPage) => {
          return {
            section: allowedPage.section.id,
            module: allowedPage.module.id,
            page: allowedPage.page.id,
            isAuthorized: allowedPage.isAuthorized,
          };
        }),
      })
      .subscribe(() => {
        if (this.successSwalComponent) {
          this.successSwalComponent.text = this.translateService.instant(
            'Common.Message.UpdateSuccessfully'
          );
          this.successSwalComponent.fire();
        }

        this.reload();
      });

    this.subscriptions.push(subs);
  }

  onDelete(): void {
    if (this.deleteSwalComponent) {
      this.deleteSwalComponent.fire();
    }
  }

  onConfirmDelete(): void {
    const subs = this.userRolesClient
      .delete({
        id: this.selectedUserRole!.id,
      })
      .subscribe(() => {
        if (this.successSwalComponent) {
          this.successSwalComponent.text = this.translateService.instant(
            'Common.Message.DeleteSuccessfully'
          );
          this.successSwalComponent.fire();
        }

        this.reload();
      });

    this.subscriptions.push(subs);
  }

  private initUserRoleFc(): void {
    this.userRoleFc = new FormControl(null, Validators.required);

    const subs = this.userRoleFc.valueChanges.subscribe(
      (userRole: UserRole | null) => {
        if (userRole === null) {
        } else {
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

  private reload(): void {
    this.userRoleFc?.setValue(null);
    this.initAllowedPages();
    this.getUserRoles();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
