// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiDomain: '101.132.109.21:10001',
  baseUrl: 'http://101.132.109.21:10001/api',

  asideMenu: {
    sections: [
      {
        id: 'Procedures',
        description: 'AsideMenu.Section.Procedures',
        modules: [
          {
            id: 'Manufacturing',
            description: 'AsideMenu.Module.Manufacturing',
            svg: './assets/media/icons/duotune/general/gen022.svg',
            pages: [
              {
                id: 'Proc1',
                description: 'AsideMenu.Page.Proc1',
                routerLink: '/manufacturing/proc1',
              },
            ],
          },
          {
            id: 'Settings',
            description: 'AsideMenu.Module.Settings',
            svg: './assets/media/icons/duotune/general/gen022.svg',
            pages: [
              {
                id: 'UserRoles',
                description: 'AsideMenu.Page.UserRoles',
                routerLink: '/settings/user-roles',
              },
            ],
          },
        ],
      },
    ],
  },

  devOnlySection: {
    id: 'DevOnly',
    description: 'Dev Only',
    modules: [
      {
        id: 'BaseComponents',
        description: 'Base Components',
        svg: './assets/media/icons/duotune/general/gen022.svg',
        pages: [
          {
            id: 'Alerts',
            description: 'Alerts',
            routerLink: 'dev-only/base-components/alerts',
          },
          {
            id: 'Buttons',
            description: 'Buttons',
            routerLink: 'dev-only/base-components/buttons',
          },
          {
            id: 'Modals',
            description: 'Modals',
            routerLink: 'dev-only/base-components/modals',
          },
          {
            id: 'Tabs',
            description: 'Tabs',
            routerLink: 'dev-only/base-components/tabs',
          },
          {
            id: 'Toasts',
            description: 'Toasts',
            routerLink: 'dev-only/base-components/toasts',
          },
        ],
      },
      {
        id: 'Forms',
        description: 'Forms',
        svg: './assets/media/icons/duotune/general/gen022.svg',
        pages: [
          {
            id: 'FormControls',
            description: 'Form Controls',
            routerLink: 'dev-only/forms/form-controls',
          },
        ],
      },
      {
        id: 'General',
        description: 'General',
        svg: './assets/media/icons/duotune/general/gen022.svg',
        pages: [
          {
            id: 'AgGrid',
            description: 'AG Grid',
            routerLink: 'dev-only/general/ag-grid',
          },
          {
            id: 'SweetAlert2',
            description: 'SweetAlert2',
            routerLink: 'dev-only/general/sweetalert2',
          },
        ],
      },
    ],
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
