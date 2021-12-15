import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineSVGModule } from 'ng-inline-svg-2';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AsideComponent } from './layout/aside/aside.component';

@NgModule({
  declarations: [LayoutComponent, AsideComponent],
  imports: [CommonModule, InlineSVGModule, LayoutRoutingModule],
})
export class LayoutModule {}
