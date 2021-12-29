import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { AgGridModule } from 'ag-grid-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { UserRolesComponent } from './settings/user-roles/user-roles.component';
import { AllowedPagesComponent } from './settings/shared/allowed-pages/allowed-pages.component';

@NgModule({
  declarations: [SettingsComponent, UserRolesComponent, AllowedPagesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    AgGridModule.withComponents([]),
    SweetAlert2Module,
    SettingsRoutingModule,
  ],
})
export class SettingsModule {}
