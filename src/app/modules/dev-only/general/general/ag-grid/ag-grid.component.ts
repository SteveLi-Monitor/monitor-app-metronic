import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
})
export class AgGridComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  gridOptions: GridOptions = {
    columnDefs: [
      {
        headerName: this.translateService.instant('Tables.AgGrid.Header.Make'),
        field: 'make',
      },
      {
        headerName: this.translateService.instant('Tables.AgGrid.Header.Model'),
        field: 'model',
      },
      {
        headerName: this.translateService.instant('Tables.AgGrid.Header.Price'),
        field: 'price',
      },
    ],
  };

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  ngOnInit(): void {}
}
