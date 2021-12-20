import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormControlsComponent } from './forms/form-controls/form-controls.component';

@NgModule({
  declarations: [FormsComponent, FormControlsComponent],
  imports: [CommonModule, FormsRoutingModule],
})
export class FormsModule {}
