import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GridOptions, ValueGetterParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { AllowedPage } from './allowed-pages.model';

@Component({
  selector: 'app-allowed-pages',
  templateUrl: './allowed-pages.component.html',
  styleUrls: ['./allowed-pages.component.scss'],
})
export class AllowedPagesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private translateService: TranslateService) {}

  gridOptions: GridOptions = {
    columnDefs: [
      {
        headerName: this.translateService.instant(
          'Settings.Shared.AllowedPages.ColumnHeader.Section'
        ),
        field: 'section',
        valueGetter: (params: ValueGetterParams) => {
          const data = params.data as AllowedPage;
          return this.translateService.instant(data.section.description);
        },
      },
      {
        headerName: this.translateService.instant(
          'Settings.Shared.AllowedPages.ColumnHeader.Module'
        ),
        field: 'module',
        valueGetter: (params: ValueGetterParams) => {
          const data = params.data as AllowedPage;
          return this.translateService.instant(data.module.description);
        },
      },
      {
        headerName: this.translateService.instant(
          'Settings.Shared.AllowedPages.ColumnHeader.Page'
        ),
        field: 'page',
        valueGetter: (params: ValueGetterParams) => {
          const data = params.data as AllowedPage;
          return this.translateService.instant(data.page.description);
        },
      },
      {
        headerName: this.translateService.instant(
          'Settings.Shared.AllowedPages.ColumnHeader.IsAuthorized'
        ),
        field: 'isAuthorized',
      },
    ],
  };

  @Input()
  rowData: AllowedPage[] = [];

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
