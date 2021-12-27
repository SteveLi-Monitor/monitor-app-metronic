import { TranslateService } from '@ngx-translate/core';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';

export class AgGridUtil {
  public static initColDefTranslations(
    translateService: TranslateService,
    colDefs: ColDef[]
  ): Subscription[] {
    const subscriptions: Subscription[] = [];

    colDefs.forEach((colDef: ColDef) => {
      if (colDef.colId) {
        const sub = translateService
          .get(colDef.colId)
          .subscribe((trans) => (colDef.headerName = trans));

        subscriptions.push(sub);
      }
    });

    return subscriptions;
  }
}
