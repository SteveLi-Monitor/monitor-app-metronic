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

  devOnlySection: {},
};
