import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
})
export class AsideMenuComponent implements OnInit {
  constructor() {}

  get isProduction(): boolean {
    return environment.production;
  }

  ngOnInit(): void {}
}
