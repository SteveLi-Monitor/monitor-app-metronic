import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general/general.component';
import { AgGridComponent } from './general/ag-grid/ag-grid.component';

@NgModule({
  declarations: [GeneralComponent, AgGridComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    GeneralRoutingModule,
  ],
})
export class GeneralModule {}
