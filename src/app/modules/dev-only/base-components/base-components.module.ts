import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineSVGModule } from 'ng-inline-svg-2';

import { BaseComponentsRoutingModule } from './base-components-routing.module';
import { BaseComponentsComponent } from './base-components/base-components.component';
import { ButtonsComponent } from './base-components/buttons/buttons.component';
import { AlertsComponent } from './base-components/alerts/alerts.component';
import { ModalsComponent } from './base-components/modals/modals.component';
import { TabsComponent } from './base-components/tabs/tabs.component';

@NgModule({
  declarations: [
    BaseComponentsComponent,
    ButtonsComponent,
    AlertsComponent,
    ModalsComponent,
    TabsComponent,
  ],
  imports: [CommonModule, InlineSVGModule, BaseComponentsRoutingModule],
})
export class BaseComponentsModule {}
