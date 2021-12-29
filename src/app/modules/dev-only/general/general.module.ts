import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general/general.component';
import { AgGridComponent } from './general/ag-grid/ag-grid.component';
import { Sweetalert2Component } from './general/sweetalert2/sweetalert2.component';

@NgModule({
  declarations: [GeneralComponent, AgGridComponent, Sweetalert2Component],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    SweetAlert2Module,
    GeneralRoutingModule,
  ],
})
export class GeneralModule {}
