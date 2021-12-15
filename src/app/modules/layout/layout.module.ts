import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineSVGModule } from 'ng-inline-svg-2';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AsideComponent } from './layout/aside/aside.component';
import { AsideMenuComponent } from './layout/aside/aside-menu/aside-menu.component';

@NgModule({
  declarations: [LayoutComponent, AsideComponent, AsideMenuComponent],
  imports: [CommonModule, InlineSVGModule, LayoutRoutingModule],
})
export class LayoutModule {}
