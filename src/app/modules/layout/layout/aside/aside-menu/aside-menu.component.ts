import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersClient } from 'src/app/apis/users.service';
import { JwtService } from 'src/app/modules/auth/jwt.service';
import { environment } from 'src/environments/environment';
import { AsideMenu } from './aside-menu.model';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
})
export class AsideMenuComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private jwtService: JwtService,
    private usersClient: UsersClient
  ) {}

  asideMenu: AsideMenu | undefined;

  ngOnInit(): void {
    const user = this.jwtService.applicationUser;
    const asideMenuFromEnv = JSON.parse(
      JSON.stringify(environment.asideMenu)
    ) as AsideMenu;

    const subs = this.usersClient
      .getUiComponentsById(user!.id)
      .subscribe((resp) => {
        let asideMenu: AsideMenu = {
          sections: [],
        };

        asideMenuFromEnv.sections.forEach((section) => {
          section.modules.forEach((module) => {
            module.pages.forEach((page) => {
              const uiComponent = resp.uiComponents.find(
                (x) =>
                  x.section === section.id &&
                  x.module === module.id &&
                  x.page === page.id
              );

              if (uiComponent?.isAuthorized) {
                const existingSection = asideMenu.sections.find(
                  (x) => x.id === section.id
                );

                if (existingSection) {
                  const existingModule = existingSection.modules.find(
                    (x) => x.id === module.id
                  );

                  if (existingModule) {
                    const existingPage = existingModule.pages.find(
                      (x) => x.id === page.id
                    );

                    if (!existingPage) {
                      existingModule.pages.push({
                        id: page.id,
                        description: page.description,
                        routerLink: page.routerLink,
                      });
                    }
                  } else {
                    existingSection.modules.push({
                      id: module.id,
                      description: module.description,
                      svg: module.svg,
                      pages: [
                        {
                          id: page.id,
                          description: page.description,
                          routerLink: page.routerLink,
                        },
                      ],
                    });
                  }
                } else {
                  asideMenu.sections.push({
                    id: section.id,
                    description: section.description,
                    modules: [
                      {
                        id: module.id,
                        description: module.description,
                        svg: module.svg,
                        pages: [
                          {
                            id: page.id,
                            description: page.description,
                            routerLink: page.routerLink,
                          },
                        ],
                      },
                    ],
                  });
                }
              }
            });
          });
        });

        this.asideMenu = asideMenu;

        if (!environment.production) {
          this.asideMenu!.sections.push(
            JSON.parse(JSON.stringify(environment.devOnlySection))
          );
        }
      });

    this.subscriptions.push(subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
