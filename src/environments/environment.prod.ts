export const environment = {
  production: true,

  baseUrl: 'http://localhost:5001/api',

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
        ],
      },
    ],
  },

  devOnlySection: {
    id: 'DevOnly',
    description: 'AsideMenu.Section.DevOnly',
    modules: [
      {
        id: 'BaseComponents',
        description: 'AsideMenu.Module.BaseComponents',
        svg: './assets/media/icons/duotune/general/gen022.svg',
        pages: [
          {
            id: 'Alerts',
            description: 'AsideMenu.Page.Alerts',
            routerLink: 'dev-only/base-components/alerts',
          },
          {
            id: 'Buttons',
            description: 'AsideMenu.Page.Buttons',
            routerLink: 'dev-only/base-components/buttons',
          },
          {
            id: 'Modals',
            description: 'AsideMenu.Page.Modals',
            routerLink: 'dev-only/base-components/modals',
          },
          {
            id: 'Tabs',
            description: 'AsideMenu.Page.Tabs',
            routerLink: 'dev-only/base-components/tabs',
          },
          {
            id: 'Toasts',
            description: 'AsideMenu.Page.Toasts',
            routerLink: 'dev-only/base-components/toasts',
          },
        ],
      },
      {
        id: 'Forms',
        description: 'AsideMenu.Module.Forms',
        svg: './assets/media/icons/duotune/general/gen022.svg',
        pages: [
          {
            id: 'FormControls',
            description: 'AsideMenu.Page.FormControls',
            routerLink: 'dev-only/forms/form-controls',
          },
        ],
      },
    ],
  },
};
