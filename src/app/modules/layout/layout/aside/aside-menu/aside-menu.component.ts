import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AsideMenu } from './aside-menu.model';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
})
export class AsideMenuComponent implements OnInit {
  constructor() {}

  asideMenu: AsideMenu | undefined;

  ngOnInit(): void {
    this.asideMenu = environment.asideMenu;
    if (!environment.production) {
      this.asideMenu.sections.push(environment.devOnlySection);
    }
  }
}
