import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-checkbox-cell-renderer',
  templateUrl: './checkbox-cell-renderer.component.html',
  styleUrls: ['./checkbox-cell-renderer.component.scss'],
})
export class CheckboxCellRendererComponent
  implements OnInit, AgRendererComponent
{
  constructor() {}

  params: ICellRendererParams | undefined;

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  onChanged(event: any): void {
    this.params!.setValue!(event.target.checked);
  }
}
