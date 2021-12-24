import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables/tables.component';
import { AgGridComponent } from './tables/ag-grid/ag-grid.component';

@NgModule({
  declarations: [TablesComponent, AgGridComponent],
  imports: [CommonModule, AgGridModule.withComponents([]), TablesRoutingModule],
})
export class TablesModule {}
