import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { UserRolesComponent } from './settings/user-roles/user-roles.component';

@NgModule({
  declarations: [SettingsComponent, UserRolesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SettingsRoutingModule,
  ],
})
export class SettingsModule {}
