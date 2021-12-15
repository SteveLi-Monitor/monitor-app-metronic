import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AsideComponent } from './layout/aside/aside.component';

@NgModule({
  declarations: [LayoutComponent, AsideComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
