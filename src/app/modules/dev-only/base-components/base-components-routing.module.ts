import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponentsComponent } from './base-components/base-components.component';
import { ButtonsComponent } from './base-components/buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponentsComponent,
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
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
