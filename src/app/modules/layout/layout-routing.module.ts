import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from '../routing';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
