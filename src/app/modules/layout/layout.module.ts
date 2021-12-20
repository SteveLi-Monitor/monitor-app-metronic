import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineSVGModule } from 'ng-inline-svg-2';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AsideComponent } from './layout/aside/aside.component';
import { AsideMenuComponent } from './layout/aside/aside-menu/aside-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { AsideMenuSectionComponent } from './layout/aside/aside-menu/aside-menu-section/aside-menu-section.component';
import { AsideMenuModuleComponent } from './layout/aside/aside-menu/aside-menu-module/aside-menu-module.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    AsideMenuComponent,
    HeaderComponent,
    ContentComponent,
    AsideMenuSectionComponent,
    AsideMenuModuleComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    TranslateModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {}
