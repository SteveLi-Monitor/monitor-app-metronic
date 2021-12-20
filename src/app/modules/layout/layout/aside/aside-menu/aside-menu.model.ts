export interface AsideMenu {
  sections: AsideMenuSection[];
}

export interface AsideMenuSection {
  id: string;
  description: string;
  modules: AsideMenuModule[];
}

export interface AsideMenuModule {
  id: string;
  description: string;
  svg: string;
  pages: AsideMenuPage[];
}

export interface AsideMenuPage {
  id: string;
  description: string;
  routerLink: string;
}
