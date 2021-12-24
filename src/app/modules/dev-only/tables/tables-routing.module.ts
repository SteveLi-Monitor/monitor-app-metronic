import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './tables/ag-grid/ag-grid.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: 'ag-grid',
        component: AgGridComponent,
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
export class TablesRoutingModule {}
