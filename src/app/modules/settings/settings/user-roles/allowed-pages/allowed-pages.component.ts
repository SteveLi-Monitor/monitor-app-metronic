import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { AgGridUtil } from 'src/app/modules/shared/ag-grid/AgGridUtil';

@Component({
  selector: 'app-allowed-pages',
  templateUrl: './allowed-pages.component.html',
  styleUrls: ['./allowed-pages.component.scss'],
})
export class AllowedPagesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private translateService: TranslateService) {
    this.initColDefs();
  }

  columnDefs: ColDef[] = [];

  rowData: any[] = [];

  ngOnInit(): void {}

  private initColDefs() {
    this.columnDefs = [
      {
        colId: 'Settings.UserRoles.AllowedPages.ColumnHeader.Section',
        field: 'section',
      },
      {
        colId: 'Settings.UserRoles.AllowedPages.ColumnHeader.Module',
        field: 'module',
      },
      {
        colId: 'Settings.UserRoles.AllowedPages.ColumnHeader.Page',
        field: 'page',
      },
    ];

    const subs = AgGridUtil.initColDefTranslations(
      this.translateService,
      this.columnDefs
    );
    this.subscriptions.push(...subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
