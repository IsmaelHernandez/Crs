import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteNovedadesPage } from './reporte-novedades.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteNovedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteNovedadesPageRoutingModule {}
