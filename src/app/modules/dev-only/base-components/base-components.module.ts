import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentsRoutingModule } from './base-components-routing.module';
import { BaseComponentsComponent } from './base-components/base-components.component';
import { ButtonsComponent } from './base-components/buttons/buttons.component';

@NgModule({
  declarations: [BaseComponentsComponent, ButtonsComponent],
  imports: [CommonModule, BaseComponentsRoutingModule],
})
export class BaseComponentsModule {}
