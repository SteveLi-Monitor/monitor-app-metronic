import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxCellRendererComponent } from './ag-grid/cell-renderers/checkbox-cell-renderer/checkbox-cell-renderer.component';

@NgModule({
  declarations: [CheckboxCellRendererComponent],
  imports: [CommonModule],
})
export class SharedModule {}
