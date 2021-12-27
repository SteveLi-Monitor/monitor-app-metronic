import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { AgGridUtil } from 'src/app/modules/shared/ag-grid/AgGridUtil';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
})
export class AgGridComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private translateService: TranslateService) {
    const subs = AgGridUtil.initColDefTranslations(
      translateService,
      this.columnDefs
    );
    this.subscriptions.push(...subs);
  }

  columnDefs: ColDef[] = [
    { colId: 'Tables.AgGrid.Header.Make', field: 'make' },
    { colId: 'Tables.AgGrid.Header.Model', field: 'model' },
    { colId: 'Tables.AgGrid.Header.Price', field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
