import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteRondinPage } from './reporte-rondin.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteRondinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteRondinPageRoutingModule {}
