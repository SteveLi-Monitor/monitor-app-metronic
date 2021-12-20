import { Component, Input, OnInit } from '@angular/core';
import { AsideMenuModule } from '../aside-menu.model';

@Component({
  selector: 'app-aside-menu-module',
  templateUrl: './aside-menu-module.component.html',
})
export class AsideMenuModuleComponent implements OnInit {
  constructor() {}

  @Input()
  asideMenuModule: AsideMenuModule | undefined;

  ngOnInit(): void {}
}
