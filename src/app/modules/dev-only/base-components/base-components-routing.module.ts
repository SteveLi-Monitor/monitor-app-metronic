import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './base-components/alerts/alerts.component';
import { BaseComponentsComponent } from './base-components/base-components.component';
import { ButtonsComponent } from './base-components/buttons/buttons.component';
import { ModalsComponent } from './base-components/modals/modals.component';
import { TabsComponent } from './base-components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponentsComponent,
    children: [
      {
        path: 'alerts',
        component: AlertsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'modals',
        component: ModalsComponent,
      },
      {
        path: 'tabs',
        component: TabsComponent,
      },
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseComponentsRoutingModule {}
