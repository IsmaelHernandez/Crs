import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteIncidenciaPage } from './reporte-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteIncidenciaPageRoutingModule {}
