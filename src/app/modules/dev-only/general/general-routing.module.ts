import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './general/ag-grid/ag-grid.component';
import { GeneralComponent } from './general/general.component';
import { Sweetalert2Component } from './general/sweetalert2/sweetalert2.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: 'ag-grid',
        component: AgGridComponent,
      },
      {
        path: 'sweetalert2',
        component: Sweetalert2Component,
      },
      {
        path: '',
        redirectTo: 'ag-grid',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
