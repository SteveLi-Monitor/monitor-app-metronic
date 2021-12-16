import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineSVGModule } from 'ng-inline-svg-2';

import { BaseComponentsRoutingModule } from './base-components-routing.module';
import { BaseComponentsComponent } from './base-components/base-components.component';
import { ButtonsComponent } from './base-components/buttons/buttons.component';
import { AlertsComponent } from './base-components/alerts/alerts.component';

@NgModule({
  declarations: [BaseComponentsComponent, ButtonsComponent, AlertsComponent],
  imports: [CommonModule, InlineSVGModule, BaseComponentsRoutingModule],
})
export class BaseComponentsModule {}
